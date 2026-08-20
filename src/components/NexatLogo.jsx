import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const NexatLogo = ({ className = "h-12" }) => {
  const { lang } = useLanguage();
  const logoSrc = lang === 'ar' ? '/Nexat Logo - Arabic.png' : '/Nexat Logo.png';

  return (
    <div className={`flex items-center ${className}`}>
      {/* Icon portion - replaced with user's dynamic asset */}
      <img 
        src={logoSrc} 
        alt="NEXAT Logo" 
        className="h-full w-auto object-contain"
        style={{ minHeight: '40px', maxHeight: '56px' }}
      />
    </div>
  );
};

export default NexatLogo;
