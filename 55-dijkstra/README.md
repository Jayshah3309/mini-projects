# 55. Dijkstra's Algorithm

[Project gallery](../index.html) · [Collection guide](../README.md) · [Open page](index.html)

**Status:** Interactive demo. An implementation exists and was reviewed from source; this is not certification of every input.

![Illustrated guide card, not a screenshot](../assets/previews/55-dijkstra.svg)

Shortest distances and reconstructed paths.

## Files and technology

- `index.html`: interface with embedded HTML, CSS and JavaScript.
- `README.md`: purpose, example, implementation and limits.
- Shared catalogue, navigation and preview assets live in `../assets/`.
No install or build step is required. Open this page locally or use the local-server command in the root guide.

## Try it

From A: C=2, B=3, D=8, E=10.

Use the fields and controls shown on the page. Expand Project guide below the demo for the same example and scope notes.

## How it works

Select nearest unvisited node and relax edges.

Source functions: `runDijkstra()`.

## Scope and limitations

Fixed nonnegative graph; minimum selection scans nodes.

## Learning exercise

Trace the example through the source, try an empty input and a boundary case, and explain the result. Read the limits above before extending the demo.

The preview is an illustration of a documented use case, not a captured screenshot.

## Step-by-step trace

The independent learning panel provides Step, Play, Pause, Reset and interval controls. Sorting and tree traces accept up to 20 finite numbers. Graph traces use the documented fixed sample graph. Tree snapshots show root/L/R paths; AVL snapshots are taken after each insertion and rebalance, while heap snapshots include sift-up swaps. This trace does not change the original demo controls.

## Pseudocode, complexity and exercises

See the [Dijkstra learning notes](../docs/ALGORITHMS.md#55-dijkstra) for pseudocode, a worked example, time/space cost and an exercise.
