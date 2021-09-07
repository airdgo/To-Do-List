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
    const removeButton = document.createElement("button");


    function appendItem () {
        listItem.className = "list-item";
        listItem.innerText = input;
        list.appendChild(listItem);
        
    }

    function checkBoxFunc () {
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.className = "checkbox";

        listItem.appendChild(checkBox);
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
        checkBoxFunc ();
        removeButtonFunc ();
    }

    resetInput();

    return false;
}