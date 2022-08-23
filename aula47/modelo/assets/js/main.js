const timer = document.querySelector('#watch')
const btnStart = document.querySelector('#btn-start')
const btnStop = document.querySelector('#btn-stop')
const btnClean = document.querySelector('#btn-clean')

const startTimer = () => {
    let data = new Date()
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

function addHour () {

    timer.innerHTML = ''
    timer.innerHTML = `${startTimer()}`
    timer.classList.remove('paused')

    btnStart.innerHTML = `Start`
    btnStop.innerHTML = `Stop`

    console.log(timer)

    const startWatch = setInterval(addHour, 1000)

    btnStop.addEventListener('click', stopWatch)

    function stopWatch () {
        clearInterval(startWatch)

        btnStart.innerHTML = `Resume`
        btnStop.innerHTML = `Stopped`
    }

}

btnStart.addEventListener('click', addHour)

btnClean.addEventListener('click', function () {
    timer.classList.remove('paused')
    timer.innerHTML = `00:00:00`
})