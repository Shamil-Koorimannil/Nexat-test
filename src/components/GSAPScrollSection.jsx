import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const GSAPScrollSection = () => {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const { lang, isRtl } = useLanguage();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        let panels = gsap.utils.toArray(".panel");
        gsap.to(panels, {
          xPercent: isRtl ? 100 * (panels.length - 1) : -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            start: "top top",
            end: () => "+=" + scrollContainerRef.current.offsetWidth
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, [isRtl]);

  const translations = {
    en: {
      panel1: {
        title: "Precision\nEngineering.",
        desc: "Every building structure begins with robust calculations, rigorous wind-load analysis, and site soil mechanics. We formulate structural longevity."
      },
      panel2: {
        title: "Sustainable\nArchitecture.",
        desc: "We integrate sustainable carbon-neutral concrete, geothermal HVAC grids, smart shading dynamics, and high thermal performance directly into building geometries."
      },
      panel3: {
        title: "Luxury\nLiving.",
        desc: "From bespoke interior woodwork and custom marble layouts to automated climate control. Luxury is crafted through detail."
      }
    },
    ar: {
      panel1: {
        title: "الهندسة\nالدقيقة.",
        desc: "تبدأ كل بنية للمبنى بحسابات قوية، وتحليل دقيق لأحمال الرياح، وميكانيكا التربة في الموقع. نحن نصوغ المتانة الإنشائية لتدوم طويلاً."
      },
      panel2: {
        title: "العمارة\nالمستدامة.",
        desc: "ندمج الخرسانة المستدامة الخالية من الكربون، شبكات التكييف الحرارية الأرضية، ديناميكيات التظليل الذكية، والأداء الحراري العالي مباشرة في الأشكال الهندسية للمبنى."
      },
      panel3: {
        title: "العيش\nالفاخر.",
        desc: "من الأعمال الخشبية الداخلية المخصصة والتوزيعات الرخامية الفاخرة إلى التحكم التلقائي في المناخ. تُصنع الفخامة من خلال أدق التفاصيل."
      }
    }
  };

  const current = translations[lang];

  return (
    <section ref={containerRef} className="overflow-hidden bg-[#0B1624] text-white md:h-screen border-t border-white/5">
      <div 
        ref={scrollContainerRef} 
        className={`flex flex-col md:flex-row md:h-screen w-full md:w-[300vw] ${isRtl ? 'md:flex-row-reverse' : ''}`}
      >

        {/* Panel 1: Precision Engineering */}
        <div className="panel w-full md:w-screen h-screen flex flex-col items-center justify-center p-8 relative flex-shrink-0">
          {/* Immersive Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/six_flags_showcase.png" 
              alt="Precision Engineering Background" 
              className="w-full h-full object-cover transform scale-105 opacity-40"
            />
            {/* Blending Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1624] via-[#0B1624]/90 to-[#0B1624]/75 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl px-4 space-y-6">
            <h2 className="text-5xl md:text-8xl font-black text-[var(--accent)] uppercase leading-none tracking-tight whitespace-pre-line">
              {current.panel1.title}
            </h2>
            <p className="text-xl md:text-2xl font-sans text-[var(--secondary-text)] mt-4 leading-relaxed max-w-2xl mx-auto">
              {current.panel1.desc}
            </p>
          </div>
        </div>

        {/* Panel 2: Sustainable Architecture */}
        <div className="panel w-full md:w-screen h-screen flex flex-col items-center justify-center p-8 relative flex-shrink-0 bg-[#13263A]/10">
          {/* Immersive Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/project_civic.png" 
              alt="Sustainable Architecture Background" 
              className="w-full h-full object-cover transform scale-105 opacity-40"
            />
            {/* Blending Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1624] via-[#0B1624]/90 to-[#0B1624]/75 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl px-4 space-y-6">
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase leading-none tracking-tight whitespace-pre-line">
              {current.panel2.title}
            </h2>
            <p className="text-xl md:text-2xl font-sans text-[var(--secondary-text)] mt-4 leading-relaxed max-w-2xl mx-auto">
              {current.panel2.desc}
            </p>
          </div>
        </div>

        {/* Panel 3: Luxury Living */}
        <div className="panel w-full md:w-screen h-screen flex flex-col items-center justify-center p-8 relative flex-shrink-0">
          {/* Immersive Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img 
              src="/project_villa.png" 
              alt="Luxury Living Background" 
              className="w-full h-full object-cover transform scale-105 opacity-40"
            />
            {/* Blending Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1624] via-[#0B1624]/90 to-[#0B1624]/75 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl px-4 space-y-6">
            <h2 className="text-5xl md:text-8xl font-black text-[var(--accent)] uppercase leading-none tracking-tight whitespace-pre-line">
              {current.panel3.title}
            </h2>
            <p className="text-xl md:text-2xl font-sans text-[var(--secondary-text)] mt-4 leading-relaxed max-w-2xl mx-auto">
              {current.panel3.desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GSAPScrollSection;
