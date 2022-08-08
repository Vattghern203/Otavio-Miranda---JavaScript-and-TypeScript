// ------------------------------ Objetos ---------------------------------

// Lembrando [] para Array e {} para Objeto

const pessoa1 = {
    nome: 'Pedro',
    sobrenome: 'Formiga',
    idade: 69
};

const pessoa2 = {
    nome: 'Javier',
    sobrenome: 'Javiano',
    idade: 24
};

console.log(pessoa1.nome)
console.log(pessoa2.idade)

/*
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
        };
}
*/

// Obs: quando há repetição, como acima, pode-se omitir... como abaixo.

function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa3 = criaPessoa('Prabo', 'Sergio', 76)

console.log(pessoa3)

// Também se pode criar funções dentro de um objeto, que acaba se chamando Método
// Exemplo

const pessoa4 = {
    nome: 'Sasuke',
    sobrenome: 'Uchiha',
    idade: 16,

    apresentaNome () {
        console.log(`Meu nome é ${this.sobrenome} ${this.nome}. Eu tenho ${this.idade} anos. Eu odeio várias coisas, e eu particularmente não gosto de nada.`)
    },

    envelheceUmAno () {
        ++this.idade
    }
}

pessoa4.apresentaNome()

pessoa4.envelheceUmAno()

console.log(`${pessoa4.idade}`)

pessoa4.apresentaNome()