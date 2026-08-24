import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Certification {
  nameKey: string;
  icon: React.ReactNode;
}

export const Hero: React.FC = () => {
  const { t } = useLanguage();

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

  return (
    <section className="bg-white py-24 md:py-32 flex flex-col items-center justify-center text-center px-m">
      <div className="container mx-auto max-w-[1000px]">
        {/* Subtitle */}
        <span className="text-gold text-xs font-sans font-bold uppercase tracking-[0.25em] mb-s block">
          {t('hero.tagline')}
        </span>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-black uppercase tracking-wider font-normal leading-[1.15] mb-xl max-w-[900px] mx-auto">
          {t('hero.headline')}
        </h1>

        {/* Short divider */}
        <div className="w-[60px] h-[1px] bg-black/20 mx-auto mb-16"></div>

        {/* Text paragraph */}
        <p className="text-gray-500 font-secondary text-sm md:text-base leading-relaxed max-w-[650px] mx-auto mb-20">
          {t('hero.description')}
        </p>

        {/* Custom monochrome badges row */}
        <div className="flex flex-wrap justify-center items-center gap-m md:gap-l max-w-[1100px] mx-auto pt-m">
          {certifications.map((cert) => (
            <div
              key={cert.nameKey}
              className="flex flex-col items-center justify-center gap-xs text-[#1a1a1a]"
              style={{ width: '110px' }}
            >
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] monochrome-logo">
                {cert.icon}
              </div>
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-gray-500 text-center select-none block mt-xs leading-tight">
                {t(cert.nameKey)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
