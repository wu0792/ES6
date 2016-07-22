let funcSqrt = (t) => t * t * 30
let funcSqrtThenMultiple = t => funcSqrt(t) * 2

let sqrt10 = funcSqrt(10)
let sqrtThenMultiple10 = funcSqrtThenMultiple(10)

console.log(`sqrt10:${sqrt10}`)
console.log(`sqrtThenMultiple10:${sqrtThenMultiple10}`)