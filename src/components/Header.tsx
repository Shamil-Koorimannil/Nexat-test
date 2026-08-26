import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Header: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: t('header.aboutUs'), href: '#expertise' },
    { label: t('header.divisions'), href: '#feature-cards' },
    { label: t('header.projects'), href: '#projects' },
    { label: t('header.capabilities'), href: '#global-presence' },
    { label: t('header.contact'), href: '#footer' },
  ];

  return (
    <header className="w-full z-50 sticky top-[-38px]">
      {/* Thin Top Bar */}
      <div className="bg-black text-[#dcdcdc] h-[38px] flex items-center border-b border-white/10 px-m text-xs">
        <div className="container mx-auto flex justify-between items-center px-s">
          {/* Top Left: Language Selector */}
          <div className="flex gap-s items-center">
            <span className="text-gray-500 font-bold uppercase tracking-wider">{t('header.languageLabel')}</span>
            <button
              onClick={() => setLang('en')}
              className={`font-semibold hover:text-white transition-colors cursor-pointer ${
                lang === 'en' ? 'text-white font-extrabold underline underline-offset-4' : 'text-gray-400'
              }`}
            >
              English
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => setLang('ar')}
              className={`font-semibold hover:text-white transition-colors cursor-pointer ${
                lang === 'ar' ? 'text-white font-extrabold underline underline-offset-4' : 'text-gray-400'
              }`}
            >
              العربية
            </button>
          </div>
          
          {/* Top Right: Contact */}
          <div className="flex gap-m items-center font-bold">
            <span>{t('header.tollFree')}</span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <a href="tel:+966566667976" className="hover:text-white transition-colors hidden sm:inline">
              {t('header.phone')}
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Main Header */}
      <div className="bg-white/95 backdrop-blur-md sticky top-0 w-full h-[76px] flex items-center border-b border-gray-100 shadow-sm z-40 transition-all">
        <div className="container mx-auto flex justify-between items-center px-m">
          {/* Logo - Start aligned */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/Nexat Logo.png"
                alt="NEXAT Logo"
                className="h-[48px] md:h-[56px] w-auto object-contain"
              />
            </a>
          </div>

          {/* Navigation Links - Center aligned */}
          <nav className="hidden md:flex gap-l items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-black/85 hover:text-[var(--color-gold)] hover:underline underline-offset-8 transition-colors font-sans text-xs uppercase tracking-widest font-bold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact CTA & Menu Button - End aligned */}
          <div className="flex items-center gap-m">
            {/* Request Quote Button */}
            <a
              href="mailto:info@nexat.sa"
              className="hidden lg:flex items-center gap-xs text-xs font-bold uppercase tracking-wider text-black border border-black/25 px-s py-2xs rounded hover:bg-black hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              {t('header.requestQuote')}
            </a>

            {/* Mobile/Hamburger Menu Button */}
            <button
              className="text-black p-xs hover:opacity-75 transition-opacity cursor-pointer md:hidden"
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-[76px] left-0 w-full bg-white border-b border-gray-200 py-l px-m flex flex-col gap-m md:hidden shadow-lg z-50 animate-fade-in-down">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-black text-sm uppercase font-bold tracking-wider hover:text-[var(--color-gold)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:info@nexat.sa"
              className="w-full text-center text-xs font-bold uppercase tracking-wider text-white bg-black py-s rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('header.requestQuote')}
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
