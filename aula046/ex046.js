const mostraHora = () => {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

//setInterval é executado infinitamente usando o tempo definido em ms.
const timer = setInterval(function () {
    console.log(mostraHora())
}, 1000)

//setTimeOut executa apenas uma vez no tempo fornecido
setTimeout(function () {
    clearInterval(timer)
}, 10000)

setTimeout(function () {
    console.log(`TimeOut`)
}, 20000)

