import "./style.css";
import moreImage from "./more.svg";
import {
  addTodo,
  deleteTodo,
  clearAllComplele,
  checkIfDone,
  updateDescription,
  refreshPage,
} from "./feature.js";

const taskWrapper = document.getElementById("task-wrapper");

const taskInput = document.getElementById("todo-input");

taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTodo(e.target.value);
  }
});

window.addEventListener("load", () => {
  const todoList = JSON.parse(localStorage.getItem("todos"));
  todoList.forEach((todo) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    const taskContent = document.createElement("input");
    const checkBox = document.createElement("input");
    const ellipsisIcon = document.createElement("img");
    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("content-wrapper");
    ellipsisIcon.classList.add("custom-icon");
    ellipsisIcon.setAttribute("src", `${moreImage}`);
    ellipsisIcon.setAttribute("width", "6");
    ellipsisIcon.setAttribute("height", "10");
    checkBox.setAttribute("type", "checkbox");
    checkBox.checked = todo.isDone;
    taskContent.value = todo.description;
    taskContent.classList.add('task-input');
    taskItem.addEventListener("click", () => {
      console.log("Hello");
      taskContent.disabled = false;
    });
    taskContent.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        updateDescription(todo.index, e.target.value);
      }
    });
    taskContent.style.textDecoration = todo.isDone ? "line-through" : "none";
    checkBox.addEventListener("change", () => {
      const isDone = checkIfDone(todo.isDone);
      todo.isDone = isDone;
      localStorage.setItem("todos", JSON.stringify(todoList));
      window.location.reload();
    });
    taskContent.classList.add("p-todo-desc");
    contentWrapper.appendChild(checkBox);
    contentWrapper.appendChild(taskContent);
    taskItem.appendChild(contentWrapper);
    taskItem.appendChild(ellipsisIcon);
    taskWrapper.append(taskItem);
  });
});