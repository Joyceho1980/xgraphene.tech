from __future__ import annotations

from typing import Any, Dict, List, Optional

from pydantic import BaseModel, Field

from keyword_intelligence_engine import KeywordIntelligenceEngine

try:
    from fastapi import FastAPI
except ImportError:  # pragma: no cover
    FastAPI = None  # type: ignore[assignment]


class LeadPayload(BaseModel):
    company_name: str = ""
    lead_name: str = ""
    decision_maker: str = ""
    country: str = ""
    geo_location: str = ""
    segment: str = ""
    bio: str = ""
    website_notes: str = ""
    linkedin_notes: str = ""
    pain_points: str = ""
    modality_stack: str = ""
    service_lines: str = ""


class AnglePayload(BaseModel):
    keywords: List[str] = Field(default_factory=list)
    product_context: Dict[str, Any] = Field(default_factory=dict)


class GeoPayload(BaseModel):
    geo_location: str = ""
    keywords: List[str] = Field(default_factory=list)


engine = KeywordIntelligenceEngine()


def _serialize_profile(profile: Any) -> Dict[str, Any]:
    return {
        "lead_name": profile.lead_name,
        "company_name": profile.company_name,
        "normalized_keywords": profile.normalized_keywords,
        "clusters": profile.clusters,
        "primary_angle": profile.primary_angle,
        "geo_strategy": profile.geo_strategy,
        "signals": [
            {
                "keyword": signal.keyword,
                "category": signal.category,
                "score": signal.score,
                "source": signal.source,
                "notes": signal.notes,
            }
            for signal in profile.signals
        ],
    }


def create_app() -> Optional["FastAPI"]:
    if FastAPI is None:
        return None

    app = FastAPI(
        title="XIHE Keyword Intelligence API",
        description="API wrapper for XIHE keyword clustering, angle generation, and geo strategy.",
        version="0.1.0",
    )

    @app.get("/health")
    def health() -> Dict[str, str]:
        return {"status": "ok"}

    @app.post("/keywords/map-lead")
    def map_lead(payload: LeadPayload) -> Dict[str, Any]:
        profile = engine.MapLeadToKeywords(payload.model_dump())
        return _serialize_profile(profile)

    @app.post("/keywords/generate-angle")
    def generate_angle(payload: AnglePayload) -> Dict[str, Any]:
        angle = engine.GenerateAngleFromKeywords(payload.keywords, payload.product_context)
        return {"primary_angle": angle}

    @app.post("/keywords/update-geo-strategy")
    def update_geo_strategy(payload: GeoPayload) -> Dict[str, Any]:
        strategy = engine.UpdateGeoStrategy(payload.geo_location, payload.keywords)
        return strategy

    @app.post("/keywords/heatmap")
    def heatmap(payloads: List[LeadPayload]) -> List[Dict[str, Any]]:
        profiles = [engine.MapLeadToKeywords(payload.model_dump()) for payload in payloads]
        return engine.build_heatmap_rows(profiles)

    @app.post("/keywords/strategy-matrix")
    def strategy_matrix(payloads: List[LeadPayload]) -> List[Dict[str, Any]]:
        profiles = [engine.MapLeadToKeywords(payload.model_dump()) for payload in payloads]
        return [engine.build_strategy_matrix_point(profile) for profile in profiles]

    @app.post("/keywords/flow")
    def keyword_flow(payload: LeadPayload) -> List[Dict[str, str]]:
        profile = engine.MapLeadToKeywords(payload.model_dump())
        return engine.build_keyword_flow(profile)

    return app


app = create_app()


if __name__ == "__main__":
    if FastAPI is None:
        raise RuntimeError("FastAPI is not installed. Install fastapi and uvicorn to run the API.")

    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8011)
