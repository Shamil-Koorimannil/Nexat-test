import React, { useEffect, useRef, useState } from 'react';

/**
 * ============================================================================
 * ScrollVideoCanvas.tsx
 * ============================================================================
 * A highly-optimized React component to render a scroll-driven image sequence
 * (video frames) onto an HTML5 Canvas.
 * 
 * FEATURES:
 * 1. Progressive Preloading: Loads the first frame instantly to show content,
 *    then preloads remaining frames in chunks to prevent network bottlenecks.
 * 2. Background Resizing: Dynamically scales the canvas using pixel ratio
 *    (DPR) tracking and applies an "object-fit: cover" calculation inside the 2D context.
 * 3. 60fps Scroll Tracking: Uses standard window requestAnimationFrame callbacks 
 *    to track progress smoothly without requiring heavy animation libraries like GSAP.
 * 4. Fallback rendering: If a frame hasn't finished loading while scrolling, it
 *    seamlessly displays the nearest available loaded frame.
 * 
 * ============================================================================
 * HOW TO USE:
 * ============================================================================
 * import { ScrollVideoCanvas } from './components/ScrollVideoCanvas';
 * 
 * function App() {
 *   return (
 *     <ScrollVideoCanvas
 *       totalFrames={245}
 *       startFrameIndex={40}
 *       containerHeight="350vh"
 *       framePathBuilder={(frame) => `/assets/sequence/frame_${String(frame).padStart(3, '0')}.jpg`}
 *     >
 *       {(progress) => (
 *         <div className="relative w-full h-full flex items-center justify-center">
 *           <h1 
 *             className="text-white text-5xl font-bold transition-opacity duration-300"
 *             style={{ opacity: progress > 0.1 && progress < 0.4 ? 1 : 0 }}
 *           >
 *             First Scroll Phase Content
 *           </h1>
 *         </div>
 *       )}
 *     </ScrollVideoCanvas>
 *   );
 * }
 * ============================================================================
 */

interface ScrollVideoCanvasProps {
  /**
   * Total number of frames in the sequence
   */
  totalFrames?: number;
  /**
   * The start index of the frames (e.g., if files start at frame 040, pass 40)
   */
  startFrameIndex?: number;
  /**
   * Function to build the file path for a given frame index
   */
  framePathBuilder?: (index: number) => string;
  /**
   * Scroll container height (defines scroll duration/speed)
   */
  containerHeight?: string;
  /**
   * Render function to place dynamic HTML text/overlays on top of the canvas
   */
  children?: (scrollProgress: number) => React.ReactNode;
}

export const ScrollVideoCanvas: React.FC<ScrollVideoCanvasProps> = ({
  totalFrames = 245,
  startFrameIndex = 40,
  framePathBuilder = (index) => `/nexath image seq/ezgif-frame-${String(index).padStart(3, '0')}.jpg`,
  containerHeight = '350vh',
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [frameIndex, setFrameIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Generate paths for all frames
  const framePaths = Array.from({ length: totalFrames }, (_, i) =>
    framePathBuilder(i + startFrameIndex)
  );

  // 1. Preload images progressively to prevent network congestion & render first frame instantly
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let isCancelled = false;

    const loadImage = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = framePaths[index];
        img.onload = () => {
          if (isCancelled) return;
          loadedImages[index] = img;
          resolve();
        };
        img.onerror = () => {
          if (isCancelled) return;
          // Fallback to the first frame if download fails
          loadedImages[index] = loadedImages[0];
          resolve();
        };
      });
    };

    const loadSequence = async () => {
      // Load first frame immediately to display something to the user
      await loadImage(0);
      if (isCancelled) return;
      setImages([...loadedImages]);

      // Load remaining frames in small chunks to keep the browser responsive
      const chunkSize = 8;
      for (let i = 1; i < totalFrames; i += chunkSize) {
        if (isCancelled) return;
        const chunk: Promise<void>[] = [];
        for (let j = i; j < i + chunkSize && j < totalFrames; j++) {
          chunk.push(loadImage(j));
        }
        await Promise.all(chunk);
        if (isCancelled) return;
        setImages([...loadedImages]);
      }
    };

    loadSequence();

    return () => {
      isCancelled = true;
    };
  }, []);

  // 2. Cover resizing logic for drawing inside canvas (acts like background-size: cover)
  const drawImageCover = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    if (!ctx || !img) return;
    const canvas = ctx.canvas;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    const imgW = img.width;
    const imgH = img.height;

    const scale = Math.max(w / imgW, h / imgH);
    const nw = imgW * scale;
    const nh = imgH * scale;
    const cx = (w - nw) / 2;
    const cy = (h - nh) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, cx, cy, nw, nh);
  };

  // 3. Render appropriate frame when frameIndex or images list updates
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Retrieve active image, falling back to the nearest preloaded previous image if not fully loaded yet
    let activeImage = images[frameIndex];
    if (!activeImage) {
      for (let i = frameIndex; i >= 0; i--) {
        if (images[i]) {
          activeImage = images[i];
          break;
        }
      }
    }
    if (!activeImage) activeImage = images[0];

    drawImageCover(ctx, activeImage);
  }, [frameIndex, images]);

  // 4. Resize handler to keep canvas dimensions matched to screen size + device pixel ratio
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
        if (images[frameIndex]) {
          drawImageCover(ctx, images[frameIndex]);
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [images, frameIndex]);

  // 5. Scroll Handler using requestAnimationFrame for 60fps responsiveness
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = container.getBoundingClientRect();
          const viewHeight = window.innerHeight;
          
          // Calculate scroll progress within the container bounds
          // Progress is 0 when container top reaches screen top, and 1 when container bottom reaches screen bottom
          const totalScrollable = rect.height - viewHeight;
          if (totalScrollable > 0) {
            const currentScroll = -rect.top;
            const progress = Math.max(0, Math.min(1, currentScroll / totalScrollable));
            
            setScrollProgress(progress);
            
            const currentFrame = Math.floor(progress * (totalFrames - 1));
            setFrameIndex(currentFrame);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [totalFrames]);

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none"
      style={{ height: containerHeight }}
    >
      {/* Sticky viewport frame wrapper */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black">
        {/* Canvas overlay gradient */}
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
        
        {/* Hardware accelerated canvas */}
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full z-0 block"
        />

        {/* Dynamic Render Overlays */}
        {children && (
          <div className="absolute inset-0 z-20 flex flex-col justify-between pointer-events-none">
            {children(scrollProgress)}
          </div>
        )}
      </div>
    </div>
  );
};

/*
 * ============================================================================
 * OPTIONAL: GSAP ScrollTrigger Alternative
 * ============================================================================
 * If you prefer GSAP, install it via: `npm install gsap`
 * Then replace the Scroll Handler (useEffect #5) with the following code:
 * 
 * import gsap from 'gsap';
 * import { ScrollTrigger } from 'gsap/ScrollTrigger';
 * gsap.registerPlugin(ScrollTrigger);
 * 
 * useEffect(() => {
 *   const container = containerRef.current;
 *   if (!container) return;
 * 
 *   const ctx = gsap.context(() => {
 *     gsap.to({ val: 0 }, {
 *       val: totalFrames - 1,
 *       ease: 'none',
 *       scrollTrigger: {
 *         trigger: container,
 *         start: 'top top',
 *         end: 'bottom bottom',
 *         scrub: 0.5,
 *         onUpdate: (self) => {
 *           setScrollProgress(self.progress);
 *           const current = Math.floor(self.progress * (totalFrames - 1));
 *           setFrameIndex(current);
 *         }
 *       }
 *     });
 *   }, container);
 * 
 *   return () => ctx.revert();
 * }, [totalFrames]);
 * ============================================================================
 */
