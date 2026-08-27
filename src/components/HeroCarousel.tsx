import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Slide {
  id: number;
  image: string;
  titleEn: string;
  titleAr: string;
  taglineEn: string;
  taglineAr: string;
  ctaTextEn: string;
  ctaTextAr: string;
}

export const HeroCarousel: React.FC = () => {
  const { lang } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      image: '/assets/B17.jpg',
      titleEn: 'STRUCTURAL CONSTRUCTION & REINFORCED CONCRETE',
      titleAr: 'الأعمال الإنشائية والخرسانة المسلحة المتقدمة',
      taglineEn: 'NEXAT Construction Co. | Engineering Excellence',
      taglineAr: 'نكسات للمقاولات | التميز الهندسي',
      ctaTextEn: 'View Portfolio',
      ctaTextAr: 'عرض سجل الإنجازات',
    },
    {
      id: 2,
      image: '/assets/B1.png',
      titleEn: 'WATER & MEP UTILITY INFRASTRUCTURE SYSTEMS',
      titleAr: 'أنظمة البنية التحتية للمياه والأعمال الكهروميكانيكية',
      taglineEn: 'NEXAT Infrastructure | Durability & Integration',
      taglineAr: 'نكسات للبنية التحتية | الاستدامة والتكامل',
      ctaTextEn: 'Explore Infrastructure',
      ctaTextAr: 'استكشاف أعمال البنية التحتية',
    },
    {
      id: 3,
      image: '/assets/B2.png',
      titleEn: 'ARCHITECTURAL FINISHES & PREMIUM FIT-OUT',
      titleAr: 'التشطيبات المعمارية الراقية والتجهيزات الداخلية الفاخرة',
      taglineEn: 'NEXAT Fine Finishes | Exquisite Craftsmanship',
      taglineAr: 'نكسات للتشطيبات | الجودة العالية والجمال',
      ctaTextEn: 'Discover Finishes',
      ctaTextAr: 'اكتشاف أعمال التشطيبات',
    },
    {
      id: 4,
      image: '/assets/B3.png',
      titleEn: 'MULTI-STOREY GENERAL BUILDING CONSTRUCTION',
      titleAr: 'تشييد المباني العامة والهياكل المعمارية المتكاملة',
      taglineEn: 'NEXAT General Contracting | Safe & On-Schedule',
      taglineAr: 'نكسات للمقاولات العامة | تسليم آمن وضمن الجدول الزمني',
      ctaTextEn: 'Explore General Contracting',
      ctaTextAr: 'استكشاف المقاولات العامة',
    },
    {
      id: 5,
      image: '/assets/B28.png',
      titleEn: 'SITE PREPARATION & SUB-GRADE CIVIL WORKS',
      titleAr: 'تجهيز مواقع البناء وتدعيم الأساسات الإنشائية العميقة',
      taglineEn: 'NEXAT Civil Works | Rigorous Site Engineering',
      taglineAr: 'نكسات للأعمال المدنية | هندسة المواقع الصارمة',
      ctaTextEn: 'View Civil Scope',
      ctaTextAr: 'عرض مجال الأعمال المدنية',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);



  const handleSearch = () => {
    const targetElement = document.getElementById('projects');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isRtl = lang === 'ar';

  return (
    <section className="w-full h-screen relative overflow-hidden bg-black">
      {/* Slides Container */}
      <div className="w-full h-full relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 z-10 bg-black/45"></div>
            
            <img 
              src={slide.image} 
              className="absolute top-0 left-0 w-full h-full object-cover" 
              alt={isRtl ? slide.titleAr : slide.titleEn} 
            />

            {/* Slide Content */}
            <div className={`absolute bottom-0 z-20 w-full px-m mb-[200px] text-center`}>
              <div className="flex flex-col items-center max-w-[900px] mx-auto">
                <span className="text-[#DA9A62] text-xs md:text-sm font-sans font-bold uppercase tracking-[0.25em] mb-s block drop-shadow-md">
                  {isRtl ? slide.taglineAr : slide.taglineEn}
                </span>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white uppercase tracking-wider font-normal leading-tight mb-l drop-shadow-lg max-w-[850px]">
                  {isRtl ? slide.titleAr : slide.titleEn}
                </h2>
                <div className="w-[60px] h-[1px] bg-white/40 mb-l"></div>
                <div>
                  <button 
                    onClick={handleSearch}
                    className="btn-luxury px-xl py-s tracking-wider font-bold text-xs uppercase cursor-pointer"
                  >
                    {isRtl ? slide.ctaTextAr : slide.ctaTextEn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>



      {/* Carousel Navigation Indicator Dots */}
      <div className={`absolute ${isRtl ? 'left-m' : 'right-m'} top-1/2 -translate-y-1/2 z-30 flex flex-col gap-s`}>
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-[8px] h-[8px] rounded-full transition-all duration-300 cursor-pointer ${
              index === activeSlide ? 'bg-[#DA9A62] scale-125' : 'bg-white/40 hover:bg-white/70'
            }`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
