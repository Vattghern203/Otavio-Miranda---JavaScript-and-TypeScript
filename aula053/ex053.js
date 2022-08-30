function retornaFuncao (nome) {

    return function () {
        return nome
    }
}

const funcao = retornaFuncao('Gerivaldo')
const funcao2 = retornaFuncao('Agnaldo')

console.log(funcao())
console.log(funcao2())