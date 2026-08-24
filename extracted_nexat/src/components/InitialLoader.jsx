import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const InitialLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const { lang, isRtl } = useLanguage();

  const translations = {
    en: [
      "Analyzing project briefs...",
      "Verifying structural calculations...",
      "Optimizing materials & logistics...",
      "Rendering blueprints...",
      "NEXAT systems aligned."
    ],
    ar: [
      "تحليل ملخصات المشاريع...",
      "التحقق من الحسابات الإنشائية...",
      "تحسين المواد والخدمات اللوجستية...",
      "رسم المخططات المعمارية...",
      "تم تهيئة أنظمة نكسات بنجاح."
    ]
  };

  const phrases = translations[lang];
  const [phrase, setPhrase] = useState(phrases[0]);

  // Keep phrase updated if language changes (though usually language is loaded before preloader finishes)
  useEffect(() => {
    // Determine which phrase to show based on current progress
    if (progress <= 20) {
      setPhrase(phrases[0]);
    } else if (progress > 20 && progress <= 45) {
      setPhrase(phrases[1]);
    } else if (progress > 45 && progress <= 70) {
      setPhrase(phrases[2]);
    } else if (progress > 70 && progress < 95) {
      setPhrase(phrases[3]);
    } else if (progress >= 95) {
      setPhrase(phrases[4]);
    }
  }, [progress, phrases]);

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
        <h1 className={`text-7xl md:text-8xl font-black text-white mb-2 tracking-tighter tabular-nums flex items-baseline select-none ${isRtl ? 'flex-row-reverse' : ''}`}>
          {progress}
          <span className={`text-[var(--accent)] text-2xl md:text-3xl font-medium ${isRtl ? 'mr-1' : 'ml-1'}`}>%</span>
        </h1>
        
        {/* Minimal Progress Bar */}
        <div className="w-full h-[1.5px] bg-white/10 rounded-full overflow-hidden my-6 relative">
          <motion.div 
            className={`absolute top-0 h-full bg-[var(--accent)] ${isRtl ? 'right-0' : 'left-0'}`}
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
