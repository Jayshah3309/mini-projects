# Mini Projects

[![Repository checks](https://github.com/Jayshah3309/mini-projects/actions/workflows/checks.yml/badge.svg)](https://github.com/Jayshah3309/mini-projects/actions/workflows/checks.yml)

100 learning projects: **73 interactive browser demos and 27 planned project briefs**.

The current demos use **HTML, CSS and JavaScript**, usually embedded in each `index.html`. The topics include algorithms and C programming exercises, but eight selected folders now also contain independent native C11 programs. Networking and embedded projects needing another runtime are clearly marked as planned.

[Open the live gallery](https://jayshah3309.github.io/mini-projects/) · [Detailed catalogue](docs/PROJECTS.md) · [Roadmap](docs/ROADMAP.md) · [Contributing](CONTRIBUTING.md) · [Algorithm lessons](docs/ALGORITHMS.md) · [Native C](native/README.md) · [Testing](docs/TESTING.md) · [Changelog](CHANGELOG.md)

## Run locally

```sh
git clone https://github.com/Jayshah3309/mini-projects.git
cd mini-projects
```

Open the root `index.html` in a modern browser. Search by name or number, filter by category or status, and choose a project. The gallery uses local scripts: no dependencies, install or build step.

Alternatively, with Python installed:

```sh
python -m http.server 8000
```

Open `http://localhost:8000/`. A local server gives storage a consistent origin; local-file storage behavior varies by browser. The Contact Manager uses local storage. Most other demos reset on refresh.

## Status and previews

- **Demo:** implementation exists and has been reviewed from source. It is not certification of every input or production readiness.
- **Planned:** project brief, acceptance example and development checklist. Functionality is not implemented.
- Preview images are illustrated guide cards, not screenshots.

## Learning path

Start with Hello World and simple calculators, then searches and sorting, followed by data structures and graph algorithms. System-looking pages such as Process Monitor and Mini Shell are browser simulations.

## Contents

| # | Project | Category | Status | Page | Guide |
|---:|---|---|---|---|---|
| 1 | Hello World | Getting started | Demo | [Open](01-hello-world/index.html) | [Read](01-hello-world/README.md) |
| 2 | Calculator | Numbers & calculators | Demo | [Open](02-calculator/index.html) | [Read](02-calculator/README.md) |
| 3 | Temperature Converter | Numbers & calculators | Demo | [Open](03-temperature-converter/index.html) | [Read](03-temperature-converter/README.md) |
| 4 | Currency Converter | Numbers & calculators | Demo | [Open](04-currency-converter/index.html) | [Read](04-currency-converter/README.md) |
| 5 | Area Calculator | Numbers & calculators | Demo | [Open](05-area-calculator/index.html) | [Read](05-area-calculator/README.md) |
| 6 | BMI Calculator | Numbers & calculators | Demo | [Open](06-bmi-calculator/index.html) | [Read](06-bmi-calculator/README.md) |
| 7 | Even/Odd Checker | Numbers & calculators | Demo | [Open](07-even-odd-checker/index.html) | [Read](07-even-odd-checker/README.md) |
| 8 | Prime Number Checker | Numbers & calculators | Demo | [Open](08-prime-checker/index.html) | [Read](08-prime-checker/README.md) |
| 9 | Leap Year Checker | Numbers & calculators | Demo | [Open](09-leap-year-checker/index.html) | [Read](09-leap-year-checker/README.md) |
| 10 | Armstrong Number Checker | Numbers & calculators | Demo | [Open](10-armstrong-number/index.html) | [Read](10-armstrong-number/README.md) |
| 11 | Fibonacci Series | Numbers & calculators | Demo | [Open](11-fibonacci-series/index.html) | [Read](11-fibonacci-series/README.md) |
| 12 | Factorial Calculator | Numbers & calculators | Demo | [Open](12-factorial-calculator/index.html) | [Read](12-factorial-calculator/README.md) |
| 13 | Multiplication Table | Numbers & calculators | Demo | [Open](13-multiplication-table/index.html) | [Read](13-multiplication-table/README.md) |
| 14 | GCD & LCM Calculator | Numbers & calculators | Demo | [Open](14-gcd-lcm-calculator/index.html) | [Read](14-gcd-lcm-calculator/README.md) |
| 15 | Number Reversal | Numbers & calculators | Demo | [Open](15-number-reversal/index.html) | [Read](15-number-reversal/README.md) |
| 16 | Palindrome Checker | Numbers & calculators | Demo | [Open](16-palindrome-checker/index.html) | [Read](16-palindrome-checker/README.md) |
| 17 | Pattern Printing | Numbers & calculators | Demo | [Open](17-pattern-printing/index.html) | [Read](17-pattern-printing/README.md) |
| 18 | Simple Interest Calculator | Numbers & calculators | Demo | [Open](18-simple-interest/index.html) | [Read](18-simple-interest/README.md) |
| 19 | Compound Interest Calculator | Numbers & calculators | Demo | [Open](19-compound-interest/index.html) | [Read](19-compound-interest/README.md) |
| 20 | Number Guessing Game | Numbers & calculators | Demo | [Open](20-number-guessing-game/index.html) | [Read](20-number-guessing-game/README.md) |
| 21 | Matrix Addition | Arrays & algorithms | Demo | [Open](21-matrix-addition/index.html) | [Read](21-matrix-addition/README.md) |
| 22 | Matrix Multiplication | Arrays & algorithms | Demo | [Open](22-matrix-multiplication/index.html) | [Read](22-matrix-multiplication/README.md) |
| 23 | Matrix Transpose | Arrays & algorithms | Demo | [Open](23-matrix-transpose/index.html) | [Read](23-matrix-transpose/README.md) |
| 24 | Matrix Determinant | Arrays & algorithms | Demo | [Open](24-matrix-determinant/index.html) | [Read](24-matrix-determinant/README.md) |
| 25 | Array Statistics | Arrays & algorithms | Demo | [Open](25-array-statistics/index.html) | [Read](25-array-statistics/README.md) |
| 26 | Linear Search | Arrays & algorithms | Demo | [Open](26-linear-search/index.html) | [Read](26-linear-search/README.md) |
| 27 | Binary Search | Arrays & algorithms | Demo | [Open](27-binary-search/index.html) | [Read](27-binary-search/README.md) |
| 28 | Bubble Sort | Arrays & algorithms | Demo | [Open](28-bubble-sort/index.html) | [Read](28-bubble-sort/README.md) |
| 29 | Selection Sort | Arrays & algorithms | Demo | [Open](29-selection-sort/index.html) | [Read](29-selection-sort/README.md) |
| 30 | Insertion Sort | Arrays & algorithms | Demo | [Open](30-insertion-sort/index.html) | [Read](30-insertion-sort/README.md) |
| 31 | Merge Sort | Arrays & algorithms | Demo | [Open](31-merge-sort/index.html) | [Read](31-merge-sort/README.md) |
| 32 | Quick Sort | Arrays & algorithms | Demo | [Open](32-quick-sort/index.html) | [Read](32-quick-sort/README.md) |
| 33 | String Reverse | Text & files | Demo | [Open](33-string-reverse/index.html) | [Read](33-string-reverse/README.md) |
| 34 | String Palindrome | Text & files | Demo | [Open](34-string-palindrome/index.html) | [Read](34-string-palindrome/README.md) |
| 35 | String Compression | Text & files | Demo | [Open](35-string-compression/index.html) | [Read](35-string-compression/README.md) |
| 36 | Word Counter | Text & files | Demo | [Open](36-word-counter/index.html) | [Read](36-word-counter/README.md) |
| 37 | Character Frequency | Text & files | Demo | [Open](37-character-frequency/index.html) | [Read](37-character-frequency/README.md) |
| 38 | Caesar Cipher | Text & files | Demo | [Open](38-caesar-cipher/index.html) | [Read](38-caesar-cipher/README.md) |
| 39 | Base64 Text Encoding | Text & files | Demo | [Open](39-text-encryption/index.html) | [Read](39-text-encryption/README.md) |
| 40 | CSV File Reader | Text & files | Demo | [Open](40-csv-file-reader/index.html) | [Read](40-csv-file-reader/README.md) |
| 41 | Stack | Data structures | Demo | [Open](41-stack/index.html) | [Read](41-stack/README.md) |
| 42 | Queue | Data structures | Demo | [Open](42-queue/index.html) | [Read](42-queue/README.md) |
| 43 | Circular Queue | Data structures | Demo | [Open](43-circular-queue/index.html) | [Read](43-circular-queue/README.md) |
| 44 | Singly Linked List | Data structures | Demo | [Open](44-linked-list/index.html) | [Read](44-linked-list/README.md) |
| 45 | Doubly Linked List | Data structures | Demo | [Open](45-doubly-linked-list/index.html) | [Read](45-doubly-linked-list/README.md) |
| 46 | Circular Linked List | Data structures | Demo | [Open](46-circular-linked-list/index.html) | [Read](46-circular-linked-list/README.md) |
| 47 | Binary Search Tree | Data structures | Demo | [Open](47-binary-search-tree/index.html) | [Read](47-binary-search-tree/README.md) |
| 48 | AVL Tree | Data structures | Demo | [Open](48-avl-tree/index.html) | [Read](48-avl-tree/README.md) |
| 49 | Heap (Max-Heap) | Data structures | Demo | [Open](49-heap/index.html) | [Read](49-heap/README.md) |
| 50 | Priority Queue | Data structures | Demo | [Open](50-priority-queue/index.html) | [Read](50-priority-queue/README.md) |
| 51 | Hash Table | Data structures | Demo | [Open](51-hash-table/index.html) | [Read](51-hash-table/README.md) |
| 52 | Graph (Adjacency List) | Graph algorithms | Demo | [Open](52-graph/index.html) | [Read](52-graph/README.md) |
| 53 | DFS Traversal | Graph algorithms | Demo | [Open](53-dfs/index.html) | [Read](53-dfs/README.md) |
| 54 | BFS Traversal | Graph algorithms | Demo | [Open](54-bfs/index.html) | [Read](54-bfs/README.md) |
| 55 | Dijkstra's Algorithm | Graph algorithms | Demo | [Open](55-dijkstra/index.html) | [Read](55-dijkstra/README.md) |
| 56 | Kruskal's Algorithm | Graph algorithms | Demo | [Open](56-kruskal/index.html) | [Read](56-kruskal/README.md) |
| 57 | Prim's Algorithm | Graph algorithms | Demo | [Open](57-prim/index.html) | [Read](57-prim/README.md) |
| 58 | Huffman Coding | Graph algorithms | Demo | [Open](58-huffman-coding/index.html) | [Read](58-huffman-coding/README.md) |
| 59 | Expression Evaluator | Numbers & calculators | Demo | [Open](59-expression-evaluator/index.html) | [Read](59-expression-evaluator/README.md) |
| 60 | Polynomial Calculator | Numbers & calculators | Demo | [Open](60-polynomial-calculator/index.html) | [Read](60-polynomial-calculator/README.md) |
| 61 | Mini Shell | Systems & simulations | Demo | [Open](61-mini-shell/index.html) | [Read](61-mini-shell/README.md) |
| 62 | File Manager | Systems & simulations | Demo | [Open](62-file-manager/index.html) | [Read](62-file-manager/README.md) |
| 63 | Text Editor | Systems & simulations | Demo | [Open](63-text-editor/index.html) | [Read](63-text-editor/README.md) |
| 64 | Process Monitor | Systems & simulations | Demo | [Open](64-process-monitor/index.html) | [Read](64-process-monitor/README.md) |
| 65 | Memory Allocator | Systems & simulations | Demo | [Open](65-memory-allocator/index.html) | [Read](65-memory-allocator/README.md) |
| 66 | Student Database | Management apps | Demo | [Open](66-student-database/index.html) | [Read](66-student-database/README.md) |
| 67 | Library Management | Management apps | Demo | [Open](67-library-management/index.html) | [Read](67-library-management/README.md) |
| 68 | Banking System | Management apps | Planned | [Open](68-banking-system/index.html) | [Read](68-banking-system/README.md) |
| 69 | Employee Management | Management apps | Planned | [Open](69-employee-management/index.html) | [Read](69-employee-management/README.md) |
| 70 | Inventory Management | Management apps | Demo | [Open](70-inventory-management/index.html) | [Read](70-inventory-management/README.md) |
| 71 | Contact Manager | Text & files | Demo | [Open](71-contact-manager/index.html) | [Read](71-contact-manager/README.md) |
| 72 | Text Compression Lab | Text & files | Demo | [Open](72-file-compression/index.html) | [Read](72-file-compression/README.md) |
| 73 | Log Analyzer | Text & files | Demo | [Open](73-log-analyzer/index.html) | [Read](73-log-analyzer/README.md) |
| 74 | Configuration Parser | Text & files | Demo | [Open](74-configuration-parser/index.html) | [Read](74-configuration-parser/README.md) |
| 75 | Command Interpreter | Systems & simulations | Demo | [Open](75-command-interpreter/index.html) | [Read](75-command-interpreter/README.md) |
| 76 | TCP Chat Server | Networking | Planned | [Open](76-tcp-chat-server/index.html) | [Read](76-tcp-chat-server/README.md) |
| 77 | TCP Chat Client | Networking | Planned | [Open](77-tcp-chat-client/index.html) | [Read](77-tcp-chat-client/README.md) |
| 78 | HTTP Client | Networking | Planned | [Open](78-http-client/index.html) | [Read](78-http-client/README.md) |
| 79 | HTTP Server | Networking | Planned | [Open](79-http-server/index.html) | [Read](79-http-server/README.md) |
| 80 | Multi Threaded Calculator | Systems & simulations | Planned | [Open](80-multi-threaded-calculator/index.html) | [Read](80-multi-threaded-calculator/README.md) |
| 81 | Mini Compiler | Language tools | Planned | [Open](81-mini-compiler/index.html) | [Read](81-mini-compiler/README.md) |
| 82 | Simple Interpreter | Language tools | Planned | [Open](82-simple-interpreter/index.html) | [Read](82-simple-interpreter/README.md) |
| 83 | Virtual Machine | Language tools | Planned | [Open](83-virtual-machine/index.html) | [Read](83-virtual-machine/README.md) |
| 84 | Database Engine | Language tools | Planned | [Open](84-database-engine/index.html) | [Read](84-database-engine/README.md) |
| 85 | File System Simulator | Systems & simulations | Planned | [Open](85-file-system-simulator/index.html) | [Read](85-file-system-simulator/README.md) |
| 86 | Cpu Scheduler | Systems & simulations | Planned | [Open](86-cpu-scheduler/index.html) | [Read](86-cpu-scheduler/README.md) |
| 87 | Process Scheduler | Systems & simulations | Planned | [Open](87-process-scheduler/index.html) | [Read](87-process-scheduler/README.md) |
| 88 | Memory Management Simulator | Systems & simulations | Planned | [Open](88-memory-management-simulator/index.html) | [Read](88-memory-management-simulator/README.md) |
| 89 | Disk Scheduling Simulator | Systems & simulations | Planned | [Open](89-disk-scheduling-simulator/index.html) | [Read](89-disk-scheduling-simulator/README.md) |
| 90 | Cache Simulator | Systems & simulations | Planned | [Open](90-cache-simulator/index.html) | [Read](90-cache-simulator/README.md) |
| 91 | Operating System Simulator | Systems & simulations | Planned | [Open](91-operating-system-simulator/index.html) | [Read](91-operating-system-simulator/README.md) |
| 92 | Packet Analyzer | Networking | Planned | [Open](92-packet-analyzer/index.html) | [Read](92-packet-analyzer/README.md) |
| 93 | Mini Debugger | Language tools | Planned | [Open](93-mini-debugger/index.html) | [Read](93-mini-debugger/README.md) |
| 94 | Static Code Analyzer | Language tools | Planned | [Open](94-static-code-analyzer/index.html) | [Read](94-static-code-analyzer/README.md) |
| 95 | Embedded CLI Framework | Embedded systems | Planned | [Open](95-embedded-cli-framework/index.html) | [Read](95-embedded-cli-framework/README.md) |
| 96 | RTOS Task Simulator | Embedded systems | Planned | [Open](96-rtos-task-simulator/index.html) | [Read](96-rtos-task-simulator/README.md) |
| 97 | UART Terminal | Embedded systems | Planned | [Open](97-uart-terminal/index.html) | [Read](97-uart-terminal/README.md) |
| 98 | Bootloader Simulator | Embedded systems | Planned | [Open](98-bootloader-simulator/index.html) | [Read](98-bootloader-simulator/README.md) |
| 99 | Embedded Logging Library | Embedded systems | Planned | [Open](99-embedded-logging-library/index.html) | [Read](99-embedded-logging-library/README.md) |
| 100 | C Utility Toolkit | Embedded systems | Planned | [Open](100-c-utility-toolkit/index.html) | [Read](100-c-utility-toolkit/README.md) |

## Structure

```text
index.html                 Searchable gallery
assets/                    Catalogue, styles/scripts and illustrated previews
01-hello-world/            Project page and its README
...                        One folder per numbered project
docs/PROJECTS.md           Features, examples and limits
docs/ROADMAP.md            Planned project goals
CONTRIBUTING.md            Contribution guide
native/                    Shared C input helper and native guide
tests/                     Unit and desktop/mobile browser tests
tools/                     Repository and native compilation checks
.github/                   Checks workflow and contributor templates
```

## Scope notes

Currency rates are fixed sample values. Base64 is encoding and Caesar is a historical cipher example. Linked lists use arrays as visual simulations. Traversals and spanning trees use fixed sample graphs. The simple CSV reader does not support quoted commas. JavaScript numbers have finite precision.

Planned TCP/server/UART projects need an explicit runtime or supported hardware interface before becoming demos. Read each project guide for its exact scope.

## Review changes

Open the gallery and affected pages in a modern browser. Try the documented example, empty inputs and boundary values. Review the layout at wide and narrow widths and navigate with a keyboard.

## Development checks

Opening the demos needs no dependencies. For development, use Node.js 22+ and Python 3:

```sh
npm ci
npm run check
npm test
npx playwright install chromium
npm run test:browser
python tools/check_native.py
```

The final command requires GCC or a compiler selected with `CC`. See [testing and accessibility](docs/TESTING.md) for coverage and manual review. Screenshots are generated from actual browser pages; the original SVG guide cards remain clearly labelled illustrations.

## What is new

Three management apps now save validated records locally. Thirteen algorithms have controllable learning traces, and 26 topics have pseudocode, worked examples and complexity notes. Eight folders include C11 versions alongside their browser demos.

## License

See [licensing status](docs/LICENSING.md). No license is granted unless a LICENSE file is added following the owner's choice.
