import React, { useEffect, useRef } from "react";
import { companyData } from "../../data/companyData";
import gsap from "gsap";

export default function AboutStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-up-story",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
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
    <section ref={sectionRef} id="about-story-section" className="section-light">
      <div className="container">
        {/* Editorial Heading */}
        <div className="about-editorial-wrap">
          <span className="eyebrow-label fade-up-story">Company Overview</span>
          <h2 className="display-l fade-up-story" style={{ marginTop: "1rem" }}>
            The Premier Engineering & Construction Partner
          </h2>
          <p className="editorial-statement fade-up-story" style={{ marginTop: "2rem", maxWidth: "900px" }}>
            {companyData.overview.approach}
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="vision-mission-grid fade-up-story" style={{ marginTop: "5rem" }}>
          <div className="vision-cell">
            <span className="eyebrow-label">Our Vision</span>
            <p className="body-large" style={{ marginTop: "1rem", fontWeight: 300 }}>
              {companyData.about.vision}
            </p>
          </div>
          <div className="mission-cell">
            <span className="eyebrow-label">Our Mission</span>
            <p className="body-large" style={{ marginTop: "1rem", fontWeight: 300 }}>
              {companyData.about.mission}
            </p>
          </div>
        </div>

        {/* Company Core Values Stagger */}
        <div className="values-section-wrap fade-up-story" style={{ marginTop: "6rem" }}>
          <span className="eyebrow-label" style={{ display: "block", textAlign: "center", marginBottom: "3rem" }}>
            Our Core Values
          </span>
          <div className="values-grid">
            {companyData.values.map((val, idx) => (
              <div key={idx} className="value-card">
                <span className="value-num">0{idx + 1}</span>
                <h3 className="heading-s" style={{ margin: "1rem 0" }}>{val.title}</h3>
                <p className="body-small text-muted-dark" style={{ margin: 0 }}>
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
