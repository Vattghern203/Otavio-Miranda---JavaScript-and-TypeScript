let num = (document.getElementById('number-insert'))

let res = document.getElementById('container-res')

function numInfo () {

   limpaTudo()

   const raiz = `A raiz de ${num.value} é  ${(num.value ** 0.5).toFixed(2)}`

   createParagraph(raiz)

   const inteiro = `${num.value} é inteiro? R: ${Number.isInteger(parseInt(num.value))}`

   createParagraph(inteiro)

   const notANumber = `${num.value} não é um número? R: ${Number.isNaN(num.value)}`

   createParagraph(notANumber)

   const arredondaCima = `O número ${num.value} arrendondado para cima é: ${Math.ceil(num.value)}`

   createParagraph(arredondaCima)

   const arredondaBaixo = `O número ${num.value} arrendondado para baixo é: ${Math.floor(num.value)}`

   createParagraph(arredondaBaixo)

   const arredondaPadrao = `O númer ${num.value} arredondado de forma padrão é igual a: ${Math.round(num.value)}`

   createParagraph(arredondaPadrao)

}

function limpaTudo () {

    res.innerHTML = ''
}

function createParagraph (text) {
    let newParagraph = document.createElement("p")

    newParagraph.innerHTML = text

    res.appendChild(newParagraph)
}