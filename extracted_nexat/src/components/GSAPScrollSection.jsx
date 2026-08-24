import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
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
        let panels = gsap.utils.toArray(".horizontal-narrative-panel");
        gsap.to(panels, {
          xPercent: isRtl ? 100 * (panels.length - 1) : -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 0.5,
            snap: 1 / (panels.length - 1),
            start: "top top",
            end: () => "+=" + scrollContainerRef.current.offsetWidth,
            invalidateOnRefresh: true,
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
    <section ref={containerRef} className="overflow-hidden bg-[var(--background)] text-[var(--primary-text)] md:h-screen border-t border-[var(--divider)] select-none">
      
      {/* Background blueprint grid overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] architectural-grid" />

      <div 
        ref={scrollContainerRef} 
        className={`flex flex-col md:flex-row md:h-screen w-full md:w-[300vw] relative z-10 ${isRtl ? 'md:flex-row-reverse' : ''}`}
      >

        {/* Panel 1: Precision Engineering */}
        <div className="horizontal-narrative-panel w-full md:w-screen h-screen flex items-center justify-center p-6 md:p-16 relative flex-shrink-0">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${isRtl ? 'md:flex-row-reverse' : ''}`}
          >
            
            {/* Text Column */}
            <div className={`space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="overflow-hidden py-1">
                <motion.h2 
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="text-4xl md:text-6xl font-black text-[var(--accent)] uppercase leading-none tracking-tight whitespace-pre-line"
                >
                  {current.panel1.title}
                </motion.h2>
              </div>
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                }}
                className="text-base md:text-lg font-sans text-[var(--secondary-text)] leading-relaxed"
              >
                {current.panel1.desc}
              </motion.p>
            </div>
            
            {/* Image Column with Curtain Reveal (No glassmorphism) */}
            <motion.div 
              variants={{
                hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
                visible: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }
              }}
              className="relative w-full aspect-[4/3] max-w-lg mx-auto rounded-3xl overflow-hidden border border-[var(--divider)] shadow-lg group"
            >
              <motion.img 
                variants={{
                  hidden: { scale: 1.1 },
                  visible: { scale: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
                }}
                src="/six_flags_showcase.png" 
                alt="Precision Engineering Site" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/20 to-transparent pointer-events-none" />
            </motion.div>

          </motion.div>
        </div>

        {/* Panel 2: Sustainable Architecture */}
        <div className="horizontal-narrative-panel w-full md:w-screen h-screen flex items-center justify-center p-6 md:p-16 relative flex-shrink-0 bg-[var(--surface)] border-t md:border-t-0 md:border-l border-[var(--divider)]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${isRtl ? 'md:flex-row-reverse' : ''}`}
          >
            
            {/* Image Column with Curtain Reveal (No glassmorphism) */}
            <motion.div 
              variants={{
                hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
                visible: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }
              }}
              className={`relative w-full aspect-[4/3] max-w-lg mx-auto rounded-3xl overflow-hidden border border-[var(--divider)] shadow-lg group ${isRtl ? 'md:order-last' : 'md:order-first'}`}
            >
              <motion.img 
                variants={{
                  hidden: { scale: 1.1 },
                  visible: { scale: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
                }}
                src="/project_civic.png" 
                alt="Sustainable Architecture Site" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/20 to-transparent pointer-events-none" />
            </motion.div>

            {/* Text Column */}
            <div className={`space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="overflow-hidden py-1">
                <motion.h2 
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="text-4xl md:text-6xl font-black text-white uppercase leading-none tracking-tight whitespace-pre-line"
                >
                  {current.panel2.title}
                </motion.h2>
              </div>
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                }}
                className="text-base md:text-lg font-sans text-[var(--secondary-text)] leading-relaxed"
              >
                {current.panel2.desc}
              </motion.p>
            </div>

          </motion.div>
        </div>

        {/* Panel 3: Luxury Living */}
        <div className="horizontal-narrative-panel w-full md:w-screen h-screen flex items-center justify-center p-6 md:p-16 relative flex-shrink-0 border-t md:border-t-0 md:border-l border-[var(--divider)]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${isRtl ? 'md:flex-row-reverse' : ''}`}
          >
            
            {/* Text Column */}
            <div className={`space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="overflow-hidden py-1">
                <motion.h2 
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="text-4xl md:text-6xl font-black text-[var(--accent)] uppercase leading-none tracking-tight whitespace-pre-line"
                >
                  {current.panel3.title}
                </motion.h2>
              </div>
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                }}
                className="text-base md:text-lg font-sans text-[var(--secondary-text)] leading-relaxed"
              >
                {current.panel3.desc}
              </motion.p>
            </div>
            
            {/* Image Column with Curtain Reveal (No glassmorphism) */}
            <motion.div 
              variants={{
                hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
                visible: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 } }
              }}
              className="relative w-full aspect-[4/3] max-w-lg mx-auto rounded-3xl overflow-hidden border border-[var(--divider)] shadow-lg group"
            >
              <motion.img 
                variants={{
                  hidden: { scale: 1.1 },
                  visible: { scale: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
                }}
                src="/project_villa.png" 
                alt="Luxury Living Architecture" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/20 to-transparent pointer-events-none" />
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default GSAPScrollSection;
