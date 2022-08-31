function criaCalculadora () {
    
    return {
        
        display : document.querySelector(".display"),
        btnClear : document.querySelector(".btn-clear"),
        
        inicia () {
            this.cliqueBotoes ()
            this.pressionaEnter ()
        },

        pressionaEnter () {

            this.display.addEventListener('keyup', event => {
                if (event.keycode === 13) {
                    this.realizaConta()
                }
            })
        },

        realizaConta () {
            let conta = this.display.value

            try {

                conta = eval(conta)

                if (!conta) {

                    window.alert("Conta inválida!")
                    return
                }

                this.display.value = String(conta)

            } catch(error) {

                window.alert("Conta inválida!")

                return

            }
        },

        clearDisplay () {
            this.display.value = ""
        },

        apagaUm () {
            this.display.value = this.display.value.slice(0, -1)
        },

        cliqueBotoes () {
            // O this é sempre quem chama a função ou método.
            // Caso queira que o this se torne sempre quem chamou a função primeiro, use arrow functions
            // Nesse momento o this passa a ser o document, não mais a calculadora.
            document.addEventListener('click', function (event) {
                const element = event.target

                if (element.classList.contains('btn-num')) {
                    this.btnParaDisplay (element.innerText)  
                }

                if (element.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if (element.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if (element.classList.contains('btn-eq')) {
                    this.realizaConta()
                }

            // O bind após a função altera o this para o this que chamou a função, no caso, a calculadora
            }.bind(this))
        },

        btnParaDisplay (valor) {
            this.display.value += valor
        }
    }
}

const calculadora = criaCalculadora()

calculadora.inicia()