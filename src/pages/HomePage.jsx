import React from "react";
import { heroStatics, partners } from "../constants/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProductsDisplay from "../components/ProductsDisplay";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useGSAP(() => {
    // left content animates when left content enters view
    gsap.from("#left-content", {
      y: -200,
      x: -200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#left-content",
        start: "top 80%", // when top of left-content hits 80% viewport
        toggleActions: "restart pause resume pause",
      },
    });

    // right content animates when right content enters view
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
  });

  return (
    <>
    <section id="home" className="relative overflow-hidden app-container">
      <div className="py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div id="left-content" className="space-y-6">
            <h1 className="text-3xl md:text-4xl md:w-[70%] lg:text-5xl xl:text-6xl font-extrabold leading-tight">
              FIND CLOTHES THAT MATCH YOUR STYLE
            </h1>
            <p className="text-gray-800 md:text-sm lg:text-base xl:text-lg max-w-lg">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
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

    {/* Partners Section */}
    <div className="bg-black flex flex-wrap p-3 md:p-5 justify-between">
      {partners.map((partner) => (
        <div key={partner.img}>
          <img src={partner.img} alt="partners-logo" className="md:w-full w-20"/>
        </div>
      ))}
    </div>

    {/* NEw ARRIVALS */}
    <div className="app-container">
      <ProductsDisplay title='NEW ARRIVALS'/>
    </div>

    {/* Top Selling */}
     <div className="app-container">
      <ProductsDisplay title='TOP SELLING'/>
    </div>
    </>
  );
};

export default HomePage;
