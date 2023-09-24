
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

//Tasks To Complete Section
function newTaskElement() {
  const inputValue = document.getElementById("task-input").value;
  if (inputValue === '') {
      alert("Task Cannot Be Empty!");
      return;
  }



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

//Completed Tasks Section
//create the completed task (check mark) icon
 const completeIcon = document.createElement("i");
 completeIcon.className = "fa-solid fa-check fa-lg"; //check mark

 completeIcon.onclick = function () {
  if (checkbox.checked) {


      //Create the trash can icon
      const trashIcon = document.createElement("i");
      trashIcon.className = "fa-regular fa-trash-can fa-sm";

   // Remove the edit icon and delete icon
   editIcon.style.display = "none";
   completeIcon.style.display = "none"; // Remove the checkmark icon
   
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
  editIcon.className = "fa-solid fa-pencil fa-lg"; // Set the icon's class
  
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
  deleteIcon.className = "fa-regular fa-trash-can fa-lg";
  
  deleteIcon.onclick = function () {

    if (checkbox.checked) {
     // Remove the list item if the checkbox is checked
     completedTasksSection.removeChild(li);
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



