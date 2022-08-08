function meuEscopo () {
    const formulario = document.querySelector('#formulario');
    const resultado = document.querySelector('.resultado');

    const pessoas = []

    function recebeEventoForm (evento) {

        evento.preventDefault()
        const nome = formulario.querySelector('.nome')
        const sobrenome = formulario.querySelector('.sobrenome')
        const peso = formulario.querySelector('.peso')
        const altura = formulario.querySelector('.altura')
    
        console.log(nome, sobrenome, peso, altura)
    
        pessoas.push({
            nome : nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
    
        let newParagraph = document.createElement('p')

        newParagraph.innerHTML = `${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value} <br>`

        resultado.appendChild(newParagraph)

        console.log(pessoas)
    }

    formulario.addEventListener("submit", recebeEventoForm)
}

meuEscopo()