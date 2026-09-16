'use client';
import React, { useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ShieldCheck, Scissors, Palette, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const collectionsData = [
  {
    id: 'waiter-Uniform',
    number: '01',
    title: 'WAITER UNIFORM',
    subtitle: 'COLLECTION 01',
    description: 'Professional, comfortable uniforms designed to give your hotel team a polished and consistent appearance.',
    image: '/images/1uni.png',
    gallery: [
      { type: 'image', url: '/images/1uni.png' },
      { type: 'image', url: '/images/2uni.png' },
      { type: 'image', url: '/images/4uni.png' },
      { type: 'image', url: '/images/3uni.png' },
      { type: 'video', url: '/videos/reduni.mp4', poster: '/images/hotel-video-poster.png' },
    ]
  },
  {
    id: 'cheff-uniform',
    number: '02',
    title: 'CHEFF UNIFORM',
    subtitle: 'COLLECTION 02',
    description: 'Durable, stylish kitchen and front-of-house wear built for high-paced culinary environments.',
    image: '/images/8uni.png',
    gallery: [
      { type: 'image', url: '/images/8uni.png' },
      { type: 'image', url: '/images/7uni.png' },
      { type: 'image', url: '/images/6uni.png' },
      { type: 'video', url: '/videos/cheffuni.mp4' },
    ]
  },
  {
    id: 'cafe-uniform',
    number: '03',
    title: 'CAFE UNIFORM',
    subtitle: 'COLLECTION 03',
    description: 'Sophisticated suits and formal office attire that project authority, trust, and elegance.',
    image: '/images/12uni.png',
    gallery: [
      { type: 'image', url: '/images/12uni.png' },
      { type: 'image', url: '/images/9 uni.png' },
      { type: 'image', url: '/images/11uni.png' },
      { type: 'image', url: '/images/10uni.png' },
      { type: 'video', url: '/videos/cafeuni.mp4' },
    ]
  },
  {
    id: 'frontdesk-uniform',
    number: '04',
    title: 'FRONTDESK UNIFORM',
    subtitle: 'COLLECTION 04',
    description: 'Clean, professional medical lab coats and staff wear ensuring hygiene and comfort.',
    image: '/images/17uni.png',
    gallery: [
      { type: 'image', url: '/images/17uni.png' },
      { type: 'image', url: '/images/13uni.png' },
      { type: 'image', url: '/images/14uni.png' },
      { type: 'image', url: '/images/16uni.png' },
      { type: 'video', url: '/videos/frontuni.mp4' },
    ]
  },
  {
    id: 'bellboy-uniform',
    number: '05',
    title: 'BELL BOY UNIFORM',
    subtitle: 'COLLECTION 05',
    description: 'Active and smart apparel tailored for coordinators, hosts, and hospitality staff on the move.',
    image: '/images/21uni.png',
    gallery: [
      { type: 'image', url: '/images/21uni.png' },
      { type: 'image', url: '/images/20uni.png' },
      { type: 'image', url: '/images/19uni.png' },
      { type: 'video', url: '/videos/belluni.mp4' },
    ]
  },
  {
    id: 'musician-uniform',
    number: '06',
    title: 'MUSICIAN UNIFORM',
    subtitle: 'COLLECTION 06',
    description: 'Fully personalized uniform solutions crafted precisely to your brand guidelines and style choices.',
    image: '/images/25uni.png',
    gallery: [
      { type: 'image', url: '/images/25uni.png' },
      { type: 'image', url: '/images/24uni.png' },
      { type: 'image', url: '/images/23uni.png' },
      { type: 'image', url: '/images/26uni.png' },
      { type: 'video', url: '/videos/musicianuni.mp4' },
    ]
  },
];

const features = [
  {
    icon: Award,
    title: 'PREMIUM QUALITY',
    description: 'Top grade fabrics chosen for comfort and lasting durability.',
    tag: 'Grade A',
  },
  {
    icon: Scissors,
    title: 'TAILORED FIT',
    description: 'Expert stitching ensures a smart, professional appearance.',
    tag: 'Precision',
  },
  {
    icon: Palette,
    title: 'CUSTOM DESIGN',
    description: 'Fully personalize colors, branding, and style to match needs.',
    tag: 'Bespoke',
  },
  {
    icon: ShieldCheck,
    title: 'TRUSTED BY EXPERTS',
    description: 'Preferred choice for leading brands and industry professionals.',
    tag: 'Verified',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function CollectionsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const collectionsRef = useRef(null);

  // Automatically scroll down when returning from a detail page
  React.useEffect(() => {
    const shouldScroll = searchParams.get('scroll');
    if (shouldScroll === 'true' && collectionsRef.current) {
      collectionsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  const handleSelectCollection = (id) => {
    router.push(`/collections/${id}`);
  };

  return (
    <section ref={collectionsRef} id="collections" className="bg-[#FDFBF7] text-[#2C1810] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Header Section with Smooth Reveal */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <div className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-widest text-[#D9822B] uppercase mb-3">
          <span>— OUR COLLECTIONS —</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2C1810]">
          UNIFORMS FOR EVERY NEED
        </h2>
      </motion.div>

      {/* Grid of 6 Collections with Staggered Entrance Animation */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {collectionsData.map((item) => (
          <motion.div 
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            onClick={() => handleSelectCollection(item.id)}
            className="group relative rounded-2xl overflow-hidden shadow-xl flex flex-col justify-end h-72 sm:h-84 lg:h-96 w-full bg-stone-900 cursor-pointer"
          >
            {/* Background Image with Zoom on Hover */}
            <div className="absolute inset-0">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D150C] via-[#2D150C]/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

            {/* Content info */}
            <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between w-full">
              <div className="flex items-start space-x-3 sm:space-x-4 w-full">
                <span className="text-2xl sm:text-4xl font-black text-[#EFA93E] tracking-tighter shrink-0">
                  {item.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg tracking-wide leading-snug">
                    {item.title}
                  </h3>
                  <span className="mt-1.5 inline-flex items-center text-xs sm:text-sm font-semibold text-[#EFA93E] group-hover:text-white transition-colors">
                    <span>VIEW COLLECTION</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modernized Bottom Features Cards Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {features.map((feature, idx) => {
          const IconComponent = feature.icon;
          return (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className="group relative bg-[#FAF7F0] rounded-2xl p-5 sm:p-6 border border-[#EFECE6] hover:border-[#D9822B]/40 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#D9822B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FEF6E8] group-hover:bg-[#D9822B] flex items-center justify-center shrink-0 transition-colors duration-300 shadow-xs">
                    <IconComponent className="w-6 h-6 text-[#D9822B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D9822B] bg-[#FEF6E8] px-2.5 py-1 rounded-full border border-[#D9822B]/20">
                    {feature.tag}
                  </span>
                </div>

                <h4 className="font-bold text-sm tracking-wide text-[#2C1810] group-hover:text-[#D9822B] transition-colors">
                  {feature.title}
                </h4>
                <p className="text-xs text-stone-500 mt-1.5 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FDFBF7]" />}>
      <CollectionsContent />
    </Suspense>
  );
}