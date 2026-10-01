# Testing and accessibility

## Setup

Node.js 22 or later and Python 3 are required for development checks. Opening the demos needs no npm installation.

```sh
npm ci
npm run check
npm test
npx playwright install chromium
npm run test:browser
```

`npm run check` checks all project paths, local links, SVG previews and JavaScript syntax. Unit tests exercise catalogue filtering, statistics, encoding, record validation and the learning algorithms. Browser tests open all 100 pages at desktop/mobile sizes, exercise gallery filters, the three management apps and trace controls, and scan the gallery and management apps with axe-core.

Browser tests include actual screenshot capture into `artifacts/screenshots/`. Screenshots are inspection artifacts, not automatic pixel-comparison baselines. GitHub Actions uploads screenshots, browser reports and failure traces for 14 days. Run the same screenshot test in a consistent browser/environment before comparing images.

```sh
python tools/check_native.py
```

The native check requires GCC, or set `CC=clang`. GitHub Actions compiles all eight C examples with warnings as errors and checks expected outputs and invalid inputs.

## Manual review

Automated accessibility scans cannot prove accessibility. Use the keyboard to reach every control, check visible focus, inspect announcements with a screen reader, zoom to 200%, and inspect tables on a narrow screen. Shared styles improve focus, reduced motion and text wrapping across the collection; the first automated accessibility coverage is the gallery and the three new management apps.

For interactive traces, verify Step advances once, Play advances at the chosen interval, Pause stops and Reset applies new input. Tree traces intentionally show path-labelled snapshots rather than geometric node drawings. The existing demo and the learning trace are independent interfaces.

No test suite certifies every possible input or makes these demos production systems.
