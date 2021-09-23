import './style.css';
import moreImage from './more.svg';
import {
  checkIfDone,
} from './feature.js';

const taskWrapper = document.getElementById('task-wrapper');

const todos = [{
    description: 'Do OnePunch Man workout',
    isDone: false,
    index: 1,
  },
  {
    description: 'Practice guitar',
    isDone: false,
    index: 2,
  },
  {
    description: 'Walk the dog',
    isDone: false,
    index: 3,
  },
  {
    description: 'Eat protein bar',
    isDone: false,
    index: 3,
  },
];

window.addEventListener('load', () => {
  const todoList = JSON.parse(localStorage.getItem('todos'));
  if (todoList && todoList.length > 0) {
    todoList.forEach((todo) => {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task-item');
      const taskContent = document.createElement('p');
      const checkBox = document.createElement('input');
      const ellipsisIcon = document.createElement('img');
      const contentWrapper = document.createElement('div');
      contentWrapper.classList.add('content-wrapper');
      ellipsisIcon.classList.add('custom-icon');
      ellipsisIcon.setAttribute('src', `${moreImage}`);
      ellipsisIcon.setAttribute('width', '6');
      ellipsisIcon.setAttribute('height', '10');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.checked = todo.isDone;
      taskContent.style.textDecoration = todo.isDone ? 'line-through' : 'none';
      // checkBox.setAttribute('checked', ``);
      checkBox.addEventListener('change', () => {
        const isDone = checkIfDone(todo.isDone);
        todo.isDone = isDone;
        localStorage.setItem('todos', JSON.stringify(todoList));
        window.location.reload();
      });
      taskContent.classList.add('p-todo-desc');
      taskContent.innerHTML = todo.description;
      contentWrapper.appendChild(checkBox);
      contentWrapper.appendChild(taskContent);
      taskItem.appendChild(contentWrapper);
      taskItem.appendChild(ellipsisIcon);
      taskWrapper.append(taskItem);
    });
  } else {
    todos.forEach((todo) => {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task-item');
      const taskContent = document.createElement('p');
      const checkBox = document.createElement('input');
      const ellipsisIcon = document.createElement('img');
      const contentWrapper = document.createElement('div');
      contentWrapper.classList.add('content-wrapper');
      ellipsisIcon.classList.add('custom-icon');
      ellipsisIcon.setAttribute('src', `${moreImage}`);
      ellipsisIcon.setAttribute('width', '6');
      ellipsisIcon.setAttribute('height', '10');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.checked = todo.isDone;
      checkBox.addEventListener('change', () => {
        const isDone = checkIfDone(todo.isDone);
        todo.isDone = isDone;
        localStorage.setItem('todos', JSON.stringify(todos));
        window.location.reload();
      });
      taskContent.classList.add('p-todo-desc');
      taskContent.innerHTML = todo.description;
      contentWrapper.appendChild(checkBox);
      contentWrapper.appendChild(taskContent);
      taskItem.appendChild(contentWrapper);
      taskItem.appendChild(ellipsisIcon);
      taskWrapper.append(taskItem);
    });
  }
});