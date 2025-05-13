const keyTaskList = 'keyTaskList';
const keyCounter = 'keyCounter';
let tasks = [];
let counterTask = 0;

// Получаем массив в задач из localStorage, если он есть
if (localStorage.getItem(keyTaskList)) {
    let tasksAsString = localStorage.getItem(keyTaskList);
    tasks = JSON.parse(tasksAsString);

    // Извлекаем из localStorage счетчик для Id задачи
    if (localStorage.getItem(keyCounter)){
        counterTask = +localStorage.getItem(keyCounter);
    }
}

function addNewTask() {
    // 1. Получить инпут и текст в нем
    const elem_input = document.getElementById('new_task');
    const task_name = elem_input.value;
    if (task_name != '' && task_name != null) {
        // 2. Вызов метода по отрисовке нового элемента
        createTaskElement(counterTask, task_name);

        // 3. Обновляем локальный список задач и значение в localStorage
        tasks.push({
            id: counterTask,
            title: task_name
        });
        localStorage.setItem(keyTaskList, JSON.stringify(tasks));

        // 4. Очищаем значение в инпуте
        elem_input.value = '';

        // 4. Инкремент счетчика
        counterTask++;
        localStorage.setItem(keyCounter, counterTask);
    }
}

function createTaskElement(taskId, title) {
    // 1. Создать новый элемент div
    const elem_div = document.createElement('div');
    elem_div.innerHTML = `
        <input id="tch-${taskId}" type="checkbox" />
        <label for="tch-${taskId}">${title}</label>`

    // 2. Вставить новый элемент в начало списка
    const elem_ul = document.getElementById('task_list');
    elem_ul.prepend(elem_div);
}

// Отрисовываем задачи из списка tasks
tasks.forEach(x => createTaskElement(x.id, x.title))

const btn = document.getElementById('btn_click');
btn.onclick = addNewTask;

document.onkeydown = (ev) => {
    if (ev.code === 'Enter') {
        addNewTask();
    }
};