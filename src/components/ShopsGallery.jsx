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

  return (
    <section id="projects" className="py-32 bg-[#0B1624] text-white px-6 md:px-12 relative overflow-hidden border-t border-white/5 select-none">
      
      {/* Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--accent) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6 ${isRtl ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[var(--accent)] font-semibold tracking-widest uppercase mb-3 text-sm"
            >
              {current.subtitle}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none"
            >
              {current.title} <br /><span className="text-[var(--accent)]">{current.titleAccent}</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg text-[var(--secondary-text)] max-w-md leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}
          >
            {current.desc}
          </motion.p>
        </div>

        {/* Projects Accordion List Container */}
        <div className={`flex flex-col gap-6 ${isRtl ? 'direction-rtl' : ''}`}>
          {projects.map((project, idx) => {
            const isActive = idx === activeIndex;

            return (
              <motion.div
                key={project.code}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`relative p-6 md:p-8 rounded-[1.5rem] border transition-all duration-500 cursor-pointer group flex flex-col justify-between ${
                  isActive 
                    ? 'bg-[#13263A]/40 border-[var(--accent)] shadow-2xl shadow-[#DA9A62]/5' 
                    : 'bg-transparent border-white/5 hover:border-white/20'
                }`}
                style={{ perspective: 1000 }}
              >
                
                {/* Active Highlight Line Accent */}
                <motion.div
                  className={`absolute top-0 bottom-0 w-[3px] bg-[var(--accent)] ${isRtl ? 'right-0' : 'left-0'}`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Layout Wrapper */}
                <div className={`flex items-start justify-between gap-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  
                  {/* Main textual contents */}
                  <div className="space-y-3 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)] bg-[#0B1624]/60 px-3 py-1 rounded-full border border-white/5 inline-block">
                      {project.category}
                    </span>
                    
                    <h3 className={`text-xl md:text-2xl font-black text-white transition-colors duration-300 group-hover:text-[var(--accent)] ${isRtl ? 'text-right' : 'text-left'}`}>
                      {project.name}
                    </h3>

                    {/* Animated description expansion */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: isActive ? 'auto' : 0, 
                        opacity: isActive ? 1 : 0 
                      }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className={`text-base text-[var(--secondary-text)] leading-relaxed mt-4 pt-4 border-t border-white/5 font-sans ${isRtl ? 'text-right' : 'text-left'}`}>
                        {project.desc}
                      </p>
                      
                      {/* Integrated technical metadata parameter sheet */}
                      <div className={`mt-6 pt-4 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans ${isRtl ? 'text-right' : 'text-left'}`}>
                        <div>
                          <span className="text-white/40 block mb-0.5">{current.labelCode}</span>
                          <span className="text-white font-mono">{project.code}</span>
                        </div>
                        <div>
                          <span className="text-white/40 block mb-0.5">{current.labelRegion}</span>
                          <span className="text-white">{project.region}</span>
                        </div>
                        <div>
                          <span className="text-white/40 block mb-0.5">{current.labelStandard}</span>
                          <span className="text-[var(--accent)] font-semibold">{project.standard}</span>
                        </div>
                        <div>
                          <span className="text-white/40 block mb-0.5">{current.labelSpecs}</span>
                          <span className="text-white block max-w-full truncate">{project.specs}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Architectural Numbering */}
                  <div className="flex-shrink-0">
                    <span className="font-mono text-4xl md:text-5xl font-light text-white/5 transition-colors duration-300 group-hover:text-[var(--accent)]/15">
                      {project.num}
                    </span>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ShopsGallery;
