# 48. AVL Tree

[Project gallery](../index.html) · [Collection guide](../README.md) · [Open page](index.html)

**Status:** Interactive demo. An implementation exists and was reviewed from source; this is not certification of every input.

![Illustrated guide card, not a screenshot](../assets/previews/48-avl-tree.svg)

AVL insert/delete with rotations.

## Files and technology

- `index.html`: interface with embedded HTML, CSS and JavaScript.
- `README.md`: purpose, example, implementation and limits.
- Shared catalogue, navigation and preview assets live in `../assets/`.
No install or build step is required. Open this page locally or use the local-server command in the root guide.

## Try it

Insert 3,2,1 to rotate to root 2.

Use the fields and controls shown on the page. Expand Project guide below the demo for the same example and scope notes.

## How it works

Update heights and rebalance with rotations.

Source functions: `node()`, `getH()`, `getBF()`, `updH()`, `rotR()`, `rotL()`, `insertAVL()`, `minNode()`, `deleteAVL()`, `inorder()`, `render()`, `insert()`, `removeNode()`, `clearTree()`.

## Scope and limitations

Display checks root balance, not every node.

## Learning exercise

Trace the example through the source, try an empty input and a boundary case, and explain the result. Read the limits above before extending the demo.

The preview is an illustration of a documented use case, not a captured screenshot.

## Step-by-step trace

The independent learning panel provides Step, Play, Pause, Reset and interval controls. Sorting and tree traces accept up to 20 finite numbers. Graph traces use the documented fixed sample graph. Tree snapshots show root/L/R paths; AVL snapshots are taken after each insertion and rebalance, while heap snapshots include sift-up swaps. This trace does not change the original demo controls.

## Pseudocode, complexity and exercises

See the [Avl Tree learning notes](../docs/ALGORITHMS.md#48-avl-tree) for pseudocode, a worked example, time/space cost and an exercise.

## Actual screenshots

[Desktop](../assets/screenshots/48-avl-tree-desktop.png) · [Mobile](../assets/screenshots/48-avl-tree-mobile.png). See the [screenshot guide](../docs/SCREENSHOTS.md) for capture conditions.
