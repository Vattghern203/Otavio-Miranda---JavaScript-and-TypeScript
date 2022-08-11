const res = document.querySelector('#res')

const data = new Date()

const options = {
    dateStyle: "full",
    timeStyle: "short"
}

res.innerHTML = data.toLocaleDateString('pt-BR', options)