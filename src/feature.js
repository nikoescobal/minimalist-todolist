/* eslint-disable import/prefer-default-export */
export const checkIfDone = (done) => !done;

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
export const addTask = (description) => {
  const index = tasks && tasks.length > 0 ? tasks.length + 1 : 1;
  const task = {
    description,
    index,
    completed: false
  };
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  window.location.reload();
};

export const deleteTask = (index) => {
  const remainingtasks = tasks.filter((task) => task.index !== index);
  if (remainingtasks.length > 0) {
    remainingtasks.forEach((task, index) => {
      task.index = index + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(remainingtasks));
    window.location.reload();
  } else {
    localStorage.setItem('tasks', JSON.stringify(remainingtasks));
    window.location.reload();
  }
};

export const clearAllComplele = () => {
  const remainingtasks = tasks.filter((task) => !task.completed);
  if (remainingtasks.length > 0) {
    remainingtasks.forEach((task, index) => {
      task.index = index + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(remainingtasks));
    window.location.reload();
  } else {
    localStorage.setItem('tasks', JSON.stringify(remainingtasks));
    window.location.reload();
  }
};

export const updateDescription = (index, description) => {
  const task = tasks.filter((task) => task.index === index)[0];
  task.description = description;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  window.location.reload();
};

export const refreshPage = () => window.location.reload();