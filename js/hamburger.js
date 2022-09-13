const hamburger = document.querySelector('.header-mobile__hamburger');
const sidebar = document.querySelector('.sidebar');



function openSidebar() {
    sidebar.classList.toggle('sidebar--active')
    overlay.classList.toggle('overlay--active')
}

hamburger.addEventListener('click', openSidebar)
overlay.addEventListener('click', openSidebar)
