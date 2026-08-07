import React from 'react';
import { motion } from 'framer-motion';

const AboutBrand = () => {
  return (
    <section id="about" className="py-32 bg-[#0B1624] text-white px-6 md:px-12 relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#DA9A62]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-8 tracking-tight leading-none"
          >
            NEXAT Construction
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--secondary-text)] mb-6 leading-relaxed"
          >
            NEXAT is a leading global construction and engineering firm dedicated to transforming architectural visions into structural realities. With an unwavering commitment to precision, sustainable materials, and structural integrity, we shape the skylines of tomorrow.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-[var(--secondary-text)] mb-6 leading-relaxed"
          >
            Operating at the intersection of architectural luxury and advanced structural engineering, our multidisciplinary team coordinates project lifecycles from concept planning through final interior fit-outs. We maintain strict control over schedule, safety, and craftsmanship at every stage.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-[var(--secondary-text)] leading-relaxed"
          >
            Our portfolio ranges from high-density commercial developments and sustainable public infrastructure to bespoke luxury residential estates. In every endeavor, NEXAT builds confidence.
          </motion.p>
        </div>

        {/* Right Column: Mission, Vision, Values */}
        <div className="space-y-12 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-[1.5rem] bg-[#13263A]/40 border border-white/5"
          >
            <h3 className="text-2xl font-bold mb-3 text-white uppercase tracking-tight">Mission</h3>
            <p className="text-base text-[var(--secondary-text)] leading-relaxed border-l-2 border-[var(--accent)] pl-4">
              To deliver structures of exceptional architectural caliber by integrating rigorous engineering practices, sustainable build methodologies, and premium craftsmanship, ensuring long-term value for our clients and communities.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }}
            className="p-6 md:p-8 rounded-[1.5rem] bg-[#13263A]/40 border border-white/5"
          >
            <h3 className="text-2xl font-bold mb-3 text-white uppercase tracking-tight">Vision</h3>
            <p className="text-base text-[var(--secondary-text)] leading-relaxed border-l-2 border-[var(--accent)] pl-4">
              To redefine global construction standards through structural innovation, setting new benchmarks in luxury design, eco-conscious engineering, and project delivery excellence.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="p-6 md:p-8 rounded-[1.5rem] bg-[#13263A]/40 border border-white/5"
          >
            <h3 className="text-2xl font-bold mb-3 text-white uppercase tracking-tight">Value Creed</h3>
            <p className="text-base text-[var(--secondary-text)] leading-relaxed border-l-2 border-[var(--accent)] pl-4">
              Confidence, precision, and architectural luxury. We believe in building with structural longevity, aesthetic clarity, and open client partnership.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
