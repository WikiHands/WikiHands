(function(){
var Done = false;

function Polyfill() {
if (!Done) {
	// TODO

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
