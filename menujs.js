// common.js - Enhanced Clickable Menu Bar
class CommonComponents {
    constructor() {
        this.menuConfig = {
            mainMenu: [
                { text: 'Home', href: 'index.html', icon: 'fas fa-home' },
                { 
                    text: 'About Us', 
                    href: '#', 
                    icon: 'fas fa-info-circle',
                    submenu: [
                        { text: 'Admission', href: '#', icon: 'fas fa-user-graduate' },
{ text: 'Board Of Trustees', href: '#', icon: 'fas fa-users' },
{ text: 'Courses Offered', href: '#', icon: 'fas fa-book' },
{ text: "Managing Trustee's Message", href: '#', icon: 'fas fa-envelope' },
{ text: "Secretary's Message", href: '#', icon: 'fas fa-envelope' },
{ text: "Principal's Message", href: '#', icon: 'fas fa-user-tie' }
                    ]
                },
                { 
                    text: 'Academics', 
                    href: '#', 
                    icon: 'fas fa-graduation-cap',
                    submenu: [
                        { text: 'Departments', href: '#', icon: 'fas fa-building' },
{ text: 'Academic Schedule', href: '#', icon: 'fas fa-calendar-alt' },
{ text: 'Parents-Teachers Meeting', href: '#', icon: 'fas fa-handshake' },
{ text: 'Academic Performance', href: '#', icon: 'fas fa-chart-line' },
{ text: 'AICTE Approval', href: '#', icon: 'fas fa-file-certificate' },
{ text: 'Academic Calendar', href: '#', icon: 'fas fa-calendar' },
{ text: 'Student Counsellor', href: '#', icon: 'fas fa-comments' },
{ text: 'Best Practices', href: '#', icon: 'fas fa-star' }
                    ]
                },
                { 
                    text: 'Facilities', 
                    href: '#', 
                    icon: 'fas fa-wrench',
                    submenu: [
                        { text: 'Infrastructure', href: 'infrastructure.php', icon: 'fas fa-building' },
                        { text: 'Library', href: 'library.php', icon: 'fas fa-book' },
                        { text: 'Laboratories', href: 'labs.php', icon: 'fas fa-microscope' },
                        { text: 'Hostels', href: 'hostels.php', icon: 'fas fa-bed' },
                        { text: 'Sports', href: 'sports.php', icon: 'fas fa-running' }
                    ]
                },
                { 
                    text: 'Social Services', 
                    href: '', 
                    icon: 'fas fa-hands-helping',
                    submenu: [
                        { text: 'NSS', href: 'NSS.html', icon: 'fas fa-users' },
                        { text: 'Red Ribbon Club', href: 'redribbon.html', icon: 'fas fa-ribbon' },
                        { text: 'Rotaract Club', href: 'ROTARACTCLUB.html', icon: 'fas fa-handshake' },
                        { text: 'Youth Red Cross', href: 'youthredcross.html', icon: 'fas fa-cross' },
                        { text: 'Blood Donation', href: 'blooddonation.html', icon: 'fas fa-tint' }
                    ]
                },
                { 
                    text: 'Social Services', 
                    href: 'NSS.html', 
                    icon: 'fas fa-award'
                },
                { 
                    text: 'Gallery', 
                    href: 'gallery.php', 
                    icon: 'fas fa-images'
                },
                { 
                    text: 'Careers', 
                    href: 'Careers.html', 
                    icon: 'fas fa-briefcase'
                },
                { 
                    text: 'Contact Us', 
                    href: 'CONTACTUS.html', 
                    icon: 'fas fa-phone'
                },
                { 
                    text: 'Help Desk', 
                    href: 'helpdesk.html', 
                    icon: 'fas fa-headset'
                }
            ]
        };
        
        this.init();
    }

    init() {
        this.loadHeader();
        this.loadFooter();
        this.setupEventListeners();
    }

    loadHeader() {
        const header = document.getElementById('header');
        if (!header) return;

        header.innerHTML = `
            <div class="container header-container">
                <!-- Logo Area - Always Left -->
                <div class="logo-area">
                    <a href="index.html" class="logo">
                        <div class="logo-img">
                            <img src="Screenshot_2025_1111_214658.jpg">

   </div>
                        <div class="logo-text">
                            <h1>GTEC</h1>
                            <p>Ganadipathy Tulsi's Jain Engineering College</p>
                        </div>
                    </a>
                </div>
                
                <!-- Desktop Navigation - Center/Right -->
                <nav class="desktop-nav">
                    <ul>${this.generateMenuHTML('desktop')}</ul>
                </nav>
                
                <!-- Mobile Controls - Always Right -->
                <div class="mobile-controls">
                    <button class="menu-toggle" id="menuToggle">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
            
            <div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
            <div class="mobile-nav" id="mobileNav">
                <div class="mobile-nav-header">
                    <div class="mobile-logo">
                        <div class="mobile-logo-img">
                            <img src="Screenshot_2025_1111_214658.jpg">
 </div>
                        <div class="mobile-logo-text">
                            <h2>GTEC</h2>
                        </div>
                    </div>
                    <button class="close-menu" id="closeMenu">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <ul>${this.generateMenuHTML('mobile')}</ul>
            </div>
        <div class="news-ticker">
        <span class="scroll-text">
        Estd.2000 | Affiliated to Anna University | Approved by 
        <span class="highlight">AICTE</span> | 
        NAAC Accredited, ISO 9001: 2015 Certified Institution |
        
   TNEA code:1507 </span>
</div>
        `;

        this.setupDesktopDropdowns();
        this.setupMobileMenu();
        this.highlightCurrentPage();
    }

    loadFooter() {
        const footer = document.getElementById('footer');
        if (!footer) return;

        footer.innerHTML = `
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Contact Information</h3>
                        <p><i class="fas fa-map-marker-alt"></i> Ganadipathy Tulsi's Jain Engineering College,
Chittoor-Cuddalore Road,
Kaniyambadi,
Vellore-632 102, Tamil Nadu, India</p>
                        <p><i class="fas fa-phone"></i> +91 8572 123456</p>
                        <p><i class="fas fa-envelope"></i> info@gtec.ac.in</p>
                        <p><i class="fas fa-globe"></i> www.gtec.ac.in</p>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <a href="index.html">Home</a>
                        <a href="about.html">About GTEC</a>
                        <a href="admissions.html">Admissions</a>
                        <a href="departments.html">Departments</a>
                        <a href="facilities.html">Facilities</a>
                        <a href="placements.html">Placements</a>
                    </div>
                    <div class="footer-section">
                        <h3>Academics</h3>
                        <a href="cse.html">CSE Department</a>
                        <a href="gtec_ece.html">ECE Department</a>
               <a href="ece.html">EEE Department</a>
                        <a href="gtec_ece.html">AI&DS Department</a>
                        
                        <a href="ece.html">CS&BS Department</a>
                        
                        <a href="IT.html">IT Department</a>
                        <a href="MECH.html">Mechanical Department</a>
                        <a href="civil.html">Civil Engineering</a>
                        <a href="library.html">Library</a>
                    </div>
                </div>
                <div class="footer-bottom">
                        <pre>
        &copy; 2025 GTEC. All rights reserved.
       <a href="D&P.html" class="department-card"> <img src="IMG-20251120-WA0004.jpg" alt="Designer Logo" style="height:20px; vertical-align:middle; margin:0 5px;">Designed by D & P</a>
    </pre> </div>
            </div>
            
            <a href="#" class="back-to-top" id="backToTop">
                <i class="fas fa-chevron-up"></i>
            </a>
        `;

        this.setupBackToTop();
    }

    generateMenuHTML(type) {
        return this.menuConfig.mainMenu.map(item => {
            if (item.submenu) {
                return `
                    <li class="dropdown">
                        <a href="${item.href}" class="dropdown-toggle">
                            ${type === 'mobile' ? `<i class="${item.icon}"></i>` : ''}
                            ${item.text}
                            <i class="fas fa-chevron-down dropdown-arrow"></i>
                        </a>
                        <div class="dropdown-content">
                            ${item.submenu.map(subItem => `
                                <a href="${subItem.href}">
                                    ${type === 'mobile' ? `<i class="${subItem.icon}"></i>` : ''}
                                    ${subItem.text}
                                </a>
                            `).join('')}
                        </div>
                    </li>
                `;
            }
            return `
                <li>
                    <a href="${item.href}">
                        ${type === 'mobile' ? `<i class="${item.icon}"></i>` : ''}
                        ${item.text}
                    </a>
                </li>
            `;
        }).join('');
    }

    setupDesktopDropdowns() {
    const desktopDropdowns = document.querySelectorAll('.desktop-nav .dropdown');
    
    desktopDropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        // Click to toggle dropdown
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth > 1100) { // Only on desktop
                e.preventDefault();
                e.stopPropagation();
                
                // Close other dropdowns
                desktopDropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                dropdown.classList.toggle('active');
            }
        });
        
        // Hover functionality for desktop
        dropdown.addEventListener('mouseenter', () => {
            if (window.innerWidth > 1100) {
                dropdown.classList.add('active');
            }
        });
        
        dropdown.addEventListener('mouseleave', () => {
            if (window.innerWidth > 1100) {
                dropdown.classList.remove('active');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.desktop-nav .dropdown')) {
            desktopDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Close dropdowns on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            desktopDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}
    setupMobileMenu() {
        const menuToggle = document.getElementById('menuToggle');
        const mobileNav = document.getElementById('mobileNav');
        const mobileNavOverlay = document.getElementById('mobileNavOverlay');
        const closeMenu = document.getElementById('closeMenu');

        if (menuToggle && mobileNav) {
            // Mobile menu toggle
            menuToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });

            // Close menu functionality
            const closeMobileMenu = () => {
                mobileNav.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            };

            if (closeMenu) closeMenu.addEventListener('click', closeMobileMenu);
            if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeMobileMenu);

            // Mobile dropdown functionality
            const mobileDropdowns = document.querySelectorAll('.mobile-nav .dropdown');
            mobileDropdowns.forEach(dropdown => {
                const toggle = dropdown.querySelector('.dropdown-toggle');
                
                toggle.addEventListener('click', (e) => {
                    if (window.innerWidth <= 1100) { // Only on mobile
                        e.preventDefault();
                        e.stopPropagation();
                        
                        // Close other dropdowns
                        mobileDropdowns.forEach(otherDropdown => {
                            if (otherDropdown !== dropdown) {
                                otherDropdown.classList.remove('active');
                            }
                        });
                        
                        // Toggle current dropdown
                        dropdown.classList.toggle('active');
                    }
                });
            });

            // Close mobile menu when clicking on regular links
            document.querySelectorAll('.mobile-nav a:not(.dropdown-toggle)').forEach(link => {
                link.addEventListener('click', () => {
                    closeMobileMenu();
                });
            });
        }
    }

    toggleMobileMenu() {
        const menuToggle = document.getElementById('menuToggle');
        const mobileNav = document.getElementById('mobileNav');
        const mobileNavOverlay = document.getElementById('mobileNavOverlay');

        if (mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            mobileNavOverlay.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            mobileNav.classList.add('active');
            mobileNavOverlay.classList.add('active');
            menuToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    setupEventListeners() {
        // Scroll effects
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            const backToTop = document.getElementById('backToTop');
            const scrolled = window.scrollY > 100;

            if (header) header.classList.toggle('scrolled', scrolled);
            if (backToTop) backToTop.classList.toggle('active', scrolled);
        });

        // Smooth scrolling for anchor links
        document.addEventListener('click', (e) => {
            if (e.target.matches('a[href^="#"]') && e.target.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    const headerHeight = document.getElementById('header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });

        // Close dropdowns on window resize
        window.addEventListener('resize', () => {
            // Close all dropdowns on resize
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            
            // Close mobile menu if open on desktop
            if (window.innerWidth > 1100) {
                const mobileNav = document.getElementById('mobileNav');
                const mobileNavOverlay = document.getElementById('mobileNavOverlay');
                const menuToggle = document.getElementById('menuToggle');
                
                if (mobileNav && mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    mobileNavOverlay.classList.remove('active');
                    menuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    }

    setupBackToTop() {
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            backToTop.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    highlightCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const links = document.querySelectorAll('nav a[href]:not(.dropdown-toggle)');
        
        links.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || 
                (currentPage === 'index.html' && (linkHref === 'index.html' || linkHref === './'))) {
                link.classList.add('active');
                
                // Also highlight parent dropdown
                const parentDropdown = link.closest('.dropdown');
                if (parentDropdown) {
                    parentDropdown.classList.add('active');
                }
            }
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new CommonComponents();
});
