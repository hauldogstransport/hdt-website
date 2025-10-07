// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle functionality
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mainNav = document.getElementById('mainNav');
const body = document.body;

if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isActive = mainNav.classList.contains('mobile-active');
        
        if (isActive) {
            mainNav.classList.remove('mobile-active');
            this.classList.remove('active');
            body.classList.remove('menu-open');
        } else {
            mainNav.classList.add('mobile-active');
            this.classList.add('active');
            body.classList.add('menu-open');
        }
    });

    document.addEventListener('click', function(event) {
        const isClickInsideNav = mainNav.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('mobile-active')) {
            mainNav.classList.remove('mobile-active');
            mobileMenuToggle.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            mainNav.classList.remove('mobile-active');
            mobileMenuToggle.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
}

// Header scroll effect
const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Intersection Observer for smooth fade-in animations
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px 50px 0px'
};

const fadeInObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, 100);
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll('.service-card, .process-step, .pricing-card, .pricing-info');
animatedElements.forEach((el, index) => {
    el.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
    fadeInObserver.observe(el);
});

// Parallax effect for hero section (desktop only)
const hero = document.querySelector('.hero');
const heroBackground = document.querySelector('.hero-background');

if (hero && heroBackground && window.innerWidth > 768) {
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const scrolled = window.pageYOffset;
                const heroHeight = hero.offsetHeight;
                
                if (scrolled < heroHeight) {
                    heroBackground.style.transform = `translateY(${scrolled * 0.4}px)`;
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
}

// Active navigation state based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function updateActiveNav() {
    let current = '';
    const scrollPosition = window.pageYOffset + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Track external form clicks
const formButton = document.querySelector('a[href*="forms"]');
if (formButton) {
    formButton.addEventListener('click', function() {
        console.log('External form opened');
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_opened', {
                'event_category': 'engagement',
                'event_label': 'Pickup Request Form'
            });
        }
    });
}

// Track all CTA button clicks
const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-large, .cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonText = this.textContent.trim();
        console.log(`CTA clicked: ${buttonText}`);
        
        if (typeof gtag !== 'undefined') {
            gtag('event', 'cta_click', {
                'event_category': 'engagement',
                'event_label': buttonText
            });
        }
    });
});

// Performance monitoring
window.addEventListener('load', function() {
    console.log('%cHaul Dogs Transport', 'font-size: 20px; font-weight: bold; color: #4F46E5;');
    console.log('%cWebsite loaded successfully', 'font-size: 14px; color: #475569;');
    
    if ('performance' in window && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    }
});

// Resize handler for responsive features
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Close mobile menu on desktop resize
        if (window.innerWidth > 768 && mainNav.classList.contains('mobile-active')) {
            mainNav.classList.remove('mobile-active');
            mobileMenuToggle.classList.remove('active');
            body.classList.remove('menu-open');
        }
    }, 250);
});