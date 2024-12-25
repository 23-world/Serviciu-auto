const hamburgerMenu = document.querySelector('.ham-menu'); 
const navMenu = document.querySelector('#navbar'); 

console.log(hamburgerMenu); 
console.log(navMenu);

if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
} else {
    console.error('Elementele nu au fost găsite.');
}