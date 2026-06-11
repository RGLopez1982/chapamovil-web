document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Scroll Header Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Mobile Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navOverlay = document.getElementById('nav-overlay');

    const toggleMenu = (open) => {
        const isOpen = open !== undefined ? open : !navMenu.classList.contains('open');
        navMenu.classList.toggle('open', isOpen);
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
        if (navOverlay) {
            navOverlay.classList.toggle('active', isOpen);
        }
        // Prevent scrolling body when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    hamburger.addEventListener('click', () => toggleMenu());

    if (navOverlay) {
        navOverlay.addEventListener('click', () => toggleMenu(false));
    }

    // Close menu when clicking links
    navLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(false));
    });

    // 4. Scrollspy: Active Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    });

    // 5. Sucursales & WhatsApp Data
    const branchesData = {
        'casa-central': {
            name: "Chapamovil Autopartes",
            address: "Av. Rivadavia 1299, Santiago del Estero",
            phone: "+54 9 385 513-5474",
            whatsapp: "5493855135474",
            hours: "Lun a Vie: 8:00 a 13:00 y 16:00 a 20:00<br>Sáb: 8:30 a 13:00",
            mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.9822998394464!2d-64.263884!3d-27.7949319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b5220c30222f7%3A0x6a2c9431ab46914f!2sRivadavia%201299%2C%20G4200%20Santiago%20del%20Estero!5e0!3m2!1ses-419!2sar!4v1717440000000!5m2!1ses-419!2sar",
            shortName: "Autopartes"
        },
        'pinturas': {
            name: "Chapamovil Pinturas",
            address: "Av. Rivadavia 1340, Santiago del Estero",
            phone: "+54 9 385 628-1309",
            whatsapp: "5493856281309",
            hours: "Lun a Vie: 8:00 a 13:00 y 16:00 a 20:00<br>Sáb: 8:30 a 13:00",
            mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.957597148569!2d-64.2647712!3d-27.7958933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b521ffea0c159%3A0x334460fbf839f9b5!2sRivadavia%201340%2C%20G4200%20Santiago%20del%20Estero!5e0!3m2!1ses-419!2sar!4v1717440100000!5m2!1ses-419!2sar",
            shortName: "Pinturas"
        },
        'banda': {
            name: "Chapamovil Sucursal Banda",
            address: "Alem 603, La Banda",
            phone: "+54 9 385 473-9612",
            whatsapp: "5493854739612",
            hours: "Lun a Vie: 8:00 a 13:00 y 16:00 a 20:00<br>Sáb: 8:30 a 13:00",
            mapIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.6454057622677!2d-64.2379980248928!3d-27.72823257617057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b515c39818cdb%3A0x92f48c1b2f9f4e54!2sAlem%20603%2C%20G4300%20La%20Banda%2C%20Santiago%20del%20Estero!5e0!3m2!1ses-419!2sar!4v1780523114696!5m2!1ses-419!2sar",
            shortName: "Sucursal Banda"
        }
    };

    let activeBranchId = 'casa-central';
    let selectedRubro = ''; // Holds if they clicked a specific product query

    const branchNameEl = document.getElementById('branch-name');
    const branchAddressEl = document.getElementById('branch-address');
    const branchPhoneEl = document.getElementById('branch-phone');
    const branchHoursEl = document.getElementById('branch-hours');
    const branchWhatsappBtn = document.getElementById('branch-whatsapp-btn');
    const branchMapContainer = document.getElementById('branch-map-container');
    const mapPlaceholder = document.getElementById('map-placeholder');

    const tabButtons = document.querySelectorAll('.tab-btn');

    // Function to update current branch UI
    function updateBranchUI(branchId) {
        activeBranchId = branchId;
        const data = branchesData[branchId];

        branchNameEl.textContent = data.name;
        branchAddressEl.textContent = data.address;
        branchPhoneEl.textContent = data.phone;
        branchHoursEl.innerHTML = data.hours;

        // WhatsApp query text
        const messageText = 'Hola Chapamovil, vi la página web y quería consultar por un producto...';

        const encodedMessage = encodeURIComponent(messageText);
        branchWhatsappBtn.setAttribute('href', `https://wa.me/${data.whatsapp}?text=${encodedMessage}`);

        // Update Map Frame
        loadMap(branchId);
    }

    // Lazy Map Loading Function
    function loadMap(branchId) {
        const data = branchesData[branchId];
        
        // Remove existing map frame if any
        const existingIframe = branchMapContainer.querySelector('iframe');
        if (existingIframe) {
            existingIframe.remove();
        }

        // Hide placeholder and append iframe
        mapPlaceholder.style.opacity = '0';
        mapPlaceholder.style.pointerEvents = 'none';

        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', data.mapIframe);
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('loading', 'lazy');
        iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = '0';
        
        branchMapContainer.appendChild(iframe);
    }

    // Tab buttons event listeners
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateBranchUI(btn.getAttribute('data-branch'));
        });
    });

    // Map placeholder click trigger (alternative load)
    mapPlaceholder.addEventListener('click', () => {
        loadMap(activeBranchId);
    });

    // 6. Rubros Consultation CTA Linkage
    const rubroCtas = document.querySelectorAll('.rubro-cta');
    rubroCtas.forEach(cta => {
        cta.addEventListener('click', (e) => {
            e.preventDefault();
            selectedRubro = cta.getAttribute('data-rubro');
            
            // Highlight/Select appropriate sucursal branch for paints vs general parts if desired
            // (e.g. if category is Paint, switch tab to Chapamovil Pinturas)
            if (selectedRubro === 'Pintura Automotor') {
                tabButtons.forEach(b => b.classList.remove('active'));
                document.getElementById('tab-pinturas').classList.add('active');
                updateBranchUI('pinturas');
            } else {
                // For other categories, default back or keep current
                tabButtons.forEach(b => b.classList.remove('active'));
                document.getElementById('tab-casa-central').classList.add('active');
                updateBranchUI('casa-central');
            }

            // Smooth scroll to sucursales
            const targetSection = document.getElementById('sucursales');
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Trigger initial UI setup
    updateBranchUI('casa-central');

    // 8. Lazy load maps using IntersectionObserver
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadMap(activeBranchId);
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '200px' });
        
        observer.observe(document.getElementById('sucursales'));
    } else {
        // Fallback for older browsers
        loadMap(activeBranchId);
    }

    // Helper to hide Elfsight watermark (even inside Shadow DOM)
    const hideElfsightWatermark = () => {
        // Normal DOM
        const normalElements = document.querySelectorAll('a[href*="elfsight.com"], [class*="eapps-link"]');
        normalElements.forEach(el => el.style.setProperty('display', 'none', 'important'));

        // Shadow DOM (Web Components)
        const widgets = document.querySelectorAll('[class*="elfsight-app-"]');
        widgets.forEach(widget => {
            if (widget.shadowRoot) {
                const shadowElements = widget.shadowRoot.querySelectorAll('a[href*="elfsight.com"], [class*="eapps-link"]');
                shadowElements.forEach(el => el.style.setProperty('display', 'none', 'important'));
            }
        });
    };
    setInterval(hideElfsightWatermark, 300);
});
