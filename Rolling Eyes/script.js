const eyeBall = document.getElementsByClassName('eye-ball');
console.log(eyeBall);
document.onmousemove = () => {
	var x = (event.clientX * 100) / window.innerWidth + '%';
	var y = (event.clientY * 100) / window.innerHeight + '%';
	for (var i = 0; i < 2; i++) {
		eyeBall[i].style.left = x;
		eyeBall[i].style.top = y;
		eyeBall[i].style.transform = 'translate(-' + x + ',' - +y + ')';
	}
};
/*
event.clientX gets the Horizontal coordinate of the mouse
event.clientY gets the Vertical coordinate of the mouse
window.innerWidth gets the total browser width
window.innerHeight gets the total browser height
 */
