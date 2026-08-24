import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    unitType: 'Apartment',
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.agree) {
      alert('Please fill out all fields and agree to the terms.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact-section" className="bg-black py-24 text-white px-m relative">
      <div className="container mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-stretch">
          {/* Left Column: Info & Imagery */}
          <div className="relative rounded-[30px] overflow-hidden min-h-[400px] flex flex-col justify-end p-xl bg-gray-900 group">
            <img
              src="/assets/Our_Expertise_1_1.webp"
              alt="Our Expertise"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            
            <div className="relative z-10">
              <img
                src="/assets/damac-white.svg"
                alt="Damac Logo"
                className="max-h-[30px] w-auto mb-l object-contain"
              />
              <h3 className="text-2xl md:text-3xl font-primary uppercase tracking-wider mb-m font-normal text-white">
                Our Expertise
              </h3>
              <p className="text-gray-300 font-secondary text-s leading-relaxed mb-0 max-w-[450px]">
                Our luxury sales advisors bring a wealth of experience in assisting owners and investors in discovering properties that align seamlessly with their needs. With extensive knowledge of property trends, a solid grasp of industry insights, and an in-depth understanding of your goals.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="bg-white text-black rounded-[30px] p-m md:p-xl flex flex-col justify-center shadow-2xl border border-gray-100">
            {submitted ? (
              <div className="text-center py-xl">
                <div className="text-gold text-5xl mb-m">✓</div>
                <h3 className="text-xl md:text-2xl font-primary uppercase tracking-wide font-medium text-black mb-s">
                  Thank You
                </h3>
                <p className="text-gray-600 font-secondary text-m">
                  Your request has been received. Our luxury sales advisors will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-m">
                <div className="mb-s">
                  <h3 className="text-xl md:text-2xl font-primary uppercase tracking-wide font-medium text-black m-0">
                    Get In Touch
                  </h3>
                  <p className="text-gray-500 font-secondary text-s mt-[4px]">
                    Register your interest below for exclusive payment plans.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-m">
                  {/* First Name */}
                  <div className="flex flex-col">
                    <label className="text-gray-500 text-xs font-primary font-medium uppercase mb-xs">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="border border-gray-200 focus:border-black rounded-lg py-s px-m font-secondary text-m focus:outline-none transition-colors"
                      placeholder="e.g. John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col">
                    <label className="text-gray-500 text-xs font-primary font-medium uppercase mb-xs">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="border border-gray-200 focus:border-black rounded-lg py-s px-m font-secondary text-m focus:outline-none transition-colors"
                      placeholder="e.g. Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-gray-500 text-xs font-primary font-medium uppercase mb-xs">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="border border-gray-200 focus:border-black rounded-lg py-s px-m font-secondary text-m focus:outline-none transition-colors"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label className="text-gray-500 text-xs font-primary font-medium uppercase mb-xs">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="border border-gray-200 focus:border-black rounded-lg py-s px-m font-secondary text-m focus:outline-none transition-colors"
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                {/* Unit Preference */}
                <div className="flex flex-col">
                  <label className="text-gray-500 text-xs font-primary font-medium uppercase mb-xs">
                    Preferred Property Type
                  </label>
                  <select
                    className="border border-gray-200 focus:border-black rounded-lg py-s px-m font-secondary text-m focus:outline-none bg-white transition-colors"
                    value={formData.unitType}
                    onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                  >
                    <option value="Apartment">Apartments</option>
                    <option value="Villa">Villas</option>
                    <option value="Townhouse">Townhouses</option>
                    <option value="Penthouse">Penthouses</option>
                  </select>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="flex items-start gap-s mt-s">
                  <input
                    type="checkbox"
                    id="agree-checkbox"
                    className="mt-[4px] h-[16px] w-[16px] accent-black cursor-pointer"
                    checked={formData.agree}
                    onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    required
                  />
                  <label htmlFor="agree-checkbox" className="text-xs text-gray-500 font-secondary cursor-pointer leading-relaxed">
                    I agree to the <a href="#" className="underline text-black">terms and conditions</a> and privacy policy, allowing DAMAC to contact me with property updates.
                  </label>
                </div>

                {/* Submit button */}
                <div className="mt-m">
                  <button
                    type="submit"
                    className="w-full text-center py-s px-xl rounded-lg font-semibold uppercase tracking-wider text-white bg-black hover:bg-gray-900 transition-colors"
                  >
                    SUBMIT REQUEST
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
