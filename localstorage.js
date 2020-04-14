let userName = document.querySelector('.head');
if (localStorage.getItem('user') === null) {
	userName.value = 'Виталя Гора';
} else {
	userName.value = localStorage.getItem('user');
}

let userCity = document.querySelector('.city');
if (localStorage.getItem('city') === null) {
	userCity.value = 'г. Нижние Шахты';
} else {
	userCity.value = localStorage.getItem('city');
}

let userPhone = document.querySelector('.tel');
if (localStorage.getItem('phone') === null) {
	userPhone.value = '+7 (440) 554-32-12';
} else {
	userPhone.value = localStorage.getItem('phone');
}

let userEmail = document.querySelector('.email');
if (localStorage.getItem('email') === null) {
	userEmail.value = 'vitalya@gora.ru';
} else {
	userEmail.value = localStorage.getItem('email');
}

function fun1() {
	localStorage.setItem('user', userName.value);
}

function fun2() {
	localStorage.setItem('city', userCity.value);
}

function fun3() {
	localStorage.setItem('phone', userPhone.value);
}

function fun4() {
	localStorage.setItem('email', userEmail.value);
}

