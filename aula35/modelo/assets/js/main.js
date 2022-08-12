const container = document.querySelector('.container') 

const elementos = [
    {tag: 'p', texto: 'Parágrafo'},
    {tag: 'div', texto: 'Divisória'},
    {tag: 'section', texto: 'Seção'},
    {tag: 'footer', texto: 'Rodapé'}
]

for (const elementoIndex of elementos) {
    criaTag(elementoIndex)
    console.log(elementoIndex)
}

function criaTag (elemento) {
    const elementoCriado = document.createElement(elemento.tag)

    container.appendChild(elementoCriado)

    addTexto(elemento, elementoCriado)
}

function addTexto (elemento, novoElemento) {
    novoElemento.innerText = elemento.texto

    return novoElemento
}