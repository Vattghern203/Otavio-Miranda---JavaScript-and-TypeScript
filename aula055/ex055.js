// IIFE -> Immediately Invoked Function Expression

(function (idade, peso, altura) {
    
    const sobrenome = 'Uchiha'

    function criaNome (nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome () {
        console.log(criaNome('Sasuke'))
    }

    falaNome()
    console.log(idade, peso, altura)

})(21, 60, 1.80)