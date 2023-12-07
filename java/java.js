const houres = document.querySelector('#houres'),
	minut = document.querySelector('#minut'),
	secund = document.querySelector('#secund');
function timer() {
	const data = new Date();
	const hourDate = data.getHours();
	const minDate = data.getMinutes();
	const secDate = data.getSeconds();
	houres.textContent = hourDate;
	minut.textContent = minDate;
	secund.textContent = secDate;
}
timer();
setInterval(() => {
	timer();
}, 1000);
