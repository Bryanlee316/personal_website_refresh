// ===== Lenis Smooth Scroll =====
let lenis = null;

// Check if Lenis is available
if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
        duration: 2.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
        infinite: false,
    });

    console.log('Lenis initialized:', lenis);

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
} else {
    console.warn('Lenis library not loaded - using default scrolling');
}

// Navigation Menu Toggle - Simple and direct
window.addEventListener('load', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    console.log('Menu elements found:', { menuToggle, navMenu, navLinks: navLinks.length });

    if (menuToggle && navMenu) {
        // Toggle menu when clicking the button
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const isActive = navMenu.classList.contains('active');

            if (isActive) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            } else {
                menuToggle.classList.add('active');
                navMenu.classList.add('active');
            }

            console.log('Menu is now:', isActive ? 'closed' : 'open');
        });

        // Close menu when clicking a link
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                console.log('Menu closed via link click');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    } else {
        console.error('Menu elements not found!');
    }
});


// Navbar styling on scroll
const navbar = document.querySelector('.navbar');

if (lenis) {
    lenis.on('scroll', ({ scroll }) => {
        if (scroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
} else {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Enhanced Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optionally unobserve after animation to improve performance
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in classes to elements
document.querySelectorAll('.experience-block').forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${index * 0.1}s`;
    fadeObserver.observe(el);
});

document.querySelectorAll('.project-card').forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${index * 0.15}s`;
    fadeObserver.observe(el);
});

document.querySelectorAll('.education-block').forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${index * 0.1}s`;
    fadeObserver.observe(el);
});

// Animate section headers
document.querySelectorAll('.section-header').forEach(el => {
    el.classList.add('fade-in');
    fadeObserver.observe(el);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            if (lenis) {
                lenis.scrollTo(target, {
                    offset: -100,
                    duration: 1.5
                });
            } else {
                // Fallback to native smooth scroll
                const targetPosition = target.offsetTop - 100;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Enhanced parallax effect
const hero = document.querySelector('.hero');

if (lenis) {
    lenis.on('scroll', ({ scroll }) => {
        if (hero && scroll < window.innerHeight) {
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scroll * 0.15}px)`;
                heroContent.style.opacity = Math.max(1 - scroll / 700, 0.3);
            }
        }
    });
} else {
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        if (hero && scroll < window.innerHeight) {
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scroll * 0.15}px)`;
                heroContent.style.opacity = Math.max(1 - scroll / 700, 0.3);
            }
        }
    });
}

// Dynamic year in footer
const yearElement = document.querySelector('.footer-content p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = yearElement.textContent.replace('2026', currentYear);
}

console.log('Portfolio website loaded successfully!');
