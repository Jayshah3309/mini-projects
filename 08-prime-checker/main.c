#include "../native/input.h"
int main(int argc, char **argv) {
    long long n; int prime = 1;
    if (argc != 2 || !read_integer(argv[1], &n) || n < 0 || n > 1000000000000LL) { fprintf(stderr, "Usage: prime integer (0..1000000000000)\n"); return 1; }
    if (n < 2) prime = 0;
    for (long long d = 2; prime && d <= n / d; ++d) if (n % d == 0) prime = 0;
    puts(prime ? "prime" : "not prime"); return 0;
}
