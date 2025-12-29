// ===========================
// Three.js 3D Background
// ===========================
let scene, camera, renderer, particles;

function init3DBackground() {
    const canvas = document.getElementById('3d-canvas');
    if (!canvas) return;

    // Scene setup
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    // Renderer
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create particle system
    const geometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00d4ff); // Cyan
    const color2 = new THREE.Color(0x0ea5e9); // Blue

    for (let i = 0; i < particleCount * 3; i += 3) {
        // Random positions
        positions[i] = (Math.random() - 0.5) * 100;
        positions[i + 1] = (Math.random() - 0.5) * 100;
        positions[i + 2] = (Math.random() - 0.5) * 100;

        // Gradient colors between cyan and blue
        const mixColor = Math.random() > 0.5 ? color1 : color2;
        colors[i] = mixColor.r;
        colors[i + 1] = mixColor.g;
        colors[i + 2] = mixColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Material
    const material = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation loop
    animate3D();
}

function animate3D() {
    requestAnimationFrame(animate3D);

    // Rotate particles slowly
    if (particles) {
        particles.rotation.x += 0.0002;
        particles.rotation.y += 0.0003;
    }

    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
});

// Initialize on page load
window.addEventListener('load', () => {
    if (typeof THREE !== 'undefined') {
        init3DBackground();
    }
});

// ===========================
// Navigation
// ===========================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
navToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    navToggle.classList.toggle('active');

    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    if (navMenu?.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans.forEach(span => {
            span.style.transform = '';
            span.style.opacity = '';
        });
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
        navToggle?.classList.remove('active');
        const spans = navToggle?.querySelectorAll('span');
        spans?.forEach(span => {
            span.style.transform = '';
            span.style.opacity = '';
        });
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===========================
// Active Navigation Link
// ===========================
const sections = document.querySelectorAll('.section, .hero');
const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

// ===========================
// Typing Animation
// ===========================
const typingText = document.getElementById('typing-text');
const roles = [
    'Full Stack Developer',
    'Flutter Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Research Scholar',
    'Innovation Driver'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeRole() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
    }

    setTimeout(typeRole, typingSpeed);
}

if (typingText) {
    setTimeout(typeRole, 1000);
}

// ===========================
// Smooth Scrolling
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = navbar?.offsetHeight || 70;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// GSAP Scroll Animations
// ===========================
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Animate cards on scroll
    gsap.utils.toArray('.project-card, .research-card, .achievement-card, .info-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // Animate section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top bottom-=50',
                toggleActions: 'play none none reverse'
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        });
    });

    // Parallax effect for floating shapes
    gsap.utils.toArray('.shape').forEach(shape => {
        const speed = shape.classList.contains('shape-1') ? 50 :
            shape.classList.contains('shape-2') ? 30 :
                shape.classList.contains('shape-3') ? 40 :
                    shape.classList.contains('shape-4') ? 45 : 35;

        gsap.to(shape, {
            y: speed,
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    });
}

// ===========================
// 3D Card Tilt Effect
// ===========================
function add3DTiltEffect() {
    const cards = document.querySelectorAll('.project-card, .research-card, .achievement-card, .info-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ===========================
// Counter Animation for Stats
// ===========================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = entry.target;
                const text = target.textContent;
                const number = parseInt(text.replace(/\D/g, '')) || 0;
                const suffix = text.replace(/[0-9]/g, '');

                let current = 0;
                const increment = number / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        target.textContent = number + suffix;
                        clearInterval(timer);
                    } else {
                        target.textContent = Math.floor(current) + suffix;
                    }
                }, 30);

                target.classList.add('animated');
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

// ===========================
// Particle Cursor Effect
// ===========================
function createCursorParticles() {
    const particles = [];
    const particleCount = 5;

    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return; // Disable on mobile

        const particle = document.createElement('div');
        particle.className = 'cursor-particle';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';

        const hue = Math.random() * 60 + 180; // Blue-cyan range
        particle.style.background = `hsl(${hue}, 100%, 60%)`;

        document.body.appendChild(particle);
        particles.push(particle);

        setTimeout(() => {
            particle.remove();
            particles.shift();
        }, 1000);

        if (particles.length > particleCount) {
            const oldParticle = particles.shift();
            oldParticle?.remove();
        }
    });
}

// Add cursor particle styles
const style = document.createElement('style');
style.textContent = `
    .cursor-particle {
        position: fixed;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: particle-fade 1s ease-out forwards;
    }
    
    @keyframes particle-fade {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--tx, 0), var(--ty, 20px)) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===========================
// Initialize Everything
// ===========================
window.addEventListener('load', () => {
    // Add 3D tilt effect to cards
    add3DTiltEffect();

    // Animate counters
    animateCounters();

    // Create cursor particles
    createCursorParticles();

    // Remove loading state
    document.body.classList.add('loaded');

    // Trigger initial animations
    setTimeout(() => {
        document.querySelector('.hero-content')?.classList.add('fade-in');
    }, 100);
});

// ===========================
// Accessibility
// ===========================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle?.classList.remove('active');
    }
});

// ===========================
// Console Easter Egg
// ===========================
const consoleStyles = [
    'color: #00d4ff; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px rgba(0,212,255,0.5);',
    'color: #e5e7eb; font-size: 14px;',
    'color: #00d4ff; font-size: 12px; font-weight: bold;'
];

console.log('%c👋 Welcome to my portfolio!', consoleStyles[0]);
console.log('%cLooking under the hood? I like your style!', consoleStyles[1]);
console.log('%c📧 Email: anudeepbatchu10@gmail.com', consoleStyles[2]);

// ===========================
// Enhanced Mobile Responsiveness
// ===========================

// Detect mobile device
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Disable 3D tilt on mobile for performance
if (isMobile || isTouch) {
    // Remove 3D tilt listeners on mobile
    document.querySelectorAll('.project-card, .research-card, .achievement-card, .info-card').forEach(card => {
        card.style.transform = '';
    });
}

// Optimize particle count for mobile
if (isMobile && typeof init3DBackground === 'function') {
    const originalInit = init3DBackground;
    init3DBackground = function() {
        const particleCountBackup = 1500;
        // Reduce particles on mobile
        window.mobileParticleCount = 500;
        originalInit();
    };
}

// Prevent zoom on double tap (iOS)
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, {passive: false});

// Better viewport height handling for mobile browsers
function setVH() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
}

setVH();
window.addEventListener('resize', setVH);
window.addEventListener('orientationchange', setVH);

// Smooth scroll behavior for iOS
if (isMobile) {
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Close mobile menu on outside click
if (navMenu) {
    document.addEventListener('click', (e) => {
        const isClickInsideMenu = navMenu.contains(e.target);
        const isClickOnToggle = navToggle?.contains(e.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle?.classList.remove('active');
            const spans = navToggle?.querySelectorAll('span');
            spans?.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        }
    });
}

// Optimize scroll performance on mobile
let ticking = false;
function optimizedScroll(callback) {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            callback();
            ticking = false;
        });
        ticking = true;
    }
}

// Add touch feedback for buttons
if (isTouch) {
    document.querySelectorAll('.btn, .project-link, .social-link').forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        }, {passive: true});
        
        button.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        }, {passive: true});
    });
}

// ===========================
// GitHub Calendar Initialization
// ===========================
window.addEventListener('load', () => {
    if (typeof GitHubCalendar !== 'undefined') {
        GitHubCalendar(".calendar", "anudeep2710", {
            responsive: true,
            tooltips: true,
            global_stats: false // Hide global stats to keep it cleaner
        }).then(function() {
            // Additional styling if needed after load
            const container = document.querySelector('.calendar');
            if(container) {
                container.style.minHeight = 'auto';
                // Remove loading message
                const loader = document.querySelector('.calendar-loading');
                if(loader) loader.style.display = 'none';
            }
        }).catch(err => {
            console.error("Could not load GitHub calendar", err);
            const container = document.querySelector('.calendar');
            if(container) {
                container.innerHTML = '<p style="color:var(--color-text-muted);text-align:center;">GitHub contribution graph currently unavailable.</p>';
            }
        });
    }
});
