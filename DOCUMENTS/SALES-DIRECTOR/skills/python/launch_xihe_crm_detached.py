from __future__ import annotations

import socket
import subprocess
import time
import webbrowser
from datetime import datetime
from pathlib import Path


PYTHON = Path(r"C:\Users\Administrator.DESKTOP-PCHA21E\AppData\Local\Programs\Python\Python312\python.exe")
APP_PATH = Path(r"D:\CODEX\XIHE-CRM\app.py")
WORKING_DIR = APP_PATH.parent
LOG_DIR = Path(r"D:\CODEX\LAUCH VERSION\DOCUMENTS\SALES-DIRECTOR\logs")
PID_FILE = LOG_DIR / "xihe-crm-streamlit.pid"
STDOUT_LOG = LOG_DIR / "xihe-crm-streamlit.out.log"
STDERR_LOG = LOG_DIR / "xihe-crm-streamlit.err.log"
HEALTH_LOG = LOG_DIR / "xihe-crm-health.log"
PORT = 8501
STREAMLIT_ADDRESS = "0.0.0.0"
# Dual-bind check: 127.0.0.1 + LAN IP (often more stable in browser sessions)
HEALTH_HOSTS = ("127.0.0.1", "localhost", "192.168.1.9")


def _timestamp() -> str:
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def _write_health_log(message: str):
    HEALTH_LOG.parent.mkdir(parents=True, exist_ok=True)
    with HEALTH_LOG.open("a", encoding="utf-8") as f:
        f.write(f"[{_timestamp()}] {message}\n")


def port_is_open(host: str, port: int) -> bool:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        sock.settimeout(0.75)
        return sock.connect_ex((host, port)) == 0


def creation_flag_candidates() -> list[int]:
    detached = getattr(subprocess, "DETACHED_PROCESS", 0)
    new_group = getattr(subprocess, "CREATE_NEW_PROCESS_GROUP", 0)
    breakaway = getattr(subprocess, "CREATE_BREAKAWAY_FROM_JOB", 0)

    candidates = []
    if detached and new_group and breakaway:
        candidates.append(detached | new_group | breakaway)
    if detached and new_group:
        candidates.append(detached | new_group)
    if new_group:
        candidates.append(new_group)
    # 0 = no creation flags (safe fallback)
    candidates.append(0)
    return candidates


def main() -> int:
    LOG_DIR.mkdir(parents=True, exist_ok=True)
    _write_health_log("Launch request received")

    # Already running? Check all hosts.
    for host in HEALTH_HOSTS:
        if port_is_open(host, PORT):
            _write_health_log(f"Already running on {host}:{PORT} — opening browser")
            webbrowser.open_new_tab(f"http://{host}:{PORT}/?_t={int(time.time())}")
            return 0

    # Launch detached process
    _write_health_log("Starting Streamlit process...")
    process = None
    with STDOUT_LOG.open("ab") as stdout_handle, STDERR_LOG.open("ab") as stderr_handle:
        for flags in creation_flag_candidates():
            try:
                kwargs = {
                    "args": [
                        str(PYTHON),
                        "-m",
                        "streamlit",
                        "run",
                        str(APP_PATH),
                        "--server.headless",
                        "true",
                        "--server.port",
                        str(PORT),
                        "--server.address",
                        STREAMLIT_ADDRESS,
                        "--server.fileWatcherType",
                        "none",
                    ],
                    "cwd": WORKING_DIR,
                    "stdin": subprocess.DEVNULL,
                    "stdout": stdout_handle,
                    "stderr": stderr_handle,
                }
                if flags != 0:
                    kwargs["creationflags"] = flags
                # close_fds=True is incompatible with creationflags on Windows
                if flags == 0:
                    kwargs["close_fds"] = True
                process = subprocess.Popen(**kwargs)
                _write_health_log(f"Process started with flags={flags}")
                break
            except (PermissionError, OSError, ValueError) as e:
                _write_health_log(f"Failed with flags={flags}: {e}")
                continue

    if process is None:
        _write_health_log("FATAL: Unable to launch detached Streamlit process")
        raise PermissionError("Unable to launch detached Streamlit process with any creation flags.")

    PID_FILE.write_text(str(process.pid), encoding="ascii")
    _write_health_log(f"Process launched (PID={process.pid}), waiting for readiness...")

    # Health check: poll all hosts for up to 20s
    for attempt in range(40):
        for host in HEALTH_HOSTS:
            if port_is_open(host, PORT):
                _write_health_log(f"READY on {host}:{PORT} (attempt {attempt + 1})")
                # Open fresh browser tab with cache-busting parameter
                url = f"http://{host}:{PORT}/?_t={int(time.time())}"
                _write_health_log(f"Opening browser: {url}")
                webbrowser.open_new_tab(url)
                return 0
        try:
            if process.poll() is not None:
                _write_health_log(f"Process exited early with code {process.returncode}")
                break
        except Exception:
            break
        time.sleep(0.5)

    hosts_checked = ", ".join(f"{h}:{PORT}" for h in HEALTH_HOSTS)
    _write_health_log(f"FATAL: CRM did not become ready on any host ({hosts_checked})")
    # Try to get stderr tail for diagnostics
    try:
        if STDERR_LOG.exists():
            with STDERR_LOG.open("r", encoding="utf-8", errors="replace") as f:
                lines = f.readlines()
                tail = "".join(lines[-5:]) if lines else "(empty)"
                _write_health_log(f"Last stderr lines: {tail}")
    except Exception:
        pass
    raise RuntimeError(f"CRM did not become ready. Checked: {hosts_checked}.")


if __name__ == "__main__":
    raise SystemExit(main())
