import React from 'react';
import ProductCarouselHero from '../components/ProductCarouselHero';
import AboutBrand from '../components/AboutBrand';
import Roadmap from '../components/Roadmap';
import ShopsGallery from '../components/ShopsGallery';
import FeaturesSection from '../components/FeaturesSection';
import GSAPScrollSection from '../components/GSAPScrollSection';
import Franchise from '../components/Franchise';

const Home = () => {
  return (
    <main>
      {/* 1. Hero Section */}
      <ProductCarouselHero />
      
      {/* 2. Company Section */}
      <AboutBrand />
      
      {/* 3. Services Section */}
      <Roadmap />
      
      {/* 4. Projects Portfolio Section */}
      <ShopsGallery />
      
      {/* 5. Why NEXAT Section */}
      <FeaturesSection />
      
      {/* 6. Why NEXAT Narrative Horizontal Scroll */}
      <GSAPScrollSection />
      
      {/* 7. Contact Section */}
      <Franchise />
    </main>
  );
};

export default Home;
