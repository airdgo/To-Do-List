const input = document.querySelector('[data-input]');
const submit = document.querySelector('[data-submit]');
const clearList = document.querySelector('[data-clear-list]');

submit.addEventListener('click', e => {
    e.preventDefault();

    // Add input to local storage
    const toDoList = localStorage.getItem('toDoList');
    if (toDoList == null) {
        toDoListObj = [];
    } else {
        toDoListObj = JSON.parse(toDoList);
    };

    myObj = {
        input: input.value
    };

    toDoListObj.push(myObj);
    localStorage.setItem('toDoList', JSON.stringify(toDoListObj));
    input.value = '';

    showToDoList();
})

// Take user input from local storage and display it on the page
const showToDoList = () => {
    const toDoList = localStorage.getItem('toDoList');
    if (toDoList == null) {
        toDoListObj = [];
    } else {
        toDoListObj = JSON.parse(toDoList);
    };

    html = '';
    toDoListObj.forEach((element, index) => {
        html += `
            <li class="list-item">
                <p class="list-item-paragraph">${element.input}</p>
                <input id="${index}" class="checkbox" type="checkbox" data-checkbox onclick="checkBox()">
                <button id="${index}" class="remove-button" onclick="removeNote(this.id)">X</button>
            </li>
        `
    });

    let list = document.querySelector('[data-list]');

    if (toDoListObj != 0) {
        list.innerHTML = html;
    } else {
        list.innerHTML = `<li>Add a to do</li>`
    }

}

// Clear all notes
clearList.onclick = () => {
    localStorage.clear();
}

// Remove a note
const removeNote = (index) => {
    const toDoList = localStorage.getItem('toDoList');
    if (toDoList == null) {
        toDoListObj = [];
    } else {
        toDoListObj = JSON.parse(toDoList);
    };
    toDoListObj.splice(index, 1);
    localStorage.setItem('toDoList', JSON.stringify(toDoListObj));
    location.reload();
}

// Store checkbox value

showToDoList();
