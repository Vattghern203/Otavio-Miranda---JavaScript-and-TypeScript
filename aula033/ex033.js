const pessoa = {
    nome: 'José',
    sobrenome: 'Fino',
    idade: 69,
    endereco: {
        rua: 'Augusta',
        numero: 420
    }
};

const { nome: teste = 'inexistente', sobrenome, idade } = pessoa
const { endereco: {rua, numero}, endereco } = pessoa
console.log( rua, numero, endereco)
console.log(teste, sobrenome, idade)

const { nome: primeiroNome, sobrenome: segundoNome, ...resto } = pessoa
console.log(primeiroNome, segundoNome, resto)