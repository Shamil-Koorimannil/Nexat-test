import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const CompanyProfile: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', labelEn: 'About NEXAT', labelAr: 'عن نكسات' },
    { id: 'vision-values', labelEn: 'Vision & Values', labelAr: 'الرؤية والقيم' },
    { id: 'why-choose', labelEn: 'Why Choose Us', labelAr: 'لماذا نكسات؟' },
    { id: 'divisions', labelEn: 'Divisions', labelAr: 'قطاعات الأعمال' },
    { id: 'sectors', labelEn: 'Market Sectors', labelAr: 'القطاعات السوقية' },
    { id: 'qa', labelEn: 'Quality Assurance', labelAr: 'توكيد الجودة' },
    { id: 'future', labelEn: 'Future Pillars', labelAr: 'بناء المستقبل' },
    { id: 'contact', labelEn: 'Contact Info', labelAr: 'اتصل بنا' },
  ];

  return (
    <section 
      id="company-profile" 
      className="bg-[#0B1624] text-white py-24 px-6 md:px-12 border-b border-white/5 relative overflow-hidden select-none"
      style={{ direction: isRtl ? 'rtl' : 'ltr' }}
    >
      {/* Background patterns */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#DA9A62 1px, transparent 1px)', 
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#DA9A62]/3 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16 max-w-[800px] mx-auto">
          <span className="text-[#DA9A62] text-xs font-sans font-bold uppercase tracking-[0.25em] mb-3 block">
            {isRtl ? 'الملف التعريفي للشركة' : 'NEXAT CORPORATE PROFILE'}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-wider font-normal leading-tight">
            {isRtl ? 'الشريك الإنشائي الموثوق' : 'YOUR TRUSTED CONSTRUCTION PARTNER'}
          </h2>
          <div className="w-[60px] h-[1px] bg-[#DA9A62]/40 mx-auto mt-6"></div>
        </div>

        {/* Tab Layout Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start min-h-[500px]">
          
          {/* Left Sidebar Navigation (Desktop only) */}
          <div className="hidden lg:flex flex-col gap-2 w-[260px] flex-shrink-0 border-r border-white/5 pr-4 rtl:border-r-0 rtl:border-l rtl:pr-0 rtl:pl-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-5 text-start font-sans text-xs uppercase tracking-wider font-bold rounded-lg transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#13263A] text-[#DA9A62] border-l-2 border-[#DA9A62] rtl:border-l-0 rtl:border-r-2 rtl:border-[#DA9A62]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {isRtl ? tab.labelAr : tab.labelEn}
              </button>
            ))}
          </div>

          {/* Tab Selector dropdown for Mobile and Tablet */}
          <div className="lg:hidden w-full mb-6">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full bg-[#13263A] text-white border border-white/10 px-4 py-3 rounded-lg text-sm font-sans focus:outline-none focus:border-[#DA9A62] cursor-pointer"
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {isRtl ? tab.labelAr : tab.labelEn}
                </option>
              ))}
            </select>
          </div>

          {/* Right Content Panels */}
          <div className="flex-1 w-full bg-[#13263A]/20 border border-white/5 p-6 md:p-10 rounded-[24px] backdrop-blur-sm min-h-[450px] flex flex-col justify-between">
            
            {/* Panel: About NEXAT */}
            {activeTab === 'about' && (
              <div className="space-y-6 text-start">
                <span className="text-[#DA9A62] text-[10px] font-sans font-bold uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded-full">
                  {t('profile.about.title')}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-light text-white leading-snug">
                  {t('profile.about.headline')}
                </h3>
                <div className="space-y-4 font-secondary text-sm md:text-base text-gray-300 leading-relaxed">
                  <p>{t('profile.about.body1')}</p>
                  <p>{t('profile.about.body2')}</p>
                  <p>{t('profile.about.body3')}</p>
                </div>
                
                {/* Vision 2030 Commitment Subcard */}
                <div className="mt-8 pt-6 border-t border-white/5 bg-[#DA9A62]/3 p-5 rounded-xl border border-[#DA9A62]/10">
                  <h4 className="text-xs font-sans font-bold uppercase text-[#DA9A62] tracking-wider mb-2">
                    {t('profile.vision2030.headline')}
                  </h4>
                  <p className="text-xs font-secondary text-gray-400 leading-relaxed">
                    {t('profile.vision2030.body')}
                  </p>
                </div>
              </div>
            )}

            {/* Panel: Vision & Values */}
            {activeTab === 'vision-values' && (
              <div className="space-y-8 text-start">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Vision Card */}
                  <div className="bg-white/5 border border-white/5 p-6 rounded-xl space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-[32px] h-[32px] rounded-lg bg-[#DA9A62]/10 flex items-center justify-center text-[#DA9A62]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                      </div>
                      <h4 className="text-base font-serif font-bold text-white uppercase tracking-wider">{t('profile.visionMission.visionLabel')}</h4>
                    </div>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed whitespace-pre-line font-secondary">
                      {t('profile.visionMission.visionText')}
                    </p>
                  </div>
                  
                  {/* Mission Card */}
                  <div className="bg-white/5 border border-white/5 p-6 rounded-xl space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-[32px] h-[32px] rounded-lg bg-[#DA9A62]/10 flex items-center justify-center text-[#DA9A62]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                      </div>
                      <h4 className="text-base font-serif font-bold text-white uppercase tracking-wider">{t('profile.visionMission.missionLabel')}</h4>
                    </div>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed whitespace-pre-line font-secondary">
                      {t('profile.visionMission.missionText')}
                    </p>
                  </div>
                </div>

                {/* Core Values Section */}
                <div className="pt-6 border-t border-white/5 space-y-4">
                  <h4 className="text-sm font-serif font-bold uppercase text-[#DA9A62] tracking-wider">{t('profile.coreValues.title')}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white/3 rounded-lg border border-white/5">
                      <h5 className="text-xs font-sans font-bold text-white mb-2">{t('profile.coreValues.val1Title')}</h5>
                      <p className="text-2xs md:text-xs text-gray-400 font-secondary leading-relaxed">{t('profile.coreValues.val1Text')}</p>
                    </div>
                    <div className="p-4 bg-white/3 rounded-lg border border-white/5">
                      <h5 className="text-xs font-sans font-bold text-white mb-2">{t('profile.coreValues.val2Title')}</h5>
                      <p className="text-2xs md:text-xs text-gray-400 font-secondary leading-relaxed">{t('profile.coreValues.val2Text')}</p>
                    </div>
                    <div className="p-4 bg-white/3 rounded-lg border border-white/5">
                      <h5 className="text-xs font-sans font-bold text-white mb-2">{t('profile.coreValues.val3Title')}</h5>
                      <p className="text-2xs md:text-xs text-gray-400 font-secondary leading-relaxed">{t('profile.coreValues.val3Text')}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Panel: Why Choose Us */}
            {activeTab === 'why-choose' && (
              <div className="space-y-6 text-start">
                <span className="text-[#DA9A62] text-[10px] font-sans font-bold uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded-full">
                  {t('profile.whyChoose.title')}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3 bg-[#DA9A62]/3 border border-[#DA9A62]/10 p-6 rounded-xl">
                    <h4 className="text-lg font-serif text-[#DA9A62] font-semibold uppercase">{t('profile.whyChoose.reason1Title')}</h4>
                    <p className="text-xs md:text-sm text-gray-300 font-secondary leading-relaxed">
                      {t('profile.whyChoose.reason1Text')}
                    </p>
                  </div>
                  <div className="space-y-3 bg-white/5 border border-white/5 p-6 rounded-xl">
                    <h4 className="text-lg font-serif text-white font-semibold uppercase">{t('profile.whyChoose.reason2Title')}</h4>
                    <p className="text-xs md:text-sm text-gray-300 font-secondary leading-relaxed">
                      {t('profile.whyChoose.reason2Text')}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Panel: Divisions */}
            {activeTab === 'divisions' && (
              <div className="space-y-6 text-start">
                <span className="text-[#DA9A62] text-[10px] font-sans font-bold uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded-full">
                  {t('profile.divisions.title')}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 bg-white/5 border border-white/5 rounded-xl space-y-2">
                    <span className="text-[#DA9A62] font-sans font-bold text-xs uppercase block">01</span>
                    <h4 className="text-sm md:text-base font-serif font-bold text-white uppercase">{t('profile.divisions.div1Title')}</h4>
                    <p className="text-2xs md:text-xs text-gray-400 font-secondary">{t('profile.divisions.div1Items')}</p>
                  </div>
                  <div className="p-5 bg-white/5 border border-white/5 rounded-xl space-y-2">
                    <span className="text-[#DA9A62] font-sans font-bold text-xs uppercase block">02</span>
                    <h4 className="text-sm md:text-base font-serif font-bold text-white uppercase">{t('profile.divisions.div2Title')}</h4>
                    <p className="text-2xs md:text-xs text-gray-400 font-secondary">{t('profile.divisions.div2Items')}</p>
                  </div>
                  <div className="p-5 bg-white/5 border border-white/5 rounded-xl space-y-2">
                    <span className="text-[#DA9A62] font-sans font-bold text-xs uppercase block">03</span>
                    <h4 className="text-sm md:text-base font-serif font-bold text-white uppercase">{t('profile.divisions.div3Title')}</h4>
                    <p className="text-2xs md:text-xs text-gray-400 font-secondary">{t('profile.divisions.div3Items')}</p>
                  </div>
                  <div className="p-5 bg-white/5 border border-white/5 rounded-xl space-y-2">
                    <span className="text-[#DA9A62] font-sans font-bold text-xs uppercase block">04</span>
                    <h4 className="text-sm md:text-base font-serif font-bold text-white uppercase">{t('profile.divisions.div4Title')}</h4>
                    <p className="text-2xs md:text-xs text-gray-400 font-secondary">{t('profile.divisions.div4Items')}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Panel: Market Sectors */}
            {activeTab === 'sectors' && (
              <div className="space-y-6 text-start">
                <span className="text-[#DA9A62] text-[10px] font-sans font-bold uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded-full">
                  {t('profile.sectors.title')}
                </span>
                <p className="text-xs md:text-sm text-gray-300 font-secondary">
                  {t('profile.sectors.intro')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3">
                    <h4 className="text-xs font-sans font-bold uppercase text-[#DA9A62] tracking-wider">{t('profile.sectors.primaryTitle')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {((isRtl 
                        ? ["الحكومي", "التجاري", "السكني", "الرعاية الصحية", "الضيافة والفنادق", "التعليم"] 
                        : ["Government", "Commercial", "Residential", "Healthcare", "Hospitality", "Education"]
                      ) as string[]).map((sector) => (
                        <span key={sector} className="text-2xs md:text-xs font-sans px-3 py-2 bg-white/5 border border-white/5 rounded-lg text-white">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs font-sans font-bold uppercase text-[#DA9A62] tracking-wider">{t('profile.sectors.additionalTitle')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {((isRtl 
                        ? ["الصناعي", "الخدمات اللوجستية", "البنية التحتية", "الطاقة", "المشاريع متعددة الاستخدامات"] 
                        : ["Industrial", "Logistics", "Infrastructure", "Energy", "Mixed-Use Developments"]
                      ) as string[]).map((sector) => (
                        <span key={sector} className="text-2xs md:text-xs font-sans px-3 py-2 bg-white/5 border border-white/5 rounded-lg text-white">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Panel: Quality Assurance */}
            {activeTab === 'qa' && (
              <div className="space-y-6 text-start">
                <span className="text-[#DA9A62] text-[10px] font-sans font-bold uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded-full">
                  {t('profile.qa.title')}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-light text-white uppercase leading-snug">
                  {t('profile.qa.headline')}
                </h3>
                <div className="bg-white/5 border border-white/5 p-6 rounded-xl border-l-2 border-l-[#DA9A62] rtl:border-l-0 rtl:border-r-2 rtl:border-r-[#DA9A62]">
                  <p className="text-xs md:text-sm text-gray-300 font-secondary leading-relaxed">
                    {t('profile.qa.body')}
                  </p>
                </div>
              </div>
            )}

            {/* Panel: Future & Sustainability */}
            {activeTab === 'future' && (
              <div className="space-y-6 text-start">
                <div className="space-y-1">
                  <span className="text-[#DA9A62] text-[10px] font-sans font-bold uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded-full">
                    {t('profile.future.title')}
                  </span>
                  <p className="text-2xs md:text-xs text-gray-400 font-secondary mt-2">{t('profile.future.desc')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[350px] overflow-y-auto scrollbar-thin pr-1">
                  <div className="p-5 bg-white/5 border border-white/5 rounded-xl space-y-2">
                    <h4 className="text-xs font-sans font-bold text-[#DA9A62] uppercase tracking-wider">{t('profile.future.hseTitle')}</h4>
                    <p className="text-[10px] md:text-xs text-gray-300 font-secondary leading-relaxed">{t('profile.future.hseText')}</p>
                  </div>
                  <div className="p-5 bg-white/5 border border-white/5 rounded-xl space-y-2">
                    <h4 className="text-xs font-sans font-bold text-[#DA9A62] uppercase tracking-wider">{t('profile.future.sustTitle')}</h4>
                    <p className="text-[10px] md:text-xs text-gray-300 font-secondary leading-relaxed">{t('profile.future.sustText')}</p>
                  </div>
                  <div className="p-5 bg-white/5 border border-white/5 rounded-xl space-y-2">
                    <h4 className="text-xs font-sans font-bold text-[#DA9A62] uppercase tracking-wider">{t('profile.future.digTitle')}</h4>
                    <p className="text-[10px] md:text-xs text-gray-300 font-secondary leading-relaxed">{t('profile.future.digText')}</p>
                  </div>
                  <div className="p-5 bg-white/5 border border-white/5 rounded-xl space-y-2">
                    <h4 className="text-xs font-sans font-bold text-[#DA9A62] uppercase tracking-wider">{t('profile.future.advTitle')}</h4>
                    <p className="text-[10px] md:text-xs text-gray-300 font-secondary leading-relaxed">{t('profile.future.advText')}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Panel: Contact Info */}
            {activeTab === 'contact' && (
              <div className="space-y-6 text-start">
                <span className="text-[#DA9A62] text-[10px] font-sans font-bold uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded-full">
                  {t('profile.cta.title')}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-4">
                    <div>
                      <span className="text-white/40 block text-2xs uppercase font-sans mb-1">{t('profile.cta.email')}</span>
                      <a href="mailto:info@nexat.sa" className="text-white font-mono text-sm hover:text-[#DA9A62] transition-colors">
                        info@nexat.sa
                      </a>
                    </div>
                    <div>
                      <span className="text-white/40 block text-2xs uppercase font-sans mb-1">{t('profile.cta.phone')}</span>
                      <a href="tel:+966566667976" className="text-white font-mono text-sm hover:text-[#DA9A62] transition-colors">
                        +966 56 666 7976
                      </a>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="text-white/40 block text-2xs uppercase font-sans mb-1">{t('profile.cta.address')}</span>
                      <span className="text-white text-xs block leading-relaxed">
                        {t('profile.cta.office')}
                      </span>
                    </div>
                    <div>
                      <span className="text-white/40 block text-2xs uppercase font-sans mb-1">{t('profile.cta.social')}</span>
                      <span className="text-white text-xs block font-mono">
                        @nextat_Construction_Co.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
