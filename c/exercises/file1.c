#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

int main() {

    FILE *f1, *f2;

    f1 = fopen("min.txt", "r");
    f2 = fopen("max.txt", "w");

    if(f1 == NULL || f2 == NULL) {
        printf("Arquivo inexistente\n");
        // system("pause");
        exit(1);
    }

    char c = fgetc(f1);

    while(c != EOF) {
        fputc(toupper(c), f2);
        c = fgetc(f1);
    }

    fclose(f1);
    fclose(f2);

    return 0;
}
