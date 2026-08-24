import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const FeaturesSection = () => {
  const { lang, isRtl } = useLanguage();

  const translations = {
    en: {
      standard: 'The NEXAT Standard',
      title: 'Why NEXAT works',
      desc: 'Unifying rigorous engineering safety parameters with premium architectural styling for projects that endure.',
      features: [
        {
          title: "Precision Engineering",
          desc: "Millimeter-level tolerances in structural load calculations. We run advanced computational modeling to ensure long-term structural resilience."
        },
        {
          title: "Luxury Architecture",
          desc: "Curation of premium imported finishes, custom woodwork, and spatial geometries that harmonize with structural framework details."
        },
        {
          title: "Ecological Integration",
          desc: "LEED-aligned, climate-responsive insulation, carbon-neutral materials, solar dynamics, and thermal efficiency designed directly into the build."
        },
        {
          title: "Operational Certainty",
          desc: "We deliver comprehensive lifecycle documentation, schedule controls, safety protocols, and post-occupancy structural reviews."
        }
      ]
    },
    ar: {
      standard: 'معايير نكسات',
      title: 'لماذا نكسات؟',
      desc: 'توحيد معايير السلامة الهندسية الصارمة مع الطراز المعماري المتميز لمشاريع تدوم طويلاً.',
      features: [
        {
          title: "الهندسة الدقيقة",
          desc: "نسب تفاوت بالمليمتر في حسابات الأحمال الإنشائية. نقوم بنمذجة حاسوبية متقدمة لضمان متانة الهيكل على المدى الطويل."
        },
        {
          title: "العمارة الفاخرة",
          desc: "تنسيق التشاطيب المستوردة الفاخرة، والأعمال الخشبية المخصصة، والأشكال الفراغية التي تتناغم مع تفاصيل الهيكل الإنشائي."
        },
        {
          title: "التكامل البيئي",
          desc: "عزل متوافق مع معايير LEED ومستجيب للمناخ، ومواد خالية من الكربون، وحركية شمسية، وكفاءة حرارية مصممة مباشرة في المبنى."
        },
        {
          title: "اليقين التشغيلي",
          desc: "نحن نقدم توثيقاً شاملاً لدورة حياة المبنى، وضوابط الجدول الزمني، وبروتوكولات السلامة، والمراجعات الإنشائية بعد السكن."
        }
      ]
    }
  };

  const current = translations[lang];

  const icons = [
    (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22h20" />
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  ];

  const features = current.features.map((feat, idx) => ({
    ...feat,
    icon: icons[idx]
  }));

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="why-nexat" className="relative w-full py-24 md:py-36 bg-[var(--background)] px-6 md:px-12 overflow-hidden text-[var(--primary-text)] border-t border-[var(--divider)] select-none">
      
      {/* Dotted architectural background grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] architectural-grid" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className={`mb-20 max-w-2xl ${isRtl ? 'ml-auto text-right' : 'text-left'}`}
        >
          <span className="text-[var(--accent)] text-xs md:text-sm tracking-[0.2em] font-bold uppercase block mb-3">
            {current.standard}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none text-[var(--primary-text)]">
            {current.title}
          </h2>
          <p className="text-base md:text-lg text-[var(--secondary-text)] mt-4 leading-relaxed font-sans">
            {current.desc}
          </p>
        </motion.div>

        {/* Rebuilt Architectural Grid Layout */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[var(--divider)]"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`p-8 bg-[var(--surface)] border-r border-b border-[var(--divider)] flex flex-col justify-between hover:bg-[var(--surface-hover)] transition-colors duration-300 relative group cursor-pointer ${isRtl ? 'text-right items-end' : 'text-left items-start'}`}
            >
              <div>
                
                {/* Icon block */}
                <div className="w-12 h-12 rounded-xl bg-[var(--background)] border border-[var(--divider)] mb-8 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--background)] transition-all duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider text-[var(--primary-text)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--secondary-text)] leading-relaxed font-sans">
                  {feature.desc}
                </p>

              </div>
              
              {/* Thin accent marker line at the bottom */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--accent)] transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesSection;
