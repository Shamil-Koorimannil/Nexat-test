import React from 'react';

interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
}

export const PremierDeveloper: React.FC = () => {
  const stats: StatItem[] = [
    {
      id: 1,
      value: 'Est. 2002',
      label: 'In Dubai, UAE',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" className="stroke-current text-gold">
          <rect width="24" height="24" fill="transparent"></rect>
          <path d="M5.67566 12.15L3.57488 17.1383L3.16566 18.11H4.22H7.58C10.2033 18.11 11.7928 17.9217 13.3477 17.1835C14.282 16.7487 14.9231 16.0463 15.4175 15.2544C15.876 14.5201 16.2319 13.6676 16.5754 12.8447C16.5956 12.7964 16.6157 12.7481 16.6358 12.7C17.3048 11.1006 17.4646 9.57945 16.6912 8.43543C15.9198 7.29439 14.4158 6.81997 12.49 6.81997H6.26649L6.63823 5.91997H16.73C19.7906 5.91997 21.6438 6.55868 22.5661 7.59419C23.4404 8.58539 23.605 10.0378 22.694 12.2203C22.1259 13.5799 21.2466 14.83 20.0507 15.9698C18.765 17.16 17.3256 18.0054 15.718 18.5228C14.2546 18.9821 12.2154 19.23 9.57 19.23H1.05305L4.02531 12.15H5.67566Z" strokeWidth="1.4"></path>
        </svg>
      ),
    },
    {
      id: 2,
      value: '50,000+',
      label: 'Homes delivered*',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" className="stroke-current text-gold">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
    },
    {
      id: 3,
      value: '54,000+',
      label: 'In planning and progress*',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" className="stroke-current text-gold">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.30469 24H17.696V5H8.30469V24Z" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M19.7812 24H23.9552V14H19.7812V24Z" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M2.04297 24H6.21688V14H2.04297V24Z" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M5.17578 14V13" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M20.8242 14V13" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M12.9988 3V1M11.4336 5H14.564V3H11.4336V5Z" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M10.3906 8H15.608" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M10.3906 11H15.608" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M10.3906 14H15.608" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M10.3906 17H15.608" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M10.3906 20H15.608" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
    },
    {
      id: 4,
      value: '100+ M SQFT',
      label: 'Project area in planning and progress',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" className="stroke-current text-gold">
          <path d="M23.31 0.679993H0.679993V23.31H23.31V0.679993Z" strokeWidth="1.4" strokeMiterlimit="10"></path>
          <path d="M18.1 23.14C18.1 23.14 19.52 19.47 23.37 18.12" strokeWidth="1.4" strokeMiterlimit="10"></path>
          <path d="M12.24 23.36C12.24 23.36 14.42 21.96 16.09 20.5C17.76 19.04 22.5 12.75 23.25 12" strokeWidth="1.4" strokeMiterlimit="10"></path>
          <path d="M6.5 23.25C6.5 23.25 10.44 18.95 11.65 16.5C12.86 14.05 16.4 11.05 17.33 10.36C18.43 9.53999 23.46 5.76999 23.46 5.76999" strokeWidth="1.4" strokeMiterlimit="10"></path>
          <path d="M1.78 23.36C1.78 23.36 4.38 17.18 6.73 13.98C7.4 13.07 8.25 12.16 9.13 11.34C10.98 9.6 13.07 8.15 15.27 6.89C17.14 5.82 19.93 4.13 22 0.5" strokeWidth="1.4" strokeMiterlimit="10"></path>
        </svg>
      ),
    },
    {
      id: 5,
      value: '8',
      label: 'Master communities',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" className="stroke-current text-gold">
          <path d="M6.54001 6.32L12.18 0.690002L17.81 6.32" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M17.81 6.28V6.32V10.02" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M6.54001 6.28V6.32V10.01" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M10.27 13.74V10.35H13.94V13.51" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M11.99 15.41V23.3H23.26V15.41V15.45L17.63 9.82L12 15.45V15.41H11.99Z" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M15.79 23.3V19.48H19.46V23.3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M0.730011 15.41V23.3H12V15.41V15.45L6.37001 9.82L0.730011 15.45V15.41Z" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M4.52002 23.3V19.48H8.19002V23.3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full text-black">
      {/* Banner Intro */}
      <div
        className="py-32 bg-cover bg-center bg-no-repeat flex flex-col items-center text-center px-m"
        style={{
          backgroundImage: `url('https://images.ctfassets.net/zoq5l15g49wj/6KpYRqDnb8M4dmTETLhJ0P/5cce18c529495eb351323494738ca0f2/Recognitions-background_1.webp?fm=webp&w=1920&q=80&fit=fill')`,
        }}
      >
        <div className="max-w-[800px] flex flex-col items-center">
          <img
            width="100"
            height="101"
            className="mx-auto"
            src="/assets/damac-gold.svg"
            alt="damac-gold"
          />
          <h1 className="font-normal uppercase font-primary text-l md:text-xl mt-[60px] mb-l tracking-widest text-black">
            The premier luxury property developer in Dubai
          </h1>
          <a className="btn btn-medium btn-tertiary-black px-xl border border-black font-semibold uppercase hover:bg-black hover:text-white transition-colors duration-300" href="#">
            Discover Damac
          </a>
        </div>
      </div>

      {/* Stats List */}
      <div className="bg-gray-50 py-16 border-t border-b border-gray-100">
        <ul className="flex flex-wrap justify-between items-start gap-y-l max-w-[1200px] mx-auto px-m w-full">
          {stats.map((stat) => (
            <li key={stat.id} className="flex flex-col items-center justify-center text-center flex-1 min-w-[180px] p-s">
              <div className="mb-m flex justify-center text-gold stroke-gold stroke-inherit">
                {stat.icon}
              </div>
              <p className="font-medium text-center font-primary text-l md:text-xl m-0">
                {stat.value}
              </p>
              <p className="text-center font-secondary mt-[4px] text-gray-500 text-s max-w-[160px]">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
