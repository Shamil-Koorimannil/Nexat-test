import React from 'react';
import NexatLogo from './NexatLogo';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { lang, isRtl, setLang } = useLanguage();

  const translations = {
    en: {
      desc: 'NEXAT Construction Co. is a Saudi-owned multidisciplinary engineering and construction firm delivering precision architectural landmarks, structural excellence, and luxury builds.',
      divTitle: 'Divisions',
      div1: 'Structural Construction',
      div2: 'Architectural Finishing',
      div3: 'Waterproofing & Insulation',
      div4: 'Sustainable Design Planning',
      officeTitle: 'Corporate Office',
      officeLabel: 'Head Office:',
      address: 'Riyadh, Saudi Arabia',
      contactTitle: 'Consultation Details',
      emailLabel: 'Inquiries:',
      phoneLabel: 'Telephone:',
      copyright: 'All rights reserved.',
      terms: 'Terms & Parameters',
      rfp: 'RFP Guidelines'
    },
    ar: {
      desc: 'شركة نكسات للمقاولات هي شركة سعودية متعددة التخصصات في مجالات الهندسة والإنشاءات، وتقدم حلولاً متكاملة ومعالم هندسية متميزة وعالية الدقة.',
      divTitle: 'الأقسام والخدمات',
      div1: 'الإنشاءات الهيكلية والمقاولات',
      div2: 'التشطيبات المعمارية والتجهيزات',
      div3: 'أعمال العزل المائي والحراري',
      div4: 'التخطيط والتصميم المستدام',
      officeTitle: 'المقر الرئيسي',
      officeLabel: 'المكتب الرئيسي:',
      address: 'الرياض، المملكة العربية السعودية',
      contactTitle: 'تفاصيل الاستشارة والاتصال',
      emailLabel: 'للاستفسارات:',
      phoneLabel: 'الهاتف:',
      copyright: 'جميع الحقوق محفوظة.',
      terms: 'الشروط والأحكام',
      rfp: 'إرشادات العروض'
    }
  };

  const current = translations[lang];

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`bg-[var(--background)] text-[var(--primary-text)] relative overflow-hidden border-t border-[var(--divider)] py-20 px-6 md:px-12 font-sans ${isRtl ? 'text-right' : 'text-left'}`}>
      
      {/* Decorative top lighting divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[var(--divider)] to-transparent" />

      <div className={`max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 z-10 relative ${isRtl ? 'direction-rtl' : ''}`}>
        
        {/* Column 1: Brand & Logo */}
        <div className="space-y-6 flex flex-col items-start">
          <NexatLogo className="h-9 md:h-10" />
          <p className={`text-sm text-[var(--secondary-text)] leading-relaxed max-w-xs ${isRtl ? 'text-right' : 'text-left'}`}>
            {current.desc}
          </p>
        </div>

        {/* Column 2: Divisions */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--accent)]">
            {current.divTitle}
          </h4>
          <ul className="space-y-2.5 text-sm text-[var(--secondary-text)]">
            <li><a href="#projects" className="hover:text-[var(--accent)] transition-colors">{current.div1}</a></li>
            <li><a href="#projects" className="hover:text-[var(--accent)] transition-colors">{current.div2}</a></li>
            <li><a href="#projects" className="hover:text-[var(--accent)] transition-colors">{current.div3}</a></li>
            <li><a href="#services" className="hover:text-[var(--accent)] transition-colors">{current.div4}</a></li>
          </ul>
        </div>

        {/* Column 3: Corporate Offices */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--accent)]">
            {current.officeTitle}
          </h4>
          <ul className="space-y-2.5 text-sm text-[var(--secondary-text)]">
            <li>
              <strong className="text-[var(--primary-text)] font-semibold block mb-0.5">{current.officeLabel}</strong>
              {current.address}
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Inquiry */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--accent)]">
            {current.contactTitle}
          </h4>
          <ul className="space-y-2.5 text-sm text-[var(--secondary-text)]">
            <li>
              <strong className="text-[var(--primary-text)] font-semibold block mb-0.5">{current.emailLabel}</strong>
              <a href="mailto:sales@nexat.llc" className="hover:text-[var(--accent)] transition-colors">sales@nexat.llc</a>
            </li>
            <li>
              <strong className="text-[var(--primary-text)] font-semibold block mb-0.5">{current.phoneLabel}</strong>
              <a href="tel:+966566667976" className="hover:text-[var(--accent)] transition-colors font-mono" dir="ltr">+966 56 666 7976</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom copyright area */}
      <div className={`max-w-7xl mx-auto w-full border-t border-[var(--divider)] pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-xs text-[var(--muted-text)] font-semibold uppercase tracking-wider ${isRtl ? 'md:flex-row-reverse' : ''}`}>
        
        <div className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          <span className="normal-case">
            &copy; {new Date().getFullYear()} {lang === 'ar' ? 'نكسات للمقاولات' : 'NEXAT Construction Co.'}. {current.copyright}
          </span>
          <div className={`flex gap-6 ${isRtl ? 'space-x-reverse' : ''}`}>
            <a href="#" className="hover:text-[var(--accent)] transition-colors">{current.terms}</a>
            <a href="#" className="hover:text-[var(--accent)] transition-colors">{current.rfp}</a>
          </div>
        </div>
        
        {/* Language Selection, Social Links & Scroll to Top */}
        <div className={`flex items-center gap-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
          
          <div className="flex items-center gap-1 bg-[var(--surface)] border border-[var(--divider)] p-1 rounded-lg">
            <button 
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${lang === 'en' ? 'bg-[var(--accent)] text-[var(--background)]' : 'text-[var(--primary-text)] hover:bg-[var(--background)]/20'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('ar')}
              className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${lang === 'ar' ? 'bg-[var(--accent)] text-[var(--background)]' : 'text-[var(--primary-text)] hover:bg-[var(--background)]/20'}`}
            >
              عربي
            </button>
          </div>

          <div className={`flex gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <a href="#" className="hover:text-[var(--accent)] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[var(--accent)] transition-colors">Instagram</a>
          </div>

          {/* Minimalist scroll-to-top button */}
          <button 
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full border border-[var(--divider)] hover:border-[var(--accent)] hover:text-[var(--accent)] flex items-center justify-center transition-all cursor-pointer focus:outline-none"
            aria-label="Back to Top"
          >
            ↑
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
