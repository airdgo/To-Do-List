const submit = document.querySelector('[data-submit]');
const clearList = document.querySelector('[data-clear-list]');
const list = document.querySelector('[data-list]');
const input = document.querySelector('[data-input]').value;

function setErrorFor () {
    const formControl = document.getElementsByClassName('form-control');
    formControl.className = 'form-control error';
}

function setErrorFor () {
    
}

function clearAll () {
    list.innerHTML = "";
    return false;
}

function addItem () {
    const input = document.querySelector('[data-input]').value;
    const removeButton = document.createElement("button");
    const doneButton = document.createElement("button");
    const checkIcon = document.createElement("i")
    checkIcon.className = 'check-icon fa fa-check';
    let listItem = document.createElement("li");
    listItem.className = "list-item";

    const formControl = document.getElementById('form-control');
    if(input === '') {
       formControl.className = 'form-control error';
    } else {
        formControl.className = 'form-control';
        listItem.innerText = input;
        list.appendChild(listItem);

        doneButton.innerHTML = 'Done';
        doneButton.onclick = function() {
            doneButton.remove();
            listItem.appendChild(checkIcon);
            return;
        };

        removeButton.innerHTML = 'X';
        removeButton.onclick = function() {
            removeButton.parentElement.remove()
            return;
        };
        
        listItem.appendChild(doneButton);
        listItem.appendChild(removeButton);
    }
    
    return false;
}