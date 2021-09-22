import "./style.css";
import moreImage from './more.svg';

let listWrapper = document.getElementById('list-wrapper');

const todos = [{
    description: "Do OnePunch Man workout",
    isDone: false,
    index: 1,
  },
  {
    description: "Practice guitar",
    isDone: false,
    index: 2,
  },
  {
    description: "Walk the dog",
    isDone: false,
    index: 3,
  },
  {
    description: "Eat protein bar",
    isDone: false,
    index: 3,
  },
];

window.addEventListener("load", () => {
  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.classList.add("task-item");
    const itemContent = document.createElement("input");
    const checkBox = document.createElement("input");
    const ellipsisIcon = document.createElement("img");
    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("ct-wrapper");
    ellipsisIcon.classList.add("icon-cust");
    ellipsisIcon.setAttribute("width", "20");
    ellipsisIcon.setAttribute("height", "20");
    checkBox.setAttribute('type', 'checkbox');
    ellipsisIcon.setAttribute('src', `${moreImage}`);

    itemContent.classList.add("task-input");
    itemContent.disabled = true;

    itemContent.classList.add("p-todo-desc");
    itemContent.value = todo.description;
    contentWrapper.appendChild(checkBox);
    contentWrapper.appendChild(itemContent);
    listItem.appendChild(contentWrapper);
    listItem.appendChild(ellipsisIcon);
    listWrapper.append(listItem);
  });
});