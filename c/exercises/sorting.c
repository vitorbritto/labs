#include <stdio.h>

int sigma (int m);

int main(void) {

    int n;

    do {

        printf("Positive integer please: ");
        n = scanf("%i", &n);

    } while (n < 1);

    int answer = sigma(n);

    printf("%i\n", answer);

}

int sigma (int m) {

    if (m <= 0) {
        return 0;
    } else {
        return m + sigma(m - 1);
    }

    int sum = 0;

    for (int i = 1; i <= m; i++) {
        sum += i;
    }

    return sum;
}

