'use client';
import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, ShieldCheck, Scissors, 
  Palette, Award, CheckCircle, ChevronLeft, ChevronRight, Play 
} from 'lucide-react';

export const collectionsData = [
  {
    id: 'hotel-uniforms',
    number: '01',
    title: 'HOTEL UNIFORMS',
    subtitle: 'COLLECTION 01',
    description: 'Professional, comfortable uniforms designed to give your hotel team a polished and consistent appearance.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'restaurant-uniforms',
    number: '02',
    title: 'RESTAURANT UNIFORMS',
    subtitle: 'COLLECTION 02',
    description: 'Durable, stylish kitchen and front-of-house wear built for high-paced culinary environments.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'corporate-uniforms',
    number: '03',
    title: 'CORPORATE UNIFORMS',
    subtitle: 'COLLECTION 03',
    description: 'Sophisticated suits and formal office attire that project authority, trust, and elegance.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'pharmacy-uniforms',
    number: '04',
    title: 'PHARMACY STAFF UNIFORMS',
    subtitle: 'COLLECTION 04',
    description: 'Clean, professional medical lab coats and staff wear ensuring hygiene and comfort.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'event-uniforms',
    number: '05',
    title: 'EVENT MANAGEMENT UNIFORMS',
    subtitle: 'COLLECTION 05',
    description: 'Active and smart apparel tailored for coordinators, hosts, and hospitality staff on the move.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'custom-uniforms',
    number: '06',
    title: 'CUSTOM UNIFORMS',
    subtitle: 'COLLECTION 06',
    description: 'Fully personalized uniform solutions crafted precisely to your brand guidelines and style choices.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800',
    ]
  },
];

export function CollectionsGrid({ onSelectCollection }) {
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
            onClick={() => onSelectCollection(item.id)}
            className="group relative rounded-2xl overflow-hidden shadow-xl flex flex-col justify-end h-80 sm:h-96 w-full bg-stone-900 transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
          >
            {/* Background Image with Zoom */}
            <div className="absolute inset-0">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>

            {/* Gradient Overlay for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D150C] via-[#2D150C]/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

            {/* Content & Action Box */}
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

export function CollectionDetail({ collectionId, onBack }) {
  const collection = collectionsData.find((item) => item.id === collectionId) || collectionsData[0];
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
        <button 
          onClick={onBack} 
          className="inline-flex items-center text-sm font-semibold text-[#2C1810] hover:text-[#D9822B] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collections
        </button>
      </div>

      {/* Hero Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#F0EBE1] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          {/* Left Main Preview Image */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden shadow-md bg-stone-100">
            <img 
              src={galleryImages[activeGalleryIndex] || collection.image} 
              alt={collection.title}
              className="w-full h-full object-cover transition-all duration-500"
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

        <div className="relative group px-0 sm:px-12">
          {/* Left Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-stone-200 flex items-center justify-center text-[#2C1810] hover:bg-[#FEF6E8] transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Gallery Items Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                <img src={img} alt={`Gallery item ${idx}`} className="w-full h-full object-cover" />
                
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
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-stone-200 flex items-center justify-center text-[#2C1810] hover:bg-[#FEF6E8] transition-all cursor-pointer"
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
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeGalleryIndex === idx ? 'w-6 bg-[#D9822B]' : 'w-2 bg-stone-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Feature Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        <div className="bg-[#FAF7F0] rounded-3xl p-6 sm:p-8 shadow-sm border border-[#EFECE6] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#EFECE6] gap-6 sm:gap-0">
          
          <div className="flex items-start space-x-4 pt-4 sm:pt-0 sm:px-4 first:sm:pl-0 last:sm:pr-0">
            <div className="w-12 h-12 rounded-full bg-[#FEF6E8] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#D9822B]" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#2C1810]">PREMIUM FABRICS</h4>
              <p className="text-xs text-stone-500 mt-0.5">High quality materials ensuring comfort and durability.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 pt-4 sm:pt-0 sm:px-4">
            <div className="w-12 h-12 rounded-full bg-[#FEF6E8] flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6 text-[#D9822B]" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#2C1810]">EASY MAINTENANCE</h4>
              <p className="text-xs text-stone-500 mt-0.5">Fabrics that are easy to clean and maintain, perfect for daily use.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 pt-4 sm:pt-0 sm:px-4">
            <div className="w-12 h-12 rounded-full bg-[#FEF6E8] flex items-center justify-center shrink-0">
              <Scissors className="w-6 h-6 text-[#D9822B]" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#2C1810]">PROFESSIONAL LOOK</h4>
              <p className="text-xs text-stone-500 mt-0.5">Designed to enhance your team's appearance and brand image.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 pt-4 sm:pt-0 sm:px-4 first:sm:pl-0 last:sm:pr-0">
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

export default function App() {
  const [currentView, setCurrentView] = useState('grid'); // 'grid' or 'detail'
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectCollection = (id) => {
    setSelectedId(id);
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToGrid = () => {
    setCurrentView('grid');
    setSelectedId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {currentView === 'grid' ? (
        <CollectionsGrid onSelectCollection={handleSelectCollection} />
      ) : (
        <CollectionDetail collectionId={selectedId} onBack={handleBackToGrid} />
      )}
    </div>
  );
}