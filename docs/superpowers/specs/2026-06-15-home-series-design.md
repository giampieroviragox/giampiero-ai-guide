# Home Series Design

## Goal
Make the home page behave more like a blog index: newest articles first, with editorial series highlighted above the full catalog.

## Requirements
- Keep existing `data-tag` categories for broad article taxonomy.
- Add a separate `data-series` concept for editorial series.
- Support two initial series: `ai-tools` and `diario-vibe-coder`.
- Treat articles without a specific series as general catalog content.
- Show the two series near the top of the home page.
- Clicking a series filters the existing guide list without requiring backend routing.
- Support shareable static URLs using `index.html?serie=ai-tools` and `index.html?serie=diario-vibe-coder`.
- Keep the implementation compatible with GitHub Pages: static HTML, inline CSS and JavaScript, no build step.

## Design
The home page remains a single static `index.html`. Each guide item can optionally include a `data-series` attribute. A new "Serie" strip appears above the tag filters with two buttons for the current editorial series.

The existing JavaScript filter is extended with an independent `activeSeries` state. Series filtering and tag filtering can work together, but selecting "Tutti" in tags still means all tags within the selected series. The result count continues to reflect the visible guide items.

The guide list order in `index.html` is the source of truth for recency. Newer guide pages are placed first in descending guide number order.

## Verification
Use a Node-based static test that parses `index.html` as text and checks:
- series controls exist,
- guide items include both required series,
- series query string handling exists,
- the top numbered guide is the newest numeric guide.
