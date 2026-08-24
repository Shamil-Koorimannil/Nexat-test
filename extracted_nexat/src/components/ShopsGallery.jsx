import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ShopsGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang, isRtl } = useLanguage();

  const translations = {
    en: {
      subtitle: 'Portfolio of Experience',
      title: 'Structural',
      titleAccent: 'Engagements.',
      desc: 'Exploring our history of professional on-site execution, infrastructure coordination, and large-scale project development across key structural domains.',
      labelCode: 'Project Code',
      labelCategory: 'Classification',
      labelRegion: 'Execution Region',
      labelStandard: 'Target Standard',
      labelSpecs: 'Technical Specs',
      projects: [
        {
          num: '01',
          name: 'Golden Butterfly Construction',
          category: 'Construction & Development',
          desc: 'A construction project involving on-site execution, structural works, and coordinated development, delivered with a focus on quality, precision, and reliable workmanship.',
          code: 'NXT-01-GBC',
          region: 'Riyadh Province, KSA',
          standard: 'SASO Standard',
          specs: 'C50/60 Reinforced Concrete Casting'
        },
        {
          num: '02',
          name: 'Al Hufi Contracting Limited',
          category: 'Contracting & Infrastructure',
          desc: 'A contracting and construction project covering site development, infrastructure-related activities, and coordinated execution to meet project requirements and quality standards.',
          code: 'NXT-02-AHC',
          region: 'Eastern Province, KSA',
          standard: 'Class-A Contracting Code',
          specs: 'High-Density Sub-Surface Infrastructure'
        },
        {
          num: '03',
          name: 'Six Flags Saudi Arabia',
          category: 'Large-Scale Destination Development',
          desc: 'A major destination development project involving large-scale construction activities, infrastructure works, utility installations, and complex site coordination.',
          code: 'NXT-03-SFS',
          region: 'Qiddiya (Riyadh), KSA',
          standard: 'International Building Code (IBC)',
          specs: 'Heavy Structural Foundations & Anchors'
        },
        {
          num: '04',
          name: 'Hassan Alam Construction',
          category: 'Construction Execution',
          desc: 'A construction project involving professional site operations, structural development, and coordinated project execution across key stages of the build.',
          code: 'NXT-04-HAC',
          region: 'Central Region, KSA',
          standard: 'ASTM Structural Standards',
          specs: 'Pre-cast Steel Geometry & Truss Framing'
        },
        {
          num: '05',
          name: 'Elegancia Arabia',
          category: 'Construction & Development',
          desc: 'A project focused on high-quality construction and development works, combining efficient execution, attention to detail, and adherence to project specifications.',
          code: 'NXT-05-ELA',
          region: 'Western Province, KSA',
          standard: 'Grade-1 Quality Specification',
          specs: 'GFRC Facades & Premium Finishes'
        },
        {
          num: '06',
          name: 'Ladtech International',
          category: 'International Construction',
          desc: 'An international construction project involving organized site execution, infrastructure and development activities, and professional coordination to support successful project delivery.',
          code: 'NXT-06-LDT',
          region: 'GCC & International',
          standard: 'ISO 9001:2015 Execution',
          specs: 'Multi-National Logistical Coordination'
        }
      ]
    },
    ar: {
      subtitle: 'سجل الخبرات والاعتمادات',
      title: 'سابقة أعمال',
      titleAccent: 'الإنشاءات.',
      desc: 'نستعرض هنا تاريخنا الحافل بالتنفيذ الموقعي الاحترافي، وتنسيق البنية التحتية، وتطوير المشاريع الكبرى عبر مختلف التخصصات الإنشائية.',
      labelCode: 'رمز المشروع',
      labelCategory: 'التصنيف الإنشائي',
      labelRegion: 'منطقة التنفيذ',
      labelStandard: 'المعيار المعتمد',
      labelSpecs: 'المواصفات الفنية',
      projects: [
        {
          num: '٠١',
          name: 'شركة الفراشة الذهبية للمقاولات',
          category: 'الإنشاءات والتطوير',
          desc: 'مشروع إنشائي يشمل التنفيذ الموقعي والأعمال الإنشائية والتطوير المنسق، تم تقديمه بتركيز عالٍ على الجودة والدقة والعمل الموثوق.',
          code: 'NXT-01-GBC',
          region: 'منطقة الرياض، المملكة العربية السعودية',
          standard: 'مواصفات الهيئة السعودية (SASO)',
          specs: 'صب خرسانات مسلحة ثقيلة C50/60'
        },
        {
          num: '٠٢',
          name: 'شركة الحوفي للمقاولات المحدودة',
          category: 'المقاولات والبنية التحتية',
          desc: 'مشروع مقاولات وإنشاءات يغطي تطوير الموقع، والأنشطة المتعلقة بالبنية التحتية، والتنفيذ المنسق لتلبية متطلبات المشروع ومعايير الجودة.',
          code: 'NXT-02-AHC',
          region: 'المنطقة الشرقية، المملكة العربية السعودية',
          standard: 'كود المقاولات من الفئة الممتازة (Class-A)',
          specs: 'البنية التحتية الأرضية عالية الكثافة'
        },
        {
          num: '٠٣',
          name: 'سيكس فلاغز السعودية',
          category: 'تطوير الوجهات الكبرى',
          desc: 'مشروع تطوير وجهة ترفيهية رئيسية يتضمن أنشطة إنشائية واسعة النطاق، وأعمال البنية التحتية، وتركيبات المرافق، والتنسيق المعقد للموقع.',
          code: 'NXT-03-SFS',
          region: 'القدية (الرياض)، المملكة العربية السعودية',
          standard: 'كود البناء الدولي (IBC)',
          specs: 'أساسات هيكلية ثقيلة ومرابط تدعيم للأحمال'
        },
        {
          num: '٠٤',
          name: 'حسن علام للإنشاءات',
          category: 'تنفيذ الإنشاءات',
          desc: 'مشروع إنشائي يتضمن عمليات الموقع الاحترافية، والتطوير الهيكلي، والتنفيذ المنسق للمشروع عبر المراحل الرئيسية للبناء.',
          code: 'NXT-04-HAC',
          region: 'المنطقة الوسطى، المملكة العربية السعودية',
          standard: 'المواصفات القياسية الإنشائية (ASTM)',
          specs: 'هياكل حديدية مسبقة الصب وإطارات دعامية'
        },
        {
          num: '٠٥',
          name: 'إليغانسيا أرابيا',
          category: 'الإنشاءات والتطوير',
          desc: 'مشروع يركز على أعمال البناء والتطوير عالية الجودة، ويجمع بين التنفيذ الفعال والاهتمام بالتفاصيل والالتزام بمواصفات المشروع.',
          code: 'NXT-05-ELA',
          region: 'المنطقة الغربية، المملكة العربية السعودية',
          standard: 'معيار الجودة من الفئة الأولى',
          specs: 'واجهات GFRC وتشطيبات فاخرة مخصصة'
        },
        {
          num: '٠٦',
          name: 'لادتك العالمية',
          category: 'الإنشاءات الدولية',
          desc: 'مشروع بناء دولي يتضمن تنفيذاً منظماً للموقع، وأنشطة البنية التحتية والتطوير، والتنسيق المهني لدعم تسليم المشروع بنجاح.',
          code: 'NXT-06-LDT',
          region: 'الخليج العربي والمستوى الدولي',
          standard: 'إدارة جودة التنفيذ ISO 9001:2015',
          specs: 'تنسيق لوجستي عابر للحدود ومتعدد الجنسيات'
        }
      ]
    }
  };

  const current = translations[lang];
  const projects = current.projects;
  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="py-24 md:py-36 bg-[var(--background)] text-[var(--primary-text)] px-6 md:px-12 relative overflow-hidden border-t border-[var(--divider)] select-none">
      
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none architectural-grid" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6 ${isRtl ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
          <div>
            <span className="text-[var(--accent)] font-bold tracking-[0.25em] uppercase mb-3 text-xs md:text-sm block">
              {current.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none">
              {current.title} <br /><span className="text-[var(--accent)]">{current.titleAccent}</span>
            </h2>
          </div>
          <p className={`text-base md:text-lg text-[var(--secondary-text)] max-w-md leading-relaxed ${isRtl ? 'text-right' : 'text-left'} font-sans`}>
            {current.desc}
          </p>
        </div>

        {/* Rebuilt Split Panel Structure */}
        <div className={`flex flex-col md:flex-row gap-12 items-start ${isRtl ? 'md:flex-row-reverse' : ''}`}>
          
          {/* Left Column: Vertical Minimalist Project Selector List */}
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            {projects.map((project, idx) => {
              const isActive = idx === activeIndex;

              return (
                <div
                  key={project.code}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                    isActive 
                      ? 'bg-[var(--surface)] border-[var(--accent)]/40 shadow-lg' 
                      : 'bg-transparent border-[var(--divider)] hover:border-[var(--secondary-text)]/20'
                  }`}
                >
                  <div className={`flex items-center justify-between gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    
                    <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <span className="font-mono text-xl font-light text-[var(--muted-text)]">
                        {project.num}
                      </span>
                      <div className="w-[1px] h-4 bg-[var(--divider)]" />
                      <div className={`space-y-0.5 ${isRtl ? 'text-right' : 'text-left'}`}>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] block">
                          {project.category}
                        </span>
                        <h3 className="text-lg md:text-xl font-black uppercase text-[var(--primary-text)]">
                          {project.name}
                        </h3>
                      </div>
                    </div>

                    <span className={`text-[var(--accent)] transition-transform duration-300 ${isActive ? 'translate-x-1' : ''} ${isRtl ? 'rotate-180' : ''}`}>
                      →
                    </span>

                  </div>

                  {/* Mobile expansion container (stacks project details on mobile view) */}
                  <div className="md:hidden">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden mt-4 pt-4 border-t border-[var(--divider)] text-sm font-sans space-y-4"
                        >
                          <p className="text-[var(--secondary-text)] leading-relaxed">{project.desc}</p>
                          <div className="grid grid-cols-2 gap-4 pt-2">
                            <div>
                              <span className="text-[var(--muted-text)] block text-[10px] uppercase tracking-wider">{current.labelCode}</span>
                              <span className="font-mono text-[var(--primary-text)] font-semibold">{project.code}</span>
                            </div>
                            <div>
                              <span className="text-[var(--muted-text)] block text-[10px] uppercase tracking-wider">{current.labelRegion}</span>
                              <span className="text-[var(--primary-text)] font-semibold">{project.region}</span>
                            </div>
                            <div>
                              <span className="text-[var(--muted-text)] block text-[10px] uppercase tracking-wider">{current.labelStandard}</span>
                              <span className="text-[var(--accent)] font-semibold">{project.standard}</span>
                            </div>
                            <div>
                              <span className="text-[var(--muted-text)] block text-[10px] uppercase tracking-wider">{current.labelSpecs}</span>
                              <span className="text-[var(--primary-text)] font-semibold">{project.specs}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Right Column: Pinned Technical Showcase Panel (Desktop only) */}
          <div className="hidden md:flex md:w-1/2 md:sticky md:top-32 h-[450px] flex-col justify-between p-8 rounded-3xl bg-[var(--surface)] border border-[var(--divider)] shadow-lg">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.code}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col justify-between"
              >
                
                {/* Details Top */}
                <div className={`space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-widest block uppercase">
                    {activeProject.category}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-black uppercase text-[var(--primary-text)] tracking-tight leading-tight">
                    {activeProject.name}
                  </h4>
                  <div className="w-12 h-[1px] bg-[var(--accent)] mt-2" />
                  <p className="text-base text-[var(--secondary-text)] leading-relaxed font-sans pt-2">
                    {activeProject.desc}
                  </p>
                </div>

                {/* Details Grid Parameter Sheets */}
                <div className={`grid grid-cols-2 gap-y-6 gap-x-4 pt-6 border-t border-[var(--divider)] text-xs font-sans ${isRtl ? 'text-right' : 'text-left'}`}>
                  <div>
                    <span className="text-[var(--muted-text)] block mb-1 text-[10px] uppercase tracking-wider">{current.labelCode}</span>
                    <span className="text-[var(--primary-text)] font-mono font-bold text-sm">{activeProject.code}</span>
                  </div>
                  <div>
                    <span className="text-[var(--muted-text)] block mb-1 text-[10px] uppercase tracking-wider">{current.labelRegion}</span>
                    <span className="text-[var(--primary-text)] font-semibold text-sm">{activeProject.region}</span>
                  </div>
                  <div>
                    <span className="text-[var(--muted-text)] block mb-1 text-[10px] uppercase tracking-wider">{current.labelStandard}</span>
                    <span className="text-[var(--accent)] font-bold text-sm">{activeProject.standard}</span>
                  </div>
                  <div>
                    <span className="text-[var(--muted-text)] block mb-1 text-[10px] uppercase tracking-wider">{current.labelSpecs}</span>
                    <span className="text-[var(--primary-text)] font-semibold text-sm block truncate" title={activeProject.specs}>{activeProject.specs}</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ShopsGallery;
