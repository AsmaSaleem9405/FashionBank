'use client';

import React, { useState, useEffect } from 'react';
import { Award, PackageCheck, Handshake, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Excellent quality and professional service.",
    name: "Adnan Malik",
    location: "Multan"
  },
  {
    quote: "The uniforms were delivered exactly as requested.",
    name: "Bilal Hussain",
    location: "Lahore"
  },
  {
    quote: "Great quality and reliable service.",
    name: "Shahid Qureshi",
    location: "Faisalabad"
  },
  {
    quote: "Outstanding craftsmanship and timely delivery for our entire hotel staff.",
    name: "Kamran Akram",
    location: "Islamabad"
  },
  {
    quote: "The best bulk uniform supplier we have worked with in years.",
    name: "Usman Tariq",
    location: "Karachi"
  },
  {
    quote: "Exceptional fabric durability and superb attention to corporate branding.",
    name: "Fahad Mustafa",
    location: "Rawalpindi"
  }
];

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <main id="about" className="min-h-screen w-full relative overflow-x-hidden bg-[#fdfbf7] text-gray-900">

      {/* Clean & Subtle Professional Background Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-amber-100/30 to-transparent blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero / Header Section */}
        <section className="pt-24 pb-16 px-4 md:px-16 max-w-7xl mx-auto text-center">
          <span className="text-amber-700 font-semibold tracking-widest text-xs uppercase mb-3 block">
            EST. 1997 | FAISALABAD
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-gray-900 mb-6">
            A PARTNER YOU CAN RELY ON.
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Since 1997, Fashion Bank has been creating professional uniforms for hotels, restaurants & businesses with over 25 years of stitching excellence.
          </p>
        </section>

        {/* Core Highlights / Stats Bar */}
        <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto border-y border-amber-900/10 my-4 bg-white/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            <div className="flex items-center justify-center md:justify-start space-x-4 p-4">
              <div className="p-3 bg-amber-100/80 rounded-full text-amber-800">
                <Award size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">25+ Years</h3>
                <p className="text-sm text-gray-500">Experience in Stitching</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-4 p-4">
              <div className="p-3 bg-amber-100/80 rounded-full text-amber-800">
                <PackageCheck size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Bulk Orders</h3>
                <p className="text-sm text-gray-500">Specialists & Scale</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-4 p-4">
              <div className="p-3 bg-amber-100/80 rounded-full text-amber-800">
                <Handshake size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Reliable</h3>
                <p className="text-sm text-gray-500">Repeat Orders & Trust</p>
              </div>
            </div>

          </div>
        </section>

        {/* Brand Philosophy Section */}
        <section className="py-16 px-4 md:px-16 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-800 mb-4">
            YOUR TEAM. YOUR BRAND. OUR CRAFT.
          </h2>
          <p className="text-gray-500 italic mb-6">
            &ldquo;Experience built stitch by stitch.&rdquo;
          </p>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            At Fashion Bank, we understand that uniforms are more than just workwear—they are an extension of your corporate identity. Operating out of Faisalabad since 1997, our state-of-the-art stitching facilities and master artisans ensure that every piece delivered reflects peak professionalism, durability, and style.
          </p>
        </section>

        {/* Testimonials Section - Clean 3 Boxes Rotating */}
        <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              TRUSTED BY BUSINESSES
            </h2>
            <p className="text-amber-700 text-xs mt-2 tracking-widest uppercase font-semibold">Our Clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700">
            {getVisibleTestimonials().map((item, idx) => (
              <div 
                key={`${currentIndex}-${idx}`}
                className="bg-white border border-amber-900/10 p-8 rounded-xl shadow-sm flex flex-col justify-between transition-all duration-500 hover:shadow-md"
              >
                <div>
                  <div className="flex text-amber-500 mb-4 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-sm mb-6 leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-amber-700 font-medium">{item.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Clean Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-amber-700 w-6' : 'bg-gray-300 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </div>

    </main>
  );
}