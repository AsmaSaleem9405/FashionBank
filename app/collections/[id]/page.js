'use client';
import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, ShieldCheck, Scissors, 
  Palette, Award, CheckCircle, ChevronLeft, ChevronRight, Play, X 
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
    <main className="min-h-screen bg-[#FDFBF7] text-[#2C1810] font-sans selection:bg-[#E5A93D]/30 pb-20 relative overflow-hidden">
      
      {/* Decorative Background Waves/Dots on Right Side */}
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-40 overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#FDE8C5] to-[#F5B85E] blur-2xl"></div>
      </div>

      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 relative z-10">
  

<button 
  onClick={() => router.push('/#collections')} 
  className="inline-flex items-center text-sm font-semibold text-[#2C1810] hover:text-[#D9822B] transition-colors cursor-pointer"
>
  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collections
</button>
      </div>

      {/* Hero Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#F0EBE1] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          {/* Left Main Preview Area */}
          <div 
            onClick={() => setFullscreenItem(activeItem)}
            className="lg:col-span-5 relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden shadow-md bg-stone-100 flex items-center justify-center cursor-pointer group"
          >
            {activeItem.type === 'video' ? (
              <div className="w-full h-full relative">
                <video 
                  src={activeItem.url} 
                  muted 
                  loop
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-[#2C1810] fill-current ml-0.5" />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <img 
                  src={activeItem.url} 
                  alt={collection.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-[#2C1810] text-xs font-bold px-3 py-1.5 rounded-full shadow transition-opacity">
                    Click to Expand Fullscreen
                  </span>
                </div>
              </>
            )}
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
          <button 
            onClick={handlePrev}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-stone-200 flex items-center justify-center text-[#2C1810] hover:bg-[#FEF6E8] transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveGalleryIndex(idx)}
                className={`relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all bg-black/10 group ${
                  activeGalleryIndex === idx 
                    ? 'border-[#D9822B] shadow-lg scale-[1.02]' 
                    : 'border-transparent opacity-80 hover:opacity-100'
                }`}
              >
                {item.type === 'video' ? (
                  <div className="w-full h-full relative">
                    <video src={item.url} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-[#2C1810] fill-current ml-0.5" />
                        </div>
                      </div>
                      <div className="text-white text-xs font-medium z-10">Video Clip</div>
                    </div>
                  </div>
                ) : (
                  <img src={item.url} alt={`Gallery item ${idx}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                )}
              </div>
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-stone-200 flex items-center justify-center text-[#2C1810] hover:bg-[#FEF6E8] transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {fullscreenItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm">
          <button 
            onClick={() => setFullscreenItem(null)}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {fullscreenItem.type === 'video' ? (
              <video 
                src={fullscreenItem.url} 
                controls 
                autoPlay 
                className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain"
              />
            ) : (
              <img 
                src={fullscreenItem.url} 
                alt="Fullscreen Preview" 
                className="max-w-full max-h-[85vh] rounded-xl shadow-2xl object-contain"
              />
            )}
          </div>
        </div>
      )}
    </main>
  );
}