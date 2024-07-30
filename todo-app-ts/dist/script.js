"use strict";
const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newTask = todoInput.value.trim();
    if (newTask === "") {
        alert("Please enter a task");
        return;
    }
    todoInput.value = "";
    addTask(newTask);
});
function addTask(task) {
    const listItem = document.createElement("li");
    const taskText = document.createElement("span");
    const btnSpan = document.createElement("span");
    taskText.textContent = task;
    listItem.appendChild(taskText);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function () {
        todoList.removeChild(listItem);
    });
    btnSpan.appendChild(deleteButton);
    listItem.appendChild(btnSpan);
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", function () {
        var _a;
        const newText = prompt("Edited text: ", (_a = taskText.textContent) !== null && _a !== void 0 ? _a : "");
        if (newText !== null) {
            taskText.textContent = newText;
        }
    });
    btnSpan.appendChild(editButton);
    listItem.appendChild(btnSpan);
    todoList.appendChild(listItem);
}
//# sourceMappingURL=script.js.map