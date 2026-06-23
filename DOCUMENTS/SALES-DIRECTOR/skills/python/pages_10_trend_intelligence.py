import sys
from pathlib import Path

import pandas as pd
import plotly.express as px
import streamlit as st

sys.path.insert(0, str(Path(__file__).parent.parent))
sys.path.insert(0, r"D:\CODEX\LAUCH VERSION\DOCUMENTS\SALES-DIRECTOR\skills\python")

from utils.config import COLORS

try:
    from trend_intelligence_engine import TrendIntelligenceEngine
except Exception:
    TrendIntelligenceEngine = None


st.markdown(
    f"""
<div class="main-header">
    <h1>Trend Intelligence</h1>
    <p style="color:{COLORS['white']};opacity:0.9;margin:0;">Google Trends signal mirror for keyword mining and CRM prioritization</p>
</div>
""",
    unsafe_allow_html=True,
)

st.caption("Paste Google Trends observations, export notes, or keyword lists here. This page converts them into CRM-ready signals.")

engine = TrendIntelligenceEngine() if TrendIntelligenceEngine else None

with st.form("trend_intelligence_form"):
    geo = st.text_input("Geo", value=st.session_state.get("trend_geo", "US"))
    raw_trends = st.text_area(
        "Google Trends / seed notes",
        value=st.session_state.get("trend_seed_input", "recovery suite\ncash-pay wellness\nsports rehab\npet recovery"),
        height=220,
    )
    submitted = st.form_submit_button("Analyze trends", type="primary", use_container_width=True)

if submitted:
    st.session_state.trend_analysis_payload = {
        "geo": geo,
        "raw_trends": raw_trends,
    }

payload = st.session_state.get("trend_analysis_payload")
result = engine.analyze(payload["raw_trends"], payload["geo"]) if engine and payload else None

col1, col2, col3 = st.columns(3)
with col1:
    st.metric("Input lines", len([line for line in (payload or {}).get("raw_trends", raw_trends).splitlines() if line.strip()]))
with col2:
    st.metric("Detected clusters", len(result["signals"]) if result else 0)
with col3:
    st.metric("Top cluster", result["summary"]["top_cluster"] if result else "Unavailable")

if result:
    st.success(f"Trend focus: {result['summary']['top_cluster']}")
    st.caption(f"{result['summary']['trend_direction']} · {result['summary']['recommended_action']}")

st.markdown("---")

tab_signals, tab_keywords, tab_actions = st.tabs(["Signals", "Suggested Keywords", "Actions"])

with tab_signals:
    if result and result["signals"]:
        signal_df = pd.DataFrame(
            [
                {
                    "cluster": item["label"],
                    "score": item["score"],
                    "delta": item["delta"],
                    "direction": item["direction"],
                    "matched_keywords": ", ".join(item["matched_keywords"]),
                }
                for item in result["signals"]
            ]
        )
        fig = px.bar(signal_df, x="cluster", y="score", color="direction", text="score")
        fig.update_layout(height=420, margin=dict(t=10, b=10, l=10, r=10))
        st.plotly_chart(fig, width="stretch")
        st.dataframe(signal_df, use_container_width=True, hide_index=True)
    else:
        st.info("Paste a Google Trends keyword list or trend notes, then click Analyze trends.")

with tab_keywords:
    if result:
        suggestions = engine.suggest_keywords(
            st.session_state.get("keyword_seed_input", "").splitlines(),
            result,
        )
        st.markdown("### CRM tags")
        st.write(result["crm_tags"])
        st.markdown("### Search formulas")
        for formula in result["search_formulas"]:
            st.code(formula, language="text")
        st.markdown("### Suggested keyword expansions")
        st.write(suggestions if suggestions else ["No new keywords inferred yet."])
    else:
        st.info("Analyze trends first.")

with tab_actions:
    if result:
        st.markdown("### Next action")
        st.write(result["summary"]["recommended_action"])
        st.markdown("### Best fit motion")
        if result["summary"]["top_cluster"] == "Facility buildout":
            st.write("Search for new clinics, new locations, and recovery-suite buildouts.")
        elif result["summary"]["top_cluster"] == "Business model shift":
            st.write("Target cash-pay and membership operators with premium positioning.")
        elif result["summary"]["top_cluster"] == "Clinical rehab":
            st.write("Push return-to-play and clinical workflow messaging.")
        else:
            st.write("Use exploratory messaging and validate willingness to pay.")
    else:
        st.info("Analyze trends first.")

