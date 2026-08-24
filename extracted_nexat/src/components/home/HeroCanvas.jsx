import React, { useRef, useEffect, useState } from "react";
import { companyData } from "../../data/companyData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [preloadedCount, setPreloadedCount] = useState(0);
  const [frameIndex, setFrameIndex] = useState(0);

  const TOTAL_FRAMES = 245; // From ezgif-frame-040.jpg to ezgif-frame-284.jpg
  const framePaths = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
    const frameNum = String(i + 40).padStart(3, "0");
    return `/nexath image seq/ezgif-frame-${frameNum}.jpg`;
  });

  // 1. Initial preloading logic (load first frame instantly, then progressive loading)
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;

    // Helper to load a single image
    const loadImage = (index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = framePaths[index];
        img.onload = () => {
          loadedImages[index] = img;
          loadedCount++;
          setPreloadedCount(loadedCount);
          resolve();
        };
        img.onerror = () => {
          // fallback to first frame if error
          loadedImages[index] = loadedImages[0];
          resolve();
        };
      });
    };

    // Load first frame immediately to render it
    const loadSequence = async () => {
      await loadImage(0);
      setImages([...loadedImages]);

      // Progressively load the remaining frames in chunks/background
      const chunkCount = 10;
      for (let i = 1; i < TOTAL_FRAMES; i += chunkCount) {
        const chunk = [];
        for (let j = i; j < i + chunkCount && j < TOTAL_FRAMES; j++) {
          chunk.push(loadImage(j));
        }
        await Promise.all(chunk);
        setImages([...loadedImages]);
      }
      setIsPreloaded(true);
    };

    loadSequence();
  }, []);

  // 2. Draw canvas helper
  const drawImageCover = (ctx, img) => {
    if (!ctx || !img) return;
    const canvas = ctx.canvas;
    
    // Scale for high DPR screens
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;
    
    const imgW = img.width;
    const imgH = img.height;
    
    const r = Math.max(w / imgW, h / imgH);
    const nw = imgW * r;
    const nh = imgH * r;
    const cx = (w - nw) / 2;
    const cy = (h - nh) / 2;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, cx, cy, nw, nh);
  };

  // 3. Render frame when images or frameIndex changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    const ctx = canvas.getContext("2d");
    
    // Find the closest available image that has been loaded
    let activeImage = images[frameIndex];
    if (!activeImage) {
      // Find nearest previous loaded image
      for (let i = frameIndex; i >= 0; i--) {
        if (images[i]) {
          activeImage = images[i];
          break;
        }
      }
    }
    // fallback to frame 0
    if (!activeImage) activeImage = images[0];

    drawImageCover(ctx, activeImage);
  }, [frameIndex, images]);

  // 4. Set canvas bounds and DPR
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      const ctx = canvas.getContext("2d");
      ctx.scale(dpr, dpr);
      
      if (images[frameIndex]) {
        drawImageCover(ctx, images[frameIndex]);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [images, frameIndex]);

  // 5. ScrollTrigger setup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Dummy tween to update frame index during scrub
      gsap.to({ val: 0 }, {
        val: TOTAL_FRAMES - 1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          onUpdate: (self) => {
            const current = Math.floor(self.progress * (TOTAL_FRAMES - 1));
            setFrameIndex(current);
          }
        }
      });

      // Animate text overlays at specific scroll ranges
      // Text Block 1 (Fades in early, fades out mid)
      gsap.fromTo(".overlay-text-1", 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0,
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "25% bottom",
            scrub: true,
            toggleActions: "play reverse play reverse"
          }
        }
      );
      gsap.to(".overlay-text-1", {
        opacity: 0, y: -30,
        scrollTrigger: {
          trigger: container,
          start: "25% top",
          end: "35% top",
          scrub: true
        }
      });

      // Text Block 2 (Fades in mid, out late)
      gsap.fromTo(".overlay-text-2",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          scrollTrigger: {
            trigger: container,
            start: "38% top",
            end: "50% top",
            scrub: true
          }
        }
      );
      gsap.to(".overlay-text-2", {
        opacity: 0, y: -30,
        scrollTrigger: {
          trigger: container,
          start: "58% top",
          end: "68% top",
          scrub: true
        }
      });

      // Text Block 3 (Fades in late)
      gsap.fromTo(".overlay-text-3",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          scrollTrigger: {
            trigger: container,
            start: "70% top",
            end: "88% top",
            scrub: true
          }
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="hero-scroll-container">
      {/* Canvas Wrapper - Fixed / Pinned */}
      <div className="canvas-wrapper">
        <div className="overlay-hero-canvas"></div>
        <canvas ref={canvasRef} className="hero-canvas" />

        {/* Text Overlay 1 */}
        <div className="hero-text-overlay overlay-text-1">
          <span className="eyebrow-label">Saudi Arabia & GCC</span>
          <h1 className="display-xl text-white">Engineering Excellence</h1>
          <p className="editorial-subtitle text-white" style={{ maxWidth: "600px", marginTop: "1rem" }}>
            "Disciplined execution and sustainable built assets designed for the future of the region."
          </p>
        </div>

        {/* Text Overlay 2 */}
        <div className="hero-text-overlay overlay-text-2">
          <span className="eyebrow-label">Integrated Solutions</span>
          <h2 className="display-xl text-white">Turnkey EPC Delivery</h2>
          <p className="editorial-subtitle text-white" style={{ maxWidth: "600px", marginTop: "1rem" }}>
            Uniting value engineering, quality systems, and transparent collaboration from concept to completion.
          </p>
        </div>

        {/* Text Overlay 3 */}
        <div className="hero-text-overlay overlay-text-3">
          <span className="eyebrow-label">NEXAT Construction Co.</span>
          <h2 className="display-xl text-white">Vision 2030 Commitment</h2>
          <p className="editorial-subtitle text-white" style={{ maxWidth: "600px", marginTop: "1rem" }}>
            Delivering landmark projects that shape infrastructure, housing, tourism, and smart cities.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <button 
              className="btn-premium btn-premium-primary"
              onClick={() => {
                const aboutSec = document.querySelector("#about-story-section");
                if (aboutSec) aboutSec.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Our Story
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator">
          <span className="nav-text text-white" style={{ fontSize: "10px", opacity: 0.6 }}>Scroll to Explore</span>
          <div className="scroll-line-indicator" style={{ marginTop: "8px" }}></div>
        </div>
      </div>
    </div>
  );
}
