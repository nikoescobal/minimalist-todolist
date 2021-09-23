import "./style.css";
import deleteIcon from "./delete.svg";

import {
  addTask,
  deleteTask,
  clearAllDone,
  checkIfDone,
  updateDescription,
  refreshPage,
} from "./feature.js";

const taskWrapper = document.getElementById("task-wrapper");

const taskInput = document.getElementById("tasks-input");

taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTask(e.target.value);
  }
});

window.addEventListener("load", () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    const taskContent = document.createElement("input");
    const checkBox = document.createElement("input");
    const trashIcon = document.createElement("img");
    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("content-wrapper");
    trashIcon.classList.add("custom-icon");
    trashIcon.setAttribute("src", `${deleteIcon}`);
    trashIcon.setAttribute("width", "20");
    trashIcon.setAttribute("height", "20");
    checkBox.setAttribute("type", "checkbox");
    checkBox.checked = task.done;
    taskContent.value = task.description;
    taskContent.classList.add('task-input');
    taskItem.addEventListener("click", () => {
      console.log("Hello");
      taskContent.disabled = false;
    });
    taskContent.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        updateDescription(task.index, e.target.value);
      }
    });
    trashIcon.addEventListener('click', () => {
      deleteTask(task.index);
    });
    taskContent.style.textDecoration = task.done ? "line-through" : "none";
    checkBox.addEventListener("change", () => {
      const done = checkIfDone(task.done);
      task.done = done;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      window.location.reload();
    });
    taskContent.classList.add("p-task-desc");
    contentWrapper.appendChild(checkBox);
    contentWrapper.appendChild(taskContent);
    taskItem.appendChild(contentWrapper);
    taskItem.appendChild(trashIcon);
    taskWrapper.append(taskItem);
  });
});

const taskItemBotom = document.createElement('li');
taskItemBotom.classList.add(...['task-item', 'task-bottom']);
const paragraphBottom = document.createElement('p');
paragraphBottom.classList.add('p-bottom');
paragraphBottom.innerHTML = 'Clear all finished tasks';
taskItemBotom.appendChild(paragraphBottom);

paragraphBottom.addEventListener('click', clearAllDone);

setTimeout(() => {
  taskWrapper.appendChild(taskItemBotom);
}, 1000);