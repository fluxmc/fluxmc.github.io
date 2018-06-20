var
  mainContainer =	document.getElementById('mainContainer'),
  particleContainer =	document.getElementById('particleContainer'),
  voteButton =		document.getElementById('button2'),
  storeButton =		document.getElementById('button3'),
  staffButton =		document.getElementById('button4');
  onlineCounter = 	document.getElementById('onlineCounter');

//voteButton.onclick =	votePopup;
voteButton.onclick =    function(){location.href='http://seekpvp.com/vote.html';};
staffButton.onclick =	function(){location.href='http://seekpvp.com/staff.html';};
storeButton.onclick =	function(){location.href='http://store.seekpvp.com/';};

function onTransEnd(elem, func){
  elem.addEventListener("transitionend",	func ,false);
  elem.addEventListener("webkitTransitionEnd",	func ,false);
  elem.addEventListener("mozTransitionEnd",	func ,false);
  elem.addEventListener("msTransitionEnd",	func ,false);
  elem.addEventListener("oTransitionEnd",	func ,false);
}

(function getPlayers() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'getPlayers.php', true);
	xhr.send(null);
	xhr.onload = function() {
		var res = parseInt(xhr.responseText);
		onlineCounter.innerHTML = isNaN(res)
			? '<h2 style=color:red>Server offline!</h2>'
			: '<h2>Join <span class="highlight">' + res + '</span> other players at <span class="highlight">play.seekpvp.com</span>!</h2>';

		setTimeout(getPlayers, 2000);
	};
})();
