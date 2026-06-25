# TASK-018: Remove or Redirect Duplicate Hub Index (mitochondrial-health.html)

## Target
**File:** `/WEBSITE/pages/SCIENCE/KNOWLEDGE/Mitochondria/mitochondrial-health.html`

## What to Do

`mitochondrial-health.html` is a duplicate/older version of the Hub Index (`index.html`). The canonical Hub Index is already at `index.html` (with Quick Answer, A/B/C grading, proper Schema, etc.).

### Option A: 301 Redirect (Recommended)
Replace the file content with an HTML redirect:

```html
<!DOCTYPE html>
<html lang="en" translate="no">
<head>
<meta charset="UTF-8">
<meta name="google" content="notranslate">
<title>Mitochondrial Health Hub</title>
<link rel="canonical" href="https://www.xgraphene.tech/SCIENCE/KNOWLEDGE/Mitochondria/">
<meta http-equiv="refresh" content="0; url=/SCIENCE/KNOWLEDGE/Mitochondria/">
<script>window.location.href='/SCIENCE/KNOWLEDGE/Mitochondria/';</script>
</head>
<body>
<p>Redirecting to <a href="/SCIENCE/KNOWLEDGE/Mitochondria/">Mitochondria Hub</a>...</p>
</body>
</html>
```

### Option B: Delete
If you're OK with `mitochondrial-health.html` returning 404, just delete it. But 301 is better for SEO — any old links pointing to `mitochondrial-health.html` will pass link equity to the proper Hub Index.

## Decision
Use Option A (301 redirect). This preserves any existing links to `mitochondrial-health.html` and funnels traffic to the canonical `index.html`.
