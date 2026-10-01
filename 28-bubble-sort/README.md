# 28. Bubble Sort

[Project gallery](../index.html) · [Collection guide](../README.md) · [Open page](index.html)

**Status:** Interactive demo. An implementation exists and was reviewed from source; this is not certification of every input.

![Illustrated guide card, not a screenshot](../assets/previews/28-bubble-sort.svg)

Sort integers and count passes/swaps.

## Files and technology

- `index.html`: interface with embedded HTML, CSS and JavaScript.
- `README.md`: purpose, example, implementation and limits.
- Shared catalogue, navigation and preview assets live in `../assets/`.
No install or build step is required. Open this page locally or use the local-server command in the root guide.

## Try it

5,2,9,1 becomes 1,2,5,9.

Use the fields and controls shown on the page. Expand Project guide below the demo for the same example and scope notes.

## How it works

Swap adjacent out-of-order elements; stop early when sorted.

Source functions: `sortArray()`.

## Scope and limitations

Quadratic worst-case work; use small arrays.

## Learning exercise

Trace the example through the source, try an empty input and a boundary case, and explain the result. Read the limits above before extending the demo.

The preview is an illustration of a documented use case, not a captured screenshot.

## Step-by-step trace

The independent learning panel provides Step, Play, Pause, Reset and interval controls. Sorting and tree traces accept up to 20 finite numbers. Graph traces use the documented fixed sample graph. Tree snapshots show root/L/R paths; AVL snapshots are taken after each insertion and rebalance, while heap snapshots include sift-up swaps. This trace does not change the original demo controls.

## Native C version

`main.c` provides a separate C11 command-line implementation. From the repository root, with GCC or Clang installed:

```sh
cc -std=c11 -Wall -Wextra -Werror 28-bubble-sort/main.c -o bubble
./bubble 5 2 9 1
```

Expected output: `1 2 5 9`. On Windows, use `bubble.exe` as the output name and run `.\bubble.exe`. Invalid arguments exit with status 1 and an error on stderr. See [native guide](../native/README.md) for numeric limits and automated compilation checks.

## Pseudocode, complexity and exercises

See the [Bubble Sort learning notes](../docs/ALGORITHMS.md#28-bubble-sort) for pseudocode, a worked example, time/space cost and an exercise.
