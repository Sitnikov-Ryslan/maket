let list = document.querySelector('.interests-list');
let items = list.children;
let newItemForm = document.querySelector('.user__add-interest');
let newItemText = document.querySelector('.user__new-item-text');
let interestTemplate = document.querySelector('#interestTemplate').content;
let newItemTemplate = interestTemplate.querySelector('.interests-list__item');
let emptyInterestMessage = document.querySelector('.empty-new-interest-item');

let toggleEmptyMessage = function() {
	emptyInterestMessage.classList.add('active');
	let closeBtn = emptyInterestMessage.querySelector('.close-message');
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