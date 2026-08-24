import React, { useState, useEffect } from "react";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { Menu, Search, PhoneCall } from "lucide-react";

export default function Header({ onNavigate, currentPage, currentSubId }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenuKey, setActiveMenuKey] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (key) => {
    if (activeMenuKey === key) {
      setActiveMenuKey(null);
    } else {
      setActiveMenuKey(key);
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? "is-scrolled" : "is-hero"} ${activeMenuKey ? "menu-open" : ""}`}>
        <div className="header-container container">
          {/* Logo on Left */}
          <div className="header-logo-container" onClick={() => onNavigate("home")}>
            <img 
              src="/Nexat Logo  - English.png" 
              alt="NEXAT Logo" 
              className="header-logo" 
            />
          </div>

          {/* Desktop Nav Links in Center */}
          <nav className="header-nav">
            <ul className="nav-links">
              <li>
                <button 
                  onClick={() => handleMenuClick("about")}
                  className={`nav-btn ${activeMenuKey === "about" ? "active" : ""}`}
                >
                  About NEXAT
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleMenuClick("divisions")}
                  className={`nav-btn ${activeMenuKey === "divisions" ? "active" : ""}`}
                >
                  Browse Divisions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleMenuClick("methodology")}
                  className={`nav-btn ${activeMenuKey === "methodology" ? "active" : ""}`}
                >
                  Our Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleMenuClick("contact")}
                  className={`nav-btn ${activeMenuKey === "contact" ? "active" : ""}`}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </nav>

          {/* Actions on Right */}
          <div className="header-actions">
            <button className="action-btn desktop-only" onClick={() => onNavigate("contact")}>
              <PhoneCall size={18} />
              <span>Inquire</span>
            </button>
            <button className="action-btn search-icon-btn">
              <Search size={18} />
            </button>
            <button 
              className="action-btn burger-menu-btn" 
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <MegaMenu 
          activeKey={activeMenuKey} 
          onClose={() => setActiveMenuKey(null)}
          onNavigate={onNavigate}
        />
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={onNavigate}
      />
    </>
  );
}
