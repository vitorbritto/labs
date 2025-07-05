# Objetos

Objetos no JavaScript são estruturas de dados que permitem armazenar e organizar informações de forma organizada e acessível.

## Sintaxe

```js
let user = new Object();
let user = {};

const user = {
  name: 'John',
  age: '30',
  email: 'john@example.com',
};

const userData = fetchUserData(userId);

const user = {
  name: userData?.name ?? 'Guest',
  age: userData?.age ?? 'Não informado',
  email: userData?.email ?? 'Não informado',
  notifications: [
    {
      id: 1,
      message: 'Olá, tudo bem?',
      timestamp: new Date().toISOString()
    },
    {
      id: 2,
      message: 'Como vai a família?',
      timestamp: new Date().toISOString()
    }
  ],
};

// Adicionar propriedade
user.address = '123 Main St';

// Remover propriedade
delete user.address;

// Escrita de propriedades
user.name = 'Jane';
user.age = '25';
user.email = 'jane@example.com';
user.address = '456 Elm St';

// Escrita de propriedades com colchetes
user['notifications'] = [
  {
    id: 3,
    message: 'Olá, tudo bem?',
    timestamp: new Date().toISOString()
  },
  {
    id: 4,
    message: 'Como vai a família?',
    timestamp: new Date().toISOString()
  }
];

// Leitura de propriedades
console.log(user.name); // Jane
console.log(user.age); // 25
console.log(user.email); // jane@example.com
console.log(user.address); // 456 Elm St

// Leitura de propriedades com colchetes
console.log(user['name']); // Jane
console.log(user['age']); // 25
console.log(user['email']); // jane@example.com
console.log(user['address']); // 456 Elm St
console.log(user['notifications']); // Array de notificações


// As propriedades computadas (Computed Props)
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;


// Shorthand property
const { name, email } = fetchUserData(userId);
const user = {
  name,
  email,
}
```

## Referência e cópia


## Garbage collection


## Métodos e o "this"


## Constructor e operador "new"


## Optional chaining '?.'


## Tipo Symbol


## Primitive conversion


## Flags e descriptors


## Getters e Setters
