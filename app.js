let counterTask = 4;

let tasks = [
    {
        id: 1,
        text: 'Выбрать наряд на 13-ое апреля'
    },
    {
        id: 2,
        text: 'Купить праздничный торт'
    },
    {
        id: 3,
        text: 'Спрыгнуть с парашютом'
    },
]

function addNewTask() {
    // 1. Получить инпут и текст в нем
    const elem_input = document.getElementById('new_task');
    const task_name = elem_input.value;
    if (task_name != '' && task_name != null) {
        // 2. Вызов метода по отрисовке нового элемента
        createTaskElement(counterTask, task_name);

        // 3. Очищаем значение в инпуте
        elem_input.value = '';

        // 4. Инкремент счетчика
        counterTask++;
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
tasks.forEach(x => createTaskElement(x.id, x.text))

const btn = document.getElementById('btn_click');
btn.onclick = addNewTask;

document.onkeydown = (ev) => {
    if (ev.code === 'Enter') {
        addNewTask();
    }
};