//Add new element to To-do list
let submitButton = document.getElementsByClassName("submitButton")[0];
submitButton.addEventListener("click", (event)=>{

	event.preventDefault();
	let newTodo = document.getElementsByClassName("newTodo")[0];

	if(newTodo){
		let newTodoDiv = document.createElement("div");
		
		let input = document.createElement("input");
		input.setAttribute("type", "checkbox");

		let label = document.createElement("label");
		label.textContent = newTodo.value;

		newTodoDiv.appendChild(input);
		newTodoDiv.appendChild(label);
		
		document.getElementById("listOfTodos").appendChild(newTodoDiv);
	}
	newTodo.value = "";
});

//Clear all elements on to-do list
let clearButton = document.getElementsByClassName("clearButton")[0];
clearButton.addEventListener("click", (event) => {

	let list  = document.getElementsByTagName("input");

	for (let element of list) {
		element.checked = false;
	}
});

//Mark all elements on to-do list
let markAllButton = document.getElementsByClassName("markAllButton")[0];
markAllButton.addEventListener("click", (event) => {

	let list  = document.getElementsByTagName("input");

	for (let element of list) {
		element.checked = true;
	}
});

//Delete all elements from to-do list
let deleteButton = document.getElementsByClassName("deleteButton")[0];
deleteButton.addEventListener("click", (event) => {

	let list  = document.getElementById("listOfTodos");
	
	while(list.firstChild){
		list.removeChild(list.firstChild);
	}
});

