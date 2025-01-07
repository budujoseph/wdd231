const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

const hamburger = document.querySelector('.top-navs');
const list = document.querySelector('.top-nav-list');

hamburger.addEventListener('click', () => {
    list.classList.toggle('show');
    hamburger.classList.toggle('show');
})