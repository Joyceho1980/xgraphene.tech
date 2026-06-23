Set WShell = CreateObject("WScript.Shell")

launcherCmd = "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -File ""D:\CODEX\LAUCH VERSION\DOCUMENTS\SALES-DIRECTOR\skills\python\launch_xihe_crm_hidden.ps1"""

' 0 = hidden window, False = do not wait
WShell.Run launcherCmd, 0, False
