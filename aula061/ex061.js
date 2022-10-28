function* geradora01() {

    yield "Valor 1"

    yield "Valor 2"

    yield "Valor 3"
}

// Cada Yield é retornado por vez, ex: Valor 1... Valor 2... Valor 3

const g1 = geradora01()

console.log(g1.next().value)

for (let valor of g1) {
    console.log(valor)
}

function* geradora02() {
    yield 0

    yield 1

    yield 2
}

function* geradora03() {

    yield* geradora02()

    yield 3

    yield 4

    yield 5
}

const g3 = geradora03()

for (let valor of g3) {

    console.log(valor)
}

function* geradora04() {

    yield function() {

        console.log("Etapa 01, vinda do y1")
    }

    yield function() {
        
        console.log("Etapa 02, vinda do y2")
    }
}

const g5 = geradora04()
const func1 = g5.next().value
const func2 = g5.next().value

func1()
func2()