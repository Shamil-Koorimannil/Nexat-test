import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  image: string;
  video?: string;
  logo?: string;
  title: string;
  ctaText: string;
  ctaLink: string;
}

export const HeroCarousel: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      image: '/assets/DAMAC_Islands-Homepage_Hero_16x9.jpg',
      video: 'https://videos.ctfassets.net/zoq5l15g49wj/6sV7wR0DCouDGUkY0XwTp3/2a1b5244d0c17e367ab6e27c978e20e5/DI2_-_LAUNCH_FILM_-ANTIGUA-16X9-NoText.mp4',
      title: 'THE LAST SLICE OF PARADISE',
      ctaText: 'Explore',
      ctaLink: '#',
    },
    {
      id: 2,
      image: '/assets/DAMAC_Lagoons_District-Homepage_Hero_16x9.jpg',
      video: 'https://videos.ctfassets.net/zoq5l15g49wj/5Uw7lRgvsNhy06jbKxHQc9/c27937f1e0cd8ca2a97b9693c623508e/Lagoons_District_16X9.mp4',
      logo: '/assets/DAMAC_Lagoons_District_Logo_EN-WHITE.svg',
      title: 'STEP OUT OF WORK. STEP INTO LIVING.',
      ctaText: 'Explore',
      ctaLink: '#',
    },
    {
      id: 3,
      image: '/assets/Desktop_Image.webp',
      video: 'https://videos.ctfassets.net/zoq5l15g49wj/pqTVpSmFEB01EJxLuBPuI/2d42f3945c3e3edc327d9053cce64d38/BRAND_FILM_16_X_9_EN_05_WEBSITE_CLEAN_Mute.mp4',
      title: 'A NEW REALM OF CURATED COLLABORATIONS',
      ctaText: 'Explore',
      ctaLink: '#',
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Dropdown States
  const [selectedCity, setSelectedCity] = useState('All locations');
  const [selectedLocation, setSelectedLocation] = useState('Any');
  const [selectedProject, setSelectedProject] = useState('Any');

  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);

  const cities = ['All locations', 'Dubai', 'Abu Dhabi', 'Ras Al Khaimah'];
  const locations = ['Any', 'Business Bay', 'Dubai Marina', 'DAMAC Lagoons', 'Jumeirah Village Circle', 'Dubai Harbour'];
  const projects = ['Any', 'Cavalli Tower', 'ELO 3', 'Safa Gate', 'Couture by Cavalli', 'DAMAC Casa'];

  return (
    <div className="w-full h-screen relative overflow-hidden bg-black">
      {/* Slides Container */}
      <div className="w-full h-full relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute z-10 w-full h-full bg-black/40"></div>
            {slide.video ? (
              <video
                src={slide.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
                poster={slide.image}
              />
            ) : (
              <img src={slide.image} className="absolute top-0 left-0 w-full h-full object-cover" alt="" />
            )}

            {/* Slide Content */}
            <div className="absolute bottom-0 z-20 left-1/2 -translate-x-1/2 mb-[160px] w-full px-m text-center">
              <div className="flex flex-col items-center">
                {slide.logo && (
                  <img
                    alt={slide.title}
                    width="222"
                    height="157"
                    className="mb-m max-h-[80px] w-auto object-contain"
                    src={slide.logo}
                  />
                )}
                <span className="font-medium text-white uppercase font-primary text-l md:text-2xl tracking-wide max-w-[800px]">
                  {slide.title}
                </span>
                <div className="mt-l">
                  <a href={slide.ctaLink} className="btn btn-primary-white px-xl py-s font-medium tracking-wider">
                    {slide.ctaText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Search Filter Box */}
      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 z-30 w-full max-w-[1000px] px-m">
        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-m border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-m items-center">
            {/* City Dropdown */}
            <div className="relative">
              <label className="text-gray-400 text-xs uppercase font-primary font-medium tracking-wider block mb-xs">
                City / Region
              </label>
              <button
                type="button"
                className="w-full text-left bg-white/10 border border-white/20 hover:border-white/40 text-white rounded-xl py-s px-m flex justify-between items-center transition-colors"
                onClick={() => {
                  setCityDropdownOpen(!cityDropdownOpen);
                  setLocationDropdownOpen(false);
                  setProjectDropdownOpen(false);
                }}
              >
                <span className="font-medium">{selectedCity}</span>
                <span className="text-gray-400">▼</span>
              </button>
              {cityDropdownOpen && (
                <div className="absolute bottom-[110%] left-0 w-full bg-white text-black rounded-xl shadow-2xl py-xs z-50">
                  {cities.map((city) => (
                    <button
                      key={city}
                      type="button"
                      className="w-full text-left py-s px-m hover:bg-gray-100 transition-colors"
                      onClick={() => {
                        setSelectedCity(city);
                        setCityDropdownOpen(false);
                      }}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Location Dropdown */}
            <div className="relative">
              <label className="text-gray-400 text-xs uppercase font-primary font-medium tracking-wider block mb-xs">
                Community / Area
              </label>
              <button
                type="button"
                className="w-full text-left bg-white/10 border border-white/20 hover:border-white/40 text-white rounded-xl py-s px-m flex justify-between items-center transition-colors"
                onClick={() => {
                  setLocationDropdownOpen(!locationDropdownOpen);
                  setCityDropdownOpen(false);
                  setProjectDropdownOpen(false);
                }}
              >
                <span className="font-medium">{selectedLocation}</span>
                <span className="text-gray-400">▼</span>
              </button>
              {locationDropdownOpen && (
                <div className="absolute bottom-[110%] left-0 w-full bg-white text-black rounded-xl shadow-2xl py-xs z-50 max-h-[200px] overflow-y-auto">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      className="w-full text-left py-s px-m hover:bg-gray-100 transition-colors"
                      onClick={() => {
                        setSelectedLocation(loc);
                        setLocationDropdownOpen(false);
                      }}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Dropdown */}
            <div className="relative">
              <label className="text-gray-400 text-xs uppercase font-primary font-medium tracking-wider block mb-xs">
                Project Name
              </label>
              <button
                type="button"
                className="w-full text-left bg-white/10 border border-white/20 hover:border-white/40 text-white rounded-xl py-s px-m flex justify-between items-center transition-colors"
                onClick={() => {
                  setProjectDropdownOpen(!projectDropdownOpen);
                  setCityDropdownOpen(false);
                  setLocationDropdownOpen(false);
                }}
              >
                <span className="font-medium">{selectedProject}</span>
                <span className="text-gray-400">▼</span>
              </button>
              {projectDropdownOpen && (
                <div className="absolute bottom-[110%] left-0 w-full bg-white text-black rounded-xl shadow-2xl py-xs z-50 max-h-[200px] overflow-y-auto">
                  {projects.map((proj) => (
                    <button
                      key={proj}
                      type="button"
                      className="w-full text-left py-s px-m hover:bg-gray-100 transition-colors"
                      onClick={() => {
                        setSelectedProject(proj);
                        setProjectDropdownOpen(false);
                      }}
                    >
                      {proj}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-m flex justify-end">
            <button
              type="button"
              className="golden-gradient text-black font-semibold rounded-xl py-s px-xl hover:opacity-90 transition-opacity"
              onClick={() => alert(`Searching for properties in City: ${selectedCity}, Location: ${selectedLocation}, Project: ${selectedProject}`)}
            >
              Search Properties
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Indicator Dots */}
      <div className="absolute right-m top-1/2 -translate-y-1/2 z-30 flex flex-col gap-s">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${
              index === activeSlide ? 'bg-white scale-125' : 'bg-white/40'
            }`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
