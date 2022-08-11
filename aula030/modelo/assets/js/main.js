const data = new Date()

let res = document.querySelector('#res')

function addZero (num) {

    return num >= 10 ? num : `0${num}`

}

function retornaMsg () {
    let dia = retornaDia(data.getDay())
    let mes = retornaMes(data.getMonth())

    res.innerHTML = `${dia}, ${data.getDate()} de ${mes} de ${data.getFullYear()} ${addZero(data.getHours())}:${addZero(data.getMinutes())}:${addZero(data.getSeconds())}`
}

function retornaDia(dataDia) {

    switch(dataDia) {
        
    case 0:
        return 'Domingo'
    
    case 1:
        return 'Segunda-feira'

    case 2:
        return 'Terça-feira'

    case 3:
        return 'Quarta-feira'

    case 4:
        return 'Quinta-feira'

    case 5:
        return 'Sexta-feira'

    case 6:
        return 'Sábado'
    
    default:
        return ''
    }
}

function retornaMes(dataMes) {
    
    switch(dataMes) {
        case 0:
            return 'Janeiro'
        
        case 1:
            return 'Fevereiro'

        case 2:
            return 'Março'

        case 3:
            return 'Abril'

        case 4:
            return 'Maio'

        case 5:
            return 'Junho'

        case 6:
            return 'Julho'

        case 7:
            return 'Agosto'

        case 8:
            return 'Setembro'

        case 9:
            return 'Outubro'

        case 10:
            return 'Novembro'

        case 11:
            return 'Dezembro'
    }
}

setInterval(retornaMsg, 0)

