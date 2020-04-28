let list = document.querySelector('.interestsList');
let items = list.children;
let newItemForm = document.querySelector('.addInterest');
let newItemText = document.querySelector('.newItemText');
let interestTemplate = document.querySelector('#interestTemplate').content;
let newItemTemplate = interestTemplate.querySelector('.interestsItem');
let emptyInterestMessage = document.querySelector('.emptyNewInterestItem');

let toggleEmptyMessage = function() {
	emptyInterestMessage.classList.add('active');
	let closeBtn = emptyInterestMessage.querySelector('.closeMessage');
	closeBtn.addEventListener('click', function(event) {
		event.preventDefault();
		emptyInterestMessage.classList.remove('active');
	});
};

newItemForm.addEventListener('click', function() {
	if (newItemText.value !== '') {
		let interest = newItemTemplate.cloneNode(true);
		interest.textContent = newItemText.value;
		deleteItem(interest);
		list.prepend(interest);
		emptyInterestMessage.classList.remove('active');
		newItemText.value = '';
	} else {
		toggleEmptyMessage();
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