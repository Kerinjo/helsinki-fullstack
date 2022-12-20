// defining arrow function

const sum = (p1, p2) => {
    return p1 + p2
}

let result = sum(1, 5)
console.log("sum: " + result)

// If there's just a single parameter, we can exclude parentheses
const square = p => {
    return p * p
}

// or shorten even further
const cube = p => p * p * p

// this form is handy when manipulating arrays
const t = [1, 2, 3, 4, 5]
const tCubed = t.map(cube)
// equivalent to const tCubed = t.map(p => p * p * p)
console.log("tCubed: ", tCubed)

// prior to arrow functions the only way to define
// functions was to use the function keyword
function product(a, b) {
    return (a * b) / 2
}
result = product(2, 6)
console.log("product: " + result)
// there's no need to give function a name

const average = function(a, b) {
    return (a + b) / 2
}
result = average(2, 5)
console.log("average: " + result)
