#include "../native/input.h"
int main(int argc, char **argv) {
    double value, result;
    if (argc != 3 || !read_real(argv[2], &value)) { fprintf(stderr, "Usage: temperature C|F value\n"); return 1; }
    if (argv[1][0] == 'C' && !argv[1][1]) result = value * 1.8 + 32;
    else if (argv[1][0] == 'F' && !argv[1][1]) result = (value - 32) / 1.8;
    else { fprintf(stderr, "Unit must be C or F\n"); return 1; }
    if (!isfinite(result)) { fprintf(stderr, "Numeric overflow\n"); return 1; }
    printf("%.12g\n", result); return 0;
}
