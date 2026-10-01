# Native C examples

Eight folders contain C11 command-line implementations alongside browser demos: Hello World, Temperature Converter, Prime Checker, Factorial, GCD/LCM, Array Statistics, Binary Search and Bubble Sort.

These are independent programs, not browser bindings. A C compiler such as GCC or Clang is required. The shared `input.h` checks complete numeric strings, range errors and nonfinite values. Compile commands and acceptance examples are in each project README.

## Limits

- Prime: integers 0 through 10^12; trial division.
- Factorial: integers 0 through 20, within unsigned long long.
- GCD/LCM: nonnegative integers at most 10^9; gcd(0,0) and lcm with zero return 0 by convention.
- Statistics, Binary Search and Bubble Sort: 1–256 finite double values. Binary search requires ascending order and compares exact numeric values.
- Temperature: C or F source unit; finite doubles with overflow detection. No physical temperature-range restriction.
- Floating point values can round; these are educational examples.

Run `python tools/check_native.py` with GCC installed (or set the CC environment variable to clang). Checks compile with warnings treated as errors, run expected examples and reject malformed inputs. GitHub Actions runs these checks on Linux.
