(function(){
var Done = false;

function Polyfill() {
if (!Done) {
	var Boxs = document.querySelectorAll('input[type~="checkbox"].ToggleDisplay, input[type~="radio"].ToggleDisplay');
	for (var i=0; i<Boxs.length; i++) {
		Boxs[i].onclick = function(){
			alert(1);
			this.nextElementSibling.hidden = !this.checked;
		};
	};

	var Langs = document.querySelectorAll('input[type~="radio"][name="LangSelect"]');
	for (var i=0; i<Langs.length; i++) {
		Langs[i].onclick = function(){
			var Cont = document.getElementById('git-wiki-content');
			var AllLays = Cont.querySelectorAll('*[lang]');
			var CurLays = Cont.querySelectorAll('*[lang="' + Langs[i].lang + '"]');
			for (var i=0; i<AllLays.length; i++) {
				AllLays[i].style.display = 'none';
			};
			for (var i=0; i<CurLays.length; i++) {
				CurLays[i].style.display = 'revert';
			};
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
