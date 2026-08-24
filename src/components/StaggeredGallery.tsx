import React, { useState, useEffect, useRef } from 'react';

export const StaggeredGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Animation state
  const [scrollProgress, setScrollProgress] = useState(0.5);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  // Smooth scroll lerping refs
  const targetProgress = useRef(0.5);
  const currentProgress = useRef(0.5);
  const requestRef = useRef<number | null>(null);

  // Staggered column image paths
  const col1 = [
    '/assets/project_tower.png',
    '/assets/project_villa.png',
    '/assets/headquarters.png'
  ];

  const col2 = [
    '/assets/project_civic.png',
    '/assets/six_flags_showcase.png',
    '/assets/gallery_1.png'
  ];

  const col3 = [
    '/assets/gallery_2.png',
    '/assets/gallery_3.png',
    '/assets/gallery_4.png'
  ];

  const col4 = [
    '/assets/gallery_5.png',
    '/assets/gallery_6.png'
  ];

  // Combine columns for mobile view
  const row1Mobile = [...col1, ...col2];
  const row2Mobile = [...col3, ...col4];

  // Smooth scroll logic with requestAnimationFrame
  const animate = () => {
    // Lerping: current = current + (target - current) * 0.1
    currentProgress.current += (targetProgress.current - currentProgress.current) * 0.1;
    setScrollProgress(currentProgress.current);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Calculate scroll progress (0 when section enters, 1 when section exits)
      const progress = (viewHeight - rect.top) / (viewHeight + rect.height);
      targetProgress.current = Math.max(0, Math.min(1, progress));
    };

    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    window.addEventListener('resize', checkScreenSize);
    
    handleScroll();
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Parallax shifts calculation
  const getColStyle = (index: number) => {
    if (isMobile) return {}; // Disable scroll parallax on mobile

    let baseOffset = 0;
    let speed = 0;

    switch (index) {
      case 0:
        baseOffset = 0;
        speed = -180;
        break;
      case 1:
        baseOffset = 50;
        speed = -60;
        break;
      case 2:
        baseOffset = -30;
        speed = -220;
        break;
      case 3:
        baseOffset = 70;
        speed = -100;
        break;
      default:
        break;
    }

    // On tablet, scale speeds down to 30% to prevent layout breaks
    const actualSpeed = isTablet ? speed * 0.3 : speed;
    const actualOffset = isTablet ? baseOffset * 0.3 : baseOffset;
    
    // Map vertical scroll progress to translation Y
    const translateY = (scrollProgress - 0.5) * actualSpeed + actualOffset;

    return {
      transform: `translate3d(0, ${translateY}px, 0)`,
      willChange: 'transform',
    };
  };

  // Mobile horizontal offsets based on vertical scroll
  const mobileRow1Translation = (scrollProgress - 0.5) * -160;
  const mobileRow2Translation = -60 + (scrollProgress - 0.5) * 140;

  return (
    <section 
      ref={sectionRef} 
      id="staggered-gallery-section" 
      className="bg-white py-16 text-black px-m overflow-hidden border-b border-gray-100 relative"
    >
      <div className="container mx-auto">
        
        {isMobile ? (
          /* Mobile: 2 horizontal rows with different speeds */
          <div className="flex flex-col gap-6 py-6 w-full overflow-hidden">
            {/* Row 1 */}
            <div className="w-full overflow-hidden">
              <div 
                className="flex gap-4 transition-transform duration-100 ease-out will-change-transform"
                style={{
                  transform: `translate3d(${mobileRow1Translation}px, 0, 0)`,
                  width: 'max-content'
                }}
              >
                {row1Mobile.map((img, i) => (
                  <div key={`m1-${i}`} className="w-[140px] aspect-[4/5] flex-shrink-0 relative rounded-[16px] overflow-hidden shadow-sm bg-gray-50 border border-gray-150">
                    <img src={img} alt="Gallery view" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div className="w-full overflow-hidden">
              <div 
                className="flex gap-4 transition-transform duration-100 ease-out will-change-transform"
                style={{
                  transform: `translate3d(${mobileRow2Translation}px, 0, 0)`,
                  width: 'max-content'
                }}
              >
                {row2Mobile.map((img, i) => (
                  <div key={`m2-${i}`} className="w-[140px] aspect-[4/5] flex-shrink-0 relative rounded-[16px] overflow-hidden shadow-sm bg-gray-50 border border-gray-150">
                    <img src={img} alt="Gallery view" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Desktop: Multi-column Parallax Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-l md:gap-xl max-w-[1250px] mx-auto relative pt-[40px] pb-[40px]">
            
            {/* Column 1 */}
            <div 
              className="flex flex-col gap-l md:gap-xl transition-transform duration-100 ease-out"
              style={getColStyle(0)}
            >
              {col1.map((img, i) => (
                <GalleryCard key={`c1-${i}`} image={img} />
              ))}
            </div>

            {/* Column 2 */}
            <div 
              className="flex flex-col gap-l md:gap-xl transition-transform duration-100 ease-out"
              style={getColStyle(1)}
            >
              {col2.map((img, i) => (
                <GalleryCard key={`c2-${i}`} image={img} />
              ))}
            </div>

            {/* Column 3 */}
            <div 
              className="flex flex-col gap-l md:gap-xl transition-transform duration-100 ease-out"
              style={getColStyle(2)}
            >
              {col3.map((img, i) => (
                <GalleryCard key={`c3-${i}`} image={img} />
              ))}
            </div>

            {/* Column 4 */}
            <div 
              className="flex flex-col gap-l md:gap-xl transition-transform duration-100 ease-out"
              style={getColStyle(3)}
            >
              {col4.map((img, i) => (
                <GalleryCard key={`c4-${i}`} image={img} />
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

/* Internal Gallery Card Component for Cleanliness */
interface CardProps {
  image: string;
}

const GalleryCard: React.FC<CardProps> = ({ image }) => {
  return (
    <div 
      className="group relative rounded-[22px] overflow-hidden bg-gray-50 border border-gray-150 flex flex-col justify-end aspect-[4/5] shadow-sm hover:shadow-md transition-shadow duration-500"
    >
      {/* Background Image with Zoom */}
      <img 
        src={image} 
        alt="Gallery View"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.03]"
      />
      
      {/* Hardware border layout overlay */}
      <div className="absolute inset-0 border border-white/5 transition-colors rounded-[22px] pointer-events-none"></div>
    </div>
  );
};
