const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animated scroll indicator
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.7
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const navLink = document.querySelector(`.navbar a[href="#${id}"]`);

        if (entry.isIntersecting) {
            document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});