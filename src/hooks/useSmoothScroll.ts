import { useEffect } from 'react';

/**
 * useSmoothScroll - intercepts wheel events and lerps window.scrollY
 * to create slow, cinematic page scrolling. Sections glide, not jump.
 */
export function useSmoothScroll(lerpFactor = 0.09, wheelScale = 0.7) {
  useEffect(() => {
    const isTouchDevice = () =>
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice()) return;

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let rafId: number;
    let isRunning = false;

    const getMaxScroll = () =>
      document.documentElement.scrollHeight - window.innerHeight;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetY += e.deltaY * wheelScale;
      targetY = Math.max(0, Math.min(targetY, getMaxScroll()));
      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(loop);
      }
    };

    const loop = () => {
      const diff = targetY - currentY;
      if (Math.abs(diff) < 0.5) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        isRunning = false;
        return;
      }
      currentY += diff * lerpFactor;
      window.scrollTo(0, currentY);
      rafId = requestAnimationFrame(loop);
    };

    const onScroll = () => {
      if (!isRunning) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [lerpFactor, wheelScale]);
}
