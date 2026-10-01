# 39. Base64 Text Encoding

[Project gallery](../index.html) · [Collection guide](../README.md) · [Open page](index.html)

**Status:** Interactive demo. An implementation exists and was reviewed from source; this is not certification of every input.

![Illustrated guide card, not a screenshot](../assets/previews/39-text-encryption.svg)

UTF-8 Base64 encoding and decoding.

## Files and technology

- `index.html`: interface with embedded HTML, CSS and JavaScript.
- `README.md`: purpose, example, implementation and limits.
- Shared catalogue, navigation and preview assets live in `../assets/`.
No install or build step is required. Open this page locally or use the local-server command in the root guide.

## Try it

Hello becomes SGVsbG8= and decodes to Hello.

Use the fields and controls shown on the page. Expand Project guide below the demo for the same example and scope notes.

## How it works

Encode UTF-8 bytes as Base64 and reverse the process.

Source functions: `encode()`, `decode()`.

## Scope and limitations

Base64 provides no confidentiality.

## Learning exercise

Trace the example through the source, try an empty input and a boundary case, and explain the result. Read the limits above before extending the demo.

The preview is an illustration of a documented use case, not a captured screenshot.
