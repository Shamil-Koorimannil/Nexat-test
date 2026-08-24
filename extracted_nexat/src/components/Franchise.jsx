import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Franchise = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const cardContainerRef = useRef(null);
  const { lang, isRtl } = useLanguage();
  
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animation for text
      gsap.fromTo(textRef.current.children, 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Card container reveal
      gsap.fromTo(cardContainerRef.current,
        { scale: 0.95, opacity: 0, y: 30 },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0,
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardContainerRef.current,
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
    
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "97e74fb1-d54a-4499-b430-e2f94035162e";
      
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", accessKey);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("subject", `NEXAT Consultation Request - ${formData.name}`);
      formDataToSend.append("message", `Representative Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLocation: ${formData.location}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setTimeout(() => {
          setShowForm(false);
          setStatus('idle');
          setFormData({ name: '', email: '', phone: '', location: '' });
        }, 2500);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
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
      placeholderPhone: 'Phone Number',
      placeholderLocation: 'Project Site / City',
      btnSubmit: 'Submit Project Brief',
      submittedTitle: 'Request Submitted',
      submittedDesc: 'Our engineering department will contact you shortly.'
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
      placeholderPhone: 'رقم الهاتف',
      placeholderLocation: 'موقع المشروع / المدينة',
      btnSubmit: 'تقديم ملخص المشروع',
      submittedTitle: 'تم تقديم الطلب بنجاح',
      submittedDesc: 'سيتواصل معك قسم الهندسة لدينا في أقرب وقت ممكن.'
    }
  };

  const current = translations[lang];

  return (
    <section 
      id="contact" 
      ref={containerRef} 
      className="py-24 md:py-36 px-6 md:px-12 bg-[var(--background)] text-[var(--primary-text)] relative overflow-hidden border-t border-[var(--divider)]"
    >
      {/* Background architectural vertical lines overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] architectural-lines-y" />

      <div className={`max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Left Column: Text & Content Block */}
        <div ref={textRef} className={`flex-1 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] font-bold text-[var(--accent)] block">
            {current.sectionTitle}
          </span>
          <h3 className="text-4xl md:text-6xl font-black leading-none uppercase tracking-tight text-[var(--primary-text)]">
            {current.title} <br />
            <span className="text-[var(--accent)]">{current.titleAccent}</span>
          </h3>
          <p className="text-base md:text-lg text-[var(--secondary-text)] max-w-lg leading-relaxed font-sans">
            {current.desc}
          </p>
          <div className="pt-4">
             <button 
               onClick={() => setShowForm(true)}
               className="px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--background)] uppercase tracking-wider font-bold rounded-xl transition-all duration-300 shadow-md text-sm cursor-pointer"
             >
               {current.btnRequest}
             </button>
          </div>
        </div>

        {/* Right Column: Sliding Consultation Card / Form Container */}
        <div ref={cardContainerRef} className="flex-1 w-full max-w-md relative min-h-[480px]">
          <AnimatePresence mode="wait">
            {!showForm ? (
              <motion.div 
                key="card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-[var(--surface)] border border-[var(--divider)] rounded-2xl p-8 md:p-10 shadow-lg flex flex-col justify-between overflow-hidden ${isRtl ? 'text-right' : 'text-left'}`}
              >
                 <div>
                   <h4 className="text-2xl font-black uppercase tracking-tight text-[var(--primary-text)] mb-2">
                     {current.cardTitle}
                   </h4>
                   <p className="text-xs uppercase tracking-wider text-[var(--accent)] font-bold mb-6">
                     {current.cardSubtitle}
                   </p>
                   
                   <div className="space-y-4 my-8">
                     <div className={`flex items-start space-x-3 text-sm md:text-base text-[var(--secondary-text)] ${isRtl ? 'space-x-reverse' : ''}`}>
                       <div className="mt-1 flex-shrink-0 w-5 h-5 rounded bg-[var(--background)] border border-[var(--divider)] flex items-center justify-center text-[var(--accent)]">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                       </div>
                       <p className="font-sans">{current.point1}</p>
                     </div>
                     <div className={`flex items-start space-x-3 text-sm md:text-base text-[var(--secondary-text)] ${isRtl ? 'space-x-reverse' : ''}`}>
                       <div className="mt-1 flex-shrink-0 w-5 h-5 rounded bg-[var(--background)] border border-[var(--divider)] flex items-center justify-center text-[var(--accent)]">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                       </div>
                       <p className="font-sans">{current.point2}</p>
                     </div>
                     <div className={`flex items-start space-x-3 text-sm md:text-base text-[var(--secondary-text)] ${isRtl ? 'space-x-reverse' : ''}`}>
                       <div className="mt-1 flex-shrink-0 w-5 h-5 rounded bg-[var(--background)] border border-[var(--divider)] flex items-center justify-center text-[var(--accent)]">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                       </div>
                       <p className="font-sans">{current.point3}</p>
                     </div>
                   </div>
                 </div>
                 
                 <button 
                   onClick={() => setShowForm(true)}
                   className={`inline-flex items-center justify-between w-full border border-[var(--divider)] hover:border-[var(--accent)] px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-[var(--primary-text)] hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all duration-300 cursor-pointer ${isRtl ? 'flex-row-reverse' : ''}`}
                 >
                   <span>{current.btnRfp}</span>
                   <span className={`text-[var(--accent)] group-hover:text-inherit transform transition-transform ${isRtl ? 'rotate-180' : ''}`}>→</span>
                 </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-[var(--surface)] border border-[var(--divider)] rounded-2xl p-8 md:p-10 shadow-lg flex flex-col ${isRtl ? 'text-right' : 'text-left'}`}
              >
                <div className={`flex justify-between items-center mb-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <h4 className="text-xl font-bold uppercase tracking-tight text-[var(--primary-text)]">{current.formTitle}</h4>
                  <button onClick={() => setShowForm(false)} className="text-[var(--muted-text)] hover:text-[var(--primary-text)] transition-colors cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
                
                {status === 'success' ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-14 h-14 bg-[var(--accent)]/10 rounded-full flex items-center justify-center border border-[var(--accent)]/20">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <h5 className="text-xl font-bold uppercase tracking-tight text-[var(--primary-text)]">{current.submittedTitle}</h5>
                    <p className="text-[var(--secondary-text)] text-sm font-sans">{current.submittedDesc}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
                    <div className="space-y-4 flex-1 overflow-y-auto pr-1">
                      <div className="relative">
                        <input 
                          required 
                          type="text" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleInputChange} 
                          placeholder={current.placeholderName} 
                          className={`w-full px-1 py-3 bg-transparent border-b border-[var(--divider)] focus:outline-none focus:border-[var(--accent)] text-[var(--primary-text)] placeholder-[var(--muted-text)] font-sans text-sm transition-all duration-300 ${isRtl ? 'text-right' : 'text-left'}`} 
                        />
                      </div>
                      <div className="relative">
                        <input 
                          required 
                          type="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          placeholder={current.placeholderEmail} 
                          className={`w-full px-1 py-3 bg-transparent border-b border-[var(--divider)] focus:outline-none focus:border-[var(--accent)] text-[var(--primary-text)] placeholder-[var(--muted-text)] font-sans text-sm transition-all duration-300 ${isRtl ? 'text-right' : 'text-left'}`} 
                        />
                      </div>
                      <div className="relative">
                        <input 
                          required 
                          type="tel" 
                          name="phone" 
                          value={formData.phone} 
                          onChange={handleInputChange} 
                          placeholder={current.placeholderPhone} 
                          className={`w-full px-1 py-3 bg-transparent border-b border-[var(--divider)] focus:outline-none focus:border-[var(--accent)] text-[var(--primary-text)] placeholder-[var(--muted-text)] font-sans text-sm transition-all duration-300 ${isRtl ? 'text-right' : 'text-left'}`} 
                        />
                      </div>
                      <div className="relative">
                        <input 
                          required 
                          type="text" 
                          name="location" 
                          value={formData.location} 
                          onChange={handleInputChange} 
                          placeholder={current.placeholderLocation} 
                          className={`w-full px-1 py-3 bg-transparent border-b border-[var(--divider)] focus:outline-none focus:border-[var(--accent)] text-[var(--primary-text)] placeholder-[var(--muted-text)] font-sans text-sm transition-all duration-300 ${isRtl ? 'text-right' : 'text-left'}`} 
                        />
                      </div>
                    </div>

                    {status === 'error' && (
                      <p className="text-red-500 text-xs font-sans text-center mt-2">
                        {lang === 'ar' ? 'حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.' : 'An error occurred while submitting. Please try again.'}
                      </p>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="mt-6 w-full py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--background)] font-bold uppercase tracking-wider rounded-xl transition-all duration-300 disabled:opacity-50 flex justify-center items-center h-[52px] text-sm shadow-md cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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
