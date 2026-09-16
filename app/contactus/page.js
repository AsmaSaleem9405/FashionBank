'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Send } from 'lucide-react';

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

          {/* Right Side: Unified Direct Channels & Workshop Card */}
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
                You can also connect with us instantly through our official handles or phone lines below:
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              
              {/* WhatsApp Link */}
              <motion.a
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://wa.me/923007668180"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3.5 sm:p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all group"
              >
                <div className="p-3 bg-emerald-100 rounded-full text-emerald-700 group-hover:scale-110 transition-transform">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">WhatsApp</h3>
                  <p className="text-gray-900 font-medium text-sm">0300-7668180</p>
                </div>
              </motion.a>

              {/* Email Link */}
              <motion.a
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="mailto:Fashionbankstitching@gmail.com"
                className="flex items-center space-x-4 p-3.5 sm:p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all group overflow-hidden"
              >
                <div className="p-3 bg-amber-100 rounded-full text-amber-700 group-hover:scale-110 transition-transform flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email Us</h3>
                  <span className="text-gray-900 font-medium text-xs sm:text-sm truncate block transition-all duration-300 group-hover:text-amber-700 group-hover:underline">
                    Fashionbankstitching@gmail.com
                  </span>
                </div>
              </motion.a>

              {/* Instagram Link */}
              <motion.a
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://instagram.com/fashionbank.official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3.5 sm:p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all group"
              >
                <div className="p-3 bg-pink-100 rounded-full text-pink-700 group-hover:scale-110 transition-transform flex items-center justify-center">
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Instagram</h3>
                  <p className="text-gray-900 font-medium text-sm">@fashionbank.official</p>
                </div>
              </motion.a>

              {/* Facebook Link */}
              <motion.a
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://facebook.com/FashionBankStitching"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-3.5 sm:p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all group"
              >
                <div className="p-3 bg-blue-100 rounded-full text-blue-700 group-hover:scale-110 transition-transform flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
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