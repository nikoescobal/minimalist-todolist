/* eslint-disable import/prefer-default-export */
export const checkIfDone = (done) => !done;

export const setStorageAndReloadPage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  window.location.reload();
}

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
export const addTask = (description) => {
  const index = tasks && tasks.length > 0 ? tasks.length + 1 : 1;
  const task = {
    description,
    index,
    done: false,
  };
  tasks.push(task);
  setStorageAndReloadPage(tasks);
};

export const deleteTask = (index) => {
  const remainingtasks = tasks.filter((task) => task.index !== index);
  if (remainingtasks.length > 0) {
    remainingtasks.forEach((task, index) => {
      task.index = index + 1;
    });
    setStorageAndReloadPage(remainingtasks);
  } else {
    setStorageAndReloadPage(remainingtasks);
  }
};

export const clearAllDone = () => {
  const remainingtasks = tasks.filter((task) => !task.done);
  if (remainingtasks.length > 0) {
    remainingtasks.forEach((task, index) => {
      task.index = index + 1;
    });
    setStorageAndReloadPage(remainingtasks);
  } else {
    setStorageAndReloadPage(remainingtasks);
  }
};

export const updateDescription = (index, description) => {
  const task = tasks.filter((task) => task.index === index)[0];
  task.description = description;
  setStorageAndReloadPage(remainingtasks);
};

export const refreshPage = () => window.location.reload();