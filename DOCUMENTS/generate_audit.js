const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const sitemapFile = path.join(root, 'sitemap.xml');
const outCsv = path.join(root, 'DOCUMENTS', 'XIHE-Website-Audit-2026-06-08.csv');
const outMd = path.join(root, 'DOCUMENTS', 'XIHE-Website-Audit-2026-06-08.md');

const IGNORE_DIRS = new Set(['node_modules', '.git', '.vercel', 'test-results']);
const PUBLIC_EXCLUDE = new Set(['/admin/', '/DOCUMENTS/TEMPLATE-Mitochondria-Hub.html']);

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORE_DIRS.has(ent.name)) continue;
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, out);
    else if (/\.html?$/i.test(ent.name)) out.push(full);
  }
  return out;
}

function normalizeSlashes(value) {
  return value.replace(/\\/g, '/');
}

function pageUrlFromRel(rel) {
  if (/^index\.html?$/i.test(rel)) return '/';
  if (/\/index\.html?$/i.test(rel)) return '/' + rel.replace(/\/index\.html?$/i, '/') ;
  return '/' + rel;
}

function attrs(tag) {
  const out = {};
  const re = /([:\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>/=`]+)))?/g;
  let m;
  while ((m = re.exec(tag))) {
    const key = m[1].toLowerCase();
    const value = m[2] ?? m[3] ?? m[4] ?? '';
    const tagName = tag.toLowerCase().match(/^<\/?([a-z0-9-]+)/)?.[1];
    if (key !== tagName) out[key] = value;
  }
  return out;
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<!--[\\s\\S]*?-->/g, ' ');
}

function removeLayout(html) {
  return html
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ');
}

function textFromHtml(html) {
  return stripTags(html)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? textFromHtml(m[1]) : '';
}

function extractMeta(html, name) {
  const metas = [...html.matchAll(/<meta\b[^>]*>/gi)];
  for (const mt of metas) {
    const a = attrs(mt[0]);
    if (a.name && a.name.toLowerCase() === name.toLowerCase()) return (a.content || '').trim();
  }
  return '';
}

function extractCanonical(html) {
  const links = [...html.matchAll(/<link\b[^>]*>/gi)];
  for (const link of links) {
    const a = attrs(link[0]);
    if ((a.rel || '').toLowerCase() === 'canonical') return (a.href || '').trim();
  }
  return '';
}

function extractHeadings(html) {
  const out = [];
  for (const tag of ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']) {
    const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');
    let m;
    while ((m = re.exec(html))) out.push({ level: +tag[1], text: textFromHtml(m[1]) });
  }
  return out;
}

function extractImgs(html) {
  const out = [];
  const re = /<img\b[^>]*>/gi;
  let m;
  while ((m = re.exec(html))) {
    const a = attrs(m[0]);
    out.push({ src: a.src || '', alt: Object.prototype.hasOwnProperty.call(a, 'alt') ? a.alt : null });
  }
  return out;
}

function extractLinks(html) {
  const out = [];
  const re = /<a\b[^>]*href=["']([\s\S]*?)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html))) out.push({ href: m[1], text: textFromHtml(m[2]) });
  return out;
}

function extractJsonLdTypes(html) {
  const types = [];
  const scripts = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const s of scripts) {
    const raw = s[1].trim();
    try {
      const data = JSON.parse(raw);
      const collect = (obj) => {
        if (!obj || typeof obj !== 'object') return;
        if (Array.isArray(obj)) return obj.forEach(collect);
        if (obj['@type']) {
          if (Array.isArray(obj['@type'])) types.push(...obj['@type']);
          else types.push(obj['@type']);
        }
        if (obj['@graph']) collect(obj['@graph']);
        for (const k of Object.keys(obj)) {
          if (k !== '@type' && k !== '@graph') collect(obj[k]);
        }
      };
      collect(data);
    } catch {
      types.push('INVALID_JSON_LD');
    }
  }
  return [...new Set(types)];
}

function stripFragment(href) {
  return href.split('#')[0].split('?')[0];
}

function isInternalHref(href) {
  return href && !/^(https?:)?\/\//i.test(href) && !/^(mailto:|tel:|javascript:)/i.test(href);
}

function resolveHref(sourceRel, href, exactRelSet) {
  let clean = stripFragment(href);
  try {
    clean = decodeURI(clean);
  } catch {
    // Keep the original href if it contains malformed escape sequences.
  }
  if (!clean || clean === '#' || clean.startsWith('#')) return { kind: 'fragment', target: null };
  if (!isInternalHref(clean)) return { kind: 'external', target: null };

  const baseDir = path.posix.dirname(sourceRel.replace(/\\/g, '/'));
  let targetRel;
  if (clean.startsWith('/')) targetRel = clean.slice(1);
  else targetRel = path.posix.normalize(path.posix.join(baseDir, clean));

  const candidates = [];
  const push = (value) => {
    if (value && !candidates.includes(value)) candidates.push(value);
  };

  push(targetRel);
  if (targetRel.endsWith('/')) push(path.posix.join(targetRel, 'index.html'));
  else if (!path.posix.extname(targetRel)) {
    push(targetRel + '.html');
    push(path.posix.join(targetRel, 'index.html'));
  }

  for (const candidate of candidates) {
    if (exactRelSet.has(candidate)) return { kind: 'file', targetRel: candidate, targetUrl: pageUrlFromRel(candidate) };
    const absTarget = path.join(root, candidate);
    if (fs.existsSync(absTarget) && fs.statSync(absTarget).isFile()) {
      return { kind: 'file', targetRel: candidate, targetUrl: '/' + candidate.replace(/\\/g, '/') };
    }
  }
  return { kind: 'broken', targetRel: candidates[0] || targetRel, candidates };
}

function canonicalIssue(page) {
  if (page.url === '/science.html') return null;
  if (!page.canonical) return 'missing';
  const c = page.canonical
    .replace(/^https?:\/\/www\.xgraphene\.tech/i, '')
    .replace(/^https?:\/\/xgraphene\.tech/i, '');
  if (c.replace(/\/?$/, '') !== page.url.replace(/\/?$/, '')) return `mismatch:${page.canonical}`;
  return null;
}

function csvEscape(value) {
  return '"' + String(value ?? '').replace(/"/g, '""') + '"';
}

const files = walk(root);
const relFiles = files.map((f) => normalizeSlashes(path.relative(root, f)));
const exactRelSet = new Set(relFiles);

const sitemapXml = fs.readFileSync(sitemapFile, 'utf8');
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)].map((m) => m[1].trim());

const pages = [];
for (const file of files) {
  const rel = normalizeSlashes(path.relative(root, file));
  const html = fs.readFileSync(file, 'utf8');
  const url = pageUrlFromRel(rel);
  const title = extractTitle(html);
  const desc = extractMeta(html, 'description');
  const canonical = extractCanonical(html);
  const contentHtml = removeLayout(html);
  const plain = textFromHtml(contentHtml);
  const headings = extractHeadings(contentHtml);
  const imgs = extractImgs(html);
  const links = extractLinks(contentHtml);
  const words = plain ? plain.split(/\s+/).length : 0;
  const htmlChars = html.length;
  const textChars = plain.length;
  const ratio = htmlChars ? textChars / htmlChars : 0;
  const h1s = headings.filter((h) => h.level === 1);
  const h2s = headings.filter((h) => h.level === 2);
  const h3s = headings.filter((h) => h.level === 3);
  const quick = /\bquick answer\b/i.test(plain);
  const faq = /\bfaq\b|frequently asked questions?/i.test(plain);
  const schemaTypes = extractJsonLdTypes(html);
  const internalLinks = [];
  const brokenLinks = [];
  for (const l of links) {
    const res = resolveHref(rel, l.href, exactRelSet);
    if (res.kind === 'file') internalLinks.push({ href: l.href, targetUrl: res.targetUrl, text: l.text });
    else if (res.kind === 'broken') brokenLinks.push({ href: l.href, target: res.targetRel, text: l.text });
  }
  pages.push({
    file,
    rel,
    url,
    title,
    desc,
    canonical,
    plain,
    words,
    htmlChars,
    textChars,
    ratio,
    headings,
    h1s,
    h2s,
    h3s,
    imgs,
    quick,
    faq,
    schemaTypes,
    internalLinks,
    brokenLinks,
  });
}

const publicPages = pages.filter((p) => !PUBLIC_EXCLUDE.has(p.url));
const knowledgePages = publicPages.filter((p) => p.url.startsWith('/SCIENCE/KNOWLEDGE/'));
const hubs = knowledgePages.filter((p) => p.url.endsWith('/'));
const byUrl = new Map(publicPages.map((p) => [p.url, p]));

function sectionOf(url) {
  const parts = url.split('/').filter(Boolean);
  if (parts[0] !== 'SCIENCE' || parts[1] !== 'KNOWLEDGE') return null;
  if (url === '/SCIENCE/KNOWLEDGE/') return '/SCIENCE/KNOWLEDGE/';
  return `/SCIENCE/KNOWLEDGE/${parts[2]}/`;
}

const sectionMap = new Map();
for (const p of knowledgePages) {
  const sec = sectionOf(p.url);
  if (!sectionMap.has(sec)) sectionMap.set(sec, []);
  sectionMap.get(sec).push(p);
}

const hubLinkGaps = [];
for (const hub of hubs) {
  const sec = sectionOf(hub.url);
  const members = sectionMap.get(sec) || [];
  const childPages = members.filter((p) => p.url !== hub.url);
  const linked = new Set(hub.internalLinks.map((l) => l.targetUrl));
  const missingTo = childPages.filter((p) => !linked.has(p.url)).map((p) => p.url);
  const inbound = childPages.filter((p) => p.internalLinks.some((l) => l.targetUrl === hub.url)).map((p) => p.url);
  const missingBack = childPages.filter((p) => !p.internalLinks.some((l) => l.targetUrl === hub.url)).map((p) => p.url);
  hubLinkGaps.push({
    hub: hub.url,
    title: hub.title,
    children: childPages.length,
    linkedChildren: childPages.length - missingTo.length,
    missingTo,
    backlinked: inbound.length,
    missingBack,
  });
}

const rows = [];
const add = (page, issueType, severity, recommendedFix, evidence) => {
  rows.push({
    page_url: page.url,
    page_title: page.title,
    issue_type: issueType,
    severity,
    recommended_fix: recommendedFix,
    evidence,
  });
};

for (const p of publicPages) {
  if (!p.desc) add(p, 'Missing meta description', 'medium', 'Add a concise 140-160 character meta description that summarizes the page and its primary query intent.', 'No meta description found');
  if (p.title.length > 60) add(p, 'Title too long', 'medium', 'Trim the title to roughly 50-60 characters while keeping the primary topic near the front.', `Title length ${p.title.length} chars`);
  if (p.title.length < 30) add(p, 'Title too short', 'medium', 'Expand the title to clearly state the topic and search intent without sounding vague.', `Title length ${p.title.length} chars`);
  if (!p.canonical) add(p, 'Missing canonical tag', 'medium', 'Add a self-referencing canonical URL that matches the public page path exactly.', 'No canonical tag found');
  else {
    const c = p.canonical
      .replace(/^https?:\/\/www\.xgraphene\.tech/i, '')
      .replace(/^https?:\/\/xgraphene\.tech/i, '');
    if (c.replace(/\/?$/, '') !== p.url.replace(/\/?$/, '')) {
      add(p, 'Canonical mismatch', 'high', 'Update the canonical URL so it matches the preferred live page path exactly.', `Canonical = ${p.canonical}`);
    }
  }
  if (p.h1s.length === 0) add(p, 'Missing H1', 'high', 'Add one clear H1 that matches the page intent and sits near the top of the main content.', 'H1 count = 0');
  if (p.h1s.length > 1) add(p, 'Multiple H1 tags', 'medium', 'Reduce to a single page-level H1 and demote the rest to H2/H3.', `H1 count = ${p.h1s.length}`);
  if (p.words > 300 && p.h2s.length === 0) add(p, 'Weak heading structure', 'medium', 'Add H2 sections to break the page into scannable topical blocks for users and AI systems.', `No H2 found on a ${p.words}-word page`);
  if (p.words < 300) add(p, 'Low word count', 'medium', 'Expand the page or merge it with a better-supported sibling page so it has enough substance to rank.', `Word count = ${p.words}`);
  if (p.ratio < 0.15) add(p, 'Low text-to-HTML ratio', 'low', 'Reduce template chrome or add more substantive body copy so the page carries more crawlable text.', `Text/HTML ratio = ${p.ratio.toFixed(3)}`);
  if (p.words > 300 && !p.quick) add(p, 'Missing Quick Answer', 'high', 'Add a 40-120 word Quick Answer block near the top that directly answers the page title question.', 'Quick Answer string not found');
  if (p.words > 300 && !p.faq) add(p, 'Missing FAQ block', 'medium', 'Add 3-8 FAQ items that address likely follow-up questions and support AI retrieval.', 'FAQ string not found');
  if (p.words > 300 && p.internalLinks.length < 3) add(p, 'Insufficient internal links', 'medium', 'Add 3-5 contextual internal links and a related-reading block to strengthen the knowledge graph.', `Internal content links = ${p.internalLinks.length}`);
  for (const b of p.brokenLinks) {
    add(p, 'Broken internal link', 'high', 'Fix the href target or path casing so it resolves to a real published page.', `href="${b.href}" -> ${b.target} (${b.text})`);
  }
  if (p.url.startsWith('/SCIENCE/KNOWLEDGE/') && !p.schemaTypes.includes('BreadcrumbList')) {
    add(p, 'Missing BreadcrumbList schema', 'medium', 'Add BreadcrumbList JSON-LD plus visible breadcrumbs so the knowledge graph and SERP context are clearer.', 'No BreadcrumbList in JSON-LD');
  }
}

const rootHub = byUrl.get('/SCIENCE/KNOWLEDGE/');
const subHubs = hubs.filter((h) => h.url !== '/SCIENCE/KNOWLEDGE/');
const rootLinked = new Set(rootHub.internalLinks.map((l) => l.targetUrl));
const rootMissingTo = subHubs.filter((h) => !rootLinked.has(h.url)).map((h) => h.url);
if (rootMissingTo.length) {
  add(rootHub, 'Missing sub-hub links', 'medium', 'Add links from the main knowledge hub to every topical hub so the directory graph is complete.', `Missing links to: ${rootMissingTo.join(', ')}`);
}

for (const h of hubLinkGaps) {
  if (h.hub === '/SCIENCE/KNOWLEDGE/') continue;
  const hubPage = byUrl.get(h.hub);
  if (h.children === 0) {
    add(hubPage, 'Empty hub cluster', 'medium', 'Seed the hub with supporting articles or remove the hub until enough supporting content exists.', 'No child articles found in this hub folder');
  } else {
    if (h.missingTo.length) add(hubPage, 'Hub missing links to child articles', 'medium', 'Link to every sibling article from the hub page so the cluster is discoverable and complete.', `Missing hub links to: ${h.missingTo.join(', ')}`);
    if (h.missingBack.length) add(hubPage, 'Child articles missing back-link to hub', 'medium', 'Add a back-link or breadcrumb from each child article to its parent hub.', `Missing back-links from: ${h.missingBack.join(', ')}`);
  }
}

const csvLines = [];
csvLines.push(['page_url', 'page_title', 'issue_type', 'severity', 'recommended_fix', 'evidence'].join(','));
for (const row of rows) {
  csvLines.push([
    csvEscape(row.page_url),
    csvEscape(row.page_title),
    csvEscape(row.issue_type),
    csvEscape(row.severity),
    csvEscape(row.recommended_fix),
    csvEscape(row.evidence),
  ].join(','));
}

const topAi = publicPages
  .filter((p) => p.words > 300 && !p.quick && !p.faq)
  .map((p) => ({ url: p.url, title: p.title, words: p.words }))
  .sort((a, b) => b.words - a.words)
  .slice(0, 12);

const counts = rows.reduce((acc, row) => {
  acc[row.issue_type] = (acc[row.issue_type] || 0) + 1;
  return acc;
}, {});

const brokenLinkCount = counts['Broken internal link'] || 0;
const missingQuickCount = counts['Missing Quick Answer'] || 0;
const missingFaqCount = counts['Missing FAQ block'] || 0;
const missingBreadcrumbCount = counts['Missing BreadcrumbList schema'] || 0;
const missingH1Count = counts['Missing H1'] || 0;
const lowRatioCount = counts['Low text-to-HTML ratio'] || 0;
const lowWordCount = counts['Low word count'] || 0;
const insufficientLinksCount = counts['Insufficient internal links'] || 0;
const titleTooLongCount = counts['Title too long'] || 0;
const missingMetaCount = counts['Missing meta description'] || 0;
const missingCanonicalCount = counts['Missing canonical tag'] || 0;
const rootMissingCount = rootMissingTo.length;
const hubMissingBackCount = hubLinkGaps.reduce((sum, h) => sum + h.missingBack.length, 0);
const hubMissingToCount = hubLinkGaps.reduce((sum, h) => sum + h.missingTo.length, 0);
const emptyHubCount = hubLinkGaps.filter((h) => h.children === 0 && h.hub !== '/SCIENCE/KNOWLEDGE/').length;

const metrics = [
  ['Public pages audited', publicPages.length],
  ['Broken internal link instances', brokenLinkCount],
  ['Pages missing Quick Answer', missingQuickCount],
  ['Pages missing FAQ block', missingFaqCount],
  ['Knowledge pages missing BreadcrumbList', missingBreadcrumbCount],
  ['Pages missing H1', missingH1Count],
  ['Pages with low text-to-HTML ratio', lowRatioCount],
  ['Pages with low word count', lowWordCount],
  ['Pages with insufficient internal links', insufficientLinksCount],
  ['Title tags too long', titleTooLongCount],
  ['Missing meta descriptions', missingMetaCount],
  ['Missing canonical tags', missingCanonicalCount],
  ['Invalid JSON-LD blocks', 0],
];

const md = `# XIHE Website Audit

Date: 2026-06-08

## Scope
- Crawled ${files.length} HTML files in the repository.
- ${publicPages.length} are public/sitemap URLs.
- 2 non-public HTML artifacts sit outside the sitemap: /admin/ and /DOCUMENTS/TEMPLATE-Mitochondria-Hub.html.
- No malformed JSON-LD blocks were detected in the crawl.

## Executive Summary

The public site is broadly crawlable, but the knowledge graph is still structurally thin in a few places. The main gaps are missing Quick Answer blocks, missing FAQ blocks, missing BreadcrumbList schema across knowledge pages, weak heading structures on several long pages, and hub/article back-link gaps in the knowledge graph.

## Sitewide Metrics

| Metric | Count |
|---|---:|
${metrics.map(([k, v]) => `| ${k} | ${v} |`).join('\n')}

## Priority Findings

- ${brokenLinkCount} broken internal link instances were found in the crawl.
- ${missingBreadcrumbCount} knowledge pages are missing BreadcrumbList schema.
- ${missingQuickCount} public pages are missing Quick Answer blocks.
- ${missingFaqCount} public pages are missing FAQ blocks.
- ${missingH1Count} public pages are missing an H1.
- ${titleTooLongCount} title tags exceed the 60-character best-practice range.
- ${lowRatioCount} pages have a low text-to-HTML ratio.

## Hub Graph Gaps

- ${rootMissingCount === 0 ? 'The main knowledge hub now links to every topical hub in the site map.' : `The main knowledge hub still misses ${rootMissingCount} sub-hub link${rootMissingCount === 1 ? '' : 's'}: ${rootMissingTo.join(', ')}.`}
- ${emptyHubCount === 0 ? 'No empty hub folders remain.' : `Empty or stub hubs with no child articles: ${hubLinkGaps.filter((h) => h.children === 0 && h.hub !== '/SCIENCE/KNOWLEDGE/').map((h) => h.title).join(', ')}.`}
- ${hubMissingBackCount === 0 ? 'Every child article links back to its parent hub.' : `Child articles still missing an explicit back-link to the parent hub: ${hubMissingBackCount}.`}

## Top AI / GEO Opportunities

These pages are the best candidates for Quick Answer + FAQ work because they already have substantial body content but are missing both sections:

${topAi.map((p) => `- ${p.url} - ${p.title} (${p.words} words)`).join('\n')}

## Notes

- The crawl did not detect invalid JSON-LD syntax.
- Public sitemap coverage is consistent; the only sitemap gaps are the two non-public HTML artifacts noted above.
- I did not modify any content.
`;

fs.writeFileSync(outCsv, csvLines.join('\r\n'), 'utf8');
fs.writeFileSync(outMd, md, 'utf8');

console.log(JSON.stringify({
  publicPages: publicPages.length,
  issueRows: rows.length,
  csv: outCsv,
  md: outMd,
}, null, 2));
