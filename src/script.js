// mouse
document.addEventListener('DOMContentLoaded', function() {
    const magnifyingGlass = document.querySelector('.magnifying-glass');

    document.addEventListener('mousemove', function(e) {
        const x = e.clientX;
        const y = e.clientY;

        magnifyingGlass.style.transform = `translate(${x}px, ${y}px)`;
    });
// header
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const crossBtn = document.getElementById('cross-btn');
    const navbar = document.getElementById('navbar');

    hamburgerBtn.addEventListener('click', function() {
        if (window.innerWidth < 1024) {
            navbar.classList.add('translate-x-0');
            hamburgerBtn.style.display = 'none';
            crossBtn.style.display = 'inline-block';
        }
    });

    crossBtn.addEventListener('click', function() {
        if (window.innerWidth < 1024) {
            navbar.classList.remove('translate-x-0');
            hamburgerBtn.style.display = 'inline-block';
            crossBtn.style.display = 'none';
        }
    });
});
// service section 
``
