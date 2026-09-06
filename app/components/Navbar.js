'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Optional: Add shadow or background change on scroll if needed
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

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'COLLECTIONS', href: '/collections' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#fdfbf7] ${
        isScrolled ? 'shadow-md py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 flex-shrink-0">
            {/* Replace with your actual imported logo or public path */}
            <Image
              src="/images/logo.png" 
              alt="Fashion Bank Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
          <span className="font-serif tracking-wider text-xl font-bold text-[#3d1815]">
            FASHION BANK
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative py-2 text-sm font-medium tracking-wide text-[#3d1815] hover:opacity-80 transition-opacity"
              >
                {link.name}
                {/* Yellow active underline indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#f5a623] rounded-full transition-all duration-300"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Call to Action Button */}
        <div>
          <Link
            href="/contact"
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

      </div>
    </header>
  );
};

export default Navbar;