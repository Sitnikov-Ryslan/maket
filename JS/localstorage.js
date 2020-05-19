let userName = document.querySelector('.user__name');
if (localStorage.getItem('userName') === null) {
	userName.value = 'Виталя Гора';
} else {
	userName.value = localStorage.getItem('userName');
}

let userCity = document.querySelector('.user__city');
if (localStorage.getItem('userCity') === null) {
	userCity.value = 'г. Нижние Шахты';
} else {
	userCity.value = localStorage.getItem('userCity');
}

let userPhone = document.querySelector('.column-right__phone');
if (localStorage.getItem('phone') === null) {
	userPhone.value = '+7 (440) 554-32-12';
} else {
	userPhone.value = localStorage.getItem('phone');
}

let userEmail = document.querySelector('.mail__input');
if (localStorage.getItem('email') === null) {
	userEmail.value = 'vitalya@gora.ru';
} else {
	userEmail.value = localStorage.getItem('email');
}

let addLocalStorage = function(id, input) {
	input.addEventListener("change", function() {
    localStorage.setItem(id, input.value);
    });
};

let ids = ["userName", "userCity", "phone", "email"];
for (let id of ids) {
	let input = document.getElementById(id);
	addLocalStorage(id, input);
};