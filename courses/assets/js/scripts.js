; (function () {

	"use strict";

	// load fonts
	function loadFonts(href){
		
		const head = document.querySelector('head');
		const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = href;
		
		head.appendChild(link);
	}
	loadFonts('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
	loadFonts('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600&display=swap');


})();