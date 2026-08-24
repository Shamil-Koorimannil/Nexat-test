import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Roadmap = () => {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const progressBarRef = useRef(null);
  const { lang, isRtl } = useLanguage();

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

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const panels = gsap.utils.toArray(".timeline-panel");
        const amountToScroll = scrollContainerRef.current.offsetWidth - window.innerWidth;
        
        // Pin section and scroll panels horizontally
        gsap.to(panels, {
          xPercent: isRtl ? 100 * (panels.length - 1) : -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 0.5,
            start: "top top",
            end: () => "+=" + scrollContainerRef.current.offsetWidth,
            invalidateOnRefresh: true,
          }
        });

        // Dynamic progress bar indicator
        gsap.fromTo(progressBarRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            transformOrigin: isRtl ? "right center" : "left center",
            scrollTrigger: {
              trigger: containerRef.current,
              scrub: 0.5,
              start: "top top",
              end: () => "+=" + scrollContainerRef.current.offsetWidth,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isRtl]);

  return (
    <section 
      id="services" 
      ref={containerRef} 
      className="bg-[var(--background)] relative overflow-hidden border-t border-[var(--divider)] select-none"
    >
      {/* Background architectural gridlines overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] architectural-grid" />

      {/* Main Container */}
      <div 
        ref={scrollContainerRef}
        className={`flex flex-col md:flex-row md:w-[700vw] w-full min-h-screen relative z-10 ${isRtl ? 'md:flex-row-reverse' : ''}`}
      >
        
        {/* PANEL 0: Intro Panel */}
        <div className="timeline-panel w-full md:w-screen h-screen flex-shrink-0 flex items-center justify-center p-6 md:p-16">
          <div className="max-w-4xl text-center md:px-12">
            <span className="text-[var(--accent)] font-bold tracking-[0.25em] uppercase mb-4 text-xs md:text-sm block">
              {current.sectionTitle}
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-[var(--primary-text)]">
              {current.title} <span className="text-[var(--accent)]">{current.titleAccent}</span>
            </h2>
            <p className="text-base md:text-lg text-[var(--secondary-text)] mt-6 leading-relaxed font-sans">
              {current.desc}
            </p>
            {/* Minimal scroll hint (using icon control, no new branded copy) */}
            <div className="mt-12 flex justify-center items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-[var(--muted-text)] font-semibold">
                {lang === 'ar' ? 'اسحب أو مرر' : 'Scroll / Swipe'}
              </span>
              <span className="animate-pulse text-[var(--accent)]">
                {isRtl ? '←' : '→'}
              </span>
            </div>
          </div>
        </div>

        {/* PANELS 1 to 6: Phase Panels */}
        {timelineItems.map((item, idx) => (
          <div 
            key={idx}
            className="timeline-panel w-full md:w-screen h-screen flex-shrink-0 flex items-center justify-center p-6 md:p-16 border-t md:border-t-0 md:border-l border-[var(--divider)]"
          >
            <div className={`max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Left Column: Phase Image Showcase (No glassmorphism, using only structural frames) */}
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden border border-[var(--divider)] shadow-lg relative group">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/20 to-transparent pointer-events-none" />
              </div>

              {/* Right Column: Details */}
              <div className={`w-full md:w-1/2 flex flex-col justify-center space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
                
                {/* Phase Number & Icon */}
                <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <span className="font-mono text-4xl font-light text-[var(--accent)] tracking-tighter">
                    {item.phase}
                  </span>
                  <div className="w-[1px] h-6 bg-[var(--divider)]" />
                  <div className="w-8 h-8 rounded-lg bg-[var(--surface)] flex items-center justify-center text-[var(--accent)]">
                    {item.icon}
                  </div>
                </div>

                {/* Typography */}
                <h3 className="text-2xl md:text-3xl font-black text-[var(--primary-text)] uppercase tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs uppercase font-bold tracking-wider text-[var(--accent)]">
                  {item.subtitle}
                </p>
                <p className="text-base text-[var(--secondary-text)] leading-relaxed font-sans pt-2">
                  {item.desc}
                </p>

              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Bottom Horizontal Progress Tracker Line (Desktop only) */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-[3px] bg-[var(--divider)] z-20">
        <div 
          ref={progressBarRef}
          className="h-full bg-[var(--accent)] w-full origin-left scale-x-0" 
        />
      </div>

    </section>
  );
};

export default Roadmap;
