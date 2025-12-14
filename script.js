// ===== PORTFOLIO ENHANCED SCRIPT =====

// Global Variables
let currentSection = 0;
const totalSections = 5;
let isScrolling = false;
let typedInstance = null;
let circularProgressStarted = false;

// ===== DOCUMENT READY =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeLoader();
    initializeNavigation();
    // initializeAutoScroll();
    initializeScrollAnimations();
    initializeSkillBars();
    initializeCircularProgress();
    initializeTestimonialSlider();
    initializeContactForm();
    initializeMobileNavigation();
    initializeParallaxEffects();
    initializeStatCounters();
    initializeTabs();
    initializeProgressBar();
    initializeTypedText();
});

// ===== PAGE LOADER =====
function initializeLoader() {
    const loader = document.getElementById('pageLoader');
    
    // Simulate loading progress
    let progress = 0;
    const loadingBar = document.querySelector('.loading-bar');
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        if (loadingBar) {
            loadingBar.style.width = progress + '%';
        }
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                if (loader) {
                    loader.classList.add('fade-out');
                    setTimeout(() => {
                        loader.style.display = 'none';
                        // Initialize animations after loader is hidden
                        animateHomeSection();
                    }, 600);
                }
            }, 500);
        }
    }, 100);
}

// ===== PROGRESS BAR =====
function initializeProgressBar() {
    const progressBar = document.getElementById('progressBar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
    });
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('.section-page');
    
    // Navigation click handlers
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToSection(index);
        });
    });
    
    // Regular navigation links
    const navLinks = document.querySelectorAll('.link-item');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const sectionIndex = Array.from(sections).findIndex(section => 
                    section.id === targetId
                );
                
                if (sectionIndex !== -1) {
                    navigateToSection(sectionIndex);
                }
            }
        });
    });
    
    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNavigation);
}

function navigateToSection(index) {
    if (index < 0 || index >= totalSections || isScrolling) return;
    
    isScrolling = true;
    currentSection = index;
    
    const sections = document.querySelectorAll('.section-page');
    const targetSection = sections[index];
    
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    updateActiveNavigation();
    // resetAutoScrollTimer();
    
    setTimeout(() => {
        isScrolling = false;
    }, 1000);
}

function updateActiveNavigation() {
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('.section-page');
    
    let current = 0;
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            current = index;
        }
    });
    
    navDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === current);
    });
    
    currentSection = current;
}



// ===== TYPED TEXT ANIMATION =====
function initializeTypedText() {
    const typedElement = document.querySelector('.input-desc');
    
    if (typedElement && typeof Typed !== 'undefined') {
        typedInstance = new Typed('.input-desc', {
            strings: [
                'Full Stack Developer',
                'Data Scientist',
                'Machine Learning Engineer',
                'Software Engineer',
                'Problem Solver'
            ],
            typeSpeed: 100,
            backSpeed: 60,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
}

// ===== HOME SECTION ANIMATIONS =====
function animateHomeSection() {
    const animateElements = document.querySelectorAll('.animate-text');
    
    animateElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '30px',
            duration: 1000,
            delay: 100,
            easing: 'ease-out',
            reset: false
        });
        
        // Animate sections
        sr.reveal('.section-title', { delay: 200 });
        sr.reveal('.about-img', { origin: 'left', delay: 300 });
        sr.reveal('.about-txt', { origin: 'right', delay: 400 });
        sr.reveal('.skill-domain', { interval: 200 });
        sr.reveal('.testimonial-card', { delay: 300 });
        sr.reveal('.contact-form', { origin: 'left', delay: 200 });
        sr.reveal('.contact-info', { origin: 'right', delay: 300 });
    }
}

// ===== SKILL BARS ANIMATION =====
function initializeSkillBars() {
    const skillSection = document.getElementById('skill-section');
    let skillsAnimated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                animateSkillBars();
                skillsAnimated = true;
            }
        });
    }, { threshold: 0.3 });
    
    if (skillSection) {
        observer.observe(skillSection);
    }
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        const width = bar.getAttribute('data-width');
        
        setTimeout(() => {
            bar.style.width = width;
        }, index * 200);
    });
}

// ===== CIRCULAR PROGRESS =====
function initializeCircularProgress() {
    const circularSection = document.querySelector('.circular-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !circularProgressStarted) {
                animateCircularProgress();
                circularProgressStarted = true;
            }
        });
    }, { threshold: 0.5 });
    
    if (circularSection) {
        observer.observe(circularSection);
    }
}

function animateCircularProgress() {
    const cards = document.querySelectorAll('.circular-bar .card');
    
    cards.forEach((card, index) => {
        const percentage = parseInt(card.getAttribute('data-percentage'));
        const circle = card.querySelector('.circle');
        const percentText = card.querySelector('.box span');
        
        setTimeout(() => {
            animateCircle(circle, percentage, percentText);
        }, index * 300);
    });
}

function animateCircle(circle, targetPercentage, textElement) {
    let currentPercentage = 0;
    const increment = targetPercentage / 100;
    
    const animation = setInterval(() => {
        currentPercentage += increment;
        
        if (currentPercentage >= targetPercentage) {
            currentPercentage = targetPercentage;
            clearInterval(animation);
        }
        
        const degrees = (currentPercentage / 100) * 360;
        circle.style.background = `conic-gradient(var(--gradient-primary) ${degrees}deg, var(--bg-black-50) ${degrees}deg)`;
        
        if (textElement) {
            textElement.textContent = Math.round(currentPercentage) + '%';
        }
    }, 20);
}

// ===== TESTIMONIAL SLIDER =====
function initializeTestimonialSlider() {
    const track = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    
    let currentTestimonial = 0;
    const totalTestimonials = document.querySelectorAll('.testimonial-slide').length;
    
    function updateSlider() {
        if (track) {
            track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
        }
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentTestimonial);
        });
        
        // Update slides
        document.querySelectorAll('.testimonial-slide').forEach((slide, index) => {
            slide.classList.toggle('active', index === currentTestimonial);
        });
    }
    
    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonial = currentTestimonial > 0 ? currentTestimonial - 1 : totalTestimonials - 1;
            updateSlider();
        });
    }
    
    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonial = currentTestimonial < totalTestimonials - 1 ? currentTestimonial + 1 : 0;
            updateSlider();
        });
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonial = index;
            updateSlider();
        });
    });
    
    // Auto-play testimonials
    setInterval(() => {
        currentTestimonial = currentTestimonial < totalTestimonials - 1 ? currentTestimonial + 1 : 0;
        updateSlider();
    }, 5000);
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const contactForm = document.getElementById('cform');
    const contactBtn = document.getElementById('contact-btn');
    const otpSendBtn = document.getElementById('otp-btn-send');
    const otpVerifyBtn = document.getElementById('otp-btn-verify');
    
    let generatedOTP = null;
    let isEmailVerified = false;
    
    // Send OTP
    if (otpSendBtn) {
        otpSendBtn.addEventListener('click', sendOTP);
    }
    
    // Verify OTP
    if (otpVerifyBtn) {
        otpVerifyBtn.addEventListener('click', verifyOTP);
    }
    
    // Send message
    if (contactBtn) {
        contactBtn.addEventListener('click', sendMessage);
    }
}

function sendOTP() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    
    if (!email || !name) {
        showNotification('Please enter your name and email first.', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Generate OTP
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Show OTP elements
    document.querySelector('.otp-subgroup-send-btn').style.display = 'none';
    document.querySelector('.otp-text').style.display = 'block';
    document.querySelector('.otp-subgroup').style.display = 'flex';
    
    // Simulate sending OTP (replace with actual email service)
    console.log('Generated OTP:', generatedOTP); // For demo purposes
    
    showNotification('OTP sent to your email address!', 'success');
    
    // Auto-fill OTP for demo (remove in production)
    setTimeout(() => {
        document.getElementById('otp-verify').value = generatedOTP;
        showNotification('Demo: OTP auto-filled for testing', 'info');
    }, 2000);
}

function verifyOTP() {
    const enteredOTP = document.getElementById('otp-verify').value;
    
    if (!enteredOTP) {
        showNotification('Please enter the OTP.', 'error');
        return;
    }
    
    if (enteredOTP === generatedOTP) {
        isEmailVerified = true;
        document.getElementById('title').disabled = false;
        document.getElementById('message').disabled = false;
        document.getElementById('contact-btn').disabled = false;
        
        document.querySelector('.otp-subgroup').style.display = 'none';
        document.querySelector('.otp-text').innerHTML = '<i class="fas fa-check-circle"></i> Email verified successfully!';
        document.querySelector('.otp-text').style.background = 'rgba(40, 167, 69, 0.1)';
        document.querySelector('.otp-text').style.borderLeft = '4px solid #28a745';
        
        showNotification('Email verified successfully!', 'success');
    } else {
        showNotification('Invalid OTP. Please try again.', 'error');
    }
}

function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;
    const contactBtn = document.getElementById('contact-btn');
    
    if (!isEmailVerified) {
        showNotification('Please verify your email first.', 'error');
        return;
    }
    
    if (!name || !email || !title || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }
    
    // Show loading state
    contactBtn.classList.add('loading');
    contactBtn.disabled = true;
    
    // Simulate sending message (replace with actual email service)
    setTimeout(() => {
        contactBtn.classList.remove('loading');
        contactBtn.disabled = false;
        
        // Show success message
        showThankYouMessage();
        
        // Reset form
        resetContactForm();
        
        showNotification('Message sent successfully!', 'success');
    }, 2000);
}

function resetContactForm() {
    document.getElementById('cform').reset();
    document.querySelector('.otp-subgroup-send-btn').style.display = 'block';
    document.querySelector('.otp-text').style.display = 'none';
    document.querySelector('.otp-subgroup').style.display = 'none';
    document.getElementById('title').disabled = true;
    document.getElementById('message').disabled = true;
    document.getElementById('contact-btn').disabled = true;
    isEmailVerified = false;
    generatedOTP = null;
}

function showThankYouMessage() {
    const thankYouMessage = document.getElementById('thankYouMessage');
    if (thankYouMessage) {
        thankYouMessage.classList.add('show');
    }
}

function closeThankYou() {
    const thankYouMessage = document.getElementById('thankYouMessage');
    if (thankYouMessage) {
        thankYouMessage.classList.remove('show');
    }
}

// Make closeThankYou globally available
window.closeThankYou = closeThankYou;

// ===== MOBILE NAVIGATION =====
function initializeMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navItems = document.querySelector('.nav-items');
    const overlay = document.querySelector('.overlay');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navItems.classList.toggle('open');
            overlay.classList.toggle('active');
        });
    }
    
    // Close menu when clicking overlay
    if (overlay) {
        overlay.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navItems.classList.remove('open');
            overlay.classList.remove('active');
        });
    }
    
    // Close menu when clicking nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navItems.classList.remove('open');
            overlay.classList.remove('active');
        });
    });
}

// ===== PARALLAX EFFECTS =====
function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ===== STAT COUNTERS =====
function initializeStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    let countersAnimated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                animateCounters();
                countersAnimated = true;
            }
        });
    }, { threshold: 0.5 });
    
    if (statNumbers.length > 0) {
        observer.observe(statNumbers[0].closest('.stats-container'));
    }
}

function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    statNumbers.forEach((counter, index) => {
        const target = parseInt(counter.getAttribute('data-count'));
        let current = 0;
        const increment = target / 50;
        
        setTimeout(() => {
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 40);
        }, index * 200);
    });
}

// ===== TABS FUNCTIONALITY =====
function initializeTabs() {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            
            // Remove active class from all tabs and contents
            tabItems.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            item.classList.add('active');
            const targetContent = document.querySelector(target);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ===== BACK TO TOP =====
function initializeBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            navigateToSection(0);
        });
    }
}

// ===== UTILITY FUNCTIONS =====
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto hide
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        hideNotification(notification);
    });
    
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: 1rem;
    `;
}

function hideNotification(notification) {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getNotificationColor(type) {
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    return colors[type] || '#17a2b8';
}

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevSection = currentSection > 0 ? currentSection - 1 : totalSections - 1;
        navigateToSection(prevSection);
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const nextSection = currentSection < totalSections - 1 ? currentSection + 1 : 0;
        navigateToSection(nextSection);
    }
    // } else if (e.key === ' ') {
    //     e.preventDefault();
    //     toggleAutoScroll();
    // }
});

// ===== SMOOTH SCROLL POLYFILL =====
function smoothScrollTo(element, duration = 1000) {
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// ===== PERFORMANCE OPTIMIZATION =====
let ticking = false;

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

function updateAnimations() {
    // Update animations here
    ticking = false;
}

// ===== INTERSECTION OBSERVER FOR PERFORMANCE =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section-page').forEach(section => {
    sectionObserver.observe(section);
});

// ===== RESIZE HANDLER =====
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Handle resize events
        updateActiveNavigation();
    }, 250);
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Portfolio Error:', e.error);
});

// ===== INITIALIZE BACK TO TOP =====
initializeBackToTop();

// ===== EXPORT FUNCTIONS FOR GLOBAL ACCESS =====
window.navigateToSection = navigateToSection;
window.sendOTP = sendOTP;
window.closeThankYou = closeThankYou;

// Initialize tsParticles
particlesJS.load('tsparticles', {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

console.log('✅ Portfolio Enhanced Script Loaded Successfully!');