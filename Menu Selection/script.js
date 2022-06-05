const select = document.querySelector('.select');
const optionList = document.querySelector('.option-list');
const options = document.querySelectorAll('.option');

select.addEventListener('click', () => {
	optionList.classList.toggle('active');
	select.querySelector('.fa-angle-down').classList.toggle('fa-angle-up');
});
console.log(options);
options.forEach((option) => {
	option.addEventListener('click', () => {
		options.forEach((option) => {
			option.classList.remove('selected');
		});
		select.querySelector('span').innerHTML = option.innerHTML;
		option.classList.add('selected');
		optionList.classList.toggle('active');
		select.querySelector('.fa-angle-down').classList.toggle('fa-angle-up');
	});
});
