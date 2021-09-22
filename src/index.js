import './style.css';

let tasksContainer = document.getElementById('tasks-container');
tasksContainer.innerHTML =
  `
<li>Do OnePunch Man workout</li>
<li>Read a book</li>
<li>Eat protein bar</li>
`

let taskItems = document.createElement('ul');

// let tasks = {
//   description: ,
//   completed: ,
//   index:
// };