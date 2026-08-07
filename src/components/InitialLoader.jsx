import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InitialLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const phrases = [
    "Analyzing project briefs...",
    "Verifying structural calculations...",
    "Optimizing materials & logistics...",
    "Rendering blueprints...",
    "NEXAT systems aligned."
  ];
  const [phrase, setPhrase] = useState(phrases[0]);

  useEffect(() => {
    // Prevent scrolling during load
    document.body.style.overflow = 'hidden';

    // Safety timeout: after 10 seconds, force completion
    const safetyTimeout = setTimeout(() => {
      console.warn("[Loader] Safety timeout reached. Forcing loader completion.");
      setProgress(100);
    }, 10000);

    // Mobile bypass check: if on mobile, skip preloader frames wait
    const isMobileDevice = window.innerWidth < 768;
    if (isMobileDevice) {
      setProgress(100);
      const timer = setTimeout(() => {
        document.body.style.overflow = '';
        onComplete();
      }, 500);
      return () => {
        clearTimeout(safetyTimeout);
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }

    const handleProgress = (e) => {
      const currentProgress = e.detail;
      setProgress(currentProgress);
      
      // Update loading phrases based on current load percentage
      if (currentProgress > 20 && currentProgress <= 45) {
        setPhrase(phrases[1]);
      } else if (currentProgress > 45 && currentProgress <= 70) {
        setPhrase(phrases[2]);
      } else if (currentProgress > 70 && currentProgress < 95) {
        setPhrase(phrases[3]);
      } else if (currentProgress >= 95) {
        setPhrase(phrases[4]);
      }

      if (currentProgress === 100) {
        clearTimeout(safetyTimeout);
        setTimeout(() => {
          document.body.style.overflow = '';
          onComplete();
        }, 500);
      }
    };

    window.addEventListener('hero-frames-progress', handleProgress);

    // If frames are already loaded (e.g. from hot-reload)
    if (window.heroFramesProgress !== undefined) {
      setProgress(window.heroFramesProgress);
      if (window.heroFramesProgress === 100) {
        clearTimeout(safetyTimeout);
        setTimeout(() => {
          document.body.style.overflow = '';
          onComplete();
        }, 500);
      }
    }

    return () => {
      clearTimeout(safetyTimeout);
      window.removeEventListener('hero-frames-progress', handleProgress);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0B1624] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#DA9A62]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-8">
        
        {/* Large Progress Number */}
        <h1 className="text-7xl md:text-8xl font-black text-white mb-2 tracking-tighter tabular-nums flex items-baseline select-none">
          {progress}
          <span className="text-[var(--accent)] text-2xl md:text-3xl ml-1 font-medium">%</span>
        </h1>
        
        {/* Minimal Progress Bar */}
        <div className="w-full h-[1.5px] bg-white/10 rounded-full overflow-hidden my-6 relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[var(--accent)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.1 }}
          />
        </div>
        
        {/* Animated Phrase Text */}
        <div className="h-6 flex items-center justify-center overflow-hidden w-full relative">
          <AnimatePresence mode="wait">
            <motion.p 
              key={phrase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--secondary-text)] text-center absolute font-mono"
            >
              {phrase}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default InitialLoader;
