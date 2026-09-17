'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Image as ImageIcon } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main 
      id="contact" 
      className="min-h-screen w-full relative overflow-x-hidden bg-gradient-to-br from-[#fdfbf7] via-[#f7f2ea] to-[#f3eadc] text-gray-900 py-12 md:py-20 px-4 sm:px-6 lg:px-16"
    >
      {/* Subtle Animated Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-5 md:left-10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-amber-200/40 blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 right-5 md:right-10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-orange-200/30 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section with Fade-up Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-amber-700 font-semibold tracking-widest text-xs uppercase mb-3 block">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-gray-900 mb-4 px-2">
            CONTACT FASHION BANK
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base px-4">
            Have questions about bulk orders, custom uniforms, or stitching requirements? Reach out to us directly or drop a message.
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-white/90 backdrop-blur-md border border-amber-900/10 p-6 sm:p-8 rounded-2xl shadow-sm"
          >
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adnan Malik"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600 bg-gray-50/50 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@domain.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600 bg-gray-50/50 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0300-7668180"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600 bg-gray-50/50 text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your inquiry or bulk order details here..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-amber-600 bg-gray-50/50 text-sm transition-colors resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-amber-700 text-white font-medium rounded-xl hover:bg-amber-800 transition-colors shadow-sm flex items-center justify-center space-x-2 text-sm disabled:opacity-50 cursor-pointer"
              >
                <Send size={16} />
                <span>{loading ? 'Sending...' : 'Send to Fashion Bank Email'}</span>
              </motion.button>

              {status && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center text-sm font-medium mt-3 ${status.includes('success') ? 'text-emerald-700' : 'text-amber-800'}`}
                >
                  {status}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Right Side: Direct Channels & Workshop Card using Custom Gallery Images */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="bg-white/90 backdrop-blur-md border border-amber-900/10 p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col space-y-6"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-2">
                Direct Channels
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connect instantly through our verified channels and gallery assets below:
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              
              {/* WhatsApp Custom Image Icon Link */}
              <motion.a
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://wa.me/923007668180"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3.5 sm:p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center overflow-hidden border border-emerald-200 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <img 
                    src="/images/whatsapp.png" 
                    alt="WhatsApp" 
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      // Fallback placeholder if local image is missing
                      e.target.src = "https://placehold.co/40x40/22c55e/ffffff?text=WA";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">WhatsApp</h3>
                  <p className="text-gray-900 font-medium text-sm">0300-7668180</p>
                </div>
              </motion.a>

              {/* Email Link */}
         <motion.a
  href="mailto:Fashionbankstitching@gmail.com"
  onClick={(e) => {
    e.preventDefault();
    window.open("https://mail.google.com/mail/?extsrc=mailto&url=mailto:Fashionbankstitching@gmail.com", "_blank", "noopener,noreferrer");
  }}
  whileHover={{ scale: 1.02, x: 4 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="flex items-center space-x-4 p-3.5 sm:p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all group overflow-hidden cursor-pointer"
>
  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center border border-amber-200 flex-shrink-0 group-hover:scale-110 transition-transform overflow-hidden">
    <img 
      src="/images/mail.png" 
      alt="Email" 
      className="w-full h-full object-cover"
      onError={(e) => { e.currentTarget.style.display = 'none'; }} 
    />
  </div>
  <div className="min-w-0">
    <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email Us</h3>
    <span className="text-gray-900 font-medium text-xs sm:text-sm truncate block transition-all duration-300 group-hover:text-amber-700 group-hover:underline">
      Fashionbankstitching@gmail.com
    </span>
  </div>
</motion.a>
           
              {/* Instagram Custom Image Icon Link */}
              <motion.a
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://instagram.com/fashionbank.official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3.5 sm:p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center overflow-hidden border border-pink-200 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <img 
                    src="/images/instagram.png" 
                    alt="Instagram" 
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/40x40/db2777/ffffff?text=IG";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Instagram</h3>
                  <p className="text-gray-900 font-medium text-sm">@fashionbank.official</p>
                </div>
              </motion.a>

              {/* Facebook Custom Image Icon Link */}
              <motion.a
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://facebook.com/FashionBankStitching"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3.5 sm:p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center overflow-hidden border border-blue-200 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <img 
                    src="/images/fb.png" 
                    alt="Facebook" 
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/40x40/2563eb/ffffff?text=FB";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Facebook</h3>
                  <p className="text-gray-900 font-medium text-sm">FashionBankStitching</p>
                </div>
              </motion.a>

            </div>

            {/* Workshop Information Section */}
            <div className="p-5 sm:p-6 rounded-2xl bg-amber-900 text-amber-50 shadow-sm mt-4">
              <h3 className="font-serif font-bold text-base sm:text-lg mb-2 text-amber-100">Visit Our Workshop</h3>
              <p className="text-amber-200/80 text-xs sm:text-sm leading-relaxed">
                Faisalabad, Pakistan — Operating with master tailors and stitching excellence since 1997.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </main>
  );
}