import React from 'react';
import { partners } from '../constants/constants';

const Brands = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-16 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Our Trusted Partners
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We proudly collaborate with these outstanding brands to deliver the best
            experience to our customers.
          </p>
        </div>

        {/* Logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
          {partners.map((brand) => (
            <div
              key={brand.img}
              className="flex items-center justify-center p-4 bg-black rounded-xl shadow hover:shadow-md transition"
            >
              <img
                src={brand.img}
                alt={brand.name || 'brand'}
                className="max-h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
