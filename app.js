

function crud() {
    // операция чтения элемента
    const elem = document.getElementById('main_head');
    console.log(elem);

    setTimeout(() => {
        elem.innerText = 'Это совсем не смешные делишки'
    }, 2000);

    setTimeout(() => {
        elem.parentNode.removeChild(elem)
    }, 4000)

    setTimeout(() => {
        const newElem = document.createElement('h1');
        newElem.innerText = 'Деловые дела'
        document.body.prepend(newElem);
    }, 6000)
}

const btn = document.getElementById('main_head');
btn.onclick = crud;