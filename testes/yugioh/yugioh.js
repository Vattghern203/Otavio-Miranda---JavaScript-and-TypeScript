const criaCard = (name, level, atk, def) => {
    return {
        name,
        level,
        atk,
        def,

        invocaCard : function () {
            
            return `Eu invoco a carta de level ${this.level}, ${this.name}, com ataque de ${this.atk} e defesa de ${this.def}.`
        }
    }
}


const card1 = criaCard("Mago Negro", 7, 2500, 2000)
const card2 = criaCard("Pequena Maga Negra", 6, 2000, 1700)

console.log(card2.invocaCard())




