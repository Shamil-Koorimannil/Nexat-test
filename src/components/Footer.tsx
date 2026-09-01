import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const columns = [
    {
      title: t('footer.col1Title'),
      links: [
        { label: t('header.aboutUs'), href: '#expertise' },
        { label: t('expertise.title'), href: '#expertise' },
        { label: t('hero.tagline'), href: '#expertise' },
      ],
    },
    {
      title: t('footer.col2Title'),
      links: [
        { label: t('globalPresence.div1Title'), href: '#global-presence' },
        { label: t('globalPresence.div2Title'), href: '#global-presence' },
        { label: t('globalPresence.div3Title'), href: '#global-presence' },
        { label: t('globalPresence.div4Title'), href: '#global-presence' },
      ],
    },
    {
      title: t('footer.col3Title'),
      links: [
        { label: t('featureCards.card1Title'), href: '#feature-cards' },
        { label: t('featureCards.card2Title'), href: '#feature-cards' },
        { label: t('featureCards.card3Title'), href: '#feature-cards' },
        { label: t('hero.certifications.vision2030'), href: '#feature-cards' },
      ],
    },
    {
      title: t('footer.col4Title'),
      isAddress: true,
      links: [
        { label: t('footer.addressLine1'), href: '#' },
        { label: t('footer.addressLine2'), href: '#' },
        { label: t('footer.addressLine3'), href: '#' },
        { label: t('footer.shortAddress'), href: '#' },
      ],
    },
    {
      title: t('footer.col5Title'),
      isContact: true,
      links: [
        { label: 'sales@nexat.llc', href: 'mailto:sales@nexat.llc', icon: 'email' },
        { label: t('header.phone'), href: 'https://wa.me/966566667976', icon: 'phone', target: '_blank' },
        { label: t('footer.vatNumber'), href: '#', icon: 'vat' },
      ],
    },
  ];

  return (
    <footer id="footer" className="bg-gradient-to-b from-[#0B1624] via-[#0E1E31] to-[#070F1A] text-white pt-20 pb-12 border-t border-[#DA9A62]/30 shadow-2xl">
      <div className="container mx-auto px-m max-w-[1240px]">
        {/* Contact Us Form & Banner at the Top */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-l pb-14 border-b border-white/15">
          <div className="text-start max-w-3xl flex-1">
            <span className="text-[#DA9A62] text-xs font-sans font-bold uppercase tracking-[0.25em] mb-2 block">
              Direct Contact
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white uppercase tracking-wider font-normal mb-2">
              {t('footer.subscribeTitle')}
            </h3>
            <p className="text-gray-300 font-secondary text-base sm:text-lg leading-relaxed m-0 mt-2">
              {t('footer.subscribeDesc')}
            </p>
          </div>
          <div className="w-full lg:max-w-[400px] flex flex-col gap-3">
            <a
              href="https://wa.me/966566667976"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-widest px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp Us: +966 56 666 7976</span>
            </a>
          </div>
        </div>

        {/* 5-Column Grid of Text Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 py-16 text-start">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h5 className="text-[#DA9A62] text-sm sm:text-base font-sans font-bold uppercase tracking-wider leading-tight border-b border-[#DA9A62]/25 pb-2.5">
                {col.title}
              </h5>
              <ul className="flex flex-col gap-2.5 mt-1">
                {col.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className={`transition-all duration-300 font-secondary text-sm sm:text-base leading-relaxed block ${
                        col.isContact
                          ? 'text-[#DA9A62] hover:text-white font-semibold flex items-center gap-2'
                          : col.isAddress
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-200 hover:text-[#DA9A62] hover:translate-x-1'
                      }`}
                    >
                      {link.icon === 'email' && (
                        <svg className="w-4 h-4 text-[#DA9A62] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {link.icon === 'phone' && (
                        <svg className="w-4 h-4 text-[#DA9A62] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      )}
                      {link.icon === 'vat' && (
                        <svg className="w-4 h-4 text-[#DA9A62] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Logo, Policies & Copyright */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Branding */}
          <div className="flex items-center gap-3">
            <img src="/Nexat Logo.png" alt="NEXAT" className="max-h-[32px] sm:max-h-[38px] w-auto object-contain brightness-0 invert opacity-40 hover:opacity-80 transition-opacity" />
          </div>

          {/* Policy Links */}
          <div className="flex gap-6 flex-wrap text-xs sm:text-sm text-gray-300 font-secondary justify-center">
            <a href="#" className="hover:text-[#DA9A62] transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-[#DA9A62] transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-[#DA9A62] transition-colors">{t('footer.hse')}</a>
            <a href="#" className="hover:text-[#DA9A62] transition-colors">{t('footer.conduct')}</a>
          </div>
        </div>

        {/* Copyright & VAT info */}
        <div className="text-center mt-8 text-xs sm:text-sm text-gray-400 font-secondary flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
          <span>{t('footer.copyright')}</span>
          <span className="hidden sm:inline text-[#DA9A62]/60">•</span>
          <span className="text-[#DA9A62] font-mono text-xs tracking-wider">{t('footer.vatNumber')}</span>
        </div>

        {/* Zywo Powered-by Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex justify-center items-center gap-3">
          <span className="text-gray-400 font-secondary text-xs uppercase tracking-widest">
            Powered &amp; Secured by
          </span>
          <a
            href="https://zywo.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300"
            aria-label="Zywo — Digital Agency"
          >
            <img
              src="/assets/Zywo Logo.webp"
              alt="Zywo"
              className="h-[20px] w-auto object-contain brightness-0 invert"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
