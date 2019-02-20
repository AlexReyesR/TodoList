let submitButton = document.getElementsByClassName("submitButton")[0];
submitButton.addEventListener("click", (event) => {
	event.preventDefault();
	let newTodo = document.getElementsByClassName("newTodo")[0];

	if(newTodo) {
		let listOfTodos = document.getElementById("listOfTodos");
		let currentHTML = listOfTodos.innerHTML;
		listOfTodos.innerHTML = 	`${currentHTML}
									<div>
										<input type="checkbox">
										<label>
											${newTodo.value}
										</label>										
									</div>`;
	}
	newTodo.value = "";
});

let markAllButton = document.getElementsByClassName("markAllButton")[0];
markAllButton.addEventListener("click", (event) => {

	let list  = document.getElementsByTagName("input");

	for (let element of list) {
		element.checked = true;
	}
});

let clearButton = document.getElementsByClassName("clearButton")[0];
clearButton.addEventListener("click", (event) => {

	let list  = document.getElementsByTagName("input");

	for (let element of list) {
		element.checked = false;
	}
});

let deleteButton = document.getElementsByClassName("deleteButton")[0];
deleteButton.addEventListener("click", (event) => {
	let listOfTodos = document.getElementById("listOfTodos");
	listOfTodos.innerHTML = "";
});
