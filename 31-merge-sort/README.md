# 31. Merge Sort

[Project gallery](../index.html) · [Collection guide](../README.md) · [Open page](index.html)

**Status:** Interactive demo. An implementation exists and was reviewed from source; this is not certification of every input.

![Illustrated guide card, not a screenshot](../assets/previews/31-merge-sort.svg)

Sort integers with divide and conquer.

## Files and technology

- `index.html`: interface with embedded HTML, CSS and JavaScript.
- `README.md`: purpose, example, implementation and limits.
- Shared catalogue, navigation and preview assets live in `../assets/`.
No install or build step is required. Open this page locally or use the local-server command in the root guide.

## Try it

38,27,3,9 becomes 3,9,27,38.

Use the fields and controls shown on the page. Expand Project guide below the demo for the same example and scope notes.

## How it works

Recursively split and merge halves.

Source functions: `mergeSort()`, `merge()`, `sortArray()`.

## Scope and limitations

Allocates extra arrays.

## Learning exercise

Trace the example through the source, try an empty input and a boundary case, and explain the result. Read the limits above before extending the demo.

The preview is an illustration of a documented use case, not a captured screenshot.

## Step-by-step trace

The independent learning panel provides Step, Play, Pause, Reset and interval controls. Sorting and tree traces accept up to 20 finite numbers. Graph traces use the documented fixed sample graph. Tree snapshots show root/L/R paths; AVL snapshots are taken after each insertion and rebalance, while heap snapshots include sift-up swaps. This trace does not change the original demo controls.

## Pseudocode, complexity and exercises

See the [Merge Sort learning notes](../docs/ALGORITHMS.md#31-merge-sort) for pseudocode, a worked example, time/space cost and an exercise.
