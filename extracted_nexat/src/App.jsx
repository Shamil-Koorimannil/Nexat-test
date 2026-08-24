import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroCanvas from "./components/home/HeroCanvas";
import AboutStory from "./components/home/AboutStory";
import Divisions from "./components/home/Divisions";
import FeaturedProjects from "./components/home/FeaturedProjects";
import Methodology from "./components/home/Methodology";
import Advantages from "./components/home/Advantages";
import ContactCTA from "./components/home/ContactCTA";
import ProjectDetail from "./components/home/ProjectDetail";
import DivisionDetail from "./components/home/DivisionDetail";

// Subpages
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import MethodologyPage from "./pages/MethodologyPage";
import AdvantagesPage from "./pages/AdvantagesPage";
import ContactPage from "./pages/ContactPage";

// Lenis & GSAP Smooth Scroll
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [activeSubId, setActiveSubId] = useState(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    // Disable smooth scroll if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updatePhysics = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updatePhysics);

    // Clean up
    return () => {
      lenis.destroy();
      gsap.ticker.remove(updatePhysics);
    };
  }, [currentPage, activeSubId]);

  const handleNavigate = (page, subId = null) => {
    setCurrentPage(page);
    setActiveSubId(subId);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <HeroCanvas />
            <AboutStory />
            <Divisions onNavigate={handleNavigate} />
            <FeaturedProjects onNavigate={handleNavigate} />
            <Methodology />
            <Advantages />
            <ContactCTA />
          </>
        );
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsPage onNavigate={handleNavigate} />;
      case "methodology":
        return <MethodologyPage />;
      case "advantages":
        return <AdvantagesPage />;
      case "contact":
        return <ContactPage />;
      case "project":
        return (
          <ProjectDetail 
            projectId={activeSubId} 
            onBack={() => handleNavigate("projects")} 
            onNavigate={handleNavigate}
          />
        );
      case "division":
        return (
          <DivisionDetail 
            divisionId={activeSubId} 
            onBack={() => handleNavigate("home")} 
            onNavigate={handleNavigate}
          />
        );
      default:
        return (
          <div className="container" style={{ padding: "10rem 2rem", textAlign: "center" }}>
            <h2 className="display-l">Page Not Found</h2>
            <button 
              onClick={() => handleNavigate("home")}
              className="btn-premium btn-premium-primary"
              style={{ marginTop: "2rem" }}
            >
              Go to Homepage
            </button>
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <Header 
        onNavigate={handleNavigate} 
        currentPage={currentPage}
        currentSubId={activeSubId}
      />

      {/* Main Content Wrapper */}
      <main className="main-content-wrapper">
        {renderContent()}
      </main>

      {/* Page Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
