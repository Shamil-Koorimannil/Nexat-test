import React from 'react';

interface PreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: string;
  unit: string;
  onChangePreferences: (currency: string, unit: string) => void;
}

export const PreferencesModal: React.FC<PreferencesModalProps> = ({
  isOpen,
  onClose,
  currency,
  unit,
  onChangePreferences,
}) => {
  if (!isOpen) return null;

  const currencies = [
    { code: 'GBP', symbol: '£', label: 'GBP £' },
    { code: 'AED', symbol: 'درهم', label: 'AED درهم' },
    { code: 'USD', symbol: '$', label: 'USD $' },
    { code: 'CNY', symbol: '¥', label: 'CNY ¥' },
    { code: 'RUB', symbol: '₽', label: 'RUB ₽' },
    { code: 'EUR', symbol: '€', label: 'EUR €' },
    { code: 'INR', symbol: '₹', label: 'INR ₹' },
  ];

  const [tempCurrency, setTempCurrency] = React.useState(currency);
  const [tempUnit, setTempUnit] = React.useState(unit);

  const handleApply = () => {
    onChangePreferences(tempCurrency, tempUnit);
    onClose();
  };

  return (
    <div
      className="fixed left-0 top-0 w-screen h-dvh bg-[rgba(0,0,0,0.5)] z-[100] flex items-center justify-center transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-[440px] rounded-t-[30px] md:rounded-[30px] p-xl pb-m relative shadow-2xl mx-m text-black"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gray-200 mx-auto w-[36px] h-[5px] rounded md:hidden mb-m"></div>
        
        <div className="flex justify-between items-center mb-l">
          <p className="font-primary text-m uppercase font-medium m-0">Preferences</p>
          <button type="button" className="modal__close stroke-black" onClick={onClose}>
            <span style={{ width: '24px', height: '24px' }} className="leading-[0] svg-icon block">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-current">
                <path d="M18 18L6 6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M18 6L6 18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </span>
          </button>
        </div>

        <p className="font-primary font-medium text-s uppercase mt-xl mb-l">CURRENCY</p>
        <div className="grid grid-cols-2 grid-rows-auto gap-s pb-l">
          {currencies.map((curr) => {
            const isSelected = tempCurrency === curr.code;
            return (
              <button
                key={curr.code}
                type="button"
                className={`flex items-center justify-between py-xs px-s rounded-full text-m ${
                  isSelected ? 'golden-gradient text-black font-medium' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setTempCurrency(curr.code)}
              >
                <span className="text-m">{curr.label}</span>
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

        <div className="flex justify-between items-center py-l border-t border-t-gray-200">
          <p className="font-primary font-medium text-s uppercase m-0">Measurement</p>
          <div className="flex bg-gray-100 rounded-3xl p-xxs">
            <button
              type="button"
              className={`flex items-center justify-between py-xs px-s rounded-full text-m ${
                tempUnit === 'Sq.Ft.' ? 'golden-gradient text-black font-medium' : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setTempUnit('Sq.Ft.')}
            >
              <span className="text-m">Sq.Ft.</span>
            </button>
            <button
              type="button"
              className={`flex items-center justify-between py-xs px-s rounded-full text-m ${
                tempUnit === 'SQ. M.' ? 'golden-gradient text-black font-medium' : 'text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setTempUnit('SQ. M.')}
            >
              <span className="text-m">SQ. M.</span>
            </button>
          </div>
        </div>

        <div className="mt-l">
          <button type="button" className="btn btn-medium btn-primary-black w-full" onClick={handleApply}>
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};
