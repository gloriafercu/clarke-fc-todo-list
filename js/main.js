'use strict';

const buttonAdd = document.querySelector('.button--add');
let arrayTasks = [];
pintarLocalStorage();

const addNewTask = () => {
	const inputTask = document.querySelector('.new-task__input').value;
	//const status = document.querySelector('input[name="status"]:checked').value;
		//const status = document.querySelector('input[name="status"]').value;
	const status = false;
	const task = {
		"name": inputTask,
		"completed": status
	};
	document.querySelector('.new-task__input').value = '';

	arrayTasks.push(task);




	//
	// console.log('arrayTasks: ', arrayTasks);
	// console.log('lastTask: ', arrayTasks[arrayTasks.length - 1].name);


	localStorageToDoList(task);
}

buttonAdd.addEventListener('click', addNewTask);


const localStorageToDoList = (task) => {

	if (localStorage.getItem('arrayTasks') == null) {
		arrayTasks = [];
		arrayTasks.push(task);

		localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
		// const todolist = document.querySelector('.todo-list');
		// todolist.innerHTML += `<li>${arrayTasks[0].name}</li>`;

	} else {
		arrayTasks = JSON.parse(localStorage.getItem('arrayTasks'));
		arrayTasks.push(task);
		localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
		// const todolist = document.querySelector('.todo-list');
		// todolist.innerHTML += `<li>${arrayTasks[0].name}</li>`;
	}

	console.log('arrayTasks', arrayTasks);
	console.log('lastTask ', arrayTasks[arrayTasks.length - 1].name);

	pintarLocalStorage();

}

function pintarLocalStorage(){


	let arrayReverse = JSON.parse(localStorage.getItem('arrayTasks'));

	if (arrayReverse != null){
		// arrayTasks =

		// console.log(arrayTasks);
		const todolist = document.querySelector('.todo-list');
		let listUl = "";

			arrayReverse.reverse();
			for (var i = 0; i < arrayReverse.length; i++) {
				listUl +=`<li>${arrayReverse[i].name}</li>`;
			}

		todolist.innerHTML = listUl;
	}




}


// localStorage.setItem('toDoList', JSON.stringify(arrayTasks));
// arrayTasks = JSON.parse(localStorage.getItem('toDoList'));




// 	if (localStorage.getItem('arrayTasks') == null) {
// 		arrayTasks = [];
// 		arrayTasks.push(task);
//
// 		localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
// arrayTasks.reverse();
//
// 	} else {
// 		arrayTasks = JSON.parse(localStorage.getItem('arrayTasks'));
// 		arrayTasks.push(task);

// 		localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
//arrayTasks.reverse();
// 		console.log('arrayTasks', arrayTasks);
// 	}
// }
// buttonAdd.addEventListener('click', addNewTask);






/*
La clave está en que localStorage solo nos permite guardar un 'string' (setItem), por lo que primero debemos convertir nuestro objeto a string con JSON.stringify().

A la hora de obtener los datos que se han guardado (getItem) en localStorage debemos hacer justo lo contrario con JSON.parse().
*/

// var buttonAdd = document.querySelector('.button--add');
// var inputNewTask = document.querySelector('.new-task__input');
// var ul = document.querySelector('.task-list');
// var arrayTasks = [];
//
// // Creo un array de objetos con las tareas y su estado (completada o no)
// function  addNewTask() {
// 	var objTasks = {};
// 	objTasks.name = inputNewTask.value;
// 	objTasks.completed = false;
// 	arrayTasks.push(objTasks);
// 	localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
// 	JSON.parse(localStorage.getItem('arrayTasks'));
// 	console.log('objTasks', objTasks);
// 	console.log('arrayTasks', arrayTasks);
// }
// buttonAdd.addEventListener('click', addNewTask);









// function printTask() {
// 	var ul = document.querySelector('.task-list');
// 	for (var i = 0; i < reverse.length; i++) {
// 		listHTML = '<li class="task-li"><input type="checkbox" class="checkbox" name="status" for="label-checkbox"/><label class="label-checkbox" id="label-checkbox">' + reverse[i].name + '</label></li>';
// 	}
// 	ul.innerHTML = listHTML;
// }
