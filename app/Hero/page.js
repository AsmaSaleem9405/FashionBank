import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home">
    <div  className="relative min-h-[calc(100vh-6rem)] flex items-center overflow-hidden">
      
      {/* Full Screen Background Image with Wave */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg1.png"
          alt="Background Design"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 relative z-10">
        
        {/* Left Content Section */}
        <div className="flex flex-col items-start">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs md:text-sm font-semibold tracking-widest text-[#f5a623]">
              PREMIUM UNIFORMS
            </span>
            <div className="w-10 h-[2px] bg-[#f5a623]"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#3d1815] leading-tight mb-6">
            UNIFORMS <br />
            THAT DEFINE <br />
            <span className="text-[#f5a623]">YOUR IDENTITY.</span>
          </h1>

          <p className="text-gray-700 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
            Professional. Stylish. Durable. Tailored uniforms for every industry and occasion.
          </p>

          <Link
            href="/collections"
            className="flex items-center gap-3 bg-[#3d1815] text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-[#52221e] transition-all shadow-md group"
          >
            <span>EXPLORE COLLECTION</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>

        </div>

        {/* Right Uniform Image Section */}
        <div className="relative flex justify-center items-center lg:justify-end">
          <div className="relative w-full max-w-[500px] h-[450px] md:h-[650px] -mb-12">
            <Image
              src="/images/uni.png" 
              alt="Premium Chef Uniform"
              fill
              className="object-contain object-bottom drop-shadow-2xl "
              priority
            />
          </div>
        </div>

      </div>
    </div>
    </section>
  );
}