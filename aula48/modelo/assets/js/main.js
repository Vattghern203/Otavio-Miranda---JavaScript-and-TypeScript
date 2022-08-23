const inputTask = document.querySelector('.input-task')
const btnTask = document.querySelector('.btn-add-task')
const taskList = document.querySelector('.list-task')

inputTask.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {{
       if (!inputTask.value) return

       createTask(inputTask.value)
    }}
})

const createTask = (textInput) => {
    const li = createListItem()
    li.innerText = textInput
    taskList.appendChild(li)
    cleanInput()
    createButtonDelete(li)
    saveTasks()
}

const createListItem = () => {
    return document.createElement("li")
}

const createButtonDelete = (listItem) => {
    listItem.innerText += ' '
    const btnDelete = document.createElement('button')
    btnDelete.innerText = 'Delete'
    btnDelete.setAttribute('class', 'delete')
    listItem.appendChild(btnDelete)
}

function cleanInput () {
    inputTask.value = ''
    inputTask.focus()
}

btnTask.addEventListener('click', function() {
    if (!inputTask.value) return

    createTask(inputTask.value)
})

document.addEventListener('click', function(event) {
    const element = event.target
    
    if (element.classList.contains('delete')) {
        element.parentElement.remove()
        saveTasks()
    }
}) 

function saveTasks () {
    const taskCountLi = taskList.querySelectorAll('li')
    const taskListText = []

    for (let taskIterable of taskCountLi) {
        let taskText = taskIterable.innerText
        taskText = taskText.replace('Delete', '').trim()
        taskListText.push(taskText)
    }

    const taskListJSON = JSON.stringify(taskListText)
    localStorage.setItem('tasks', taskListJSON)
}

const readSavedTasks = () => {
    const taskSaved = localStorage.getItem('tasks')
    const taskSavedList = JSON.parse(taskSaved)

    for (let i of taskSavedList) {
        createTask(i)
    }
}

readSavedTasks()