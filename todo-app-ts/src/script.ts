interface Task {
  id: number;
  text: string;
}

const todoList = document.getElementById("todo-list") as HTMLUListElement;

const todoForm = document.getElementById("todo-form") as HTMLFormElement;

const todoInput = document.getElementById("todo-input") as HTMLInputElement;

todoForm.addEventListener("submit", function (event: Event) {
  event.preventDefault();

  const newTask: string = todoInput.value.trim();

  if (newTask === "") {
    alert("Please enter a task");
    return;
  }

  todoInput.value = "";

  addTask(newTask);
});

function addTask(task: string): void {
  //Creating a task
  const listItem = document.createElement("li");
  const taskText = document.createElement("span");
  const btnSpan = document.createElement("span");

  taskText.textContent = task;
  listItem.appendChild(taskText);

  // Deleting a task
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", function () {
    todoList.removeChild(listItem);
  });

  btnSpan.appendChild(deleteButton);
  listItem.appendChild(btnSpan);

  // Editing task
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit-button");

  editButton.addEventListener("click", function () {
    const newText = prompt("Edited text: ", taskText.textContent ?? "");

    if (newText !== null) {
      taskText.textContent = newText;
    }
  });

  btnSpan.appendChild(editButton);
  listItem.appendChild(btnSpan);

  todoList.appendChild(listItem);
}
