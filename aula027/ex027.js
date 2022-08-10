// Operação Ternária

// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'

const pontuacaoUsuario = 500

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'

const corUsuario = null

const corPadrao = corUsuario || 'black'

console.log(nivelUsuario, corPadrao)