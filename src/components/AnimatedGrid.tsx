import React, { useEffect, useRef, useState } from 'react';
import { StatsBlock } from './StatsBlock';

interface GridItem {
  id: number;
  image: string;
  title: string;
  sizeClass: string;
}

export const AnimatedGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const items: GridItem[] = [
    {
      id: 1,
      image: '/assets/653941273-roberto-cavalli-3.webp',
      title: 'Cavalli Residences',
      sizeClass: 'masonry-item-tall',
    },
    {
      id: 2,
      image: '/assets/653941242-mandarin-oriental-1_1.webp',
      title: 'Mandarin Oriental Maldives',
      sizeClass: 'masonry-item-wide',
    },
    {
      id: 3,
      image: '/assets/647994200-4x3-gallery-9.webp',
      title: 'Safa Two Tower',
      sizeClass: '',
    },
    {
      id: 4,
      image: '/assets/CHELSEA.jpg',
      title: 'Chelsea Residences',
      sizeClass: 'masonry-item-tall',
    },
    {
      id: 5,
      image: '/assets/Paramount_1.webp',
      title: 'Paramount Towers',
      sizeClass: '',
    },
    {
      id: 6,
      image: '/assets/653941279-trump-1_1.webp',
      title: 'The Trump Estates',
      sizeClass: 'masonry-item-wide',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      
      // We want to track progress from when the top of section touches the top of viewport (rect.top <= 0)
      // to when the bottom of section touches bottom of viewport (rect.bottom >= windowHeight)
      const scrollRange = totalHeight - windowHeight;
      const scrolled = -rect.top;
      
      if (scrollRange > 0) {
        const p = Math.min(Math.max(scrolled / scrollRange, 0), 1);
        setScrollProgress(p);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Calculate clip path radius (starting at 60px and growing to cover the viewport width/height)
  // At progress 0, circle radius is 60px. At progress 1, it should cover window (e.g. 150vmax)
  const radius = 60 + scrollProgress * 1500;
  const clipPathStyle = {
    clipPath: `circle(${radius}px at 50% 50%)`,
    WebkitClipPath: `circle(${radius}px at 50% 50%)`,
  };

  // Central circular logo opacity (fades out as clip path grows to cover the screen)
  const logoOpacity = Math.max(1 - scrollProgress * 3, 0);
  const logoScale = 1 + scrollProgress * 1.5;

  return (
    <div id="animated-grid" ref={containerRef} className="scroll-mask-container bg-white" style={{ height: '220vh' }}>
      <div className="scroll-mask-sticky">
        {/* Layer 1: Masonry Grid (Slide A) */}
        <div className="absolute inset-0 w-full h-full bg-white flex flex-col justify-center py-20 px-m z-10">
          <div className="container mx-auto max-w-[1200px] h-full flex flex-col justify-center">
            {/* Header Title for Grid */}
            <div className="text-center mb-10">
              <span className="text-gold text-xs font-sans font-semibold uppercase tracking-[0.25em] mb-s block">
                Portfolio Showcase
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-black uppercase tracking-wider font-normal">
                Curated Luxury Living
              </h2>
            </div>
            
            {/* Masonry Grid */}
            <div className="masonry-grid overflow-y-auto max-h-[70vh] pr-xs">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`relative rounded-2xl overflow-hidden group shadow-sm bg-gray-100 ${item.sizeClass}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-m z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    <span className="text-xs font-sans tracking-wider uppercase font-semibold text-gold">Featured Project</span>
                    <h4 className="text-base font-serif uppercase tracking-wider mt-2xs m-0">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Central Circular Logo Overlay that visualizes the mask trigger */}
          {logoOpacity > 0 && (
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none flex items-center justify-center"
              style={{
                width: '180px',
                height: '180px',
                opacity: logoOpacity,
                transform: `translate(-50%, -50%) scale(${logoScale})`,
                transition: 'opacity 0.2s ease-out',
              }}
            >
              <div className="w-[140px] h-[140px] rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center p-s relative">
                {/* Glowing ring */}
                <div className="absolute inset-0 rounded-full border border-gold/40 animate-ping opacity-75"></div>
                <img
                  src="/assets/damac-gold.svg"
                  alt="Emblem"
                  className="w-auto h-[48px] object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Layer 2: Stats Block (Slide B - Clipped Overlay) */}
        <div
          className="scroll-mask-reveal"
          style={{
            ...clipPathStyle,
            zIndex: 25,
            transition: 'clip-path 0.1s ease-out, -webkit-clip-path 0.1s ease-out',
          }}
        >
          <StatsBlock />
        </div>
      </div>
    </div>
  );
};
