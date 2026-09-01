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
        tollFree: 'Building 4258, Asma Bint Malik St, Al Arid Dist., Riyadh 13341, KSA',
        phone: 'Call: +966 56 666 7976',
        requestQuote: 'Contact Us',
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
        btnLabel: 'sales@nexat.llc',
      },
      footer: {
        subscribeTitle: 'Contact Us',
        subscribeDesc: "Get in touch with NEXAT Construction Co.'s engineering and project advisory team. Whether you require multidisciplinary general contracting, EPC solutions, structural development, or value engineering for your projects across Saudi Arabia and the GCC, our experts are ready to assist you.",
        subscribeBtn: 'SUBSCRIBE',
        placeholder: 'Your email address',
        thankYou: 'Thank you for subscribing!',
        col1Title: 'About NEXAT',
        col2Title: 'Our Divisions',
        col3Title: 'Capabilities',
        col4Title: 'Head Office',
        col5Title: 'Contact Assist',
        addressLine1: 'Building 4258, Asma Bint Malik St',
        addressLine2: 'Al Arid Dist., Riyadh 13341',
        addressLine3: 'Kingdom of Saudi Arabia',
        shortAddress: 'National Addr: RRRG4258',
        copyright: '© 2026 NEXAT Construction Co. All rights reserved.',
        logoLabel: 'CONSTRUCTION',
        terms: 'Terms of Use',
        privacy: 'Privacy Policy',
        hse: 'HSE Compliance',
        conduct: 'Code of Conduct',
        vatNumber: 'VAT Reg No: 314891722600003',
      },
      preloader: {
        tagline: 'NEXAT Construction Co.',
        subtitle: 'EPC & General Contracting',
        status: 'Loading Architectural Frames...',
        framesCount: '245 High-Precision Frames',
        location: 'Riyadh, Saudi Arabia',
        complete: 'System Ready',
      },
      maintenance: {
        tagline: '[ SYSTEM UPGRADE ]',
        title: 'TEMPORARILY OFFLINE',
        description: 'We are calibrating our digital platform to deliver a more refined engineering and architectural experience.',
        getInTouch: 'Get In Touch',
        copyright: '© 2026 NEXAT Construction Co. All rights reserved.',
      },
      profile: {
        about: {
          title: "About NEXAT",
          headline: "Engineering Excellence & Disciplined Execution",
          body1: "NEXAT Construction Co. is a Saudi-owned multidisciplinary engineering, construction, and real estate development company serving Saudi Arabia and the GCC.",
          body2: "We deliver comprehensive EPC, Design & Build, and General Contracting solutions with a focus on quality, safety, and long-term value.",
          body3: "Our engineering-led approach brings together technical expertise, disciplined project delivery, and transparent client partnership. From early planning through handover and facility management, NEXAT transforms ambitious visions into sustainable built assets."
        },
        visionMission: {
          title: "Vision & Mission",
          visionLabel: "Vision",
          visionText: "To become the Middle East’s most trusted engineering and construction partner, recognized for delivering landmark projects through innovation, quality, and sustainable excellence.\n\nWe aspire to shape resilient communities, world-class infrastructure, and enduring developments that contribute to the region’s future.",
          missionLabel: "Mission",
          missionText: "To provide integrated engineering and construction solutions that create lasting value through:\n• Technical expertise\n• Operational excellence\n• Safety leadership\n• Continuous innovation\n• Disciplined planning\n• Value engineering\n• Quality systems\n• Transparent client partnership\n\nWe deliver from concept to completion."
        },
        coreValues: {
          title: "Core Values",
          val1Title: "Integrity & Accountability",
          val1Text: "Integrity, accountability, and respect guide our conduct, decisions, and relationships at every level.",
          val2Title: "Safety & Quality",
          val2Text: "Safety First and Quality Without Compromise shape how we plan, build, and hand over every project.",
          val3Title: "Excellence & Partnership",
          val3Text: "Engineering excellence, client partnership, innovation, sustainability, and continuous improvement drive lasting value."
        },
        whyChoose: {
          title: "Why Choose NEXAT",
          reason1Title: "Engineering-Led Solutions",
          reason1Text: "NEXAT combines technical expertise, international standards, and value engineering to deliver practical, high-performing solutions from the earliest project stage. Our teams develop coordinated approaches that improve quality, manage risk, and protect long-term project value.",
          reason2Title: "Turnkey Delivery",
          reason2Text: "From fast mobilization through construction, commissioning, and handover, we provide a single accountable partner across the project lifecycle. Sustainable construction practices and disciplined execution help clients achieve reliable outcomes with confidence."
        },
        divisions: {
          title: "Business Divisions",
          div1Title: "General Contracting & Civil Infrastructure",
          div1Items: "General Contracting | Civil & Infrastructure",
          div2Title: "Structural & Architectural Works",
          div2Items: "Structural Engineering | Architectural Finishing & Interior Fit-Out",
          div3Title: "MEP & Building Protection",
          div3Items: "MEP Engineering | Waterproofing & Thermal Insulation",
          div4Title: "Development & Asset Management",
          div4Items: "Real Estate Development | Facility Management"
        },
        sectors: {
          title: "Market Sectors",
          intro: "NEXAT serves a broad range of sectors across Saudi Arabia and the GCC.",
          primaryTitle: "Primary Sectors",
          primaryItems: ["Government", "Commercial", "Residential", "Healthcare", "Hospitality", "Education"],
          additionalTitle: "Additional Capabilities",
          additionalItems: ["Industrial", "Logistics", "Infrastructure", "Energy", "Mixed-Use Developments"]
        },
        qa: {
          title: "Quality Assurance",
          headline: "Quality Without Compromise",
          body: "Quality is embedded in every phase of our project delivery. Through rigorous QA/QC procedures, material verification, third-party testing, inspections, and commissioning, NEXAT ensures every project meets the highest standards of safety, performance, and client satisfaction."
        },
        future: {
          title: "Building the Future Responsibly",
          desc: "This presents our core corporate pillars for sustainable and digital project development.",
          hseTitle: "Health, Safety & Environment",
          hseText: "At NEXAT, safety is the foundation of every project. We foster a zero-harm culture through proactive risk management, comprehensive training, permit-to-work systems, toolbox talks, emergency preparedness, and environmentally responsible practices that protect our people, clients, and communities.",
          sustTitle: "Sustainability",
          sustText: "We integrate sustainable construction practices by promoting energy-efficient buildings, water conservation, waste reduction, responsible material selection, and lifecycle cost optimization. Our approach creates lasting value while minimizing environmental impact.",
          digTitle: "Digital Construction",
          digText: "NEXAT leverages modern construction technologies including Building Information Modeling (BIM), 3D coordination, drone monitoring, cloud-based project management, digital inspections, and electronic document control. These technologies enable greater accuracy, collaboration, and project efficiency.",
          advTitle: "Competitive Advantages",
          advText: "Our engineering-led approach combines experienced professionals, turnkey project delivery, advanced technology, transparent communication, and rigorous quality systems. This enables us to consistently deliver reliable, high-performance outcomes and build long-term client partnerships."
        },
        vision2030: {
          title: "Vision 2030 Commitment",
          headline: "Building Saudi Arabia’s Future",
          body: "NEXAT is proud to support Saudi Arabia’s Vision 2030 by delivering engineering and construction solutions that advance sustainable infrastructure, smart cities, housing, tourism, and industrial development. Through innovation, local expertise, and world-class execution, we contribute to building a resilient and diversified future for the Kingdom."
        },
        cta: {
          title: "Let’s Build Together",
          email: "Email",
          phone: "Phone",
          address: "Address",
          office: "Head Office: Building 4258, Asma Bint Malik St, Al Arid Dist., Riyadh 13341, Kingdom of Saudi Arabia (Short Address: RRRG4258)",
          social: "Social Media"
        }
      }
    },
    ar: {
      header: {
        languageLabel: 'اللغة:',
        tollFree: 'مبنى ٤٢٥٨، شارع اسماء بنت مالك، حي العارض، الرياض ١٣٣٤١، المملكة العربية السعودية',
        phone: 'اتصال: +٩٦٦ ٥٦ ٦٦٦ ٧٩٧٦',
        requestQuote: 'اتصل بنا',
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
        btnLabel: 'sales@nexat.llc',
      },
      footer: {
        subscribeTitle: 'اتصل بنا',
        subscribeDesc: 'تواصل مع فريق الاستشارات الهندسية والمشاريع في شركة نكسات للمقاولات. سواء كنت بحاجة إلى المقاولات العامة، حلول البناء والتصميم المتكاملة (EPC)، أو الهندسة القيمية لمشاريعك في المملكة العربية السعودية ودول الخليج، فإن خبراؤنا على أتم الاستعداد لمساعدتك.',
        subscribeBtn: 'اشتراك',
        placeholder: 'عنوان بريدك الإلكتروني',
        thankYou: 'شكراً لاشتراكك معنا!',
        col1Title: 'عن نكسات',
        col2Title: 'أقسامنا',
        col3Title: 'القدرات',
        col4Title: 'المكتب الرئيسي',
        col5Title: 'المساعدة والاتصال',
        addressLine1: 'مبنى ٤٢٥٨، شارع اسماء بنت مالك',
        addressLine2: 'حي العارض، الرياض ١٣٣٤١',
        addressLine3: 'المملكة العربية السعودية',
        shortAddress: 'العنوان المختصر: RRRG4258',
        copyright: '© ٢٠٢٦ شركة نكسات للمقاولات. جميع الحقوق محفوظة.',
        logoLabel: 'للمقاولات',
        terms: 'شروط الاستخدام',
        privacy: 'سياسة الخصوصية',
        hse: 'التزام السلامة HSE',
        conduct: 'ميثاق السلوك',
        vatNumber: 'الرقم الضريبي: ٣١٤٨٩١٧٢٢٦٠٠٠٠٣',
      },
      preloader: {
        tagline: 'شركة نكسات للمقاولات',
        subtitle: 'المقاولات العامة والهندسة',
        status: 'جاري تحميل الإطارات المعمارية...',
        framesCount: '٢٤٥ إطاراً عالي الدقة',
        location: 'الرياض، المملكة العربية السعودية',
        complete: 'النظام جاهز',
      },
      maintenance: {
        tagline: '[ ترقية النظام ]',
        title: 'خارج الخدمة مؤقتاً',
        description: 'نعمل على معايرة منصتنا الرقمية لتقديم تجربة هندسية ومعمارية أكثر تطوراً.',
        getInTouch: 'اتصل بنا',
        copyright: '© ٢٠٢٦ شركة نكسات للمقاولات. جميع الحقوق محفوظة.',
      },
      profile: {
        about: {
          title: "عن نكسات",
          headline: "التميز الهندسي والتنفيذ المنضبط",
          body1: "شركة نكسات للمقاولات هي شركة هندسية وإنشائية وتطوير عقاري متعددة التخصصات مملوكة سعودياً تخدم المملكة العربية السعودية ودول مجلس التعاون الخليجي.",
          body2: "نحن نقدم حلولاً شاملة في مجالات الهندسة والمشتريات والبناء (EPC) والتصميم والبناء والمقاولات العامة مع التركيز على الجودة والسلامة والقيمة على المدى الطويل.",
          body3: "يجمع نهجنا القائم على الهندسة بين الخبرة الفنية والتسليم المنضبط للمشاريع والشراكة الشفافة مع العملاء. من التخطيط المبكر وحتى التسليم وإدارة المرافق، تحول نكسات الرؤى الطموحة إلى أصول مبنية مستدامة."
        },
        visionMission: {
          title: "الرؤية والرسالة",
          visionLabel: "الرؤية",
          visionText: "أن نصبح الشريك الهندسي والإنشائي الأكثر موثوقية في الشرق الأوسط، والمتميز بتقديم مشاريع معالم بارزة من خلال الابتكار والجودة والتميز المستدام.\n\nنطمح للمساهمة في بناء مجتمعات مرنة، وبنية تحتية عالمية المستوى، وتطورات مستدامة تسهم في مستقبل المنطقة.",
          missionLabel: "الرسالة",
          missionText: "تقديم حلول هندسية وإنشائية متكاملة تخلق قيمة دائمة من خلال:\n• الخبرة الفنية\n• التميز التشغيلي\n• قيادة السلامة\n• الابتكار المستمر\n• التخطيط المنضبط\n• الهندسة القيمية\n• أنظمة الجودة\n• الشراكة الشفافة مع العملاء\n\nنحن نقدم خدماتنا من الفكرة إلى الاكتمال."
        },
        coreValues: {
          title: "القيم الجوهرية",
          val1Title: "النزاهة والمسؤولية",
          val1Text: "النزاهة والمسؤولية والاحترام هي التي توجه سلوكنا وقراراتنا وعلاقاتنا على جميع المستويات.",
          val2Title: "السلامة والجودة",
          val2Text: "السلامة أولاً والجودة دون مساومة هما ما يشكلان كيفية تخطيطنا وبنائنا وتسليمنا لكل مشروع.",
          val3Title: "التميز والشراكة",
          val3Text: "التميز الهندسي والشراكة مع العملاء والابتكار والاستدامة والتحسين المستمر هي محركات القيمة الدائمة لدينا."
        },
        whyChoose: {
          title: "لماذا تختار نكسات؟",
          reason1Title: "حلول قائمة على الهندسة",
          reason1Text: "تجمع نكسات بين الخبرة الفنية والمعايير الدولية والهندسة القيمية لتقديم حلول عملية وعالية الأداء منذ المراحل الأولى للمشروع. تطور فرقنا مناهج منسقة تعمل على تحسين الجودة وإدارة المخاطر وحماية قيمة المشروع على المدى الطويل.",
          reason2Title: "التسليم الجاهز (المفتاح)",
          reason2Text: "من الحشد السريع وحتى البناء والتشغيل والتسليم، نوفر شريكاً واحداً مسؤولاً طوال دورة حياة المشروع. تساعد ممارسات البناء المستدام والتنفيذ المنضبط العملاء على تحقيق نتائج موثوقة بكل ثقة."
        },
        divisions: {
          title: "قطاعات الأعمال",
          div1Title: "المقاولات العامة والبنية التحتية المدنية",
          div1Items: "المقاولات العامة | الأعمال المدنية والبنية التحتية",
          div2Title: "الأعمال الهيكلية والمعمارية",
          div2Items: "الهندسة الإنشائية | التشطيبات المعمارية والتجهيزات الداخلية",
          div3Title: "الكهروميكانيك وحماية المباني",
          div3Items: "هندسة الكهروميكانيك | عزل المياه والعزل الحراري",
          div4Title: "التطوير وإدارة الأصول",
          div4Items: "التطوير العقاري | إدارة المرافق"
        },
        sectors: {
          title: "القطاعات السوقية",
          intro: "تخدم نكسات مجموعة واسعة من القطاعات في جميع أنحاء المملكة العربية السعودية ودول مجلس التعاون الخليجي.",
          primaryTitle: "القطاعات الرئيسية",
          primaryItems: ["الحكومي", "التجاري", "السكني", "الرعاية الصحية", "الضيافة والفنادق", "التعليم"],
          additionalTitle: "القدرات الإضافية",
          additionalItems: ["الصناعي", "الخدمات اللوجستية", "البنية التحتية", "الطاقة", "المشاريع متعددة الاستخدامات"]
        },
        qa: {
          title: "توكيد الجودة",
          headline: "الجودة دون مساومة",
          body: "الجودة متأصلة في كل مرحلة من مراحل تسليم مشاريعنا. من خلال إجراءات توكيد وضبط الجودة (QA/QC) الصارمة، والتحقق من المواد، واختبارات الطرف الثالث، وعمليات التفتيش، والتشغيل التجريبي، تضمن نكسات أن يلبي كل مشروع أعلى معايير السلامة والأداء ورضا العملاء."
        },
        future: {
          title: "بناء المستقبل بمسؤولية",
          desc: "يقدم هذا القسم ركائزنا الأربع الأساسية للبناء المستقبلي الموثوق والتطوير الرقمي للمشاريع.",
          hseTitle: "الصحة والسلامة والبيئة",
          hseText: "في نكسات، السلامة هي أساس كل مشروع. نحن نعمل على تعزيز ثقافة خالية من الأذى والضرر من خلال الإدارة الاستباقية للمخاطر، والتدريب الشامل، وأنظمة تصاريح العمل، ومحادثات السلامة اليومية، والتأهب لحالات الطوارئ، والممارسات الصديقة للبيئة لحماية موظفينا وعملائنا ومجتمعاتنا.",
          sustTitle: "الاستدامة",
          sustText: "نحن ندمج ممارسات البناء المستدام من خلال تشجيع المباني الموفرة للطاقة، وترشيد استهلاك المياه، والحد من النفايات، واختيار المواد بمسؤولية، وتحسين تكلفة دورة الحياة. يخلق نهجنا قيمة دائمة مع تقليل الأثر البيئي.",
          digTitle: "البناء الرقمي",
          digText: "تستفيد نكسات من تقنيات البناء الحديثة بما في ذلك نمذجة معلومات البناء (BIM)، والتنسيق ثلاثي الأبعاد، ومراقبة المواقع عبر الطائرات بدون طيار، وإدارة المشاريع السحابية، وعمليات التفتيش الرقمية، والتحكم الإلكتروني في المستندات. تمكن هذه التقنيات من تحقيق دقة أكبر وتنسيق أعلى وكفاءة في المشاريع.",
          advTitle: "المزايا التنافسية",
          advText: "يجمع نهجنا القائم على الهندسة بين الكفاءات المهنية ذات الخبرة، وتسليم المشاريع الجاهزة، والتكنولوجيا المتقدمة، والتواصل الشفاف، وأنظمة الجودة الصارمة. يتيح لنا ذلك تقديم نتائج موثوقة وعالية الأداء باستمرار وبناء شراكات طويلة الأمد مع العملاء."
        },
        vision2030: {
          title: "الالتزام برؤية ٢٠٣٠",
          headline: "بناء مستقبل المملكة العربية السعودية",
          body: "تفخر نكسات بدعم رؤية المملكة العربية السعودية ٢٠٣٠ من خلال تقديم حلول هندسية وإنشائية تساهم في تقدم البنية التحتية المستدامة، المدن الذكية، الإسكان، السياحة، والتنمية الصناعية. من خلال الابتكار والخبرات المحلية والتنفيذ عالمي المستوى، نساهم في بناء مستقبل مرن ومتنوع للمملكة."
        },
        cta: {
          title: "لنتبنى المستقبل معاً",
          email: "البريد الإلكتروني",
          phone: "الهاتف",
          address: "العنوان",
          office: "المكتب الرئيسي: مبنى ٤٢٥٨، شارع اسماء بنت مالك، حي العارض، الرياض ١٣٣٤١، المملكة العربية السعودية (العنوان المختصر: RRRG4258)",
          social: "قنوات التواصل"
        }
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
