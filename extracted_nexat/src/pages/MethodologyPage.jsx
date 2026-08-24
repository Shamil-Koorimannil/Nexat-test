import React, { useEffect } from "react";
import { companyData } from "../data/companyData";
import { CheckCircle2 } from "lucide-react";

export default function MethodologyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const methodology = companyData.methodology;

  return (
    <div className="page-wrapper">
      {/* Banner */}
      <div className="project-banner" style={{ height: "45vh" }}>
        <div className="overlay-dark"></div>
        <img 
          src="/headquarters.png" 
          alt="NEXAT Methodology" 
          className="project-banner-img" 
        />
        <div className="project-banner-content container">
          <span className="eyebrow-label" style={{ color: "var(--color-accent)" }}>Project Execution</span>
          <h1 className="display-xl text-white" style={{ marginTop: "1rem" }}>Execution Methodology</h1>
        </div>
      </div>

      {/* Methodology Section */}
      <section className="section-light">
        <div className="container">
          <div style={{ marginBottom: "5rem" }}>
            <span className="eyebrow-label">Lifecycle Strategy</span>
            <h2 className="heading-m">End-to-End Delivery System</h2>
            <p className="editorial-statement" style={{ marginTop: "1.5rem", maxWidth: "800px" }}>
              {methodology.description}
            </p>
          </div>

          {/* Full detail list for each step */}
          <div className="methodology-full-list" style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {methodology.steps.map((step, idx) => (
              <div key={step.num} className="methodology-step-detail-card" style={{ display: "grid", gridTemplateColumns: "1fr 2.5fr", gap: "3rem", borderBottom: "1px solid var(--color-border-dark)", paddingBottom: "3rem" }}>
                {/* Left Side Number and Name */}
                <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                  <span className="display-l" style={{ color: "var(--color-accent)", opacity: 0.6, fontSize: "3.5rem", lineHeight: 1 }}>
                    {step.num}
                  </span>
                  <div>
                    <h3 className="heading-s" style={{ margin: 0, color: "var(--color-primary)" }}>
                      {step.name} Phase
                    </h3>
                    <span className="body-small text-muted-dark" style={{ marginTop: "4px", display: "inline-block" }}>
                      Lifecycle step {idx + 1}
                    </span>
                  </div>
                </div>

                {/* Right Side Text and substeps */}
                <div>
                  <p className="body-large text-primary" style={{ fontWeight: 300, margin: 0 }}>
                    {step.description}
                  </p>
                  
                  <div style={{ marginTop: "2rem" }}>
                    <span className="eyebrow-label" style={{ color: "var(--color-accent)", display: "block", marginBottom: "1rem" }}>
                      Phase Deliverables:
                    </span>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
                      {step.substeps.map((sub, sidx) => (
                        <div key={sidx} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                          <CheckCircle2 size={16} style={{ color: "var(--color-accent)" }} />
                          <span className="body-standard text-primary" style={{ fontWeight: 500 }}>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
