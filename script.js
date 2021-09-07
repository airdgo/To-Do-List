const list = document.querySelector('[data-list]');


function setError () {
    const formControl = document.getElementById('form-control');
    formControl.className = 'form-control error';
}

function setSucces () {
    const formControl = document.getElementById('form-control');
    formControl.className = 'form-control';
}

function clearAll () {
    list.innerHTML = "";
    return false;
}

function addItem () {
    let input = document.querySelector('[data-input]').value;
    let listItem = document.createElement("li");
    const doneButton = document.createElement("button");
    const removeButton = document.createElement("button");


    function appendItem () {
        listItem.className = "list-item";
        listItem.innerText = input;
        list.appendChild(listItem);
        
    }

    function doneButtonFunc () {
        const checkIcon = document.createElement("i")
        checkIcon.className = 'check-icon fa fa-check';
        doneButton.innerHTML = 'Done';
        doneButton.className = 'done-button';
        doneButton.onclick = function () {
            doneButton.remove();
            listItem.appendChild(checkIcon);
            return;
        };
        listItem.appendChild(doneButton);
    }

    function removeButtonFunc () {
        removeButton.innerHTML = 'X';
        removeButton.className = 'remove-button';
        removeButton.onclick = () => {
            removeButton.parentElement.remove()
            return;
        };
        listItem.appendChild(removeButton);
    }

    const resetInput = () => document.querySelector('[data-input]').value = "";

    if(input === '') {
       setError();
    } else {
        setSucces ();
        appendItem ();
        doneButtonFunc ();
        removeButtonFunc ();
    }

    resetInput();

    return false;
}