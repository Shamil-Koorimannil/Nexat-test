import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 'zenith-tower',
    city: 'London, UK',
    category: 'Commercial Skyscraper',
    name: 'The Zenith Tower',
    tagline: 'A structural testament to vertical steel geometries and double-glazed acoustics.',
    area: '120,000 sq. m.',
    height: '320 meters',
    certification: 'BREEAM Outstanding',
    image: '/project_tower.png',
  },
  {
    id: 'aurelia-villa',
    city: 'Beverly Hills, USA',
    category: 'Luxury Residential',
    name: 'Aurelia Estate',
    tagline: 'Seamless integration of exposed board-formed concrete, cantilevered steel, and local quartzites.',
    area: '2,400 sq. m.',
    height: '3 Levels',
    certification: 'Net Zero Carbon',
    image: '/project_villa.png',
  },
  {
    id: 'meridian-civic',
    city: 'Tokyo, Japan',
    category: 'Public Infrastructure',
    name: 'Meridian Center',
    tagline: 'Organic steel trusses supporting massive high-span structural glass geometries.',
    area: '45,000 sq. m.',
    height: '85m Columnless Span',
    certification: 'LEED Platinum',
    image: '/project_civic.png',
  }
];

const ShopsGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="py-32 bg-[#0B1624] text-white px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#DA9A62]/3 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#DA9A62]/3 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[var(--accent)] font-semibold tracking-widest uppercase mb-3 text-sm"
            >
              Signature Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none"
            >
              Featured <br /><span className="text-[var(--accent)]">Architectures.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--secondary-text)] max-w-md leading-relaxed"
          >
            Explore our curated construction portfolio, displaying engineering rigor and architectural luxury across major metropolitan hubs.
          </motion.p>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left: Active Project Image Showcase */}
          <div className="lg:col-span-7 relative h-[350px] md:h-[500px] rounded-[1.5rem] overflow-hidden shadow-2xl bg-[#13263A]/20 border border-white/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={activeProject.image}
                  alt={activeProject.name}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1624] via-[#0B1624]/20 to-transparent opacity-85" />
              </motion.div>
            </AnimatePresence>

            {/* Quick Status Badge */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-[var(--accent)] text-[#0B1624] font-bold px-4 py-2 rounded-full shadow-lg text-xs uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0B1624] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0B1624]"></span>
              </span>
              Completed Project
            </div>
          </div>

          {/* Right: Active Project Specs & Metrics */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#13263A] text-white rounded-[1.5rem] p-8 md:p-12 relative overflow-hidden shadow-xl border border-white/5">
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#DA9A62]/3 rounded-full blur-[50px] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col h-full justify-between gap-8 relative z-10"
              >
                <div>
                  <span className="text-xs font-semibold text-[var(--accent)] bg-[#0B1624] px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block mb-6 border border-white/5">
                    {activeProject.category}
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
                    {activeProject.name}
                  </h3>
                  
                  <p className="text-lg text-[var(--secondary-text)] italic mb-6 leading-relaxed">
                    "{activeProject.tagline}"
                  </p>
                  
                  <div className="space-y-4 border-t border-white/5 pt-6 text-base text-[var(--secondary-text)]">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="font-medium text-white/55">Location:</span>
                      <span className="font-semibold text-white">{activeProject.city}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="font-medium text-white/55">Total Area:</span>
                      <span className="font-semibold text-white">{activeProject.area}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="font-medium text-white/55">Key Metric:</span>
                      <span className="font-semibold text-white">{activeProject.height}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="font-medium text-white/55">Certification:</span>
                      <span className="font-semibold text-[var(--accent)]">{activeProject.certification}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="#contact"
                    onClick={() => setIsAutoPlay(false)}
                    className="inline-flex items-center justify-between w-full sm:w-auto bg-[#0B1624] text-white border border-white/10 hover:border-[var(--accent)] px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg group text-base uppercase tracking-wider"
                  >
                    <span>Request Case Study</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300 ml-4 text-[var(--accent)]">→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Project Selector Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.button
                key={project.id}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`relative h-28 rounded-xl overflow-hidden text-left transition-all duration-300 border ${
                  isActive ? 'border-[var(--accent)] shadow-lg shadow-[#DA9A62]/10 scale-[1.01]' : 'border-white/5 hover:border-white/20 opacity-70 hover:opacity-100'
                }`}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isActive ? 'from-[#0B1624]/95 via-[#0B1624]/80' : 'from-black/90 via-black/50'} transition-all`} />
                
                <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col justify-end">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[var(--accent)] mb-0.5">
                    {project.city}
                  </span>
                  <span className="text-sm font-black leading-tight uppercase tracking-tight text-white">
                    {project.name}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopsGallery;
