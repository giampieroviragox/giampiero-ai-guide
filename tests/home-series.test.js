const assert = require('assert');
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

assert(
  html.includes('data-series-filter="ai-tools"'),
  'home should include an AI Tools series control'
);

assert(
  html.includes('data-series-filter="diario-vibe-coder"'),
  'home should include a Diario di un vibe coder series control'
);

assert(
  html.includes('data-series="ai-tools"'),
  'the GSAP guide should belong to the AI Tools series'
);

assert(
  !html.includes('data-series="diario-vibe-coder"'),
  'Diario di un vibe coder should stay empty until dedicated editions are added'
);

const aiToolsMatches = html.match(/data-series="ai-tools"/g) || [];
assert.strictEqual(aiToolsMatches.length, 1, 'AI Tools should only contain the GSAP guide for now');

assert(
  html.includes('href="guida-78-gsap.html"') &&
    html.includes('data-tag="Strumenti" data-series="ai-tools"'),
  'home should list the GSAP guide as an AI Tools article'
);

const gsapGuide = fs.readFileSync('guida-78-gsap.html', 'utf8');
assert(gsapGuide.includes('GSAP'), 'GSAP guide should mention GSAP');
assert(gsapGuide.includes('https://gsap.com/'), 'GSAP guide should link to the official site');
assert(gsapGuide.includes('gsap.to('), 'GSAP guide should include a minimal gsap.to example');
assert(gsapGuide.includes('gsap-screenshot.png'), 'GSAP guide should include the local screenshot asset');
assert(fs.existsSync('gsap-screenshot.png'), 'GSAP screenshot asset should exist');

assert(
  html.includes("URLSearchParams(window.location.search)") &&
    html.includes("params.get('serie')"),
  'home should read the serie query parameter'
);

const guideMatches = [...html.matchAll(/<a class="guide-item" href="guida-(\d+)-[^"]+\.html"/g)];
assert(guideMatches.length > 0, 'home should contain numbered guide items');

const firstGuideNumber = Number(guideMatches[0][1]);
const newestGuideNumber = Math.max(...guideMatches.map((match) => Number(match[1])));

assert.strictEqual(
  firstGuideNumber,
  newestGuideNumber,
  'the newest numbered guide should be the first guide item'
);

console.log('home series checks passed');
