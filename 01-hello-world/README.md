# 01. Hello World

[Project gallery](../index.html) · [Collection guide](../README.md) · [Open page](index.html)

**Status:** Interactive demo. An implementation exists and was reviewed from source; this is not certification of every input.

![Illustrated guide card, not a screenshot](../assets/previews/01-hello-world.svg)

Personalized greeting with an empty-name fallback.

## Files and technology

- `index.html`: interface with embedded HTML, CSS and JavaScript.
- `README.md`: purpose, example, implementation and limits.
- Shared catalogue, navigation and preview assets live in `../assets/`.
No install or build step is required. Open this page locally or use the local-server command in the root guide.

## Try it

Jay gives Hello, Jay!

Use the fields and controls shown on the page. Expand Project guide below the demo for the same example and scope notes.

## How it works

Trim the name; use World when empty.

Source functions: `greet()`.

## Scope and limitations

Resets on refresh.

## Learning exercise

Trace the example through the source, try an empty input and a boundary case, and explain the result. Read the limits above before extending the demo.

The preview is an illustration of a documented use case, not a captured screenshot.

## Native C version

`main.c` provides a separate C11 command-line implementation. From the repository root, with GCC or Clang installed:

```sh
cc -std=c11 -Wall -Wextra -Werror 01-hello-world/main.c -o hello
./hello Jay
```

Expected output: `Hello, Jay!`. On Windows, use `hello.exe` as the output name and run `.\hello.exe`. Invalid arguments exit with status 1 and an error on stderr. See [native guide](../native/README.md) for numeric limits and automated compilation checks.
