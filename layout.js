// Header and Footer
const headerHTML = `
    <header>
        <a href="index.html" class="logo-container">
            <img src="logo.png" alt="Fairview Education Logo" class="logo-img" onerror="this.src='https://via.placeholder.com/60x60?text=Logo';">
            <div class="logo-text">Fairview <span>Education</span></div>
        </a>
        <div class="menu-btn"><i class="fas fa-bars"></i></div>
        <nav>
            <ul class="nav-links">
                <li><a href="index.html" id="nav-home">Home</a></li>
                <li><a href="about.html" id="nav-about">About</a></li>
                <li><a href="services.html" id="nav-services">Services</a></li>
                <li><a href="contact.html" id="nav-contact">Contact</a></li>
            </ul>
        </nav>
    </header>
`;

const footerHTML = `
    <footer>
        <div class="footer-content">
            <div class="footer-col animate-on-scroll">
                <div style="display:flex; align-items:center; gap:10px; margin-bottom: 1.5rem;">
                    <img src="logo.png" alt="Logo" style="width: 40px; height: 40px; object-fit: cover; border-radius: 50%;" onerror="this.src='https://via.placeholder.com/40x40?text=Logo';">
                    <h3 style="margin-bottom:0;">Fairview Education</h3>
                </div>
                <p>Empowering Nepalese students to become global leaders through world-class international education.</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="footer-col animate-on-scroll delay-1">
                <h3>Quick Links</h3>
                <a href="index.html">Home</a>
                <a href="about.html">About Us</a>
                <a href="services.html">Our Services</a>
                <a href="contact.html">Contact Us</a>
            </div>
            <div class="footer-col animate-on-scroll delay-2">
                <h3>Contact Info</h3>
                <div style="display:flex; gap:10px; margin-bottom:10px; color:#a0a0b0;">
                    <i class="fas fa-map-marker-alt" style="color:var(--secondary); margin-top:5px;"></i> 
                    <span>Balaju-16, Kathmandu, Nepal</span>
                </div>
                <div style="display:flex; gap:10px; margin-bottom:10px; color:#a0a0b0;">
                    <i class="fas fa-phone-alt" style="color:var(--secondary); margin-top:5px;"></i> 
                    <span>+977 01-4950227, 984179256</span>
                </div>
                <div style="display:flex; gap:10px; color:#a0a0b0;">
                    <i class="fas fa-envelope" style="color:var(--secondary); margin-top:5px;"></i> 
                    <span>fairview.edu2079@gmail.com</span>
                </div>
            </div>
        </div>
        <div class="copyright">&copy; Copyright 2026 Fairview Education Consultancy Pvt. Ltd. All Rights Reserved.</div>
    </footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (headerPlaceholder) headerPlaceholder.outerHTML = headerHTML;
    if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;

    const currentPage = document.body.dataset.page;
    if (currentPage) {
        const activeLink = document.getElementById('nav-' + currentPage);
        if (activeLink) activeLink.classList.add('active');
    }

    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars'); icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times'); icon.classList.add('fa-bars');
            }
        });
    }
});
