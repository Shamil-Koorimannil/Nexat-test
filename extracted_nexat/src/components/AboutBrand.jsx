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
      ceoMessage: 'في نكسات للمقاولات (NEXAT Construction), نؤمن بأن كل مشروع ناجح يبدأ بالثقة، والتميز التقني، والتنفيذ المنضبط. يمتد التزامنا إلى ما هو أبعد من تشييد المباني - فنحن نقدم قيمة طويلة الأجل من خلال تحويل الرؤى الطموحة إلى أصول مستدامة تخدم المجتمعات وتساهم في النمو الاقتصادي. ومن خلال الخبرة الهندسية والابتكار ومعايير الجودة الصارمة، نتشارك مع عملائنا لتنفيذ المشاريع بأمان وكفاءة ووفقاً للجدول الزمني. ومع استمرار المملكة العربية السعودية في تحولها التاريخي المذهل في ظل رؤية 2030، تفخر نكسات بلعب دور فعال في تطوير بنية تحتية عالمية المستوى ومشاريع أيقونية ستحدد مستقبل المملكة. ولا يُقاس نجاحنا بالهياكل التي نبنيها فحسب، بل بالثقة التي نكتسبها من كل عميل.',
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
    <section id="about" className="py-24 md:py-36 bg-[var(--background)] text-[var(--primary-text)] px-6 md:px-12 relative overflow-hidden border-t border-[var(--divider)]">
      {/* Architectural blueprint grid overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] architectural-grid" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cinematic Dual Column Layout with Pinned Visual Panel */}
        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-start ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Left Column - CEO Message & Overview (Scrolling Container) */}
          <div className={`w-full lg:w-1/2 flex flex-col justify-center ${isRtl ? 'text-right' : 'text-left'}`}>
            
            {/* Main Title */}
            <div className="mb-8 md:mb-12">
              <span className="text-[var(--accent)] text-xs md:text-sm tracking-[0.2em] font-bold uppercase block mb-3">
                {lang === 'en' ? 'ABOUT THE BRAND' : 'عن الشركة'}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none text-[var(--primary-text)]">
                {current.title}
              </h2>
            </div>
            
            {/* CEO Message */}
            <div className="mb-12 border-l-2 border-[var(--accent)] pl-6 py-2 italic text-[var(--secondary-text)] relative">
              <h3 className="text-xl md:text-2xl font-bold uppercase text-[var(--primary-text)] not-italic mb-3">
                {current.ceoTitle}
              </h3>
              <p className="text-base md:text-lg leading-relaxed font-serif">
                "{current.ceoMessage}"
              </p>
            </div>
            
            {/* Company Overview */}
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold uppercase text-[var(--primary-text)] mb-3">
                {current.overviewTitle}
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[var(--secondary-text)] font-sans">
                {current.overviewMessage}
              </p>
            </div>

          </div>

          {/* Right Column - Pinned Visual Panel (Sticky Container on Desktop) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 h-auto lg:h-[calc(100vh-200px)] flex items-center justify-center">
            <motion.div 
              initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
              whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[320px] md:h-[450px] lg:h-full rounded-3xl overflow-hidden border border-[var(--divider)] shadow-lg group"
            >
              <motion.img 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                src="/project_tower.png" 
                alt="NEXAT Construction Site" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/30 to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>

        {/* Mission, Vision, Values - Structured 3-column row below */}
        <div className="mt-24 md:mt-32 pt-16 border-t border-[var(--divider)] grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mission Card */}
          <div className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--divider)] flex flex-col justify-between hover:border-[var(--accent)]/40 transition-colors duration-300">
            <div>
              <h3 className={`text-xl font-bold mb-4 text-[var(--accent)] uppercase tracking-wider ${isRtl ? 'text-right' : 'text-left'}`}>
                {current.missionTitle}
              </h3>
              <p className={`text-base text-[var(--secondary-text)] leading-relaxed ${isRtl ? 'text-right' : 'text-left'} font-sans`}>
                {current.missionText}
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--divider)] flex flex-col justify-between hover:border-[var(--accent)]/40 transition-colors duration-300">
            <div>
              <h3 className={`text-xl font-bold mb-4 text-[var(--accent)] uppercase tracking-wider ${isRtl ? 'text-right' : 'text-left'}`}>
                {current.visionTitle}
              </h3>
              <p className={`text-base text-[var(--secondary-text)] leading-relaxed ${isRtl ? 'text-right' : 'text-left'} font-sans`}>
                {current.visionText}
              </p>
            </div>
          </div>

          {/* Values Card */}
          <div className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--divider)] flex flex-col justify-between hover:border-[var(--accent)]/40 transition-colors duration-300">
            <div>
              <h3 className={`text-xl font-bold mb-4 text-[var(--accent)] uppercase tracking-wider ${isRtl ? 'text-right' : 'text-left'}`}>
                {current.valuesTitle}
              </h3>
              <p className={`text-base text-[var(--secondary-text)] leading-relaxed ${isRtl ? 'text-right' : 'text-left'} font-sans`}>
                {current.valuesText}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutBrand;
