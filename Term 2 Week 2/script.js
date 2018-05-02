// function animate(){
// var circle = document.getElementById('circle');
// 	var opacity=parseFloat(circle.style.opacity);
// 	if(opacity < 1) {
// 		circle.style.opacity = opacity + 0.1;

// 	}
// }



// function clickFunction(){
// 	setInterval(animate,1000);
	
	
       
// }


// function mainFunction(){
// 		var circle = document.getElementById('circle');
// 		circle.addEventListener('click',clickFunction);
// 		circle.style.opacity='0.1';
// }
// document.addEventListener('DOMContentLoaded',mainFunction);
function moveLeft(){
	var circle = document.getElementById('circle');
	var currentLeft = parseInt(circle.offsetLeft);
	circle.style.left = currentLeft - 1 + 'px';

}
function moveRight(){
	var circle = document.getElementById('circle');
	var currentLeft = parseInt(circle.offsetLeft);
	circle.style.left = currentLeft + 1 + 'px';

}
function moveUp(){
	var circle = document.getElementById('circle');
	var currentLeft = parseInt(circle.offsetTop);
	circle.style.top = currentLeft - 1 + 'px';

}
function moveDown(){
	var circle = document.getElementById('circle');
	var currentLeft = parseInt(circle.offsetTop);
	circle.style.top = currentLeft + 1 + 'px';

}
var interval;
function moveCircle(event){
	clearInterval(interval);
	if (event.keyCode ==37 ) {
		interval = setInterval (moveLeft, 10);
	}
	if (event.keyCode ==39 ) {
		interval = setInterval (moveRight, 10);
	}
	if (event.keyCode ==38 ) {
	interval = setInterval (moveUp, 10);
	}
	if (event.keyCode ==40 ) {
		interval = setInterval (moveDown, 10);
	}
}


function mainFunction(){
		var circle = document.getElementById('circle');
 		document.addEventListener('keydown',moveCircle);
 	}
 	document.addEventListener('DOMContentLoaded',mainFunction);