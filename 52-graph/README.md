# 52. Graph (Adjacency List)

[Project gallery](../index.html) · [Collection guide](../README.md) · [Open page](index.html)

**Status:** Interactive demo. An implementation exists and was reviewed from source; this is not certification of every input.

![Illustrated guide card, not a screenshot](../assets/previews/52-graph.svg)

Undirected adjacency-list graph.

## Files and technology

- `index.html`: interface with embedded HTML, CSS and JavaScript.
- `README.md`: purpose, example, implementation and limits.
- Shared catalogue, navigation and preview assets live in `../assets/`.
No install or build step is required. Open this page locally or use the local-server command in the root guide.

## Try it

Add A-B and A-C to see B,C as A's neighbors.

Use the fields and controls shown on the page. Expand Project guide below the demo for the same example and scope notes.

## How it works

Store symmetric neighbor lists.

Source functions: `addEdge()`, `removeNode()`, `clearGraph()`, `render()`.

## Scope and limitations

Self edges rejected; node deletion removes isolated nodes too.

## Learning exercise

Trace the example through the source, try an empty input and a boundary case, and explain the result. Read the limits above before extending the demo.

The preview is an illustration of a documented use case, not a captured screenshot.
