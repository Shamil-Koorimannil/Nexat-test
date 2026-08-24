import React from 'react';

interface Stat {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
}

export const StatsBlock: React.FC = () => {
  const stats: Stat[] = [
    {
      id: 1,
      value: 'Est. 2002',
      label: 'Founded in Dubai, UAE',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
    {
      id: 2,
      value: '50,000+',
      label: 'Luxury Homes Delivered',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
    },
    {
      id: 3,
      value: '54,000+',
      label: 'Units Under Construction',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
    },
    {
      id: 4,
      value: '100M+ SQFT',
      label: 'Project Area Managed',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="15" y1="3" x2="15" y2="21"></line>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="3" y1="15" x2="21" y2="15"></line>
        </svg>
      ),
    },
    {
      id: 5,
      value: '8 Communities',
      label: 'Master-Planned Communities',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      id: 6,
      value: '12+ Countries',
      label: 'Global Development Presence',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-24 text-black px-m flex flex-col justify-center items-center w-full h-full min-h-screen">
      <div className="container mx-auto max-w-[1000px]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-sans font-semibold uppercase tracking-[0.25em] mb-s block">
            Developer Statistics
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-black uppercase tracking-wider font-normal">
            THE PREMIER LUXURY PROPERTY DEVELOPER
          </h2>
          <div className="w-[50px] h-[1px] bg-black/20 mx-auto mt-m"></div>
        </div>

        {/* Stats 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-xl">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center text-center p-l bg-gray-50/50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-m text-black bg-white p-s rounded-full shadow-sm border border-gray-100">
                {stat.icon}
              </div>
              <span className="text-xl md:text-2xl font-serif text-black font-semibold tracking-wide">
                {stat.value}
              </span>
              <p className="text-gray-500 font-secondary text-sm mt-xs m-0">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
