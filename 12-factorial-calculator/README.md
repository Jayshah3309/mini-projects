# 12. Factorial Calculator

[Project gallery](../index.html) · [Collection guide](../README.md) · [Open page](index.html)

**Status:** Interactive demo. An implementation exists and was reviewed from source; this is not certification of every input.

![Illustrated guide card, not a screenshot](../assets/previews/12-factorial-calculator.svg)

Factorial from zero to 170.

## Files and technology

- `index.html`: interface with embedded HTML, CSS and JavaScript.
- `README.md`: purpose, example, implementation and limits.
- Shared catalogue, navigation and preview assets live in `../assets/`.
No install or build step is required. Open this page locally or use the local-server command in the root guide.

## Try it

7! gives 5040.

Use the fields and controls shown on the page. Expand Project guide below the demo for the same example and scope notes.

## How it works

Multiply integers from two through n.

Source functions: `calculate()`.

## Scope and limitations

Large factorials are approximate; detail formatting is illustrative.

## Learning exercise

Trace the example through the source, try an empty input and a boundary case, and explain the result. Read the limits above before extending the demo.

The preview is an illustration of a documented use case, not a captured screenshot.

## Native C version

`main.c` provides a separate C11 command-line implementation. From the repository root, with GCC or Clang installed:

```sh
cc -std=c11 -Wall -Wextra -Werror 12-factorial-calculator/main.c -o factorial
./factorial 5
```

Expected output: `120`. On Windows, use `factorial.exe` as the output name and run `.\factorial.exe`. Invalid arguments exit with status 1 and an error on stderr. See [native guide](../native/README.md) for numeric limits and automated compilation checks.
