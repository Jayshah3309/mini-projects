#include "../native/input.h"
static int compare(const void *left, const void *right) {
    double a = *(const double *)left, b = *(const double *)right;
    return (a > b) - (a < b);
}
int main(int argc, char **argv) {
    double values[256], sum = 0, median; int count = argc - 1;
    if (count < 1 || count > 256) { fprintf(stderr, "Usage: statistics number... (1..256 values)\n"); return 1; }
    for (int i = 0; i < count; ++i) { if (!read_real(argv[i + 1], &values[i])) { fprintf(stderr, "Invalid finite number\n"); return 1; } sum += values[i]; }
    if (!isfinite(sum)) { fprintf(stderr, "Numeric overflow\n"); return 1; }
    qsort(values, (size_t)count, sizeof(double), compare);
    median = count % 2 ? values[count / 2] : values[count / 2 - 1] / 2 + values[count / 2] / 2;
    printf("count=%d sum=%.12g min=%.12g max=%.12g mean=%.12g median=%.12g\n", count, sum, values[0], values[count - 1], sum / count, median); return 0;
}
