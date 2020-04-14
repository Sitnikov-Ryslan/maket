let list = document.querySelector('.interestsList');
let items = list.children;
let newItemForm = document.querySelector('.addInterest');
let newItemText = document.querySelector('.newItemText');
let interestTemplate = document.querySelector('#interestTemplate').content;
let newItemTemplate = interestTemplate.querySelector('.int');

newItemForm.addEventListener('click', function() {
	if (newItemText.value !== '') {
		let interest = newItemTemplate.cloneNode(true);
		interest.textContent = newItemText.value;
		deleteItem(interest);
		list.prepend(interest);
		newItemText.value = '';
	} else {
		alert('Заполните поле с вашим интересом');
	}

});

let deleteItem = function(item) {
	item.addEventListener('click', function() {
		item.remove();
	});
}

for (var i = 0; i < items.length; i++) {
	deleteItem(items[i]);	
}