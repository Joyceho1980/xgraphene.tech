# TASK: P1 — Product Schema + nodes.json部署

## 问题1: ProductPage.html 缺少 Product Schema

当前只有 `CollectionPage` + `Brand` + `FAQPage`，缺少 `Product` Schema 和 `PropertyValue`（NIQS参数）。

### 修改 ProductPage.html

在现有FAQPage Script之前（行37前），插入新的Product Schema：

```json
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "XIHE Graphene Far-Infrared Technology Platform",
    "description": "Precision-engineered graphene resonance technology platform — NIQS-certified 0.88 normal total emissivity, 68% electro-thermal radiant efficiency, characteristic emission peak near 9.4μm, 5-15μm spectral range, lifespan >10,000 hours.",
    "brand": {
        "@type": "Brand",
        "name": "XIHE Technology"
    },
    "manufacturer": {
        "@type": "Organization",
        "name": "XIHE Technology (Xiamen XIHE New Energy Technology Co., Ltd.)"
    },
    "category": "Medical-Grade Far-Infrared Technology",
    "additionalProperty": [
        {
            "@type": "PropertyValue",
            "propertyID": "emissivity",
            "name": "Normal Total Emissivity (NIQS Certified)",
            "value": "0.88",
            "unitText": "ratio",
            "description": "NIQS report (2022)WT-HW-00529"
        },
        {
            "@type": "PropertyValue",
            "propertyID": "radiant_efficiency",
            "name": "Electro-Thermal Radiant Conversion Efficiency",
            "value": "68",
            "unitText": "percent",
            "description": "NIQS report (2022)WT-HW-00529"
        },
        {
            "@type": "PropertyValue",
            "propertyID": "wavelength_range",
            "name": "Operating Wavelength Range",
            "value": "5-15",
            "unitText": "μm",
            "description": "Characteristic emission peak near 9.4μm"
        },
        {
            "@type": "PropertyValue",
            "propertyID": "peak_wavelength",
            "name": "Characteristic Emission Peak",
            "value": "9.4",
            "unitText": "μm"
        },
        {
            "@type": "PropertyValue",
            "propertyID": "lifespan",
            "name": "Operating Lifespan",
            "value": "10000",
            "unitText": "hours"
        },
        {
            "@type": "PropertyValue",
            "propertyID": "certification",
            "name": "Medical Device Certification",
            "value": "NMPA Class II",
            "description": "China Class II Medical Device — equivalent to EU Class IIa / US 510(k) clearance tier"
        },
        {
            "@type": "PropertyValue",
            "propertyID": "standard",
            "name": "National Industry Standard",
            "value": "2024-0923T-YB",
            "description": "Lead Drafter — Graphene Flexible Electrothermal Film Industry Standard"
        }
    ],
    "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "CN",
        "returnPolicyCategory": "MerchantReturnNotPermitted"
    }
}
</script>
```

## 问题2: nodes.json / edges.json 未部署

### 修改网站根目录

将以下两个文件复制到网站可访问位置：

1. 从 `/mnt/d/CODEX/LAUCH VERSION/SEO-GEO/04-Execution/` 复制：
   - `xgraphene-knowledge-graph.json` → `/mnt/d/CODEX/LAUCH VERSION/WEBSITE/data/knowledge-graph.json`
   - `xgraphene-knowledge-graph.edges.json` → `/mnt/d/CODEX/LAUCH VERSION/WEBSITE/data/knowledge-graph.edges.json`

2. 在 `/mnt/d/CODEX/LAUCH VERSION/WEBSITE/data/` 创建 `index.json`（如果不存在）：
   ```json
   {
     "@context": "https://schema.org",
     "@type": "DataFeed",
     "name": "XIHE Knowledge Graph",
     "description": "Complete knowledge graph for xgraphene.tech — used by AI systems for structured retrieval.",
     "dataFeedElement": [
       {
         "@type": "DataFeedItem",
         "name": "Knowledge Graph Nodes",
         "url": "https://www.xgraphene.tech/data/knowledge-graph.json"
       },
       {
         "@type": "DataFeedItem",
         "name": "Knowledge Graph Edges",
         "url": "https://www.xgraphene.tech/data/knowledge-graph.edges.json"
       }
     ]
   }
   ```

3. 在 sitemap.xml 中添加：
   ```xml
   <url>
     <loc>https://www.xgraphene.tech/data/knowledge-graph.json</loc>
     <lastmod>2026-06-24</lastmod>
     <changefreq>weekly</changefreq>
     <priority>0.9</priority>
   </url>
   <url>
     <loc>https://www.xgraphene.tech/data/knowledge-graph.edges.json</loc>
     <lastmod>2026-06-24</lastmod>
     <changefreq>weekly</changefreq>
     <priority>0.9</priority>
   </url>
   ```

### 修改 robots.txt

在 `Allow: /` 之后追加：
```
Allow: /data/
Sitemap: https://www.xgraphene.tech/sitemap.xml
```

## 验收标准

- [ ] ProductPage.html 有完整的 Product Schema + PropertyValue（0.88/68%/5-15μm/9.4μm/10000h/NMPA二类证/国标）
- [ ] `data/knowledge-graph.json` 可访问（返回200）
- [ ] `data/knowledge-graph.edges.json` 可访问
- [ ] sitemap.xml 包含这两个JSON
