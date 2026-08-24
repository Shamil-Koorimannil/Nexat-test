import React, { useState } from "react";
import { companyData } from "../../data/companyData";
import { CheckCircle2 } from "lucide-react";

export default function Methodology() {
  const [activeStep, setActiveStep] = useState(0);
  const methodology = companyData.methodology;

  return (
    <section id="methodology-section" className="section-dark">
      <div className="container">
        {/* Header Block */}
        <div style={{ marginBottom: "5rem" }}>
          <span className="eyebrow-label">Execution Strategy</span>
          <h2 className="display-l" style={{ marginTop: "1rem" }}>
            Project Delivery Methodology
          </h2>
          <p className="editorial-subtitle text-light" style={{ marginTop: "1.5rem", maxWidth: "700px" }}>
            {methodology.description}
          </p>
        </div>

        {/* Interactive Timeline Layout */}
        <div className="methodology-timeline-wrapper">
          {/* Progress Indicators Left Side */}
          <div className="methodology-nav-column">
            <div className="timeline-connecting-line">
              <div 
                className="timeline-progress-fill"
                style={{ height: `${(activeStep / (methodology.steps.length - 1)) * 100}%` }}
              ></div>
            </div>
            
            <div className="methodology-nav-buttons">
              {methodology.steps.map((step, idx) => (
                <button
                  key={step.num}
                  className={`methodology-nav-btn ${idx === activeStep ? "is-active" : ""}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="btn-bullet">
                    <span className="bullet-inner"></span>
                  </div>
                  <div className="btn-label-wrap">
                    <span className="step-num">{step.num}</span>
                    <span className="step-name">{step.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Details Right Side */}
          <div className="methodology-content-column">
            <div className="methodology-details-card">
              <span className="details-num">{methodology.steps[activeStep].num}</span>
              <h3 className="display-l details-title text-white">
                {methodology.steps[activeStep].name} Phase
              </h3>
              <p className="body-large text-light" style={{ fontWeight: 300, marginTop: "1.5rem", maxWidth: "550px" }}>
                {methodology.steps[activeStep].description}
              </p>

              {/* Sub-steps checkboxes */}
              <div className="details-substeps-wrap">
                <span className="eyebrow-label" style={{ color: "var(--color-accent)", display: "block", marginBottom: "1rem" }}>
                  Key Operations & Checks
                </span>
                <div className="substeps-grid">
                  {methodology.steps[activeStep].substeps.map((sub, idx) => (
                    <div key={idx} className="substep-item">
                      <CheckCircle2 className="check-icon" size={18} />
                      <span className="substep-text">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
