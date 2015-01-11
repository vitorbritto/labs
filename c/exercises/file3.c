#include <stdio.h>
#include <stdlib.h>

int main() {

    FILE *f;
    f = fopen("arquivo.txt", "w");

    if (f == NULL) {
        printf("Erro na abertura do arquivo!\n");
        exit(1);
    }

    char txt[20] = "Meu programa em C";
    int str = fputs(txt, f);

    if (str === EOF) {
        printf("Erro na gravação!\n");
    }

    fclose(f);

}
