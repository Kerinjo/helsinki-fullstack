// features to simulate object-oriented classes,
// since there is no class mechanism in JavaScript

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('hello, my name is ' + this.name)
    }
}

const adam = new Person('Adam Ondra', 29)
adam.greet()

const janja = new Person('Janja Garnbret', 23)
janja.greet()

// Thanks to React Hooks, we don't have use for class syntax.