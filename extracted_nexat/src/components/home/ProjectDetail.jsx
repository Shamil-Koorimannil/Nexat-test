import React, { useEffect } from "react";
import { companyData } from "../../data/companyData";
import { ArrowLeft, MapPin, Calendar, Briefcase } from "lucide-react";

export default function ProjectDetail({ projectId, onBack, onNavigate }) {
  const project = companyData.projects.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [projectId]);

  if (!project) {
    return (
      <div className="container" style={{ padding: "8rem 2rem", textAlign: "center" }}>
        <h2 className="display-l">Project Not Found</h2>
        <button onClick={onBack} className="btn-premium btn-premium-dark" style={{ marginTop: "2rem" }}>
          Go Back
        </button>
      </div>
    );
  }

  // Find related projects (other than this one)
  const relatedProjects = companyData.projects.filter((p) => p.id !== projectId).slice(0, 2);

  return (
    <div className="page-wrapper">
      {/* Project Cover Banner */}
      <div className="project-banner">
        <div className="overlay-dark"></div>
        <img src={project.image} alt={project.title} className="project-banner-img" />
        <div className="project-banner-content container">
          <button onClick={onBack} className="back-btn-light">
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </button>
          
          <span className="eyebrow-label" style={{ color: "var(--color-accent)", marginTop: "2rem", display: "inline-block" }}>
            {project.category}
          </span>
          <h1 className="display-xl text-white" style={{ marginTop: "1rem" }}>{project.title}</h1>
        </div>
      </div>

      {/* Project Info Columns */}
      <section className="section-light">
        <div className="container">
          <div className="project-detail-grid">
            {/* Specs Block */}
            <div className="project-specs-panel">
              <span className="eyebrow-label">Project Specs</span>
              
              <div className="spec-item" style={{ marginTop: "2rem" }}>
                <MapPin className="spec-icon" size={18} />
                <div>
                  <span className="spec-label">Location</span>
                  <span className="spec-value">{project.location}</span>
                </div>
              </div>

              <div className="spec-item">
                <Briefcase className="spec-icon" size={18} />
                <div>
                  <span className="spec-label">Category</span>
                  <span className="spec-value">{project.category}</span>
                </div>
              </div>

              <div className="spec-item">
                <Calendar className="spec-icon" size={18} />
                <div>
                  <span className="spec-label">Client Partnership</span>
                  <span className="spec-value">Government / Private EPC</span>
                </div>
              </div>
            </div>

            {/* Content Narrative Block */}
            <div className="project-desc-panel">
              <span className="eyebrow-label">Overview & Scope</span>
              <h2 className="heading-m" style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
                Engineering and Structural Construction Scope
              </h2>
              <p className="body-large text-primary" style={{ fontWeight: 300, lineHeight: 1.7 }}>
                {project.description}
              </p>
              <p className="body-standard text-muted-dark" style={{ marginTop: "1.5rem" }}>
                Leveraging advanced Building Information Modeling (BIM), 3D coordination, and digital construction monitoring, NEXAT executed this project under strict QA/QC standards. Work packages were delivered in full alignment with Saudi Vision 2030 safety and environmental targets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-light border-top" style={{ borderTop: "1px solid var(--color-border-dark)" }}>
        <div className="container">
          <span className="eyebrow-label">Portfolio Explore</span>
          <h2 className="heading-m" style={{ marginTop: "1rem", marginBottom: "3rem" }}>Other Landmark Projects</h2>
          
          <div className="grid-cols-2">
            {relatedProjects.map((p) => (
              <div 
                key={p.id} 
                className="project-card-wrap size-medium hover-zoom-container"
                onClick={() => onNavigate("project", p.id)}
              >
                <div className="project-img-box">
                  <img src={p.image} alt={p.title} className="hover-zoom-image" />
                  <div className="project-overlay-gradient"></div>
                </div>
                <div className="project-card-details">
                  <span className="project-location">{p.location}</span>
                  <h3 className="heading-s project-title text-white">{p.title}</h3>
                  <span className="eyebrow-label" style={{ color: "var(--color-accent)", fontSize: "10px", marginTop: "4px", display: "inline-block" }}>
                    {p.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
