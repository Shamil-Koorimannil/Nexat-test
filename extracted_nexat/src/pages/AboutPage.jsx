import React, { useEffect } from "react";
import { companyData } from "../data/companyData";
import { ShieldCheck, Target, Heart } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="page-wrapper">
      {/* Banner */}
      <div className="project-banner" style={{ height: "45vh" }}>
        <div className="overlay-dark"></div>
        <img 
          src="/project_tower.png" 
          alt="NEXAT Corporate Story" 
          className="project-banner-img" 
        />
        <div className="project-banner-content container">
          <span className="eyebrow-label" style={{ color: "var(--color-accent)" }}>Corporate Profile</span>
          <h1 className="display-xl text-white" style={{ marginTop: "1rem" }}>Company Story & Vision</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="section-light">
        <div className="container">
          <div className="project-detail-grid">
            <div className="project-specs-panel">
              <span className="eyebrow-label">NEXAT DNA</span>
              <p className="body-large text-primary" style={{ marginTop: "2rem", fontWeight: 600 }}>
                Saudi-Owned multidisciplinary contractor serving Saudi Arabia and the GCC region.
              </p>
            </div>
            
            <div className="project-desc-panel">
              <span className="eyebrow-label">Overview</span>
              <p className="body-large text-primary" style={{ marginTop: "1.5rem", fontWeight: 300, lineHeight: 1.7 }}>
                {companyData.overview.description}
              </p>
              <p className="body-standard text-muted-dark" style={{ marginTop: "1.5rem" }}>
                {companyData.overview.approach}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cell */}
      <section className="section-dark" style={{ borderTop: "1px solid var(--color-border-accent)" }}>
        <div className="container">
          <div className="vision-mission-grid" style={{ border: "none", padding: 0 }}>
            <div className="vision-cell">
              <Target size={30} style={{ color: "var(--color-accent)" }} />
              <h2 className="heading-s text-white" style={{ margin: "1.5rem 0 1rem 0" }}>Vision Strategy</h2>
              <p className="body-large text-light" style={{ fontWeight: 300, margin: 0 }}>
                {companyData.about.vision}
              </p>
            </div>
            
            <div className="vision-cell">
              <ShieldCheck size={30} style={{ color: "var(--color-accent)" }} />
              <h2 className="heading-s text-white" style={{ margin: "1.5rem 0 1rem 0" }}>Mission Mandate</h2>
              <p className="body-large text-light" style={{ fontWeight: 300, margin: 0 }}>
                {companyData.about.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid Section */}
      <section className="section-light border-top">
        <div className="container">
          <span className="eyebrow-label" style={{ display: "block", textAlign: "center", marginBottom: "4rem" }}>
            Operational Pillars
          </span>
          <div className="values-grid">
            {companyData.values.map((val, idx) => (
              <div key={idx} className="value-card">
                <Heart size={24} style={{ color: "var(--color-accent)" }} />
                <h3 className="heading-s" style={{ margin: "1.5rem 0 1rem 0" }}>{val.title}</h3>
                <p className="body-small text-muted-dark" style={{ margin: 0 }}>
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
