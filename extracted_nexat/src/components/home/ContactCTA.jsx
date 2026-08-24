import React, { useState } from "react";
import { companyData } from "../../data/companyData";
import { Send, MapPin, Mail, Phone, Share2 } from "lucide-react";

export default function ContactCTA() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact-section" className="section-dark">
      <div className="container">
        <div className="contact-grid">
          {/* Info Details Left Column */}
          <div className="contact-info-col">
            <span className="eyebrow-label">Consultation Inquiries</span>
            <h2 className="display-l" style={{ marginTop: "1rem", color: "var(--color-white)" }}>
              Let's Build Together
            </h2>
            <p className="body-large text-muted" style={{ marginTop: "1.5rem", maxWidth: "450px" }}>
              NEXAT is your single accountable partner across the project lifecycle. Get in touch with our team to initiate a consultation.
            </p>

            <div className="contact-details-list" style={{ marginTop: "3rem" }}>
              {/* Address */}
              <div className="contact-detail-item">
                <MapPin className="detail-icon" size={20} />
                <div>
                  <span className="detail-label">Head Office</span>
                  <p className="detail-value">{companyData.contact.address}</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-detail-item">
                <Mail className="detail-icon" size={20} />
                <div>
                  <span className="detail-label">Email Inquiries</span>
                  <a href={`mailto:${companyData.contact.email}`} className="detail-value hover-accent">
                    {companyData.contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-detail-item">
                <Phone className="detail-icon" size={20} />
                <div>
                  <span className="detail-label">Call Us</span>
                  <a href={`tel:${companyData.contact.phone}`} className="detail-value hover-accent">
                    {companyData.contact.phone}
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="contact-detail-item">
                <Share2 className="detail-icon" size={20} />
                <div>
                  <span className="detail-label">Social Media</span>
                  <p className="detail-value">{companyData.contact.social}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel Right Column */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <span className="eyebrow-label" style={{ display: "block", marginBottom: "2rem" }}>
                Send a Message
              </span>
              
              {submitted ? (
                <div className="form-success-message">
                  <span className="success-icon">✓</span>
                  <h3 className="heading-s">Inquiry Submitted</h3>
                  <p className="body-small text-muted-dark">
                    Thank you. A NEXAT client coordinator will contact you shortly.
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
                      placeholder="Your Phone Number"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <textarea 
                      required
                      rows="4"
                      placeholder="Tell us about your project requirements... *"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-premium btn-premium-primary" style={{ width: "100%", marginTop: "1rem" }}>
                    <span>Submit Inquiry</span>
                    <Send size={14} style={{ marginLeft: "8px" }} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
