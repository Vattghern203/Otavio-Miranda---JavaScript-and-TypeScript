//Função construtora -> objetos
//Função Fábrrica -> objetos

function Pessoa(nome, sobrenome) {

    const ID = 69696 // Só existirá dentro do escopo da função

    this.nome = nome
    this.sobrenome = sobrenome

    const metodoInterno = () => {
        console.log("Esse é um método secreto")
    }

    this.metodo = () => {
        console.log(`${this.nome}, chamou o método.`)
    }
}

const p1 = new Pessoa('Uzumaki', 'Naruto')
const p2 = new Pessoa('Tomohito', 'Oda')

p2.metodo()