# Home Series Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add editorial series filtering and newest-first ordering to the static home page.

**Architecture:** Keep the site as static GitHub Pages HTML. Extend `index.html` markup, inline CSS, and inline JavaScript. Add one Node static-analysis test for regression coverage.

**Tech Stack:** Static HTML, inline CSS, vanilla JavaScript, Node.js `fs` and `assert`.

---

### Task 1: Static Test

**Files:**
- Create: `tests/home-series.test.js`

- [ ] Add a Node test that reads `index.html`.
- [ ] Assert that series buttons and `data-series` values exist.
- [ ] Assert that URL query handling for `serie` exists.
- [ ] Assert that the first guide item is the newest numbered guide.
- [ ] Run `node tests/home-series.test.js` and verify it fails before implementation.

### Task 2: Home Markup And Styles

**Files:**
- Modify: `index.html`

- [ ] Add compact series controls above the tag filters.
- [ ] Add CSS matching the existing quiet editorial style.
- [ ] Add `data-series="ai-tools"` only to deliberate AI Tools guide entries.
- [ ] Leave `diario-vibe-coder` empty until dedicated editions are added.
- [ ] Reorder guide items newest-first by numeric guide number.

### Task 3: Client-Side Filtering

**Files:**
- Modify: `index.html`

- [ ] Extend the existing filter state with `activeSeries`.
- [ ] Read `serie` from `window.location.search` on load.
- [ ] Update URL query parameters when a series is selected or cleared.
- [ ] Keep tag filtering and search working with or without an active series.
- [ ] Run `node tests/home-series.test.js`.
