import React, { useEffect } from "react";
import { companyData } from "../data/companyData";
import { ShieldAlert, Award, Layers, Cpu } from "lucide-react";

export default function AdvantagesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const caps = companyData.capabilities;

  return (
    <div className="page-wrapper">
      {/* Banner */}
      <div className="project-banner" style={{ height: "45vh" }}>
        <div className="overlay-dark"></div>
        <img 
          src="/project_civic.png" 
          alt="NEXAT Capabilities" 
          className="project-banner-img" 
        />
        <div className="project-banner-content container">
          <span className="eyebrow-label" style={{ color: "var(--color-accent)" }}>Capabilities</span>
          <h1 className="display-xl text-white" style={{ marginTop: "1rem" }}>Engineered Advantages</h1>
        </div>
      </div>

      {/* BIM & Digital Segment */}
      <section className="section-light">
        <div className="container">
          <div className="project-detail-grid">
            <div className="project-specs-panel">
              <Cpu size={32} style={{ color: "var(--color-accent)" }} />
              <h2 className="heading-s text-primary" style={{ marginTop: "1.5rem" }}>
                {caps.digital.title}
              </h2>
            </div>
            
            <div className="project-desc-panel">
              <p className="body-large text-primary" style={{ fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
                {caps.digital.description}
              </p>
              <p className="body-standard text-muted-dark" style={{ marginTop: "1.5rem" }}>
                By establishing a centralized 3D digital model before breaking ground, NEXAT minimizes rework, speeds up coordination, and ensures that piping, electrical runs, and concrete structures are constructed perfectly the first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HSE & QA/QC Segments */}
      <section className="section-dark" style={{ borderTop: "1px solid var(--color-border-accent)", borderBottom: "1px solid var(--color-border-accent)" }}>
        <div className="container">
          <div className="grid-cols-2">
            {/* HSE */}
            <div style={{ paddingRight: "2rem" }}>
              <ShieldAlert size={28} style={{ color: "var(--color-accent)" }} />
              <h3 className="heading-s text-white" style={{ margin: "1.5rem 0 1rem 0" }}>{caps.hse.title}</h3>
              <p className="body-standard text-light" style={{ opacity: 0.8, margin: 0, lineHeight: 1.6 }}>
                {caps.hse.description}
              </p>
            </div>

            {/* QA/QC */}
            <div style={{ paddingLeft: "2rem", borderLeft: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <Award size={28} style={{ color: "var(--color-accent)" }} />
              <h3 className="heading-s text-white" style={{ margin: "1.5rem 0 1rem 0" }}>{caps.qaqc.title}</h3>
              <p className="body-standard text-light" style={{ opacity: 0.8, margin: 0, lineHeight: 1.6 }}>
                {caps.qaqc.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="section-light">
        <div className="container">
          <div className="project-detail-grid">
            <div className="project-specs-panel">
              <Layers size={32} style={{ color: "var(--color-accent)" }} />
              <h2 className="heading-s text-primary" style={{ marginTop: "1.5rem" }}>
                {caps.sustainability.title}
              </h2>
            </div>
            
            <div className="project-desc-panel">
              <p className="body-large text-primary" style={{ fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
                {caps.sustainability.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
