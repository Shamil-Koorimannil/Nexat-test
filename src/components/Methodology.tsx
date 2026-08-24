import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Step {
  num: string;
  nameKey: string;
  descKey: string;
  substeps: string[];
}

export const Methodology: React.FC = () => {
  const { t } = useLanguage();

  const steps: Step[] = [
    {
      num: '01',
      nameKey: 'methodology.step1Name',
      descKey: 'methodology.step1Desc',
      substeps: ['Client Consultation', 'Feasibility Study'],
    },
    {
      num: '02',
      nameKey: 'methodology.step2Name',
      descKey: 'methodology.step2Desc',
      substeps: ['Engineering & Design', 'Value Engineering'],
    },
    {
      num: '03',
      nameKey: 'methodology.step3Name',
      descKey: 'methodology.step3Desc',
      substeps: ['Procurement', 'Construction', 'QA/QC Check'],
    },
    {
      num: '04',
      nameKey: 'methodology.step4Name',
      descKey: 'methodology.step4Desc',
      substeps: ['Testing & Commission', 'Asset Handover'],
    },
  ];

  return (
    <section id="methodology-section" className="bg-white py-24 text-black px-m border-b border-gray-100">
      <div className="container mx-auto max-w-[1100px] px-s">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-[750px] mx-auto">
          <span className="text-gold text-xs font-sans font-bold uppercase tracking-[0.25em] mb-s block">
            {t('methodology.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-black uppercase tracking-wider font-normal mb-m">
            {t('methodology.title')}
          </h2>
          <div className="w-[50px] h-[1px] bg-black/20 mx-auto mb-m"></div>
          <p className="text-gray-500 font-secondary text-sm leading-relaxed">
            {t('methodology.desc')}
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-xl">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col items-start text-start p-m rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white relative group"
            >
              {/* Step number on top right/left */}
              <span className="text-4xl md:text-5xl font-serif text-gold/30 font-bold mb-xs block">
                {step.num}
              </span>
              
              {/* Step Title */}
              <h3 className="text-lg font-serif font-bold uppercase tracking-wider text-black mb-2xs">
                {t(step.nameKey)}
              </h3>
              
              {/* Tiny divider line */}
              <div className="w-[30px] h-[2px] bg-gold mb-s"></div>

              {/* Sub-steps tags */}
              <div className="flex flex-wrap gap-2xs mb-m">
                {step.substeps.map((sub, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-sans font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-2xs py-[2px] rounded border border-gray-200/50"
                  >
                    {sub}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-600 font-secondary text-xs leading-relaxed m-0 mt-auto">
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
