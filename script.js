// Select the items
const clear = document.querySelector("[data-clear-list]");
const list = document.querySelector("[data-list]");
const input = document.querySelector("[data-input]");
const submit = document.querySelector("[data-submit]");

// Clases names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST = [],
    id = 0;

// Get items from local storage
let data = localStorage.getItem("TODO");

// check if data is not empty
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length; // set the id to the last one in the list
    loadList(LIST); // load the list to the user interface
} else {
    LIST = [];
    id = 0;
}

// load items to the user interface
function loadList(array) {
    array.forEach(element => {
        addToDo(element.name, element.id, element.done, element.trash);
    });
}

// Add to do function
function addToDo(toDo, id, done, trash) {

    if (trash) { return; };
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `
                <li class="list-item">
                    <p class="list-item-paragraph ${LINE}">${toDo}</p>
                    <i class="fa ${DONE} co checkbox" job="complete" id="${id}"></i>
                    <i class="fas fa-trash-alt remove-button" job="delete" id="${id}"></i>
                </li>
                `;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
}

// Add an item when user hits submit
submit.addEventListener('click', e => {
    e.preventDefault();
    const toDo = input.value;
    if (toDo) {
        addToDo(toDo, id, false, false);
        LIST.push({
            name: toDo,
            id: id,
            done: false,
            trash: false
        });
        // Add items to local storage
        localStorage.setItem("TODO", JSON.stringify(LIST));
        id++;
    }
    input.value = "";
})

// Complete to do function
const completeToDo = (element) => {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".list-item-paragraph").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
};

const removeToDo = (element) => {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;
};

// Target items created dynamically
list.addEventListener('click', e => {
    const element = e.target;
    const elementJob = element.attributes.job.value; // complete or delete

    if (elementJob === "complete") {
        completeToDo(element);
    } else if (elementJob === "delete") {
        removeToDo(element);
    };
    // Add items to local storage
    localStorage.setItem("TODO", JSON.stringify(LIST));
});

// Clear the list
document.querySelector("[data-clear-list]").onclick = () => {
    localStorage.clear();
}