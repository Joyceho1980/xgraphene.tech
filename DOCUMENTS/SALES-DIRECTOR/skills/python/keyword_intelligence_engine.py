from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Dict, Iterable, List, Sequence


@dataclass
class KeywordSignal:
    keyword: str
    category: str
    score: float
    source: str = "rule"
    notes: str = ""


@dataclass
class KeywordProfile:
    lead_name: str
    company_name: str
    normalized_keywords: List[str] = field(default_factory=list)
    signals: List[KeywordSignal] = field(default_factory=list)
    clusters: Dict[str, List[str]] = field(default_factory=dict)
    primary_angle: str = ""
    geo_strategy: Dict[str, Any] = field(default_factory=dict)


class KeywordIntelligenceEngine:
    """
    Rule-first keyword engine for XIHE.

    This class is designed as the deterministic core that a future CRM UI,
    Gemini integration, or n8n workflow can call.
    """

    SEGMENT_RULES: Dict[str, Sequence[str]] = {
        "pt_sports_rehab": (
            "physical therapy",
            "sports rehab",
            "sports rehabilitation",
            "orthopedic rehab",
            "return to play",
            "post-op",
        ),
        "recovery_wellness": (
            "recovery",
            "recovery suite",
            "wellness",
            "performance recovery",
            "premium recovery",
            "cash-pay",
        ),
        "clinical_research": (
            "fellowship",
            "research",
            "education",
            "clinical innovation",
            "pilot",
            "evaluation",
        ),
    }

    MODALITY_RULES: Dict[str, Sequence[str]] = {
        "pemf_adjacent": ("pemf", "electrostimulation"),
        "red_light_adjacent": ("red light", "photobiomodulation"),
        "thermal_recovery": ("infrared", "far infrared", "heat therapy"),
        "recovery_stack": ("cryotherapy", "compression", "sauna", "hyperbaric"),
    }

    PAIN_RULES: Dict[str, Sequence[str]] = {
        "workflow_fit": ("workflow", "integration", "adjunct", "complement"),
        "patient_experience": ("comfort", "experience", "patient-friendly"),
        "return_to_play": ("return to play", "athlete recovery", "performance"),
        "premium_revenue": ("premium", "cash-pay", "membership", "self-pay"),
        "evidence_credibility": ("evidence", "research", "clinical", "fellowship"),
    }

    GEO_RULES: Dict[str, Dict[str, Any]] = {
        "US": {
            "tone": "commercial-clinical",
            "priority_clusters": ["workflow_fit", "patient_experience", "premium_revenue"],
            "notes": "Lead with workflow fit and differentiated recovery value.",
        },
        "UK": {
            "tone": "measured-clinical",
            "priority_clusters": ["workflow_fit", "evidence_credibility"],
            "notes": "Use calm, evidence-aware positioning.",
        },
        "Middle East": {
            "tone": "premium-institutional",
            "priority_clusters": ["premium_revenue", "patient_experience"],
            "notes": "Premium service presentation can be more explicit.",
        },
    }

    ANGLE_PRIORITY: Sequence[str] = (
        "facility_buildout",
        "return_to_play",
        "workflow_fit",
        "patient_experience",
        "premium_revenue",
        "evidence_credibility",
    )

    def MapLeadToKeywords(self, lead_data: Dict[str, Any]) -> KeywordProfile:
        """
        Analyze a lead record and assign XIHE-relevant keyword signals.
        """
        text_blob = self._build_text_blob(lead_data)
        lead_name = str(lead_data.get("lead_name") or lead_data.get("decision_maker") or "")
        company_name = str(lead_data.get("company_name") or lead_data.get("account_name") or "")

        signals = self._collect_signals(text_blob)
        normalized_keywords = sorted({signal.keyword for signal in signals})
        clusters = self._group_clusters(signals)
        primary_angle = self.GenerateAngleFromKeywords(
            normalized_keywords,
            {
                "signals": signals,
                "company_name": company_name,
                "segment": lead_data.get("segment", ""),
            },
        )
        geo_strategy = self.UpdateGeoStrategy(
            str(lead_data.get("country") or lead_data.get("geo_location") or ""),
            normalized_keywords,
        )

        return KeywordProfile(
            lead_name=lead_name,
            company_name=company_name,
            normalized_keywords=normalized_keywords,
            signals=signals,
            clusters=clusters,
            primary_angle=primary_angle,
            geo_strategy=geo_strategy,
        )

    def GenerateAngleFromKeywords(
        self,
        keywords: Sequence[str],
        product_context: Dict[str, Any] | None = None,
    ) -> str:
        """
        Convert keyword signals into a recommended XIHE narrative angle.
        """
        product_context = product_context or {}
        scorecard = {name: 0.0 for name in self.ANGLE_PRIORITY}

        for keyword in keywords:
            lowered = keyword.lower()
            if any(term in lowered for term in ("recovery suite", "recovery room", "recovery environment", "buildout", "new location", "coming soon")):
                scorecard["facility_buildout"] += 2.0
                scorecard["premium_revenue"] += 0.5
                scorecard["workflow_fit"] += 0.25
            for cluster_name, phrases in self.PAIN_RULES.items():
                if any(phrase in lowered for phrase in phrases):
                    scorecard[cluster_name] += 1.0

            if "pemf" in lowered or "cryotherapy" in lowered or "red light" in lowered:
                scorecard["workflow_fit"] += 0.5
            if "fellowship" in lowered or "research" in lowered:
                scorecard["evidence_credibility"] += 0.5
            if "athlete" in lowered or "return to play" in lowered:
                scorecard["return_to_play"] += 0.75

        best_score = max(scorecard.values()) if scorecard else 0.0
        if best_score <= 0:
            if any(term in " ".join(keywords).lower() for term in ("recovery suite", "recovery room", "recovery environment", "buildout", "new location", "coming soon")):
                best_cluster = "facility_buildout"
            elif any(term in " ".join(keywords).lower() for term in ("cash-pay", "membership", "premium")):
                best_cluster = "premium_revenue"
            else:
                best_cluster = "workflow_fit"
        else:
            best_cluster = max(self.ANGLE_PRIORITY, key=lambda key: scorecard.get(key, 0.0))
        return self._angle_text(best_cluster, product_context)

    def UpdateGeoStrategy(self, geo_location: str, keywords: Sequence[str]) -> Dict[str, Any]:
        """
        Adjust the keyword strategy by geography.
        """
        geo_key = (geo_location or "").strip()
        strategy = dict(self.GEO_RULES.get(geo_key, {
            "tone": "balanced",
            "priority_clusters": ["workflow_fit"],
            "notes": "Use the standard XIHE workflow-fit positioning.",
        }))

        matched_priority_keywords = [
            keyword
            for keyword in keywords
            if any(
                priority.replace("_", " ") in keyword.lower()
                or priority in keyword.lower()
                for priority in strategy["priority_clusters"]
            )
        ]

        strategy["geo_location"] = geo_key or "default"
        strategy["matched_priority_keywords"] = matched_priority_keywords
        strategy["recommended_focus"] = self._recommend_geo_focus(strategy["priority_clusters"])
        return strategy

    def build_heatmap_rows(self, profiles: Iterable[KeywordProfile]) -> List[Dict[str, Any]]:
        """
        Build rows suitable for a heatmap or table visualization.
        """
        rows: List[Dict[str, Any]] = []
        for profile in profiles:
            for signal in profile.signals:
                rows.append(
                    {
                        "company_name": profile.company_name,
                        "lead_name": profile.lead_name,
                        "keyword": signal.keyword,
                        "category": signal.category,
                        "score": signal.score,
                        "primary_angle": profile.primary_angle,
                    }
                )
        return rows

    def build_strategy_matrix_point(self, profile: KeywordProfile) -> Dict[str, Any]:
        """
        Create a simple point for a strategy matrix chart.
        """
        technology_relevance = sum(
            signal.score for signal in profile.signals if signal.category in {"modality", "segment"}
        )
        pain_intensity = sum(
            signal.score for signal in profile.signals if signal.category == "pain_point"
        )
        return {
            "company_name": profile.company_name,
            "lead_name": profile.lead_name,
            "x_technology_relevance": round(technology_relevance, 2),
            "y_pain_intensity": round(pain_intensity, 2),
            "primary_angle": profile.primary_angle,
        }

    def build_keyword_flow(self, profile: KeywordProfile) -> List[Dict[str, str]]:
        """
        Represent the suggested lifecycle stages for the lead's keywords.
        """
        return [
            {"stage": "discovered", "detail": ", ".join(profile.normalized_keywords[:5])},
            {"stage": "clustered", "detail": ", ".join(sorted(profile.clusters.keys()))},
            {"stage": "approved", "detail": profile.primary_angle},
            {"stage": "used_in_search", "detail": "Ready for Google and LinkedIn formulas"},
            {"stage": "used_in_crm", "detail": "Ready for CRM tag writeback"},
            {"stage": "used_in_outreach", "detail": "Ready for angle-specific drafting"},
        ]

    def _build_text_blob(self, lead_data: Dict[str, Any]) -> str:
        parts = [
            str(lead_data.get("company_name", "")),
            str(lead_data.get("lead_name", "")),
            str(lead_data.get("segment", "")),
            str(lead_data.get("raw_keywords", "")),
            str(lead_data.get("bio", "")),
            str(lead_data.get("website_notes", "")),
            str(lead_data.get("linkedin_notes", "")),
            str(lead_data.get("pain_points", "")),
            str(lead_data.get("modality_stack", "")),
            str(lead_data.get("service_lines", "")),
        ]
        return " | ".join(part for part in parts if part).lower()

    def _collect_signals(self, text_blob: str) -> List[KeywordSignal]:
        signals: List[KeywordSignal] = []

        def add_matches(rule_name: str, phrases: Sequence[str], category: str, base_score: float) -> None:
            for phrase in phrases:
                if phrase in text_blob:
                    signals.append(
                        KeywordSignal(
                            keyword=phrase,
                            category=category,
                            score=base_score,
                            notes=f"Matched {rule_name}",
                        )
                    )

        for rule_name, phrases in self.SEGMENT_RULES.items():
            add_matches(rule_name, phrases, "segment", 1.0)
        for rule_name, phrases in self.MODALITY_RULES.items():
            add_matches(rule_name, phrases, "modality", 1.1)
        for rule_name, phrases in self.PAIN_RULES.items():
            add_matches(rule_name, phrases, "pain_point", 1.2)

        return signals

    def _group_clusters(self, signals: Sequence[KeywordSignal]) -> Dict[str, List[str]]:
        clusters: Dict[str, List[str]] = {}
        for signal in signals:
            clusters.setdefault(signal.category, [])
            if signal.keyword not in clusters[signal.category]:
                clusters[signal.category].append(signal.keyword)
        return clusters

    def _angle_text(self, cluster_name: str, product_context: Dict[str, Any]) -> str:
        angle_map = {
            "facility_buildout": "Recovery suite buildout and facility ROI",
            "return_to_play": "Athlete recovery and return-to-play support",
            "workflow_fit": "Complementary recovery workflow fit beside existing modalities",
            "patient_experience": "Patient-friendly recovery environment and comfort support",
            "premium_revenue": "Premium recovery add-on and cash-pay differentiation",
            "evidence_credibility": "Evidence-aware evaluation and program review discussion",
        }
        base = angle_map.get(cluster_name, "Standard XIHE workflow-fit positioning")
        company_name = product_context.get("company_name")
        if company_name:
            return f"{base} for {company_name}"
        return base

    def _recommend_geo_focus(self, priority_clusters: Sequence[str]) -> List[str]:
        focus_map = {
            "workflow_fit": "Use workflow and integration language",
            "patient_experience": "Use patient-friendly and comfort-oriented language",
            "premium_revenue": "Use premium recovery and service differentiation language",
            "evidence_credibility": "Use evidence-aware and evaluation language",
        }
        return [focus_map.get(cluster, cluster) for cluster in priority_clusters]


if __name__ == "__main__":
    sample_lead = {
        "company_name": "Beacon Orthopaedics & Sports Medicine",
        "lead_name": "Mike Slemons",
        "country": "US",
        "segment": "Sports medicine and PT",
        "website_notes": "Integrated sports medicine, physical therapy, recovery workflow, education and fellowship.",
        "linkedin_notes": "Sports medicine outreach and athlete programs.",
        "pain_points": "Return to play, workflow fit, differentiated patient recovery experience.",
        "modality_stack": "PT, sports rehab, post-op recovery",
    }

    engine = KeywordIntelligenceEngine()
    profile = engine.MapLeadToKeywords(sample_lead)
    print(profile)
