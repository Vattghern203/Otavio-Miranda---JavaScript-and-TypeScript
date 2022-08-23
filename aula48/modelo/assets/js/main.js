const taskBtn = document.querySelector('#insert-task')
const taskList = document.querySelector('#list-task')
const taskAdd = document.getElementById('add-task')

const addTask = () => {
    const newTask = document.createElement("li")
    const newBtn = document.createElement("button")

    newTask.innerHTML = `${taskBtn.value}`
    newBtn.setAttribute('id', 'delete-btn')

    taskList.appendChild(newTask)
    newBtn.insert()

    taskBtn.value = ''
    taskBtn.focus()
}

taskAdd.addEventListener('click', addTask)