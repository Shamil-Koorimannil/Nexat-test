import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Roadmap = () => {
  const containerRef = useRef(null);
  const { lang, isRtl } = useLanguage();

  // Scroll animation for the growing timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  // Smooth out the scroll path drawing
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const translations = {
    en: {
      sectionTitle: 'Core Capabilities',
      title: 'Our Construction',
      titleAccent: 'Services.',
      desc: 'NEXAT delivers a unified project workflow, transforming ambitious visions into high-performing, certified corporate and residential landmarks.',
      items: [
        {
          phase: '01',
          title: 'Architectural Conception & Feasibility',
          subtitle: 'Vision & Feasibility Study',
          desc: 'Translating client parameters into initial blueprints and spatial designs. We analyze site constraints, zoning guidelines, and perform structural feasibility modeling to secure approvals.',
          image: '/project_civic.png'
        },
        {
          phase: '02',
          title: 'Advanced Structural Engineering',
          subtitle: 'Safety & Material Rigor',
          desc: 'Executing comprehensive calculations for load-bearing capabilities, structural mechanics, wind-loads, and seismological resistance. We engineer with advanced materials for structural longevity.',
          image: '/project_tower.png'
        },
        {
          phase: '03',
          title: 'Construction & General Contracting',
          subtitle: 'Precision Site Execution',
          desc: 'Orchestrating raw construction works, concrete pouring, crane logistics, and civil work. Our dedicated engineers oversee daily operations, maintaining high safety standards.',
          image: '/six_flags_showcase.png'
        },
        {
          phase: '04',
          title: 'Bespoke Interior Architecture',
          subtitle: 'Luxury Material Curation',
          desc: 'Designing luxury interior layouts, bespoke woodwork, stone selection, lighting, and automation. We collaborate with international suppliers to secure custom material finishes.',
          image: '/project_villa.png'
        },
        {
          phase: '05',
          title: 'Sustainable Infrastructure & HVAC',
          subtitle: 'Energy & Ecological Integration',
          desc: 'Integrating geothermal systems, solar layouts, greywater recovery, smart automation, and optimal thermal acoustics. We aim for LEED/BREEAM certifications on major projects.',
          image: '/headquarters.png'
        },
        {
          phase: '06',
          title: 'Project Handover & Facility Care',
          subtitle: 'Lifecycle Maintenance',
          desc: 'Providing thorough documentation, maintenance protocols, structural checks, and facility optimization services post-construction to guarantee building performance.',
          image: '/project_civic.png'
        }
      ]
    },
    ar: {
      sectionTitle: 'القدرات الأساسية',
      title: 'خدمات المقاولات و',
      titleAccent: 'الإنشاءات.',
      desc: 'تقدم نكسات مسار عمل موحد للمشاريع، يحول الرؤى الطموحة إلى معالم سكنية وتجارية مميزة وعالية الأداء.',
      items: [
        {
          phase: '٠١',
          title: 'التصميم المعماري ودراسة الجدوى',
          subtitle: 'الرؤية ودراسة الجدوى',
          desc: 'تحويل متطلبات العميل إلى مخططات أولية وتصميمات فراغية. نقوم بتحليل قيود الموقع وإرشادات التخطيط ونمذجة الجدوى الإنشائية للحصول على الموافقات.',
          image: '/project_civic.png'
        },
        {
          phase: '٠٢',
          title: 'الهندسة الإنشائية المتقدمة',
          subtitle: 'السلامة ومتانة المواد',
          desc: 'إجراء الحسابات الشاملة للقدرات الحاملة والميكانيكا الإنشائية وأحمال الرياح ومقاومة الزلازل. نصمم باستخدام مواد متقدمة لضمان المتانة الطويلة الأجل.',
          image: '/project_tower.png'
        },
        {
          phase: '٠٣',
          title: 'البناء والمقاولات العامة',
          subtitle: 'دقة التنفيذ في الموقع',
          desc: 'تنظيم أعمال البناء الأساسية، وصب الخرسانة، ولوجستيات الرافعات، والأعمال المدنية. يشرف مهندسونا المختصون على العمليات اليومية مع الحفاظ على أعلى معايير السلامة.',
          image: '/six_flags_showcase.png'
        },
        {
          phase: '٠٤',
          title: 'التصميم الداخلي المعماري الفاخر',
          subtitle: 'تنسيق المواد الفاخرة',
          desc: 'تصميم مخططات داخلية فاخرة، وأعمال خشبية مخصصة، واختيار الأحجار والرخام، والإضاءة والأتمتة الذكية. نتعاون مع موردين دوليين لتأمين تشطيبات مميزة مخصصة.',
          image: '/project_villa.png'
        },
        {
          phase: '٠٥',
          title: 'البنية التحتية المستدامة والتكييف',
          subtitle: 'تكامل الطاقة والبيئة',
          desc: 'دمج الأنظمة الحرارية الأرضية، ومخططات الطاقة الشمسية، واستعادة المياه الرمادية، والأتمتة الذكية، والعزل الصوتي والحراري الأمثل. نهدف للحصول على شهادات LEED/BREEAM في المشاريع الكبرى.',
          image: '/headquarters.png'
        },
        {
          phase: '٠٦',
          title: 'تسليم المشروع ورعاية المرافق',
          subtitle: 'صيانة دورة حياة المبنى',
          desc: 'تقديم توثيق شامل، وبروتوكولات الصيانة، والفحوصات الإنشائية، وخدمات تحسين المرافق بعد البناء لضمان أعلى أداء للمبنى.',
          image: '/project_civic.png'
        }
      ]
    }
  };

  const current = translations[lang];

  const icons = [
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
    (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  ];

  const timelineItems = current.items.map((item, idx) => ({
    ...item,
    icon: icons[idx]
  }));

  return (
    <section id="services" ref={containerRef} className="py-32 bg-[#0B1624] text-white px-6 md:px-12 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#DA9A62]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-[#DA9A62]/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-[var(--accent)] font-semibold tracking-widest uppercase mb-3 text-sm"
          >
            {current.sectionTitle}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none"
          >
            {current.title} <span className="text-[var(--accent)]">{current.titleAccent}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--secondary-text)] mt-6 leading-relaxed"
          >
            {current.desc}
          </motion.p>
        </div>

        {/* Timeline Flow */}
        <div className="relative">
          
          {/* Timeline Connector Line */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-white/10 rounded-full" />
          
          <motion.div
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-[var(--accent)] rounded-full origin-top"
          />

          <div className="space-y-16 md:space-y-24">
            {timelineItems.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row relative items-start md:items-center justify-between w-full"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-120px' }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-5 h-5 rounded-full bg-[var(--accent)] border-4 border-[#0B1624] flex items-center justify-center relative"
                    >
                      <span className="absolute -inset-2 bg-[#DA9A62]/10 rounded-full pointer-events-none" />
                    </motion.div>
                  </div>

                  {/* Left Column (Desktop) */}
                  <div className="w-full md:w-[45%] pl-16 md:pl-0">
                    {isEven ? (
                      <TimelineCard item={item} isEven={isEven} index={idx} />
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {/* Right Column (Desktop) */}
                  <div className="w-full md:w-[45%] pl-16 md:pl-0">
                    {!isEven ? (
                      <TimelineCard item={item} isEven={isEven} index={idx} />
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

// Subcomponent for Timeline Card
const TimelineCard = ({ item, isEven, index }) => {
  const { isRtl } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -45 : 45, y: 15 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ type: 'spring', duration: 0.8, bounce: 0.1, delay: 0.05 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        whileHover={{
          scale: 1.02,
          rotateY: isEven ? 4 : -4,
          rotateX: 2,
          z: 15,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 25 }}
        className={`bg-[#13263A]/30 backdrop-blur-sm border border-white/5 rounded-[1.5rem] p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden group cursor-pointer hover:border-[var(--accent)]/30 hover:bg-[#13263A]/50 transition-all duration-300 ${isRtl ? 'text-right' : 'text-left'}`}
      >
        {/* Soft glow */}
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#DA9A62]/3 rounded-full blur-2xl pointer-events-none" />

        {/* Card Header (Phase & Icon) */}
        <div className={`flex items-center justify-between gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <span className="font-black text-[var(--accent)] text-3xl tracking-tight leading-none">
            {item.phase}
          </span>
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[#0B1624] transition-all duration-300">
            {item.icon}
          </div>
        </div>

        {/* Details */}
        <div>
          <h3 className="font-bold text-xl text-white group-hover:text-[var(--accent)] transition-colors uppercase tracking-tight">
            {item.title}
          </h3>
          <p className="text-xs uppercase font-semibold tracking-wider text-[var(--muted-text)] mt-1">
            {item.subtitle}
          </p>
          
          {item.image && (
            <div className="my-4 relative w-full h-44 rounded-xl overflow-hidden border border-white/5 group-hover:border-[var(--accent)]/20 transition-all duration-300">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1624]/40 to-transparent pointer-events-none" />
            </div>
          )}

          <p className="text-[var(--secondary-text)] text-base leading-relaxed mt-3 font-sans">
            {item.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Roadmap;
