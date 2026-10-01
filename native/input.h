#ifndef MINI_INPUT_H
#define MINI_INPUT_H
#include <errno.h>
#include <math.h>
#include <stdio.h>
#include <stdlib.h>
static inline int read_real(const char *s, double *out) {
    char *end; errno = 0; *out = strtod(s, &end);
    return s[0] && end != s && !*end && errno != ERANGE && isfinite(*out);
}
static inline int read_integer(const char *s, long long *out) {
    char *end; errno = 0; *out = strtoll(s, &end, 10);
    return s[0] && end != s && !*end && errno != ERANGE;
}
#endif
