const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.xgraphene.tech';
const KNOWLEDGE_ROOT = path.join(ROOT, 'SCIENCE', 'KNOWLEDGE');

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === 'node_modules' || ent.name === '.git' || ent.name === '.vercel' || ent.name === 'test-results') {
      continue;
    }
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, out);
    else if (/\.html?$/i.test(ent.name)) out.push(full);
  }
  return out;
}

function relFromRoot(file) {
  return path.relative(ROOT, file).replace(/\\/g, '/');
}

function relFromKnowledge(file) {
  return path.relative(KNOWLEDGE_ROOT, file).replace(/\\/g, '/');
}

function titleCaseSlug(slug) {
  const overrides = {
    'bioenergetics': 'Bioenergetics',
    'cellular-energy': 'Cellular Energy',
    'Clinical-Evidence': 'Clinical Evidence',
    'Fatigue': 'Fatigue',
    'graphene-fir': 'Graphene FIR',
    'healthy-aging': 'Healthy Aging',
    'Inflammation': 'Inflammation',
    'Metabolism': 'Metabolism',
    'Microcirculation': 'Microcirculation',
    'Mitochondria': 'Mitochondria',
    'oxidative-stress': 'Oxidative Stress',
    'Recovery': 'Recovery',
    'Research-Library': 'Research Library',
    'Technology-Platform': 'Technology Platform',
  };
  if (overrides[slug]) return overrides[slug];
  return slug
    .split(/[-_]/g)
    .map((part) => part ? part.charAt(0).toUpperCase() + part.slice(1) : part)
    .join(' ');
}

const HUB_DISPLAY_NAMES = {
  'bioenergetics': 'Bioenergetics Hub',
  'cellular-energy': 'Cellular Energy & ATP Hub',
  'Clinical-Evidence': 'Clinical Evidence Hub',
  'Fatigue': 'Chronic Fatigue Hub',
  'graphene-fir': 'Graphene Far-Infrared Hub',
  'healthy-aging': 'Healthy Aging Hub',
  'Inflammation': 'Inflammation Biology Hub',
  'Metabolism': 'Metabolism Hub',
  'Microcirculation': 'Microcirculation Science Hub',
  'Mitochondria': 'Mitochondrial Health Hub',
  'oxidative-stress': 'Oxidative Stress Hub',
  'Recovery': 'Recovery Science Hub',
  'Research-Library': 'Research Library Hub',
  'Technology-Platform': 'Technology Platform Hub',
};

function hubDisplayName(slug) {
  return HUB_DISPLAY_NAMES[slug] || `${titleCaseSlug(slug)} Hub`;
}

function insertBeforeClosingTag(html, tagName, snippet) {
  const pattern = new RegExp(`</${tagName}>`, 'i');
  if (!pattern.test(html)) return html;
  return html.replace(pattern, `${snippet}\n</${tagName}>`);
}

function cleanTitle(title) {
  return title
    .replace(/\s[—|]\sXIHE.*$/i, '')
    .replace(/\s[—|]\sXIHE Knowledge Hub.*$/i, '')
    .replace(/\s[—|]\sXIHE Journal.*$/i, '')
    .trim();
}

function extractTitle(html) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? match[1].replace(/\s+/g, ' ').trim() : '';
}

function pageUrlForKnowledge(rel) {
  if (rel === 'index.html') return '/SCIENCE/KNOWLEDGE/';
  if (rel.endsWith('/index.html')) return '/SCIENCE/KNOWLEDGE/' + rel.replace(/\/index\.html$/i, '/');
  return '/SCIENCE/KNOWLEDGE/' + rel;
}

function buildBreadcrumbJson(rel, html) {
  const title = cleanTitle(extractTitle(html));
  const items = [
    { name: 'Home', item: `${SITE}/` },
    { name: 'Science', item: `${SITE}/SCIENCE/Landing.html` },
  ];

  const parts = rel.split('/').filter(Boolean);
  const folders = parts.slice(0, -1);
  let currentPath = '/SCIENCE/KNOWLEDGE/';

  if (rel === 'index.html') {
    items.push({ name: title || 'Knowledge Hub', item: `${SITE}/SCIENCE/KNOWLEDGE/` });
  } else {
    for (const folder of folders) {
      currentPath += `${folder}/`;
      items.push({ name: titleCaseSlug(folder), item: `${SITE}${currentPath}` });
    }
    items.push({ name: title || cleanTitle(parts[parts.length - 1] || ''), item: `${SITE}${pageUrlForKnowledge(rel)}` });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

function insertBeforeHeadClose(html, snippet) {
  if (html.includes(snippet)) return html;
  return html.replace(/<\/head>/i, `${snippet}\n</head>`);
}

function replaceMany(html, pairs) {
  let out = html;
  for (const [from, to] of pairs) out = out.split(from).join(to);
  return out;
}

function fixKnowledgeFile(file) {
  const rel = relFromKnowledge(file);
  let html = fs.readFileSync(file, 'utf8');
  const before = html;

  // Normalize shared knowledge-nav patterns.
  html = html.replace(/href="Landing\.html"/g, 'href="/SCIENCE/Landing.html"');
  html = html.replace(/href="\/">Knowledge<\/a>/g, 'href="/SCIENCE/KNOWLEDGE/">Knowledge</a>');
  html = html.replace(/href="\/">← Back to Knowledge<\/a>/g, 'href="/SCIENCE/KNOWLEDGE/">← Back to Knowledge</a>');
  html = html.replace(/href="\/">Back to Knowledge<\/a>/g, 'href="/SCIENCE/KNOWLEDGE/">Back to Knowledge</a>');

  // File-specific repairs.
  if (rel === 'Fatigue/why-do-you-feel-more-tired-after-sleeping-longer.html') {
    html = html.replace(/href="\.\.\/sleep\/"/g, 'href="/SCIENCE/KNOWLEDGE/Sleep/"');
  }

  if (rel === 'Fatigue/why-do-you-feel-tired-after-lunch.html') {
    html = html.replace(/href="\.\.\/metabolism\/"/g, 'href="/SCIENCE/KNOWLEDGE/Metabolism/"');
  }

  if (rel === 'Inflammation/inflammation-recovery-biology.html') {
    html = html.replace(/href="atp-pain-signaling\.html"/g, 'href="/SCIENCE/KNOWLEDGE/cellular-energy/atp-pain-signaling.html"');
    html = html.replace(/href="microcirculation-science\.html"/g, 'href="/SCIENCE/KNOWLEDGE/Microcirculation/microcirculation-science.html"');
  }

  if (rel === 'Inflammation/nociceptive-vs-neuropathic-mechanisms.html') {
    html = html.replace(/href="atp-pain-signaling\.html"/g, 'href="/SCIENCE/KNOWLEDGE/cellular-energy/atp-pain-signaling.html"');
    html = html.replace(/href="central-sensitization-energy\.html"/g, 'href="/SCIENCE/KNOWLEDGE/cellular-energy/central-sensitization-energy.html"');
  }

  if (rel === 'Microcirculation/microcirculation-science.html') {
    html = html.replace(/href="atp-pain-signaling\.html"/g, 'href="/SCIENCE/KNOWLEDGE/cellular-energy/atp-pain-signaling.html"');
  }

  if (rel === 'Mitochondria/mitochondrial-function-recovery.html') {
    html = html.replace(/href="microcirculation-science\.html"/g, 'href="/SCIENCE/KNOWLEDGE/Microcirculation/microcirculation-science.html"');
    html = html.replace(/href="atp-pain-signaling\.html"/g, 'href="/SCIENCE/KNOWLEDGE/cellular-energy/atp-pain-signaling.html"');
    html = html.replace(/href="cellular-energy-atp\.html"/g, 'href="/SCIENCE/KNOWLEDGE/cellular-energy/cellular-energy-atp.html"');
  }

  if (rel === 'Mitochondria/mitochondrial-health.html') {
    html = html.replace(/href="\.\.\/what-is-mitochondrial-health\.html"/g, 'href="/SCIENCE/KNOWLEDGE/Mitochondria/what-is-mitochondrial-health.html"');
    html = html.replace(/href="\.\.\/mitochondrial-function-far-infrared\.html"/g, 'href="/SCIENCE/KNOWLEDGE/Mitochondria/mitochondrial-function-far-infrared.html"');
    html = html.replace(/https:\/\/www\.xgraphene\.tech\/SCIENCE\/Landing\.htmlmitochondrial-health\.html/g, `${SITE}/SCIENCE/KNOWLEDGE/Mitochondria/`);
    html = html.replace(/https:\/\/www\.xgraphene\.tech\/science\/landing/g, `${SITE}/SCIENCE/Landing.html`);
    html = html.replace(/https:\/\/www\.xgraphene\.tech\/NEWS\/mitochondrial-function-far-infrared\.html/g, `${SITE}/SCIENCE/KNOWLEDGE/Mitochondria/mitochondrial-function-far-infrared.html`);
    html = html.replace(/https:\/\/www\.xgraphene\.tech\/science\/cellular-energy-recovery\/cellular-energy-atp/g, `${SITE}/SCIENCE/KNOWLEDGE/cellular-energy/cellular-energy-atp.html`);
  }

  if (rel === 'Mitochondria/what-is-mitochondrial-health.html') {
    html = html.replace(/\/SCIENCE\/Landing\.htmlmitochondrial-health\.html/g, '/SCIENCE/KNOWLEDGE/Mitochondria/');
  }

  if (rel === 'graphene-fir/how-fir-works.html') {
    html = html.replace(/href="Landing\.html" class="active">Science<\/a>/g, 'href="/SCIENCE/Landing.html" class="active">Science</a>');
  }

  if (rel.includes('/') && rel !== 'index.html' && !rel.endsWith('/index.html')) {
    const folder = rel.split('/')[0];
    const hubPath = `/SCIENCE/KNOWLEDGE/${folder}/`;
    if (!html.includes(`href="${hubPath}"`) && !html.includes(`href='${hubPath}'`)) {
      const backLink = `\n<div class="back-link" style="text-align:center;padding:40px 0 20px;"><a href="${hubPath}" style="font-size:12px;color:#C5A059;text-decoration:none;letter-spacing:2px;text-transform:uppercase;font-family:'Urbanist',sans-serif;">&larr; Back to ${hubDisplayName(folder)}</a></div>`;
      if (html.includes('</article>')) {
        html = insertBeforeClosingTag(html, 'article', backLink);
      } else if (html.includes('</main>')) {
        html = insertBeforeClosingTag(html, 'main', backLink);
      } else {
        html = insertBeforeClosingTag(html, 'body', backLink);
      }
    }
  }

  // Inject breadcrumb schema if missing.
  if (!html.includes('"@type": "BreadcrumbList"')) {
    const crumb = buildBreadcrumbJson(rel, html);
    const snippet = `    <script type="application/ld+json">\n${JSON.stringify(crumb, null, 4)}\n    </script>`;
    html = insertBeforeHeadClose(html, snippet);
  }

  // Knowledge root hub: add missing sub-hub connections.
  if (rel === 'index.html') {
    html = html.replace(
      'Knowledge Hub | XIHE — 10 Interconnected Science Hubs',
      'Knowledge Hub | XIHE — 15 Interconnected Science Hubs'
    );
    html = html.replace(
      'XIHE Knowledge Hub: 10 interconnected knowledge centers covering mitochondrial health, cellular energy, fatigue, recovery, sleep, and inflammation — backed by published research.',
      'XIHE Knowledge Hub: 15 interconnected knowledge centers covering mitochondrial health, cellular energy, fatigue, recovery, sleep, inflammation, bioenergetics, and more — backed by published research.'
    );
    html = html.replace(
      'Ten Interconnected Science Centers',
      'Fifteen Interconnected Science Centers'
    );
    html = html.replace(
      'VIEW ALL 10 TOPIC HUBS',
      'VIEW ALL 15 TOPIC HUBS'
    );

    const extraSection = `

<section style="background:#FAF8F5;padding:24px 10% 60px;">
    <div style="max-width:880px;margin:0 auto;">
        <h3 style="font-family:'Urbanist',sans-serif;font-size:14px;letter-spacing:2px;color:#1A3348;text-transform:uppercase;margin-bottom:20px;">Extended Hubs</h3>
        <div style="display:flex;flex-wrap:wrap;gap:12px;">
            <a href="/SCIENCE/KNOWLEDGE/bioenergetics/" style="padding:12px 24px;background:#1A3348;border:1px solid rgba(255,255,255,0.1);border-radius:50px;color:#E0E6ED;font-family:Urbanist,sans-serif;font-size:11px;letter-spacing:1px;text-decoration:none;transition:all .25s;">Bioenergetics</a>
            <a href="/SCIENCE/KNOWLEDGE/Clinical-Evidence/" style="padding:12px 24px;background:#1A3348;border:1px solid rgba(255,255,255,0.1);border-radius:50px;color:#E0E6ED;font-family:Urbanist,sans-serif;font-size:11px;letter-spacing:1px;text-decoration:none;transition:all .25s;">Clinical Evidence</a>
            <a href="/SCIENCE/KNOWLEDGE/Research-Library/" style="padding:12px 24px;background:#1A3348;border:1px solid rgba(255,255,255,0.1);border-radius:50px;color:#E0E6ED;font-family:Urbanist,sans-serif;font-size:11px;letter-spacing:1px;text-decoration:none;transition:all .25s;">Research Library</a>
            <a href="/SCIENCE/KNOWLEDGE/Technology-Platform/" style="padding:12px 24px;background:#1A3348;border:1px solid rgba(255,255,255,0.1);border-radius:50px;color:#E0E6ED;font-family:Urbanist,sans-serif;font-size:11px;letter-spacing:1px;text-decoration:none;transition:all .25s;">Technology Platform</a>
            <a href="/SCIENCE/KNOWLEDGE/oxidative-stress/" style="padding:12px 24px;background:#1A3348;border:1px solid rgba(255,255,255,0.1);border-radius:50px;color:#E0E6ED;font-family:Urbanist,sans-serif;font-size:11px;letter-spacing:1px;text-decoration:none;transition:all .25s;">Oxidative Stress</a>
        </div>
    </div>
</section>`;

    if (!html.includes('Extended Hubs')) {
      html = html.replace(
        /<\/section>\r?\n\r?\n<section style="background:#FFF;padding:20px 10% 80px;">/,
        `</section>${extraSection}\n\n<section style="background:#FFF;padding:20px 10% 80px;">`
      );
    }
  }

  if (rel === 'Clinical-Evidence/index.html' && !html.includes('pku-clinical-trial.html')) {
    html = html.replace(
      /<\/section>\r?\n\r?\n<section class="about">/,
      '</section>\n\n<section style="max-width:1100px;margin:0 auto;padding:0 24px 44px;">\n    <div style="background:#FAF8F5;border:1px solid #E5E5E7;border-radius:8px;padding:18px 24px;">\n        <p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#C5A059;margin-bottom:10px;">Featured Reading</p>\n        <a href="/SCIENCE/KNOWLEDGE/Clinical-Evidence/pku-clinical-trial.html" style="font-size:15px;color:#1A3348;text-decoration:none;font-weight:500;">PKU Third Hospital Research: 78.3% Measured Outcome</a>\n    </div>\n</section>\n\n<section class="about">'
    );
  }

  if (rel === 'Technology-Platform/index.html' && !html.includes('photobiomodulation-spectrum.html')) {
    html = html.replace(
      /<\/section>\r?\n\r?\n<section class="about">/,
      '</section>\n\n<section style="max-width:1100px;margin:0 auto;padding:0 24px 44px;">\n    <div style="background:#FAF8F5;border:1px solid #E5E5E7;border-radius:8px;padding:18px 24px;">\n        <p style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#C5A059;margin-bottom:10px;">Featured Reading</p>\n        <a href="/SCIENCE/KNOWLEDGE/Technology-Platform/photobiomodulation-spectrum.html" style="font-size:15px;color:#1A3348;text-decoration:none;font-weight:500;">Understanding the Photobiomodulation Spectrum</a>\n    </div>\n</section>\n\n<section class="about">'
    );
  }

  if (html !== before) {
    html = html.replace(/[ \t]+(\r?\n)/g, '$1');
    fs.writeFileSync(file, html, 'utf8');
    return true;
  }
  return false;
}

function fixScienceRedirect(file) {
  let html = fs.readFileSync(file, 'utf8');
  const before = html;
  html = html.replace('content="0; url=SCIENCE/Technology.html"', 'content="0; url=/SCIENCE/Landing.html"');
  html = html.replace('<a href="SCIENCE/Landing.html">XIHE Science</a>', '<a href="/SCIENCE/Landing.html">XIHE Science</a>');
  if (!html.includes('rel="canonical"')) {
    html = html.replace(
      '<meta http-equiv="refresh" content="0; url=/SCIENCE/Landing.html">',
      '<link rel="canonical" href="https://www.xgraphene.tech/SCIENCE/Landing.html">\n    <meta http-equiv="refresh" content="0; url=/SCIENCE/Landing.html">'
    );
  } else {
    html = html.replace(/<link rel="canonical"[^>]*>/i, '<link rel="canonical" href="https://www.xgraphene.tech/SCIENCE/Landing.html">');
  }
  if (html !== before) {
    html = html.replace(/[ \t]+(\r?\n)/g, '$1');
    fs.writeFileSync(file, html, 'utf8');
    return true;
  }
  return false;
}

function fixButtonPreview(file) {
  let html = fs.readFileSync(file, 'utf8');
  const before = html;
  if (!html.includes('rel="canonical"')) {
    html = html.replace(
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<link rel="canonical" href="https://www.xgraphene.tech/PICTURE/button-preview.html">'
    );
  }
  if (html !== before) {
    html = html.replace(/[ \t]+(\r?\n)/g, '$1');
    fs.writeFileSync(file, html, 'utf8');
    return true;
  }
  return false;
}

function main() {
  const knowledgeFiles = walk(KNOWLEDGE_ROOT);
  const changed = [];

  for (const file of knowledgeFiles) {
    if (fixKnowledgeFile(file)) changed.push(relFromRoot(file));
  }

  const scienceFile = path.join(ROOT, 'science.html');
  if (fs.existsSync(scienceFile) && fixScienceRedirect(scienceFile)) {
    changed.push('science.html');
  }

  const buttonPreview = path.join(ROOT, 'PICTURE', 'button-preview.html');
  if (fs.existsSync(buttonPreview) && fixButtonPreview(buttonPreview)) {
    changed.push('PICTURE/button-preview.html');
  }

  console.log(JSON.stringify({
    changedCount: changed.length,
    changed,
  }, null, 2));
}

main();
