'use client';

import React from 'react';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/Hero/page';
import Collections from '@/app/collections/page';
import About from '@/app/about/page';

import Footer from '@/app/components/footer'; // 1. Import the footer component

export default function Page() {
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
        <Footer />
      </div>
      
    </main>
  );
}