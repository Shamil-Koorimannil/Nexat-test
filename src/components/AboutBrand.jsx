import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const AboutBrand = () => {
  const { lang, isRtl } = useLanguage();

  const content = {
    en: {
      title: 'NEXAT Construction',
      ceoTitle: 'Message from the CEO',
      ceoMessage: 'At NEXAT Construction, we believe every successful project begins with trust, technical excellence, and disciplined execution. Our commitment extends beyond constructing buildings—we deliver long-term value by transforming ambitious visions into sustainable assets that serve communities and contribute to economic growth. Through engineering expertise, innovation, and uncompromising quality standards, we partner with clients to execute projects safely, efficiently, and on schedule. As Saudi Arabia continues its remarkable transformation under Vision 2030, NEXAT is proud to play an active role in developing world-class infrastructure and iconic developments that will define the Kingdom\'s future. Our success is measured not only by the structures we build, but by the confidence we earn from every client.',
      overviewTitle: 'Company Overview',
      overviewMessage: 'NEXAT Construction Co. is a Saudi-owned multidisciplinary engineering, construction, and real estate development company providing comprehensive EPC, Design & Build, and General Contracting solutions across Saudi Arabia and the GCC.',
      missionTitle: 'Mission',
      missionText: 'To provide integrated engineering and construction solutions that create lasting value through technical expertise, operational excellence, safety leadership, and continuous innovation.',
      visionTitle: 'Vision',
      visionText: 'To become the Middle East\'s most trusted engineering and construction partner, recognized for delivering landmark projects through innovation, quality, and sustainable excellence.',
      valuesTitle: 'Core Values',
      valuesText: 'Integrity, Safety First, Engineering Excellence, Client Partnership, Accountability, Sustainability, Innovation, Continuous Improvement, Respect, Quality Without Compromise.'
    },
    ar: {
      title: 'نكسات للمقاولات',
      ceoTitle: 'رسالة الرئيس التنفيذي',
      ceoMessage: 'في نكسات للمقاولات (NEXAT Construction)، نؤمن بأن كل مشروع ناجح يبدأ بالثقة، والتميز التقني، والتنفيذ المنضبط. يمتد التزامنا إلى ما هو أبعد من تشييد المباني - فنحن نقدم قيمة طويلة الأجل من خلال تحويل الرؤى الطموحة إلى أصول مستدامة تخدم المجتمعات وتساهم في النمو الاقتصادي. ومن خلال الخبرة الهندسية والابتكار ومعايير الجودة الصارمة، نتشارك مع عملائنا لتنفيذ المشاريع بأمان وكفاءة ووفقاً للجدول الزمني. ومع استمرار المملكة العربية السعودية في تحولها التاريخي المذهل في ظل رؤية 2030، تفخر نكسات بلعب دور فعال في تطوير بنية تحتية عالمية المستوى ومشاريع أيقونية ستحدد مستقبل المملكة. ولا يُقاس نجاحنا بالهياكل التي نبنيها فحسب، بل بالثقة التي نكتسبها من كل عميل.',
      overviewTitle: 'نبذة عن الشركة',
      overviewMessage: 'شركة نكسات للمقاولات هي شركة سعودية متعددة التخصصات في مجالات الهندسة والمقاولات والتطوير العقاري، وتقدم حلولاً متكاملة في الهندسة والمشتريات والبناء (EPC)، والتصميم والبناء، والمقاولات العامة في جميع أنحاء المملكة العربية السعودية ودول مجلس التعاون الخليجي.',
      missionTitle: 'رسالتنا',
      missionText: 'تقديم حلول هندسية وإنشائية متكاملة تخلق قيمة دائمة من خلال الخبرة الفنية، والتميز التشغيلي، والريادة في السلامة، والابتكار المستمر.',
      visionTitle: 'رؤيتنا',
      visionText: 'أن نصبح شريك الهندسة والمقاولات الأكثر موثوقية في الشرق الأوسط، والمعترف بنا في تقديم مشاريع معالم بارزة من خلال الابتكار والجودة والتميز المستدام.',
      valuesTitle: 'قيمنا الأساسية',
      valuesText: 'النزاهة، السلامة أولاً، التميز الهندي، الشراكة مع العملاء، المسؤولية، الاستدامة، الابتكار، التطوير المستمر، الاحترام، والجودة دون مساومة.'
    }
  };

  const current = content[lang];

  return (
    <section id="about" className="py-32 bg-[#0B1624] text-white px-6 md:px-12 relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#DA9A62]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Column - CEO Message & Overview */}
        <div className={`flex flex-col justify-center ${isRtl ? 'text-right' : 'text-left'}`}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-8 tracking-tight leading-none text-[var(--accent)]"
          >
            {current.title}
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold uppercase mb-4 text-white"
          >
            {current.ceoTitle}
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="text-base text-[var(--secondary-text)] mb-8 leading-relaxed italic"
          >
            "{current.ceoMessage}"
          </motion.p>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold uppercase mb-4 text-white"
          >
            {current.overviewTitle}
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="text-base text-[var(--secondary-text)] leading-relaxed"
          >
            {current.overviewMessage}
          </motion.p>
        </div>

        {/* Right Column: Mission, Vision, Values */}
        <div className="space-y-12 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? -30 : 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-[1.5rem] bg-[#13263A]/40 border border-white/5"
          >
            <h3 className="text-2xl font-bold mb-3 text-white uppercase tracking-tight">{current.missionTitle}</h3>
            <p className={`text-base text-[var(--secondary-text)] leading-relaxed border-[var(--accent)] pl-4 ${isRtl ? 'border-r-2 border-l-0 pr-4 pl-0' : 'border-l-2'}`}>
              {current.missionText}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: isRtl ? -30 : 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }}
            className="p-6 md:p-8 rounded-[1.5rem] bg-[#13263A]/40 border border-white/5"
          >
            <h3 className="text-2xl font-bold mb-3 text-white uppercase tracking-tight">{current.visionTitle}</h3>
            <p className={`text-base text-[var(--secondary-text)] leading-relaxed border-[var(--accent)] pl-4 ${isRtl ? 'border-r-2 border-l-0 pr-4 pl-0' : 'border-l-2'}`}>
              {current.visionText}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: isRtl ? -30 : 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="p-6 md:p-8 rounded-[1.5rem] bg-[#13263A]/40 border border-white/5"
          >
            <h3 className="text-2xl font-bold mb-3 text-white uppercase tracking-tight">{current.valuesTitle}</h3>
            <p className={`text-base text-[var(--secondary-text)] leading-relaxed border-[var(--accent)] pl-4 ${isRtl ? 'border-r-2 border-l-0 pr-4 pl-0' : 'border-l-2'}`}>
              {current.valuesText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
