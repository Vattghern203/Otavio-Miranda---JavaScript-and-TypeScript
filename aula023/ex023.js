// Análise de curto-circuito

// Usando o OU (||), ele retorna o primeiro item verdadeiro

console.log(false || undefined || "Zéquinha" || NaN)

const verdadeiro = NaN || undefined || 0 || 123

console.log(verdadeiro)

// Usando o AND (&&), ele retorna o primeiro false que encontrar e já por ali mesmo. Em caso de verrdadeiro, ele retorna o último.

const verdade2 = 1 && 22 && 99

console.log(verdade2)

// O sinal de negação (!) basicamente inverte a veracidade de uma expressão/variável.

console.log(!true)