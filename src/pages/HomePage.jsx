import React, { useRef } from "react";
import {
  browseBy,
  heroStatics,
  partners,
  testimonials,
} from "../constants/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProductsDisplay from "../components/ProductsDisplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const carouselRef = useRef(null);

  useGSAP(() => {
    gsap.from("#left-content", {
      y: -200,
      x: -200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#left-content",
        start: "top 80%",
        toggleActions: "restart pause resume pause",
      },
    });

    gsap.from("#right-content", {
      y: 200,
      x: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#right-content",
        start: "top 80%",
        toggleActions: "restart pause resume pause",
      },
    });

    gsap.from(".testimonial-card", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".testimonial-card",
        start: "top 90%",
      },
    });
  });

  const scroll = (dir) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: dir === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* HERO */}
      <section id="home" className="relative overflow-hidden app-container">
        <div className="py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div id="left-content" className="space-y-6">
              <h1 className="text-3xl md:text-4xl md:w-[70%] lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                FIND PRODUCTS THAT MATCH YOUR STYLE
              </h1>
              <p className="text-gray-800 md:text-sm lg:text-base xl:text-lg max-w-lg">
                Browse through our diverse range of meticulously crafted
                products, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="max-sm:w-full inline-block px-6 py-3 bg-black text-white rounded-full text-sm md:text-base hover:bg-gray-800 transition-colors">
                Shop Now
              </button>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 lg:gap-10 pt-4">
                {heroStatics.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <h2 className="font-bold text-xl md:text-2xl xl:text-3xl">
                      {stat.stat}
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-700">
                      {stat.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right content */}
            <div
              id="right-content"
              className="relative w-full flex justify-center lg:justify-end"
            >
              <img
                className="absolute top-0 left-0 w-10 md:w-14 lg:w-16 animate-pulse z-50"
                src="/bigStar.png"
                alt="decorative star"
              />
              <img
                className="absolute bottom-0 right-0 w-6 md:w-10 lg:w-12 animate-pulse delay-150 z-50"
                src="/smallStar.png"
                alt="decorative star"
              />

              <div className="relative z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <img
                  className="rounded-3xl shadow-xl w-full object-cover"
                  src="/shopii-hero.png"
                  alt="Hero showcasing clothes"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <div className="bg-black flex flex-wrap p-3 md:p-5 justify-between">
        {partners.map((partner) => (
          <div key={partner.img}>
            <img
              src={partner.img}
              alt="partners-logo"
              className="md:w-full w-23"
            />
          </div>
        ))}
      </div>

      {/* New Arrivals */}
      <div className="app-container">
        <ProductsDisplay title="NEW ARRIVALS" />
      </div>

      {/* Top Selling */}
      <div className="app-container">
        <ProductsDisplay title="TOP SELLING" />
      </div>

      {/* Browse By */}
      <div className="app-container">
        <h2 className="section-text">BROWSE BY DRESS STYLE</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {browseBy.map((item, index) => (
            <div
              key={item.id}
              className={`relative bg-cover max-sm:h-40 bg-center rounded-xl overflow-hidden
          flex items-end p-6 text-white 
          ${index === 1 || index === 2 ? "md:col-span-2 md:h-80" : ""}`}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="bg-black/40 absolute inset-0"></div>
              <h3 className="relative z-10 font-bold text-xl">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-text">TESTIMONIALS</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Updated Testimonial Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 no-scrollbar"
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="
                testimonial-card
                bg-white
                rounded-3xl
                shadow-xl
                p-8
                flex-shrink-0
                snap-center
                relative
                w-[90vw] sm:w-[500px] lg:w-[400px] xl:w-[450px]
              "
            >
              {/* Quote Icon */}
              <svg
                className="absolute top-6 left-6 text-gray-200"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10 7H6l4-4V3H2v6l4 4h4V7zm10 0H14l4-4V3h-8v6l4 4h4V7z" />
              </svg>

              {/* Message */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10 pt-10">
                {testimonial.message}
              </p>

              {/* Star Rating - Added for visual appeal */}
              <div className="flex text-yellow-400 mb-4 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.374 2.454a1 1 0 00-.364 1.118l1.287 3.96a1 1 0 01-1.54 1.118l-3.374-2.454a1 1 0 00-1.176 0l-3.374 2.454a1 1 0 01-1.54-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.091 9.38c-.783-.57-.381-1.81.588-1.81h4.167a1 1 0 00.95-.69l1.286-3.96z" />
                  </svg>
                ))}
              </div>

              {/* User Info */}
              <h4 className="font-bold text-lg text-gray-900 relative z-10">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
