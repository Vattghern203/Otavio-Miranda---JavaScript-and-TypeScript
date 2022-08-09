let altura = document.querySelector('#altura-input')
let peso = document.querySelector('#peso-input')
let res = document.querySelector('#res')
let btn = document.getElementById('btn-submit')

btn.addEventListener("click", recebeEvento)

function recebeEvento (event) {
    event.preventDefault()

    verificaDados()
}

function verificaDados() {

    let alturaStatus = false
    let pesoStatus = false

    console.log(alturaStatus, pesoStatus)

    if (altura.value > 2.72) {

        res.innerHTML = `Peraí, você é o Robert Wadlow? Se não for... favor digitar uma altura menor.`

    } else if (altura.value < 0.63) {

        res.innerHTML = `Calma, calma. Você não pode ser tão pequeno... pode?`

    } else {

        alturaStatus = true

    }

    if (peso.value < 25) {

        res.innerHTML = `Calma ae senhor(a) pena! Digite um peso real.`

    } else if (peso.value > 595) {

        res.innerHTML = `Excedeu o peso limite! Coloque outro valor, por favor.`

    } else {

        pesoStatus = true

    }

    if (alturaStatus && pesoStatus) {

        calcIMC()
    }
}

function calcIMC () {

    const imc = peso.value / altura.value ** 2

    if (imc < 18.5) {

        res.innerHTML = `Abaixo do peso`

    } else if (imc >= 18.5 && imc <= 24.9) {

        res.innerHTML = `Peso normal`

    } else if (imc >= 25 && imc <= 29.9) {

        res.innerHTML = `Sobrepeso`

    } else if (imc >= 30 && imc <= 34.9) {

        res.innerHTML = `Obesidade grau 1`

    } else if (imc >= 35 && imc <= 39.9) {

        res.innerHTML = `Obesidade grau 2`

    } else if (imc >= 40) {

        res.innerHTML = `Obesidade grau 3`

    } else {

        res.innerHTML = `IMC fora da lista! Verifique os dados e tente novamente.`
    }

}
