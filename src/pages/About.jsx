import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            About <span className="text-primary">Our Company</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We are passionate about delivering top-notch products and services
            that make life easier for our customers. Our team of experts is
            dedicated to innovation, quality, and customer satisfaction.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-left">
          Our Story
        </h2>
        <p className="text-gray-600 max-w-3xl mb-12 text-left">
          Founded with the vision of redefining excellence, our company started
          as a small team of enthusiasts and has grown into a trusted brand
          serving thousands of customers. We believe in building meaningful
          relationships and providing solutions that truly make a difference.
        </p>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-md transition">
            <div className="text-primary text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Innovation
            </h3>
            <p className="text-gray-600">
              We constantly innovate to provide cutting-edge solutions that
              enhance our customers’ experience.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-md transition">
            <div className="text-primary text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Quality
            </h3>
            <p className="text-gray-600">
              Our commitment to quality ensures that every product or service we
              deliver meets the highest standards.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-md transition">
            <div className="text-primary text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Customer Focus
            </h3>
            <p className="text-gray-600">
              We put our customers at the heart of everything we do, ensuring
              their satisfaction and success.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Ready to Experience Excellence?
          </h2>
          <p className="text-white/80 mb-6">
            Join thousands of satisfied customers who trust us to deliver
            quality products and services.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-6 py-3 rounded-xl font-semibold shadow hover:shadow-md transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
