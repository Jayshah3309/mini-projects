#include "../native/input.h"
int main(int argc, char **argv) {
    long long a, b, x, y;
    if (argc != 3 || !read_integer(argv[1], &a) || !read_integer(argv[2], &b) || a < 0 || b < 0 || a > 1000000000LL || b > 1000000000LL) { fprintf(stderr, "Usage: gcd nonnegative-a nonnegative-b (each <=1000000000)\n"); return 1; }
    x = a; y = b;
    while (y) { long long remainder = x % y; x = y; y = remainder; }
    printf("gcd=%lld lcm=%lld\n", x, x == 0 ? 0 : (a / x) * b); return 0;
}
