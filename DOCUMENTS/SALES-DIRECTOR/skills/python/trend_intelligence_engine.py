from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Dict, List, Sequence


@dataclass
class TrendSignal:
    keyword: str
    trend_score: float
    trend_delta: float
    geo: str = "US"
    source: str = "manual"


class TrendIntelligenceEngine:
    """
    Simple trend-intelligence layer for XIHE.

    It works with pasted Google Trends notes, manual observations, or later
    connector data, so the CRM gets value immediately without waiting for an
    external API integration.
    """

    TREND_RULES: Dict[str, Dict[str, Any]] = {
        "recovery_suite": {
            "label": "Facility buildout",
            "keywords": ("recovery suite", "recovery room", "recovery environment", "new location", "coming soon"),
            "crm_tags": ("BIZ_Buildout", "INT_Expansion", "FIT_High_CapEx"),
            "next_searches": (
                '"recovery suite" AND ("coming soon" OR "new location") -jobs',
                '"recovery room" AND ("PT clinic" OR "sports rehab")',
            ),
        },
        "cash_pay": {
            "label": "Business model shift",
            "keywords": ("cash-pay", "cash pay", "membership", "premium recovery", "non-insurance revenue"),
            "crm_tags": ("BIZ_Cash_Pay", "REV_Diversification", "FIT_Premium"),
            "next_searches": (
                '"cash-pay" AND ("wellness" OR "sports medicine")',
                '"membership" AND ("recovery" OR "wellness")',
            ),
        },
        "sports_rehab": {
            "label": "Clinical rehab",
            "keywords": ("sports rehab", "sports medicine clinic", "orthopedic rehab", "return to play"),
            "crm_tags": ("SEG_Sports_Med", "INT_Return_To_Play", "FIT_Clinical"),
            "next_searches": (
                'site:linkedin.com/in ("Rehab Director" OR "PT Clinic Owner") AND "sports rehab"',
                '"sports medicine clinic" AND "return to play"',
            ),
        },
        "pet_recovery": {
            "label": "New vertical",
            "keywords": ("pet recovery", "pet wellness", "veterinary expansion", "canine rehab"),
            "crm_tags": ("SEG_Veterinary", "INT_Pet_Wellness", "FIT_Exploratory"),
            "next_searches": (
                '"pet recovery" OR "canine rehab"',
                '"veterinary expansion" AND recovery',
            ),
        },
    }

    def analyze(self, raw_text: str, geo: str = "US") -> Dict[str, Any]:
        terms = self._parse_terms(raw_text)
        signals = self._score_terms(terms, geo)
        summary = self._build_summary(signals)
        return {
            "geo": geo or "US",
            "input_terms": terms,
            "signals": signals,
            "summary": summary,
            "crm_tags": self._aggregate_tags(signals),
            "search_formulas": self._aggregate_search_formulas(signals),
            "next_account_pools": self._build_account_pools(signals),
        }

    def suggest_keywords(self, existing_keywords: Sequence[str], trend_result: Dict[str, Any]) -> List[str]:
        existing = {kw.lower().strip() for kw in existing_keywords if kw and kw.strip()}
        suggestions: List[str] = []
        for signal in trend_result.get("signals", []):
            for phrase in signal.get("matched_keywords", []):
                if phrase not in existing and phrase not in suggestions:
                    suggestions.append(phrase)
        return suggestions[:20]

    def _parse_terms(self, raw_text: str) -> List[str]:
        if not raw_text:
            return []
        terms: List[str] = []
        for chunk in raw_text.replace("\r", "\n").split("\n"):
            cleaned = chunk.strip(" ,;\t")
            if cleaned:
                terms.append(cleaned)
        return terms

    def _score_terms(self, terms: Sequence[str], geo: str) -> List[Dict[str, Any]]:
        signals: List[Dict[str, Any]] = []
        text = " | ".join(terms).lower()
        for cluster_key, meta in self.TREND_RULES.items():
            matched = [kw for kw in meta["keywords"] if kw in text]
            if not matched:
                continue
            score = 0.0
            delta = 0.0
            for phrase in matched:
                if phrase in {"recovery suite", "recovery room", "new location", "coming soon"}:
                    score += 3.0
                    delta += 1.8
                elif phrase in {"cash-pay", "cash pay", "membership", "premium recovery"}:
                    score += 2.5
                    delta += 1.3
                elif phrase in {"sports rehab", "sports medicine clinic", "orthopedic rehab", "return to play"}:
                    score += 2.0
                    delta += 1.0
                else:
                    score += 1.5
                    delta += 0.7
            signals.append(
                {
                    "cluster": cluster_key,
                    "label": meta["label"],
                    "score": round(score, 2),
                    "delta": round(delta, 2),
                    "matched_keywords": matched,
                    "crm_tags": list(meta["crm_tags"]),
                    "search_formulas": list(meta["next_searches"]),
                    "geo": geo or "US",
                    "direction": "rising" if delta >= 1.0 else "stable",
                }
            )
        return sorted(signals, key=lambda item: (item["score"], item["delta"]), reverse=True)

    def _build_summary(self, signals: Sequence[Dict[str, Any]]) -> Dict[str, Any]:
        if not signals:
            return {
                "top_cluster": "none",
                "trend_direction": "insufficient data",
                "recommended_action": "Paste Google Trends notes or a keyword list to generate trend signals.",
            }
        top = signals[0]
        if top["cluster"] == "recovery_suite":
            action = "Prioritize facility-buildout leads and new locations."
        elif top["cluster"] == "cash_pay":
            action = "Target clinics seeking premium revenue diversification."
        elif top["cluster"] == "sports_rehab":
            action = "Focus on PT and sports rehab operators with return-to-play messaging."
        else:
            action = "Explore the new vertical with exploratory messaging."
        return {
            "top_cluster": top["label"],
            "trend_direction": top["direction"],
            "recommended_action": action,
        }

    def _aggregate_tags(self, signals: Sequence[Dict[str, Any]]) -> List[str]:
        tags: List[str] = []
        for signal in signals:
            for tag in signal.get("crm_tags", []):
                if tag not in tags:
                    tags.append(tag)
        return tags

    def _aggregate_search_formulas(self, signals: Sequence[Dict[str, Any]]) -> List[str]:
        formulas: List[str] = []
        for signal in signals:
            for formula in signal.get("search_formulas", []):
                if formula not in formulas:
                    formulas.append(formula)
        return formulas[:10]

    def _build_account_pools(self, signals: Sequence[Dict[str, Any]]) -> List[Dict[str, Any]]:
        pools: List[Dict[str, Any]] = []
        for signal in signals:
            if signal["cluster"] == "recovery_suite":
                pools.append(
                    {
                        "pool": "Facility buildout accounts",
                        "buyer_type": "Facility Owner / Clinic Founder",
                        "why_now": "They are planning a new location or premium recovery room.",
                        "best_next_step": "Search for coming soon / new location / buildout signals.",
                    }
                )
            elif signal["cluster"] == "cash_pay":
                pools.append(
                    {
                        "pool": "Cash-pay growth accounts",
                        "buyer_type": "Clinic Owner / Administrator",
                        "why_now": "They want premium revenue and less insurance dependence.",
                        "best_next_step": "Target membership and cash-pay clinics already selling add-on services.",
                    }
                )
            elif signal["cluster"] == "sports_rehab":
                pools.append(
                    {
                        "pool": "Sports rehab accounts",
                        "buyer_type": "PT Clinic Owner / Rehab Director",
                        "why_now": "They already sell return-to-play or recovery services.",
                        "best_next_step": "Search sports rehab clinics and performance centers with existing recovery stacks.",
                    }
                )
            elif signal["cluster"] == "pet_recovery":
                pools.append(
                    {
                        "pool": "Pet recovery accounts",
                        "buyer_type": "Veterinary Owner / Pet wellness founder",
                        "why_now": "They are exploring a new premium wellness vertical.",
                        "best_next_step": "Search veterinary rehab and high-end pet wellness operators.",
                    }
                )
        return pools
