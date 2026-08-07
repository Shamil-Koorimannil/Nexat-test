import React from 'react';

const NexatLogo = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Icon portion - replaced with user's png asset */}
      <img 
        src="/Nexat Logo.png" 
        alt="NEXAT Logo" 
        className="h-full w-auto object-contain"
        style={{ minHeight: '40px', maxHeight: '56px' }}
      />
    </div>
  );
};

export default NexatLogo;
