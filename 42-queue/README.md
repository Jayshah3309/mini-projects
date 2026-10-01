# 42. Queue

[Project gallery](../index.html) · [Collection guide](../README.md) · [Open page](index.html)

**Status:** Interactive demo. An implementation exists and was reviewed from source; this is not certification of every input.

![Illustrated guide card, not a screenshot](../assets/previews/42-queue.svg)

Enqueue, dequeue and inspect a queue.

## Files and technology

- `index.html`: interface with embedded HTML, CSS and JavaScript.
- `README.md`: purpose, example, implementation and limits.
- Shared catalogue, navigation and preview assets live in `../assets/`.
No install or build step is required. Open this page locally or use the local-server command in the root guide.

## Try it

Enqueue 1, then 2; Dequeue removes 1.

Use the fields and controls shown on the page. Expand Project guide below the demo for the same example and scope notes.

## How it works

Use an array as a FIFO queue.

Source functions: `render()`, `enqueue()`, `dequeue()`, `peekFront()`, `clearQueue()`.

## Scope and limitations

Array shift is linear work; refresh clears state.

## Learning exercise

Trace the example through the source, try an empty input and a boundary case, and explain the result. Read the limits above before extending the demo.

The preview is an illustration of a documented use case, not a captured screenshot.
