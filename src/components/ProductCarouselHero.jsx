import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const ProductCarouselHero = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const captionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResizeCheck = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResizeCheck);
    return () => window.removeEventListener('resize', handleResizeCheck);
  }, []);

  useEffect(() => {
    // Only run sequence animation on desktop
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');

    // Initial canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const startFrame = 39; // ezgif-frame-040.jpg (0-indexed 39)
    const endFrame = 283;  // ezgif-frame-284.jpg (0-indexed 283)
    const frameCount = endFrame - startFrame + 1; // 245 frames for desktop

    const currentFrame = (index) => 
      `/nexath image seq/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`;

    const images = new Array(284);
    const sequence = { frame: startFrame };
    let loadedCount = 0;

    const render = () => {
      const currentFrameIndex = Math.round(sequence.frame);
      const img = images[currentFrameIndex];
      if (!img || !img.complete) {
        // Fallback: search for the closest loaded frame to prevent black flicker/jerkiness
        let closestImg = null;
        let minDiff = Infinity;
        for (let i = startFrame; i <= endFrame; i++) {
          if (images[i] && images[i].complete) {
            const diff = Math.abs(i - currentFrameIndex);
            if (diff < minDiff) {
              minDiff = diff;
              closestImg = images[i];
            }
          }
        }
        if (closestImg) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          drawScaledImage(closestImg, context, canvas);
        }
        return;
      }
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawScaledImage(img, context, canvas);
    };

    // Helper function to scale and center the image (like background-size: cover)
    const drawScaledImage = (img, ctx, canvas) => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.naturalWidth || img.width;
      const imgHeight = img.naturalHeight || img.height;

      const r = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
      const nw = imgWidth * r;
      const nh = imgHeight * r;
      const cx = (canvasWidth - nw) / 2;
      const cy = (canvasHeight - nh) / 2;

      ctx.drawImage(img, cx, cy, nw, nh);
    };

    const handleImageLoad = (index, img) => {
      images[index] = img;
      loadedCount++;
      const progressPercent = Math.min(Math.round((loadedCount / frameCount) * 100), 100);
      
      // Dispatch progress to InitialLoader
      window.heroFramesProgress = progressPercent;
      window.dispatchEvent(new CustomEvent('hero-frames-progress', { detail: progressPercent }));

      if (index === startFrame) {
        render();
      }
    };

    const handleImageError = () => {
      loadedCount++;
      const progressPercent = Math.min(Math.round((loadedCount / frameCount) * 100), 100);
      
      window.heroFramesProgress = progressPercent;
      window.dispatchEvent(new CustomEvent('hero-frames-progress', { detail: progressPercent }));
    };

    for (let i = startFrame; i <= endFrame; i++) {
      const img = new Image();
      img.onload = () => handleImageLoad(i, img);
      img.onerror = handleImageError;
      img.src = currentFrame(i);
    }

    // Scroll Trigger Timeline
    const ctx = gsap.context(() => {
      const scrollConfig = {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 0.5,
        pin: true,
      };

      gsap.to(sequence, {
        frame: endFrame,
        snap: "frame",
        ease: "none",
        scrollTrigger: scrollConfig,
        onUpdate: render,
      });

      // Fade out captions and indicators on scroll
      gsap.to([captionRef.current, ".scroll-indicator"], {
        opacity: 0,
        y: -30,
        pointerEvents: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "top+=250 top",
          scrub: true,
        }
      });
    }, containerRef);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const scrollToNextSection = (e) => {
    if (e) e.preventDefault();
    const nextSection = document.getElementById('about');
    if (nextSection) {
      const headerOffset = 80;
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const { lang } = useLanguage();

  // 1. Mobile Geometric Layout
  if (isMobile) {
    return (
      <section 
        id="hero" 
        className="w-full pt-24 pb-8 bg-[#0B1624] select-none relative overflow-hidden"
      >
        {/* Scroll down text in the padding space (left vertical margin) */}
        <motion.div 
          className={`absolute bottom-24 origin-bottom-left -rotate-90 text-[10px] uppercase tracking-[0.25em] text-white/45 font-bold select-none z-10 pointer-events-none ${lang === 'ar' ? 'right-6' : 'left-6'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {lang === 'ar' ? '← مرر للأسفل' : 'Scroll Down →'}
        </motion.div>

        {/* SVG Geometric Container */}
        <motion.div 
          className="w-full max-w-[300px] mx-auto p-4 z-0 aspect-[1/2] relative"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3, 
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          <svg 
            viewBox="0 0 400 800" 
            className="w-full h-full select-none" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="bigBoxClip">
                <path d="M 50 20 L 350 20 C 366 20, 380 34, 380 50 L 380 750 C 380 766, 366 780, 350 780 L 310 780 C 295 780, 272 772, 260 760 L 40 540 C 28 528, 20 505, 20 490 L 20 50 C 20 34, 34 20, 50 20 Z" />
              </clipPath>
            </defs>

            {/* Big Box Image Frame */}
            <g clipPath="url(#bigBoxClip)">
              <image 
                href="/headquarters.png" 
                x="20" 
                y="20" 
                width="360" 
                height="760" 
                preserveAspectRatio="xMidYMid slice" 
              />
            </g>

            {/* Triangle Button Section */}
            <g 
              onClick={scrollToNextSection} 
              onTouchStart={scrollToNextSection} 
              className="cursor-pointer group"
            >
              {/* Background rounded triangle */}
              <path 
                d="M 20 575 C 20 568, 26 576, 31 571 L 224 764 C 232 772, 228 780, 218 780 L 50 780 C 34 780, 20 766, 20 750 Z" 
                fill="#DA9A62" 
                className="transition-colors duration-300 group-hover:fill-[#E5A86A]"
              />
              
              {/* Downward Chevron Scroll Indicator */}
              <g transform="translate(80, 675)" className="transition-transform duration-300 group-hover:translate-y-1">
                <path 
                  d="M-8 -4 L0 4 L8 -4" 
                  stroke="#0B1624" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  fill="none" 
                />
              </g>

              {/* Scroll Down text layered inside the triangle */}
              <text 
                x="80" 
                y="718" 
                fill="#0B1624" 
                fontSize="16" 
                fontWeight="900" 
                fontFamily="'Darker Grotesque', sans-serif" 
                textAnchor="middle" 
                letterSpacing="0.08em"
                className="select-none pointer-events-none"
              >
                {lang === 'ar' ? 'مرر' : 'SCROLL'}
              </text>
              <text 
                x="80" 
                y="738" 
                fill="#0B1624" 
                fontSize="16" 
                fontWeight="900" 
                fontFamily="'Darker Grotesque', sans-serif" 
                textAnchor="middle" 
                letterSpacing="0.08em"
                className="select-none pointer-events-none"
              >
                {lang === 'ar' ? 'للأسفل' : 'DOWN'}
              </text>
            </g>
          </svg>
        </motion.div>
      </section>
    );
  }

  // 2. Desktop Scroll-Sequence Canvas Layout
  return (
    <section ref={containerRef} className="relative w-full h-screen bg-[#0B1624] overflow-hidden flex flex-col justify-between py-16 px-6 md:px-12 select-none">
      {/* Scroll-sequence Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full object-cover"></canvas>
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0B1624]/80 via-transparent to-[#0B1624]/30 pointer-events-none" />

      {/* Spacing spacer to push text down */}
      <div className="flex-1" />

      {/* Bottom Editorial Caption */}
      <div 
        ref={captionRef}
        className={`w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-baseline gap-4 border-t border-white/10 pt-8 z-10 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}
      >
        <h1 
          className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight"
          style={{ fontFamily: 'Darker Grotesque' }}
        >
          {lang === 'ar' ? 'التميز الهندسي.' : 'Engineering Excellence.'}
        </h1>
        
        <h2
          className="text-xl md:text-2xl text-[var(--accent)] font-semibold uppercase tracking-[0.12em]"
          style={{ fontFamily: 'Darker Grotesque' }}
        >
          {lang === 'ar' ? 'بناء المستقبل.' : 'Building the Future.'}
        </h2>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="scroll-indicator absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 select-none pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.25em] font-medium text-white/40 uppercase">
          {lang === 'ar' ? 'مرر للأسفل' : 'Scroll Down'}
        </span>
        <div className="w-[20px] h-[34px] border border-white/20 rounded-full flex justify-center pt-2 backdrop-blur-[1px]">
          <motion.div 
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.4, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-1 bg-[var(--accent)] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCarouselHero;
