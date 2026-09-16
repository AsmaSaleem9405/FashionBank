'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/Hero/page';
import Collections from '@/app/collections/page';
import About from '@/app/about/page';
import Contact from '@/app/contactus/page';
import Footer from '@/app/components/footer';
import Image from 'next/image';

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const collectionsRef = useRef(null);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    const returnFromCollection = sessionStorage.getItem('returnFromCollection');

    if (hasSeenSplash) {
      setIsLoading(false);
      // If the user came back from a collection page, scroll them down to collections automatically
      if (returnFromCollection === 'true') {
        sessionStorage.removeItem('returnFromCollection'); // clear flag
        setTimeout(() => {
          collectionsRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasSeenSplash', 'true');
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  // Function to call when clicking a collection item so it remembers where you were
  const handleCollectionClick = () => {
    sessionStorage.setItem('returnFromCollection', 'true');
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#fdfbf7]">
        <div className="animate-pulse">
          <Image 
            src="/images/logo.png" 
            alt="Logo" 
            width={150} 
            height={50} 
          />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen w-full relative overflow-x-hidden bg-[#fdfbf7]">
      
      {/* Permanent Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-[#fdfbf7]/80 backdrop-blur-md">
        <Navbar />
      </div>

      {/* Main Website View */}
      <div className="relative z-10 min-h-screen bg-[#fdfbf7] overflow-x-hidden pt-24">
        <Hero />
        
        {/* Wrap Collections with a ref to scroll back down here */}
        <div ref={collectionsRef} onClick={handleCollectionClick}>
          <Collections />
        </div>

        <About />
        <Contact />
        <Footer />
      </div>
      
    </main>
  );
}