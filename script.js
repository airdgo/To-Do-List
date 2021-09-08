const list = document.querySelector('[data-list]');
const clearButton = document.querySelector('[data-clear-list]');
const submitButton = document.querySelector('[data-submit]');

clearButton.addEventListener('click', e => {
    e.preventDefault();
    list.innerHTML = "";
})

submitButton.addEventListener('click', e => {
    e.preventDefault();
    addItem();
})

function addItem () {
    let input = document.querySelector('[data-input]').value;
    let listItem = document.createElement("li");
    const listItemParagraph = document.createElement('p');
    listItemParagraph.className = 'list-item-paragraph';
    const removeButton = document.createElement("button");


    function appendItem () {
        listItemParagraph.innerText = input;
        listItem.className = "list-item";
        listItem.appendChild(listItemParagraph);
        list.appendChild(listItem);
    }

    function checkBoxFunc () {
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.className = "checkbox";
        checkBox.onclick = () => {
            listItemParagraph.classList.toggle('checked');
        }
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

function setError () {
    const formControl = document.getElementById('form-control');
    formControl.className = 'form-control error';
}

function setSucces () {
    const formControl = document.getElementById('form-control');
    formControl.className = 'form-control';
}