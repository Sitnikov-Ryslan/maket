const initialFriends = document.querySelectorAll('.friends__item');
const initialFriendsArray = Array.prototype.slice.call(initialFriends);

let friendsList = document.querySelectorAll('.friends__item');
let parent = document.querySelector('.friends');
let btns = document.querySelectorAll('.sorting-panel__btn');
let btnOriginal = document.querySelector('.btn--original');
let btnOnline = document.querySelector('.btn--online');
let btnAbc = document.querySelector('.btn--abc');

/*Сортировка к начальному(оригинальному) состоянию*/

btnOriginal.addEventListener("click", function(event) {
  event.preventDefault();
  for (let btn of btns) {
    btn.classList.remove('checked');
  }
  btnOriginal.classList.add('checked');
  
  let presentFriends = document.querySelectorAll('.friends__item');
  let presentFriendsArray = [];
  let friendsParent = presentFriends[0].parentNode;
  for (let i = 0; i < presentFriends.length; i++) {    
    presentFriendsArray.push(friendsParent.removeChild(presentFriends[i]));
  }
  presentFriendsArray.sort((nodeA,nodeB) => 
      initialFriendsArray.indexOf(nodeA) - initialFriendsArray.indexOf(nodeB)
  )
  .forEach(function(node) {
      friendsParent.appendChild(node)
    });
});

/*Сортировка друзей, которые онлайн*/

btnOnline.addEventListener("click", function(event) {
  event.preventDefault();
  for (let btn of btns) {
    btn.classList.remove('checked');
  };
  btnOnline.classList.add('checked');

	for (let i = 0; i <= friendsList.length - 1; i++) {
  		let friend = friendsList[i];
  		let online = friend.querySelector('.friend-info__online');
  		if (online !== null) {
  			parent.prepend(friend);
      };
  };
});

/*Сортировка по алфавиту*/

btnAbc.addEventListener("click", function(event) {
  event.preventDefault();
  for (let btn of btns) {
    btn.classList.remove('checked');
  };
  btnAbc.classList.add('checked');
	
  let nodeList = document.querySelectorAll('.friends__item');
  let itemsArray = [];
  let nodeListParent = nodeList[0].parentNode;
  for (let i = 0; i < nodeList.length; i++) {    
    itemsArray.push(nodeListParent.removeChild(nodeList[i]));
  }
  itemsArray.sort(function(nodeA, nodeB) {
      let nameA = nodeA.querySelector('.friend-info__name').textContent.toLowerCase();
      let nameB = nodeB.querySelector('.friend-info__name').textContent.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    })
    .forEach(function(node) {
      nodeListParent.appendChild(node)
    });
});