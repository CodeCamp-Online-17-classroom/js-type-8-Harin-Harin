let a = 1 * '4' + +null + +' ' - '5' * 2 + +(7 + 2 + '' + +!!undefined);

console.log('Result a = ',a)

let a1 = 1 * '4'
let a2 = +null
let a3 = +' '
let a4 = -'5' * 2
let a5 = +(7 + 2 + '' + +!!undefined)

console.log("Result 1 * '4' = ", a1)
console.log('Result +null = ',a2)
console.log("Result +' ' = ",a3)
console.log("Result '5' * 2 = ",a4)
console.log("Result 7 + 2 + '' +!!undefined = ",a5)
console.log(`Recheck a = ${a1} + ${a2} + ${a3} + ${a4} + ${a5} = `, a1 + a2 + a3 + a4 + a5)
