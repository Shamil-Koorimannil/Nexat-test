import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import NexatLogo from './NexatLogo';

const PlusIcon = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const Navbar = () => {
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
          <div className="hidden md:flex items-center space-x-10 text-[13px] tracking-[0.18em] font-medium uppercase text-[var(--secondary-text)]">
            <a 
              href="#about" 
              onClick={(e) => handleScrollTo(e, 'about')} 
              className="hover:text-[var(--accent)] transition-colors duration-300"
            >
              Company
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleScrollTo(e, 'services')} 
              className="hover:text-[var(--accent)] transition-colors duration-300"
            >
              Services
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleScrollTo(e, 'projects')} 
              className="hover:text-[var(--accent)] transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, 'contact')} 
              className="hover:text-[var(--accent)] transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* CTA Connect Button - Right */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="group flex items-center gap-2 border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#0B1624] px-5 py-2.5 rounded-full text-[13px] uppercase tracking-[0.18em] font-medium transition-all duration-300"
            >
              <span>Connect</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
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
            className="fixed top-20 left-0 w-full bg-[#0B1624]/95 backdrop-blur-lg border-b border-white/5 z-[99] flex flex-col p-6 space-y-4 md:hidden text-[13px] tracking-[0.18em] font-medium uppercase text-[var(--secondary-text)]"
          >
            <a 
              href="#about" 
              onClick={(e) => handleScrollTo(e, 'about')} 
              className="py-2 border-b border-white/5 hover:text-[var(--accent)] transition-colors"
            >
              Company
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleScrollTo(e, 'services')} 
              className="py-2 border-b border-white/5 hover:text-[var(--accent)] transition-colors"
            >
              Services
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleScrollTo(e, 'projects')} 
              className="py-2 border-b border-white/5 hover:text-[var(--accent)] transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, 'contact')} 
              className="py-2 border-b border-white/5 hover:text-[var(--accent)] transition-colors"
            >
              Contact
            </a>
            <div className="pt-2">
              <a 
                href="#contact" 
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="flex items-center justify-center gap-2 border border-[var(--accent)] text-[var(--accent)] py-3 rounded-full uppercase tracking-[0.18em]"
              >
                Connect →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
