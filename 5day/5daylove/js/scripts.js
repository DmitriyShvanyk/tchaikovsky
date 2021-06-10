;(function () {

	"use strict";

	const initSlider = () => {
		const gallery = document.querySelector('.gallery')
		if (!gallery) return
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
		setTimeout(()=> {
			initSlider();
		}, 2000)
	})

})();