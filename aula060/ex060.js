function recursiva(max) {
    
    if (max >= 10) return console.log(`Máximo de ${max} excedido. Mude o valor, por favor.`)

    max++
    console.log(max)
    recursiva(max)
}

console.log(recursiva(1))