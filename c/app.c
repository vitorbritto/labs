#include <stdio.h>

int menu() {

    int i;

        do {
            printf("Escolha uma opção:\n");
            printf("(1) Soma\n");
            printf("(2) Subtração\n");
            printf("(3) Multiplicação\n");
            printf("(4) Divisão\n");
            scanf("%d", &i);
        } while((i < 1) || (i > 4));

    return i;

}

int main() {

    int op = menu();
    printf("Você escolheu a opção %d\n", op);

    return 0;
}

