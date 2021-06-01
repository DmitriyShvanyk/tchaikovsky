(function () {

  'use strict';

  // simple toggler
  const programItems = document.querySelector('.program__items');

  function toggleProgramItem(e) {
    if (e.target.classList.contains('program__head')) {
      e.target.closest('.program__item').classList.toggle('program__item--active')
    }
  }

  programItems.addEventListener('click', toggleProgramItem);


  // change price
  function changePriceOfDates() {
    const priceCurator = document.querySelector('.pack__price-now--curator')
    const priceMentor = document.querySelector('.pack__price-now--mentor')

    const dateToday = new Date();
    const date12Feb = new Date("02/12/2021");
    const date13Feb = new Date("02/13/2021");
    const date14Feb = new Date("02/14/2021");
    const date15Feb = new Date("02/15/2021");
    const date16Feb = new Date("02/16/2021");
    const date17Feb = new Date("02/17/2021");
    const date18Feb = new Date("02/18/2021");
    const date19Feb = new Date("02/19/2021");
    const date20Feb = new Date("02/20/2021");

    if ((date12Feb.toDateString() == dateToday.toDateString()) ||
      (date13Feb.toDateString() == dateToday.toDateString())) {
        priceCurator.textContent = `17 900 ₽`
        priceMentor.textContent = `37 900 ₽`
    } else if ((date14Feb.toDateString() == dateToday.toDateString()) || 
      (date15Feb.toDateString() == dateToday.toDateString()) ||
      (date16Feb.toDateString() == dateToday.toDateString()) ||
      (date17Feb.toDateString() == dateToday.toDateString()) ||
      (date18Feb.toDateString() == dateToday.toDateString()) ||
      (date19Feb.toDateString() == dateToday.toDateString()) ||
      (date20Feb.toDateString() == dateToday.toDateString())) {
        priceCurator.textContent = `19 900 ₽`
        priceMentor.textContent = `39 900 ₽`
    } else {
      priceCurator.textContent = `24 900 ₽`
      priceMentor.textContent = `44 900 ₽`
    }
  }

  changePriceOfDates();

})();