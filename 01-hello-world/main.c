#include <stdio.h>
int main(int argc, char **argv) {
    if (argc > 2) { fprintf(stderr, "Usage: hello [name]\n"); return 1; }
    printf("Hello, %s!\n", argc == 2 && argv[1][0] ? argv[1] : "World"); return 0;
}
