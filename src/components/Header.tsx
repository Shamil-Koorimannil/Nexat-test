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
            {/* Contact Us WhatsApp Button */}
            <a
              href="https://wa.me/966566667976"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-white bg-[#0B1624] hover:bg-[#25D366] hover:text-white border border-white/10 px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current text-[#25D366] group-hover:text-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
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
              href="https://wa.me/966566667976"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-white bg-[#25D366] hover:bg-[#20bd5a] py-3 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              {t('header.requestQuote')}
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
