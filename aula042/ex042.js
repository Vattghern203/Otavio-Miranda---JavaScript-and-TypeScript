const fizzBuzz = (x) => {

    console.log(`O número escolhido foi: ${x}`)
    console.log(typeof(x))

    if (typeof x !== 'number') { 
        
        return x
    }

    if (x % 3 == 0 && x % 5 == 0){

        return 'FizzBuzz'
    } 
    
    if (x % 5 == 0){

        return 'Buzz'
    }

    if (x % 3 == 0) {

        return 'Fizz'
    }

    return x

}

const randomNumber = () => {
    const randNum = Math.random() * (100 - 1) + 1
    return Math.floor(randNum)
}

console.log(fizzBuzz(randomNumber()))
