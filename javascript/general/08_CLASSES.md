# Classes

## Class basic syntax

```javascript
class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    static staticMethod() {
        console.log(this === User);
    }

    #privateMethod() {
        console.log(this.#name);
    }

    static {
        console.log("Static initialization block");
    }
}
```

## Class inheritance

```javascript
class Admin extends User {
    constructor(name, role) {
        super(name);
        this.role = role;
    }
}
```

## Static properties and methods

```javascript
class User {
    static staticMethod() {
        console.log(this === User);
    }
}
```

## Private and protected properties and methods

```javascript
class User {
    #name;
    constructor(name) {
        this.#name = name;
    }
}
```

## Extending built-in classes

```javascript
class MyArray extends Array {
    constructor(...args) {
        super(...args);
    }
}
```

## Class checking: "instanceof"

```javascript
console.log(new MyArray(1, 2, 3) instanceof MyArray);
console.log(new MyArray(1, 2, 3) instanceof Array);
```

## Mixins

```javascript
function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}
```
