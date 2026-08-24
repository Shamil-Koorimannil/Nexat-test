import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

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
      links: [
        { label: t('header.tollFree'), href: '#' },
        { label: t('footer.col4Title') + ' - Jeddah', href: '#' },
      ],
    },
    {
      title: t('footer.col5Title'),
      links: [
        { label: t('footer.col5Title') + ' - info@nexat.sa', href: 'mailto:info@nexat.sa' },
        { label: t('header.phone'), href: 'tel:+966566667976' },
      ],
    },
  ];

  return (
    <footer id="footer" className="bg-[#0B1624] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-m max-w-[1100px]">
        {/* Newsletter Signup Form at the Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-l pb-12 border-b border-white/10">
          <div className="text-start">
            <h3 className="text-xl md:text-2xl font-serif text-white uppercase tracking-wider font-normal mb-xs">
              {t('footer.subscribeTitle')}
            </h3>
            <p className="text-gray-400 font-secondary text-xs m-0">
              {t('footer.subscribeDesc')}
            </p>
          </div>
          <div className="w-full md:max-w-[400px]">
            {subscribed ? (
              <span className="text-gold font-secondary text-sm block text-start">{t('footer.thankYou')}</span>
            ) : (
              <form onSubmit={handleSubscribe} className="flex border-b border-white/20 pb-2xs w-full">
                <input
                  type="email"
                  className="bg-transparent border-none outline-none text-white text-sm font-secondary w-full placeholder-gray-500 text-start"
                  placeholder={t('footer.placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="text-gold text-xs uppercase font-semibold tracking-wider hover:opacity-80 transition-opacity whitespace-nowrap pl-s cursor-pointer"
                >
                  {t('footer.subscribeBtn')}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 5-Column Grid of Text Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-l py-16 text-start">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-m">
              <h5 className="text-white text-xs font-sans font-bold uppercase tracking-widest leading-tight">
                {col.title}
              </h5>
              <ul className="flex flex-col gap-s">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors font-secondary text-xs leading-relaxed block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Badges, Policies & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-l">
          {/* Logo / Branding */}
          <div className="flex items-center gap-s">
            <img src="/assets/Nexat Logo - Arabic.png" alt="NEXAT" className="max-h-[30px] w-auto object-contain brightness-0 invert opacity-60" />
            <span className="text-gray-500 font-sans text-xs tracking-wider uppercase">{t('footer.logoLabel')}</span>
          </div>

          {/* Policy Links */}
          <div className="flex gap-m flex-wrap text-2xs text-gray-500 font-secondary justify-center">
            <a href="#" className="hover:underline">{t('footer.terms')}</a>
            <a href="#" className="hover:underline">{t('footer.privacy')}</a>
            <a href="#" className="hover:underline">{t('footer.hse')}</a>
            <a href="#" className="hover:underline">{t('footer.conduct')}</a>
          </div>
        </div>

        {/* Copyright info */}
        <div className="text-center mt-12 text-2xs text-gray-600 font-secondary">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};
