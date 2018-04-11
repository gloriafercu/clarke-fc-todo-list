'use strict';

var buttonAdd = document.querySelector('.button--add');
var inputNewTask = document.querySelector('.new-task__input');
var ul = document.querySelector('.task-list');
var arrayTasks = [];

// Creo un array de objetos con las tareas y su estado (completada o no)
function  addNewTask() {
	var objTasks = {};
	objTasks.name = inputNewTask.value;
	objTasks.completed = false;
	arrayTasks.push(objTasks);
	localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
	JSON.parse(localStorage.getItem('arrayTasks'));
	console.log('objTasks', objTasks);
	console.log('arrayTasks', arrayTasks);
}
buttonAdd.addEventListener('click', addNewTask);


/*
La clave está en que localStorage solo nos permite guardar un 'string' (setItem), por lo que primero debemos convertir nuestro objeto a string con JSON.stringify().

A la hora de obtener los datos que se han guardado (getItem) en localStorage debemos hacer justo lo contrario con JSON.parse().
*/




// function printTask() {
// 	var ul = document.querySelector('.task-list');
// 	for (var i = 0; i < reverse.length; i++) {
// 		listHTML = '<li class="task-li"><input type="checkbox" class="checkbox" for="label-checkbox"/><label class="label-checkbox" id="label-checkbox">' + reverse[i].name + '</label></li>';
// 	}
// 	ul.innerHTML = listHTML;
// }
