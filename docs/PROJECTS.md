# Project catalogue

Reviewed from source. Demo means implemented; Planned means a project brief.

## 01. [Hello World](../01-hello-world/README.md)

**Status:** Demo · **Category:** Getting started

Personalized greeting with an empty-name fallback.

**Example:** Jay gives Hello, Jay!

**Implementation:** Trim the name; use World when empty.

**Limits:** Resets on refresh.

## 02. [Calculator](../02-calculator/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Button-keypad arithmetic.

**Example:** (2+3)*4 gives 20.

**Implementation:** Evaluate the collected numeric expression.

**Limits:** Floating point arithmetic can round decimals.

## 03. [Temperature Converter](../03-temperature-converter/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Celsius, Fahrenheit and Kelvin conversion.

**Example:** 0 Celsius gives 32 Fahrenheit.

**Implementation:** Convert through Celsius.

**Limits:** No absolute-zero validation.

## 04. [Currency Converter](../04-currency-converter/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Eight currencies using fixed sample rates.

**Example:** 100 USD gives 92 EUR with the supplied rates.

**Implementation:** Convert through a USD base rate.

**Limits:** Fixed illustrative rates; not live exchange rates.

## 05. [Area Calculator](../05-area-calculator/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Areas of circles, rectangles, triangles and squares.

**Example:** Rectangle 4 by 3 has area 12.

**Implementation:** Use the formula for the selected shape.

**Limits:** Use consistent dimension units.

## 06. [BMI Calculator](../06-bmi-calculator/README.md)

**Status:** Demo · **Category:** Numbers & calculators

BMI from kilograms and centimetres.

**Example:** 70 kg at 175 cm gives 22.9.

**Implementation:** Weight divided by height in metres squared.

**Limits:** A basic adult BMI category demonstration.

## 07. [Even/Odd Checker](../07-even-odd-checker/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Integer parity checker.

**Example:** 7 is odd; 8 is even.

**Implementation:** Check the remainder modulo two.

**Limits:** The parser truncates decimal input.

## 08. [Prime Number Checker](../08-prime-checker/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Prime number checker.

**Example:** 17 is prime; 18 is not.

**Implementation:** Try divisors up to the square root.

**Limits:** Use small nonnegative integers; large inputs can block the browser.

## 09. [Leap Year Checker](../09-leap-year-checker/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Gregorian leap year rule.

**Example:** 2024 and 2000 are leap; 1900 is not.

**Implementation:** Divisible by four except centuries not divisible by 400.

**Limits:** Applies the Gregorian rule to all input years.

## 10. [Armstrong Number Checker](../10-armstrong-number/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Armstrong number checker.

**Example:** 153 equals 1^3 + 5^3 + 3^3.

**Implementation:** Sum digits raised to the number of digits.

**Limits:** Use nonnegative integers within JavaScript precision.

## 11. [Fibonacci Series](../11-fibonacci-series/README.md)

**Status:** Demo · **Category:** Numbers & calculators

First 1 to 100 Fibonacci terms.

**Example:** 10 terms gives 0,1,1,2,3,5,8,13,21,34.

**Implementation:** Each term sums its two predecessors.

**Limits:** Large terms lose exact integer precision.

## 12. [Factorial Calculator](../12-factorial-calculator/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Factorial from zero to 170.

**Example:** 7! gives 5040.

**Implementation:** Multiply integers from two through n.

**Limits:** Large factorials are approximate; detail formatting is illustrative.

## 13. [Multiplication Table](../13-multiplication-table/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Ten-row multiplication table.

**Example:** 5 gives 5x1 through 5x10.

**Implementation:** Multiply an integer by each row index.

**Limits:** Table length is fixed at ten.

## 14. [GCD & LCM Calculator](../14-gcd-lcm-calculator/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Greatest common divisor and least common multiple.

**Example:** 12 and 18 gives GCD 6 and LCM 36.

**Implementation:** Euclid's algorithm; LCM uses abs(a*b)/GCD.

**Limits:** Large products may lose precision.

## 15. [Number Reversal](../15-number-reversal/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Reverse the digits of an integer.

**Example:** 12345 becomes 54321.

**Implementation:** Reverse the digit string while retaining the sign.

**Limits:** Leading zeros may appear in the displayed reverse.

## 16. [Palindrome Checker](../16-palindrome-checker/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Normalized word or number palindrome.

**Example:** Racecar is a palindrome.

**Implementation:** Keep ASCII letters/digits, lowercase and compare with the reverse.

**Limits:** Non-ASCII letters and punctuation are excluded.

## 17. [Pattern Printing](../17-pattern-printing/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Star triangles, pyramids, number triangles and diamonds.

**Example:** Star Triangle with 3 rows gives *, **, ***.

**Implementation:** Repeat spaces and symbols according to the row number.

**Limits:** Rows are limited to 1 through 20.

## 18. [Simple Interest Calculator](../18-simple-interest/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Simple interest and total amount.

**Example:** 10000 at 8 percent for 3 years gives interest 2400.

**Implementation:** P*R*T/100.

**Limits:** Educational fixed-rate formula; no fees or taxes.

## 19. [Compound Interest Calculator](../19-compound-interest/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Compounded interest with four frequencies.

**Example:** 10000 at 8 percent for 5 years quarterly gives total about 14859.47.

**Implementation:** P*(1+r/n)^(n*t).

**Limits:** Fixed-rate formula; no deposits or fees.

## 20. [Number Guessing Game](../20-number-guessing-game/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Guess a random integer between one and 100.

**Example:** Try 50 and follow the higher/lower hint; New Game resets attempts.

**Implementation:** Compare guesses to a random target.

**Limits:** No saved scores; refresh changes the game.

## 21. [Matrix Addition](../21-matrix-addition/README.md)

**Status:** Demo · **Category:** Arrays & algorithms

Add two same-size matrices.

**Example:** Default 3x3 matrices give 10 in each result cell.

**Implementation:** Add corresponding cells.

**Limits:** At most eight rows/columns; blank cells count as zero.

## 22. [Matrix Multiplication](../22-matrix-multiplication/README.md)

**Status:** Demo · **Category:** Arrays & algorithms

Multiply matrices with matching inner dimensions.

**Example:** [[1,2],[3,4]] times [[5,6],[7,8]] gives [[19,22],[43,50]].

**Implementation:** Compute row-column dot products.

**Limits:** At most five rows/columns; select Set after changing size.

## 23. [Matrix Transpose](../23-matrix-transpose/README.md)

**Status:** Demo · **Category:** Arrays & algorithms

Transpose rows and columns.

**Example:** [[1,2,3],[4,5,6]] becomes [[1,4],[2,5],[3,6]].

**Implementation:** Write [r,c] to [c,r].

**Limits:** At most six rows/columns; select Set after changing size.

## 24. [Matrix Determinant](../24-matrix-determinant/README.md)

**Status:** Demo · **Category:** Arrays & algorithms

Determinant of a small square matrix.

**Example:** [[1,2],[3,4]] has determinant -2.

**Implementation:** Recursive cofactor expansion.

**Limits:** Sizes two through five; inefficient for large matrices.

## 25. [Array Statistics](../25-array-statistics/README.md)

**Status:** Demo · **Category:** Arrays & algorithms

Count, sum, minimum, maximum, mean and median.

**Example:** 1,2,3,4 gives sum 10, mean 2.5 and median 2.5.

**Implementation:** Validate finite numbers, aggregate and sort a copy for median.

**Limits:** At most 10000 entries; floating point results may round.

## 26. [Linear Search](../26-linear-search/README.md)

**Status:** Demo · **Category:** Arrays & algorithms

Find the first matching integer.

**Example:** 4,2,8,5 with target 8 returns index 2.

**Implementation:** Scan until the first match.

**Limits:** Zero-based indices; integer parsing.

## 27. [Binary Search](../27-binary-search/README.md)

**Status:** Demo · **Category:** Arrays & algorithms

Search an ascending integer array.

**Example:** 1,3,5,7,9 with target 7 returns index 3.

**Implementation:** Repeatedly halve the search interval.

**Limits:** Input must be sorted ascending.

## 28. [Bubble Sort](../28-bubble-sort/README.md)

**Status:** Demo · **Category:** Arrays & algorithms

Sort integers and count passes/swaps.

**Example:** 5,2,9,1 becomes 1,2,5,9.

**Implementation:** Swap adjacent out-of-order elements; stop early when sorted.

**Limits:** Quadratic worst-case work; use small arrays.

## 29. [Selection Sort](../29-selection-sort/README.md)

**Status:** Demo · **Category:** Arrays & algorithms

Sort integers and count swaps.

**Example:** 29,10,14 becomes 10,14,29.

**Implementation:** Select the smallest remaining value for each position.

**Limits:** Quadratic comparisons.

## 30. [Insertion Sort](../30-insertion-sort/README.md)

**Status:** Demo · **Category:** Arrays & algorithms

Sort integers and count shifts.

**Example:** 12,11,5 becomes 5,11,12.

**Implementation:** Insert each value into the sorted prefix.

**Limits:** Quadratic worst-case work.

## 31. [Merge Sort](../31-merge-sort/README.md)

**Status:** Demo · **Category:** Arrays & algorithms

Sort integers with divide and conquer.

**Example:** 38,27,3,9 becomes 3,9,27,38.

**Implementation:** Recursively split and merge halves.

**Limits:** Allocates extra arrays.

## 32. [Quick Sort](../32-quick-sort/README.md)

**Status:** Demo · **Category:** Arrays & algorithms

Sort integers around a pivot.

**Example:** 10,7,8,1 becomes 1,7,8,10.

**Implementation:** Partition around the last value and recurse.

**Limits:** Sorted/equal data may cause deep recursion.

## 33. [String Reverse](../33-string-reverse/README.md)

**Status:** Demo · **Category:** Text & files

Reverse a string.

**Example:** Hello World becomes dlroW olleH.

**Implementation:** Reverse JavaScript UTF-16 code units.

**Limits:** Some emoji and combined characters may split.

## 34. [String Palindrome](../34-string-palindrome/README.md)

**Status:** Demo · **Category:** Text & files

Normalized string palindrome checker.

**Example:** A man, a plan, a canal: Panama is a palindrome.

**Implementation:** Compare lowercase ASCII letters/digits with the reverse.

**Limits:** An empty normalized string is accepted by the original demo.

## 35. [String Compression](../35-string-compression/README.md)

**Status:** Demo · **Category:** Text & files

Run-length encoding of repeated characters.

**Example:** aabbbcccc becomes a2b3c4.

**Implementation:** Count each consecutive character run.

**Limits:** Illustrative format is ambiguous for digit-containing input.

## 36. [Word Counter](../36-word-counter/README.md)

**Status:** Demo · **Category:** Text & files

Words, characters and simple sentence counts.

**Example:** Hello world. has 2 words and 1 sentence.

**Implementation:** Split on whitespace and sentence punctuation.

**Limits:** Sentence counting is heuristic; characters use UTF-16 code units.

## 37. [Character Frequency](../37-character-frequency/README.md)

**Status:** Demo · **Category:** Text & files

Character counts and frequency bars.

**Example:** banana gives a:3, n:2, b:1.

**Implementation:** Count non-space characters and sort by frequency.

**Limits:** Case-sensitive; skips literal spaces.

## 38. [Caesar Cipher](../38-caesar-cipher/README.md)

**Status:** Demo · **Category:** Text & files

Caesar letter shifting and reverse transformation.

**Example:** HELLO with shift 3 becomes KHOOR; shift 0 is unchanged.

**Implementation:** Normalize shifts modulo 26 and wrap ASCII letters.

**Limits:** Historical cipher demonstration; not suitable for private information.

## 39. [Base64 Text Encoding](../39-text-encryption/README.md)

**Status:** Demo · **Category:** Text & files

UTF-8 Base64 encoding and decoding.

**Example:** Hello becomes SGVsbG8= and decodes to Hello.

**Implementation:** Encode UTF-8 bytes as Base64 and reverse the process.

**Limits:** Base64 provides no confidentiality.

## 40. [CSV File Reader](../40-csv-file-reader/README.md)

**Status:** Demo · **Category:** Text & files

Simple comma-separated text displayed as a table.

**Example:** Name,Age followed by Alice,28 gives one data row.

**Implementation:** Split lines and comma-separated cells.

**Limits:** Does not support quoted commas or multiline CSV cells.

## 41. [Stack](../41-stack/README.md)

**Status:** Demo · **Category:** Data structures

Push, pop, peek and clear a stack.

**Example:** Push 1, then 2; Pop removes 2.

**Implementation:** Use an array as a LIFO stack.

**Limits:** Browser memory only; refresh clears state.

## 42. [Queue](../42-queue/README.md)

**Status:** Demo · **Category:** Data structures

Enqueue, dequeue and inspect a queue.

**Example:** Enqueue 1, then 2; Dequeue removes 1.

**Implementation:** Use an array as a FIFO queue.

**Limits:** Array shift is linear work; refresh clears state.

## 43. [Circular Queue](../43-circular-queue/README.md)

**Status:** Demo · **Category:** Data structures

Eight-slot circular queue.

**Example:** Fill eight slots, dequeue one and enqueue to wrap around.

**Implementation:** Advance front/rear modulo eight.

**Limits:** Fixed capacity of eight.

## 44. [Singly Linked List](../44-linked-list/README.md)

**Status:** Demo · **Category:** Data structures

Visual singly linked list operations.

**Example:** Add First 1, Add Last 2 and search 2.

**Implementation:** Render an ordered array with forward links.

**Limits:** Array simulation; not pointer-based nodes.

## 45. [Doubly Linked List](../45-doubly-linked-list/README.md)

**Status:** Demo · **Category:** Data structures

Forward and reverse list displays.

**Example:** Add 1,2 to see 1-2 forward and 2-1 backward.

**Implementation:** Render an array in both directions.

**Limits:** Array simulation; no stored previous/next pointers.

## 46. [Circular Linked List](../46-circular-linked-list/README.md)

**Status:** Demo · **Category:** Data structures

List with a visual tail-to-head link.

**Example:** Add 1,2 to see a loop back to HEAD.

**Implementation:** Render array entries with a closing link.

**Limits:** The circular link is illustrative.

## 47. [Binary Search Tree](../47-binary-search-tree/README.md)

**Status:** Demo · **Category:** Data structures

BST insert/delete/search and traversals.

**Example:** Insert 5,3,7: inorder 3,5,7 and preorder 5,3,7.

**Implementation:** Recursive node objects and traversal functions.

**Limits:** Duplicates ignored; skewed trees can have linear height.

## 48. [AVL Tree](../48-avl-tree/README.md)

**Status:** Demo · **Category:** Data structures

AVL insert/delete with rotations.

**Example:** Insert 3,2,1 to rotate to root 2.

**Implementation:** Update heights and rebalance with rotations.

**Limits:** Display checks root balance, not every node.

## 49. [Heap (Max-Heap)](../49-heap/README.md)

**Status:** Demo · **Category:** Data structures

Max-heap insertion and extraction.

**Example:** Insert 4,9,2; Extract Max returns 9.

**Implementation:** Bubble up on insertion; heapify down on extraction.

**Limits:** Educational in-memory heap.

## 50. [Priority Queue](../50-priority-queue/README.md)

**Status:** Demo · **Category:** Data structures

Serve values by descending priority.

**Example:** A at priority 1 and B at 3 dequeues B first.

**Implementation:** Sort an array after enqueue.

**Limits:** Sorted-array implementation; not a heap.

## 51. [Hash Table](../51-hash-table/README.md)

**Status:** Demo · **Category:** Data structures

Eight-bucket key/value hash table.

**Example:** Put name=Jay and Get name returns Jay.

**Implementation:** Hash characters and chain colliding entries.

**Limits:** Fixed eight buckets; no resizing.

## 52. [Graph (Adjacency List)](../52-graph/README.md)

**Status:** Demo · **Category:** Graph algorithms

Undirected adjacency-list graph.

**Example:** Add A-B and A-C to see B,C as A's neighbors.

**Implementation:** Store symmetric neighbor lists.

**Limits:** Self edges rejected; node deletion removes isolated nodes too.

## 53. [DFS Traversal](../53-dfs/README.md)

**Status:** Demo · **Category:** Graph algorithms

DFS of a fixed sample graph.

**Example:** Starting A gives A-B-D-E-C-F.

**Implementation:** Recursively visit alphabetical unvisited neighbors.

**Limits:** Fixed graph; only start node can change.

## 54. [BFS Traversal](../54-bfs/README.md)

**Status:** Demo · **Category:** Graph algorithms

BFS of a fixed sample graph.

**Example:** Starting A gives A-B-C-D-E-F.

**Implementation:** Visit nodes through a FIFO queue.

**Limits:** Fixed graph; only start node can change.

## 55. [Dijkstra's Algorithm](../55-dijkstra/README.md)

**Status:** Demo · **Category:** Graph algorithms

Shortest distances and reconstructed paths.

**Example:** From A: C=2, B=3, D=8, E=10.

**Implementation:** Select nearest unvisited node and relax edges.

**Limits:** Fixed nonnegative graph; minimum selection scans nodes.

## 56. [Kruskal's Algorithm](../56-kruskal/README.md)

**Status:** Demo · **Category:** Graph algorithms

Minimum spanning tree using Kruskal.

**Example:** Find MST gives five edges and total weight 13.

**Implementation:** Sort edges and reject cycles with union-find.

**Limits:** Fixed six-node graph.

## 57. [Prim's Algorithm](../57-prim/README.md)

**Status:** Demo · **Category:** Graph algorithms

Minimum spanning tree using Prim.

**Example:** Starting A gives five edges and total weight 13.

**Implementation:** Grow using the cheapest edge to an unvisited node.

**Limits:** Fixed connected graph.

## 58. [Huffman Coding](../58-huffman-coding/README.md)

**Status:** Demo · **Category:** Graph algorithms

Huffman prefix-code generation and bit estimates.

**Example:** AAAA uses code 0 and four data bits.

**Implementation:** Combine least-frequent nodes, then traverse the tree.

**Limits:** Bit estimate excludes the codebook and uses an eight-bit baseline.

## 59. [Expression Evaluator](../59-expression-evaluator/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Arithmetic with powers and parentheses.

**Example:** 2^3+4 gives 12.

**Implementation:** Convert ^ to exponentiation and evaluate numeric expressions.

**Limits:** Arithmetic only; floating point precision applies.

## 60. [Polynomial Calculator](../60-polynomial-calculator/README.md)

**Status:** Demo · **Category:** Numbers & calculators

Polynomial evaluation from coefficients.

**Example:** 3,-5,2,7 at x=2 gives 15.

**Implementation:** Use Horner's method.

**Limits:** Numeric coefficients; not symbolic algebra.

## 61. [Mini Shell](../61-mini-shell/README.md)

**Status:** Demo · **Category:** Systems & simulations

A simulated shell command prompt.

**Example:** Try help, pwd, echo hello, cd / and ls.

**Implementation:** Dispatch implemented commands and update a virtual path.

**Limits:** No host command execution or real file access.

## 62. [File Manager](../62-file-manager/README.md)

**Status:** Demo · **Category:** Systems & simulations

In-memory virtual files and directories.

**Example:** Create notes.txt, add a folder and open the folder.

**Implementation:** Represent files/directories with explicit object types.

**Limits:** No real-file access; refresh clears state.

## 63. [Text Editor](../63-text-editor/README.md)

**Status:** Demo · **Category:** Systems & simulations

Text editing, markers and text export.

**Example:** Select hello and use B to insert **hello**; Save exports document.txt.

**Implementation:** Edit a textarea and count words, characters and lines.

**Limits:** Marker insertion; not a rich-text renderer.

## 64. [Process Monitor](../64-process-monitor/README.md)

**Status:** Demo · **Category:** Systems & simulations

Simulated process status and resource figures.

**Example:** Add Worker, then Stop a process and inspect the table.

**Implementation:** Track sample processes with generated CPU/memory values.

**Limits:** Figures are simulated, not device measurements.

## 65. [Memory Allocator](../65-memory-allocator/README.md)

**Status:** Demo · **Category:** Systems & simulations

First-fit allocation in a 64 KB simulated pool.

**Example:** Allocate 8 KB, Free Random, then Reset.

**Implementation:** Split free blocks and coalesce neighbors on free.

**Limits:** Free Random selects an allocated block randomly.

## 66. [Student Database](../66-student-database/README.md)

**Status:** Planned · **Category:** Management apps

Planned student record manager.

**Example:** Goal: add ID 101, search it, update and delete it.

**Plan:** Define validated records with unique IDs and storage.

**Limits:** A project brief; CRUD operations are not implemented.

## 67. [Library Management](../67-library-management/README.md)

**Status:** Planned · **Category:** Management apps

Planned book catalogue and loan management.

**Example:** Goal: borrow an available book and restore availability on return.

**Plan:** Track book records and loan state.

**Limits:** A project brief; borrowing and persistence are not implemented.

## 68. [Banking System](../68-banking-system/README.md)

**Status:** Planned · **Category:** Management apps

Planned banking simulation.

**Example:** Goal: deposit 100 in a sample account and reject overdrafts.

**Plan:** Validate simulated transactions and retain an operation history.

**Limits:** No real account or payment integration.

## 69. [Employee Management](../69-employee-management/README.md)

**Status:** Planned · **Category:** Management apps

Planned employee directory.

**Example:** Goal: add a unique employee ID and filter by department.

**Plan:** Validate employee records and provide editing/search.

**Limits:** Directory operations are not implemented.

## 70. [Inventory Management](../70-inventory-management/README.md)

**Status:** Planned · **Category:** Management apps

Planned stock management.

**Example:** Goal: create a SKU and reject stock reductions below zero.

**Plan:** Track quantities and stock changes.

**Limits:** Stock operations are not implemented.

## 71. [Contact Manager](../71-contact-manager/README.md)

**Status:** Demo · **Category:** Text & files

Contacts with search, removal and CSV export.

**Example:** Add Jay / 555-0104, search Jay and export contacts.csv.

**Implementation:** Persist records in browser local storage.

**Limits:** Browser-local data; clearing storage removes saved contacts.

## 72. [Text Compression Lab](../72-file-compression/README.md)

**Status:** Demo · **Category:** Text & files

Structured text run encoding and restoration.

**Example:** Twelve A characters encode as [["A",12]] and restore correctly.

**Implementation:** Store Unicode runs as JSON character/count pairs.

**Limits:** Educational text encoding; JSON overhead can increase size.

## 73. [Log Analyzer](../73-log-analyzer/README.md)

**Status:** Demo · **Category:** Text & files

INFO/WARN/ERROR log counts and highlighting.

**Example:** One INFO and one ERROR line gives two entries.

**Implementation:** Classify literal level markers in nonblank lines.

**Limits:** Other levels have no dedicated counter; not a general log parser.

## 74. [Configuration Parser](../74-configuration-parser/README.md)

**Status:** Demo · **Category:** Text & files

Small INI-style configuration parser.

**Example:** [server] and port=8080 creates a numeric port entry.

**Implementation:** Read section headers and key=value lines; convert numbers/booleans.

**Limits:** Not every INI dialect; no quoted strings or inline comments.

## 75. [Command Interpreter](../75-command-interpreter/README.md)

**Status:** Demo · **Category:** Systems & simulations

Simulated variables and arithmetic commands.

**Example:** set name Jay then name; calc 2+3 gives 5.

**Implementation:** Dispatch commands and keep variables in memory.

**Limits:** No host commands; variables reset on refresh.

## 76. [TCP Chat Server](../76-tcp-chat-server/README.md)

**Status:** Planned · **Category:** Networking

Planned TCP chat server.

**Example:** Goal: connect two clients and exchange newline-delimited messages.

**Plan:** Choose a server runtime and define message framing.

**Limits:** Native TCP needs a runtime beyond a standalone HTML page.

## 77. [TCP Chat Client](../77-tcp-chat-client/README.md)

**Status:** Planned · **Category:** Networking

Planned TCP chat client.

**Example:** Goal: connect to the paired server, send and disconnect.

**Plan:** Read/write framed messages over a TCP socket.

**Limits:** Native TCP needs a runtime beyond a standalone HTML page.

## 78. [HTTP Client](../78-http-client/README.md)

**Status:** Planned · **Category:** Networking

Planned HTTP request playground.

**Example:** Goal: send GET and display status, headers and response.

**Plan:** Use fetch or a documented client runtime.

**Limits:** Browser requests depend on server CORS policy; not implemented.

## 79. [HTTP Server](../79-http-server/README.md)

**Status:** Planned · **Category:** Networking

Planned HTTP server.

**Example:** Goal: GET /health returns JSON with status 200.

**Plan:** Choose a server runtime and define routes.

**Limits:** A standalone HTML page cannot act as an HTTP server.

## 80. [Multi Threaded Calculator](../80-multi-threaded-calculator/README.md)

**Status:** Planned · **Category:** Systems & simulations

Planned worker-based calculation.

**Example:** Goal: calculate while the main page remains responsive.

**Plan:** Use browser workers or a documented native threading runtime.

**Limits:** No worker implementation yet.

## 81. [Mini Compiler](../81-mini-compiler/README.md)

**Status:** Planned · **Category:** Language tools

Planned compiler for a small teaching language.

**Example:** Goal: tokenize a sample and produce documented instructions.

**Plan:** Define grammar, tokenize, parse and generate intermediate code.

**Limits:** No compiler or language specification yet.

## 82. [Simple Interpreter](../82-simple-interpreter/README.md)

**Status:** Planned · **Category:** Language tools

Planned language interpreter.

**Example:** Goal: evaluate a valid sample and report a line-aware syntax error.

**Plan:** Define grammar, parse an AST and evaluate it.

**Limits:** No interpreter or grammar implemented.

## 83. [Virtual Machine](../83-virtual-machine/README.md)

**Status:** Planned · **Category:** Language tools

Planned stack virtual machine.

**Example:** Goal: PUSH 2, PUSH 3, ADD yields stack [5].

**Plan:** Define opcodes, program counter and bounded execution.

**Limits:** No VM implementation yet.

## 84. [Database Engine](../84-database-engine/README.md)

**Status:** Planned · **Category:** Language tools

Planned storage and query engine.

**Example:** Goal: insert a record and retrieve it by indexed key.

**Plan:** Define storage format, tables and query operations.

**Limits:** No persistence or transaction behavior implemented.

## 85. [File System Simulator](../85-file-system-simulator/README.md)

**Status:** Planned · **Category:** Systems & simulations

Planned virtual file system.

**Example:** Goal: create a directory, write a file and read it back.

**Plan:** Represent directories and files as explicit node types.

**Limits:** No file-system simulation implemented.

## 86. [Cpu Scheduler](../86-cpu-scheduler/README.md)

**Status:** Planned · **Category:** Systems & simulations

Planned CPU scheduling timeline.

**Example:** Goal: display FCFS waiting and turnaround times.

**Plan:** Define arrival/burst inputs and a scheduling policy.

**Limits:** No scheduling policy implemented.

## 87. [Process Scheduler](../87-process-scheduler/README.md)

**Status:** Planned · **Category:** Systems & simulations

Planned process-state simulation.

**Example:** Goal: move a process ready-to-running-to-waiting and back.

**Plan:** Define allowed transitions, ready queue and dispatcher.

**Limits:** No process scheduler implemented.

## 88. [Memory Management Simulator](../88-memory-management-simulator/README.md)

**Status:** Planned · **Category:** Systems & simulations

Planned memory/paging demonstration.

**Example:** Goal: visualize allocations and explain a failed request.

**Plan:** Define blocks or page frames and a memory policy.

**Limits:** No memory management simulation implemented.

## 89. [Disk Scheduling Simulator](../89-disk-scheduling-simulator/README.md)

**Status:** Planned · **Category:** Systems & simulations

Planned disk-request service ordering.

**Example:** Goal: compare FCFS and SSTF head movement.

**Plan:** Compute service sequence and total movement.

**Limits:** No disk scheduling algorithms implemented.

## 90. [Cache Simulator](../90-cache-simulator/README.md)

**Status:** Planned · **Category:** Systems & simulations

Planned cache hit/miss demonstration.

**Example:** Goal: show hits/misses for a reference sequence.

**Plan:** Define cache tags and a replacement policy.

**Limits:** No cache model or policy implemented.

## 91. [Operating System Simulator](../91-operating-system-simulator/README.md)

**Status:** Planned · **Category:** Systems & simulations

Planned combined OS teaching simulation.

**Example:** Goal: link process states to bounded resource usage.

**Plan:** Compose explicitly simulated subsystems.

**Limits:** No operating system implementation.

## 92. [Packet Analyzer](../92-packet-analyzer/README.md)

**Status:** Planned · **Category:** Networking

Planned sample packet parser.

**Example:** Goal: explain fields of an uploaded sample packet.

**Plan:** Define input format and decode headers.

**Limits:** No parser; the page cannot capture live network packets.

## 93. [Mini Debugger](../93-mini-debugger/README.md)

**Status:** Planned · **Category:** Language tools

Planned debugger for a toy runtime.

**Example:** Goal: step a sample program and inspect variables.

**Plan:** Integrate stepping/breakpoints with an interpreter or VM.

**Limits:** No debugger or target runtime implemented.

## 94. [Static Code Analyzer](../94-static-code-analyzer/README.md)

**Status:** Planned · **Category:** Language tools

Planned source scanner.

**Example:** Goal: show a finding with its line, rule and suggested fix.

**Plan:** Define target language and explanatory rules.

**Limits:** No analyzer or rules; findings will not prove bugs.

## 95. [Embedded CLI Framework](../95-embedded-cli-framework/README.md)

**Status:** Planned · **Category:** Embedded systems

Planned embedded-style CLI framework.

**Example:** Goal: register help and reject an unknown command.

**Plan:** Define parsing, command handlers and bounded buffers.

**Limits:** No framework or hardware support implemented.

## 96. [RTOS Task Simulator](../96-rtos-task-simulator/README.md)

**Status:** Planned · **Category:** Embedded systems

Planned RTOS priority/task simulation.

**Example:** Goal: choose a ready task under a declared priority rule.

**Plan:** Define states, priorities and deterministic scheduling.

**Limits:** No RTOS implementation; intended as a simulation.

## 97. [UART Terminal](../97-uart-terminal/README.md)

**Status:** Planned · **Category:** Embedded systems

Planned serial terminal.

**Example:** Goal: connect to an approved port and exchange sample text.

**Plan:** Use a supported serial API or native runtime.

**Limits:** No UART implementation; hardware/browser support needs documentation.

## 98. [Bootloader Simulator](../98-bootloader-simulator/README.md)

**Status:** Planned · **Category:** Embedded systems

Planned firmware/boot state simulation.

**Example:** Goal: reject a mock invalid image and show boot states.

**Plan:** Define a mock image format and validation rules.

**Limits:** No bootloader or hardware-flashing implementation.

## 99. [Embedded Logging Library](../99-embedded-logging-library/README.md)

**Status:** Planned · **Category:** Embedded systems

Planned embedded logger.

**Example:** Goal: filter INFO/ERROR messages and show timestamps.

**Plan:** Define levels, format, buffers and logger interface.

**Limits:** No logging library implemented.

## 100. [C Utility Toolkit](../100-c-utility-toolkit/README.md)

**Status:** Planned · **Category:** Embedded systems

Planned actual C utilities.

**Example:** Goal: compile one small C utility with documented input/output.

**Plan:** Add C source, build instructions and platform requirements.

**Limits:** No C sources or toolkit implementation currently exists.

