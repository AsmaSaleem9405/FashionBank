'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll detection for background blur & shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to update active navigation link based on scroll position
  useEffect(() => {
    const sections = ['home', 'collections', 'about', 'contact'];
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/#home', id: 'home' },
    { name: 'COLLECTIONS', href: '/#collections', id: 'collections' },
    { name: 'ABOUT US', href: '/#about', id: 'about' },
    { name: 'CONTACT', href: '/#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fdfbf7]/80 backdrop-blur-md shadow-md py-3'
          : 'bg-[#fdfbf7] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link 
          href="/#home" 
          onClick={() => setActiveSection('home')}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
            <Image
              src="/images/logo.png" 
              alt="Fashion Bank Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
          <span className="font-serif tracking-wider text-lg md:text-xl font-bold text-[#3d1815]">
            FASHION BANK
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className="relative py-2 text-sm font-medium tracking-wide text-[#3d1815] hover:opacity-85 transition-opacity"
              >
                {link.name}
                {/* Active Indicator Line */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-orange-400 rounded-full transition-all duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Call to Action Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/#contact"
            onClick={() => setActiveSection('contact')}
            className="flex items-center gap-2 bg-[#3d1815] text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-[#52221e] transition-colors shadow-sm"
          >
            <span>GET IN TOUCH</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#3d1815] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#fdfbf7]/95 backdrop-blur-md shadow-lg border-t border-[#3d1815]/10 px-6 py-5 flex flex-col space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-sm font-medium tracking-wide py-2 text-[#3d1815] relative w-fit ${
                  isActive ? 'font-semibold' : ''
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-0 w-6 h-[2px] bg-orange-400 rounded-full" />
                )}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            onClick={() => {
              setActiveSection('contact');
              setMobileMenuOpen(false);
            }}
            className="flex items-center justify-center gap-2 bg-[#3d1815] text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-[#52221e] transition-colors shadow-sm w-full text-center"
          >
            <span>GET IN TOUCH</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;