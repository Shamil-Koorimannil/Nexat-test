import React, { useState } from "react";
import { companyData } from "../../data/companyData";
import { X, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

export default function MobileMenu({ isOpen, onClose, onNavigate }) {
  const [openSection, setOpenSection] = useState(null);

  if (!isOpen) return null;

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const handleLinkClick = (page, subId = null) => {
    onNavigate(page, subId);
    onClose();
  };

  return (
    <div className={`mobile-menu-overlay ${isOpen ? "is-open" : ""}`} onClick={onClose}>
      <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-menu-header">
          <img 
            src="/Nexat Logo  - English.png" 
            alt="NEXAT Logo" 
            className="mobile-menu-logo" 
          />
          <button className="mobile-menu-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-menu-nav">
          <ul className="mobile-menu-links">
            {/* About */}
            <li className="mobile-menu-item">
              <button className="mobile-menu-trigger" onClick={() => toggleSection("about")}>
                <span>About NEXAT</span>
                {openSection === "about" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openSection === "about" && (
                <ul className="mobile-menu-sublinks">
                  <li>
                    <button onClick={() => handleLinkClick("about")}>Company Story</button>
                  </li>
                  <li>
                    <button onClick={() => handleLinkClick("about")}>Vision & Mission</button>
                  </li>
                  <li>
                    <button onClick={() => handleLinkClick("about")}>Core Values</button>
                  </li>
                </ul>
              )}
            </li>

            {/* Divisions */}
            <li className="mobile-menu-item">
              <button className="mobile-menu-trigger" onClick={() => toggleSection("divisions")}>
                <span>Our Divisions</span>
                {openSection === "divisions" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openSection === "divisions" && (
                <ul className="mobile-menu-sublinks">
                  {companyData.divisions.map((div) => (
                    <li key={div.id}>
                      <button onClick={() => handleLinkClick("division", div.id)}>
                        {div.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Projects */}
            <li className="mobile-menu-item">
              <button className="mobile-menu-trigger" onClick={() => handleLinkClick("projects")}>
                <span>Projects Showcase</span>
                <ArrowRight size={18} />
              </button>
            </li>

            {/* Methodology */}
            <li className="mobile-menu-item">
              <button className="mobile-menu-trigger" onClick={() => handleLinkClick("methodology")}>
                <span>Our Process</span>
                <ArrowRight size={18} />
              </button>
            </li>

            {/* Advantages */}
            <li className="mobile-menu-item">
              <button className="mobile-menu-trigger" onClick={() => handleLinkClick("advantages")}>
                <span>Advantages & Tech</span>
                <ArrowRight size={18} />
              </button>
            </li>

            {/* Contact */}
            <li className="mobile-menu-item">
              <button className="mobile-menu-trigger" onClick={() => handleLinkClick("contact")}>
                <span>Contact Us</span>
                <ArrowRight size={18} />
              </button>
            </li>
          </ul>
        </nav>

        <div className="mobile-menu-footer">
          <span className="eyebrow-label">Riyadh Head Office</span>
          <p className="body-small text-muted" style={{ margin: "0.5rem 0 1.5rem 0" }}>
            {companyData.contact.address}<br />
            Phone: {companyData.contact.phone}<br />
            Email: {companyData.contact.email}
          </p>
          <div className="mobile-menu-languages">
            <span className="lang-active">EN</span>
            <span className="lang-divider">|</span>
            <span className="lang-inactive">AR</span>
          </div>
        </div>
      </div>
    </div>
  );
}
