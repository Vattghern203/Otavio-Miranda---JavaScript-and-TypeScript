// Factory fucntion (função fábrica)

function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto (valor) {
            valor = valor.split(" ")

            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')

        },

        fala : function (assunto = 'Nonsense') {
            return `${this.nome} ${this.sobrenome} está a hablar sobre: ${assunto}.`
        },

        altura: altura,
        peso: peso,
        // Getter ---
        // O get faz a função se passar por um atributo do objeto
        get imc() {
            return (this.peso / (this.altura ** 2)).toFixed(2)
        }
    }
}

const pessoa001 = criaPessoa('Afrânio', 'Verdureiro', 1.90, 90)
pessoa001.nomeCompleto = "Joao Aquino Magalhaes"
console.log(pessoa001.nomeCompleto)
console.log(pessoa001.nome)
console.log(pessoa001.sobrenome)
console.log(pessoa001.fala('Verduras fresquinhas 😋'))
console.log(pessoa001.imc)

const pessoa002 = criaPessoa("Alberto", "Aisten", 2.20, 100)
console.log(pessoa002.fala("Teorias da Conspiração 👽"))
console.log(pessoa002.imc)