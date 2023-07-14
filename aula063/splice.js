const nomes = [
    'Madara', 'Itachi', 'Nagato', 'Yahiko', 'Konan', 'Pain', 'Obito'
]

// Splice ( starAt, numberItems, delete, elements...)

const nomesRemovidos = nomes.splice(2, 4)

console.log(nomes)

console.error(nomesRemovidos)

//

console.warn("New Section------------------------------")

// Number.MAX_VALUE => maior numero possível

const nomesAnim = [
    'Madara', 'Itachi', 'Nagato', 'Yahiko', 'Konan', 'Pain', 'Obito'
]

const nomesExcluidos = nomesAnim.splice(-2, Number.MAX_VALUE)

console.log(nomesAnim)

console.log(nomesExcluidos)

console.warn("New Section------------------------------")

// Adcionar valores com Splice

const nomesAnim2 = [
    'Madara', 'Itachi', 'Nagato', 'Yahiko', 'Konan', 'Pain', 'Obito'
]

nomesAnim2.splice(3, 0, 'Pedrim', 'Pedraum')

console.log(nomesAnim2)

