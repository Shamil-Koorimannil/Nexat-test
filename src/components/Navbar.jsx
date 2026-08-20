import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import NexatLogo from './NexatLogo';
import { useLanguage } from '../context/LanguageContext';

const PlusIcon = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition navbar background when scrolling past Hero section (100vh)
      if (window.scrollY >= window.innerHeight - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Scroll to element accounting for the header height
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 h-20 flex items-center ${
          isScrolled
            ? 'bg-[#0B1624]/80 backdrop-blur-md border-b border-white/5 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          
          {/* Logo - Left */}
          <a href="#" onClick={(e) => handleScrollTo(e, 'hero')} className="flex-shrink-0 flex items-center cursor-pointer">
            <NexatLogo className="h-10 md:h-11" />
          </a>

          {/* Centered Navigation Links - Desktop */}
          <div className={`hidden md:flex items-center text-[13px] tracking-[0.18em] font-medium uppercase text-[var(--secondary-text)] ${lang === 'ar' ? 'space-x-reverse space-x-10' : 'space-x-10'}`}>
            <a 
              href="#about" 
              onClick={(e) => handleScrollTo(e, 'about')} 
              className="hover:text-[var(--accent)] transition-colors duration-300"
            >
              {t('nav.company')}
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleScrollTo(e, 'services')} 
              className="hover:text-[var(--accent)] transition-colors duration-300"
            >
              {t('nav.services')}
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleScrollTo(e, 'projects')} 
              className="hover:text-[var(--accent)] transition-colors duration-300"
            >
              {t('nav.projects')}
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, 'contact')} 
              className="hover:text-[var(--accent)] transition-colors duration-300"
            >
              {t('nav.contact')}
            </a>
          </div>

          {/* CTA Connect Button & Language Toggle - Right */}
          <div className={`hidden md:flex items-center ${lang === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="border border-white/10 text-white hover:border-[var(--accent)] hover:text-[var(--accent)] px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 cursor-pointer"
            >
              {lang === 'en' ? 'العربية' : 'EN'}
            </button>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="group flex items-center gap-2 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#0B1624] px-5 py-2.5 rounded-full text-[13px] uppercase tracking-[0.18em] font-medium transition-all duration-300"
            >
              <span>{t('nav.connect')}</span>
              <span className={`transform transition-transform duration-300 ${lang === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
                {lang === 'ar' ? '←' : '→'}
              </span>
            </a>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[var(--accent)] transition-colors"
            >
              <PlusIcon size={24} className={`transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`} />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-20 left-0 w-full bg-[#0B1624]/95 backdrop-blur-lg border-b border-white/5 z-[99] flex flex-col p-6 space-y-4 md:hidden text-[13px] tracking-[0.18em] font-medium uppercase text-[var(--secondary-text)] ${lang === 'ar' ? 'text-right' : 'text-left'}`}
          >
            <a 
              href="#about" 
              onClick={(e) => handleScrollTo(e, 'about')} 
              className="py-2 border-b border-white/5 hover:text-[var(--accent)] transition-colors"
            >
              {t('nav.company')}
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleScrollTo(e, 'services')} 
              className="py-2 border-b border-white/5 hover:text-[var(--accent)] transition-colors"
            >
              {t('nav.services')}
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleScrollTo(e, 'projects')} 
              className="py-2 border-b border-white/5 hover:text-[var(--accent)] transition-colors"
            >
              {t('nav.projects')}
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, 'contact')} 
              className="py-2 border-b border-white/5 hover:text-[var(--accent)] transition-colors"
            >
              {t('nav.contact')}
            </a>
            <div className="pt-2 flex flex-col gap-3">
              <a 
                href="#contact" 
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="flex items-center justify-center gap-2 border border-[var(--accent)] text-[var(--accent)] py-3 rounded-full uppercase tracking-[0.18em]"
              >
                <span>{t('nav.connect')}</span>
                <span>{lang === 'ar' ? '←' : '→'}</span>
              </a>
              <button
                onClick={() => {
                  setLang(lang === 'en' ? 'ar' : 'en');
                  setIsMobileMenuOpen(false);
                }}
                className="border border-white/10 text-white py-3 rounded-full uppercase tracking-[0.18em] font-semibold cursor-pointer"
              >
                {lang === 'en' ? 'العربية' : 'English'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
