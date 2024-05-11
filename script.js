// Sticky Navbar
window.addEventListener('scrol', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrolly > 0);
});