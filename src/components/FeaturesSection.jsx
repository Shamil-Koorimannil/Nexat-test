import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      title: "Precision Engineering",
      desc: "Millimeter-level tolerances in structural load calculations. We run advanced computational modeling to ensure long-term structural resilience.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    },
    {
      title: "Luxury Architecture",
      desc: "Curation of premium imported finishes, custom woodwork, and spatial geometries that harmonize with structural framework details.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      title: "Ecological Integration",
      desc: "LEED-aligned, climate-responsive insulation, carbon-neutral materials, solar dynamics, and thermal efficiency designed directly into the build.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22h20" />
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      title: "Operational Certainty",
      desc: "We deliver comprehensive lifecycle documentation, schedule controls, safety protocols, and post-occupancy structural reviews.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-nexat" className="relative w-full py-32 bg-[#0B1624] px-6 md:px-12 overflow-hidden text-white border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-[#DA9A62]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-96 h-96 bg-[#DA9A62]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--accent)] text-sm tracking-[0.2em] font-semibold uppercase mb-3"
          >
            The NEXAT Standard
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight leading-none"
          >
            Why NEXAT works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--secondary-text)] mt-4 leading-relaxed"
          >
            Unifying rigorous engineering safety parameters with premium architectural styling for projects that endure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col p-8 rounded-[1.5rem] bg-[#13263A]/40 border border-white/5 hover:border-[var(--accent)]/30 hover:bg-[#13263A]/60 transition-all duration-300 group cursor-pointer"
            >
              {/* Feature Icon frame */}
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 mb-6 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[#0B1624] transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-[var(--secondary-text)] leading-relaxed text-base font-sans">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
