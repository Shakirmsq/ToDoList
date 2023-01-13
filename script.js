function addTask() {
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered
    if (newTask != "") {
        // create new HTML list item
        var item = document.createElement("li");
        // add HTML for buttons and new task text
        // Note, need to use '' because of "" in HTML
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' +
            '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + '<input type="button" class="important"  value="&#33;" onclick="important(item)"/>' +
            newTask;
        // add new item as part of existing list
        document.getElementById("tasks").appendChild(item);

        /* Step 4 below here */

        // To make the todo item typed in the input box disappear, set input.value to an empty string.
        input.value = "";

        // Change input.placeholder to set it to a new string such as “enter next task …”
        input.placeholder = "Enter new task ..";

    }
}



// change styling used for given item
function markDone(item) {
    item.className = 'finished';
}

/* Step 7 below here */
function remove(item) {
    // remove item completely from document

    if (item.className == 'finished') {
        item.remove();
    }

}

/* Step 11 below here */
function doAbout() {

    var abt = document.getElementById("divabout");

    abt.innerHTML = "Author is Mohammed Shakir";

    abt.className = 'yellowbackground';

}

/* Step 14 below here */
function clearAbout() {

    var result = document.getElementById("divabout");
    result.innerHTML = "";
}

function important(item) {

    item.className = "important";
}