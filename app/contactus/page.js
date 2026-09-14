'use client';

import React, { useState } from 'react';
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
    <main id="contact" className="min-h-screen w-full relative overflow-x-hidden bg-gradient-to-br from-[#fdfbf7] via-[#f7f2ea] to-[#f3eadc] text-gray-900 py-16 px-4 md:px-16">

      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-orange-200/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-amber-700 font-semibold tracking-widest text-xs uppercase mb-3 block">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-gray-900 mb-4">
            CONTACT FASHION BANK
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Have questions about bulk orders, custom uniforms, or stitching requirements? Reach out to us directly or drop a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Form */}
          <div className="bg-white/90 backdrop-blur-md border border-amber-900/10 p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
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

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-amber-700 text-white font-medium rounded-xl hover:bg-amber-800 transition-colors shadow-sm flex items-center justify-center space-x-2 text-sm disabled:opacity-50"
              >
                <Send size={16} />
                <span>{loading ? 'Sending...' : 'Send to Fashion Bank Email'}</span>
              </button>

              {status && (
                <p className={`text-center text-sm font-medium mt-3 ${status.includes('success') ? 'text-emerald-700' : 'text-amber-800'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Right Side: Unified Direct Channels & Workshop Card */}
          <div className="bg-white/90 backdrop-blur-md border border-amber-900/10 p-8 rounded-2xl shadow-sm flex flex-col space-y-6 lg:pl-6">
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                Direct Channels
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                You can also connect with us instantly through our official handles or phone lines below:
              </p>
            </div>

            <div className="space-y-4">
              
              {/* WhatsApp Link */}
              <a
                href="https://wa.me/923007668180"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all group"
              >
                <div className="p-3 bg-emerald-100 rounded-full text-emerald-700 group-hover:scale-105 transition-transform">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">WhatsApp</h3>
                  <p className="text-gray-900 font-medium text-sm">0300-7668180</p>
                </div>
              </a>

              {/* Email Link */}
              <a
                href="mailto:Fashionbankstitching@gmail.com"
                className="flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all group"
              >
                <div className="p-3 bg-amber-100 rounded-full text-amber-700 group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email Us</h3>
                  <span className="text-gray-900 font-medium text-sm transition-all duration-300 group-hover:text-amber-700 group-hover:underline">
                    Fashionbankstitching@gmail.com
                  </span>
                </div>
              </a>

              {/* Instagram Link */}
              <a
                href="https://instagram.com/fashionbank.official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all group"
              >
                <div className="p-3 bg-pink-100 rounded-full text-pink-700 group-hover:scale-105 transition-transform flex items-center justify-center">
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
              </a>

              {/* Facebook Link */}
              <a
                href="https://facebook.com/FashionBankStitching"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50/50 transition-all group"
              >
                <div className="p-3 bg-blue-100 rounded-full text-blue-700 group-hover:scale-105 transition-transform flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Facebook</h3>
                  <p className="text-gray-900 font-medium text-sm">FashionBankStitching</p>
                </div>
              </a>

            </div>

            {/* Workshop Information Section (Integrated inside right column) */}
            <div className="p-6 rounded-2xl bg-amber-900 text-amber-50 shadow-sm mt-4">
              <h3 className="font-serif font-bold text-lg mb-2 text-amber-100">Visit Our Workshop</h3>
              <p className="text-amber-200/80 text-sm leading-relaxed">
                Faisalabad, Pakistan — Operating with master tailors and stitching excellence since 1997.
              </p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}