import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    // ===== REGALIS UNIVERSAL NAVBAR JS =====
    const hamburger = document.getElementById('navHamburger');
    const navLinks = document.getElementById('navLinks');
    const overlay = document.getElementById('navOverlay');

    function openMenu() {
      if (hamburger) hamburger.classList.add('open');
      if (navLinks) navLinks.classList.add('open');
      if (overlay) overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      if (hamburger) hamburger.classList.remove('open');
      if (navLinks) navLinks.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    const toggleMenu = function() {
      if (navLinks && navLinks.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    };

    if (hamburger) {
      hamburger.addEventListener('click', toggleMenu);
    }

    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }

    // Close menu when a link is clicked
    if (navLinks) {
      navLinks.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', closeMenu);
      });
    }
    // ===== END NAVBAR JS =====

    // Set active page — CHANGE THE VALUE BELOW FOR EACH APP
    const activeLink = document.querySelector('.nav-link[data-page="contact"]');
    if (activeLink) {
      activeLink.classList.add('active');
    }

    return () => {
      if (hamburger) hamburger.removeEventListener('click', toggleMenu);
      if (overlay) overlay.removeEventListener('click', closeMenu);
      if (navLinks) {
        navLinks.querySelectorAll('.nav-link').forEach(function(link) {
          link.removeEventListener('click', closeMenu);
        });
      }
    };
  }, []);

  return (
    <>
      <nav className="regalis-nav" id="regalisNav">
        <div className="nav-inner">
          <a href="https://www.regalisrealtymedia.com" className="nav-logo">
            <img src="https://cdn.prod.website-files.com/6695980889d8d99cedb29bc7/66c7f601fff376e4c95274b3_Regalis%20Realty%20Main%20Logo%20(1).png" alt="Regalis Realty Media" className="nav-logo-img" />
          </a>
          <div className="nav-links" id="navLinks">
            <a href="https://www.regalisrealtymedia.com" className="nav-link" data-page="home">Home</a>
            <a href="https://regalisrealtymedia25.pixieset.com/regalisrealtymediaportfolio/compassphotos/" className="nav-link" data-page="portfolio" target="_blank" rel="noreferrer">Portfolio</a>
            <a href="https://pricing.regalisrealtymedia.com" className="nav-link" data-page="pricing">Pricing</a>
            <a href="https://calculator.regalisrealtymedia.com" className="nav-link" data-page="calculator">Calculator</a>
            <a href="https://catalog.regalisrealtymedia.com" className="nav-link" data-page="catalog">Catalog</a>
            <a href="https://branding.regalisrealtymedia.com" className="nav-link" data-page="branding">Branding</a>
            <a href="https://portal.regalisrealtymedia.com" className="nav-link" data-page="portal">Portal</a>
            <a href="https://contactus.regalisrealtymedia.com" className="nav-link" data-page="contact">Contact</a>
            <a href="https://prep.regalisrealtymedia.com" className="nav-link" data-page="checklist">Listing Checklist</a>
          </div>
          <button className="nav-hamburger" id="navHamburger" aria-label="Toggle menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>
      <div className="nav-overlay" id="navOverlay"></div>
    </>
  );
}
