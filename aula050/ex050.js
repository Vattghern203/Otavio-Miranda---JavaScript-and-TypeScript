// argumentos que sustentam todos os argumentos enviados.
// arguments = todos os argumentos passado para a função, mesmo ela não recebendo nenhum.
// Mesmo ao passar os argumentos, todos ficam guardados na arguments.

function exFunction (x , y) {
    let total = 0
    for (let argumento of arguments) {
        total += argumento
    }

    console.log(total, x, y)
}

exFunction(1, 3, 4, 6, 7, 9, 10)

// Se os argumentos definidos na função excederem os passados, os remanescentes são setados para undefined.

function soma(a, b = 0) {
    console.log(a + b)
}

soma(10)

// Caso um parâmetro não for passado ao chamar a função, ele se torna undefined.
// Para evitar demais problemas, basta setar um valor padrão para ele, caso não seja enviado nada. Exemplo acima.

function soma2(a, b = 10, c = 5) {
    console.log(a + b + c)
}

soma2(10, undefined, 10)

// Caso queira que uma parâmetro assuma o valor padrão ele se encontra no meio de vários outros. Basta passar o seu valor como undefined, assim ele receberá o valor padrão.

function retornNome({ nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}

retornNome({ nome: 'Otávio', sobrenome: 'Augusto', idade: 21})

function retornaValor([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}

retornaValor([10, 69, 24])

// ------------------------------------------------------------

// O rest operator (...) tem sempre que ser o último parâmetro da função.
function conta(operador, acumulador, ...numeros) {

    console.log(arguments)

    for(let numero of numeros) {

        if (operador === '+') {
            acumulador += numero
        }

        if (operador === '-') {
            acumulador -= numero
        }

        if (operador === '/') {
            acumulador /= numero
        }

        if (operador === '*') {
            acumulador *= numero
        }
        
    }

    console.log(acumulador)
}

conta('*', 1, 20, 40, 60, 80)


