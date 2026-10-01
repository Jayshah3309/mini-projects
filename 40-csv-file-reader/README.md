# 40. CSV File Reader

[Project gallery](../index.html) · [Collection guide](../README.md) · [Open page](index.html)

**Status:** Interactive demo. An implementation exists and was reviewed from source; this is not certification of every input.

![Illustrated guide card, not a screenshot](../assets/previews/40-csv-file-reader.svg)

Simple comma-separated text displayed as a table.

## Files and technology

- `index.html`: interface with embedded HTML, CSS and JavaScript.
- `README.md`: purpose, example, implementation and limits.
- Shared catalogue, navigation and preview assets live in `../assets/`.
No install or build step is required. Open this page locally or use the local-server command in the root guide.

## Try it

Name,Age followed by Alice,28 gives one data row.

Use the fields and controls shown on the page. Expand Project guide below the demo for the same example and scope notes.

## How it works

Split lines and comma-separated cells.

Source functions: `parseCSV()`, `loadSample()`.

## Scope and limitations

Does not support quoted commas or multiline CSV cells.

## Learning exercise

Trace the example through the source, try an empty input and a boundary case, and explain the result. Read the limits above before extending the demo.

The preview is an illustration of a documented use case, not a captured screenshot.
