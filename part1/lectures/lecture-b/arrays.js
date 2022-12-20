const t = [1, -1, 3]
t.push(4)

t.forEach(value => {
    console.log(value)
})
// forEach receives a function defined using the arrow syntax as a parameter

const t2 = t.concat(5)
// t.concat(5) returns a new array, instead of adding a new item to existing one
console.log(t)
console.log(t2)

const m1 = t.map(value => value * 2)
const m2 = t.map(value => '<li>' + value + '</li>')
// map can transform the array into something completely different
console.log(m2)

const arr = [1, 2, 3, 4, 5]
const [first, second, ...rest] = arr
/* individual items or even a subarray are easy to assign to variables
   with the usage of destructuring assignment */
   console.log(first, second)
   console.log(rest)
