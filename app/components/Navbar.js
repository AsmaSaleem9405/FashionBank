'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Intersection Observer to update active navigation link
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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#fdfbf7]/85 backdrop-blur-md shadow-lg py-3 border-b border-[#3d1815]/5'
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
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0"
          >
            <Image
              src="/images/logo.png" 
              alt="Fashion Bank Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </motion.div>
          <span className="font-serif tracking-wider text-lg md:text-xl font-bold text-[#3d1815] group-hover:text-orange-600 transition-colors duration-300">
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
                className="relative py-2 text-sm font-semibold tracking-wide text-[#3d1815] hover:text-orange-600 transition-colors duration-300"
              >
                {link.name}
                {/* Active Indicator Line with Layout Animation */}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-orange-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Call to Action Button (Desktop) */}
        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/#contact"
              onClick={() => setActiveSection('contact')}
              className="flex items-center gap-2 bg-[#3d1815] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-[#52221e] transition-all shadow-md hover:shadow-orange-500/10"
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
          </motion.div>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#3d1815] focus:outline-none z-50 relative p-2"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Full-Screen Animated Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 h-screen w-screen bg-[#fdfbf7] z-40 px-6 py-5 flex flex-col justify-start overflow-y-auto"
          >
            {/* Top header row inside overlay */}
            <div className="flex items-center justify-between w-full">
              <Link 
                href="/#home" 
                onClick={() => {
                  setActiveSection('home');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-3"
              >
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/images/logo.png" 
                    alt="Fashion Bank Logo"
                    fill
                    className="object-contain rounded-full"
                    priority
                  />
                </div>
                <span className="font-serif tracking-wider text-lg font-bold text-[#3d1815]">
                  FASHION BANK
                </span>
              </Link>
              <div className="w-6" />
            </div>

            {/* Navigation Links with Staggered Entrance */}
            <motion.div 
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
              className="flex flex-col space-y-6 mt-12"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => {
                        setActiveSection(link.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-2xl font-serif tracking-wide py-2 text-[#3d1815] relative w-fit block ${
                        isActive ? 'text-orange-600 font-bold' : ''
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span 
                          layoutId="mobileActiveIndicator"
                          className="absolute bottom-1 left-0 w-10 h-[2px] bg-orange-400 rounded-full" 
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Button placed below navigation links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-10"
            >
              <Link
                href="/#contact"
                onClick={() => {
                  setActiveSection('contact');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 bg-[#3d1815] text-white px-6 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-[#52221e] transition-colors shadow-md w-full text-center"
              >
                <span>GET IN TOUCH</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;