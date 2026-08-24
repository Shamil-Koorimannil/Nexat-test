import React, { useEffect } from "react";
import { companyData } from "../../data/companyData";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

export default function DivisionDetail({ divisionId, onBack, onNavigate }) {
  const division = companyData.divisions.find((d) => d.id === divisionId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [divisionId]);

  if (!division) {
    return (
      <div className="container" style={{ padding: "8rem 2rem", textAlign: "center" }}>
        <h2 className="display-l">Division Not Found</h2>
        <button onClick={onBack} className="btn-premium btn-premium-dark" style={{ marginTop: "2rem" }}>
          Go Back
        </button>
      </div>
    );
  }

  // Find other divisions
  const otherDivisions = companyData.divisions.filter((d) => d.id !== divisionId);

  return (
    <div className="page-wrapper">
      {/* Division Cover Banner */}
      <div className="project-banner">
        <div className="overlay-dark"></div>
        <img src={division.image} alt={division.title} className="project-banner-img" />
        <div className="project-banner-content container">
          <button onClick={onBack} className="back-btn-light">
            <ArrowLeft size={16} />
            <span>Back to Homepage</span>
          </button>
          
          <span className="eyebrow-label" style={{ color: "var(--color-accent)", marginTop: "2rem", display: "inline-block" }}>
            Operational Division {division.num}
          </span>
          <h1 className="display-xl text-white" style={{ marginTop: "1rem" }}>{division.title}</h1>
        </div>
      </div>

      {/* Division Details Grid */}
      <section className="section-light">
        <div className="container">
          <div className="project-detail-grid">
            {/* Division Specializations */}
            <div className="project-specs-panel">
              <span className="eyebrow-label">Division Scopes</span>
              <ul className="footer-links" style={{ marginTop: "2rem", listStyle: "none", padding: 0 }}>
                {division.scopes.map((scope, idx) => (
                  <li key={idx} style={{ padding: "0.75rem 0", borderBottom: "1px solid var(--color-border-dark)", display: "flex", gap: "10px", alignItems: "center" }}>
                    <ShieldCheck size={18} style={{ color: "var(--color-accent)" }} />
                    <span className="body-standard text-primary" style={{ fontWeight: 500 }}>{scope}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Description Narrative */}
            <div className="project-desc-panel">
              <span className="eyebrow-label">Operational Overview</span>
              <h2 className="heading-m" style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                Disciplined EPC Execution & Value Engineering
              </h2>
              <p className="body-large text-primary" style={{ fontWeight: 300, lineHeight: 1.7 }}>
                {division.description}
              </p>
              <p className="body-standard text-muted-dark" style={{ marginTop: "1.5rem" }}>
                NEXAT applies a structured delivery framework to all operational packages. Our engineers optimize design files, select premium materials, and enforce rigorous quality checks. Work packages are fully coordinated using 3D BIM coordination platforms to avoid clashes and achieve zero-defect commissioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Divisions */}
      <section className="section-dark">
        <div className="container">
          <span className="eyebrow-label" style={{ color: "var(--color-accent)" }}>Operational Segments</span>
          <h2 className="heading-m text-white" style={{ marginTop: "1rem", marginBottom: "3rem" }}>Other Operational Divisions</h2>
          
          <div className="grid-cols-3">
            {otherDivisions.map((d) => (
              <div 
                key={d.id} 
                className="division-panel-card hover-zoom-container"
                onClick={() => onNavigate("division", d.id)}
                style={{ minHeight: "350px" }}
              >
                <div className="panel-img-wrap">
                  <img src={d.image} alt={d.title} className="panel-img hover-zoom-image" />
                  <div className="panel-gradient-overlay"></div>
                </div>
                <div className="panel-content">
                  <span className="panel-num">{d.num}</span>
                  <span className="eyebrow-label" style={{ color: "var(--color-accent)", fontSize: "10px" }}>
                    {d.subtitle}
                  </span>
                  <h3 className="heading-s panel-title text-white">{d.title}</h3>
                  <button className="panel-explore-btn" style={{ marginTop: "1.5rem" }}>
                    <span>Explore</span>
                    <ArrowRight size={14} style={{ marginLeft: "8px" }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
