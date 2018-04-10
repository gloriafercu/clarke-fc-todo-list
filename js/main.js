'use strict';

var buttonAdd = document.querySelector('.button--add');
var inputNewTask = document.querySelector('.new-task__input');
var listTask = document.querySelector('.task-list');
var arrayTasks = [];
var reverse = arrayTasks.reverse();
console.log('ArrayTasks: ', arrayTasks);
console.log('reverse ', reverse);

function  addNewTask() {
	var objectTasks = {};
	objectTasks.name = inputNewTask.value;
	objectTasks.completed = false;
	arrayTasks.push(objectTasks);
	console.log('ObjectTasks', objectTasks);
	printTask();
}
buttonAdd.addEventListener('click', addNewTask);

function printTask() {
	for (var i = 0; i < reverse.length; i++) {
		listTask.innerHTML += '<li class="task-li"><input type="checkbox" class="checkbox" for="label-checkbox"/><label class="label-checkbox" id="label-checkbox">' + reverse[i].name + '</label></li>';
	}
}
