import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // 1. Import Next.js Image component
import { MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#24110f] text-white pt-16 pb-8 px-4 md:px-16 border-t border-[#3d1c19]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 relative">
        
        {/* Column 1: Brand Info */}
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-3">
            {/* 2. Replaced fallback span with Next.js Image */}
            <div className="relative w-22 h-22 ">
              <Image
                src="/images/logo.png" // Path relative to the public folder
                alt="Fashion Bank Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-serif font-bold tracking-wider text-amber-100">
              FASHION BANK
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
            Delivering premium quality uniforms that reflect professionalism, style and identity.
          </p>
        </div>

        {/* Divider for Desktop */}
        <div className="hidden md:block absolute left-1/3 top-4 bottom-4 w-[1px] bg-amber-600/40"></div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col space-y-3 md:pl-12">
          <h3 className="text-amber-500 font-semibold tracking-wider text-sm mb-2">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-amber-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/collections" className="hover:text-amber-400 transition-colors">
                Collections
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-400 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider for Desktop */}
        <div className="hidden md:block absolute left-2/3 top-4 bottom-4 w-[1px] bg-amber-600/40"></div>

        {/* Column 3: Follow Us */}
        <div className="flex flex-col space-y-4 md:pl-12">
          <h3 className="text-amber-500 font-semibold tracking-wider text-sm">
            FOLLOW US
          </h3>
          <div className="flex items-center space-x-4 pt-1">
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-amber-500 flex items-center justify-center text-white hover:bg-amber-500 hover:text-[#24110f] transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="mailto:info@fashionbank.com"
              className="w-10 h-10 rounded-full border border-amber-500 flex items-center justify-center text-white hover:bg-amber-500 hover:text-[#24110f] transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-amber-500 flex items-center justify-center text-white hover:bg-amber-500 hover:text-[#24110f] transition-all"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com"
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
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-amber-600/20 text-center text-xs text-gray-400">
        © 2025 <span className="text-amber-500 font-medium">FASHION BANK</span>. All Rights Reserved.
      </div>
    </footer>
  );
}