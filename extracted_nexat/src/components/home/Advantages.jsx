import React, { useEffect, useRef } from "react";
import { companyData } from "../../data/companyData";
import gsap from "gsap";

export default function Advantages() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".advantage-grid-cell",
        { opacity: 0, y: 30 },
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

  const caps = companyData.capabilities;

  return (
    <section ref={sectionRef} id="advantages-section" className="section-light">
      <div className="container">
        {/* Header Block */}
        <div style={{ marginBottom: "5rem" }}>
          <span className="eyebrow-label">Competitive Advantages</span>
          <h2 className="display-l" style={{ marginTop: "1rem" }}>
            Engineered Capabilities
          </h2>
          <p className="editorial-subtitle text-primary" style={{ marginTop: "1.5rem", maxWidth: "700px" }}>
            NEXAT combines advanced technologies, zero-harm safety standards, and rigorous inspection systems.
          </p>
        </div>

        {/* Fine Border Grid Layout */}
        <div className="advantages-fine-grid">
          {/* BIM & Digital */}
          <div className="advantage-grid-cell">
            <span className="eyebrow-label">Technology Integration</span>
            <h3 className="heading-s" style={{ margin: "1rem 0" }}>{caps.digital.title}</h3>
            <p className="body-small text-muted-dark" style={{ margin: 0 }}>
              {caps.digital.description}
            </p>
          </div>

          {/* QA/QC */}
          <div className="advantage-grid-cell">
            <span className="eyebrow-label">Inspection & Standards</span>
            <h3 className="heading-s" style={{ margin: "1rem 0" }}>{caps.qaqc.title}</h3>
            <p className="body-small text-muted-dark" style={{ margin: 0 }}>
              {caps.qaqc.description}
            </p>
          </div>

          {/* HSE */}
          <div className="advantage-grid-cell">
            <span className="eyebrow-label">Risk Management</span>
            <h3 className="heading-s" style={{ margin: "1rem 0" }}>{caps.hse.title}</h3>
            <p className="body-small text-muted-dark" style={{ margin: 0 }}>
              {caps.hse.description}
            </p>
          </div>

          {/* Sustainability */}
          <div className="advantage-grid-cell">
            <span className="eyebrow-label">Resource Conservation</span>
            <h3 className="heading-s" style={{ margin: "1rem 0" }}>{caps.sustainability.title}</h3>
            <p className="body-small text-muted-dark" style={{ margin: 0 }}>
              {caps.sustainability.description}
            </p>
          </div>
        </div>

        {/* Vision 2030 Big Highlight Banner */}
        <div className="vision-banner-cell advantage-grid-cell" style={{ marginTop: "4rem" }}>
          <div className="banner-grid-wrap">
            <div className="banner-text-side">
              <span className="eyebrow-label">Regional Alignment</span>
              <h3 className="heading-m" style={{ margin: "1rem 0" }}>{caps.vision2030.title}</h3>
              <p className="body-large text-muted-dark" style={{ margin: 0, fontWeight: 300, lineHeight: 1.6 }}>
                {caps.vision2030.description}
              </p>
            </div>
            <div className="banner-visual-side">
              {/* Render an abstract model mockup image or structural project image */}
              <div className="visual-graphic-box">
                <div className="visual-circle"></div>
                <div className="visual-lines"></div>
                <span className="visual-tag">VISION 2030</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
