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
  'at least one guide should belong to the AI Tools series'
);

assert(
  html.includes('data-series="diario-vibe-coder"'),
  'at least one guide should belong to Diario di un vibe coder'
);

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
