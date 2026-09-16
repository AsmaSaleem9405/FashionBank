'use client';

import React, { useState, useEffect } from 'react';
import { Award, PackageCheck, Handshake, Star, Building2, Utensils, Briefcase, Hotel } from 'lucide-react';

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

const clientIndustries = [
  { name: "Serena Hotels", icon: Hotel },
  { name: "Rosecliff Marquee", icon: Utensils },
  { name: "Chenab Club", icon: Building2 },
  { name: "Paradise Marquee", icon: Briefcase }
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

        {/* Core Highlights / Stats Bar with Enlarged Numeric Hierarchy */}
        <section className="py-12 px-4 md:px-16 max-w-7xl mx-auto border-y border-amber-900/10 my-4 bg-white/60 shadow-sm backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            
            <div className="flex items-center justify-center md:justify-start space-x-5 p-4">
              <div className="p-3.5 bg-amber-100/80 rounded-2xl text-amber-800 shadow-inner">
                <Award size={32} />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-gray-900 tracking-tight">25+</h3>
                <p className="text-sm font-medium text-gray-500 mt-0.5">Years Experience in Stitching</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-5 p-4">
              <div className="p-3.5 bg-amber-100/80 rounded-2xl text-amber-800 shadow-inner">
                <PackageCheck size={32} />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-gray-900 tracking-tight">500k+</h3>
                <p className="text-sm font-medium text-gray-500 mt-0.5">Bulk Uniforms Delivered</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-5 p-4">
              <div className="p-3.5 bg-amber-100/80 rounded-2xl text-amber-800 shadow-inner">
                <Handshake size={32} />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-serif font-extrabold text-gray-900 tracking-tight">99%</h3>
                <p className="text-sm font-medium text-gray-500 mt-0.5">Client Retention Rate</p>
              </div>
            </div>

          </div>
        </section>

        {/* Brand Philosophy Section (2-Column Layout) */}
        <section className="py-20 px-4 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual Workshop Imagery Side */}
            <div className="relative rounded-2xl overflow-hidden border border-amber-900/10 shadow-lg bg-amber-50/50 p-8 flex flex-col justify-center min-h-[340px]">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#b45309_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <span className="text-xs tracking-widest font-bold uppercase text-amber-800 mb-2">Our Master Workshop</span>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Precision in Every Thread</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Operating out of our industrial hub in Faisalabad, our production lines merge traditional tailoring mastery with automated precision sewing technology.
              </p>
            </div>

            {/* Text & Pillars Side */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-900 mb-3">
                YOUR TEAM. YOUR BRAND. OUR CRAFT.
              </h2>
              <p className="text-gray-500 italic mb-6 text-sm">
                &ldquo;Experience built stitch by stitch.&rdquo;
              </p>
              <p className="text-gray-600 leading-relaxed text-base mb-8 max-w-xl">
                At Fashion Bank, we understand that uniforms are more than just workwear—they are an extension of your corporate identity. Our master artisans ensure every garment reflects peak professionalism, durability, and tailored style.
              </p>

              <ul className="space-y-3 text-sm font-medium text-gray-700">
                <li className="flex items-center space-x-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-700"></span>
                  <span>Customized industrial fabric sourcing (fade and tear resistant)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-700"></span>
                  <span>Precision automated bulk grading and sizing routines</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-700"></span>
                  <span>In-house corporate branding, embroidery, and logo cresting</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Client Trust Verification (Logo/Industry Carousel Strip) */}
        <section className="py-8 bg-amber-900/[0.02] border-y border-amber-900/10">
          <div className="max-w-7xl mx-auto px-4 md:px-16 text-center">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Trusted across Pakistan&apos;s leading sectors</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              {clientIndustries.map((ind, i) => {
                const IconComponent = ind.icon;
                return (
                  <div key={i} className="flex items-center justify-center space-x-2 text-gray-600 grayscale hover:grayscale-0 transition-all py-2">
                    <IconComponent size={20} className="text-amber-700" />
                    <span className="font-medium text-sm">{ind.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section - Clean 3 Boxes Rotating with High Contrast */}
        <section className="py-20 px-4 md:px-16 max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">
              TRUSTED BY BUSINESSES
            </h2>
            <p className="text-amber-700 text-xs mt-2 tracking-widest uppercase font-semibold">Client Testimonials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700">
            {getVisibleTestimonials().map((item, idx) => (
              <div 
                key={`${currentIndex}-${idx}`}
                className="bg-white border border-neutral-200/80 p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between transition-all duration-500 hover:shadow-md hover:border-amber-900/20"
              >
                <div>
                  <div className="flex text-amber-500 mb-4 space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-sm mb-6 leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="border-t border-neutral-100 pt-4 mt-2">
                  <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-amber-700 font-medium">{item.location}, Pakistan</p>
                </div>
              </div>
            ))}
          </div>

          {/* Clean Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-10">
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