
// Declare variables
const myTodolist = document.getElementsByTagName("li"); // Selecting all list items in the HTML document 
const editTask = document.getElementsByClassName("editIcon"); //edits tasks 
const deleteTask = document.getElementsByClassName("deleteIcon"); //deletes tasks
const completeTask = document.getElementsByClassName("completeIcon");
const completedTasksSection = document.getElementById("completed-tasks");
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

  // Create the completed task icon
  const completeIcon = document.createElement("i");
 completeIcon.className = "fa-solid fa-check fa-lg";

 completeIcon.onclick = function () {
  if (checkbox.checked) {

   // Remove the edit icon and delete icon
   editIcon.style.display = "none";
   deleteIcon.style.display = "none";
   
   // Apply strikethrough style to the task
   label.style.textDecoration = "line-through";

    ul.removeChild(li); // Remove the task from the "Tasks To Complete" section
    completedTasksSection.appendChild(li); // Append the task to the "Completed Tasks" section
    checkbox.checked = false; // Uncheck the checkbox after marking as completed
} else {
    alert("Please check the checkbox to complete the task.");
}

 };




  // Create the edit task icon
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

  // Create the delete task icon
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash delete-icon";
  
  deleteIcon.onclick = function () {

    if (checkbox.checked) {
      ul.removeChild(li); // Remove the list item
    } else {
      alert("Please check the checkbox to delete the task.");
  }

  };

  
  li.appendChild(completeIcon);
  li.appendChild(editIcon);
  li.appendChild(deleteIcon);

  ul.appendChild(li);
  document.getElementById("task-input").value = "";
}



