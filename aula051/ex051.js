// return
// retorna um valor
// termina a função

function retornaFrase(start) {
    function retornaFraseFim(rest) {
        return `${start} ${rest}`
    }

    return retornaFraseFim
}

const olaMundo = retornaFrase('Olá,')

console.log(olaMundo(`mundo.`))

/// ------------------- Função Closure -----------------------

function criaMultiplicador(multiplicador) {
    
    return function(n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(quadriplica(3))

