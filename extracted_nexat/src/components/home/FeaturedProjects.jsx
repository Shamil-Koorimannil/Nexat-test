import React, { useEffect, useRef } from "react";
import { companyData } from "../../data/companyData";
import gsap from "gsap";
import { Plus } from "lucide-react";

export default function FeaturedProjects({ onNavigate }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card-wrap",
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
    <section ref={sectionRef} id="projects-section" className="section-light">
      <div className="container">
        {/* Header Block */}
        <div className="flex-between" style={{ marginBottom: "4rem", display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "2rem" }}>
          <div>
            <span className="eyebrow-label">Build Portfolio</span>
            <h2 className="display-l" style={{ marginTop: "1rem" }}>
              Landmark Project Showcase
            </h2>
          </div>
          <button 
            onClick={() => onNavigate("projects")}
            className="btn-premium btn-premium-dark"
          >
            Explore Full Portfolio
          </button>
        </div>

        {/* Asymmetrical grid layout matching reference */}
        <div className="projects-editorial-grid">
          {/* Main Huge Feature Card */}
          <div 
            className="project-card-wrap size-large hover-zoom-container"
            onClick={() => onNavigate("project", companyData.projects[0].id)}
          >
            <div className="project-img-box">
              <img 
                src={companyData.projects[0].image} 
                alt={companyData.projects[0].title} 
                className="hover-zoom-image"
              />
              <div className="project-overlay-gradient"></div>
            </div>
            <div className="project-card-details">
              <span className="project-location">{companyData.projects[0].location}</span>
              <h3 className="heading-m project-title text-white">{companyData.projects[0].title}</h3>
              <span className="eyebrow-label" style={{ color: "var(--color-accent)", fontSize: "10px", marginTop: "4px", display: "inline-block" }}>
                {companyData.projects[0].category}
              </span>
              <p className="body-small text-muted" style={{ marginTop: "1rem", maxWidth: "450px" }}>
                {companyData.projects[0].description}
              </p>
              <button className="project-action-circle">
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* Subgrid Column of 2 Stacked Cards */}
          <div className="projects-subgrid-col">
            {companyData.projects.slice(1, 3).map((proj) => (
              <div 
                key={proj.id} 
                className="project-card-wrap size-medium hover-zoom-container"
                onClick={() => onNavigate("project", proj.id)}
              >
                <div className="project-img-box">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="hover-zoom-image"
                  />
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

        {/* Second Asymmetrical Grid Row for Projects 3 and 4 */}
        <div className="projects-editorial-grid grid-row-reversed" style={{ marginTop: "var(--grid-gap)" }}>
          {companyData.projects.slice(3, 5).map((proj) => (
            <div 
              key={proj.id} 
              className="project-card-wrap size-medium-full hover-zoom-container"
              onClick={() => onNavigate("project", proj.id)}
            >
              <div className="project-img-box">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="hover-zoom-image"
                />
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
  );
}
