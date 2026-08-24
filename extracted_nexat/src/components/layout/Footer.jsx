import React from "react";
import { companyData } from "../../data/companyData";
import { ArrowUpRight } from "lucide-react";

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-panel">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <img 
              src="/Nexat Logo  - English.png" 
              alt="NEXAT Construction Co." 
              className="footer-logo" 
            />
            <p className="body-small text-muted" style={{ marginTop: "1.5rem", maxWidth: "280px" }}>
              Saudi-owned multidisciplinary engineering, construction, and real estate development company serving Saudi Arabia and the GCC.
            </p>
          </div>

          {/* Divisions */}
          <div className="footer-col">
            <span className="footer-title">Our Divisions</span>
            <ul className="footer-links">
              {companyData.divisions.map((div) => (
                <li key={div.id}>
                  <button onClick={() => onNavigate("division", div.id)} className="footer-link">
                    {div.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Advantages & Tech */}
          <div className="footer-col">
            <span className="footer-title">Capabilities</span>
            <ul className="footer-links">
              <li>
                <button onClick={() => onNavigate("advantages")} className="footer-link">
                  Digital Construction & BIM
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("advantages")} className="footer-link">
                  Health, Safety & Environment
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("advantages")} className="footer-link">
                  Quality Assurance Systems
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("advantages")} className="footer-link">
                  Vision 2030 Commitments
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <span className="footer-title">Head Office</span>
            <p className="body-small text-muted" style={{ margin: "0 0 1.5rem 0" }}>
              {companyData.contact.address}<br />
              Saudi Arabia
            </p>
            <span className="footer-title">Inquiries</span>
            <p className="body-small text-muted" style={{ margin: 0 }}>
              Email: <a href={`mailto:${companyData.contact.email}`} className="text-white hover-accent">{companyData.contact.email}</a><br />
              Phone: <a href={`tel:${companyData.contact.phone}`} className="text-white hover-accent">{companyData.contact.phone}</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="bottom-left">
            <span className="body-small text-muted">
              © {new Date().getFullYear()} NEXAT Construction Co. All rights reserved.
            </span>
          </div>
          
          <div className="bottom-right">
            <div className="footer-socials">
              <span className="body-small text-muted" style={{ marginRight: "1.5rem" }}>
                Follow us: {companyData.contact.social}
              </span>
            </div>
            <button className="back-to-top" onClick={scrollToTop}>
              <span>Back to Top</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
