import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface MarqueeCard {
  id: number;
  image: string;
  titleKey: string;
  subtitleKey: string;
}

export const MarqueeSection: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const row1Items: MarqueeCard[] = [
    { id: 1, image: '/assets/project_tower.png', titleKey: 'marquee.project1', subtitleKey: 'marquee.project1Sub' },
    { id: 2, image: '/assets/project_civic.png', titleKey: 'marquee.project2', subtitleKey: 'marquee.project2Sub' },
    { id: 3, image: '/assets/six_flags_showcase.png', titleKey: 'marquee.project3', subtitleKey: 'marquee.project3Sub' },
    { id: 4, image: '/assets/project_villa.png', titleKey: 'marquee.project4', subtitleKey: 'marquee.project4Sub' },
    { id: 5, image: '/assets/headquarters.png', titleKey: 'marquee.project5', subtitleKey: 'marquee.project5Sub' },
  ];

  const row2Items: MarqueeCard[] = [
    { id: 6, image: '/assets/marquee_1.png', titleKey: 'marquee.project2', subtitleKey: 'marquee.project2Sub' },
    { id: 7, image: '/assets/marquee_2.png', titleKey: 'marquee.project5', subtitleKey: 'marquee.project5Sub' },
    { id: 8, image: '/assets/marquee_3.png', titleKey: 'marquee.project1', subtitleKey: 'marquee.project1Sub' },
    { id: 9, image: '/assets/marquee_4.png', titleKey: 'marquee.project3', subtitleKey: 'marquee.project3Sub' },
    { id: 10, image: '/assets/marquee_5.png', titleKey: 'marquee.project4', subtitleKey: 'marquee.project4Sub' },
  ];

  const doubledRow1 = [...row1Items, ...row1Items];
  const doubledRow2 = [...row2Items, ...row2Items];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      if (rect.top < viewHeight && rect.bottom > 0) {
        const progress = (viewHeight - rect.top) / (viewHeight + rect.height);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const row1Translation = (scrollProgress - 0.5) * -200;
  const row2Translation = -150 + (scrollProgress - 0.5) * 200;

  return (
    <section
      ref={sectionRef}
      id="marquee-section"
      className="bg-white py-24 overflow-hidden border-b border-gray-100 flex flex-col gap-l md:gap-xl w-full"
    >
      {/* Section Header */}
      <div className="container mx-auto px-m text-center max-w-[800px]">
        <span className="text-gold text-xs font-sans font-bold uppercase tracking-[0.25em] mb-s block">
          {t('marquee.subtitle')}
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-black uppercase tracking-wider font-normal">
          {t('marquee.title')}
        </h2>
        <div className="w-[50px] h-[1px] bg-black/20 mx-auto mt-m"></div>
      </div>

      {/* Marquee Track Rows */}
      <div className="flex flex-col gap-l md:gap-xl w-full pt-m">
        
        {/* Top Row */}
        <div className={`w-full relative ${isMobile ? 'overflow-x-auto scrollbar-none snap-x px-6' : 'overflow-hidden'}`}>
          <div
            className="flex gap-l md:gap-xl"
            style={isMobile ? {} : {
              transform: `translate3d(${row1Translation}px, 0, 0)`,
            }}
          >
            {(isMobile ? row1Items : doubledRow1).map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-[280px] md:w-[360px] aspect-[16/10] relative rounded-2xl overflow-hidden shadow-sm group bg-gray-100 snap-center"
              >
                <img
                  src={item.image}
                  alt={t(item.titleKey)}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 p-m text-white z-10 text-start">
                  <h4 className="text-sm md:text-base font-serif uppercase tracking-wider m-0 text-white font-semibold leading-tight">
                    {t(item.titleKey)}
                  </h4>
                  <p className="text-gray-300 font-secondary text-2xs md:text-xs m-0 mt-3xs">
                    {t(item.subtitleKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className={`w-full relative ${isMobile ? 'overflow-x-auto scrollbar-none snap-x px-6' : 'overflow-hidden'}`}>
          <div
            className="flex gap-l md:gap-xl"
            style={isMobile ? {} : {
              transform: `translate3d(${row2Translation}px, 0, 0)`,
            }}
          >
            {(isMobile ? row2Items : doubledRow2).map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-[280px] md:w-[360px] aspect-[16/10] relative rounded-2xl overflow-hidden shadow-sm group bg-gray-100 snap-center"
              >
                <img
                  src={item.image}
                  alt={t(item.titleKey)}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 p-m text-white z-10 text-start">
                  <h4 className="text-sm md:text-base font-serif uppercase tracking-wider m-0 text-white font-semibold leading-tight">
                    {t(item.titleKey)}
                  </h4>
                  <p className="text-gray-300 font-secondary text-2xs md:text-xs m-0 mt-3xs">
                    {t(item.subtitleKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
