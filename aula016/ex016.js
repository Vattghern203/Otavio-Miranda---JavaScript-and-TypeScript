// ------------------ Arrays ---------------------------------------

const alunos = ['Otávio', 'Pedro', 'Joao'];

alunos[0] = 'Felipao'
alunos[3] = 'Benjamin'

console.log(alunos);

// Pode-se usar o método a seguir para adicionar um item ao final do array.
// Como também pode-se usar o push.

alunos[alunos.length] = 'Joquinha'
alunos[alunos.length] = 'Mathias'
alunos[alunos.length] = 'Isadora Pinto'

// Usando push.

alunos.push('Carácolis')

console.log(alunos)

// Mudar o índice de todos os arrays para adicionar um novo item ao começo
// Usa-se unshifit

alunos.unshift('Primeiro')

console.log(alunos)

// Remover o último item do array
// Usa-se pop()

const alunoRemovido = alunos.pop()

console.log('Array Alterado: ' + alunos, 'Aluno removido: ' + alunoRemovido)

// Para remover o primeiro item, temos a função shift()
// Exemplo

const primeiroAlunoDaFila = alunos.shift()

console.log(primeiroAlunoDaFila)

// Para remover itens sem mudar os índices, pode-se fazer uso do delete

delete alunos[4]

console.log(alunos[4])

// No JavaScript, você pode acessar valores que não existem dentro de um array. Exemplo'

console.log(`aluno inexistente: ${alunos[69]}`)

// Pode-se também usar o slice em arrays, só que ele faz a contagem dos índices por elementos dentro do array

console.log(alunos.slice(0, -2))

// Para descobrir se você está trabalhando com um array basta:
console.log(alunos instanceof Array)

// Obs: lembrando que um array é um objeto
console.log(typeof alunos)

