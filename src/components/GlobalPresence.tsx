import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Division {
  id: string;
  num: string;
  titleKey: string;
  subtitleKey: string;
  descKey: string;
  image: string;
}

export const GlobalPresence: React.FC = () => {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const divisions: Division[] = [
    {
      id: 'general-contracting',
      num: '01',
      titleKey: 'globalPresence.div1Title',
      subtitleKey: 'globalPresence.div1Sub',
      descKey: 'globalPresence.div1Desc',
      image: '/assets/project_civic.png',
    },
    {
      id: 'structural-architectural',
      num: '02',
      titleKey: 'globalPresence.div2Title',
      subtitleKey: 'globalPresence.div2Sub',
      descKey: 'globalPresence.div2Desc',
      image: '/assets/project_tower.png',
    },
    {
      id: 'mep-protection',
      num: '03',
      titleKey: 'globalPresence.div3Title',
      subtitleKey: 'globalPresence.div3Sub',
      descKey: 'globalPresence.div3Desc',
      image: '/assets/project_villa.png',
    },
    {
      id: 'development-asset',
      num: '04',
      titleKey: 'globalPresence.div4Title',
      subtitleKey: 'globalPresence.div4Sub',
      descKey: 'globalPresence.div4Desc',
      image: '/assets/headquarters.png',
    },
  ];

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="global-presence" className="bg-white py-24 text-black px-m overflow-hidden border-b border-gray-100">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-end mb-16 max-w-[1100px] mx-auto w-full px-s">
          <div className="text-start">
            <span className="text-gold text-xs font-sans font-bold uppercase tracking-[0.25em] mb-s block">
              {t('globalPresence.subtitle')}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-black uppercase tracking-wider font-normal">
              {t('globalPresence.title')}
            </h2>
            <div className="w-[50px] h-[1px] bg-black/20 mt-m"></div>
          </div>

          {/* Scrolling controls */}
          <div className="flex gap-s mt-m sm:mt-0">
            <button
              onClick={handleScrollLeft}
              type="button"
              className="w-[44px] h-[44px] rounded-full border border-black text-black hover:bg-black hover:text-white flex items-center justify-center transition-colors duration-300 cursor-pointer"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button
              onClick={handleScrollRight}
              type="button"
              className="w-[44px] h-[44px] rounded-full border border-black text-black hover:bg-black hover:text-white flex items-center justify-center transition-colors duration-300 cursor-pointer"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Track */}
        <div className="max-w-[1200px] mx-auto w-full relative">
          <div
            ref={scrollContainerRef}
            className="scroll-track-container flex gap-l py-m px-xs"
          >
            {divisions.map((div) => (
              <div
                key={div.id}
                className="scroll-track-item relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
              >
                {/* Division Image */}
                <img
                  src={div.image}
                  alt={t(div.titleKey)}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>
                
                {/* Details overlays */}
                <div className="absolute inset-0 p-l flex flex-col justify-end items-start z-10 text-white text-start">
                  <span className="text-gold text-xs font-sans font-bold tracking-wider uppercase">
                    {t('globalPresence.divLabel')} {div.num}
                  </span>
                  <h4 className="text-base md:text-lg font-serif uppercase mt-2xs mb-3xs font-semibold text-white leading-snug">
                    {t(div.titleKey)}
                  </h4>
                  <p className="text-gray-300 font-secondary text-xs m-0 mb-s">
                    {t(div.subtitleKey)}
                  </p>
                  <p className="text-gray-400 font-secondary text-2xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[280px]">
                    {t(div.descKey)}
                  </p>
                  <span className="text-gold text-2xs font-sans font-bold uppercase tracking-widest mt-xs">
                    {t('globalPresence.tag')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
