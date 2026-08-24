import React, { useEffect, useState } from "react";
import { companyData } from "../data/companyData";
import { MapPin, Mail, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div className="page-wrapper">
      {/* Banner */}
      <div className="project-banner" style={{ height: "45vh" }}>
        <div className="overlay-dark"></div>
        <img 
          src="/six_flags_showcase.png" 
          alt="NEXAT Contact Us" 
          className="project-banner-img" 
        />
        <div className="project-banner-content container">
          <span className="eyebrow-label" style={{ color: "var(--color-accent)" }}>Locations & Channels</span>
          <h1 className="display-xl text-white" style={{ marginTop: "1rem" }}>Contact Our Team</h1>
        </div>
      </div>

      {/* Grid Content */}
      <section className="section-light">
        <div className="container">
          <div className="contact-grid">
            {/* Info details */}
            <div>
              <span className="eyebrow-label">Client Partnership</span>
              <h2 className="heading-m" style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>Headquarters Details</h2>
              
              <div className="contact-details-list">
                {/* Address */}
                <div className="contact-detail-item">
                  <MapPin className="detail-icon" size={20} style={{ color: "var(--color-primary)" }} />
                  <div>
                    <span className="detail-label" style={{ color: "var(--color-accent)" }}>Office</span>
                    <p className="detail-value" style={{ color: "var(--color-primary)" }}>{companyData.contact.address}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-detail-item">
                  <Mail className="detail-icon" size={20} style={{ color: "var(--color-primary)" }} />
                  <div>
                    <span className="detail-label" style={{ color: "var(--color-accent)" }}>Email</span>
                    <a href={`mailto:${companyData.contact.email}`} className="detail-value hover-accent" style={{ color: "var(--color-primary)" }}>
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-detail-item">
                  <Phone className="detail-icon" size={20} style={{ color: "var(--color-primary)" }} />
                  <div>
                    <span className="detail-label" style={{ color: "var(--color-accent)" }}>Phone</span>
                    <a href={`tel:${companyData.contact.phone}`} className="detail-value hover-accent" style={{ color: "var(--color-primary)" }}>
                      {companyData.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="contact-form-card" style={{ boxShadow: "0 10px 45px rgba(11, 22, 36, 0.05)" }}>
                <span className="eyebrow-label" style={{ display: "block", marginBottom: "2rem" }}>
                  Inquiry Request Form
                </span>
                
                {submitted ? (
                  <div className="form-success-message">
                    <span className="success-icon">✓</span>
                    <h3 className="heading-s">Message Dispatched</h3>
                    <p className="body-small text-muted-dark">
                      Thank you. We will coordinate a response with our estimators.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="premium-form">
                    <div className="form-group">
                      <input 
                        type="text" 
                        required
                        placeholder="Your Name *"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <input 
                        type="email" 
                        required
                        placeholder="Your Email *"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <input 
                        type="tel" 
                        placeholder="Phone Number"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <textarea 
                        required
                        rows="4"
                        placeholder="Project Details... *"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="form-textarea"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-premium btn-premium-primary" style={{ width: "100%" }}>
                      <span>Send Message</span>
                      <Send size={14} style={{ marginLeft: "8px" }} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
