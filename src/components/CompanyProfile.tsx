import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const CompanyProfile: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <div 
      className="bg-[#0B1624] text-white flex flex-col w-full overflow-hidden select-none border-b border-white/5"
      style={{ direction: isRtl ? 'rtl' : 'ltr' }}
    >
      {/* SECTION 1: ABOUT & VISION 2030 */}
      <section id="about-section" className="py-24 px-6 md:px-12 relative">
        <div 
          className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(#DA9A62 1px, transparent 1px)', 
            backgroundSize: '24px 24px'
          }}
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
          {/* Left Column: Heading */}
          <div className="space-y-4 text-start">
            <span className="text-[#DA9A62] text-xs font-sans font-bold uppercase tracking-[0.25em] block">
              {t('profile.about.title')}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-wider font-normal leading-tight">
              {isRtl ? (
                <>التميز <br /><span className="text-[#DA9A62]">الهندسي.</span></>
              ) : (
                <>Engineering <br /><span className="text-[#DA9A62]">Excellence.</span></>
              )}
            </h2>
            <div className="w-[50px] h-[1px] bg-[#DA9A62]/40 mt-4"></div>
          </div>

          {/* Right Column: Copy & Vision 2030 */}
          <div className="lg:col-span-2 space-y-8 text-start">
            <h3 className="text-lg md:text-xl font-serif font-light text-white leading-relaxed">
              {t('profile.about.headline')}
            </h3>
            <div className="space-y-4 font-secondary text-sm md:text-base text-gray-300 leading-relaxed">
              <p>{t('profile.about.body1')}</p>
              <p>{t('profile.about.body2')}</p>
              <p>{t('profile.about.body3')}</p>
            </div>
            
            {/* Vision 2030 Sub-card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 bg-gradient-to-r from-white/5 to-transparent">
              <h4 className="text-xs font-sans font-bold text-[#DA9A62] uppercase tracking-wider mb-2">
                {t('profile.vision2030.headline')}
              </h4>
              <p className="text-xs font-secondary text-gray-400 leading-relaxed">
                {t('profile.vision2030.body')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VISION, MISSION & VALUES */}
      <section id="vision-values-section" className="py-24 px-6 md:px-12 bg-[#08111D] relative border-t border-b border-white/5">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Vision Card */}
            <div className="bg-white/5 border border-white/5 p-8 rounded-2xl space-y-4 flex flex-col justify-between hover:border-[#DA9A62]/20 transition-all duration-500">
              <div className="space-y-4">
                <div className="w-[40px] h-[40px] rounded-xl bg-[#DA9A62]/10 flex items-center justify-center text-[#DA9A62]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </div>
                <h4 className="text-lg font-serif uppercase tracking-wider text-white font-normal">
                  {t('profile.visionMission.visionLabel')}
                </h4>
                <p className="text-xs md:text-sm text-gray-300 font-secondary leading-relaxed whitespace-pre-line">
                  {t('profile.visionMission.visionText')}
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white/5 border border-white/5 p-8 rounded-2xl space-y-4 flex flex-col justify-between hover:border-[#DA9A62]/20 transition-all duration-500">
              <div className="space-y-4">
                <div className="w-[40px] h-[40px] rounded-xl bg-[#DA9A62]/10 flex items-center justify-center text-[#DA9A62]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                </div>
                <h4 className="text-lg font-serif uppercase tracking-wider text-white font-normal">
                  {t('profile.visionMission.missionLabel')}
                </h4>
                <p className="text-xs md:text-sm text-gray-300 font-secondary leading-relaxed whitespace-pre-line">
                  {t('profile.visionMission.missionText')}
                </p>
              </div>
            </div>

            {/* Core Values Card */}
            <div className="bg-white/5 border border-white/5 p-8 rounded-2xl space-y-4 flex flex-col justify-between hover:border-[#DA9A62]/20 transition-all duration-500">
              <div className="space-y-4">
                <div className="w-[40px] h-[40px] rounded-xl bg-[#DA9A62]/10 flex items-center justify-center text-[#DA9A62]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h4 className="text-lg font-serif uppercase tracking-wider text-white font-normal">
                  {t('profile.coreValues.title')}
                </h4>
                <div className="space-y-3 font-secondary text-2xs md:text-xs">
                  <div>
                    <h5 className="font-bold text-white mb-0.5">{t('profile.coreValues.val1Title')}</h5>
                    <p className="text-gray-400 leading-relaxed">{t('profile.coreValues.val1Text')}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-0.5">{t('profile.coreValues.val2Title')}</h5>
                    <p className="text-gray-400 leading-relaxed">{t('profile.coreValues.val2Text')}</p>
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-0.5">{t('profile.coreValues.val3Title')}</h5>
                    <p className="text-gray-400 leading-relaxed">{t('profile.coreValues.val3Text')}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: FUTURE-PROOF CONSTRUCTION */}
      <section id="future-responsibly-section" className="py-24 px-6 md:px-12 relative">
        <div className="max-w-6xl mx-auto relative z-10 space-y-12">
          {/* Header */}
          <div className="text-start">
            <span className="text-[#DA9A62] text-xs font-sans font-bold uppercase tracking-[0.25em] block mb-2">
              {t('profile.future.title')}
            </span>
            <h3 className="text-2xl md:text-4xl font-serif text-white uppercase tracking-wider font-normal leading-tight">
              {t('profile.future.desc')}
            </h3>
            <div className="w-[50px] h-[1px] bg-[#DA9A62]/40 mt-4"></div>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* HSE */}
            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl space-y-3 hover:border-[#DA9A62]/10 transition-colors">
              <h4 className="text-xs font-sans font-bold text-[#DA9A62] uppercase tracking-wider">{t('profile.future.hseTitle')}</h4>
              <p className="text-2xs md:text-xs text-gray-300 font-secondary leading-relaxed">{t('profile.future.hseText')}</p>
            </div>

            {/* Sustainability */}
            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl space-y-3 hover:border-[#DA9A62]/10 transition-colors">
              <h4 className="text-xs font-sans font-bold text-[#DA9A62] uppercase tracking-wider">{t('profile.future.sustTitle')}</h4>
              <p className="text-2xs md:text-xs text-gray-300 font-secondary leading-relaxed">{t('profile.future.sustText')}</p>
            </div>

            {/* Digital Construction */}
            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl space-y-3 hover:border-[#DA9A62]/10 transition-colors">
              <h4 className="text-xs font-sans font-bold text-[#DA9A62] uppercase tracking-wider">{t('profile.future.digTitle')}</h4>
              <p className="text-2xs md:text-xs text-gray-300 font-secondary leading-relaxed">{t('profile.future.digText')}</p>
            </div>

            {/* Advantages */}
            <div className="p-6 bg-[#DA9A62]/3 border border-[#DA9A62]/10 rounded-2xl space-y-3 hover:bg-[#DA9A62]/5 transition-colors">
              <h4 className="text-xs font-sans font-bold text-[#DA9A62] uppercase tracking-wider">{t('profile.future.advTitle')}</h4>
              <p className="text-2xs md:text-xs text-gray-300 font-secondary leading-relaxed">{t('profile.future.advText')}</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
