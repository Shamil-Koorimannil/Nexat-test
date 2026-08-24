import React, { useState, useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import { ScrollVideoCanvas } from './components/ScrollVideoCanvas';
import { Header } from './components/Header';
import { HeroCarousel } from './components/HeroCarousel';
import { StaggeredGallery } from './components/StaggeredGallery';
import { StructuralEngagements } from './components/StructuralEngagements';
import { MarqueeSection } from './components/MarqueeSection';
import { Methodology } from './components/Methodology';
import { FeatureCards } from './components/FeatureCards';
import { GlobalPresence } from './components/GlobalPresence';
import { Expertise } from './components/Expertise';
import { Footer } from './components/Footer';
import { Maintenance } from './components/Maintenance';

import { CompanyProfile } from './components/CompanyProfile';

interface Certification {
  nameKey: string;
  icon: React.ReactNode;
}

const certifications: Certification[] = [
  {
    nameKey: 'hero.certifications.quality',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
        <circle cx="50" cy="50" r="40" />
        <path d="M35 50 l10 10 l20 -20" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <text x="50" y="80" textAnchor="middle" fontSize="9" fontWeight="bold" fontFamily="sans-serif" fill="currentColor" stroke="none">ISO 9001</text>
      </svg>
    ),
  },
  {
    nameKey: 'hero.certifications.safety',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
        <circle cx="50" cy="50" r="40" />
        <path d="M50 25 L75 35 V60 C75 75 50 82 50 82 C50 82 25 75 25 60 V35 Z" strokeWidth="3" strokeLinejoin="round" />
        <text x="50" y="55" textAnchor="middle" fontSize="9" fontWeight="bold" fontFamily="sans-serif" fill="currentColor" stroke="none">SAFETY</text>
        <text x="50" y="93" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="sans-serif" fill="currentColor" stroke="none">ISO 45001</text>
      </svg>
    ),
  },
  {
    nameKey: 'hero.certifications.leed',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
        <circle cx="50" cy="50" r="40" />
        <path d="M50 25 C30 25 30 65 50 75 C70 65 70 25 50 25 Z" strokeWidth="2.5" />
        <path d="M50 75 V25" strokeDasharray="3 3" />
        <text x="50" y="52" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="sans-serif" fill="currentColor" stroke="none">LEED</text>
        <text x="50" y="93" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="sans-serif" fill="currentColor" stroke="none">PARTNER</text>
      </svg>
    ),
  },
  {
    nameKey: 'hero.certifications.vision2030',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
        <rect x="15" y="15" width="70" height="70" rx="10" />
        <path d="M30 45 L50 25 L70 45 L50 65 Z" strokeWidth="3" />
        <text x="50" y="52" textAnchor="middle" fontSize="12" fontWeight="bold" fontFamily="sans-serif" fill="currentColor" stroke="none">2030</text>
        <text x="50" y="78" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="sans-serif" fill="currentColor" stroke="none">VISION رؤية</text>
      </svg>
    ),
  },
  {
    nameKey: 'hero.certifications.civil',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
        <circle cx="50" cy="50" r="40" />
        <path d="M25 65 L40 40 L55 50 L75 25" strokeWidth="3" strokeLinecap="round" />
        <line x1="20" y1="70" x2="80" y2="70" strokeWidth="4" />
        <text x="50" y="85" textAnchor="middle" fontSize="9" fontWeight="bold" fontFamily="sans-serif" fill="currentColor" stroke="none">CIVIL</text>
      </svg>
    ),
  },
  {
    nameKey: 'hero.certifications.epc',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
        <circle cx="50" cy="50" r="40" />
        <path d="M30 35 H70 V65 H30 Z" />
        <path d="M40 35 V65" />
        <path d="M60 35 V65" />
        <text x="50" y="85" textAnchor="middle" fontSize="9" fontWeight="bold" fontFamily="sans-serif" fill="currentColor" stroke="none">EPC</text>
      </svg>
    ),
  },
  {
    nameKey: 'hero.certifications.mep',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
        <circle cx="50" cy="50" r="40" />
        <path d="M35 35 C40 30 60 30 65 35 C70 40 70 60 65 65 C60 70 40 70 35 65 C30 60 30 40 35 35 Z" />
        <circle cx="50" cy="50" r="10" />
        <text x="50" y="85" textAnchor="middle" fontSize="9" fontWeight="bold" fontFamily="sans-serif" fill="currentColor" stroke="none">MEP</text>
      </svg>
    ),
  },
  {
    nameKey: 'hero.certifications.hse',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="2.5">
        <polygon points="50,15 85,75 15,75" strokeWidth="3.5" strokeLinejoin="round" />
        <line x1="50" y1="38" x2="50" y2="58" strokeWidth="5.5" strokeLinecap="round" />
        <circle cx="50" cy="67" r="3.5" fill="currentColor" />
        <text x="50" y="93" textAnchor="middle" fontSize="8" fontWeight="bold" fontFamily="sans-serif" fill="currentColor" stroke="none">HSE</text>
      </svg>
    ),
  },
];

function App() {
  const isMaintenance = false; // Set to true to activate the offline maintenance page
  const { t, lang } = useLanguage();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMaintenance) {
    return <Maintenance />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navbar with thin top bar and sticky header */}
      <Header />

      {/* Main Experience Layout */}
      <main className="flex-grow">
        {/* Scroll Video Frame Hero Sequence */}
        {!isMobile && (
          <ScrollVideoCanvas
            totalFrames={245}
            startFrameIndex={40}
            containerHeight="350vh"
          >
            {(progress) => {
              // Calculate opacity for Phase 1 (Title and Tagline)
              const phase1Opacity = progress < 0.3 ? (1 - progress / 0.3) : 0;
              
              // Calculate opacity for Phase 2 (Brand Statement Paragraph)
              let phase2Opacity = 0;
              if (progress >= 0.3 && progress < 0.65) {
                const midpoint = 0.475;
                if (progress < midpoint) {
                  phase2Opacity = (progress - 0.3) / (midpoint - 0.3);
                } else {
                  phase2Opacity = 1 - (progress - midpoint) / (0.65 - midpoint);
                }
              }
              
              // Calculate opacity for Phase 3 (Certification Badges)
              let phase3Opacity = 0;
              if (progress >= 0.65) {
                const start = 0.65;
                const end = 0.95;
                if (progress < end) {
                  phase3Opacity = Math.min(1, (progress - start) / 0.1);
                } else {
                  phase3Opacity = 1 - (progress - end) / 0.05;
                }
              }

              return (
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-m pointer-events-none">
                  
                  {/* PHASE 1: Main Title */}
                  <div 
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-m transition-all duration-300 pointer-events-none"
                    style={{ 
                      opacity: phase1Opacity, 
                      visibility: phase1Opacity > 0 ? 'visible' : 'hidden',
                      transform: `translateY(${progress * -50}px)`
                    }}
                  >
                    <span className="text-[#DA9A62] text-xs md:text-sm font-sans font-bold uppercase tracking-[0.25em] mb-s block drop-shadow-md">
                      {t('hero.tagline')}
                    </span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white uppercase tracking-wider font-normal leading-[1.15] mb-m max-w-[900px] mx-auto drop-shadow-lg">
                      {t('hero.headline')}
                    </h1>
                    <div className="w-[60px] h-[1px] bg-white/40 mx-auto mb-l"></div>
                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 flex flex-col items-center gap-2">
                      <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">
                        {lang === 'ar' ? 'اسحب لأسفل' : 'Scroll Down'}
                      </span>
                      <div className="w-[1px] h-8 bg-gradient-to-b from-white/80 to-transparent animate-pulse" />
                    </div>
                  </div>

                  {/* PHASE 2: Description Paragraph */}
                  <div 
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-m transition-all duration-300 pointer-events-none"
                    style={{ 
                      opacity: phase2Opacity,
                      visibility: phase2Opacity > 0 ? 'visible' : 'hidden',
                      transform: `translateY(${(progress - 0.475) * -50}px)`
                    }}
                  >
                    <p className="text-white text-base md:text-lg lg:text-xl font-secondary leading-relaxed max-w-[650px] mx-auto drop-shadow-md">
                      {t('hero.description')}
                    </p>
                  </div>

                  {/* PHASE 3: Certifications Badges */}
                  <div 
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-m transition-all duration-300 pointer-events-none"
                    style={{ 
                      opacity: phase3Opacity,
                      visibility: phase3Opacity > 0 ? 'visible' : 'hidden',
                      transform: `translateY(${(progress - 0.8) * -50}px)`
                    }}
                  >
                    <h2 className="text-sm md:text-base font-serif text-[#DA9A62] uppercase tracking-[0.2em] mb-l drop-shadow-md">
                      {lang === 'ar' ? 'الاعتمادات والمعايير الدولية' : 'CERTIFICATIONS & COMPLIANCE'}
                    </h2>
                    
                    <div className="flex flex-wrap justify-center items-center gap-s md:gap-m max-w-[1000px] mx-auto">
                      {certifications.map((cert) => (
                        <div
                          key={cert.nameKey}
                          className="flex flex-col items-center justify-center gap-xs text-white"
                          style={{ width: '90px' }}
                        >
                          <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] filter drop-shadow-md opacity-85 hover:opacity-100 transition-opacity">
                            {cert.icon}
                          </div>
                          <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-gray-300 text-center select-none block leading-tight mt-1">
                            {t(cert.nameKey)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            }}
          </ScrollVideoCanvas>
        )}

        {/* Fullscreen Hero Carousel */}
        <HeroCarousel />

        {/* Scroll-driven dual-direction image marquee section */}
        <MarqueeSection />

        {/* Interactive corporate profile sections */}
        <CompanyProfile />

        {/* Staggered Vertical Parallax Gallery */}
        <StaggeredGallery />

        {/* Structural Engagements Accordion list */}
        <StructuralEngagements />

        {/* Methodology Steps Row */}
        <Methodology />

        {/* Why Dubai? Feature Cards */}
        <FeatureCards />

        {/* Our Global Presence Carousel */}
        <GlobalPresence />

        {/* Our Expertise Parallax Section */}
        <Expertise />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
