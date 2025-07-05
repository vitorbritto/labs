# Fundamentos

## Hello, world!

  ```js
  console.log('Hello, world!');
  ```

## Code structure


  ```js
  let name = 'Vitor';
  console.log(name)

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  //  Comentários
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  // uma linha apenas


  /**
  * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  *
  * múltiplas linhas
  *
  * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  */
  ```

## The modern mode, "use strict"

  ```js
  'use strict';

  // restante código...
  ```

## Variables

  ```js
  // Antes do ES6
  var age = 30

  // A partir do ES6
  let name = 'Vitor' // flexível, permite uma nova atribuição de valor
  const PI = '3.14' // rígida, única, não permite atribuição de outros valores
  ```

## Data types

  ```js
  let idade = 25;         // number
  let nome = 'Vitor';     // string
  let ativo = true;       // boolean
  let nada = null;        // null
  let desconhecido;       // undefined
  ```

  - Truthy: 1,true,'string',[{...}], {p: v}, [], {}, 1 ... infinito
  - Falsy: false, 0, -0, 0n, "", null, undefined, NaN

## Interaction: alert, prompt, confirm

  ```js
  alert('Olá!')
  let name = prompt('What is your name?')
  let ok = confirm('Are you sure about that?')
  ```

## Type Conversions

  ```js
  let num = Number('34')
  let str = String(123)
  let bool = Boolean(0)
  ```

## Basic operators, maths

  ```js
  // + - * / % **

  let a = 2;
  a =  a + 3
  a += 3; // 5
  a -= 1; // 1
  a *= 2  // 4
  a /= 2  // 1
  ```

## Comparisons

  ```js
  // > < >= <= == != === !==

  // Use sempre === e !== para evitar conversões implícitas.

  // 4 === 4
  // 4 == '4'
  ```

## Conditional branching: if, '?'

  ```js
  if (idade >= 18) {
    console.log('maior de idade');
  } else {
    console.log('menor de idade');
  }

  const onHandleUserAuthorization = (user: User): Promise<boolean> => {
    if (idade <= 18) {
      console.log('menor de idade');

      return false
    }

    console.log('menor de idade');

    return true
  }
  ```

  ```js
  let status = idade >= 18 ? 'maior de idade' : 'menor de idade';
  ```

## Logical operators

  ```js
  // &&  // E
  // ||  // OU
  // !   // NÃO
  ```

  ```js
  if (user && user.isAdmin) { ... }
  ```

## Nullish coalescing operator '??' e Optional Chaining '?'

  ```js
  // Retorna o valor à direita se o da esquerda for null ou undefined:
  let username = user.name ?? 'Guest'; // ERRO se user for null/undefined
  let username = user?.name ?? 'Guest'; // Seguro, evita erro de acesso em null
  ```

## Loops: while and for

  ### for ... in

  ```js
  const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  }

  for (let name in user) {
    console.log(name);
  }
  ```

  ### for ... of

  ```js
  const users = [
    {
      name: 'John',
      age: 30,
      email: 'john@example.com'
    },
    {
      name: 'Jane',
      age: 25,
      email: 'jane@example.com'
    },
    {
      name: 'Alice',
      age: 28,
      email: 'alice@example.com'
    }
  ]

  const users = {
    user01: {
      name: 'John',
      age: 30,
      email: 'john@example.com'
    },
    user02: {
      name: 'Jane',
      age: 25,
      email: 'jane@example.com'
    },
    user03: {
      name: 'Alice',
      age: 28,
      email: 'alice@example.com'
    }
  }

  for (let user of users) {
    console.log(user);
  }
  ```

  ### while

  ```js
  let i = 0;

  while (i < 10) {
    console.log(i);
    i++;
  }
  ```

  ```js
  let i = 3;
  while (i) { // executa enquanto i for diferente de 0
    alert(i);
    i--;
  }
  ```

  ### do while

  ```js
  let i = 0;

  do {
    console.log(i);
    i++;
  } while (i < 5);
  ```

  ### for

  ```js
  for (let i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
  }
  ```

  A variável i é visível somente dentro do for se declarada assim:

  ```js
  for (let i = 0; i < 3; i++) {
    alert(i)
  }

  alert(i) // ERRO: i não está definido.
  ```

  ```js
  let i = 0;
  for (; i < 3; i++) {
    alert(i);
    console.log('i:', i)
  }
  console.log('i:', i)
  alert(i); // 3
  ```

## The "switch" statement

  ```js
  switch (browser) {
    case 'Edge':
      alert("You've got the Edge!");
      break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert('Okay we support these browsers too');
      break;

    default:
      alert('We hope that this page looks ok!');
  }
  ```

## Functions

Com frequência, precisamos realizar uma ação parecida em vários lugares do script. Por exemplo, mostrar uma mensagem amigável quando um visitante faz login, logout ou em outras situações. As funções são os principais “blocos de construção” de um programa. Elas permitem reutilizar o código sem repetição. Já vimos exemplos de funções embutidas, como alert(mensagem), prompt(mensagem, padrão) e confirm(pergunta). Mas também podemos criar nossas próprias funções.

### Declaração de Função

Para criar uma função, usamos a declaração de função:


```js
function mostrarMensagem() {
  alert('Olá a todos!');
}
```

A palavra-chave function vem primeiro, seguida pelo nome da função, depois os parênteses com os parâmetros (separados por vírgula – vazios no exemplo acima), e por fim o corpo da função entre chaves {}.

```js
function nome(param1, param2, ... paramN) {
  // corpo
}
```

Podemos chamar a função pelo nome:

```js
mostrarMensagem();
mostrarMensagem();
```

A chamada `mostrarMensagem()` executa o código da função. No exemplo acima, a mensagem será exibida duas vezes.

Isso mostra uma das principais utilidades das funções: evitar duplicação de código. Se for necessário mudar a mensagem, basta fazer isso em um único lugar: dentro da função.

### Variáveis locais

Uma variável declarada dentro da função só existe ali.

```js
function mostrarMensagem() {
  let mensagem = 'Olá, mundo!';
  alert(mensagem);
}

mostrarMensagem(); // Exibe a mensagem
alert(mensagem);   // Erro! "mensagem" só existe dentro da função
```

### Variáveis externas

Uma função pode acessar variáveis externas:

```js
let nomeUsuario = 'João';

function mostrarMensagem() {
  let mensagem = 'Olá, ' + nomeUsuario;
  alert(mensagem);
}

mostrarMensagem(); // Olá, João
```


Ela também pode modificá-las:

```js
let nomeUsuario = 'João';

function mostrarMensagem() {
  nomeUsuario = "Beto"; // muda a variável externa
  alert('Olá, ' + nomeUsuario);
}

alert(nomeUsuario); // João
mostrarMensagem();
alert(nomeUsuario); // Beto
```

Se houver uma variável com o mesmo nome declarada dentro da função, ela esconde a externa:

```js
let nomeUsuario = 'João';

function mostrarMensagem() {
  let nomeUsuario = "Beto"; // variável local
  alert('Olá, ' + nomeUsuario); // Olá, Beto
}

mostrarMensagem();
alert(nomeUsuario); // João
```


### Variáveis globais

Variáveis declaradas fora de qualquer função são chamadas de globais. Elas podem ser acessadas por qualquer função (a menos que haja uma local com o mesmo nome).

É uma boa prática evitar o uso excessivo de globais.

### Parâmetros

É possível passar dados para funções usando parâmetros:

```js
function mostrarMensagem(de, texto) {
  alert(de + ': ' + texto);
}

mostrarMensagem('Vitor', 'Olá!');          // Vitor: Olá!
mostrarMensagem('Vitor', 'Tudo bem?');     // Vitor: Tudo bem?
```

Os valores passados são chamados de argumentos.

```js
let de = "Vitor";
mostrarMensagem(de, "Olá"); // *Vitor*: Olá
alert(de); // Vitor (não foi alterado)
```

#### Parâmetros padrão

Se um parâmetro não for passado, ele será undefined.

**Podemos definir um valor padrão:**

```js
function mostrarMensagem(de, texto = "sem mensagem") {
  alert(de + ": " + texto);
}

mostrarMensagem("Vitor"); // Vitor: sem mensagem
```

**Ou com uma expressão:**

```js
function mostrarMensagem(de, texto = outraFuncao()) {
  // outraFuncao só será executada se texto for omitido
  alert(de + ": " + texto);
}

function outraFuncao() {
  return "Olá!";
}
```


**Maneiras antigas:**

Antes do suporte oficial, usava-se:

if (texto === undefined) texto = 'sem mensagem';

Ou o operador ||:

texto = texto || 'sem mensagem';

Ou o operador moderno ?? (nullish coalescing):

alert(contagem ?? "desconhecido");


### Retornando valores

Uma função pode retornar valores com return:

```js
function soma(a, b) {
  return a + b;
}

let resultado = soma(1, 2);
alert(resultado); // 3
```

É possível usar `return` sem valor, o que termina a função:

```js
function mostrarFilme(idade) {
  if (!verificarIdade(idade)) return;
  alert("Mostrando o filme");
}

function verificarIdade(idade) {
  return idade >= 18;
}
```

Sem return, a função retorna `undefined`.

Evite pular linha após return, pois o JavaScript pode inserir um ; automaticamente.

Correto:

return (
  a + b
);


### Nomeando funções

Funções são ações, então o nome geralmente é um verbo. Prefixos comuns:
	•	get... – retorna um valor
	•	calculate... – calcula algo
	•	create... – cria algo
	•	check... – verifica algo e retorna booleano

Exemplos:
	•	showMessage() – mostra uma mensagem
	•	getAge() – retorna idade
	•	checkPermission() – verifica permissão


### Uma função = uma ação

Evite que uma função faça mais do que o nome sugere.

Errado:
	•	getAge() mostrando alert
	•	createForm() modificando o DOM

Correto:
  •	getCustomerAge() retorna a idade do cliente
	•	createCustomerRegisterForm() cria um formulário de registro do cliente

### Nomes curtos

Bibliotecas como jQuery ($) ou Lodash (_) usam nomes curtos por serem chamadas com frequência.

### Funções pequenas

Funções devem ser curtas e específicas. Se forem grandes, divida em menores.

Exemplo:

```js
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
```

Mesmo se a função não for reutilizada, vale a pena pela clareza.

### Resumo
	•	Uma função é declarada com: function nome(parâmetros) { código }
	•	Parâmetros viram variáveis locais.
	•	Funções podem acessar variáveis externas.
	•	Funções podem retornar valores.
	•	Prefira variáveis locais em vez de modificar variáveis externas.
	•	Nomes de funções devem indicar claramente o que elas fazem.
	•	Use funções para dividir ações, manter o código limpo e reutilizável.
