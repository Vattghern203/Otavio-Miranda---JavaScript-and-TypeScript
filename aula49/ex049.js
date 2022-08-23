// Declaração de função (Function hoisting)

falaOi()

function falaOi() {
    console.log('Oi :)')
}

// First-class objects (Objetos de primeira classe)
// Function expression 

const souUmDado = function() {
    console.log('Sou um dado.')
}

souUmDado()

// Arrow function
const arrrowFunction = () => {
    console.log('sou uma arrow function')
}

arrrowFunction()

// Dentro de um objeto
const obj = {
    falar: function () {
        console.log('Estou a hablar...')
    }
}

obj.falar()

// OU

const obj2 = {
    falar () {
        console.log('Estou a hablar aqui também')
    }
}

obj2.falar()

