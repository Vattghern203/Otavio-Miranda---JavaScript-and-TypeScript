function retornaMaior (n1, n2) {

    if (n1 > n2) {
        return console.log(`${n1} é maior que ${n2}.`)

    } else if (n2 > n1) {
        return console.log(`${n2} é maior que ${n1}.`)

    } else if (n1 === n2) {
        return console.log(`Ambos os número são iguais.`)

    }
    
    return console.log(`Não foi possível retorna um resultado. Tente novamente!`)
}

function retornamMaior2 (n1, n2) {

    return n1 > n2 ? n1 : n2
}

const retornaMaior3 = (x, y) => {
    return x > y ? x : y
}

const retornaMaior4 = (x, y) => x > y ? x : y

retornaMaior(1, 10)
console.log(retornamMaior2(69, 24))
console.log(retornaMaior3(55, 56))
console.log(retornaMaior4(100, 10))