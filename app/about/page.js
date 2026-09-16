'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Award, PackageCheck, Handshake, Star, Building2, Utensils, Briefcase, Hotel, ShieldCheck } from 'lucide-react';

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
  { name: "Serena Hotels", icon: Hotel, category: "Luxury Hospitality" },
  { name: "Rosecliff Marquee", icon: Utensils, category: "Event & Banqueting" },
  { name: "Chenab Club", icon: Building2, category: "Corporate & Recreation" },
  { name: "Paradise Marquee", icon: Briefcase, category: "Premium Hospitality" },
  { name: "Pearl Continental Staff", icon: Hotel, category: "Hospitality Partner" },
  { name: "Sarena Banquet Suites", icon: Utensils, category: "Catering & Events" }
];

function useCounter(end, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    let animationFrameId;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease out expo formula for smooth counting deceleration
      const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(easeProgress * end));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, shouldStart]);

  return count;
}

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCardsCount, setVisibleCardsCount] = useState(3);
  const [hasStartedCounting, setHasStartedCounting] = useState(false);

  const statsRef = useRef(null);

  // Counter values (including countDesigns)
  const countYears = useCounter(25, 2000, hasStartedCounting);
  const countDeliveries = useCounter(500, 2000, hasStartedCounting);
  const countRetention = useCounter(99, 2000, hasStartedCounting);
  const countDesigns = useCounter(500, 2000, hasStartedCounting); // Added counter hook

  // Trigger entry animations and intersection observer for stats counting
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStartedCounting(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  // Handle automatic testimonial rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Responsive testimonial count calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCardsCount(1);
      } else {
        setVisibleCardsCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCardsCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <main id="about" className="min-h-screen w-full relative overflow-x-hidden bg-[#fdfbf7] text-gray-900 selection:bg-amber-200 selection:text-amber-900">

      {/* Custom CSS for Marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Clean background without glowing decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-amber-50/50 to-transparent"></div>
      </div>

      <div className="relative z-10">
        
        {/* Hero / Header Section without shining stars */}
        <section className={`pt-20 pb-12 px-5 sm:px-8 md:px-16 max-w-7xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-amber-100/70 border border-amber-200 text-amber-800 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            EST. 1997 | FAISALABAD, PAKISTAN
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            A PARTNER YOU CAN <span className="text-amber-800 underline decoration-amber-300 decoration-1 underline-offset-8">RELY ON.</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Since 1997, Fashion Bank has been engineering professional uniforms for premier hotels, restaurants & corporate enterprises with over 25 years of stitching mastery.
          </p>
        </section>

        {/* Core Highlights / Stats Bar with 4 Columns & Number Counting Animation */}
       {/* Core Highlights / Stats Bar with Custom Images */}
<section ref={statsRef} className="py-8 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto my-2">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 bg-white/90 backdrop-blur-md border border-amber-900/10 rounded-3xl p-6 sm:p-8 shadow-xl shadow-amber-900/[0.03]">
    
    {/* Stat 1: Years Experience */}
    <div className="flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 hover:bg-amber-50/60 group">
      <div className="p-2.5 bg-amber-100/90 rounded-2xl shadow-inner group-hover:scale-110 transition-transform overflow-hidden flex items-center justify-center w-14 h-14 shrink-0">
        <img 
          src="/images/achieve.png" 
          alt="Experience icon" 
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div>
        <h3 className="text-3xl sm:text-4xl font-serif font-extrabold text-gray-900 tracking-tight">
          {countYears}+
        </h3>
        <p className="text-xs sm:text-sm font-medium text-gray-500 mt-0.5">Years Experience in Stitching</p>
      </div>
    </div>

    {/* Stat 2: Bulk Deliveries */}
    <div className="flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 hover:bg-amber-50/60 group">
      <div className="p-2.5 bg-amber-100/90 rounded-2xl shadow-inner group-hover:scale-110 transition-transform overflow-hidden flex items-center justify-center w-14 h-14 shrink-0">
        <img 
          src="/images/bulk.png" 
          alt="Deliveries icon" 
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div>
        <h3 className="text-3xl sm:text-4xl font-serif font-extrabold text-gray-900 tracking-tight">
          {countDeliveries}k+
        </h3>
        <p className="text-xs sm:text-sm font-medium text-gray-500 mt-0.5">Bulk Uniforms Delivered</p>
      </div>
    </div>

    {/* Stat 3: Client Retention */}
    <div className="flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 hover:bg-amber-50/60 group">
      <div className="p-2.5 bg-amber-100/90 rounded-2xl shadow-inner group-hover:scale-110 transition-transform overflow-hidden flex items-center justify-center w-14 h-14 shrink-0">
        <img 
          src="/images/costumer.png" 
          alt="Retention icon" 
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div>
        <h3 className="text-3xl sm:text-4xl font-serif font-extrabold text-gray-900 tracking-tight">
          {countRetention}%
        </h3>
        <p className="text-xs sm:text-sm font-medium text-gray-500 mt-0.5">Client Retention Rate</p>
      </div>
    </div>

  </div>
</section>
        {/* INFINITE MARQUEE MOVING ANIMATION FOR CLIENT INDUSTRIES */}
        <section className="py-12 bg-amber-950/[0.02] border-y border-amber-900/10 overflow-hidden my-6">
          <div className="max-w-7xl mx-auto px-4 md:px-16 text-center mb-6">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Trusted across Pakistan&apos;s leading hospitality & corporate sectors
            </p>
          </div>

          <div className="relative w-full overflow-hidden py-3">
            <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-[#fdfbf7] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-[#fdfbf7] to-transparent z-10 pointer-events-none"></div>

            <div className="animate-marquee flex items-center space-x-8 sm:space-x-12">
              {[...clientIndustries, ...clientIndustries, ...clientIndustries].map((ind, i) => {
                const IconComponent = ind.icon;
                return (
                  <div 
                    key={i} 
                    className="flex items-center space-x-3 bg-white border border-amber-900/10 px-6 py-3.5 rounded-2xl shadow-sm shrink-0 hover:border-amber-700 hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="p-2 rounded-xl bg-amber-100 text-amber-800 group-hover:scale-110 transition-transform">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 text-sm block tracking-tight">{ind.name}</span>
                      <span className="text-[11px] text-amber-700 font-medium block">{ind.category}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 px-5 sm:px-8 md:px-16 max-w-7xl mx-auto mb-16">
          <div className="text-center mb-12">
            <span className="text-amber-700 text-xs font-bold tracking-widest uppercase mb-2 block">Client Testimonials & Feedback</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
              TRUSTED BY BUSINESS LEADERS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700">
            {getResponsiveTestimonials().map((item, idx) => (
              <div 
                key={`${currentIndex}-${idx}`}
                className="bg-white border border-neutral-200/80 p-6 sm:p-8 rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:border-amber-900/30 hover:-translate-y-1"
              >
                <div>
                  <div className="flex text-amber-500 mb-4 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-sm sm:text-base mb-6 leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="border-t border-neutral-100 pt-4 mt-2 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">{item.name}</h4>
                    <p className="text-xs text-amber-700 font-semibold">{item.location}, Pakistan</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-800 text-xs font-bold border border-amber-200">
                    {item.name.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-2.5 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-amber-800 w-8 shadow-sm' : 'bg-gray-300 w-2.5 hover:bg-gray-400'
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