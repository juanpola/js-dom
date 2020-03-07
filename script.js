
// Created variables for the users input, button and the UL
var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");


/// Here I created a function to get the length of the users input.
function inputLength() {
	return input.value.length;
}

/// Here I create a function to add the users input to the UL 
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = " ";
}
/// This function listens for a user click and checks to see if 
/// the users input is greater than 0 and if so it will create the element
function addListAfterClick() {
	if (inputLength() > 0 ){
	createListElement();
}
}
/// creatin a function for keypress same as above.

function addlistAfterKeypress(event) {
	if (inputLength > 0 && event.keyCode === 13 ){
	createListElement();
}
}

/// below, are the event listers for both click and key press

button.addEventListener("click", addListAfterClick)

button.addEventListener("keypress", addlistAfterKeypress )
