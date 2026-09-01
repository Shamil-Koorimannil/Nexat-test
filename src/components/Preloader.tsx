import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  progress: number; // 0 to 100
  isComplete: boolean;
  onFinished: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ progress, isComplete, onFinished }) => {
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Smoothly interpolate displayedProgress towards target progress
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setDisplayedProgress((prev) => {
        if (prev < progress) {
          const diff = progress - prev;
          const step = Math.max(1, Math.ceil(diff * 0.15));
          const next = Math.min(progress, prev + step);
          return next;
        }
        return prev;
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [progress]);

  // Handle completion delay & exit transition
  useEffect(() => {
    if (isComplete && displayedProgress >= 100) {
      const timeout = setTimeout(() => {
        setIsFadingOut(true);
        const finishTimeout = setTimeout(() => {
          onFinished();
        }, 700); // 700ms transition
        return () => clearTimeout(finishTimeout);
      }, 300); // 300ms pause at 100%

      return () => clearTimeout(timeout);
    }
  }, [isComplete, displayedProgress, onFinished]);

  // Lock body scroll while active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#050B14] text-white flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] select-none ${
        isFadingOut
          ? 'opacity-0 scale-105 pointer-events-none filter blur-md'
          : 'opacity-100 scale-100'
      }`}
    >
      {/* Ultra-Minimal Construction Element: Tower Crane & Rising Building Framework */}
      <div className="relative mb-6 flex flex-col items-center">
        <svg
          className="w-16 h-16 sm:w-20 sm:h-20 text-[#DA9A62] drop-shadow-[0_0_15px_rgba(218,154,98,0.3)]"
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Base Ground Line */}
          <line x1="15" y1="105" x2="85" y2="105" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />

          {/* Tower Crane Structure */}
          <path d="M48 35 V15 H80 L88 18 H48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="36" y="13" width="8" height="4" fill="currentColor" opacity="0.6" />
          <line x1="70" y1="18" x2="70" y2="35" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />

          {/* Ghost Building Frame (Background Structure) */}
          <g opacity="0.15" stroke="currentColor" strokeWidth="1">
            <rect x="32" y="35" width="36" height="70" />
            <line x1="32" y1="52" x2="68" y2="52" />
            <line x1="32" y1="70" x2="68" y2="70" />
            <line x1="32" y1="88" x2="68" y2="88" />
            <line x1="50" y1="35" x2="50" y2="105" />
            <path d="M32 35 L68 52 M68 35 L32 52 M32 52 L68 70 M68 52 L32 70 M32 70 L68 88 M68 70 L32 88 M32 88 L68 105 M68 88 L32 105" strokeWidth="0.75" />
          </g>

          {/* Active Rising Structural Frame (Fills from bottom to top with progress) */}
          <g stroke="currentColor" strokeWidth="1.5">
            <clipPath id="building-growth-clip">
              <rect
                x="0"
                y={105 - (displayedProgress / 100) * 70}
                width="100"
                height={(displayedProgress / 100) * 70 + 5}
              />
            </clipPath>
            <g clipPath="url(#building-growth-clip)">
              <rect x="32" y="35" width="36" height="70" fill="currentColor" fillOpacity="0.1" />
              <line x1="32" y1="52" x2="68" y2="52" />
              <line x1="32" y1="70" x2="68" y2="70" />
              <line x1="32" y1="88" x2="68" y2="88" />
              <line x1="50" y1="35" x2="50" y2="105" />
              <path d="M32 35 L68 52 M68 35 L32 52 M32 52 L68 70 M68 52 L32 70 M32 70 L68 88 M68 70 L32 88 M32 88 L68 105 M68 88 L32 105" strokeWidth="0.75" />
            </g>
          </g>
        </svg>
      </div>

      {/* Brand Title */}
      <span className="text-[11px] font-sans font-bold uppercase tracking-[0.35em] text-gray-400 mb-3">
        NEXAT
      </span>

      {/* Minimal Percentage Counter */}
      <div className="font-serif text-4xl sm:text-5xl text-white font-light tracking-tight flex items-baseline gap-0.5 mb-6">
        <span className="tabular-nums">{displayedProgress}</span>
        <span className="text-sm text-[#DA9A62] font-sans font-light">%</span>
      </div>

      {/* Thin Hairline Progress Line */}
      <div className="w-36 sm:w-48 h-[1px] bg-white/10 rounded-full overflow-hidden relative">
        <div
          className="h-full bg-[#DA9A62] transition-all duration-200 ease-out shadow-[0_0_8px_#DA9A62]"
          style={{ width: `${displayedProgress}%` }}
        />
      </div>
    </div>
  );
};
