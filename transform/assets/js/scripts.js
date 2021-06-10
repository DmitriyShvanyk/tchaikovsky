;(function () {

	"use strict";

	const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

	document.addEventListener("DOMContentLoaded", function () {
		let D = new Date();
		if (D.getHours() >= 19) {
			/* Время от 19:00 и до полуночи */
			D.setDate(D.getDate() + 1);
		}

		let date_s = D.getDate();
		let month_s = D.getMonth();
		D.setDate(D.getDate() + 1)
		let date_e = D.getDate();
		let month_e = D.getMonth();

		let s = "";
		if (month_s != month_e) {
			s = date_s + " " + months[month_s] + " - " + date_e + " " + months[month_e] + " в 19:00 мск";
		} else {
			s = date_s + "-" + date_e + " " + months[month_e] + " в 19:00 мск";
		}

		let E = document.getElementsByClassName("js-date");
		for (let i = 0; i < E.length; i++) {
			E[i].innerHTML = s;
		}
	})

})();