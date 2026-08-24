import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Expertise: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      if (rect.top < viewHeight && rect.bottom > 0) {
        const progress = (viewHeight - rect.top) / (viewHeight + rect.height);
        const offset = (progress - 0.5) * -120;
        setTranslateY(offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="expertise" className="bg-white py-24 text-black px-m border-b border-gray-100">
      <div className="container mx-auto max-w-[1100px] px-s">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          {/* Left Column: CEO Message text */}
          <div className="flex flex-col items-start pr-s lg:pr-l text-start">
            <span className="text-gold text-xs font-sans font-bold uppercase tracking-[0.25em] mb-s block">
              {t('expertise.subtitle')}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-black uppercase tracking-wider font-normal mb-m leading-tight">
              {t('expertise.title')}
            </h2>
            <div className="w-[50px] h-[1px] bg-black/20 mb-l"></div>
            
            <p className="text-gray-600 font-secondary text-sm md:text-base leading-relaxed mb-m italic">
              {t('expertise.quote')}
            </p>
            <p className="text-gray-500 font-secondary text-sm leading-relaxed mb-xl">
              {t('expertise.body')}
            </p>
            
            <a href={`mailto:${t('expertise.btnLabel')}`} className="btn-luxury">
              {t('expertise.btnLabel')}
            </a>
          </div>

          {/* Right Column: Parallax Image */}
          <div className="relative rounded-[30px] overflow-hidden shadow-lg h-[460px] md:h-[520px] bg-gray-100">
            <img
              src="/assets/project_tower.png"
              alt="NEXAT Construction Site"
              className="absolute inset-0 w-full h-[120%] object-cover parallax-img"
              style={{
                transform: `translate3d(0, ${translateY}px, 0) scale(1.1)`,
                top: '-10%',
              }}
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
