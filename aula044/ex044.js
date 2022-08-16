const soma = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {

        throw new ReferenceError('Os dados digitados não são números')
    }
    return x + y
}

try {

    console.log(soma(10, 'Pesca Esportiva'))
} catch(error) {

    console.log(`Os dados digitados não são números. Tente novamente.`)
}
