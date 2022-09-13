const buttonSearch = document.querySelector('.header-mobile__button');
const searchForm = document.querySelector('.header-mobile__form');


function openForm() {
    searchForm.classList.add('header-mobile__form--active')
    buttonSearch.classList.add('header-mobile__button--active')
}

buttonSearch.addEventListener('click',openForm)


