// Em funções aninhadas, a busca de variáveis se faz do filho para o pai, do pai para o avô e assim por diante... até chegar no escopo global.

const nome = 'Otávio'

function falaNome() {

    const nome = 'Abgail'
    console.log(nome)
}

function usaFalaNome() {
    falaNome()
}

usaFalaNome()
