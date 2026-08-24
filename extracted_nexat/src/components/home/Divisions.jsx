import React, { useEffect, useRef } from "react";
import { companyData } from "../../data/companyData";
import gsap from "gsap";

export default function Divisions({ onNavigate }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".division-panel-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="divisions-section" className="section-dark">
      <div className="container">
        {/* Header block */}
        <div style={{ marginBottom: "4rem" }}>
          <span className="eyebrow-label">Operational Scale</span>
          <h2 className="display-l" style={{ marginTop: "1rem" }}>
            Multi-Disciplinary Divisions
          </h2>
          <p className="editorial-subtitle text-light" style={{ marginTop: "1.5rem", maxWidth: "700px" }}>
            NEXAT delivers end-to-end built asset development through four integrated operational divisions.
          </p>
        </div>

        {/* Divisions panels layout */}
        <div className="divisions-panels-grid">
          {companyData.divisions.map((div) => (
            <div 
              key={div.id} 
              className="division-panel-card hover-zoom-container"
              onClick={() => onNavigate("division", div.id)}
            >
              {/* Background Image */}
              <div className="panel-img-wrap">
                <img 
                  src={div.image} 
                  alt={div.title} 
                  className="panel-img hover-zoom-image" 
                />
                <div className="panel-gradient-overlay"></div>
              </div>

              {/* Card Contents */}
              <div className="panel-content">
                <span className="panel-num">{div.num}</span>
                <span className="eyebrow-label" style={{ color: "var(--color-accent)", fontSize: "11px" }}>
                  {div.subtitle}
                </span>
                <h3 className="heading-s panel-title">{div.title}</h3>
                <p className="body-small text-muted panel-desc">
                  {div.description}
                </p>

                {/* Subscopes revealed on hover */}
                <div className="panel-subscopes-reveal">
                  <span className="scopes-title">Key Specializations:</span>
                  <ul className="scopes-list">
                    {div.scopes.map((scope, idx) => (
                      <li key={idx}>
                        <span className="bullet">■</span>
                        <span>{scope}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="panel-explore-btn">
                    <span>View Division Details</span>
                    <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
