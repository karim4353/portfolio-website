/* Scroll Progress Indicator */
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scrollProgress').style.width = scrolled + '%';
});

/* Smooth Scrolling for Navigation */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* Fade In Animations on Scroll */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('project-card')) {
                entry.target.classList.add('animate');
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
document.querySelectorAll('.project-card').forEach(el => observer.observe(el));

/* Navbar Background on Scroll */
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(13, 17, 23, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(13, 17, 23, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

/* Typing Animation for Hero Subtitle */
const subtitle = document.querySelector('.hero .subtitle');
const originalText = subtitle.textContent;
subtitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        subtitle.textContent += originalText.charAt(i);
        i++;
        requestAnimationFrame(typeWriter); // Use requestAnimationFrame for smoother animation
    }
}

window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

/* Skill Tag Hover Effects */
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) translateY(-2px)';
    });
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

/* Mobile Menu Toggle */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/* Performance: Debounced Scroll Events */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedScroll = debounce(() => {
    console.log('Scroll event (debounced)');
}, 16);

window.addEventListener('scroll', debouncedScroll);

/* Easter Egg: Konami Code */
let konamiCode = [];
const expectedCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-expectedCode.length);
    
    if (konamiCode.join('') === expectedCode.join('')) {
        document.body.style.transform = 'rotate(360deg)';
        document.body.style.transition = 'transform 2s ease';
        
        setTimeout(() => {
            document.body.style.transform = 'none';
            alert('🚀 You found the secret! Thanks for exploring my portfolio!');
        }, 2000);
        
        konamiCode = [];
    }
});

/* Console Message for Developers */
console.log(`
🚀 Welcome to Karim's Portfolio!

Built with vanilla HTML, CSS, and JavaScript
Check out the source code: https://github.com/karim4353/portfolio-website

Looking for an embedded systems engineer? Let's connect!
`);