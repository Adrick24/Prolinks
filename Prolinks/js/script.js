// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 500);
});

// Translation Dictionary
const translations = {
    pt: {
        // Navegação
        nav_home: "Início",
        nav_about: "Quem Somos",
        nav_services: "Serviços",
        nav_portfolio: "Portfólio",
        nav_partners: "Parceiros",
        nav_contact: "Contactos",
        nav_quote: "Solicitar Orçamento",
        
        // Hero Section
        hero_title: "Transformamos propriedades em <span class='highlight'>espaços atrativos</span>, funcionais e rentáveis",
        hero_subtitle: "Especialistas em remodelação, design e gestão de propriedades em Angola. Oferecemos soluções completas desde a concepção até à gestão operacional.",
        hero_btn_quote: "Solicite um Orçamento",
        hero_btn_services: "Conheça Nossos Serviços",
        
        // Stats
        stat_projects: "Projetos Concluídos",
        stat_clients: "Clientes Satisfeitos",
        stat_experience: "Anos de Experiência",
        stat_support: "Suporte 24/7",
        
        // About Section
        about_subtitle: "Conheça a nossa história",
        about_title: "Quem Somos",
        about_description: "A Prolinks é uma empresa especializada em remodelação, design e gestão de propriedades, criada para transformar propriedades em espaços mais atrativos, funcionais e rentáveis.",
        about_experience: "Anos de Experiência",
        about_history_title: "Nossa História",
        about_history_text: "A empresa nasce da visão da sua Directora Geral, que identificou no mercado angolano a necessidade de soluções integradas capazes de responder, de forma profissional e eficiente, aos desafios da valorização e gestão de propriedades.",
        about_mission: "Missão",
        about_mission_text: "Transformar propriedades em espaços atrativos, funcionais e rentáveis através de soluções integradas de remodelação, design e gestão de propriedades.",
        about_vision: "Visão",
        about_vision_text: "Ser referência no sector da remodelação, design e gestão de propriedades em Angola, reconhecida pela excelência e inovação.",
        about_director_title: "Directora Geral da Prolinks",
        about_director_quote: "\"Acreditamos que cada propriedade tem potencial para se tornar extraordinário.\"",
        
        // Values Section
        values_title: "Nossos Valores",
        values_subtitle: "Princípios que guiam o nosso trabalho e relacionamento com os clientes",
        value1_title: "Qualidade e Excelência",
        value1_text: "Compromisso com elevados padrões técnicos, estéticos e operacionais em todos os nossos projetos.",
        value2_title: "Inovação e Criatividade",
        value2_text: "Soluções modernas e personalizadas, aliando design funcional às últimas tendências do mercado.",
        value3_title: "Transparência e Confiança",
        value3_text: "Relações baseadas na ética, clareza de processos e comunicação contínua com os nossos clientes.",
        value4_title: "Sustentabilidade",
        value4_text: "Uso consciente de recursos e práticas responsáveis para um futuro mais sustentável.",
        
        // Services Section
        services_subtitle: "O que oferecemos",
        services_title: "Nossos Serviços",
        services_description: "Soluções completas para transformar e gerir o seu imóvel",
        service1_title: "Gestão de Propriedades",
        service1_text: "Administração completa de propriedades para maximizar o rendimento e garantir manutenção.",
        service1_feat1: "Administração de propriedades",
        service1_feat2: "Gestão de condomínio",
        service1_feat3: "Manutenção geral",
        service2_title: "Remodelação e Design",
        service2_text: "Transformamos espaços através de remodelação completa e design de interiores e exteriores.",
        service2_feat1: "Remodelação e modernização",
        service2_feat2: "Design de interiores",
        service2_feat3: "Projetos personalizados",
        service3_title: "Alojamento Local",
        service3_text: "Gestão profissional de alojamentos locais para optimizar rendimentos e oferecer excelência.",
        service3_feat1: "Gestão Airbnb",
        service3_feat2: "Hospedagem premium",
        service3_feat3: "Otimização de rendimento",
        service4_title: "Serviços Adicionais",
        service4_text: "Oferecemos serviços complementares para uma experiência completa de gestão imobiliária.",
        service4_feat1: "Gestão de serviços",
        service4_feat2: "Compras e confeção",
        service4_feat3: "Pacotes turísticos",
        
        // Portfolio Section
        portfolio_title: "Nossos Trabalhos",
        portfolio_description: "Alguns dos projetos que realizamos com excelência",
        portfolio1_title: "Residencial Moderno",
        portfolio1_subtitle: "Remodelação completa",
        portfolio2_title: "Espaço Comercial",
        portfolio2_subtitle: "Design e gestão",
        portfolio3_title: "Alojamento Local",
        portfolio3_subtitle: "Gestão Airbnb",
        
        // Partners Section
        partners_title: "Nossos Parceiros",
        partners_description: "Colaboramos com empresas de referência para oferecer o melhor serviço",
        
        // Contact Section
        contact_title: "Entre em Contacto",
        contact_description: "Tem um projeto em mente? Vamos conversar!",
        contact_address: "Endereço",
        contact_phone: "Telefone",
        contact_email: "Email",
        contact_hours: "Horário",
        contact_week: "Seg-Sex: 8h-18h",
        contact_saturday: "Sábado: 9h-13h",
        
        // Form
        form_name: "Nome Completo *",
        form_email: "Email *",
        form_phone: "Telefone",
        form_service: "Serviço de Interesse",
        form_select: "Selecione um serviço",
        form_option1: "Remodelação e Design",
        form_option2: "Gestão de Imóveis",
        form_option3: "Alojamento Local",
        form_option4: "Outro",
        form_message: "Mensagem *",
        form_submit: "Enviar Mensagem",
        
        // Footer
        footer_slogan: "Transformamos imóveis em espaços atrativos, funcionais e rentáveis.",
        footer_quick_links: "Links Rápidos",
        footer_services: "Serviços",
        footer_newsletter: "Newsletter",
        footer_newsletter_text: "Subscreva para receber as últimas novidades",
        footer_email_placeholder: "Seu email",
        footer_rights: "Todos os direitos reservados.",
        footer_developed: "Desenvolvido por",
        
        // Notifications
        notif_lang_changed: "Idioma alterado para: Português",
        notif_success: "Mensagem enviada com sucesso! Entraremos em contacto em breve.",
        notif_error_required: "Por favor, preencha todos os campos obrigatórios (*).",
        notif_error_email: "Por favor, insira um email válido.",
        notif_error_phone: "Por favor, insira um número de telefone válido.",
        notif_newsletter_success: "Obrigado por subscrever a nossa newsletter!"
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_partners: "Partners",
        nav_contact: "Contact",
        nav_quote: "Request Quote",
        
        // Hero Section
        hero_title: "We transform properties into <span class='highlight'>attractive</span>, functional and profitable spaces",
        hero_subtitle: "Specialists in renovation, design and property management in Angola. We offer complete solutions from conception to operational management.",
        hero_btn_quote: "Request a Quote",
        hero_btn_services: "Our Services",
        
        // Stats
        stat_projects: "Projects Completed",
        stat_clients: "Happy Clients",
        stat_experience: "Years Experience",
        stat_support: "24/7 Support",
        
        // About Section
        about_subtitle: "Know our story",
        about_title: "About Us",
        about_description: "Prolinks is a company specialized in renovation, design and property management, created to transform properties into more attractive, functional and profitable spaces.",
        about_experience: "Years Experience",
        about_history_title: "Our History",
        about_history_text: "The company was born from the vision of its General Director, who identified in the Angolan market the need for integrated solutions capable of responding, professionally and efficiently, to the challenges of property valorization and management.",
        about_mission: "Mission",
        about_mission_text: "Transform properties into attractive, functional and profitable spaces through integrated solutions of renovation, design and property management.",
        about_vision: "Vision",
        about_vision_text: "To be a reference in the renovation, design and property management sector in Angola, recognized for excellence and innovation.",
        about_director_title: "General Director of Prolinks",
        about_director_quote: "\"We believe that every property has the potential to become extraordinary.\"",
        
        // Values Section
        values_title: "Our Values",
        values_subtitle: "Principles that guide our work and relationship with clients",
        value1_title: "Quality and Excellence",
        value1_text: "Commitment to high technical, aesthetic and operational standards in all our projects.",
        value2_title: "Innovation and Creativity",
        value2_text: "Modern and personalized solutions, combining functional design with the latest market trends.",
        value3_title: "Transparency and Trust",
        value3_text: "Relationships based on ethics, process clarity and continuous communication with our clients.",
        value4_title: "Sustainability",
        value4_text: "Conscious use of resources and responsible practices for a more sustainable future.",
        
        // Services Section
        services_subtitle: "What we offer",
        services_title: "Our Services",
        services_description: "Complete solutions to transform and manage your property",
        service1_title: "Property Management",
        service1_text: "Complete property administration to maximize income and ensure maintenance.",
        service1_feat1: "Property administration",
        service1_feat2: "Condominium management",
        service1_feat3: "General maintenance",
        service2_title: "Renovation and Design",
        service2_text: "We transform spaces through complete renovation and interior and exterior design.",
        service2_feat1: "Renovation and modernization",
        service2_feat2: "Interior design",
        service2_feat3: "Custom projects",
        service3_title: "Local Accommodation",
        service3_text: "Professional management of local accommodations to optimize income and offer excellence.",
        service3_feat1: "Airbnb management",
        service3_feat2: "Premium hospitality",
        service3_feat3: "Income optimization",
        service4_title: "Additional Services",
        service4_text: "We offer complementary services for a complete property management experience.",
        service4_feat1: "Service management",
        service4_feat2: "Shopping and meal preparation",
        service4_feat3: "Tourist packages",
        
        // Portfolio Section
        portfolio_title: "Our Work",
        portfolio_description: "Some of the projects we carry out with excellence",
        portfolio1_title: "Modern Residential",
        portfolio1_subtitle: "Complete renovation",
        portfolio2_title: "Commercial Space",
        portfolio2_subtitle: "Design and management",
        portfolio3_title: "Local Accommodation",
        portfolio3_subtitle: "Airbnb management",
        
        // Partners Section
        partners_title: "Our Partners",
        partners_description: "We collaborate with reference companies to offer the best service",
        
        // Contact Section
        contact_title: "Get in Touch",
        contact_description: "Have a project in mind? Let's talk!",
        contact_address: "Address",
        contact_phone: "Phone",
        contact_email: "Email",
        contact_hours: "Hours",
        contact_week: "Mon-Fri: 8am-6pm",
        contact_saturday: "Saturday: 9am-1pm",
        
        // Form
        form_name: "Full Name *",
        form_email: "Email *",
        form_phone: "Phone",
        form_service: "Service of Interest",
        form_select: "Select a service",
        form_option1: "Renovation and Design",
        form_option2: "Property Management",
        form_option3: "Local Accommodation",
        form_option4: "Other",
        form_message: "Message *",
        form_submit: "Send Message",
        
        // Footer
        footer_slogan: "We transform properties into attractive, functional and profitable spaces.",
        footer_quick_links: "Quick Links",
        footer_services: "Services",
        footer_newsletter: "Newsletter",
        footer_newsletter_text: "Subscribe to receive the latest news",
        footer_email_placeholder: "Your email",
        footer_rights: "All rights reserved.",
        footer_developed: "Developed by",
        
        // Notifications
        notif_lang_changed: "Language changed to: English",
        notif_success: "Message sent successfully! We will contact you soon.",
        notif_error_required: "Please fill in all required fields (*).",
        notif_error_email: "Please enter a valid email.",
        notif_error_phone: "Please enter a valid phone number.",
        notif_newsletter_success: "Thank you for subscribing to our newsletter!"
    }
};

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainMenu = document.getElementById('mainMenu');
const mainNav = document.getElementById('mainNav');

function toggleMobileMenu() {
    const isActive = mainMenu.classList.contains('active');
    
    mainMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    mainNav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    mobileMenuBtn.setAttribute('aria-expanded', !isActive);
    
    if (!isActive) {
        mainMenu.style.display = 'flex';
        mainMenu.style.visibility = 'visible';
        mainMenu.style.opacity = '1';
    } else {
        setTimeout(() => {
            mainMenu.style.display = 'none';
        }, 300);
    }
}

function closeMobileMenu() {
    mainMenu.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
    mainNav.classList.remove('active');
    document.body.classList.remove('menu-open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    
    setTimeout(() => {
        mainMenu.style.display = 'none';
    }, 300);
}

if (mobileMenuBtn && mainMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMobileMenu();
    });

    const menuLinks = document.querySelectorAll('.nav-link, .nav-btn');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    document.addEventListener('click', (e) => {
        if (mainMenu.classList.contains('active') && 
            !mainMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mainMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mainMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// Language Selector Functionality
const langButtons = document.querySelectorAll('.lang-btn');
let currentLang = localStorage.getItem('prolinks_lang') || 'pt';

// Function to update all text based on selected language
function updateLanguage(lang) {
    currentLang = lang;
    
    // Update active state on buttons
    langButtons.forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Save to localStorage
    localStorage.setItem('prolinks_lang', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Update placeholders separately
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update select options
    document.querySelectorAll('select option[data-i18n]').forEach(option => {
        const key = option.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            option.textContent = translations[lang][key];
        }
    });
    
    showNotification(translations[lang].notif_lang_changed, 'success');
}

// Initialize language
updateLanguage(currentLang);

// Add click handlers to language buttons
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang !== currentLang) {
            updateLanguage(lang);
        }
    });
});

// Animated Counter
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-count');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => animateCounter(counter), 10);
    } else {
        counter.innerText = target;
    }
};

const startCounterAnimation = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counters.forEach(counter => {
                animateCounter(counter);
            });
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(startCounterAnimation, {
    threshold: 0.5,
    rootMargin: '50px'
});

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    observer.observe(statsSection);
}

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            service: document.getElementById('service').value,
            message: document.getElementById('message').value.trim()
        };
        
        if (!formData.name || !formData.email || !formData.message) {
            showNotification(translations[currentLang].notif_error_required, 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showNotification(translations[currentLang].notif_error_email, 'error');
            return;
        }
        
        if (formData.phone) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(formData.phone)) {
                showNotification(translations[currentLang].notif_error_phone, 'error');
                return;
            }
        }
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLang === 'pt' ? 'Enviando...' : 'Sending...');
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification(translations[currentLang].notif_success, 'success');
            contactForm.reset();
            
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1500);
    });
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification(translations[currentLang].notif_error_email, 'error');
                return;
            }
            
            showNotification(translations[currentLang].notif_newsletter_success, 'success');
            newsletterForm.reset();
        }
    });
}

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Navigation Active State
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const headerHeight = document.querySelector('header').offsetHeight;
        
        if (window.scrollY >= (sectionTop - headerHeight - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.startsWith('#') && href.substring(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Notification System
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'assertive');
    
    const icon = type === 'success' ? 'check-circle' : 'exclamation-circle';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${icon}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" aria-label="${currentLang === 'pt' ? 'Fechar notificação' : 'Close notification'}"><i class="fas fa-times"></i></button>
    `;
    
    document.body.appendChild(notification);
    
    const autoRemove = setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
    
    notification.querySelector('.notification-close').addEventListener('click', () => {
        clearTimeout(autoRemove);
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    notification.addEventListener('mouseenter', () => {
        clearTimeout(autoRemove);
    });
    
    notification.addEventListener('mouseleave', () => {
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    });
}

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Portfolio item hover effect
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        header.style.boxShadow = '0 5px 20px rgba(91, 68, 62, 0.15)';
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.boxShadow = 'var(--shadow)';
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    }
});

// Add animation on scroll
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
};

const animationObserver = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.value-card, .service-card, .mv-card, .portfolio-item, .contact-card').forEach(el => {
    animationObserver.observe(el);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
    
    const buttons = document.querySelectorAll('button, [role="button"]');
    buttons.forEach(button => {
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Emergency menu fix function
function fixMobileMenu() {
    if (window.innerWidth <= 768 && mainMenu) {
        mainMenu.style.position = 'fixed';
        mainMenu.style.top = '0';
        mainMenu.style.left = '0';
        mainMenu.style.width = '100%';
        mainMenu.style.height = '100vh';
        mainMenu.style.zIndex = '9999';
        mainMenu.style.background = 'var(--white)';
        mainMenu.style.padding = '100px 30px 30px';
        mainMenu.style.display = 'flex';
        mainMenu.style.flexDirection = 'column';
        mainMenu.style.overflowY = 'auto';
        console.log('Mobile menu emergency fix applied');
    }
}

window.fixMobileMenu = fixMobileMenu;