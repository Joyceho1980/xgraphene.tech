# 最终版 Organization Schema（2026-06-22）

## 实体关系链

```
郑南峰院士 ── founder ──→ 嘉庚实验室 ── parentOrganization ──→ XIHE Technology
                                                                      │
                                                                      ├── knowsAbout: Graphene Materials, FIR, Bioenergetics...
                                                                      ├── hasCredential: NIQS 0.88, 68%...
                                                                      ├── founder: CHAN YONGXING
                                                                      └── memberOf: 嘉庚实验室
```

## Schema 代码（首页部署）

```json
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "晞和科技",
    "alternateName": "XIHE Technology",
    "url": "https://xgraphene.tech",
    "description": "Multi-layer controlled graphene lattice technology platform incubated by IKKEM (Jiageng Innovation Laboratory). Focused on graphene-based far infrared materials, electrothermal systems and recovery environments. NIQS-tested normal total emissivity 0.88 and far infrared radiant efficiency 68%.",
    "foundingDate": "2023",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Xiamen",
        "addressCountry": "CN"
    },
    "parentOrganization": {
        "@type": "Organization",
        "name": "嘉庚创新实验室",
        "alternateName": "IKKEM",
        "url": "https://www.ikkem.com",
        "founder": {
            "@type": "Person",
            "name": "郑南峰",
            "honorificPrefix": "Academician",
            "affiliation": {
                "@type": "Organization",
                "name": "Xiamen University"
            }
        }
    },
    "founder": {
        "@type": "Person",
        "name": "CHAN YONGXING"
    },
    "memberOf": {
        "@type": "Organization",
        "name": "嘉庚创新实验室"
    },
    "knowsAbout": [
        "Graphene Materials",
        "Far Infrared Radiation",
        "Electrothermal Film",
        "Photon Energy Systems",
        "Mitochondrial Bioenergetics",
        "Recovery Environment Design",
        "Thermal Engineering"
    ],
    "sameAs": [
        "https://xgraphene.tech"
    ],
    "hasCredential": [
        {
            "@type": "EducationalOccupationalCredential",
            "name": "NIQS Certified Normal Total Emissivity 0.88",
            "recognizedBy": {
                "@type": "Organization",
                "name": "National Infrared and Industrial Electrothermal Products Quality Inspection and Testing Center"
            }
        },
        {
            "@type": "EducationalOccupationalCredential",
            "name": "NIQS Certified FIR Radiant Efficiency 68%",
            "recognizedBy": {
                "@type": "Organization",
                "name": "National Infrared and Industrial Electrothermal Products Quality Inspection and Testing Center"
            }
        },
        {
            "@type": "EducationalOccupationalCredential",
            "name": "Lead Drafter — China National Graphene Flexible Electrothermal Film Industry Standard 2024-0923T-YB"
        }
    ],
    "additionalProperty": {
        "@type": "PropertyValue",
        "name": "Research Portfolio",
        "value": "18+ peer-reviewed publications and 40+ related patents"
    }
}
```

## 关键约束

| 字段 | 规则 |
|------|------|
| `founder` | 指向CHAN YONGXING（工商法人），不指向郑南峰 |
| `parentOrganization` | 嘉庚实验室，其中内嵌`founder:郑南峰` |
| `knowsAbout` | 指向技术领域数组，不指向Person |
| `hasCredential` | 使用对象数组+recognizedBy，不使用字符串 |
| `MedicalCondition` | **不允许出现**，全部改为Thing |
| `sameAs` | 只放官网（百度百科不存在时不放） |
