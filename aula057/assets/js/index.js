function Calculadora () {

    const display = document.querySelector(".display")
    const bntClear = document.querySelector(".btn-clear")

    const inicia = () => {
        this.cliqueBotoes()
        this.pressionaEnter()
    }

    const pressionaEnter = () => {

        this.display.addeventlistener('keyup', event => {
            if (event.keycode == 13) {
                this.realizaConta()
            }
        })
    }

    const realizaConta = () => {
        let conta = this.display.value

        try {

            conta = eval(conta)

            if (!conta) {

                window.alert("Conta inválida")

                return
            }

            this.display.value = String(conta)


        } catch(error) {

            window.alert("Conta inválida")

            return
        }
    }

    const clearDisplay = () => {

        this.display.value = ""

    }

    const apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    const cliqueBotoes = () => {

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
    }

    const btnParaDisplay = (valor) => {
        this.display.value += valor
    }
}

const calculadora = new Calculadora()

calculadora.inicia()