import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GSAPScrollSection = () => {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        let panels = gsap.utils.toArray(".panel");
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            start: "top top",
            end: () => "+=" + scrollContainerRef.current.offsetWidth
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="overflow-hidden bg-[#0B1624] text-white md:h-screen border-t border-white/5">
      <div ref={scrollContainerRef} className="flex flex-col md:flex-row md:h-screen w-full md:w-[300vw]">

        {/* Panel 1 */}
        <div className="panel w-full md:w-screen h-screen flex flex-col items-center justify-center p-8 relative flex-shrink-0">
          <h2 className="text-5xl md:text-8xl font-black text-center mb-4 text-[var(--accent)] uppercase leading-none tracking-tight">
            Precision<br />Engineering.
          </h2>
          <p className="text-xl md:text-2xl font-sans text-center max-w-2xl text-[var(--secondary-text)] mt-4 leading-relaxed">
            Every building structure begins with robust calculations, rigorous wind-load analysis, and site soil mechanics. We formulate structural longevity.
          </p>
          <div className="absolute -z-10 opacity-10 transform -rotate-12 scale-150">
            <div className="w-96 h-[800px] bg-[#DA9A62]/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="panel w-full md:w-screen h-screen flex flex-col items-center justify-center p-8 relative flex-shrink-0 bg-[#13263A]/20">
          <h2 className="text-5xl md:text-8xl font-black text-center mb-4 text-white uppercase leading-none tracking-tight">
            Sustainable<br />Architecture.
          </h2>
          <p className="text-xl md:text-2xl font-sans text-center max-w-2xl text-[var(--secondary-text)] mt-4 leading-relaxed">
            We integrate sustainable carbon-neutral concrete, geothermal HVAC grids, smart shading dynamics, and high thermal performance directly into building geometries.
          </p>
          <div className="absolute -z-10 opacity-10 transform rotate-12 scale-110 translate-y-20">
            <div className="w-80 h-[800px] bg-[#DA9A62]/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Panel 3 */}
        <div className="panel w-full md:w-screen h-screen flex flex-col items-center justify-center p-8 relative flex-shrink-0">
          <h2 className="text-5xl md:text-8xl font-black text-center mb-4 text-[var(--accent)] uppercase leading-none tracking-tight">
            Luxury<br />Living.
          </h2>
          <p className="text-xl md:text-2xl font-sans text-center max-w-2xl text-[var(--secondary-text)] mt-4 leading-relaxed">
            From bespoke interior woodwork and custom marble layouts to automated climate control. Luxury is crafted through detail.
          </p>
          <div className="absolute -z-10 opacity-10 transform -rotate-6 scale-125">
            <div className="w-96 h-[800px] bg-[#DA9A62]/10 rounded-full blur-3xl"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GSAPScrollSection;
