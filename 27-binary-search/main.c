#include "../native/input.h"
int main(int argc, char **argv) {
    double target, values[256]; int count = argc - 2, left = 0, right;
    if (count < 1 || count > 256 || !read_real(argv[1], &target)) { fprintf(stderr, "Usage: binary target sorted-number... (1..256 values)\n"); return 1; }
    for (int i = 0; i < count; ++i) if (!read_real(argv[i + 2], &values[i]) || (i > 0 && values[i] < values[i - 1])) { fprintf(stderr, "Numbers must be finite and sorted\n"); return 1; }
    right = count - 1;
    while (left <= right) { int mid = left + (right - left) / 2; if (values[mid] == target) { printf("index=%d\n", mid); return 0; } if (values[mid] < target) left = mid + 1; else right = mid - 1; }
    puts("not found"); return 0;
}
