import React, { useRef, useState } from "react";
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

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const carouselRef = useRef(null);
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState(null); // 'ok' | 'err' | null

  // basic scroll helper for testimonials carousel
  const scroll = (dir) => {
    if (!carouselRef.current) return;
    const distance = 520; // px per click (matches ~500px card width + gap)
    carouselRef.current.scrollBy({
      left: dir === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  // simple subscribe handler (client-side demo)
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscribeStatus(null);
    const trimmed = (email || "").trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setSubscribeStatus("err");
      return;
    }

    try {
      // simulate API delay
      await new Promise((res) => setTimeout(res, 600));
      setSubscribeStatus("ok");
      setEmail("");
      setTimeout(() => setSubscribeStatus(null), 3000);
    } catch {
      setSubscribeStatus("err");
    }
  };

  // hero + testimonials entrance animations
  useGSAP(() => {
    // hero left
    gsap.from("#left-content", {
      y: -200,
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#left-content",
        start: "top 80%",
        toggleActions: "restart pause resume pause",
      },
    });

    // hero right
    gsap.from("#right-content", {
      y: 200,
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#right-content",
        start: "top 80%",
        toggleActions: "restart pause resume pause",
      },
    });

    // testimonials fade in (each card)
    gsap.from(".testimonial-card", {
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#testimonials-section",
        start: "top 85%",
      },
    });
  });

  return (
    <>
      {/* HERO */}
      <section id="home" className="relative overflow-hidden app-container">
        <div className="py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div id="left-content" className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                FIND PRODUCTS THAT MATCH YOUR STYLE
              </h1>
              <p className="text-gray-800 md:text-base lg:text-lg max-w-lg">
                Browse through our diverse range of meticulously crafted
                products, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="max-sm:w-full inline-block px-6 py-3 bg-black text-white rounded-full text-sm md:text-base hover:bg-gray-800 transition-colors">
                Shop Now
              </button>

              <div className="flex flex-wrap gap-6 lg:gap-10 pt-4">
                {heroStatics.map((s, i) => (
                  <div key={i} className="space-y-1">
                    <h2 className="font-bold text-xl md:text-2xl">{s.stat}</h2>
                    <p className="text-sm md:text-base text-gray-600">{s.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div id="right-content" className="relative w-full flex justify-center lg:justify-end">
              <img
                className="absolute top-0 left-0 w-10 md:w-14 lg:w-16 animate-pulse z-10"
                src="/bigStar.png"
                alt=""
              />
              <img
                className="absolute bottom-0 right-0 w-6 md:w-10 lg:w-12 animate-pulse z-10"
                src="/smallStar.png"
                alt=""
              />
              <div className="relative z-20 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <img
                  className="rounded-3xl shadow-xl w-full object-cover"
                  src="/shopii-hero.png"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <div className="bg-black flex flex-wrap p-3 md:p-5 justify-between">
        {partners.map((p) => (
          <div key={p.img}>
            <img src={p.img} alt="partner" className="md:w-full w-23" />
          </div>
        ))}
      </div>

      {/* Products */}
      <div className="app-container">
        <ProductsDisplay title="NEW ARRIVALS" />
      </div>
      <div className="app-container">
        <ProductsDisplay title="TOP SELLING" />
      </div>

      {/* Browse By */}
      <div className="app-container">
        <h2 className="section-text">BROWSE BY DRESS STYLE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {browseBy.map((item, idx) => (
            <div
              key={idx}
              className={`relative bg-cover max-sm:h-40 bg-center rounded-xl overflow-hidden flex items-end p-6 text-white ${
                idx === 1 || idx === 2 ? "md:col-span-2 md:h-80" : ""
              }`}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="bg-black/40 absolute inset-0" />
              <h3 className="relative z-10 font-bold text-xl">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section id="testimonials-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">What Our Customers Say</h2>

            <div className="flex gap-2">
              <button
                aria-label="previous"
                onClick={() => scroll("left")}
                className="bg-black text-white rounded-full p-2 hover:bg-gray-800"
              >
                {/* left chevron */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                aria-label="next"
                onClick={() => scroll("right")}
                className="bg-black text-white rounded-full p-2 hover:bg-gray-800"
              >
                {/* right chevron */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-6 no-scrollbar"
            aria-label="testimonials carousel"
          >
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="testimonial-card bg-white rounded-3xl shadow-xl p-8 flex-shrink-0 snap-start text-left w-full sm:w-[500px]"
                role="group"
                aria-roledescription="slide"
              >
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{t.message}</p>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER BANNER */}
      <section className="bg-black text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Stay up to date about our latest offers
            </h3>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubscribe}
            className="w-full md:w-auto flex flex-col sm:flex-row gap-3 items-stretch"
            aria-label="Subscribe to newsletter"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
  id="newsletter-email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter your email"
  className="px-4 py-3 rounded-full 
             bg-white text-black 
             placeholder-gray-500 
             w-full sm:w-[320px] 
             focus:outline-none"
  aria-required="true"
/>


            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors w-full sm:w-auto"
              aria-label="Subscribe"
            >
              Subscribe
            </button>
          </form>

          {/* Feedback */}
          <div className="w-full md:w-auto text-center md:text-left">
            {subscribeStatus === "ok" && (
              <p className="text-green-400 mt-2">Thanks — you’re subscribed!</p>
            )}
            {subscribeStatus === "err" && (
              <p className="text-red-400 mt-2">Please enter a valid email.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
