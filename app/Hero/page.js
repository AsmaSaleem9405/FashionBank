'import client'; // If using Next.js App Router with client-side interactivity

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden">
      <div className="relative min-h-[calc(100vh-6rem)] flex items-center">
        
        {/* Full Screen Background Image with Fade-in Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/bg1.png"
            alt="Background Design"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 relative z-10">
          
          {/* Left Content Section with Staggered Entrance */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2,
                },
              },
            }}
            className="flex flex-col items-start"
          >
            
            {/* Tagline Animation */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-xs md:text-sm font-semibold tracking-widest text-[#f5a623]">
                PREMIUM UNIFORMS
              </span>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "2.5rem" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                className="h-[2px] bg-[#f5a623]"
              />
            </motion.div>

            {/* Heading Animation */}
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
              }}
              className="text-4xl md:text-6xl font-['Cormorant_Garamond'] font-light text-[#3d1815] leading-tight mb-6"
            >
              UNIFORMS <br />
              THAT DEFINE <br />
              <span className="text-[#f5a623] font-normal">YOUR IDENTITY.</span>
            </motion.h1>

            {/* Paragraph Animation */}
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
              }}
              className="text-gray-700 text-base md:text-lg max-w-lg mb-8 leading-relaxed"
            >
              Professional. Stylish. Durable. Tailored uniforms for every industry and occasion.
            </motion.p>

            {/* CTA Group Animation */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="#collections"
                className="flex items-center justify-center gap-3 bg-[#3d1815] text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-[#52221e] transition-all shadow-lg hover:shadow-xl group"
              >
                <span>EXPLORE COLLECTION</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </motion.div>

          </motion.div>

          {/* Right Uniform Image Section (Static & Grounded) */}
          <div className="relative flex justify-center items-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-[500px] h-[450px] md:h-[650px] -mb-12 flex items-end justify-center"
            >
              
              {/* Floor Shadow (Static) */}
              <div className="absolute bottom-2 w-3/4 h-12 bg-black/15 blur-xl rounded-full z-0 pointer-events-none" />

              {/* Uniform Image (No Floating Effect) */}
              <div className="relative w-full h-full z-10">
                <Image
                  src="/images/uni.png" 
                  alt="Premium Chef Uniform"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                  priority
                />
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}