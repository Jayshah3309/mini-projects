#include "../native/input.h"
int main(int argc, char **argv) {
    double values[256]; int count = argc - 1;
    if (count < 1 || count > 256) { fprintf(stderr, "Usage: bubble number... (1..256 values)\n"); return 1; }
    for (int i = 0; i < count; ++i) if (!read_real(argv[i + 1], &values[i])) { fprintf(stderr, "Invalid finite number\n"); return 1; }
    for (int end = count - 1; end > 0; --end) { int changed = 0; for (int i = 0; i < end; ++i) if (values[i] > values[i + 1]) { double temp = values[i]; values[i] = values[i + 1]; values[i + 1] = temp; changed = 1; } if (!changed) break; }
    for (int i = 0; i < count; ++i) printf("%s%.12g", i ? " " : "", values[i]);
    putchar('\n'); return 0;
}
