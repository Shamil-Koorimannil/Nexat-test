import React from 'react';
import { useLanguage } from '../context/LanguageContext';

// Building image paths
const BUILDINGS = Array.from({ length: 14 }, (_, i) => `/assets/Buildings/b${i + 1}.jpg`);

// Bento grid of 5 building images
const BentoBuildingGrid: React.FC<{ images: string[] }> = ({ images }) => (
  <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
    <div className="row-span-2 overflow-hidden rounded-xl h-[260px] sm:h-[320px]">
      <img src={images[0]} alt="Nexat building" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>
    <div className="overflow-hidden rounded-xl h-[125px] sm:h-[155px]">
      <img src={images[1]} alt="Nexat building" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>
    <div className="overflow-hidden rounded-xl h-[125px] sm:h-[155px]">
      <img src={images[2]} alt="Nexat building" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>
    <div className="overflow-hidden rounded-xl h-[125px] sm:h-[155px]">
      <img src={images[3]} alt="Nexat building" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>
    <div className="overflow-hidden rounded-xl h-[125px] sm:h-[155px]">
      <img src={images[4]} alt="Nexat building" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>
  </div>
);

// Infinite horizontal marquee strip
const BuildingStrip: React.FC<{ images: string[]; reverse?: boolean }> = ({ images, reverse = false }) => {
  const track = [...images, ...images];
  return (
    <div className="w-full overflow-hidden" style={{ maxWidth: '100vw' }}>
      <div
        className={`flex gap-3 ${reverse ? 'animate-building-marquee-rev' : 'animate-building-marquee'}`}
        style={{ width: 'max-content' }}
      >
        {track.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-[200px] sm:w-[250px] h-[140px] sm:h-[170px] overflow-hidden rounded-xl">
            <img src={src} alt="Nexat project" loading="lazy" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

// Featured image cluster (1 large + 2 small)
const FeaturedImageCluster: React.FC<{ images: string[] }> = ({ images }) => (
  <div className="relative w-full">
    <div className="overflow-hidden rounded-2xl w-full h-[260px] sm:h-[340px] md:h-[420px]">
      <img src={images[0]} alt="Nexat featured" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>
    <div className="absolute bottom-4 left-4 bg-[#0B1624]/80 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#DA9A62] animate-pulse block" />
      <span className="text-[10px] font-sans font-bold text-white uppercase tracking-widest">Built With Precision</span>
    </div>
    <div className="flex gap-2 mt-2 sm:mt-3">
      <div className="overflow-hidden rounded-xl flex-1 h-[100px] sm:h-[130px]">
        <img src={images[1]} alt="Nexat project" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="overflow-hidden rounded-xl flex-1 h-[100px] sm:h-[130px]">
        <img src={images[2]} alt="Nexat project" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
      </div>
    </div>
  </div>
);

// Mosaic strip
const MosaicStrip: React.FC<{ images: string[] }> = ({ images }) => (
  <div className="grid grid-cols-3 gap-2 w-full mt-8">
    <div className="col-span-2 overflow-hidden rounded-xl h-[160px] sm:h-[200px]">
      <img src={images[0]} alt="Nexat" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>
    <div className="overflow-hidden rounded-xl h-[160px] sm:h-[200px]">
      <img src={images[1]} alt="Nexat" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>
    <div className="overflow-hidden rounded-xl h-[120px] sm:h-[150px]">
      <img src={images[2]} alt="Nexat" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>
    <div className="col-span-2 overflow-hidden rounded-xl h-[120px] sm:h-[150px]">
      <img src={images[3]} alt="Nexat" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>
  </div>
);

export const CompanyProfile: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <>
      <style>{`
        @keyframes bldg-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes bldg-marquee-rev { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-building-marquee { animation: bldg-marquee 32s linear infinite; }
        .animate-building-marquee-rev { animation: bldg-marquee-rev 36s linear infinite; }
        .animate-building-marquee:hover, .animate-building-marquee-rev:hover { animation-play-state: paused; }
      `}</style>

      <div
        className="bg-[#0B1624] text-white flex flex-col w-full select-none border-b border-white/5"
        style={{ direction: isRtl ? 'rtl' : 'ltr', overflowX: 'hidden' }}
      >

        {/* ═══ SECTION 1: ABOUT ═══ */}
        <section id="about-section" className="py-20 md:py-28 px-5 sm:px-8 md:px-12 relative overflow-hidden">
          <div
            className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#DA9A62 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />
          <div className="max-w-6xl mx-auto relative z-10">

            {/* Text + bento grid side by side on large */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

              {/* Text column */}
              <div className="space-y-6 order-2 lg:order-1">
                <div className="space-y-3">
                  <span className="text-[#DA9A62] text-xs font-sans font-bold uppercase tracking-[0.25em] block">
                    {t('profile.about.title')}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white uppercase tracking-wider font-normal leading-tight">
                    {isRtl ? (
                      <>التميز <br /><span className="text-[#DA9A62]">الهندسي.</span></>
                    ) : (
                      <>Engineering <br /><span className="text-[#DA9A62]">Excellence.</span></>
                    )}
                  </h2>
                  <div className="w-[50px] h-[1px] bg-[#DA9A62]/40 mt-2" />
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-serif font-light text-white leading-relaxed">
                  {t('profile.about.headline')}
                </h3>

                <div className="space-y-4 font-secondary text-sm text-gray-300 leading-relaxed">
                  <p>{t('profile.about.body1')}</p>
                  <p>{t('profile.about.body2')}</p>
                  <p>{t('profile.about.body3')}</p>
                </div>

                {/* Vision 2030 card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/5 bg-gradient-to-r from-white/5 to-transparent">
                  <h4 className="text-xs font-sans font-bold text-[#DA9A62] uppercase tracking-wider mb-2">
                    {t('profile.vision2030.headline')}
                  </h4>
                  <p className="text-xs font-secondary text-gray-400 leading-relaxed">
                    {t('profile.vision2030.body')}
                  </p>
                </div>

                {/* Stat row */}
                <div className="flex flex-wrap gap-6 pt-2">
                  {[
                    { num: '20+', label: 'Years of Excellence' },
                    { num: '500+', label: 'Projects Delivered' },
                    { num: '15+', label: 'Countries Served' },
                  ].map(({ num, label }) => (
                    <div key={label}>
                      <div className="text-2xl sm:text-3xl font-serif text-[#DA9A62]">{num}</div>
                      <div className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bento grid */}
              <div className="order-1 lg:order-2">
                <BentoBuildingGrid images={[BUILDINGS[0], BUILDINGS[1], BUILDINGS[2], BUILDINGS[3], BUILDINGS[4]]} />
              </div>
            </div>

            {/* Dual-row marquee strip */}
            <div className="mt-12 -mx-5 sm:-mx-8 md:-mx-12 space-y-3 overflow-hidden">
              <BuildingStrip images={[BUILDINGS[5], BUILDINGS[6], BUILDINGS[7], BUILDINGS[8], BUILDINGS[9], BUILDINGS[10]]} />
              <BuildingStrip images={[BUILDINGS[11], BUILDINGS[12], BUILDINGS[13], BUILDINGS[0], BUILDINGS[2], BUILDINGS[4]]} reverse />
            </div>

          </div>
        </section>

        {/* ═══ SECTION 2: VISION, MISSION & VALUES ═══ */}
        <section id="vision-values-section" className="py-20 md:py-28 px-5 sm:px-8 md:px-12 bg-[#08111D] relative border-t border-b border-white/5 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#DA9A62]/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#DA9A62]/3 blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10 space-y-10">

            <div className="text-center space-y-2">
              <span className="text-[#DA9A62] text-xs font-sans font-bold uppercase tracking-[0.3em] block">Our Foundation</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white uppercase tracking-wider font-normal">
                Vision · Mission · Values
              </h2>
              <div className="w-[50px] h-[1px] bg-[#DA9A62]/40 mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

              {/* Vision Card */}
              <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-[#DA9A62]/20 transition-all duration-500 flex flex-col">
                <div className="h-[160px] sm:h-[140px] md:h-[170px] overflow-hidden flex-shrink-0">
                  <img src={BUILDINGS[3]} alt="Vision" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-[36px] h-[36px] rounded-xl bg-[#DA9A62]/10 flex items-center justify-center text-[#DA9A62] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </div>
                    <h4 className="text-base font-serif uppercase tracking-wider text-white font-normal">
                      {t('profile.visionMission.visionLabel')}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-300 font-secondary leading-relaxed whitespace-pre-line">
                    {t('profile.visionMission.visionText')}
                  </p>
                </div>
              </div>

              {/* Mission Card */}
              <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-[#DA9A62]/20 transition-all duration-500 flex flex-col">
                <div className="h-[160px] sm:h-[140px] md:h-[170px] overflow-hidden flex-shrink-0">
                  <img src={BUILDINGS[6]} alt="Mission" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-[36px] h-[36px] rounded-xl bg-[#DA9A62]/10 flex items-center justify-center text-[#DA9A62] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                    </div>
                    <h4 className="text-base font-serif uppercase tracking-wider text-white font-normal">
                      {t('profile.visionMission.missionLabel')}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-300 font-secondary leading-relaxed whitespace-pre-line">
                    {t('profile.visionMission.missionText')}
                  </p>
                </div>
              </div>

              {/* Values Card */}
              <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-[#DA9A62]/20 transition-all duration-500 flex flex-col">
                <div className="h-[160px] sm:h-[140px] md:h-[170px] overflow-hidden flex-shrink-0">
                  <img src={BUILDINGS[9]} alt="Core Values" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="w-[36px] h-[36px] rounded-xl bg-[#DA9A62]/10 flex items-center justify-center text-[#DA9A62] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </div>
                    <h4 className="text-base font-serif uppercase tracking-wider text-white font-normal">
                      {t('profile.coreValues.title')}
                    </h4>
                  </div>
                  <div className="space-y-2.5 font-secondary text-xs">
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

            {/* Mosaic strip */}
            <MosaicStrip images={[BUILDINGS[10], BUILDINGS[11], BUILDINGS[12], BUILDINGS[13]]} />

          </div>
        </section>

        {/* ═══ SECTION 3: FUTURE-PROOF / BUILDING RESPONSIBLY ═══ */}
        <section id="future-responsibly-section" className="py-20 md:py-28 px-5 sm:px-8 md:px-12 relative overflow-hidden">
          <div
            className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#DA9A62 1px, transparent 1px)', backgroundSize: '30px 30px' }}
          />

          <div className="max-w-6xl mx-auto relative z-10 space-y-12">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

              {/* Text + pillar cards */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-3">
                  <span className="text-[#DA9A62] text-xs font-sans font-bold uppercase tracking-[0.25em] block">
                    {t('profile.future.title')}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white uppercase tracking-wider font-normal leading-tight">
                    {t('profile.future.desc')}
                  </h3>
                  <div className="w-[50px] h-[1px] bg-[#DA9A62]/40" />
                </div>

                {/* Pillar cards with hover image reveal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group relative p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-[#DA9A62]/20 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <img src={BUILDINGS[4]} alt="" aria-hidden className="w-full h-full object-cover opacity-10" />
                    </div>
                    <div className="relative z-10 space-y-1.5">
                      <h4 className="text-xs font-sans font-bold text-[#DA9A62] uppercase tracking-wider">{t('profile.future.hseTitle')}</h4>
                      <p className="text-xs text-gray-300 font-secondary leading-relaxed">{t('profile.future.hseText')}</p>
                    </div>
                  </div>

                  <div className="group relative p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-[#DA9A62]/20 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <img src={BUILDINGS[7]} alt="" aria-hidden className="w-full h-full object-cover opacity-10" />
                    </div>
                    <div className="relative z-10 space-y-1.5">
                      <h4 className="text-xs font-sans font-bold text-[#DA9A62] uppercase tracking-wider">{t('profile.future.sustTitle')}</h4>
                      <p className="text-xs text-gray-300 font-secondary leading-relaxed">{t('profile.future.sustText')}</p>
                    </div>
                  </div>

                  <div className="group relative p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-[#DA9A62]/20 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <img src={BUILDINGS[8]} alt="" aria-hidden className="w-full h-full object-cover opacity-10" />
                    </div>
                    <div className="relative z-10 space-y-1.5">
                      <h4 className="text-xs font-sans font-bold text-[#DA9A62] uppercase tracking-wider">{t('profile.future.digTitle')}</h4>
                      <p className="text-xs text-gray-300 font-secondary leading-relaxed">{t('profile.future.digText')}</p>
                    </div>
                  </div>

                  <div className="group relative p-5 bg-[#DA9A62]/5 border border-[#DA9A62]/10 rounded-2xl hover:bg-[#DA9A62]/10 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <img src={BUILDINGS[13]} alt="" aria-hidden className="w-full h-full object-cover opacity-10" />
                    </div>
                    <div className="relative z-10 space-y-1.5">
                      <h4 className="text-xs font-sans font-bold text-[#DA9A62] uppercase tracking-wider">{t('profile.future.advTitle')}</h4>
                      <p className="text-xs text-gray-300 font-secondary leading-relaxed">{t('profile.future.advText')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured image cluster */}
              <div className="order-1 lg:order-2">
                <FeaturedImageCluster images={[BUILDINGS[2], BUILDINGS[5], BUILDINGS[11]]} />
              </div>
            </div>

            {/* Bottom 4-column gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[BUILDINGS[1], BUILDINGS[6], BUILDINGS[9], BUILDINGS[12]].map((src, i) => (
                <div key={i} className="overflow-hidden rounded-xl h-[120px] sm:h-[150px] md:h-[180px] relative group">
                  <img src={src} alt="Nexat construction" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </>
  );
};
