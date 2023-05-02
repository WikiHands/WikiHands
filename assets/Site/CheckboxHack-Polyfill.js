(function(){
var Done = false;

function Polyfill() {
if (!Done) {
	// TODO
	var Boxs = document.querySelectorAll('input[type~="checkbox"].ToggleDisplay, input[type~="radio"].ToggleDisplay');
	for (var i=0; i<Boxs.length; i++) {
		Boxs[i].onclick = function(){
			alert(1);
			this.nextElementSibling.hidden = !this.checked;
		};
	};

	Done = true;
};
};

// Sane browsers
document.addEventListener('DOMContentLoaded', Polyfill);
window.addEventListener('load', Polyfill);

// Internet Explorer
document.attachEvent('onreadystatechange', Polyfill);
window.attachEvent('onload', Polyfill);
})();
