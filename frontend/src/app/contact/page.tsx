'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadCaptureModal from '@/components/LeadCaptureModal';
import AppleScrollReveal from '@/components/AppleScrollReveal';

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Digital Marketing');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    budgetRange: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Format WhatsApp message
    const waText = [
      `*New Inquiry - Moments of Marketing* 🚀`,
      ``,
      `*Name:* ${formData.fullName}`,
      `*Phone:* ${formData.phone}`,
      `*Email:* ${formData.email}`,
      formData.company ? `*Company:* ${formData.company}` : null,
      formData.serviceInterest ? `*Service:* ${formData.serviceInterest}` : null,
      formData.budgetRange ? `*Budget:* ${formData.budgetRange}` : null,
      formData.message ? `*Message:* ${formData.message}` : null,
      ``,
      `_Sent via Moments of Marketing Official Website_`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/919226042236?text=${encodeURIComponent(waText)}`;

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your inquiry has been received. Redirecting to WhatsApp for instant confirmation...',
        });
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
        }, 1200);
      } else {
        // Fallback directly to WhatsApp
        setStatus({
          type: 'success',
          message: 'Redirecting to WhatsApp to complete your message with our team...',
        });
        window.open(whatsappUrl, '_blank');
      }
    } catch {
      setStatus({
        type: 'success',
        message: 'Connecting you directly to WhatsApp...',
      });
      window.open(whatsappUrl, '_blank');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="relative min-h-screen flex flex-col justify-between dark:bg-black dark:text-white bg-[#F8FAFC] text-zinc-900 overflow-hidden transition-colors duration-300"
      suppressHydrationWarning
    >
      <Navbar onOpenLeadModal={() => setModalOpen(true)} />
      <AppleScrollReveal />

      {/* Subtle Background Glow - Apple Ambient Atmosphere */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-white/[0.05] via-zinc-500/[0.03] to-transparent blur-3xl rounded-full animate-apple-ambient -z-0" />

      <div className="relative z-10 flex-1 transition-all duration-300 pt-[88px] sm:pt-[104px] md:pt-[124px]">
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-14 pt-4 sm:pt-6 pb-16 sm:pb-24 animate-in fade-in duration-300">
          
          <div className="space-y-10 sm:space-y-12">
            
            {/* Standard Hero Section Header */}
            <div className="border-b border-zinc-200 dark:border-white/10 pb-6 sm:pb-8 space-y-3 apple-reveal">
              <div>
                <span className="text-xs sm:text-[13px] font-sans font-extrabold tracking-[0.22em] uppercase text-zinc-400 dark:text-zinc-400 block">
                  CONTACT
                </span>
              </div>

              <h1 className="text-base sm:text-lg md:text-xl font-bold dark:text-zinc-200 text-zinc-800 font-display apple-reveal apple-delay-100 uppercase tracking-tight">
                LET&apos;S MAKE YOUR NEXT MOMENT COUNT.
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-3xl apple-reveal apple-delay-200">
                Ready to boost visibility, drive qualified enquiries, or sharpen your digital presence? MOM is here to help you move forward with clarity.
              </p>
            </div>

            {/* 2-Column Layout: Direct Details (Left) + Clean Form (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 items-start">
              
              {/* Left Column: Direct Contact Info */}
              <div className="lg:col-span-5 space-y-3.5 apple-reveal apple-delay-200">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-1 font-bold">
                  OFFICIAL CONTACT CHANNELS
                </span>

                {/* Phone */}
                <a
                  href="tel:+919226042236"
                  className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-white/10 dark:bg-white/[0.01] bg-white shadow-xs group apple-card-hover apple-shimmer-beam"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/[0.08] flex items-center justify-center text-zinc-900 dark:text-white border border-zinc-200/50 dark:border-white/5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-wider uppercase text-zinc-500 block font-mono">Phone no.</span>
                    <span className="text-base font-bold font-display dark:text-white text-zinc-950">+91 9226042236</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@momagency.com"
                  className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-white/10 dark:bg-white/[0.01] bg-white shadow-xs group apple-card-hover apple-shimmer-beam"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/[0.08] flex items-center justify-center text-zinc-900 dark:text-white border border-zinc-200/50 dark:border-white/5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-wider uppercase text-zinc-500 block font-mono">Email</span>
                    <span className="text-sm sm:text-base font-bold font-display dark:text-white text-zinc-950 break-all">contact@momagency.com</span>
                  </div>
                </a>
              </div>

              {/* Right Column: Clean Interactive Form */}
              <div className="lg:col-span-7 apple-reveal apple-delay-300">
                <form
                  onSubmit={handleSubmit}
                  suppressHydrationWarning
                  className="pro-card p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-sm space-y-4 apple-card-hover"
                >
                  <div className="space-y-1 pb-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-display dark:text-white text-zinc-950">
                      Send an Inquiry
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                      Fill out this quick form and our team will get back to you promptly.
                    </p>
                  </div>

                  {status && (
                    <div
                      className={`p-3.5 rounded-xl text-xs flex items-center gap-2.5 font-medium ${
                        status.type === 'success'
                          ? 'bg-zinc-100 dark:bg-white/10 border border-zinc-300 dark:border-white/20 text-zinc-900 dark:text-white'
                          : 'bg-zinc-100 dark:bg-white/10 border border-zinc-300 dark:border-white/20 text-zinc-900 dark:text-zinc-200'
                      }`}
                    >
                      {status.type === 'success' ? (
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      )}
                      <span>{status.message}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        suppressHydrationWarning
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-white/15 dark:bg-white/[0.04] bg-zinc-50 dark:text-white text-zinc-900 text-sm focus:outline-none focus:border-zinc-950 dark:focus:border-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        suppressHydrationWarning
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 12121 12121"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-white/15 dark:bg-white/[0.04] bg-zinc-50 dark:text-white text-zinc-900 text-sm focus:outline-none focus:border-zinc-950 dark:focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        suppressHydrationWarning
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-white/15 dark:bg-white/[0.04] bg-zinc-50 dark:text-white text-zinc-900 text-sm focus:outline-none focus:border-zinc-950 dark:focus:border-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                        Brand / Company Name
                      </label>
                      <input
                        type="text"
                        suppressHydrationWarning
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your Business Name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-white/15 dark:bg-white/[0.04] bg-zinc-50 dark:text-white text-zinc-900 text-sm focus:outline-none focus:border-zinc-950 dark:focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                        Service of Interest
                      </label>
                      <select
                        value={formData.serviceInterest}
                        suppressHydrationWarning
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-white/15 dark:bg-zinc-900 bg-zinc-50 text-sm focus:outline-none focus:border-zinc-950 dark:focus:border-white transition-colors cursor-pointer ${
                          !formData.serviceInterest ? 'text-zinc-400 dark:text-zinc-500' : 'dark:text-white text-zinc-900'
                        }`}
                      >
                        <option value="" disabled className="text-zinc-400 dark:text-zinc-500">
                          Select
                        </option>
                        <option value="Digital Marketing" className="text-zinc-900 dark:text-white">Digital Marketing</option>
                        <option value="Social Media Management" className="text-zinc-900 dark:text-white">Social Media Management</option>
                        <option value="Lead Generation" className="text-zinc-900 dark:text-white">Lead Generation</option>
                        <option value="Branding & Creative Design" className="text-zinc-900 dark:text-white">Branding &amp; Creative Design</option>
                        <option value="Content Creation & Video Production" className="text-zinc-900 dark:text-white">Content Creation &amp; Video</option>
                        <option value="Website Design & Development" className="text-zinc-900 dark:text-white">Website Design &amp; Development</option>
                        <option value="Performance Marketing & Paid Advertising" className="text-zinc-900 dark:text-white">Performance Marketing</option>
                        <option value="Email & WhatsApp Marketing" className="text-zinc-900 dark:text-white">Email &amp; WhatsApp Marketing</option>
                        <option value="Influencer Marketing & Brand Activations" className="text-zinc-900 dark:text-white">Influencer Marketing</option>
                        <option value="Marketing Strategy & Consulting" className="text-zinc-900 dark:text-white">Marketing Strategy</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budgetRange}
                        suppressHydrationWarning
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-white/15 dark:bg-zinc-900 bg-zinc-50 text-sm focus:outline-none focus:border-zinc-950 dark:focus:border-white transition-colors cursor-pointer ${
                          !formData.budgetRange ? 'text-zinc-400 dark:text-zinc-500' : 'dark:text-white text-zinc-900'
                        }`}
                      >
                        <option value="" disabled className="text-zinc-400 dark:text-zinc-500">
                          Select
                        </option>
                        <option value="Below ₹50,000" className="text-zinc-900 dark:text-white">Below ₹50,000</option>
                        <option value="₹50,000 - ₹1,50,000" className="text-zinc-900 dark:text-white">₹50,000 &ndash; ₹1,50,000</option>
                        <option value="₹1,50,000 - ₹3,00,000" className="text-zinc-900 dark:text-white">₹1,50,000 &ndash; ₹3,00,000</option>
                        <option value="₹3,00,000+" className="text-zinc-900 dark:text-white">₹3,00,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                      Project Goals / Message
                    </label>
                    <textarea
                      rows={3}
                      suppressHydrationWarning
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you'd like to achieve with MOM..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 dark:border-white/15 dark:bg-white/[0.04] bg-zinc-50 dark:text-white text-zinc-900 text-sm focus:outline-none focus:border-zinc-950 dark:focus:border-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    suppressHydrationWarning
                    className="w-full py-3.5 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 apple-btn-tactile shadow-md transition-all cursor-pointer disabled:opacity-50"
                  >
                    <span>{loading ? 'Submitting...' : 'Submit Inquiry & Chat on WhatsApp'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-zinc-500 pt-1">
                    Your information is kept strictly confidential &bull; No spam guaranteed
                  </p>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer />

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </main>
  );
}
