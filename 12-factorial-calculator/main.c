#include "../native/input.h"
int main(int argc, char **argv) {
    long long n; unsigned long long result = 1;
    if (argc != 2 || !read_integer(argv[1], &n) || n < 0 || n > 20) { fprintf(stderr, "Usage: factorial integer (0..20)\n"); return 1; }
    for (long long i = 2; i <= n; ++i) result *= (unsigned long long)i;
    printf("%llu\n", result); return 0;
}
