const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let taskList = [];

Given('que estoy en la página de la lista de tareas', function () {
  taskList = [];
});

When('agrego una nueva tarea con el título {string}', function (title) {
  taskList.push({ title: title, completed: false });
});

Then('debería ver la tarea {string} en la lista', function (title) {
  const taskExists = taskList.some(task => task.title === title);
  assert(taskExists, `La tarea "${title}" no está en la lista.`);
});

Given('que tengo una tarea {string} en la lista', function (title) {
  taskList = [{ title: title, completed: false }];
});

When('marco la tarea {string} como completada', function (title) {
  const task = taskList.find(task => task.title === title);
  if (task) {
    task.completed = true;
  }
});

Then('la tarea {string} debería estar marcada como completada', function (title) {
  const task = taskList.find(task => task.title === title);
  assert(task && task.completed, `La tarea "${title}" no está marcada como completada.`);
});
