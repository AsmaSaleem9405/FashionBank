'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/Hero/page';
import Collections from '@/app/collections/page';
import About from '@/app/about/page';
import Contact from '@/app/contactus/page';
import Footer from '@/app/components/footer';
import Image from 'next/image'; // Make sure to import Image if using a logo image

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timer for how long the splash screen should show (e.g., 2.5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#fdfbf7]">
        {/* Blinking Logo Animation */}
        <div className="animate-pulse">
          {/* Replace with your actual logo text or image */}
          <h1 className="text-3xl font-serif tracking-widest text-[#2c2c2c]">
        
          </h1>
          { 
          <Image 
            src="/images/logo.png" 
            alt="Logo" 
            width={150} 
            height={50} 
          />}
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
        <Collections />
        <About />
        <Contact />
        <Footer />
      </div>
      
    </main>
  );
}