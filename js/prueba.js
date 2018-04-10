'use strict';

var inputNewTask = document.querySelector('.new-task__input');
var buttonAdd = document.querySelector('.button--add');
var listTask = document.querySelector('.task-list');
var arrayTasks = [];
var reverseTasks = arrayTasks.reverse();
console.log(reverseTasks);



function addNewTask() {
	listTask.innerHTML += '<li class="task-li"><input type="checkbox" class="checkbox" for="label-checkbox"/><label class="label-checkbox" id="label-checkbox">' + inputNewTask.value + '</label></li>';
	createTasks();
}
buttonAdd.addEventListener('click', addNewTask);

function createTasks() {
	var objectTasks = {};
	objectTasks.name = inputNewTask.value;
	objectTasks.completed = false;
	arrayTasks.push(objectTasks);


	console.log('ObjectTasks', objectTasks);
	console.log('ArrayTasks: ', arrayTasks);

}


var objeto = [
	{
		name: 'gloria',
		apellido: 'fernandez'
	},
	{
		name: 'carlos',
		apellido: 'ordoñez'

	},
	{
		name: 'alberto',
		apellido: 'chicote'

	}
];
console.log(objeto.reverse());
