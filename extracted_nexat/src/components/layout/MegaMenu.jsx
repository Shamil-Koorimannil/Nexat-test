import React from "react";
import { companyData } from "../../data/companyData";
import { ArrowRight, X } from "lucide-react";

export default function MegaMenu({ activeKey, onClose, onNavigate }) {
  if (!activeKey) return null;

  const renderContent = () => {
    switch (activeKey) {
      case "divisions":
        return (
          <div className="megamenu-grid">
            <div className="megamenu-col main-links">
              <span className="eyebrow-label">NEXAT Divisions</span>
              <ul className="megamenu-list">
                {companyData.divisions.map((div) => (
                  <li key={div.id}>
                    <button 
                      onClick={() => { onNavigate("division", div.id); onClose(); }}
                      className="megamenu-link animated-border"
                    >
                      <span className="link-num">{div.num}</span>
                      <span className="link-text">{div.title}</span>
                      <ArrowRight className="link-icon" size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="megamenu-col detail-panel">
              <span className="eyebrow-label">Capabilities Overview</span>
              <p className="body-small text-muted-dark" style={{ marginTop: "1rem" }}>
                We deliver comprehensive EPC, Design & Build, and General Contracting solutions with a focus on quality, safety, and long-term value.
              </p>
              <div className="megamenu-preview-card" style={{ cursor: "pointer" }} onClick={() => { onNavigate("division", "general-contracting"); onClose(); }}>
                <img src={companyData.divisions[0].image} alt="NEXAT Engineering" className="preview-img" />
                <div className="preview-overlay">
                  <span className="preview-title">Turnkey Project Delivery</span>
                  <span className="preview-sub">From feasibility study to commissioning</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "about":
        return (
          <div className="megamenu-grid">
            <div className="megamenu-col">
              <span className="eyebrow-label">About NEXAT</span>
              <ul className="megamenu-list-simple">
                <li>
                  <button onClick={() => { onNavigate("about"); onClose(); }} className="simple-link">
                    Company Story
                  </button>
                </li>
                <li>
                  <button onClick={() => { onNavigate("about"); onClose(); }} className="simple-link">
                    Vision & Mission
                  </button>
                </li>
                <li>
                  <button onClick={() => { onNavigate("about"); onClose(); }} className="simple-link">
                    Core Values
                  </button>
                </li>
              </ul>
            </div>

            <div className="megamenu-col">
              <span className="eyebrow-label">Advantages & Tech</span>
              <ul className="megamenu-list-simple">
                <li>
                  <button onClick={() => { onNavigate("advantages"); onClose(); }} className="simple-link">
                    Digital Construction & BIM
                  </button>
                </li>
                <li>
                  <button onClick={() => { onNavigate("advantages"); onClose(); }} className="simple-link">
                    Health, Safety & Environment
                  </button>
                </li>
                <li>
                  <button onClick={() => { onNavigate("advantages"); onClose(); }} className="simple-link">
                    Quality Assurance / QC
                  </button>
                </li>
                <li>
                  <button onClick={() => { onNavigate("advantages"); onClose(); }} className="simple-link">
                    Vision 2030 Commitment
                  </button>
                </li>
              </ul>
            </div>

            <div className="megamenu-col quote-panel">
              <p className="editorial-subtitle text-primary">
                "Engineering excellence and disciplined execution are the foundations of every NEXAT project."
              </p>
              <button 
                onClick={() => { onNavigate("about"); onClose(); }}
                className="btn-premium btn-premium-dark"
                style={{ marginTop: "1.5rem" }}
              >
                Learn Our Story
              </button>
            </div>
          </div>
        );

      case "methodology":
        return (
          <div className="megamenu-grid">
            <div className="megamenu-col main-links">
              <span className="eyebrow-label">Our Process</span>
              <ul className="megamenu-list">
                {companyData.methodology.steps.map((step) => (
                  <li key={step.num}>
                    <button 
                      onClick={() => { onNavigate("methodology"); onClose(); }}
                      className="megamenu-link animated-border"
                    >
                      <span className="link-num">{step.num}</span>
                      <span className="link-text">{step.name} Phase</span>
                      <span className="substep-preview">({step.substeps.join(" → ")})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="megamenu-col quote-panel">
              <span className="eyebrow-label">Quality Commitment</span>
              <p className="body-small text-muted-dark" style={{ marginTop: "1rem" }}>
                NEXAT applies a structured, end-to-end delivery process that aligns technical planning, execution, quality control, and long-term asset performance.
              </p>
              <button 
                onClick={() => { onNavigate("methodology"); onClose(); }}
                className="btn-premium btn-premium-primary"
                style={{ marginTop: "1.5rem", width: "100%" }}
              >
                Explore Methodology
              </button>
            </div>
          </div>
        );

      case "contact":
        return (
          <div className="megamenu-grid">
            <div className="megamenu-col">
              <span className="eyebrow-label">Get in Touch</span>
              <div className="contact-info-block">
                <span className="contact-label">Email</span>
                <a href={`mailto:${companyData.contact.email}`} className="contact-value">{companyData.contact.email}</a>
                
                <span className="contact-label">Phone</span>
                <a href={`tel:${companyData.contact.phone}`} className="contact-value">{companyData.contact.phone}</a>
                
                <span className="contact-label">Social Media</span>
                <span className="contact-value" style={{ marginBottom: 0 }}>{companyData.contact.social}</span>
              </div>
            </div>

            <div className="megamenu-col">
              <span className="eyebrow-label">Head Office</span>
              <p className="body-standard text-primary" style={{ fontWeight: 500, marginTop: "1rem" }}>
                {companyData.contact.address}
              </p>
              <div className="map-placeholder">
                <span className="body-small text-muted-dark">Riyadh, Kingdom of Saudi Arabia</span>
              </div>
            </div>

            <div className="megamenu-col quote-panel">
              <span className="eyebrow-label">Let's Build Together</span>
              <p className="body-small text-muted-dark" style={{ marginTop: "1rem" }}>
                Contact our client partnership team to discuss how we can transform your ambitions into sustainable high-performing built assets.
              </p>
              <button 
                onClick={() => { onNavigate("contact"); onClose(); }}
                className="btn-premium btn-premium-primary"
                style={{ marginTop: "1.5rem", width: "100%" }}
              >
                Submit Consultation Request
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="megamenu-overlay" onClick={onClose}>
      <div className="megamenu-panel" onClick={(e) => e.stopPropagation()}>
        <div className="container">
          <div className="megamenu-header">
            <button className="megamenu-close-btn" onClick={onClose}>
              <X size={20} />
              <span>Close Menu</span>
            </button>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
