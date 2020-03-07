
var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = " ";
}

function addListAfterClick() {
	if (inputLength() > 0 ){
	createListElement();
}
}

function addlistAfterKeypress(event) {
	if (inputLength > 0 && event.keyCode === 13 ){
	createListElement();
}
}

button.addEventListener("click", addListAfterClick)

button.addEventListener("keypress", addlistAfterKeypress )
