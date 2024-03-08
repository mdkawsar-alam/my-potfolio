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
document.addEventListener("DOMContentLoaded", function () {
    // Get all the card elements
    const cards = document.querySelectorAll('.cert');

    // Options for the Intersection Observer
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust as needed based on when you want the animation to trigger
    };

    // Callback function to handle intersection changes
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a class to start the animation when the card comes into view
          entry.target.classList.add('animate-in');
        } else {
          // Optionally, remove the class if you want to reset the animation when the card goes out of view
          entry.target.classList.remove('animate-in');
        }
      });
    };

    // Create an Intersection Observer with the callback and options
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe each card element
    cards.forEach((card) => {
      observer.observe(card);
    });
  });