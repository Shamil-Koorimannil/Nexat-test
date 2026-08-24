import React, { useState } from 'react';

interface Brand {
  id: string;
  name: string;
  logo: string;
  detailLogo: string;
  detailImage: string;
  title: string;
  description: string;
}

export const Collaborations: React.FC = () => {
  const brands: Brand[] = [
    {
      id: 'cavalli',
      name: 'Roberto Cavalli',
      logo: '/assets/Roberto_Cavalli_logo.svg',
      detailLogo: '/assets/Roberto_Cavalli_logo(1).svg',
      detailImage: '/assets/653941273-roberto-cavalli-3.webp',
      title: 'Cavalli Tower & Couture by Cavalli',
      description: 'Experience fashion-infused luxury living in Dubai Marina and Business Bay. Interiors designed by Cavalli, overlooking the Palm Jumeirah and Dubai canal.',
    },
    {
      id: 'mandarin',
      name: 'Mandarin Oriental',
      logo: '/assets/image_1.svg',
      detailLogo: '/assets/MOMD_Black.svg',
      detailImage: '/assets/653941242-mandarin-oriental-1_1.webp',
      title: 'The Residences - Mandarin Oriental Maldives',
      description: 'Exclusive beachfront living paired with the legendary service of Mandarin Oriental. Private residences nestled in paradise.',
    },
    {
      id: 'grisogono',
      name: 'de GRISOGONO',
      logo: '/assets/De_Grisogono.svg',
      detailLogo: '/assets/De_Grisogono(1).svg',
      detailImage: '/assets/647994200-4x3-gallery-9.webp',
      title: 'Safa Two de GRISOGONO',
      description: 'Ultra-luxury apartments themed around rubies and diamonds. Inspired by the beauty of nature and fine Swiss craftsmanship.',
    },
    {
      id: 'chelsea',
      name: 'Chelsea FC',
      logo: '/assets/Chelsea_FC_Logo_BLACK.png',
      detailLogo: '/assets/Chelsea_Chelsea_-_Black.svg',
      detailImage: '/assets/CHELSEA.jpg',
      title: 'Chelsea Residences',
      description: 'An exclusive collaboration offering football fans and residents premium curated spaces and lifestyle choices.',
    },
    {
      id: 'paramount',
      name: 'Paramount Hotels',
      logo: '/assets/Logo_-_Paramount_-_Black.svg',
      detailLogo: '/assets/Paramount.svg',
      detailImage: '/assets/Paramount_1.webp',
      title: 'DAMAC Towers by Paramount',
      description: 'Hollywood-inspired living. A collection of four towers offering hotel apartments and private residences, featuring distinct cinematic design elements.',
    },
    {
      id: 'trump',
      name: 'Trump',
      logo: '/assets/Logo_-_Trump_-_Black.svg',
      detailLogo: '/assets/trump.svg',
      detailImage: '/assets/653941279-trump-1_1.webp',
      title: 'The Trump Estates at DAMAC Hills',
      description: 'Private gated community featuring luxury villas overlooking the championship course at the Trump International Golf Club.',
    },
    {
      id: 'radisson',
      name: 'Radisson',
      logo: '/assets/Logo_-_Radisson_-_Black.svg',
      detailLogo: '/assets/Radisson.svg',
      detailImage: '/assets/653941248-radisson-1.webp',
      title: 'Radisson Dubai DAMAC Hills',
      description: 'World-class hospitality nestled within the lush golf communities. Clean layouts, contemporary rooms, and bespoke amenities.',
    },
    {
      id: 'rotana',
      name: 'Rotana',
      logo: '/assets/Logo_-_Rotana_-_Black.svg',
      detailLogo: '/assets/Rotana.svg',
      detailImage: '/assets/Rotana.webp',
      title: 'Edge by Rotana at DAMAC Hills 2',
      description: 'Bespoke, vibrant spaces offering absolute comfort and modern living options for contemporary global travelers.',
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState<Brand>(brands[0]);

  return (
    <section className="bg-white py-24 text-black px-m">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-primary uppercase tracking-wider text-black font-normal mb-s">
            A new realm of curated collaborations
          </h2>
          <p className="text-gray-600 font-secondary max-w-[700px] mx-auto text-m">
            DAMAC has worked closely with some of the world's most sought-after purveyors of luxury to create truly exquisite environments.
          </p>
        </div>

        {/* Brand Logos Row */}
        <div className="flex flex-wrap justify-center items-center gap-l md:gap-xl mb-16 border-b border-gray-100 pb-l">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setSelectedBrand(brand)}
              className={`p-s flex justify-center items-center rounded-xl transition-all duration-300 ${
                selectedBrand.id === brand.id
                  ? 'bg-gray-100 scale-105 border-b-2 border-black'
                  : 'hover:bg-gray-50 opacity-60 hover:opacity-100'
              }`}
              style={{ width: '130px', height: '60px' }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain filter"
              />
            </button>
          ))}
        </div>

        {/* Brand Details Card */}
        <div className="bg-gray-50 rounded-[30px] p-m md:p-xl overflow-hidden transition-all duration-500 hover:shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            {/* Image Side */}
            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-md group">
              <img
                src={selectedBrand.detailImage}
                alt={selectedBrand.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Description Side */}
            <div className="flex flex-col justify-center px-s lg:px-m">
              <img
                src={selectedBrand.detailLogo}
                alt={selectedBrand.name}
                className="max-h-[60px] w-auto object-contain self-start mb-l"
              />
              <h3 className="text-xl md:text-2xl font-primary uppercase tracking-wide font-medium mb-m text-black">
                {selectedBrand.title}
              </h3>
              <p className="text-gray-600 font-secondary text-m leading-relaxed mb-xl">
                {selectedBrand.description}
              </p>
              <div>
                <a
                  href="#contact-section"
                  className="btn btn-medium btn-primary-black px-xl tracking-wider font-semibold inline-block text-center"
                >
                  EXPLORE COLLABORATIONS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
