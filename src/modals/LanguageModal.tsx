import React from 'react';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: string;
  onChangeLanguage: (lang: string) => void;
}

export const LanguageModal: React.FC<LanguageModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
  onChangeLanguage,
}) => {
  if (!isOpen) return null;

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'AR', name: 'Arabic (العربية)' },
    { code: 'RU', name: 'Russian (Русский)' },
    { code: 'ZH', name: 'Chinese (中文)' },
    { code: 'DE', name: 'German (Deutsch)' },
    { code: 'FR', name: 'French (Français)' },
    { code: 'TR', name: 'Turkish (Türkçe)' },
  ];

  return (
    <div
      className="fixed left-0 top-0 w-screen h-dvh bg-[rgba(0,0,0,0.5)] z-[100] flex items-center justify-center transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-[400px] rounded-t-[30px] md:rounded-[30px] p-m relative shadow-2xl mx-m"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gray-200 mx-auto w-[36px] h-[5px] rounded md:hidden mb-m"></div>
        <div className="flex justify-between items-center mb-l">
          <p className="font-primary text-m uppercase font-medium m-0">Language</p>
          <button type="button" className="modal__close stroke-black" onClick={onClose}>
            <span style={{ width: '24px', height: '24px' }} className="leading-[0] svg-icon block">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-current">
                <path d="M18 18L6 6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M18 6L6 18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-s text-black">
          {languages.map((lang) => {
            const isSelected = currentLanguage === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                className={`flex items-center justify-between py-xs px-s rounded-full text-m ${
                  isSelected ? 'golden-gradient text-black font-medium' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => {
                  onChangeLanguage(lang.code);
                  onClose();
                }}
              >
                <span>{lang.name}</span>
                {isSelected && (
                  <span style={{ width: '20px', height: '20px' }} className="leading-[0] svg-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-current">
                      <path d="M6 12.0005L10.2426 16.2431L18.7279 7.75781" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
