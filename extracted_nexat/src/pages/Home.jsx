import React from 'react';
import ProductCarouselHero from '../components/ProductCarouselHero';
import AboutBrand from '../components/AboutBrand';
import Roadmap from '../components/Roadmap';
import ShopsGallery from '../components/ShopsGallery';
import FeaturesSection from '../components/FeaturesSection';
import GSAPScrollSection from '../components/GSAPScrollSection';
import Franchise from '../components/Franchise';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <main>
      {/* 1. Hero Section */}
      <ProductCarouselHero />
      
      {/* 2. Company Section */}
      <ScrollReveal>
        <AboutBrand />
      </ScrollReveal>
      
      {/* 3. Services Section */}
      <ScrollReveal>
        <Roadmap />
      </ScrollReveal>
      
      {/* 4. Projects Portfolio Section */}
      <ScrollReveal>
        <ShopsGallery />
      </ScrollReveal>
      
      {/* 5. Why NEXAT Section */}
      <ScrollReveal>
        <FeaturesSection />
      </ScrollReveal>
      
      {/* 6. Why NEXAT Narrative Horizontal Scroll - Unwrapped to preserve GSAP ScrollTrigger pinning metrics */}
      <GSAPScrollSection />
      
      {/* 7. Contact Section */}
      <ScrollReveal>
        <Franchise />
      </ScrollReveal>
    </main>
  );
};

export default Home;
