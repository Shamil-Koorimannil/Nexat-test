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

  return (
    <footer className={`bg-[#0B1624] text-white relative overflow-hidden border-t border-white/5 py-20 px-6 md:px-12 font-sans ${isRtl ? 'text-right' : 'text-left'}`}>
      
      {/* Decorative top lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className={`max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 z-10 relative ${isRtl ? 'direction-rtl' : ''}`}>
        
        {/* Column 1: Brand & Logo */}
        <div className="space-y-6 flex flex-col items-start">
          <NexatLogo className="h-10" />
          <p className={`text-base text-[var(--muted-text)] leading-relaxed max-w-xs ${isRtl ? 'text-right' : 'text-left'}`}>
            {current.desc}
          </p>
        </div>

        {/* Column 2: Divisions */}
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-[0.2em] font-semibold text-white">{current.divTitle}</h4>
          <ul className="space-y-2.5 text-base text-[var(--secondary-text)]">
            <li><a href="#projects" className="hover:text-[var(--accent)] transition-colors">{current.div1}</a></li>
            <li><a href="#projects" className="hover:text-[var(--accent)] transition-colors">{current.div2}</a></li>
            <li><a href="#projects" className="hover:text-[var(--accent)] transition-colors">{current.div3}</a></li>
            <li><a href="#services" className="hover:text-[var(--accent)] transition-colors">{current.div4}</a></li>
          </ul>
        </div>

        {/* Column 3: Corporate Offices */}
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-[0.2em] font-semibold text-white">{current.officeTitle}</h4>
          <ul className="space-y-2.5 text-base text-[var(--muted-text)]">
            <li>
              <strong className="text-white font-semibold block">{current.officeLabel}</strong>
              {current.address}
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Inquiry */}
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-[0.2em] font-semibold text-white">{current.contactTitle}</h4>
          <ul className="space-y-2.5 text-base text-[var(--muted-text)]">
            <li>
              <strong className="text-white font-semibold block">{current.emailLabel}</strong>
              <a href="mailto:sales@nexat.llc" className="hover:text-[var(--accent)] transition-colors">sales@nexat.llc</a>
            </li>
            <li>
              <strong className="text-white font-semibold block">{current.phoneLabel}</strong>
              <a href="tel:+966566667976" className="hover:text-[var(--accent)] transition-colors font-mono" dir="ltr">+966 56 666 7976</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom copyright area */}
      <div className={`max-w-7xl mx-auto w-full border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-sm text-[var(--muted-text)] ${isRtl ? 'md:flex-row-reverse' : ''}`}>
        <div className={`flex flex-col md:flex-row items-center gap-2 md:gap-6 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          <span>&copy; {new Date().getFullYear()} {lang === 'ar' ? 'نكسات للمقاولات' : 'NEXAT Construction Co.'}. {current.copyright}</span>
          <div className={`flex space-x-6 ${isRtl ? 'space-x-reverse' : ''}`}>
            <a href="#" className="hover:text-[var(--accent)] transition-colors">{current.terms}</a>
            <a href="#" className="hover:text-[var(--accent)] transition-colors">{current.rfp}</a>
          </div>
        </div>
        
        {/* Language Toggle in Footer bottom */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-white/5 border border-white/5 p-1 rounded-lg">
            <button 
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${lang === 'en' ? 'bg-[var(--accent)] text-[#0B1624] shadow-md' : 'text-white hover:bg-white/5'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('ar')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${lang === 'ar' ? 'bg-[var(--accent)] text-[#0B1624] shadow-md' : 'text-white hover:bg-white/5'}`}
            >
              عربي
            </button>
          </div>

          <div className={`flex space-x-6 text-[var(--secondary-text)] ${isRtl ? 'space-x-reverse' : ''}`}>
            <a href="#" className="hover:text-[var(--accent)] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[var(--accent)] transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
