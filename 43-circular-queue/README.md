# 43. Circular Queue

[Project gallery](../index.html) · [Collection guide](../README.md) · [Open page](index.html)

**Status:** Interactive demo. An implementation exists and was reviewed from source; this is not certification of every input.

![Illustrated guide card, not a screenshot](../assets/previews/43-circular-queue.svg)

Eight-slot circular queue.

## Files and technology

- `index.html`: interface with embedded HTML, CSS and JavaScript.
- `README.md`: purpose, example, implementation and limits.
- Shared catalogue, navigation and preview assets live in `../assets/`.
No install or build step is required. Open this page locally or use the local-server command in the root guide.

## Try it

Fill eight slots, dequeue one and enqueue to wrap around.

Use the fields and controls shown on the page. Expand Project guide below the demo for the same example and scope notes.

## How it works

Advance front/rear modulo eight.

Source functions: `render()`, `enqueue()`, `dequeue()`, `clearCQ()`.

## Scope and limitations

Fixed capacity of eight.

## Learning exercise

Trace the example through the source, try an empty input and a boundary case, and explain the result. Read the limits above before extending the demo.

The preview is an illustration of a documented use case, not a captured screenshot.

## Pseudocode, complexity and exercises

See the [Circular Queue learning notes](../docs/ALGORITHMS.md#43-circular-queue) for pseudocode, a worked example, time/space cost and an exercise.
