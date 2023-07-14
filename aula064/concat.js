const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, 'Pão', ...a2, ...[9, 10, 11]]

console.log(a3)

// OU

console.warn("\n----------------- or ----------------\n")

const b1 = [1, 2]
const b2 = [5, 6]

const b3 = b1.concat([3, 4], b2)

console.log(b3)