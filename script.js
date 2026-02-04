// IceLabs Webpage - Functional Scripting
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScrolling();
    initMobileNav();
    initFlavorHighlight();
});

/**
 * Smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for sticky header height
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Simple Mobile Navigation Toggle Logic
 * (Ensures functionality if a burger menu icon is present)
 */
function initMobileNav() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Logic for closing a mobile menu drawer if one exists
            const navContainer = document.querySelector('.nav-links');
            if (navContainer.classList.contains('active')) {
                navContainer.classList.remove('active');
            }
        });
    });
}

/**
 * Flavor Card Interactive Feedback
 */
function initFlavorHighlight() {
    const flavorCards = document.querySelectorAll('.flavor-card');
    
    flavorCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Optional: Log interaction for analytics
            console.log(`Browsing flavor: ${card.textContent.trim()}`);
        });
    });
}

/**
 * Note: Per architecture requirement, no complex JS animations 
 * or external libraries are used to maintain high performance.
 */