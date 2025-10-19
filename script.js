// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Formulário de Contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simular envio (substituir por integração real)
        console.log('Dados do formulário:', data);
        
        // Mostrar mensagem de sucesso
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contactForm.reset();
    });
}

// Smooth scroll para links internos
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


// LGPD Cookie Banner
document.addEventListener('DOMContentLoaded', function() {
    const lgpdBanner = document.getElementById('lgpdBanner');
    if (!lgpdBanner) return;
    
    const lgpdAccept = document.getElementById('lgpdAccept');
    const lgpdDecline = document.getElementById('lgpdDecline');
    
    // Verificar se o usuário já aceitou/recusou
    const lgpdConsent = localStorage.getItem('lgpdConsent');
    
    if (!lgpdConsent) {
        // Mostrar banner após 1 segundo
        setTimeout(() => {
            lgpdBanner.classList.add('show');
        }, 1000);
    }
    
    // Aceitar cookies
    if (lgpdAccept) {
        lgpdAccept.addEventListener('click', function() {
            localStorage.setItem('lgpdConsent', 'accepted');
            lgpdBanner.classList.remove('show');
        });
    }
    
    // Recusar cookies
    if (lgpdDecline) {
        lgpdDecline.addEventListener('click', function() {
            localStorage.setItem('lgpdConsent', 'declined');
            lgpdBanner.classList.remove('show');
        });
    }
});


