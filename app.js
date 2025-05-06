
function crud() {
    const elem = document.getElementById('main_head');
    console.log(elem);

    setTimeout(() => {
        elem.innerText = 'Ох уж эти делишки!'
    }, 2000);

    setTimeout(() => {
        elem.parentNode.removeChild(elem);
    }, 4000);

    setTimeout(() => {
        const newElem = document.createElement('h1');
        newElem.innerText = 'Новое начало. Ура!'
        newElem.id = 'main_head';
        document.body.prepend(newElem);
    }, 6000);
}


function addNewTask() {
    // 1. Получить инпут и текст в нем
    const elem_input = document.getElementById('new_task');
    const task_name = elem_input.value;

    if (task_name != '' && task_name != null) {
        // 2. Создать новый элемент div
        const elem_div = document.createElement('div');
        elem_div.innerHTML = `
        <input type="checkbox" />
        <label>${task_name}</label>`

        // 3. Вставить новый элемент в начало списка
        const elem_ul = document.getElementById('task_list');
        elem_ul.prepend(elem_div);

        // 4. Очищаем значение в инпуте
        elem_input.value = '';
    }
}

const btn = document.getElementById('btn_click');
btn.onclick = addNewTask;

document.onkeydown = (ev) => {
    if (ev.code === 'Enter') {
        addNewTask();
    }
};