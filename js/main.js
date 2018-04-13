'use strict';

var buttonAdd = document.querySelector('.button--add');
var buttonPlus = document.querySelector('.button--plus');
var arrayTasks = [];
var background = document.querySelector('.background');

printLocalStorage(); // Al cargar la página se imprimen las tareas que estén almacenadas previamente en el localStorage.

/* Función para obtener la fecha actual al cargar la página */

function printDate() {
	var months = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
	var weekdays = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
	var date = new Date();

	var numberDate = document.querySelector('.number-date');
	var dateWeek = document.querySelector('.date-week');
	var monthAndYear = document.querySelector('.month-year');


	numberDate.innerHTML = date.getDate();
	dateWeek.innerHTML = weekdays[date.getDay()];
	monthAndYear.innerHTML = months[date.getMonth()] + ', ' + date.getFullYear();
}
printDate();


/* Botón(+) despliega una modal que permite crear nueva tarea */

function addNewTask() {
	var enterTask = document.querySelector('.new-task');
	background.classList.toggle('hidden');
}
buttonPlus.addEventListener('click', addNewTask);


/* Mostrar/ocultar background */
window.addEventListener("click",function(e) {
   if (e.target == background) {
		 background.classList.add('hidden');
	 }
 });

window.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
		background.classList.add('hidden');
  }
});





/* Botón(añadir) incorpora las nuevas tareas al To-Do list y regresa al estado inicial con botón(+) */

function createNewTask() {
	var inputTask = document.querySelector('.new-task__input').value;
	var status = false;
	var task = {
		"name": inputTask,
		"completed": status
	};
	document.querySelector('.new-task__input').value = '';
	localStorageToDoList(task);
}
buttonAdd.addEventListener('click', function() {
	createNewTask();
	addNewTask();
});

/* Se almacenan los datos en el localStorage
		- La clave está en que localStorage solo nos permite guardar un 'string' 	(setItem), por lo que primero debemos convertir nuestro objeto a string con JSON.stringify().
		- A la hora de obtener los datos que se han guardado (getItem) en localStorage debemos hacer justo lo contrario con JSON.parse().
*/

	function localStorageToDoList(task) {
	if (localStorage.getItem('arrayTasks') == null) {
		arrayTasks = [];
		arrayTasks.push(task);
		localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
	} else {
		arrayTasks = JSON.parse(localStorage.getItem('arrayTasks'));
		arrayTasks.push(task);
		localStorage.setItem('arrayTasks', JSON.stringify(arrayTasks));
	}
	console.log('arrayTasks', arrayTasks);
	console.log('lastTask ', arrayTasks[arrayTasks.length - 1].name);
	printLocalStorage();
}

/* Se imprimen los datos almacenados en localStorage (inclusive al cargar la página por primera vez en línea 6) */

function printLocalStorage() {
	var taskLocStorage = JSON.parse(localStorage.getItem('arrayTasks'));
	if (taskLocStorage != null) {
		var ul = document.querySelector('.todo-list');
		var ulCompleted = document.querySelector('.done');
		var listCompleted = '';
		var listUncompleted ='';
		taskLocStorage.reverse();
			for (var i = 0; i < taskLocStorage.length; i++) {
				if (taskLocStorage[i].completed) {
					listCompleted += '<li class="task-li strike"><input type="checkbox" checked="checked" class="checkbox" name="status" id="checkbox' + i + ' "/><label class="label-checkbox" for="checkbox' + i + '">' + taskLocStorage[i].name + '</label></li>';

				}else{
					listUncompleted += '<li class="task-li "><input type="checkbox" class="checkbox" name="status" id="checkbox' + i + '"/><label class="label-checkbox" for="checkbox' + i + '">' + taskLocStorage[i].name + '</label></li>';
				}
			}

		ul.innerHTML = listUncompleted;
		ulCompleted.innerHTML = listCompleted;


		var checkboxes = document.querySelectorAll('.checkbox');

		console.log('checkboxes',checkboxes);
		for (var i = 0; i < checkboxes.length; i++) {
			checkboxes[i].addEventListener('click', completeTasks);
		}
	}
}
/* Recolocar tareas*/




/* Completar tareas terminadas */

function completeTasks(event) {
	var currentTask = event.currentTarget;
	console.log('currentTask: ',currentTask );

	currentTask.parentNode.classList.toggle('strike');

  var labelTask = currentTask.nextSibling.innerHTML;
	var taskLocStorage = JSON.parse(localStorage.getItem('arrayTasks'));


	for (var i = 0; i < taskLocStorage.length; i++) {
    if (labelTask === taskLocStorage[i].name) {
      taskLocStorage[i].completed = !taskLocStorage[i].completed;
    }
		printLocalStorage();
  }
	localStorage.setItem('arrayTasks', JSON.stringify(taskLocStorage));
	console.log('labelTask', labelTask);
}
