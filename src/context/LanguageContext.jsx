import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem('nexat_lang');
    return saved === 'ar' ? 'ar' : 'en';
  });

  const setLang = (newLang) => {
    const validated = newLang === 'ar' ? 'ar' : 'en';
    setLangState(validated);
    localStorage.setItem('nexat_lang', validated);
  };

  useEffect(() => {
    // Dynamic dir and lang tags on html root
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Set font styles appropriately for LTR and RTL
    if (lang === 'ar') {
      html.classList.add('rtl-mode');
    } else {
      html.classList.remove('rtl-mode');
    }
  }, [lang]);

  // Global shared translations dictionary
  const translations = {
    en: {
      nav: {
        company: 'Company',
        services: 'Services',
        projects: 'Projects',
        contact: 'Contact',
        connect: 'Connect'
      },
      footer: {
        aboutText: 'Precision Engineering & Luxury Architecture.',
        address: 'Head Office: Riyadh, Saudi Arabia',
        phone: '+966 56 666 7976',
        email: 'sales@nexat.llc',
        divisions: 'Divisions',
        quickLinks: 'Quick Links',
        generalContracting: 'General Contracting',
        civilInfrastructure: 'Civil & Infrastructure',
        structuralEngineering: 'Structural Engineering',
        finishingsFitOut: 'Architectural Finishing & Fit-Out',
        mepEngineering: 'MEP Engineering',
        insulationWaterproofing: 'Waterproofing & Thermal Insulation',
        copyright: '© 2026 NEXAT Construction. All rights reserved.'
      },
      cookie: {
        text: 'We use cookies to optimize your experience on our website and analyze site traffic.',
        accept: 'Accept',
        decline: 'Decline'
      }
    },
    ar: {
      nav: {
        company: 'الشركة',
        services: 'الخدمات',
        projects: 'المشاريع',
        contact: 'اتصل بنا',
        connect: 'اتصل بنا'
      },
      footer: {
        aboutText: 'الهندسة الدقيقة والعمارة الفاخرة.',
        address: 'المكتب الرئيسي: الرياض، المملكة العربية السعودية',
        phone: '+٩٦٦ ٥٦ ٦٦٦ ٧٩٧٦',
        email: 'sales@nexat.llc',
        divisions: 'الأقسام',
        quickLinks: 'روابط سريعة',
        generalContracting: 'المقاولات العامة',
        civilInfrastructure: 'الهندسة المدنية والبنية التحتية',
        structuralEngineering: 'الهندسة الإنشائية',
        finishingsFitOut: 'التشطيبات المعمارية والتجهيزات الداخلیة',
        mepEngineering: 'الهندسة الميكانيكية والكهربائية والصحية',
        insulationWaterproofing: 'عزل المياه والعزل الحراري',
        copyright: '© ٢٠٢٦ شركة نكسات للمقاولات. جميع الحقوق محفوظة.'
      },
      cookie: {
        text: 'نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا وتحليل حركة المرور.',
        accept: 'موافق',
        decline: 'رفض'
      }
    }
  };

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[lang];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        return path; // Fallback to path string if not found
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRtl: lang === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
