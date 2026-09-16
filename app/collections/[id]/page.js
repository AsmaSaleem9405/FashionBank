'use client';
import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, ShieldCheck, Scissors, 
  Palette, Play, X, ChevronLeft, ChevronRight, ArrowRight 
} from 'lucide-react';
import { collectionsData } from '../page';

export default function CollectionDetailPage({ params }) {
  // Unwrap params using React.use() for Next.js App Router compatibility
  const resolvedParams = use(params);
  const collectionId = resolvedParams.id;
  
  const router = useRouter();
  const collection = collectionsData.find((item) => item.id === collectionId) || collectionsData[0];
  
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [fullscreenItem, setFullscreenItem] = useState(null);

  const galleryItems = collection.gallery && collection.gallery.length > 0 
    ? collection.gallery 
    : [{ type: 'image', url: collection.image }];

  const activeItem = galleryItems[activeGalleryIndex] || galleryItems[0];

  const handlePrev = () => {
    setActiveGalleryIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveGalleryIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2C1810] font-sans selection:bg-[#E5A93D]/30 pb-24 relative overflow-hidden">
      
      {/* Animated Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 pointer-events-none opacity-30 sm:opacity-40 overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#FDE8C5] to-[#F5B85E] blur-3xl animate-pulse"></div>
      </div>
      <div className="absolute bottom-10 left-[-10%] w-80 h-80 pointer-events-none opacity-20 overflow-hidden z-0">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#F5B85E] to-[#E5A93D] blur-3xl"></div>
      </div>

      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 relative z-10 animate-[fadeIn_0.5s_ease-out]">
        <button 
          onClick={() => router.push('/#collections')} 
          className="group inline-flex items-center text-xs sm:text-sm font-semibold text-[#2C1810] hover:text-[#D9822B] transition-all duration-300 cursor-pointer py-2 px-3 rounded-full hover:bg-stone-100/80 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" /> 
          Back to Collections
        </button>
      </div>

      {/* Hero Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 relative z-10 animate-[fadeIn_0.6s_ease-out]">
        <div className="bg-white/85 backdrop-blur-md rounded-3xl p-5 sm:p-10 shadow-sm border border-[#F0EBE1] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center relative transition-all duration-500 hover:shadow-md">
          
          {/* Left Main Preview Area with Always-Visible Arrows */}
          <div className="lg:col-span-5 relative h-[320px] sm:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden shadow-md bg-stone-100 flex items-center justify-center group">
            
            {/* Clickable Image Container */}
            <div 
              onClick={() => setFullscreenItem(activeItem)}
              className="w-full h-full cursor-pointer relative flex items-center justify-center"
            >
              {activeItem.type === 'video' ? (
                <div className="w-full h-full relative">
                  <video 
                    src={activeItem.url} 
                    muted 
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center group-hover:bg-black/35 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                      <Play className="w-6 h-6 text-[#2C1810] fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <img 
                    key={activeItem.url}
                    src={activeItem.url} 
                    alt={collection.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 animate-[fadeIn_0.4s_ease-in-out]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 bg-white/95 text-[#2C1810] text-xs font-bold px-4 py-2 rounded-full shadow-lg transition-all duration-300">
                      Tap to Expand Fullscreen
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* Left & Right Arrow Buttons (Always Visible for Mobile/Desktop) */}
            <button 
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white backdrop-blur-md shadow-md flex items-center justify-center text-[#2C1810] transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Previous item"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white backdrop-blur-md shadow-md flex items-center justify-center text-[#2C1810] transition-all duration-300 cursor-pointer active:scale-95"
              aria-label="Next item"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Carousel Counter Badge (e.g. 1 / 5) */}
            <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full z-20 tracking-wider">
              {activeGalleryIndex + 1} / {galleryItems.length}
            </div>
          </div>

          {/* Right Information Area */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6 lg:pl-4">
            <div className="space-y-1">
              <span className="inline-block text-xs sm:text-sm font-bold tracking-widest text-[#D9822B] uppercase">
                {collection.subtitle}
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2C1810]">
                {collection.title}
              </h1>
            </div>

            <p className="text-stone-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              {collection.description}
            </p>

            {/* Modern Get in Touch Button */}
            <div className="pt-1">
              <button
                onClick={() => router.push('/#contact')}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#2C1810] to-[#4A2E21] text-white font-medium text-sm sm:text-base shadow-lg shadow-[#2C1810]/15 hover:shadow-xl hover:shadow-[#D9822B]/20 hover:from-[#D9822B] hover:to-[#C2701F] transition-all duration-300 active:scale-95 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>

            {/* Fully Responsive Feature Badges Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="flex items-center space-x-3 bg-[#FDFBF7] p-3.5 rounded-2xl border border-[#F0EBE1] transition-transform duration-300 hover:-translate-y-1">
                <ShieldCheck className="w-5 h-5 text-[#D9822B] shrink-0" />
                <div>
                  <span className="block text-xs font-bold text-[#2C1810] uppercase">Quality</span>
                  <span className="text-[11px] text-stone-500">Top grade fabrics</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-[#FDFBF7] p-3.5 rounded-2xl border border-[#F0EBE1] transition-transform duration-300 hover:-translate-y-1">
                <Scissors className="w-5 h-5 text-[#D9822B] shrink-0" />
                <div>
                  <span className="block text-xs font-bold text-[#2C1810] uppercase">Tailored</span>
                  <span className="text-[11px] text-stone-500">Perfect stitching</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-[#FDFBF7] p-3.5 rounded-2xl border border-[#F0EBE1] transition-transform duration-300 hover:-translate-y-1">
                <Palette className="w-5 h-5 text-[#D9822B] shrink-0" />
                <div>
                  <span className="block text-xs font-bold text-[#2C1810] uppercase">Custom</span>
                  <span className="text-[11px] text-stone-500">Colors & logo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Gallery Carousel Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          <div className="text-[11px] sm:text-xs font-bold text-[#D9822B] tracking-widest uppercase">— PRODUCT GALLERY —</div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#2C1810] mt-1">
            {collection.title} COLLECTION
          </h2>
        </div>

        <div className="relative group px-0 sm:px-12">
          <button 
            onClick={handlePrev}
            aria-label="Previous item"
            className="hidden sm:flex absolute -left-2 top-1/2 -translate-y-1/2 z-25 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-stone-200 items-center justify-center text-[#2C1810] hover:bg-[#FEF6E8] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => {
                  setActiveGalleryIndex(idx);
                  setFullscreenItem(item);
                }}
                className={`relative h-48 sm:h-72 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 bg-stone-100 group/thumb active:scale-95 ${
                  activeGalleryIndex === idx 
                    ? 'border-[#D9822B] shadow-lg ring-2 ring-[#D9822B]/20 scale-[1.02]' 
                    : 'border-transparent opacity-80 hover:opacity-100 hover:scale-[1.01]'
                }`}
              >
                {item.type === 'video' ? (
                  <div className="w-full h-full relative">
                    <video src={item.url} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow">
                        <Play className="w-4 h-4 text-[#2C1810] fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img src={item.url} alt={`Gallery thumbnail ${idx}`} className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500" />
                )}
                
                {activeGalleryIndex === idx && (
                  <div className="absolute top-2 right-2 bg-[#D9822B] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    Active
                  </div>
                )}
              </div>
            ))}
          </div>

          <button 
            onClick={handleNext}
            aria-label="Next item"
            className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-25 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm shadow-md border border-stone-200 items-center justify-center text-[#2C1810] hover:bg-[#FEF6E8] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Swipe Buttons Bar */}
        <div className="flex sm:hidden items-center justify-center space-x-4 mt-6">
          <button 
            onClick={handlePrev}
            className="flex items-center space-x-1 px-5 py-2.5 rounded-full bg-white border border-stone-200 text-xs font-semibold text-[#2C1810] shadow-sm active:scale-95 transition-transform"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          <span className="text-xs font-bold text-stone-500">
            {activeGalleryIndex + 1} of {galleryItems.length}
          </span>
          <button 
            onClick={handleNext}
            className="flex items-center space-x-1 px-5 py-2.5 rounded-full bg-white border border-stone-200 text-xs font-semibold text-[#2C1810] shadow-sm active:scale-95 transition-transform"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {fullscreenItem && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-3 sm:p-8 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]">
          <button 
            onClick={() => setFullscreenItem(null)}
            aria-label="Close fullscreen view"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 active:scale-90 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            {fullscreenItem.type === 'video' ? (
              <video 
                src={fullscreenItem.url} 
                controls 
                autoPlay 
                playsInline
                className="max-w-full max-h-[80vh] sm:max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              />
            ) : (
              <img 
                src={fullscreenItem.url} 
                alt="Fullscreen Preview" 
                className="max-w-full max-h-[80vh] sm:max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              />
            )}
          </div>
        </div>
      )}
    </main>
  );
}