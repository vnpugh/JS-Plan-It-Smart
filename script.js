// Declare variables
const myTodolist = document.getElementsByTagName("LI"); //Selecting all list items in the HTML document 
const deleteTask = document.getElementsByClassName("delete"); //Hides or deletes tasks when the X is clicked
const list = document.querySelector('ul'); //Item is checked when clicked inside the box

// Create a "delete" button and append it to each list item
for (let i = 0; i < myTodolist.length; i++) {
    const btn = document.createElement("BUTTON");
    const txt = document.createTextNode("\u00D7");
    btn.className = "delete"; // Use the class name "delete"
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
// const list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);


// Create a new list item when clicking on the "Add" button
// function newElement() {
//     const inputValue = document.getElementById("task-input").value;
    
//     if (inputValue === '') {
//       alert("You must write something!");
//     } else {
//       const li = document.createElement("li");
//       const t = document.createTextNode(inputValue);
//       li.appendChild(t);
      
//       document.getElementById("custom-list").appendChild(li);
      
//       const span = document.createElement("SPAN");
//       const txt = document.createTextNode("\u00D7");
//       span.className = "close";
//       span.appendChild(txt);
//       li.appendChild(span);
      
//       for (let i = 0; i < closeButtons.length; i++) {
//         closeButtons[i].onclick = function() {
//           const div = this.parentElement;
//           div.style.display = "none";
//         };
//       }
//      }
    
//     document.getElementById("task-input").value = "";

//     }

function newElement() {
    const inputValue = document.getElementById("task-input").value;

    if (inputValue === '') {
      alert("You must write something!");
    } else {
      // Create a new list item
      const li = document.createElement("li");
      const t = document.createTextNode(inputValue);
      li.appendChild(t);

      // Create a close button for the new item
      const span = document.createElement("SPAN");
      const txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      // Append the new item to the list
      document.getElementById("custom-list").appendChild(li);

      // Clear the input field
      document.getElementById("task-input").value = '';

      // Add a click event listener to the close button
      span.onclick = function() {
        li.style.display = "none";
      };
    }
  }