const retornaHora = (data) => {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Não é uma instância de Date.')
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
}

try {
    const hora = retornaHora(11)
    console.log(hora)
} catch(err) {
    let hora = new Date()
    console.log('Houve um erro ao gerar a hora deseja... Exibindo hora atual ' + retornaHora(hora))
} finally {
    console.log('Obrigado pela atenção. Bom dia/tarde/noite')
}

