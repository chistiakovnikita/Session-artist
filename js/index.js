const buttonRegister = document.querySelector('.registration__button-register');
const sectionModal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.modal__img');

function modalOpen() {
    sectionModal.classList.toggle('modal--active')
    overlay.classList.toggle('overlay--active')

}

buttonRegister.addEventListener('click', modalOpen)
closeModal.addEventListener('click', modalOpen)



const buttonLogin = document.querySelector('.registration__button-login');
const modalLogin = document.querySelector('.modal-login');
const closeModalLogin = document.querySelector('.modal-login__img');

function modalLoginOpen() {
    modalLogin.classList.toggle('modal-login--active')
    overlay.classList.toggle('overlay--active')

}

buttonLogin.addEventListener('click', modalLoginOpen)
closeModalLogin.addEventListener('click', modalLoginOpen)





