import React, { useState } from 'react';

interface Benefit {
  id: number;
  title: string;
  desc: string;
  image: string;
}

interface Property {
  id: number;
  name: string;
  location: string;
  image: string;
  logo: string;
}

export const WhyDubai: React.FC = () => {
  const benefits: Benefit[] = [
    {
      id: 1,
      title: 'Higher Rental Yields',
      desc: 'Investors can earn rental yields of up to 8-10%** annually, surpassing many global markets.',
      image: '/assets/Higher_Rental_Yields-_Mobile_1.webp',
    },
    {
      id: 2,
      title: 'TAX FREE ENVIRONMENT',
      desc: 'The UAE offers zero income, capital gains, and wealth tax, maximising returns for investors.',
      image: '/assets/Zero_Taxes-_Mobile_1.webp',
    },
    {
      id: 3,
      title: 'UAE GOLDEN VISA BENEFITS',
      desc: 'Real estate investments in Dubai can grant you long-term residency and exclusive Golden Visa benefits.',
      image: '/assets/UAE_Golden_Visa-_Mobile.jpg',
    },
    {
      id: 4,
      title: 'Premium Healthcare',
      desc: 'With strong healthcare investments, the city is ideal for supporting your health and wellbeing.',
      image: '/assets/Premium_Healthcare-_Mobile_1.webp',
    },
    {
      id: 5,
      title: 'World Class Education',
      desc: 'Dubai offers top-tier schools and universities with globally recognized curricula, ideal for families and expatriates.',
      image: '/assets/World_Class_Education-_Mobile_1.webp',
    },
    {
      id: 6,
      title: 'Entertainment Hub',
      desc: 'From iconic landmarks to theme parks and cultural events, Dubai is a world-class entertainment destination.',
      image: '/assets/Entertainment_Hub-_Mobile_1.webp',
    },
    {
      id: 7,
      title: 'Communal Safety',
      desc: 'The UAE ranks among the world\'s safest nations, with a well-developed, effective law enforcement system.',
      image: '/assets/Communal_Safety-_Mobile_1.webp',
    },
    {
      id: 8,
      title: 'Touristic Appeal',
      desc: 'Dubai’s iconic landmarks, luxury shopping, and vibrant culture make it a top global tourist destination.',
      image: '/assets/Touristic_Appeal-_Mobile.jpg',
    },
  ];

  const properties: Property[] = [
    {
      id: 1,
      name: 'MANDARIN ORIENTAL',
      location: 'Male, Maldives',
      image: '/assets/IMG_-_Mandarin_oriental.jpg',
      logo: '/assets/MOMD_1.svg',
    },
    {
      id: 2,
      name: 'DAMAC HILLS BAGHDAD',
      location: 'Baghdad, Irak',
      image: '/assets/370x205.jpg',
      logo: '/assets/DAMAC_Hills_-_Baghdad_-_Logo_EN.svg',
    },
    {
      id: 3,
      name: 'DAMAC TOWERS RIYADH',
      location: 'Riyadh, Saudi Arabia',
      image: '/assets/IMG_-_damac_tower_riyadh.jpg',
      logo: '/assets/DAMAC-Tower-Riyadh-Logo-White-En.svg',
    },
    {
      id: 4,
      name: 'SEAVIEWS',
      location: 'Doha, Qatar',
      image: '/assets/IMG_-_Seaview.jpg',
      logo: '/assets/Burj_DAMAC.svg',
    },
    {
      id: 5,
      name: 'DAMAC TOWER NINE ELMS',
      location: 'London, United Kingdom',
      image: '/assets/IMG_-_DAMAC_tower_nine_elms.jpg',
      logo: '/assets/Logo_-_DAMAC_tower_nine_elms.svg',
    },
    {
      id: 6,
      name: 'DAMAC TOWER AMMAN',
      location: 'Amman, Jordan',
      image: '/assets/IMG_-_Damac_Tower_Amman.jpg',
      logo: '/assets/Logo_-_Damac_Tower_Amman.png',
    },
    {
      id: 7,
      name: 'DAMAC TOWER BEIRUT',
      location: 'Beirut, Lebanon',
      image: '/assets/IMG_-_damac_tower_beirut.jpg',
      logo: '/assets/Logo_-_damac_tower_beirut.png',
    },
  ];

  // Benefits slider state
  const [benefitIndex, setBenefitIndex] = useState(0);

  const prevBenefit = () => {
    setBenefitIndex((prev) => (prev === 0 ? benefits.length - 1 : prev - 1));
  };

  const nextBenefit = () => {
    setBenefitIndex((prev) => (prev === benefits.length - 1 ? 0 : prev + 1));
  };

  // Global Presence slider state
  const [propIndex, setPropIndex] = useState(0);

  const prevProp = () => {
    setPropIndex((prev) => (prev === 0 ? properties.length - 1 : prev - 1));
  };

  const nextProp = () => {
    setPropIndex((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-24 text-black px-m overflow-hidden border-b border-gray-100">
      <div className="container mx-auto">
        {/* Section A: WHY DUBAI */}
        <div className="mb-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-xs uppercase font-primary tracking-widest text-gold font-medium mb-s">
                Investment Destination
              </h2>
              <h3 className="text-2xl md:text-3xl font-primary uppercase tracking-wider text-black font-normal">
                WHY DUBAI?
              </h3>
            </div>
            <div className="flex gap-s z-20">
              <button
                onClick={prevBenefit}
                type="button"
                className="w-[40px] h-[40px] rounded-full bg-white hover:bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm text-black transition-colors"
                aria-label="Previous benefit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current">
                  <path d="M15 19l-7-7 7-7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
              <button
                onClick={nextBenefit}
                type="button"
                className="w-[40px] h-[40px] rounded-full bg-white hover:bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm text-black transition-colors"
                aria-label="Next benefit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current">
                  <path d="M9 5l7 7-7 7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Benefits Detail Card */}
          <div className="bg-gray-50 rounded-[30px] p-m md:p-xl border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-xl items-center min-h-[350px]">
            <div className="w-full lg:w-1/2 relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-inner group">
              <img
                src={benefits[benefitIndex].image}
                alt={benefits[benefitIndex].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-s">
              <div className="text-gold font-primary text-s font-semibold uppercase tracking-widest mb-s">
                Benefit {benefitIndex + 1} of {benefits.length}
              </div>
              <h4 className="text-xl md:text-2xl font-primary uppercase tracking-wide font-medium mb-m text-black">
                {benefits[benefitIndex].title}
              </h4>
              <p className="text-gray-600 font-secondary text-m leading-relaxed">
                {benefits[benefitIndex].desc}
              </p>
            </div>
          </div>
        </div>

        {/* Section B: Our Global Presence */}
        <div>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-xs uppercase font-primary tracking-widest text-gold font-medium mb-s">
                International Projects
              </h2>
              <h3 className="text-2xl md:text-3xl font-primary uppercase tracking-wider text-black font-normal">
                Our Global Presence
              </h3>
            </div>
            <div className="flex gap-s z-20">
              <button
                onClick={prevProp}
                type="button"
                className="w-[40px] h-[40px] rounded-full bg-white hover:bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm text-black transition-colors"
                aria-label="Previous property"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current">
                  <path d="M15 19l-7-7 7-7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
              <button
                onClick={nextProp}
                type="button"
                className="w-[40px] h-[40px] rounded-full bg-white hover:bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm text-black transition-colors"
                aria-label="Next property"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current">
                  <path d="M9 5l7 7-7 7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Properties Slider */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-l">
            {/* Show three properties starting from propIndex (circular) */}
            {[0, 1, 2].map((offset) => {
              const itemIndex = (propIndex + offset) % properties.length;
              const prop = properties[itemIndex];
              return (
                <div
                  key={prop.id}
                  className="bg-gray-900 text-white rounded-2xl overflow-hidden relative h-[360px] shadow-lg group transition-all duration-300"
                >
                  <img
                    src={prop.image}
                    alt={prop.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10"></div>
                  
                  {/* Property Details */}
                  <div className="absolute inset-0 p-l flex flex-col justify-between items-start z-20">
                    <img
                      src={prop.logo}
                      alt={prop.name}
                      className="max-h-[50px] w-auto object-contain max-w-[80%] self-start"
                    />
                    <div className="w-full">
                      <h4 className="font-primary font-medium text-m md:text-lg uppercase tracking-wider text-white m-0">
                        {prop.name}
                      </h4>
                      <p className="text-gray-300 font-secondary text-s mt-[4px] mb-0">
                        {prop.location}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
