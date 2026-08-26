import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Maintenance: React.FC = () => {
  const { lang, setLang } = useLanguage();

  const text = {
    en: {
      title: 'Under Maintenance',
      subtitle: 'Our website is temporarily offline for scheduled updates. We will be back online shortly.',
      contact: 'Contact us:',
    },
    ar: {
      title: 'تحت الصيانة',
      subtitle: 'الموقع الإلكتروني مغلق مؤقتاً لأعمال الصيانة المجدولة. سنعود للعمل قريباً.',
      contact: 'اتصل بنا:',
    },
  };

  const t = text[lang];

  return (
    <div className="min-h-screen flex flex-col justify-between p-m bg-white text-black font-sans select-none">
      
      {/* Header: Language Switcher only */}
      <header className="flex justify-end w-full max-w-[1000px] mx-auto pt-s">
        <div className="flex gap-s items-center text-xs font-bold uppercase tracking-wider">
          <button
            onClick={() => setLang('en')}
            className={`cursor-pointer hover:opacity-70 transition-opacity ${
              lang === 'en' ? 'text-[#DA9A62] underline underline-offset-4' : 'text-gray-400'
            }`}
          >
            EN
          </button>
          <span className="text-gray-200">|</span>
          <button
            onClick={() => setLang('ar')}
            className={`cursor-pointer hover:opacity-70 transition-opacity ${
              lang === 'ar' ? 'text-[#DA9A62] underline underline-offset-4' : 'text-gray-400'
            }`}
          >
            العربية
          </button>
        </div>
      </header>

      {/* Main minimal centering content */}
      <main className="flex flex-col items-center justify-center text-center max-w-[480px] mx-auto py-xl">
        {/* Center Logo */}
        <img
          src="/Nexat Logo.png"
          alt="NEXAT Logo"
          className="h-[60px] md:h-[72px] w-auto object-contain mb-l"
        />

        {/* Minimal Title */}
        <h1 className="text-2xl md:text-3xl font-serif text-black uppercase tracking-wider font-normal mb-s">
          {t.title}
        </h1>

        {/* Small divider line */}
        <div className="w-[40px] h-[1px] bg-black/20 mb-m"></div>

        {/* Short description */}
        <p className="text-gray-500 font-secondary text-sm leading-relaxed mb-l max-w-[380px]">
          {t.subtitle}
        </p>

        {/* Contact Email Link */}
        <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
          <span className="mr-2xs">{t.contact}</span>
          <a href="mailto:info@nexat.sa" className="text-black hover:text-[#DA9A62] transition-colors border-b border-black/10 pb-[2px]">
            info@nexat.sa
          </a>
        </div>
      </main>

      {/* Footer copyright */}
      <footer className="text-[10px] font-secondary tracking-widest text-gray-400 text-center pb-s">
        © {new Date().getFullYear()} NEXAT.
      </footer>

    </div>
  );
};
