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
          desc: "تنسيق التشطيبات المستوردة الفاخرة، والأعمال الخشبية المخصصة، والأشكال الفراغية التي تتناغم مع تفاصيل الهيكل الإنشائي."
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

  return (
    <section id="why-nexat" className="relative w-full py-32 bg-[#F9FAFB] px-6 md:px-12 overflow-hidden text-[#0B1624] border-t border-[#0B1624]/5">
      {/* Subtle dotted structural/engineering pattern overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(#0B1624 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Background Decor */}
      <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-[#DA9A62]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-96 h-96 bg-[#DA9A62]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`mb-20 max-w-2xl ${isRtl ? 'ml-auto text-right' : 'text-left'}`}>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#DA9A62] text-sm tracking-[0.2em] font-semibold uppercase mb-3"
          >
            {current.standard}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight leading-none text-[#0B1624]"
          >
            {current.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#2C374E] mt-4 leading-relaxed"
          >
            {current.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`flex flex-col p-8 rounded-[1.5rem] bg-white border border-[#0B1624]/8 shadow-[0_4px_20px_rgba(11,22,36,0.02)] hover:border-[#DA9A62]/50 hover:shadow-[0_12px_40px_rgba(11,22,36,0.06)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer ${isRtl ? 'text-right items-end' : 'text-left items-start'}`}
            >
              {/* Feature Icon frame */}
              <div className="w-12 h-12 rounded-xl bg-[#0B1624]/5 border border-[#0B1624]/10 mb-6 flex items-center justify-center text-[#DA9A62] group-hover:bg-[#DA9A62] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-[#0B1624] group-hover:text-[#DA9A62] transition-colors">{feature.title}</h3>
              <p className="text-[#2C374E] leading-relaxed text-base font-sans">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
