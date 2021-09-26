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
        input: input.value,
        isCompleted: false
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
                <p id="${index}" class="list-item-paragraph">${element.input}</p>
                <button id="${index}" class="checkbox" onclick="checkNote(this.id)"><i class="fas fa-check-circle"></i></button>
                <button id="${index}" class="remove-button" onclick="removeNote(this.id)"><i class="fas fa-trash-alt"></i></button>
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

let toDoList = localStorage.getItem('toDoList');

// Check if note is checked
const checkNote = (index) => {
    toDoList = localStorage.getItem('toDoList');
    if (toDoList == null) {
        toDoListObj = [];
    } else {
        toDoListObj = JSON.parse(toDoList);
    };


    localStorage.setItem('toDoList', JSON.stringify(toDoListObj));
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

showToDoList();
