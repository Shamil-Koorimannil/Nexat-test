import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Engagement {
  id: string;
  num: string;
  code: string;
  
  // English
  nameEn: string;
  categoryEn: string;
  descEn: string;
  regionEn: string;
  standardEn: string;
  specsEn: string;

  // Arabic
  nameAr: string;
  categoryAr: string;
  descAr: string;
  regionAr: string;
  standardAr: string;
  specsAr: string;
}

export const StructuralEngagements: React.FC = () => {
  const { lang } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  const engagements: Engagement[] = [
    {
      id: 'NXT-01-GBC',
      num: '01',
      code: 'NXT-01-GBC',
      nameEn: 'Golden Butterfly Construction',
      nameAr: 'شركة الفراشة الذهبية للمقاولات',
      categoryEn: 'Construction & Development',
      categoryAr: 'الإنشاءات والتطوير',
      descEn: 'A construction project involving on-site execution, structural works, and coordinated development, delivered with a focus on quality, precision, and reliable workmanship.',
      descAr: 'مشروع إنشائي يشمل التنفيذ الموقعي والأعمال الإنشائية والتطوير المنسق، تم تقديمه بتركيز عالٍ على الجودة والدقة والعمل الموثوق.',
      regionEn: 'Riyadh Province, KSA',
      regionAr: 'منطقة الرياض، المملكة العربية السعودية',
      standardEn: 'SASO Standard',
      standardAr: 'مواصفات الهيئة السعودية (SASO)',
      specsEn: 'C50/60 Reinforced Concrete Casting',
      specsAr: 'صب الخرسانة المسلحة قوة C50/60',
    },
    {
      id: 'NXT-02-AHC',
      num: '02',
      code: 'NXT-02-AHC',
      nameEn: 'Al Hufi Contracting Limited',
      nameAr: 'شركة الهوفي للمقاولات المحدودة',
      categoryEn: 'Contracting & Infrastructure',
      categoryAr: 'المقاولات والبنية التحتية',
      descEn: 'A contracting and construction project covering site development, infrastructure-related activities, and coordinated execution to meet project requirements and quality standards.',
      descAr: 'مشروع مقاولات وبناء يغطي تطوير الموقع والأنشطة المتعلقة بالبنية التحتية والتنفيذ المنسق لتلبية متطلبات المشروع ومعايير الجودة.',
      regionEn: 'Eastern Province, KSA',
      regionAr: 'المنطقة الشرقية، المملكة العربية السعودية',
      standardEn: 'Class-A Contracting Code',
      standardAr: 'تصنيف المقاولين درجة أولى (Class-A)',
      specsEn: 'High-Density Sub-Surface Infrastructure',
      specsAr: 'بنية تحتية تحت الأرض عالية الكثافة والمقاومة',
    },
    {
      id: 'NXT-03-SFS',
      num: '03',
      code: 'NXT-03-SFS',
      nameEn: 'Six Flags Saudi Arabia',
      nameAr: 'مشروع سفن فلاقز السعودية',
      categoryEn: 'Large-Scale Destination Development',
      categoryAr: 'تطوير الوجهات الترفيهية الكبرى',
      descEn: 'A major destination development project involving large-scale construction activities, infrastructure works, utility installations, and complex site coordination.',
      descAr: 'مشروع تطوير وجهة رئيسية يتضمن أنشطة إنشائية واسعة النطاق، وأعمال البنية التحتية، وتركيبات المرافق وتنسيق الموقع المعقد.',
      regionEn: 'Qiddiya (Riyadh), KSA',
      regionAr: 'القدية (الرياض)، المملكة العربية السعودية',
      standardEn: 'International Building Code (IBC)',
      standardAr: 'كود البناء العالمي (IBC)',
      specsEn: 'Heavy Structural Foundations & Anchors',
      specsAr: 'الأساسات والروابط الهيكلية الثقيلة ومقاومة الأحمال الديناميكية',
    },
    {
      id: 'NXT-04-HAC',
      num: '04',
      code: 'NXT-04-HAC',
      nameEn: 'Hassan Alam Construction',
      nameAr: 'شركة حسن علام للإنشاءات',
      categoryEn: 'Construction Execution',
      categoryAr: 'تنفيذ الإنشاءات',
      descEn: 'A construction project involving professional site operations, structural development, and coordinated project execution across key stages of the build.',
      descAr: 'مشروع إنشائي يتضمن عمليات موقعية احترافية، وتطوير هيكلي وتنسيق تنفيذ المشروع عبر المراحل الرئيسية للبناء.',
      regionEn: 'Central Region, KSA',
      regionAr: 'المنطقة الوسطى، المملكة العربية السعودية',
      standardEn: 'ASTM Structural Standards',
      standardAr: 'المعايير الأمريكية لاختبار المواد والتشييد (ASTM)',
      specsEn: 'Pre-cast Steel Geometry & Truss Framing',
      specsAr: 'تركيب هياكل الصلب مسبقة الصنع والجمالونات الإنشائية',
    },
    {
      id: 'NXT-05-ELA',
      num: '05',
      code: 'NXT-05-ELA',
      nameEn: 'Elegancia Arabia',
      nameAr: 'شركة إليغانسيا العربية للمقاولات',
      categoryEn: 'Construction & Development',
      categoryAr: 'المقاولات والتطوير الفاخر',
      descEn: 'A project focused on high-quality construction and development works, combining efficient execution, attention to detail, and adherence to project specifications.',
      descAr: 'مشروع يركز على أعمال البناء والتطوير عالية الجودة، ويجمع بين التنفيذ الفعال والاهتمام بالتفاصيل والالتزام التام بمواصفات المشروع.',
      regionEn: 'Western Province, KSA',
      regionAr: 'المنطقة الغربية، المملكة العربية السعودية',
      standardEn: 'Grade-1 Quality Specification',
      standardAr: 'مواصفات الجودة الدرجة الأولى المعيارية',
      specsEn: 'GFRC Facades & Premium Finishes',
      specsAr: 'واجهات خرسانية مسلحة بالألياف الزجاجية (GFRC) وتشطيبات متميزة',
    },
    {
      id: 'NXT-06-LDT',
      num: '06',
      code: 'NXT-06-LDT',
      nameEn: 'Ladtech International',
      nameAr: 'شركة لادتك العالمية',
      categoryEn: 'International Construction',
      categoryAr: 'الإنشاءات الدولية والإقليمية',
      descEn: 'An international construction project involving organized site execution, infrastructure and development activities, and professional coordination to support successful project delivery.',
      descAr: 'مشروع إنشائي دولي يتضمن تنفيذ موقعي منظم، وأنشطة بنية تحتية وتطوير، وتنسيق احترافي لدعم تسليم المشروع بنجاح.',
      regionEn: 'GCC & International',
      regionAr: 'دول مجلس التعاون الخليجي والساحة الدولية',
      standardEn: 'ISO 9001:2015 Execution',
      standardAr: 'نظام إدارة الجودة آيزو 9001:2015',
      specsEn: 'Multi-National Logistical Coordination',
      specsAr: 'تنسيق لوجستي متعدد الجنسيات وسلسلة إمداد عابرة للحدود',
    },
  ];

  const isRtl = lang === 'ar';

  return (
    <section 
      id="projects" 
      className="py-32 bg-[#0B1624] text-white px-6 md:px-12 relative overflow-hidden border-t border-white/5 select-none"
      style={{
        direction: isRtl ? 'rtl' : 'ltr'
      }}
    >
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#DA9A62 1px, transparent 1px)', 
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6 ${isRtl ? 'text-right' : 'text-left'}`}>
          <div>
            <p className="text-[#DA9A62] font-sans font-bold tracking-widest uppercase mb-3 text-xs md:text-sm">
              {isRtl ? 'سجل الإنجاز والخبرة' : 'Portfolio of Experience'}
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight uppercase leading-none font-normal">
              {isRtl ? (
                <>
                  التعاقدات <br />
                  <span className="text-[#DA9A62]">الإنشائية.</span>
                </>
              ) : (
                <>
                  Structural <br />
                  <span className="text-[#DA9A62]">Engagements.</span>
                </>
              )}
            </h2>
          </div>
          <p className={`text-sm md:text-base text-gray-400 max-w-md leading-relaxed font-secondary ${isRtl ? 'text-right' : 'text-left'}`}>
            {isRtl 
              ? 'استكشاف تاريخنا الحافل بالتنفيذ الموقعي الاحترافي، وتنسيق البنية التحتية، وتطوير المشاريع الكبرى عبر مجالات هيكلية رئيسية.'
              : 'Exploring our history of professional on-site execution, infrastructure coordination, and large-scale project development across key structural domains.'
            }
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-6 w-full">
          {engagements.map((item, index) => {
            const isActive = activeIdx === index;
            
            return (
              <div
                key={item.id}
                onClick={() => setActiveIdx(index)}
                className={`relative p-6 md:p-8 rounded-[1.5rem] border transition-all duration-500 cursor-pointer group flex flex-col justify-between ${
                  isActive 
                    ? 'bg-[#13263A]/45 border-[#DA9A62] shadow-2xl shadow-[#DA9A62]/3' 
                    : 'bg-transparent border-white/5 hover:border-white/15'
                }`}
                style={{ perspective: '1000px' }}
              >
                {/* Accent vertical line - aligns correctly in RTL */}
                <div 
                  className={`absolute top-0 bottom-0 w-[3px] bg-[#DA9A62] transition-transform duration-500 ${
                    isRtl ? 'right-0' : 'left-0'
                  }`}
                  style={{
                    transform: isActive ? 'scaleY(1)' : 'scaleY(0)',
                    transformOrigin: 'top'
                  }}
                />

                <div className={`flex items-start justify-between gap-6 ${isRtl ? 'text-right' : 'text-left'}`}>
                  
                  {/* Text Contents */}
                  <div className="space-y-3 flex-1">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#DA9A62] bg-[#0B1624]/60 px-3 py-1 rounded-full border border-white/5 inline-block">
                      {isRtl ? item.categoryAr : item.categoryEn}
                    </span>
                    
                    <h3 className="text-lg md:text-xl font-serif uppercase tracking-wider text-white transition-colors duration-300 group-hover:text-[#DA9A62]">
                      {isRtl ? item.nameAr : item.nameEn}
                    </h3>
                    
                    {/* Collapsible Panel */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isActive ? 'max-h-[400px] opacity-100 mt-4 pt-4 border-t border-white/5' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-secondary">
                        {isRtl ? item.descAr : item.descEn}
                      </p>
                      
                      {/* Specs Grid */}
                      <div className="mt-6 pt-4 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[10px] md:text-xs font-sans">
                        <div>
                          <span className="text-white/40 block mb-0.5">{isRtl ? 'رمز المشروع' : 'Project Code'}</span>
                          <span className="text-white font-mono">{item.code}</span>
                        </div>
                        <div>
                          <span className="text-white/40 block mb-0.5">{isRtl ? 'منطقة التنفيذ' : 'Execution Region'}</span>
                          <span className="text-white">
                            {isRtl ? item.regionAr : item.regionEn}
                          </span>
                        </div>
                        <div>
                          <span className="text-white/40 block mb-0.5">{isRtl ? 'المعيار المعتمد' : 'Target Standard'}</span>
                          <span className="text-[#DA9A62] font-bold">
                            {isRtl ? item.standardAr : item.standardEn}
                          </span>
                        </div>
                        <div>
                          <span className="text-white/40 block mb-0.5">{isRtl ? 'المواصفات الفنية' : 'Technical Specs'}</span>
                          <span className="text-white block max-w-full truncate">
                            {isRtl ? item.specsAr : item.specsEn}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Right Side Staggered Index Number */}
                  <div className="flex-shrink-0">
                    <span 
                      className={`font-sans text-3xl md:text-4xl lg:text-5xl font-light transition-all duration-500 block ${
                        isActive ? 'text-[#DA9A62]/35 scale-105 font-bold' : 'text-white/5 group-hover:text-[#DA9A62]/15'
                      }`}
                    >
                      {item.num}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
