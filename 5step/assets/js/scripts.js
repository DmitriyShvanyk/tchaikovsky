; (function () {

	"use strict";


	// init animation scroll
	const initRellax = () => {
		const rellaxEl = document.querySelector('.rellax')
		if(!rellaxEl) return
		const rellax = new Rellax('.rellax', {
			center: false,
			wrapper: null,
			round: true,
			vertical: true,
			horizontal: false
		});
	}

	const initSlider = () => {
		const gallery = document.querySelector('.gallery')
		if(!gallery) return
		const swiper = new Swiper(".gallery__swiper", {
			loop: true,
			slidesPerView: "auto",
			spaceBetween: 0,
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
		  });
	}
	

	window.addEventListener('DOMContentLoaded', () => {
		initRellax();
		initSlider();
	})
	

})();