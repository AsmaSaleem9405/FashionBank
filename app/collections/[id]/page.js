'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, ArrowRight, ShieldCheck, Scissors, 
  Palette, Award, CheckCircle, ChevronLeft, ChevronRight, Play 
} from 'lucide-react';
import { collectionsData } from '../page';
import { useParams } from 'next/navigation';

export default function CollectionDetailPage() {
  const params = useParams();
  const id = params?.id;

  const collection = collectionsData.find((item) => item.id === id) || collectionsData[0];
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const galleryImages = collection.gallery && collection.gallery.length > 0 
    ? collection.gallery 
    : [collection.image];

  const handlePrev = () => {
    setActiveGalleryIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveGalleryIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2C1810] font-sans selection:bg-[#E5A93D]/30 pb-20 relative overflow-hidden">
      
      {/* Decorative Background Waves/Dots on Right Side */}
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-40 overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#FDE8C5] to-[#F5B85E] blur-2xl"></div>
      </div>

      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-semibold text-[#2C1810] hover:text-[#D9822B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collections
        </Link>
      </div>

      {/* Hero Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#F0EBE1] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          {/* Left Main Preview Image */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden shadow-md bg-stone-100">
            <Image 
              src={galleryImages[activeGalleryIndex] || collection.image} 
              alt={collection.title}
              fill
              className="object-cover transition-all duration-500"
              priority
            />
          </div>

          {/* Right Information Area */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pl-6">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#D9822B] uppercase">
                {collection.subtitle}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2C1810] mt-1">
                {collection.title}
              </h1>
            </div>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              {collection.description}
            </p>

            {/* Feature Badges Row */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1">
              <div className="flex items-center space-x-2 bg-[#FDFBF7] p-3 rounded-xl border border-[#F0EBE1]">
                <ShieldCheck className="w-5 h-5 text-[#D9822B] shrink-0" />
                <div>
                  <span className="block text-[10px] sm:text-xs font-bold text-[#2C1810] uppercase">Premium Quality</span>
                  <span className="hidden sm:block text-[10px] text-stone-500">Top grade fabrics</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-[#FDFBF7] p-3 rounded-xl border border-[#F0EBE1]">
                <Scissors className="w-5 h-5 text-[#D9822B] shrink-0" />
                <div>
                  <span className="block text-[10px] sm:text-xs font-bold text-[#2C1810] uppercase">Tailored Fit</span>
                  <span className="hidden sm:block text-[10px] text-stone-500">Perfect stitching</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-[#FDFBF7] p-3 rounded-xl border border-[#F0EBE1]">
                <Palette className="w-5 h-5 text-[#D9822B] shrink-0" />
                <div>
                  <span className="block text-[10px] sm:text-xs font-bold text-[#2C1810] uppercase">Custom Design</span>
                  <span className="hidden sm:block text-[10px] text-stone-500">Colors & logo</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button className="bg-[#2C1810] hover:bg-[#3D2319] text-white px-8 py-3.5 rounded-full font-medium inline-flex items-center space-x-3 transition-all shadow-md cursor-pointer">
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Gallery Carousel Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        <div className="text-center mb-8">
          <div className="text-xs font-bold text-[#D9822B] tracking-widest uppercase">— PRODUCT GALLERY —</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C1810] mt-1">
            {collection.title} COLLECTION
          </h2>
        </div>

        <div className="relative group">
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-stone-200 flex items-center justify-center text-[#2C1810] hover:bg-[#FEF6E8] transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Gallery Items Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveGalleryIndex(idx)}
                className={`relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${
                  activeGalleryIndex === idx 
                    ? 'border-[#D9822B] shadow-lg scale-[1.02]' 
                    : 'border-transparent opacity-80 hover:opacity-100'
                }`}
              >
                <Image src={img} alt={`Gallery item ${idx}`} fill className="object-cover" />
                
                {/* Play Icon Overlay for specific index example */}
                {idx === 2 && (
                  <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow">
                        <Play className="w-5 h-5 text-[#2C1810] fill-current ml-0.5" />
                      </div>
                    </div>
                    <div className="text-white text-xs font-medium z-10">0:00/0:15</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-stone-200 flex items-center justify-center text-[#2C1810] hover:bg-[#FEF6E8] transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-6">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveGalleryIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                activeGalleryIndex === idx ? 'w-6 bg-[#D9822B]' : 'w-2 bg-stone-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Feature Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#F0EBE1] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#FEF6E8] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#D9822B]" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#2C1810]">PREMIUM FABRICS</h4>
              <p className="text-xs text-stone-500 mt-0.5">High quality materials ensuring comfort and durability.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#FEF6E8] flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6 text-[#D9822B]" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#2C1810]">EASY MAINTENANCE</h4>
              <p className="text-xs text-stone-500 mt-0.5">Fabrics that are easy to clean and maintain, perfect for daily use.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#FEF6E8] flex items-center justify-center shrink-0">
              <Scissors className="w-6 h-6 text-[#D9822B]" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#2C1810]">PROFESSIONAL LOOK</h4>
              <p className="text-xs text-stone-500 mt-0.5">Designed to enhance your team's appearance and brand image.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#FEF6E8] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#D9822B]" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#2C1810]">TRUSTED BY EXPERTS</h4>
              <p className="text-xs text-stone-500 mt-0.5">Preferred by leading hotels and hospitality professionals.</p>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}