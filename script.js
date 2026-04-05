// Modern JavaScript for Jessy Nail Studio
class NailStudioBooking {
    constructor() {
        this.selectedServices = [];
        this.totalAmount = 0;
        this.phoneNumber = "5548991750255";
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupNavigation();
        this.setupScrollAnimations();
        this.setupFormValidation();
        this.setMinDate();
        this.setupGalleryLightbox();
    }

    setupEventListeners() {
        // Service checkboxes
        const checkboxes = document.querySelectorAll('.service-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => this.calculateTotal());
        });

        // Booking form
        const bookingForm = document.getElementById('bookingForm');
        if (bookingForm) {
            bookingForm.addEventListener('submit', (e) => this.handleBookingSubmit(e));
        }

        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleSmoothScroll(e));
        });
    }

    setupNavigation() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                const icon = navToggle.querySelector('i');
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            });

            // Close menu when clicking on a link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    const icon = navToggle.querySelector('i');
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                });
            });
        }
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.service-card, .contact-card, .gallery-item-new, .value-card');
        animateElements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }

    setupFormValidation() {
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                this.formatPhoneNumber(e.target);
            });
        }
    }

    setMinDate() {
        const dateInput = document.getElementById('date');
        if (dateInput) {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            dateInput.min = tomorrow.toISOString().split('T')[0];
        }
    }

    calculateTotal() {
        const checkboxes = document.querySelectorAll('.service-checkbox:checked');
        this.selectedServices = [];
        this.totalAmount = 0;

        checkboxes.forEach(checkbox => {
            const serviceName = checkbox.getAttribute('data-name');
            const servicePrice = parseFloat(checkbox.value);
            
            this.selectedServices.push({
                name: serviceName,
                price: servicePrice
            });
            
            this.totalAmount += servicePrice;
        });

        this.updateTotalDisplay();
        this.updateWhatsAppButton();
    }

    updateTotalDisplay() {
        const totalElement = document.getElementById('display-total');
        const servicesElement = document.getElementById('selected-services');
        
        if (totalElement) {
            totalElement.textContent = `R$ ${this.totalAmount.toFixed(2)}`;
        }

        if (servicesElement) {
            if (this.selectedServices.length > 0) {
                const servicesList = this.selectedServices
                    .map(service => `${service.name} - R$ ${service.price.toFixed(2)}`)
                    .join(' | ');
                servicesElement.innerHTML = `<span class="services-list">${servicesList}</span>`;
            } else {
                servicesElement.innerHTML = '<span class="services-placeholder">Selecione os serviços desejados</span>';
            }
        }
    }

    updateWhatsAppButton() {
        const btnZap = document.getElementById('btn-zap');
        if (!btnZap) return;

        const formData = this.getFormData();
        
        if (this.selectedServices.length === 0) {
            btnZap.innerHTML = '<i class="fab fa-whatsapp"></i> Selecione os serviços primeiro';
            btnZap.disabled = true;
            btnZap.style.opacity = '0.6';
            btnZap.href = '#';
            return;
        }

        btnZap.disabled = false;
        btnZap.style.opacity = '1';
        
        const message = this.buildWhatsAppMessage(formData);
        const encodedMessage = encodeURIComponent(message);
        btnZap.href = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodedMessage}`;
    }

    getFormData() {
        const form = document.getElementById('bookingForm');
        if (!form) return {};

        return {
            name: form.name?.value || '',
            phone: form.phone?.value || '',
            date: form.date?.value || '',
            time: form.time?.value || '',
            notes: form.notes?.value || ''
        };
    }

    buildWhatsAppMessage(formData) {
        let message = "🌟 *NOVO AGENDAMENTO - JESSY NAIL STUDIO* 🌟\n\n";
        
        message += "📝 *DADOS DO CLIENTE:*\n";
        message += `👤 Nome: ${formData.name || 'Não informado'}\n`;
        message += `📱 WhatsApp: ${formData.phone || 'Não informado'}\n\n`;
        
        message += "📅 *AGENDAMENTO:*\n";
        message += `🗓️ Data: ${this.formatDate(formData.date)}\n`;
        message += `⏰ Horário: ${formData.time || 'Não informado'}\n\n`;
        
        message += "💅 *SERVIÇOS SELECIONADOS:*\n";
        this.selectedServices.forEach((service, index) => {
            message += `✅ ${service.name} - R$ ${service.price.toFixed(2)}\n`;
        });
        
        message += `\n💰 *TOTAL: R$ ${this.totalAmount.toFixed(2)}*\n\n`;
        
        if (formData.notes) {
            message += `📝 *Observações:*\n${formData.notes}\n\n`;
        }
        
        message += "🎉 Por favor, confirme a disponibilidade deste horário!\n";
        message += "Aguardo sua confirmação. 🤗";
        
        return message;
    }

    formatDate(dateString) {
        if (!dateString) return 'Não informada';
        
        const date = new Date(dateString);
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return date.toLocaleDateString('pt-BR', options);
    }

    formatPhoneNumber(input) {
        let value = input.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
            if (value.length <= 10) {
                value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
            } else {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            }
        }
        
        input.value = value;
    }

    handleSmoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    handleBookingSubmit(e) {
        e.preventDefault();
        
        if (this.selectedServices.length === 0) {
            this.showNotification('Por favor, selecione pelo menos um serviço!', 'error');
            return;
        }
        
        const formData = this.getFormData();
        
        if (!formData.name || !formData.phone || !formData.date || !formData.time) {
            this.showNotification('Por favor, preencha todos os campos obrigatórios!', 'error');
            return;
        }
        
        // Update WhatsApp button and trigger click
        this.updateWhatsAppButton();
        const btnZap = document.getElementById('btn-zap');
        
        if (btnZap && btnZap.href && btnZap.href !== '#') {
            // Show success message
            this.showNotification('Redirecionando para o WhatsApp...', 'success');
            
            // Open WhatsApp after a short delay
            setTimeout(() => {
                window.open(btnZap.href, '_blank');
            }, 1000);
        }
    }

    showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            max-width: 300px;
        `;
        
        // Set background color based on type
        switch (type) {
            case 'success':
                notification.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
                break;
            case 'error':
                notification.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
                break;
            default:
                notification.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
        }
        
        document.body.appendChild(notification);
        
        // Remove notification after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 4000);
    }

    setupGalleryLightbox() {
        const galleryItems = document.querySelectorAll('.gallery-item-new');
        
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const overlay = item.querySelector('.overlay-content');
                const title = overlay.querySelector('h3').textContent;
                const description = overlay.querySelector('p').textContent;
                this.createLightbox(img.src, img.alt, title, description);
            });
        });
    }

    createLightbox(imageSrc, imageAlt, imageTitle, imageDescription) {
        // Remove existing lightbox
        const existingLightbox = document.querySelector('.lightbox-gallery');
        if (existingLightbox) {
            existingLightbox.remove();
        }

        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-gallery';
        lightbox.innerHTML = `
            <div class="lightbox-content-gallery">
                <button class="lightbox-close-gallery">&times;</button>
                <div class="lightbox-image-container">
                    <img src="${imageSrc}" alt="${imageAlt}">
                    <div class="lightbox-info">
                        <h3 class="lightbox-title">${imageTitle}</h3>
                        <p class="lightbox-description">${imageDescription}</p>
                    </div>
                </div>
            </div>
        `;
        
        // Add styles
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
            animation: fadeIn 0.3s ease;
        `;
        
        const content = lightbox.querySelector('.lightbox-content-gallery');
        content.style.cssText = `
            position: relative;
            max-width: 90%;
            max-height: 90%;
            animation: slideUp 0.3s ease;
        `;
        
        const imageContainer = lightbox.querySelector('.lightbox-image-container');
        imageContainer.style.cssText = `
            position: relative;
            text-align: center;
        `;
        
        const lightboxImg = content.querySelector('img');
        lightboxImg.style.cssText = `
            max-width: 100%;
            max-height: 70vh;
            border-radius: var(--border-radius-lg);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        `;
        
        const info = content.querySelector('.lightbox-info');
        info.style.cssText = `
            position: absolute;
            bottom: -80px;
            left: 0;
            right: 0;
            color: white;
            text-align: center;
            padding: 1rem;
        `;
        
        const title = content.querySelector('.lightbox-title');
        title.style.cssText = `
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        `;
        
        const description = content.querySelector('.lightbox-description');
        description.style.cssText = `
            font-size: 1rem;
            opacity: 0.9;
            line-height: 1.4;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        `;
        
        const closeBtn = content.querySelector('.lightbox-close-gallery');
        closeBtn.style.cssText = `
            position: absolute;
            top: -40px;
            right: 0;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition-normal);
        `;
        
        closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.background = 'rgba(255, 255, 255, 0.3)';
        });
        
        closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        
        document.body.appendChild(lightbox);
        
        // Close events
        const closeLightbox = () => {
            lightbox.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                if (lightbox.parentNode) {
                    lightbox.remove();
                }
            }, 300);
        };
        
        lightbox.addEventListener('click', closeLightbox);
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeLightbox();
        });
        
        // Close on escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeLightbox();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(style);

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NailStudioBooking();
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        // Gallery lightbox effect
        this.setupGalleryLightbox();
    }
});

// Gallery lightbox effect
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${img.src}" alt="${img.alt}">
                    <button class="lightbox-close">&times;</button>
                </div>
            `;
            
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                cursor: pointer;
            `;
            
            const content = lightbox.querySelector('.lightbox-content');
            content.style.cssText = `
                position: relative;
                max-width: 90%;
                max-height: 90%;
            `;
            
            const lightboxImg = content.querySelector('img');
            lightboxImg.style.cssText = `
                width: 100%;
                height: auto;
                border-radius: 8px;
            `;
            
            const closeBtn = content.querySelector('.lightbox-close');
            closeBtn.style.cssText = `
                position: absolute;
                top: -40px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 2rem;
                cursor: pointer;
            `;
            
            document.body.appendChild(lightbox);
            
            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
            
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                lightbox.remove();
            });
        });
    });
});
