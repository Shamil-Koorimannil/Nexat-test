import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (path: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('nexat_lang');
    return saved === 'ar' ? 'ar' : 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('nexat_lang', newLang);
  };

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const translations: Record<Language, Record<string, any>> = {
    en: {
      header: {
        languageLabel: 'Language:',
        tollFree: 'Riyadh, Saudi Arabia',
        phone: 'Call: +966 56 666 7976',
        requestQuote: 'Request Quote',
        aboutUs: 'About Us',
        divisions: 'Divisions',
        projects: 'Projects',
        capabilities: 'Capabilities',
        contact: 'Contact',
      },
      hero: {
        tagline: 'NEXAT Construction Co.',
        headline: 'Engineering Excellence, Disciplined Execution',
        description: 'Serving Saudi Arabia and the GCC with comprehensive EPC, Design & Build, and General Contracting solutions. We combine technical expertise, international standards, and value engineering to transform ambitious visions into sustainable built assets.',
        certifications: {
          quality: 'Quality ISO 9001',
          safety: 'Safety ISO 45001',
          leed: 'LEED Partner',
          vision2030: 'Vision 2030',
          civil: 'Civil Infra',
          epc: 'General EPC',
          mep: 'MEP Engineering',
          hse: 'Safety HSE',
        }
      },
      marquee: {
        subtitle: 'Landmark Portfolio',
        title: 'FEATURED PROJECTS SHOWCASE',
        project1: 'Structural Construction Project',
        project1Sub: 'Reinforced Concrete & Site Execution',
        project2: 'Water & MEP Infrastructure',
        project2Sub: 'Utility Systems & Pipe Routing',
        project3: 'Architectural & Interior Finishes',
        project3Sub: 'Wall Cladding & Fit-Out Projects',
        project4: 'Building Construction & External Works',
        project4Sub: 'Scaffold Systems & Multi-Storey Framework',
        project5: 'Construction Site Preparation',
        project5Sub: 'Excavation & Foundations',
      },
      methodology: {
        subtitle: 'Our Approach',
        title: 'STRUCTURED DELIVERY METHODOLOGY',
        desc: 'NEXAT applies a structured, end-to-end delivery process that aligns technical planning, execution, quality control, and long-term asset performance.',
        step1Name: 'Plan',
        step1Desc: 'Establishing alignment and feasibility from the earliest concept stage through direct client partnership.',
        step2Name: 'Design',
        step2Desc: 'Developing detailed 3D structural, architectural, and MEP plans while optimizing performance and costs.',
        step3Name: 'Deliver',
        step3Desc: 'Disciplined execution and resource procurement under rigorous quality inspection systems.',
        step4Name: 'Complete',
        step4Desc: 'Assuring zero-defect commissioning and seamless transition into operational asset management.',
      },
      featureCards: {
        subtitle: 'Capabilities & Standards',
        title: 'WHY PARTNER WITH NEXAT?',
        card1Title: 'Rigorous Quality Assurance',
        card1Desc: 'Embedded QA/QC procedures, material inspections, and zero-defect commissioning to meet international engineering standards.',
        card2Title: 'Health, Safety & Environment',
        card2Desc: 'A proactive zero-harm safety culture driven by strict risk management, toolbox talks, and environmentally friendly practices.',
        card3Title: 'Digital Construction & BIM',
        card3Desc: 'Leveraging Building Information Modeling (BIM), 3D coordination, and drone monitoring for project execution accuracy.',
      },
      globalPresence: {
        subtitle: 'Core Capabilities',
        title: 'OUR OPERATIONS & DIVISIONS',
        div1Title: 'General Contracting & Civil Infrastructure',
        div1Sub: 'Civil & Infrastructure Works',
        div1Desc: 'Comprehensive EPC and general contracting services designed to establish robust regional infrastructure and civil developments.',
        div2Title: 'Structural & Architectural Works',
        div2Sub: 'Structural & Finishing Systems',
        div2Desc: 'Precision-engineered concrete and steel structural systems complemented by sophisticated interior and exterior finishing.',
        div3Title: 'MEP & Building Protection',
        div3Sub: 'Mechanical, Electrical, Piping & Waterproofing',
        div3Desc: 'Advanced electromechanical systems implementation combined with rigorous thermal and moisture protection solutions.',
        div4Title: 'Development & Asset Management',
        div4Sub: 'Real Estate & Facilities',
        div4Desc: 'Providing long-term project viability through modern real estate development planning and complete facility management services.',
        tag: 'Saudi Arabia & GCC',
        divLabel: 'Division',
      },
      expertise: {
        subtitle: 'Leadership message',
        title: 'MESSAGE FROM THE CEO',
        quote: '"At NEXAT Construction, we believe every successful project begins with trust, technical excellence, and disciplined execution. Our commitment extends beyond constructing buildings—we deliver long-term value by transforming ambitious visions into sustainable assets."',
        body: 'Through engineering expertise, value engineering, quality systems, and uncompromising safety standards, we partner with clients to execute projects safely, efficiently, and on schedule. As Saudi Arabia continues its remarkable transformation under Vision 2030, NEXAT is proud to play an active role in developing world-class infrastructure.',
        btnLabel: 'sales@nexat.sa',
      },
      footer: {
        subscribeTitle: 'Subscribe to Bulletin',
        subscribeDesc: 'Receive corporate announcements, engineering reports, and local project bulletins.',
        subscribeBtn: 'SUBSCRIBE',
        placeholder: 'Your email address',
        thankYou: 'Thank you for subscribing!',
        col1Title: 'About NEXAT',
        col2Title: 'Our Divisions',
        col3Title: 'Capabilities',
        col4Title: 'Offices',
        col5Title: 'Contact Assist',
        copyright: '© 2026 NEXAT Construction Co. All rights reserved.',
        logoLabel: 'CONSTRUCTION',
        terms: 'Terms of Use',
        privacy: 'Privacy Policy',
        hse: 'HSE Compliance',
        conduct: 'Code of Conduct',
      }
    },
    ar: {
      header: {
        languageLabel: 'اللغة:',
        tollFree: 'الرياض، المملكة العربية السعودية',
        phone: 'اتصال: +٩٦٦ ٥٦ ٦٦٦ ٧٩٧٦',
        requestQuote: 'طلب سعر',
        aboutUs: 'عن الشركة',
        divisions: 'أقسامنا',
        projects: 'المشاريع',
        capabilities: 'القدرات',
        contact: 'اتصال',
      },
      hero: {
        tagline: 'نكسات للمقاولات',
        headline: 'التميز الهندسي والتنفيذ المنضبط',
        description: 'نخدم المملكة العربية السعودية ودول مجلس التعاون الخليجي بحلول شاملة في المقاولات العامة والتصميم والبناء. نجمع بين الخبرة الفنية والمعايير الدولية والهندسة القيمية لتحويل الرؤى الطموحة إلى أصول مبنية مستدامة.',
        certifications: {
          quality: 'الجودة ISO 9001',
          safety: 'السلامة ISO 45001',
          leed: 'شريك ليد البيئي',
          vision2030: 'رؤية ٢٠٣٠',
          civil: 'البنية التحتية',
          epc: 'مقاولات عامة',
          mep: 'كهروميكانيك',
          hse: 'الصحة والسلامة',
        }
      },
      marquee: {
        subtitle: 'سجل الإنجازات',
        title: 'عرض المشاريع المتميزة',
        project1: 'مشروع الإنشاءات الهيكلية',
        project1Sub: 'الخرسانة المسلحة وتجهيز الموقع',
        project2: 'البنية التحتية للمياه والكهروميكانيك',
        project2Sub: 'أنظمة المرافق وتمديد الأنابيب',
        project3: 'التشطيبات المعمارية والداخلية',
        project3Sub: 'كسوة الجدران وتجهيز الديكورات',
        project4: 'بناء المباني والأعمال الخارجية',
        project4Sub: 'أنظمة السقالات والهياكل متعددة الطوابق',
        project5: 'تهيئة موقع البناء',
        project5Sub: 'الحفريات والقواعد الإنشائية',
      },
      methodology: {
        subtitle: 'منهجيتنا',
        title: 'منهجية التسليم المنظمة',
        desc: 'تطبق نكسات عملية تسليم هيكلية متكاملة توافق بين التخطيط الفني والتنفيذ ومراقبة الجودة وأداء الأصول على المدى الطويل.',
        step1Name: 'التخطيط',
        step1Desc: 'تحديد الأهداف والجدوى من المراحل الأولى للمفهوم من خلال الشراكة المباشرة مع العميل.',
        step2Name: 'التصميم',
        step2Desc: 'تطوير مخططات هيكلية ومعمارية وكهروميكانيكية ثلاثية الأبعاد مفصلة مع تحسين الأداء والتكلفة.',
        step3Name: 'التنفيذ',
        step3Desc: 'التنفيذ المنضبط وتوريد الموارد في ظل أنظمة تفتيش ومراقبة الجودة الصارمة.',
        step4Name: 'التسليم',
        step4Desc: 'ضمان التشغيل التجريبي الخالي من العيوب والانتقال السلس إلى إدارة الأصول التشغيلية.',
      },
      featureCards: {
        subtitle: 'القدرات والمعايير',
        title: 'لماذا تختار نكسات كشريك؟',
        card1Title: 'توكيد الجودة الصارم',
        card1Desc: 'إجراءات توكيد وضبط جودة متكاملة، وفحص للمواد، وتشغيل تجريبي خالي من العيوب لتلبية أعلى المعايير الهندسية الدولية.',
        card2Title: 'الصحة والسلامة والبيئة',
        card2Desc: 'ثقافة سلامة نشطة تهدف لعدم إلحاق الضرر، مدفوعة بإدارة صارمة للمخاطر، وتوجيهات السلامة اليومية، والممارسات الصديقة للبيئة.',
        card3Title: 'البناء الرقمي ونمذجة BIM',
        card3Desc: 'الاستفادة من نمذجة معلومات البناء (BIM)، والتنسيق ثلاثي الأبعاد، ومراقبة المواقع عبر الطائرات بدون طيار لضمان دقة التنفيذ.',
      },
      globalPresence: {
        subtitle: 'القدرات الرئيسية',
        title: 'عملياتنا وأقسامنا التشغيلية',
        div1Title: 'المقاولات العامة والبنية التحتية المدنية',
        div1Sub: 'أعمال البنية التحتية والإنشائات المدنية',
        div1Desc: 'خدمات شاملة للتصميم والتوريد والإنشاء (EPC) لتطوير البنية التحتية والمرافق الإقليمية والمشاريع المدنية.',
        div2Title: 'الأعمال الهيكلية والمعمارية',
        div2Sub: 'الأنظمة الهيكلية والتشطيبات المعمارية',
        div2Desc: 'هياكل معدنية وخرسانية مصممة هندسياً بدقة عالية تكملها أعمال تشطيب داخلي وخارجي راقية.',
        div3Title: 'الكهروميكانيك MEP وحماية المباني',
        div3Sub: 'الميكانيك، الكهرباء، السباكة وعزل المياه',
        div3Desc: 'تنفيذ الأنظمة الكهروميكانيكية المتقدمة مع حلول متكاملة للعزل الحراري والمائي وحماية المنشآت.',
        div4Title: 'التطوير وإدارة الأصول',
        div4Sub: 'التطوير العقاري وإدارة المرافق',
        div4Desc: 'توفير استدامة للمشاريع على المدى الطويل من خلال التطوير العقاري الحديث وإدارة المرافق الشاملة.',
        tag: 'المملكة العربية السعودية والخليج',
        divLabel: 'القسم',
      },
      expertise: {
        subtitle: 'رسالة القيادة',
        title: 'رسالة الرئيس التنفيذي',
        quote: '"في نكسات للمقاولات، نؤمن بأن كل مشروع ناجح يبدأ بالثقة، والتميز التقني، والتنفيذ المنضبط. التزامنا يتعدى تشييد المباني - نحن نقدم قيمة مستدامة طويلة الأمد."',
        body: 'من خلال الخبرة الفنية والهندسة القيمية ومعايير الجودة والسلامة الصارمة، نتشارك مع عملائنا لإنجاز المشاريع بأمان وكفاءة وضمن الجدول الزمني. نفخر في نكسات بأن نكون جزءاً فاعلاً من رؤية المملكة ٢٠٣٠.',
        btnLabel: 'sales@nexat.sa',
      },
      footer: {
        subscribeTitle: 'الاشتراك في النشرة الإخبارية',
        subscribeDesc: 'تلقى الإعلانات المؤسسية، التقارير الهندسية، ونشرات المشاريع المحلية مباشرة.',
        subscribeBtn: 'اشتراك',
        placeholder: 'عنوان بريدك الإلكتروني',
        thankYou: 'شكراً لاشتراكك معنا!',
        col1Title: 'عن نكسات',
        col2Title: 'أقسامنا',
        col3Title: 'القدرات',
        col4Title: 'مكاتبنا',
        col5Title: 'المساعدة والاتصال',
        copyright: '© ٢٠٢٦ شركة نكسات للمقاولات. جميع الحقوق محفوظة.',
        logoLabel: 'للمقاولات',
        terms: 'شروط الاستخدام',
        privacy: 'سياسة الخصوصية',
        hse: 'التزام السلامة HSE',
        conduct: 'ميثاق السلوك',
      }
    }
  };

  const t = (path: string): string => {
    const keys = path.split('.');
    let current = translations[lang];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        return path;
      }
    }
    return current as unknown as string;
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
