import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Franchise = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);
  const { lang, isRtl } = useLanguage();
  
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    budget: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animation for text
      gsap.fromTo(textRef.current.children, 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.15, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Card scale-up animation
      gsap.fromTo(cardRef.current,
        { scale: 0.9, opacity: 0, y: 30 },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0,
          duration: 1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          }
        }
      );

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate premium submission sequence
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setShowForm(false);
        setStatus('idle');
        setFormData({ name: '', email: '', location: '', budget: '' });
      }, 2500);
    }, 1500);
  };

  const translations = {
    en: {
      sectionTitle: 'Get in touch',
      title: 'Partner with',
      titleAccent: 'NEXAT Construction.',
      desc: "Whether you are planning a high-end luxury residential villa, a corporate high-rise, or sustainable public infrastructure, our engineers and architects are prepared to translate parameters into structural realities. Let's discuss your roadmap.",
      btnRequest: 'Request Consultation',
      cardTitle: 'Corporate Consultation',
      cardSubtitle: 'Design-Build Capabilities',
      point1: 'Comprehensive budget modeling & material planning',
      point2: 'Integrated BIM & seismological feasibility studies',
      point3: 'LEED-accredited engineers and sustainability audits',
      btnRfp: 'Start RFP Consultation',
      formTitle: 'Consultation Request',
      placeholderName: 'Full Name / Corporate Representative',
      placeholderEmail: 'Corporate Email Address',
      placeholderLocation: 'Project Site / City',
      placeholderBudget: 'Estimated Project Budget',
      btnSubmit: 'Submit Project Brief',
      submittedTitle: 'Request Submitted',
      submittedDesc: 'Our engineering department will contact you shortly.',
      budgets: [
        { value: "1M-5M", label: "$1 Million - $5 Million" },
        { value: "5M-20M", label: "$5 Million - $20 Million" },
        { value: "20M+", label: "$20 Million +" }
      ]
    },
    ar: {
      sectionTitle: 'اتصل بنا',
      title: 'كن شريكاً لـ',
      titleAccent: 'نكسات للمقاولات.',
      desc: 'سواء كنت تخطط لفيلا سكنية فاخرة، أو برج تجاري شاهق، أو بنية تحتية مستدامة، فإن مهندسينا ومعماريينا على أتم الاستعداد لتحويل المتطلبات إلى حقائق ملموسة. فلنناقش خطة عملك.',
      btnRequest: 'طلب استشارة',
      cardTitle: 'استشارة الشركات',
      cardSubtitle: 'قدرات التصميم والبناء',
      point1: 'نمذجة ميزانية شاملة وتخطيط المواد والاحتياجات',
      point2: 'دراسات الجدوى المتكاملة لنظم BIM ومقاومة الزلازل',
      point3: 'مهندسون معتمدون من LEED وعمليات التدقيق البيئي',
      btnRfp: 'بدء استشارة RFP',
      formTitle: 'طلب استشارة للشركة',
      placeholderName: 'الاسم الكامل / ممثل الشركة',
      placeholderEmail: 'البريد الإلكتروني للشركة',
      placeholderLocation: 'موقع المشروع / المدينة',
      placeholderBudget: 'الميزانية التقديرية للمشروع',
      btnSubmit: 'تقديم ملخص المشروع',
      submittedTitle: 'تم تقديم الطلب بنجاح',
      submittedDesc: 'سيتواصل معك قسم الهندسة لدينا في أقرب وقت ممكن.',
      budgets: [
        { value: "1M-5M", label: "١ مليون دولار - ٥ مليون دولار" },
        { value: "5M-20M", label: "٥ مليون دولار - ٢٠ مليون دولار" },
        { value: "20M+", label: "أكثر من ٢٠ مليون دولار" }
      ]
    }
  };

  const current = translations[lang];

  return (
    <section id="contact" ref={containerRef} className="py-32 px-6 md:px-12 bg-[#13263A] text-white relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#DA9A62]/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DA9A62]/3 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Left Side: Text */}
        <div ref={textRef} className={`flex-1 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
          <h2 className="text-sm uppercase tracking-[0.25em] font-semibold text-[var(--accent)]">
            {current.sectionTitle}
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tight">
            {current.title} <br />{current.titleAccent}
          </h3>
          <p className="text-lg text-[var(--secondary-text)] max-w-lg leading-relaxed font-sans">
            {current.desc}
          </p>
          <div className="pt-4">
             <button 
               onClick={() => setShowForm(true)}
               className="px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[#0B1624] uppercase tracking-wider font-bold rounded-xl transition-all duration-300 shadow-lg text-sm"
             >
               {current.btnRequest}
             </button>
          </div>
        </div>

        {/* Right Side: Consultation Flip Card / Form */}
        <div ref={cardRef} className="flex-1 w-full max-w-md relative min-h-[460px]">
          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.div 
                key="card"
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.4 }}
                className={`absolute inset-0 bg-[#0B1624] border border-white/5 rounded-2xl p-8 md:p-10 shadow-2xl flex flex-col justify-between overflow-hidden group ${isRtl ? 'text-right' : 'text-left'}`}
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-[#DA9A62]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 
                 <div>
                   <h4 className="text-2xl font-bold uppercase tracking-tight text-white mb-2">{current.cardTitle}</h4>
                   <p className="text-xs uppercase tracking-wider text-[var(--accent)] font-semibold mb-6">{current.cardSubtitle}</p>
                   
                   <div className="space-y-4 my-8">
                     <div className={`flex items-start space-x-3 text-base text-[var(--secondary-text)] ${isRtl ? 'space-x-reverse' : ''}`}>
                       <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[var(--accent)]">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                       </div>
                       <p className="font-sans">{current.point1}</p>
                     </div>
                     <div className={`flex items-start space-x-3 text-base text-[var(--secondary-text)] ${isRtl ? 'space-x-reverse' : ''}`}>
                       <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[var(--accent)]">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                       </div>
                       <p className="font-sans">{current.point2}</p>
                     </div>
                     <div className={`flex items-start space-x-3 text-base text-[var(--secondary-text)] ${isRtl ? 'space-x-reverse' : ''}`}>
                       <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[var(--accent)]">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                       </div>
                       <p className="font-sans">{current.point3}</p>
                     </div>
                   </div>
                 </div>
                 
                 <button 
                   onClick={() => setShowForm(true)}
                   className={`inline-flex items-center justify-between w-full border border-white/10 hover:border-[var(--accent)] px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 ${isRtl ? 'flex-row-reverse' : ''}`}
                 >
                   <span>{current.btnRfp}</span>
                   <span className={`text-[var(--accent)] transform transition-transform ${isRtl ? 'rotate-180' : ''}`}>→</span>
                 </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.4 }}
                className={`absolute inset-0 bg-[#0B1624] border border-white/5 rounded-2xl p-8 md:p-10 shadow-2xl flex flex-col ${isRtl ? 'text-right' : 'text-left'}`}
              >
                <div className={`flex justify-between items-center mb-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <h4 className="text-xl font-bold uppercase tracking-tight text-white">{current.formTitle}</h4>
                  <button onClick={() => setShowForm(false)} className="text-white/40 hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
                
                {status === 'success' ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-14 h-14 bg-[#DA9A62]/10 rounded-full flex items-center justify-center border border-[#DA9A62]/20">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <h5 className="text-xl font-bold uppercase tracking-tight text-white">{current.submittedTitle}</h5>
                    <p className="text-[var(--secondary-text)] text-sm font-sans">{current.submittedDesc}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-4">
                    <input 
                      required 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder={current.placeholderName} 
                      className={`w-full px-4 py-3.5 bg-[#13263A]/40 border border-white/5 rounded-xl focus:outline-none focus:border-[var(--accent)] text-white font-sans text-sm ${isRtl ? 'text-right' : 'text-left'}`} 
                    />
                    <input 
                      required 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder={current.placeholderEmail} 
                      className={`w-full px-4 py-3.5 bg-[#13263A]/40 border border-white/5 rounded-xl focus:outline-none focus:border-[var(--accent)] text-white font-sans text-sm ${isRtl ? 'text-right' : 'text-left'}`} 
                    />
                    <input 
                      required 
                      type="text" 
                      name="location" 
                      value={formData.location} 
                      onChange={handleInputChange} 
                      placeholder={current.placeholderLocation} 
                      className={`w-full px-4 py-3.5 bg-[#13263A]/40 border border-white/5 rounded-xl focus:outline-none focus:border-[var(--accent)] text-white font-sans text-sm ${isRtl ? 'text-right' : 'text-left'}`} 
                    />
                    
                    <div className="relative">
                      <select 
                        required 
                        name="budget" 
                        value={formData.budget} 
                        onChange={handleInputChange} 
                        className={`w-full px-4 py-3.5 bg-[#13263A]/40 border border-white/5 rounded-xl focus:outline-none focus:border-[var(--accent)] text-white font-sans text-sm appearance-none select-menu ${isRtl ? 'text-right pr-4 pl-10' : 'text-left pl-4 pr-10'}`}
                        style={{ color: formData.budget === '' ? 'rgba(255,255,255,.45)' : 'white' }}
                      >
                        <option value="" disabled>{current.placeholderBudget}</option>
                        {current.budgets.map(b => (
                          <option key={b.value} value={b.value}>{b.label}</option>
                        ))}
                      </select>
                      {/* Custom dropdown caret indicator */}
                      <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-white/40 ${isRtl ? 'left-4' : 'right-4'}`}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 9l6 6 6-6"/></svg>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="mt-auto w-full py-4 bg-[var(--accent)] text-[#0B1624] font-bold uppercase tracking-wider rounded-xl hover:bg-[var(--accent-hover)] transition-all duration-300 disabled:opacity-50 flex justify-center items-center h-[52px] text-sm"
                    >
                      {status === 'loading' ? (
                        <div className="w-5 h-5 border-2 border-[#0B1624] border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        current.btnSubmit
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Franchise;
