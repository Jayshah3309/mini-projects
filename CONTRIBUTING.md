# Contributing

1. Read the project guide. Preserve the existing numbered folder path.
2. Implement one documented acceptance example. Provide readable labels, keyboard access, input validation and a layout that fits narrow screens.
3. Document actual functionality, simulation behavior, supported inputs, persistence and limits. Distinguish fixed samples from live data.
4. Update `assets/projects.js`, the project README and the catalogue. Change Planned to Demo only after implementing and checking the feature.
5. Keep illustrative previews clearly labelled, or replace them with actual screenshots and accurate alternative text.
6. Try the documented example and boundary inputs, and open the page at wide and narrow sizes in a browser.

Use relative paths and avoid unnecessary dependencies. Document native runtimes for projects that need them. Do not commit secrets, personal records, dependency folders or machine-specific paths.

No licence has been selected for this repository; these changes do not impose a new licence.

## Automated checks

Follow [testing setup](docs/TESTING.md). Run `npm run check` and `npm test` for every change. Run browser checks for interface changes, and native compilation checks for C changes. Document the relevant expected-output example and any new limits.
