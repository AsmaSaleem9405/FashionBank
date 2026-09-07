import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Scissors, Palette, ShieldCheck } from 'lucide-react';

export const collectionsData = [
  {
    id: 'hotel-uniforms',
    number: '01',
    title: 'HOTEL UNIFORMS',
    subtitle: 'COLLECTION 01',
    description: 'Professional, comfortable uniforms designed to give your hotel team a polished and consistent appearance.',
    image: '/images/hotel-uniform.jpg',
    gallery: [
      '/images/hotel-uniform.jpg',
      '/images/hotel-detail-1.jpg',
      '/images/hotel-detail-2.jpg',
      '/images/hotel-detail-3.jpg',
    ]
  },
  {
    id: 'restaurant-uniforms',
    number: '02',
    title: 'RESTAURANT UNIFORMS',
    subtitle: 'COLLECTION 02',
    description: 'Durable, stylish kitchen and front-of-house wear built for high-paced culinary environments.',
    image: '/images/restaurant-uniform.jpg',
    gallery: [
      '/images/restaurant-uniform.jpg',
      '/images/rest-detail-1.jpg',
      '/images/rest-detail-2.jpg',
    ]
  },
  {
    id: 'corporate-uniforms',
    number: '03',
    title: 'CORPORATE UNIFORMS',
    subtitle: 'COLLECTION 03',
    description: 'Sophisticated suits and formal office attire that project authority, trust, and elegance.',
    image: '/images/corporate-uniform.jpg',
    gallery: [
      '/images/corporate-uniform.jpg',
      '/images/corp-detail-1.jpg',
    ]
  },
  {
    id: 'pharmacy-uniforms',
    number: '04',
    title: 'PHARMACY STAFF UNIFORMS',
    subtitle: 'COLLECTION 04',
    description: 'Clean, professional medical lab coats and staff wear ensuring hygiene and comfort.',
    image: '/images/pharmacy-uniform.jpg',
    gallery: [
      '/images/pharmacy-uniform.jpg',
      '/images/pharm-detail-1.jpg',
    ]
  },
  {
    id: 'event-uniforms',
    number: '05',
    title: 'EVENT MANAGEMENT UNIFORMS',
    subtitle: 'COLLECTION 05',
    description: 'Active and smart apparel tailored for coordinators, hosts, and hospitality staff on the move.',
    image: '/images/event-uniform.jpg',
    gallery: [
      '/images/event-uniform.jpg',
      '/images/event-detail-1.jpg',
    ]
  },
  {
    id: 'custom-uniforms',
    number: '06',
    title: 'CUSTOM UNIFORMS',
    subtitle: 'COLLECTION 06',
    description: 'Fully personalized uniform solutions crafted precisely to your brand guidelines and style choices.',
    image: '/images/custom-uniform.jpg',
    gallery: [
      '/images/custom-uniform.jpg',
      '/images/custom-detail-1.jpg',
    ]
  },
];

export default function CollectionsPage() {
  return (
    <section id="collections" className="bg-[#FDFBF7] text-[#2C1810] py-12 px-4 sm:px-6 lg:px-8">
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
            className="bg-[#2D150C] rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Image Container */}
            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-stone-900">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>

            {/* Content & Action Box */}
            <div className="p-6 flex items-center justify-between bg-[#2D150C]">
              <div className="flex items-start space-x-4">
                <span className="text-3xl sm:text-4xl font-black text-[#EFA93E] tracking-tighter">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg tracking-wide leading-snug">
                    {item.title}
                  </h3>
                  <Link 
                    href={`/collections/${item.id}`}
                    className="mt-2 inline-flex items-center text-xs sm:text-sm font-semibold text-[#EFA93E] hover:text-white transition-colors"
                  >
                    <span>VIEW COLLECTION</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Features Banner */}
      <div className="max-w-7xl mx-auto mt-16 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#F0EBE1] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#FEF6E8] flex items-center justify-center shrink-0">
            <Award className="w-6 h-6 text-[#D9822B]" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#2C1810]">PREMIUM QUALITY</h4>
            <p className="text-xs text-stone-500 mt-1">Top grade fabrics for comfort and durability.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#FEF6E8] flex items-center justify-center shrink-0">
            <Scissors className="w-6 h-6 text-[#D9822B]" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#2C1810]">TAILORED FIT</h4>
            <p className="text-xs text-stone-500 mt-1">Perfect stitching for a smart and professional look.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#FEF6E8] flex items-center justify-center shrink-0">
            <Palette className="w-6 h-6 text-[#D9822B]" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#2C1810]">CUSTOM DESIGN</h4>
            <p className="text-xs text-stone-500 mt-1">Customize colors, logo and style as you need.</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
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