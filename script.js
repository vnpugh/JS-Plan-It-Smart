
// Declare variables
const myTodolist = document.getElementsByTagName("li"); // Selecting all list items in the HTML document 
const editTask = document.getElementsByClassName("editIcon"); // Hides or deletes tasks when the X is clicked
const deleteTask = document.getElementsByClassName("deleteIcon"); // Hides or deletes tasks when the X is clicked

const ul = document.getElementById("custom-list");

  const checkboxContainer = document.createElement("div");
  const checkbox = document.createElement("input");
  const checkboxLabel = document.createElement("label");


const addButton = document.getElementById("addButton"); // Get the "Add" button by its ID

function newTaskElement() {
  const inputValue = document.getElementById("task-input").value;
  if (inputValue === '') {
      alert("Task Cannot Be Empty!");
      return;
  }

  const ul = document.getElementById("custom-list");
  const li = document.createElement("li");

  const checkboxContainer = document.createElement("div");
  checkboxContainer.className = "checkbox-container";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox"; // Add a class to style the checkbox

  const label = document.createElement("label");
  label.className = "checkbox-label";
  label.textContent = inputValue;

  li.appendChild(checkboxContainer);
  checkboxContainer.appendChild(checkbox);
  checkboxContainer.appendChild(label);

  // Create the edit and delete icons
  const editIcon = document.createElement("i");
  editIcon.className = "fas fa-pencil-alt edit-icon"; // Set the icon's class
  
  editIcon.onclick = function () {
    if (checkbox.checked) {
        const newLabel = prompt("Edit the task:", label.textContent);
        if (newLabel !== null) {
            label.textContent = newLabel;
            checkbox.checked = false; // Uncheck the checkbox after editing
        }
    } else {
        alert("Please check the checkbox to edit the task.");
    }
};

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash delete-icon";
  
  deleteIcon.onclick = function () {

    if (checkbox.checked) {
      ul.removeChild(li); // Remove the list item
    } else {
      alert("Please check the checkbox to delete the task.");
  }

  };


  li.appendChild(editIcon);
  li.appendChild(deleteIcon);

  ul.appendChild(li);
  document.getElementById("task-input").value = "";
}



