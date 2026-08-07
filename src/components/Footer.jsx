import React from 'react';
import NexatLogo from './NexatLogo';

const Footer = () => {
  return (
    <footer className="bg-[#0B1624] text-white relative overflow-hidden border-t border-white/5 py-20 px-6 md:px-12 font-sans">
      
      {/* Decorative top lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 z-10 relative">
        
        {/* Column 1: Brand & Logo */}
        <div className="space-y-6">
          <NexatLogo className="h-10" />
          <p className="text-base text-[var(--muted-text)] leading-relaxed max-w-xs">
            NEXAT Construction Co. is a global engineering firm delivering precision architectural landmarks, structural excellence, and luxury builds.
          </p>
        </div>

        {/* Column 2: Divisions */}
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-[0.2em] font-semibold text-white">Divisions</h4>
          <ul className="space-y-2.5 text-base text-[var(--secondary-text)]">
            <li><a href="#projects" className="hover:text-[var(--accent)] transition-colors">Commercial Skyscrapers</a></li>
            <li><a href="#projects" className="hover:text-[var(--accent)] transition-colors">Luxury Residential Estates</a></li>
            <li><a href="#projects" className="hover:text-[var(--accent)] transition-colors">Public & Civic Infrastructure</a></li>
            <li><a href="#services" className="hover:text-[var(--accent)] transition-colors">Sustainable Design Planning</a></li>
          </ul>
        </div>

        {/* Column 3: Corporate Offices */}
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-[0.2em] font-semibold text-white">Corporate Offices</h4>
          <ul className="space-y-2.5 text-base text-[var(--muted-text)]">
            <li>
              <strong className="text-white font-semibold block">London Headquarters:</strong>
              15 Bishopsgate, London EC2N 3AR, UK
            </li>
            <li>
              <strong className="text-white font-semibold block">Tokyo Office:</strong>
              1-2 Otemachi, Chiyoda City, Tokyo 100-0004, Japan
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Inquiry */}
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-[0.2em] font-semibold text-white">Consultation Details</h4>
          <ul className="space-y-2.5 text-base text-[var(--muted-text)]">
            <li>
              <strong className="text-white font-semibold block">General Contracting inquiries:</strong>
              rfp@nexat-construction.com
            </li>
            <li>
              <strong className="text-white font-semibold block">Telephone:</strong>
              +44 20 7946 0958
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom copyright area */}
      <div className="max-w-7xl mx-auto w-full border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-sm text-[var(--muted-text)]">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <span>&copy; {new Date().getFullYear()} NEXAT Construction Co. All rights reserved.</span>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[var(--accent)] transition-colors">Terms & Parameters</a>
            <a href="#" className="hover:text-[var(--accent)] transition-colors">RFP Guidelines</a>
          </div>
        </div>
        
        <div className="flex space-x-6 text-[var(--secondary-text)]">
          <a href="#" className="hover:text-[var(--accent)] transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-[var(--accent)] transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
