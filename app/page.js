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
  const contactRef = useRef(null);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    const returnFromCollection = sessionStorage.getItem('returnFromCollection');

    // Check URL query parameters for scrolling
    const searchParams = new URLSearchParams(window.location.search);
    const scrollToParam = searchParams.get('scrollTo');

    if (hasSeenSplash) {
      setIsLoading(false);
      
      if (returnFromCollection === 'true') {
        sessionStorage.removeItem('returnFromCollection');
        setTimeout(() => {
          collectionsRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }

      if (scrollToParam === 'contact') {
        setTimeout(() => {
          contactRef.current?.scrollIntoView({ behavior: 'smooth' });
          // Clean up the URL query parameter without reloading the page
          window.history.replaceState({}, document.title, window.location.pathname);
        }, 300); // 300ms ensures components are fully rendered
      }
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasSeenSplash', 'true');
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

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
        
        {/* Collections with Ref */}
        <div ref={collectionsRef} onClick={handleCollectionClick}>
          <Collections />
        </div>

        <About />
        
        {/* Contact with Ref */}
        <div ref={contactRef}>
          <Contact />
        </div>

        <Footer />
      </div>
      
    </main>
  );
}