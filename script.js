// Declare variables
const myTodolist = document.getElementsByTagName("LI"); // Selecting all list items in the HTML document 
const deleteTask = document.getElementsByClassName("delete"); // Hides or deletes tasks when the X is clicked
const list = document.querySelector('ul'); // Item is checked when clicked inside the box
const addButton = document.getElementById("addButton"); // Get the "Add" button by its ID

// Create a "delete" button and append it to each list item
for (let i = 0; i < myTodolist.length; i++) {
  const btn = document.createElement("BUTTON");
  const txt = document.createTextNode("\u00D7");
  btn.className = "delete";
  btn.appendChild(txt);
  myTodolist[i].appendChild(btn);
}

// Click on a delete button to hide the current list item
for (let i = 0; i < deleteTask.length; i++) {
  deleteTask[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newTaskElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("task-input").value;
  const text = document.createTextNode(inputValue);
  li.appendChild(text);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("custom-list").appendChild(li);
  }
  document.getElementById("task-input").value = "";

  const btn = document.createElement("BUTTON");
  const unicode = document.createTextNode("\u00D7");
  btn.className = "add";
  btn.appendChild(unicode);
  li.appendChild(btn);

  btn.onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  };
}








  