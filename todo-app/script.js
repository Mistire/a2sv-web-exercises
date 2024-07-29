const todoList = document.getElementById("todo-list");

const todoForm = document.getElementById("todo-form");

const todoInput = document.getElementById("todo-input");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTask = todoInput.value;

  // if (newTask === "") {
  //   alert("Please enter a task");
  //   return;
  // }

  todoInput.value = "";

  addTask(newTask)
});

function addTask(task) {
  //Creating task
  const listItem = document.createElement('li');
  const taskText = document.createTextNode('input.value');
  const btnSpan = document.createElement('span')
  

  taskText.textContent = task;
  listItem.appendChild(taskText);

  //Deleting task
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button')
  
  deleteButton.addEventListener('click', function() {
    todoList.removeChild(listItem);
  })
  
  btnSpan.appendChild(deleteButton)
  listItem.appendChild(btnSpan)

  todoList.appendChild(listItem)
  todoList.appendChild(btnSpan)

  //Editing task
  const editButton = document.createElement('button')
  editButton.textContent = 'Edit';
  editButton.classList.add('edit-button')
  btnSpan.appendChild(editButton)
  listItem.appendChild(btnSpan)

  editButton.addEventListener('click', function() {
    taskText.nodeValue = prompt("Edited text: ", `${taskText.nodeValue}`)
  })
}

