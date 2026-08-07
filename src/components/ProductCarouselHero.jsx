import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

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

    if (isMobile) {
      // Mobile: Load only the single starting frame (ezgif-frame-040.jpg)
      const img = new Image();
      img.onload = () => {
        images[startFrame] = img;
        render();
        window.heroFramesProgress = 100;
        window.dispatchEvent(new CustomEvent('hero-frames-progress', { detail: 100 }));
      };
      img.onerror = () => {
        window.heroFramesProgress = 100;
        window.dispatchEvent(new CustomEvent('hero-frames-progress', { detail: 100 }));
      };
      img.src = currentFrame(startFrame);
    } else {
      // Desktop: Preload all frames from index 39 (ezgif-frame-040) to index 283 (ezgif-frame-284)
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
    }

    // Scroll Trigger Timeline
    const ctx = gsap.context(() => {
      if (isMobile) return; // Skip scroll animation and pinning on mobile devices

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

      // Fade out captions and indicators on scroll (only on desktop where pinned)
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

  if (isMobile) {
    return null;
  }

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
        className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-baseline gap-4 border-t border-white/10 pt-8 z-10"
      >
        <h1 
          className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight"
          style={{ fontFamily: 'Darker Grotesque' }}
        >
          Engineering Excellence.
        </h1>
        
        <h2
          className="text-xl md:text-2xl text-[var(--accent)] font-semibold uppercase tracking-[0.12em]"
          style={{ fontFamily: 'Darker Grotesque' }}
        >
          Building the Future.
        </h2>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="scroll-indicator absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 select-none pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.25em] font-medium text-white/40 uppercase">
          Scroll Down
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
