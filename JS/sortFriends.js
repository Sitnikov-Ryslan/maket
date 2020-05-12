const initialFriends = document.querySelectorAll('.friend');

let friendsList = document.querySelectorAll('.friend');
let parent = document.querySelector('.friends');
let btns = document.querySelectorAll('.btn');
let btnOriginal = document.querySelector('.btn--original');
let btnOnline = document.querySelector('.btn--online');

btnOriginal.addEventListener("click", function(event) {
  event.preventDefault();
  
});


btnOnline.addEventListener("click", function(event) {
  event.preventDefault();
	for (let i = 0; i <= friendsList.length - 1; i++) {
  		let friend = friendsList[i];
  		let online = friend.querySelector('.online');
  		if (online !== null) {
  			parent.prepend(friend);
        btns.classList.remove('checked');
        btnOnline.classList.add('checked');
  		};
  	};
  	// let newFriendsList = parent.querySelectorAll('.friend');
	let sort = function(aRestore) { // !!! - параметр
	var nodeList = parent.querySelectorAll('.friend');
	var itemsArray = [];
	var listParent = nodeList[0].parentNode;

	for (var i = 0; i < nodeList.length; i++) {
    // !!! - здесь
	    if (!nodeList[i].dataset.originalorder)
			nodeList[i].dataset.originalorder = i + 1;
		    itemsArray.push(listParent.removeChild(nodeList[i]));
	}

	itemsArray.sort(function(nodeA, nodeB) {
    // !!! - и здесь
    if (aRestore) {
		return nodeA.dataset.originalorder - nodeB.dataset.originalorder;
    }

		let nameA = nodeA.querySelector('.friendName').textContent.toLowerCase();
		let nameB = nodeB.querySelector('.friendName').textContent.toLowerCase();
	    if (nameA < nameB) return -1;
	    if (nameA > nameB) return 1;
	    return 0;
		}).forEach(function(node) {
		    listParent.appendChild(node)
		});
};
  	// let friendsListArray = Array.prototype.slice.call(newFriendsList);
  	// let onlineFriendsList = [];
  	// 	for (let item of newFriendsList) {
  	// 		if (item.querySelector('.online') !== null) {
  	// 			onlineFriendsList.push(item);
  	// 		}
  	// 	}
  	// 	// Сортировка массива
  	// 	onlineFriendsList.sort(function(a, b) {
  	// 		let nameA = a.querySelector('.friendName').textContent.toLowerCase();
  	// 		let nameB = b.querySelector('.friendName').textContent.toLowerCase();
  	// 		console.log('A = ' + nameA);
  	// 		console.log('B = ' + nameB);
  	// 		if (nameA < nameB) return -1
  	// 			if (nameA > nameB) return 1
  	// 				return 0
  	// 	});
});