import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Maintenance: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col justify-between p-8 md:p-16 select-none bg-[#0B1624] text-white relative overflow-hidden font-sans">
      
      {/* Understated background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#DA9A62]/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header with Logo and Language Selector */}
      <header className="relative z-10 flex justify-between items-center w-full">
        <span className="text-xl md:text-2xl font-black tracking-[0.25em] text-white">NEXAT</span>
        
        {/* Language Toggle Control */}
        <div className="flex gap-s items-center text-xs font-bold uppercase tracking-wider text-gray-400">
          <button
            onClick={() => setLang('en')}
            className={`hover:text-white transition-colors cursor-pointer ${
              lang === 'en' ? 'text-[#DA9A62] underline underline-offset-4' : 'text-gray-400'
            }`}
          >
            EN
          </button>
          <span className="text-gray-600">|</span>
          <button
            onClick={() => setLang('ar')}
            className={`hover:text-white transition-colors cursor-pointer ${
              lang === 'ar' ? 'text-[#DA9A62] underline underline-offset-4' : 'text-gray-400'
            }`}
          >
            AR
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-xl mx-auto text-center flex flex-col items-center justify-center relative z-10 py-16">
        <span className="text-[#DA9A62] text-sm tracking-[0.2em] font-bold uppercase mb-6">
          {t('maintenance.tagline')}
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black uppercase tracking-tight leading-none mb-6">
          {t('maintenance.title').split(' ').map((word, idx) => (
            <React.Fragment key={idx}>
              {word}
              {idx === 0 && <br />}
            </React.Fragment>
          ))}
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 leading-relaxed font-semibold mb-8">
          {t('maintenance.description')}
        </p>
        
        {/* Divider line */}
        <div className="h-[1px] w-12 bg-[#DA9A62]/30 mb-8"></div>
        
        {/* Action link */}
        <a
          href="mailto:info@nexat.sa"
          className="text-sm tracking-[0.18em] uppercase text-[#DA9A62] hover:text-[#E5A86A] transition-colors duration-300 font-bold border-b border-[#DA9A62]/20 pb-1"
        >
          {t('maintenance.getInTouch')}
        </a>
      </main>

      {/* Footer */}
      <footer className="text-xs tracking-wider text-white/40 text-center relative z-10">
        {t('maintenance.copyright')}
      </footer>

    </div>
  );
};
