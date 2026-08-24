import React, { useEffect } from "react";
import { companyData } from "../data/companyData";
import { Plus } from "lucide-react";

export default function ProjectsPage({ onNavigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="page-wrapper">
      {/* Projects Banner */}
      <div className="project-banner" style={{ height: "45vh" }}>
        <div className="overlay-dark"></div>
        <img 
          src="/project_villa.png" 
          alt="NEXAT Project Portfolio" 
          className="project-banner-img" 
        />
        <div className="project-banner-content container">
          <span className="eyebrow-label" style={{ color: "var(--color-accent)" }}>Build Index</span>
          <h1 className="display-xl text-white" style={{ marginTop: "1rem" }}>Landmark Developments</h1>
        </div>
      </div>

      {/* Grid Showcase Section */}
      <section className="section-light">
        <div className="container">
          <div style={{ marginBottom: "5rem" }}>
            <span className="eyebrow-label">Build Scale</span>
            <h2 className="heading-m" style={{ marginTop: "1rem" }}>Structured Work Packages</h2>
            <p className="editorial-subtitle text-primary" style={{ marginTop: "1rem", maxWidth: "600px" }}>
              Explore the engineering and general contracting packages delivered by NEXAT Construction Co. across Saudi Arabia.
            </p>
          </div>

          <div className="grid-cols-2">
            {companyData.projects.map((proj) => (
              <div 
                key={proj.id} 
                className="project-card-wrap size-medium hover-zoom-container"
                onClick={() => onNavigate("project", proj.id)}
                style={{ aspectRatio: "16/10" }}
              >
                <div className="project-img-box">
                  <img src={proj.image} alt={proj.title} className="hover-zoom-image" />
                  <div className="project-overlay-gradient"></div>
                </div>
                <div className="project-card-details">
                  <span className="project-location">{proj.location}</span>
                  <h3 className="heading-s project-title text-white">{proj.title}</h3>
                  <span className="eyebrow-label" style={{ color: "var(--color-accent)", fontSize: "10px", marginTop: "4px", display: "inline-block" }}>
                    {proj.category}
                  </span>
                  <button className="project-action-circle">
                    <Plus size={16} />
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
