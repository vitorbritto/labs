// PROGRAM 1
// #include <stdio.h>

// int main() {
//     printf("Voltando aos estudos!\n");
// }


// PROGRAM 2
// #include <stdio.h>

// int main()
// {
//     int Dias;
//     float Anos;

//     printf("Número de dias: ");
//     scanf("%d", &Dias);

//     Anos = Dias/365.25;
//     printf("\n\n %d dias equivalem a %f anos. \n", Dias, Anos);
// }


// PROGRAM 3
// #include <stdio.h>

// void square(int x) {
//     printf("O quadrado é %d\n", (x * x));
// }

// int main() {
//     int num;
//     printf("Entre com um número: ");
//     scanf("%d", &num);
//     printf("\n\n");
//     square(num);
// }


// PROGRAM 4
// #include <stdio.h>

// int mult(int a, int b) {
//     printf("%d", a * b);
// }

// void main() {
//     int x,y;

//     printf("Entre com um número: ");
//     scanf("%d", &x);
//     printf("\n");
//     printf("Entre com outro número: ");
//     scanf("%d", &y);

//     mult(x,y);
// }


// PROGRAM 5
// #include <stdio.h>

// int prod(int x, int y) {
//     return (x*y);
// }

// void main() {
//     int saida;
//     saida = prod(12,7);
//     printf("A saida é: %d\n", saida);
// }


// PROGRAM 6
// #include <stdio.h>

// int main() {
//     int i;
//     printf("Digite a sua idade: ");

//     scanf("%d", &i);

//     if (i > 70)
//         printf("Está velho!");
//     else
//         printf("Jovem");
// }


// PROGRAM 7
// #include <stdio.h>

// int main() {
//     int i, j;
//     float f = 1;

//     printf("Digite um número: ");
//     scanf("%d", &j);

//     for (i = 1; i <= j; ++i) {
//         f = f * i;
//     }

//     printf("O fatorial de %d é %7.0f.", j, f);
// }


// PROGRAM 8
// #include <stdio.h>

// int main() {
//     int index = 0,
//         contador;

//     char letras[5] = "Jose";

//     for (contador = 0; contador < 10; contador++) {
//         printf("\n%c", letras[index]);
//         index = (index==4) ? index = 0 : ++index;
//     }
// }


// PROGRAM 9
// #include <stdio.h>

// int main() {
//     int opt;

//     while (opt != 5) {
//         opt_again:
//         printf("\n\n Escolha uma opção entre 1 e 5: ");
//         scanf("%d", &opt);

//         if ((opt > 5) || (opt < 1)) {
//             goto opt_again;
//         }

//         switch(opt) {
//             case 1:
//                 printf("\n -> Option 1!");
//             break;

//             case 2:
//                 printf("\n -> Option 2!");
//             break;

//             case 3:
//                 printf("\n -> Option 3!");
//             break;

//             case 4:
//                 printf("\n -> Option 4!");
//             break;

//             case 5:
//                 printf("\n -> Bye bye!");
//             break;
//         }
//     }

//     return(0);

// }


// PROGRAM 10
// #include <stdio.h>

// int main() {
//     int count;
//     for (count = 0; count < 10; count++) printf("%d\n\n", count);
//         // return(0);
// }

// int main();


// PROGRAM 11
// #include <stdio.h>

// int main() {
//     int num[100];
//     int count = 0;
//     int total;

//     do {

//         printf("\n ---------------------------------------");
//         printf("\n Nota: digite -999 para sair do programa");
//         printf("\n ---------------------------------------");
//         printf("\n");
//         printf("\n Entre com um número: ");
//         scanf("%d", &num[count]);

//         count++;

//     } while (num[count-1] != -999);

//     total = count-1;

//     printf("\n\n\n\t Os números que você digitou foram: \n\n");
//     for (count = 0; count < total; count++){
//         printf(" %d", num[count]);
//     }
//     return(0);
// }


// PROGRAM 12
// #include <stdio.h>

// int main() {
//     char string[100];
//     printf("Digite o seu nome: ");
//     gets(string);
//     printf("\n\n Olá, %s", string);
//     return(0);
// }

// PROGRAM 13

#include <stdio.h>
#include <string.h>

int main() {
    char str1[100],
         str2[100],
         str3[100];

    printf("Entre com uma string: ");
    gets(str1);

    strcpy(str2, str1);
    strcpy(str3, "Você digitou a string: ");

    printf("\n\n%s%s", str3, str2);
    return(0);
}


// PROGRAM 14
