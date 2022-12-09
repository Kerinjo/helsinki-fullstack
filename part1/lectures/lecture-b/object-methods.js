// this refers to object itself

const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
  }

arto.greet()

// methods can be assigned to objects after creation
arto.growOlder = function() {
    this.age += 1
}

const referenceToGreet = arto.greet
referenceToGreet()
// the value of this is defined based on how the method is called
// when called through a reference, the value of this becomes global object

setTimeout(arto.greet, 1000)
// JavaScript engine calls the method, this refers to global object

setTimeout(arto.greet.bind(arto), 1000)
// one of the ways to preserve this - bind method

// Thanks to React Hooks, we don't have use for object methods.