'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-[#24110f] text-white pt-12 md:pt-16 pb-8 px-4 sm:px-6 md:px-16 border-t border-[#3d1c19] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-12 md:pb-16 relative">
        
        {/* Column 1: Brand Info */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-3">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Fashion Bank Logo"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <span className="text-lg sm:text-xl font-serif font-bold tracking-wider text-amber-100">
              FASHION BANK
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
            Delivering premium quality uniforms that reflect professionalism, style and identity.
          </p>
        </div>

        {/* Divider for Desktop */}
        <div className="hidden md:block absolute left-1/3 top-4 bottom-4 w-[1px] bg-amber-600/40"></div>

        {/* Column 2: Quick Links & Updated Business Hours */}
        <div className="flex flex-col space-y-6 md:pl-12">
          <div>
            <h3 className="text-amber-500 font-semibold tracking-wider text-sm mb-3">
              QUICK LINKS
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
              <li>
                <Link href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#collections" className="hover:text-amber-400 transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="text-sm text-gray-300 space-y-1.5 pt-4 border-t border-[#3d1c19]">
            <p className="text-amber-100 font-medium">Business Hours:</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Mon - Thu & Sat - Sun: <span className="text-gray-300">11:00 AM - 7:00 PM</span>
            </p>
            <p className="text-xs font-semibold text-amber-500">
              Friday: <span className="font-normal text-amber-200">Closed (Off)</span>
            </p>
          </div>
        </div>

        {/* Divider for Desktop */}
        <div className="hidden md:block absolute left-2/3 top-4 bottom-4 w-[1px] bg-amber-600/40"></div>

        {/* Column 3: Follow Us (Direct Social Links with Hover Scale) */}
        <div className="flex flex-col space-y-4 md:pl-12">
          <h3 className="text-amber-500 font-semibold tracking-wider text-sm">
            FOLLOW US
          </h3>
          <div className="flex items-center space-x-4 pt-1">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/share/12G61rEwGk9/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-amber-500 flex items-center justify-center text-white hover:bg-amber-500 hover:text-[#24110f] transition-all"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/fashionbank.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-amber-500 flex items-center justify-center text-white hover:bg-amber-500 hover:text-[#24110f] transition-all"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </motion.a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-6 md:pt-8 border-t border-amber-600/20 text-center text-xs text-gray-400">
        © 2026 <span className="text-amber-500 font-medium">FASHION BANK</span>. All Rights Reserved.
      </div>
    </motion.footer>
  );
}