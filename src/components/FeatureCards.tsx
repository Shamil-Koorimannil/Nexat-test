import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface Card {
  id: number;
  titleKey: string;
  descKey: string;
  image: string;
}

export const FeatureCards: React.FC = () => {
  const { t } = useLanguage();

  const cards: Card[] = [
    {
      id: 1,
      titleKey: 'featureCards.card1Title',
      descKey: 'featureCards.card1Desc',
      image: '/assets/B10.png',
    },
    {
      id: 2,
      titleKey: 'featureCards.card2Title',
      descKey: 'featureCards.card2Desc',
      image: '/assets/B11.png',
    },
    {
      id: 3,
      titleKey: 'featureCards.card3Title',
      descKey: 'featureCards.card3Desc',
      image: '/assets/B12.png',
    },
  ];

  return (
    <section id="feature-cards" className="bg-white py-24 text-black px-m border-b border-gray-100">
      <div className="container mx-auto max-w-[1100px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-sans font-bold uppercase tracking-[0.25em] mb-s block">
            {t('featureCards.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-black uppercase tracking-wider font-normal">
            {t('featureCards.title')}
          </h2>
          <div className="w-[50px] h-[1px] bg-black/20 mx-auto mt-m"></div>
        </div>

        {/* Three Tall Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative h-[480px] md:h-[540px] rounded-3xl overflow-hidden shadow-md group cursor-pointer"
            >
              {/* Image with subtle zoom on hover */}
              <img
                src={card.image}
                alt={t(card.titleKey)}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
              />
              
              {/* Linear Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"></div>

              {/* Text details overlay at the bottom */}
              <div className="absolute inset-0 p-l flex flex-col justify-end items-start z-10 text-start">
                <span className="text-gold text-xs font-sans font-bold uppercase tracking-[0.2em] mb-xs">
                  {t('featureCards.subtitle').split('&')[0]}
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-white font-bold uppercase tracking-wider mb-s leading-snug">
                  {t(card.titleKey)}
                </h3>
                <p className="text-gray-300 font-secondary text-sm leading-relaxed max-w-[285px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  {t(card.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
