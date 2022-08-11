const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]

// Os ... pegam o resto do array
const [primeiroNumero, segundoNumero, ...resto] = numeros

console.log(primeiroNumero, segundoNumero)
console.log(resto)

// Parte 2 ---------------------------------------------------------------

const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]

const [,[,, seis]] = numeros2
console.log(seis)

// OU 

const [lista1, lista2, lista3] = numeros2
console.log(lista2[2])