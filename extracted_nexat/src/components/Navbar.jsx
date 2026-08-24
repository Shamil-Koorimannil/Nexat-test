import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NexatLogo from './NexatLogo';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { lang, setLang, t, isRtl } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
      const headerOffset = isScrolled ? 64 : 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: t('nav.company'), id: 'about' },
    { label: t('nav.services'), id: 'services' },
    { label: t('nav.projects'), id: 'projects' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled
            ? 'h-16 bg-[var(--background)] border-b border-[var(--divider)]'
            : 'h-24 bg-transparent'
        } flex items-center`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo - Left */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, 'hero')}
            className="flex-shrink-0 flex items-center cursor-pointer"
          >
            <NexatLogo className="h-9 md:h-10 transition-all duration-300" />
          </a>

          {/* Centered Navigation Links - Desktop */}
          <div className={`hidden md:flex items-center text-[12px] tracking-[0.2em] font-bold uppercase text-[var(--secondary-text)] ${isRtl ? 'space-x-reverse space-x-12' : 'space-x-12'}`}>
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className="group relative py-2 hover:text-[var(--accent)] transition-colors duration-300"
              >
                <span>{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[var(--accent)] transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Connect Button, Language Toggle & Hamburger - Right */}
          <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
            
            {/* Lang Switcher - Desktop */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="hidden md:block border border-[var(--divider)] hover:border-[var(--accent)] text-[var(--primary-text)] hover:text-[var(--accent)] px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.15em] font-bold transition-all duration-300 cursor-pointer"
            >
              {lang === 'en' ? 'العربية' : 'EN'}
            </button>

            {/* Direct Connect CTA */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="hidden md:flex items-center gap-2 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--background)] px-5 py-2 rounded-full text-[12px] uppercase tracking-[0.15em] font-bold transition-all duration-300"
            >
              <span>{t('nav.connect')}</span>
              <span className={`transform transition-transform duration-300 ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
                {isRtl ? '←' : '→'}
              </span>
            </a>

            {/* Hamburger Menu Toggle (DAMAC-Style Slim Lines) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-[101] text-[var(--primary-text)] hover:text-[var(--accent)] transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className={`w-6 h-[1.5px] bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
              <span className={`w-6 h-[1.5px] bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-6 h-[1.5px] bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
            </button>

          </div>

        </div>
      </nav>

      {/* Menu Overlay - Full-Screen Structural Layout */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-screen bg-[var(--background)] z-[99] flex flex-col justify-between p-8 pt-32 text-2xl tracking-[0.2em] font-black uppercase text-[var(--secondary-text)]"
          >
            {/* Background design lines (No glassmorphism, using only structural gridlines) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none architectural-grid" />

            <div className={`max-w-7xl mx-auto w-full flex-1 flex flex-col md:flex-row justify-center items-center md:items-stretch gap-12 z-10 ${isRtl ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
              
              {/* Left Column: Menu Links */}
              <div className="flex-1 flex flex-col justify-center space-y-6 md:space-y-8 w-full">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleScrollTo(e, item.id)}
                      className={`inline-block text-3xl md:text-5xl font-black text-[var(--primary-text)] hover:text-[var(--accent)] transition-all duration-300 ${isRtl ? 'hover:translate-x-[-10px]' : 'hover:translate-x-[10px]'}`}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Right Column: Existing Corporate/Address info (No new content added) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex-1 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[var(--divider)] pt-8 md:pt-0 md:pl-16 w-full text-base font-sans font-medium tracking-normal text-[var(--muted-text)]"
              >
                <div className={`space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <div>
                    <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-2">
                      {lang === 'ar' ? 'المكتب الرئيسي' : 'Head Office'}
                    </h4>
                    <p className="text-[var(--secondary-text)]">Riyadh, Saudi Arabia</p>
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--accent)] mb-2">
                      {lang === 'ar' ? 'تفاصيل الاستشارة' : 'Inquiries'}
                    </h4>
                    <a href="mailto:sales@nexat.llc" className="block text-[var(--secondary-text)] hover:text-[var(--accent)] transition-colors">
                      sales@nexat.llc
                    </a>
                    <a href="tel:+966566667976" className="block text-[var(--secondary-text)] hover:text-[var(--accent)] transition-colors font-mono mt-1" dir="ltr">
                      +966 56 666 7976
                    </a>
                  </div>
                  <div className="pt-4 flex gap-4">
                    <button
                      onClick={() => {
                        setLang(lang === 'en' ? 'ar' : 'en');
                        setIsMenuOpen(false);
                      }}
                      className="border border-[var(--divider)] hover:border-[var(--accent)] text-[var(--primary-text)] hover:text-[var(--accent)] px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] font-bold transition-all duration-300 cursor-pointer"
                    >
                      {lang === 'en' ? 'العربية' : 'English'}
                    </button>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Bottom Accent */}
            <div className="w-full max-w-7xl mx-auto border-t border-[var(--divider)] pt-6 flex justify-between items-center text-xs tracking-wider font-semibold text-[var(--muted-text)] z-10">
              <span>© {new Date().getFullYear()} NEXAT</span>
              <div className="flex gap-6">
                <span>Riyadh, KSA</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
