'use client';
import React, { useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ShieldCheck, Scissors, Palette, Award, ArrowRight } from 'lucide-react';

export const collectionsData = [
  {
    id: 'hotel-uniforms',
    number: '01',
    title: 'WAITER UNIFORM',
    subtitle: 'COLLECTION 01',
    description: 'Professional, comfortable uniforms designed to give your hotel team a polished and consistent appearance.',
    image: '/images/1uni.png',
    gallery: [
      { type: 'image', url: '/images/1uni.png' },
      { type: 'image', url: '/images/2uni.png' },
      { type: 'image', url: '/images/4uni.png' },
      { type: 'image', url: '/images/3uni.png' },
      { type: 'video', url: '/videos/reduni.mp4', poster: '/images/hotel-video-poster.png' },
    ]
  },
  {
    id: 'restaurant-uniforms',
    number: '02',
    title: 'CHEFF UNIFORM',
    subtitle: 'COLLECTION 02',
    description: 'Durable, stylish kitchen and front-of-house wear built for high-paced culinary environments.',
    image: '/images/8uni.png',
    gallery: [
      { type: 'image', url: '/images/8uni.png' },
      { type: 'image', url: '/images/7uni.png' },
      { type: 'image', url: '/images/6uni.png' },
      { type: 'video', url: '/videos/cheffuni.mp4' },
    ]
  },
  {
    id: 'corporate-uniforms',
    number: '03',
    title: 'CORPORATE UNIFORMS',
    subtitle: 'COLLECTION 03',
    description: 'Sophisticated suits and formal office attire that project authority, trust, and elegance.',
    image: '/images/corporate-main.png',
    gallery: [
      { type: 'image', url: '/images/corporate-main.png' },
      { type: 'image', url: '/images/corporate-1.png' },
      { type: 'image', url: '/images/corporate-2.png' },
    ]
  },
  {
    id: 'pharmacy-uniforms',
    number: '04',
    title: 'PHARMACY STAFF UNIFORMS',
    subtitle: 'COLLECTION 04',
    description: 'Clean, professional medical lab coats and staff wear ensuring hygiene and comfort.',
    image: '/images/pharmacy-main.png',
    gallery: [
      { type: 'image', url: '/images/pharmacy-main.png' },
      { type: 'image', url: '/images/pharmacy-1.png' },
      { type: 'image', url: '/images/pharmacy-2.png' },
    ]
  },
  {
    id: 'event-uniforms',
    number: '05',
    title: 'EVENT MANAGEMENT UNIFORMS',
    subtitle: 'COLLECTION 05',
    description: 'Active and smart apparel tailored for coordinators, hosts, and hospitality staff on the move.',
    image: '/images/event-main.png',
    gallery: [
      { type: 'image', url: '/images/event-main.png' },
      { type: 'image', url: '/images/event-1.png' },
      { type: 'image', url: '/images/event-2.png' },
    ]
  },
  {
    id: 'custom-uniforms',
    number: '06',
    title: 'CUSTOM UNIFORMS',
    subtitle: 'COLLECTION 06',
    description: 'Fully personalized uniform solutions crafted precisely to your brand guidelines and style choices.',
    image: '/images/custom-main.png',
    gallery: [
      { type: 'image', url: '/images/custom-main.png' },
      { type: 'image', url: '/images/custom-1.png' },
      { type: 'image', url: '/images/custom-2.png' },
    ]
  },
];

function CollectionsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const collectionsRef = useRef(null);

  // Automatically scroll down when returning from a detail page
  useEffect(() => {
    const shouldScroll = searchParams.get('scroll');
    if (shouldScroll === 'true' && collectionsRef.current) {
      collectionsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  const handleSelectCollection = (id) => {
    router.push(`/collections/${id}`);
  };

  return (
    <section ref={collectionsRef} id="collections" className="bg-[#FDFBF7] text-[#2C1810] py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-widest text-[#D9822B] uppercase mb-2">
          <span>— OUR COLLECTIONS —</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2C1810]">
          UNIFORMS FOR EVERY NEED
        </h2>
      </div>

      {/* Grid of 6 Collections */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collectionsData.map((item) => (
          <div 
            key={item.id} 
            onClick={() => handleSelectCollection(item.id)}
            className="group relative rounded-2xl overflow-hidden shadow-xl flex flex-col justify-end h-80 sm:h-96 w-full bg-stone-900 transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div className="absolute inset-0">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#2D150C] via-[#2D150C]/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

            <div className="relative z-10 p-6 flex items-center justify-between w-full">
              <div className="flex items-start space-x-4 w-full">
                <span className="text-3xl sm:text-4xl font-black text-[#EFA93E] tracking-tighter shrink-0">
                  {item.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base sm:text-lg tracking-wide leading-snug">
                    {item.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center text-xs sm:text-sm font-semibold text-[#EFA93E] group-hover:text-white transition-colors">
                    <span>VIEW COLLECTION</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Features Banner */}
      <div className="max-w-7xl mx-auto mt-16 bg-[#FAF7F0] rounded-3xl p-6 sm:p-8 shadow-sm border border-[#EFECE6] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#EFECE6] gap-6 sm:gap-0">
        <div className="flex items-start space-x-4 pt-4 sm:pt-0 sm:px-4 first:sm:pl-0 last:sm:pr-0">
          <div className="w-12 h-12 rounded-full bg-[#FEF6E8] flex items-center justify-center shrink-0">
            <Award className="w-6 h-6 text-[#D9822B]" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#2C1810]">PREMIUM QUALITY</h4>
            <p className="text-xs text-stone-500 mt-1">Top grade fabrics for comfort and durability.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 pt-4 sm:pt-0 sm:px-4">
          <div className="w-12 h-12 rounded-full bg-[#FEF6E8] flex items-center justify-center shrink-0">
            <Scissors className="w-6 h-6 text-[#D9822B]" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#2C1810]">TAILORED FIT</h4>
            <p className="text-xs text-stone-500 mt-1">Perfect stitching for a smart and professional look.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 pt-4 sm:pt-0 sm:px-4">
          <div className="w-12 h-12 rounded-full bg-[#FEF6E8] flex items-center justify-center shrink-0">
            <Palette className="w-6 h-6 text-[#D9822B]" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#2C1810]">CUSTOM DESIGN</h4>
            <p className="text-xs text-stone-500 mt-1">Customize colors, logo and style as you need.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 pt-4 sm:pt-0 sm:px-4 first:sm:pl-0 last:sm:pr-0">
          <div className="w-12 h-12 rounded-full bg-[#FEF6E8] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#D9822B]" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#2C1810]">TRUSTED BY EXPERTS</h4>
            <p className="text-xs text-stone-500 mt-1">Preferred by leading brands and professionals.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FDFBF7]" />}>
      <CollectionsContent />
    </Suspense>
  );
}