# Algorithm learning guide

Complexities describe the current educational approaches, not an optimized library. Rendering and saved trace snapshots add cost. The trace panels retain many snapshots, so their memory use is larger than the underlying algorithms.

## 26. Linear Search

[Project and source](../26-linear-search/README.md)

```text
FOR each index i: IF array[i] equals target RETURN i; RETURN not found
```

**Time:** O(n). **Space:** O(1).

**Worked example:** Find 7 in [1,3,5,7]: compare four entries; return index 3.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 27. Binary Search

[Project and source](../27-binary-search/README.md)

```text
WHILE low <= high: mid = floor((low+high)/2); compare target; discard the opposite half
```

**Time:** O(log n), after parsing. **Space:** O(1) search; O(n) input.

**Worked example:** For [1,3,5,7,9], target 7: inspect 5, then 7; return index 3.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 28. Bubble Sort

[Project and source](../28-bubble-sort/README.md)

```text
REPEAT passes: compare neighbors; swap when left > right; stop if no swaps
```

**Time:** O(n²) worst; O(n) best. **Space:** O(1) algorithm.

**Worked example:** [3,1,2] → [1,3,2] → [1,2,3].

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 29. Selection Sort

[Project and source](../29-selection-sort/README.md)

```text
FOR each unsorted position: find the suffix minimum; swap it into that position
```

**Time:** O(n²). **Space:** O(1) algorithm.

**Worked example:** [3,1,2]: choose 1, then 2 → [1,2,3].

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 30. Insertion Sort

[Project and source](../30-insertion-sort/README.md)

```text
FOR each key after the first: shift larger prefix entries right; insert key
```

**Time:** O(n²) worst; O(n) best. **Space:** O(1) algorithm.

**Worked example:** [3,1,2]: insert 1 before 3, then 2 before 3.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 31. Merge Sort

[Project and source](../31-merge-sort/README.md)

```text
SPLIT into halves recursively; MERGE sorted halves by repeatedly choosing the smaller head
```

**Time:** O(n log n). **Space:** O(n) auxiliary plus recursion.

**Worked example:** [3,1] and [4,2] become [1,3] and [2,4], merged to [1,2,3,4].

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 32. Quick Sort

[Project and source](../32-quick-sort/README.md)

```text
CHOOSE pivot; partition values; recursively sort lower and upper partitions
```

**Time:** O(n log n) average; O(n²) worst. **Space:** Depends on variant: browser demo allocates partitions; trace uses in-place partitions and recursion.

**Worked example:** [3,1,2], pivot 2: lower [1], pivot [2], upper [3].

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 41. Stack

[Project and source](../41-stack/README.md)

```text
PUSH: append value; POP: remove last value; PEEK: read last value
```

**Time:** O(1) push/pop; O(n) rendering. **Space:** O(n) stored values.

**Worked example:** Push A then B; pop returns B.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 42. Queue

[Project and source](../42-queue/README.md)

```text
ENQUEUE: append; DEQUEUE: remove first; PEEK: read first
```

**Time:** O(n) array shift dequeue; O(n) rendering. **Space:** O(n).

**Worked example:** Enqueue A then B; dequeue removes A.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 43. Circular Queue

[Project and source](../43-circular-queue/README.md)

```text
ENQUEUE at rear modulo capacity; DEQUEUE at front modulo capacity; track count
```

**Time:** O(1) queue operations; O(capacity) rendering. **Space:** O(capacity).

**Worked example:** Fill queue, dequeue one, enqueue again to see wraparound.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 44. Linked List

[Project and source](../44-linked-list/README.md)

```text
INSERT or DELETE at requested position in an array; render nodes and next links
```

**Time:** O(n) array insertion/deletion. **Space:** O(n).

**Worked example:** Insert A, B, C; remove B; display A → C.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 45. Doubly Linked List

[Project and source](../45-doubly-linked-list/README.md)

```text
INSERT or DELETE an array element; render links in both directions
```

**Time:** O(n). **Space:** O(n).

**Worked example:** Remove the middle element and update displayed previous/next links.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 46. Circular Linked List

[Project and source](../46-circular-linked-list/README.md)

```text
STORE ordered values; display final next link back to the first value
```

**Time:** O(n) changes/rendering. **Space:** O(n).

**Worked example:** A → B → C → A represents the displayed cycle.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 47. Binary Search Tree

[Project and source](../47-binary-search-tree/README.md)

```text
COMPARE with node; recurse left if smaller, right if larger; insert at null child
```

**Time:** O(h), O(n) worst per operation. **Space:** O(n) nodes; O(h) recursion.

**Worked example:** Insert 5,2,9: 5 is root, 2 left, 9 right.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 48. Avl Tree

[Project and source](../48-avl-tree/README.md)

```text
BST insert; update heights; rotate any subtree whose balance leaves [-1,1]
```

**Time:** O(log n) insert. **Space:** O(n) nodes; O(log n) recursion.

**Worked example:** Insert 3,2,1: rotate right to make 2 the root.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 49. Heap

[Project and source](../49-heap/README.md)

```text
APPEND value; swap with parent while larger; extraction replaces root then sifts down
```

**Time:** O(log n) insertion/extraction. **Space:** O(n).

**Worked example:** Insert 2 then 9: 9 rises to the max-heap root.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 50. Priority Queue

[Project and source](../50-priority-queue/README.md)

```text
APPEND record; sort array by priority; remove the next priority record
```

**Time:** O(n log n) sorting per insertion; array removal can be O(n). **Space:** O(n).

**Worked example:** Insert two tasks with different priorities and dequeue in priority order.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 51. Hash Table

[Project and source](../51-hash-table/README.md)

```text
HASH key to a bucket; search bucket for matching key; insert or update record
```

**Time:** O(k) bucket scan, O(n) worst; rendering adds O(n). **Space:** O(n + bucket count).

**Worked example:** Keys mapping to one bucket are stored as separate entries.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 52. Graph

[Project and source](../52-graph/README.md)

```text
STORE node → neighbors; adding an undirected edge updates both neighbor lists
```

**Time:** O(V+E) display; array membership checks depend on degree. **Space:** O(V+E).

**Worked example:** Add A–B: A lists B and B lists A.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 53. Dfs

[Project and source](../53-dfs/README.md)

```text
VISIT node; recursively visit each unseen neighbor
```

**Time:** O(V+E), apart from neighbor sorting. **Space:** O(V) visited and call stack.

**Worked example:** From A: A → B → D → E → C → F.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 54. Bfs

[Project and source](../54-bfs/README.md)

```text
ENQUEUE start; mark seen; repeatedly dequeue and enqueue unseen neighbors
```

**Time:** O(V+E) with efficient queue; array shift adds overhead. **Space:** O(V).

**Worked example:** From A: A → B → C → D → E → F.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 55. Dijkstra

[Project and source](../55-dijkstra/README.md)

```text
SET source distance 0; repeatedly settle nearest unvisited node; relax outgoing edges
```

**Time:** O(V²+E), linear minimum selection. **Space:** O(V) distances/previous plus graph.

**Worked example:** From A: C=2, B=3, D=8, E=10.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 56. Kruskal

[Project and source](../56-kruskal/README.md)

```text
SORT edges by weight; accept an edge only when it connects different components
```

**Time:** O(E log E) edge sorting; union-find operations additional. **Space:** O(V+E).

**Worked example:** Fixed graph: five accepted edges give total weight 13.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 57. Prim

[Project and source](../57-prim/README.md)

```text
START at A; repeatedly choose lightest edge crossing visited to unvisited nodes
```

**Time:** O(VE) with repeated edge scans. **Space:** O(V+E).

**Worked example:** Fixed graph: grow a five-edge spanning tree with weight 13.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.

## 58. Huffman Coding

[Project and source](../58-huffman-coding/README.md)

```text
COUNT symbols; repeatedly join the two least frequent trees; assign 0/1 down branches
```

**Time:** O(k² log k) upper bound for repeated array sorting, plus input counting. **Space:** O(n+k) input/symbol tree.

**Worked example:** Frequent symbols receive shorter codes; the codebook also needs storage.

**Exercise:** Trace a boundary case by hand, compare with the demo, then explain where the stated complexity comes from. For sorting, try duplicates and an already-sorted array; for structures, try empty removal; for graphs, explain visited-state handling.


## 21. Matrix Addition

[Project and source](../21-matrix-addition/README.md)

```text
FOR each row r and column c: C[r,c] = A[r,c] + B[r,c]
```

**Time:** O(rows × columns). **Space:** O(rows × columns) output.

**Worked example:** [[1,2],[3,4]] + [[5,6],[7,8]] = [[6,8],[10,12]].

**Scope:** Both matrices must have identical dimensions.

**Exercise:** Reproduce the example by hand, then try a zero value and explain the cost of doubling the input dimensions or length.

## 22. Matrix Multiplication

[Project and source](../22-matrix-multiplication/README.md)

```text
FOR each output row i and column j: C[i,j] = SUM over k of A[i,k] × B[k,j]
```

**Time:** O(A_rows × A_cols × B_cols). **Space:** O(A_rows × B_cols) output, plus stored inputs.

**Worked example:** [1,2,3] × [[4],[5],[6]] = [[32]].

**Scope:** A_cols must equal B_rows. Click Set after changing dimensions.

**Exercise:** Reproduce the example by hand, then try a zero value and explain the cost of doubling the input dimensions or length.

## 23. Matrix Transpose

[Project and source](../23-matrix-transpose/README.md)

```text
FOR each input row r and column c: output[c,r] = input[r,c]
```

**Time:** O(rows × columns). **Space:** O(rows × columns) output.

**Worked example:** [[1,2,3],[4,5,6]] becomes [[1,4],[2,5],[3,6]].

**Scope:** Transpose switches dimensions; it does not sort values.

**Exercise:** Reproduce the example by hand, then try a zero value and explain the cost of doubling the input dimensions or length.

## 24. Matrix Determinant

[Project and source](../24-matrix-determinant/README.md)

```text
IF size is 1 or 2: use base formula; ELSE sum signed first-row entries multiplied by determinants of their minors
```

**Time:** O(n!) for recursive cofactor expansion. **Space:** O(n³) peak matrices along recursive calls.

**Worked example:** det([[1,2],[3,4]]) = 1×4 − 2×3 = −2.

**Scope:** The browser caps matrix size at 5. Floating point arithmetic can round; this is not an optimized elimination algorithm.

**Exercise:** Reproduce the example by hand, then try a zero value and explain the cost of doubling the input dimensions or length.

## 25. Array Statistics

[Project and source](../25-array-statistics/README.md)

```text
PARSE finite numbers; accumulate sum; sort a copy; use the middle element or average of two middle elements for median
```

**Time:** O(n log n), sorting dominates. **Space:** O(n) parsed values and sorted copy.

**Worked example:** [1,2,3,4] has sum 10, mean 2.5 and median 2.5.

**Scope:** Browser input is limited to 10000 values. The C command-line version accepts 256.

**Exercise:** Reproduce the example by hand, then try a zero value and explain the cost of doubling the input dimensions or length.

## 60. Polynomial Calculator

[Project and source](../60-polynomial-calculator/README.md)

```text
result = 0; FOR each coefficient from highest degree to constant: result = result × x + coefficient
```

**Time:** O(n) evaluation using Horner’s method. **Space:** O(1) evaluation, plus O(n) parsed coefficients and display.

**Worked example:** Coefficients [3,-5,2,7], x=2: result passes through 3, 1, 4, 15.

**Scope:** Coefficients are highest degree first. Numeric precision is finite; invalid tokens are filtered by the current demo.

**Exercise:** Reproduce the example by hand, then try a zero value and explain the cost of doubling the input dimensions or length.
