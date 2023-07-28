//your code here

function startDragging(event) {
	event.dataTransfer.setData("text" , event.target.id);
}

function allowDrop(event) {
	event.preventDefault();
}


function dropped(event) {
	// console.log(event.target);
	// The Current container
	const temp_id = event.target.id;
	const innerText1 = event.target.innerText;
	//The replacing container 
	const data_id = event.dataTransfer.getData("text");
	const container = document.getElementById(data_id);
	const innerText2 = container.innerText;

	//Swapping the container according to their id and innerText
	container.id = temp_id;
	container.innerText = innerText1;
	event.target.id = data_id;
	event.target.innerText = innerText2;
	
}