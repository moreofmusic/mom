'use client';

import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

interface ContactSectionProps {
  preselectedService?: string;
}

export default function ContactSection({ preselectedService }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: preselectedService || '',
    budgetRange: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    message: string;
    whatsappUrl?: string;
    mailtoUrl?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Format WhatsApp & Mailto message locally for immediate delivery
    const waText = [
      `*New Inquiry - Moments of Marketing* 🚀`,
      ``,
      `*Name:* ${formData.fullName}`,
      `*Phone:* ${formData.phone}`,
      `*Email:* ${formData.email}`,
      formData.company ? `*Company:* ${formData.company}` : null,
      `*Service:* ${formData.serviceInterest}`,
      `*Budget:* ${formData.budgetRange}`,
      formData.message ? `*Message:* ${formData.message}` : null,
      ``,
      `_Sent via Moments of Marketing Website_`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/919226042236?text=${encodeURIComponent(waText)}`;
    const mailtoSubject = encodeURIComponent(`New Inquiry from ${formData.fullName} - ${formData.serviceInterest}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nService: ${formData.serviceInterest}\nBudget: ${formData.budgetRange}\n\nMessage:\n${formData.message || 'N/A'}`
    );
    const mailtoUrl = `mailto:contact@momagency.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Automatically trigger WhatsApp in a new tab
      if (typeof window !== 'undefined') {
        window.open(whatsappUrl, '_blank');
      }

      setStatus({
        type: 'success',
        message: 'Inquiry registered! We are connecting you directly on WhatsApp and email.',
        whatsappUrl,
        mailtoUrl,
      });

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        serviceInterest: 'Digital Marketing',
        budgetRange: '₹50,000 - ₹1,50,000',
        message: '',
      });
    } catch {
      if (typeof window !== 'undefined') {
        window.open(whatsappUrl, '_blank');
      }
      setStatus({
        type: 'success',
        message: 'Inquiry prepared! Click below to send directly via WhatsApp or Email.',
        whatsappUrl,
        mailtoUrl,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header: Exact Screenshot 3 Callout */}
        <div className="max-w-4xl mb-16 space-y-4">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-extrabold tracking-[-0.035em] dark:text-white text-zinc-950 font-display leading-[0.96]">
            The future of your brand<br />
            <span className="font-serif italic font-normal dark:text-white text-zinc-950">begins here.</span>
          </h2>

          <p className="text-lg sm:text-2xl dark:text-zinc-300 text-zinc-700 font-light pt-2">
            Let&apos;s build it together. For queries &middot;{' '}
            <a
              href="mailto:contact@momagency.com"
              className="font-bold underline underline-offset-4 dark:text-white text-zinc-950 hover:opacity-80 transition-opacity"
            >
              contact@momagency.com
            </a>{' '}
            &middot;{' '}
            <a
              href="tel:+919226042236"
              className="font-bold underline underline-offset-4 dark:text-white text-zinc-950 hover:opacity-80 transition-opacity"
            >
              +91 9226042236
            </a>
          </p>

          <p className="text-sm sm:text-base dark:text-zinc-400 text-zinc-600 font-light leading-relaxed max-w-2xl pt-1">
            Ready to boost visibility, drive qualified enquiries, or sharpen your digital presence? MOM is here to help you move forward with clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="pro-card p-8 rounded-3xl space-y-6 border border-zinc-200 dark:border-white/10 shadow-sm">
              {/* Non-clickable Chip: Strictly NO OUTLINE */}
              <span className="text-xs font-mono tracking-widest uppercase dark:text-white text-zinc-900 dark:bg-white/[0.08] bg-zinc-200/80 px-3.5 py-1.5 rounded-full font-bold">
                Direct Channels
              </span>

              <div className="space-y-4 pt-2">
                {/* Phone: Clickable so OUTLINED */}
                <a
                  href="tel:+919226042236"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-white/10 hover:border-black dark:hover:border-white dark:bg-white/[0.01] bg-zinc-50 transition-all duration-300 group active:scale-[0.98] shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl dark:bg-white/[0.06] bg-zinc-200/70 flex items-center justify-center dark:text-white text-zinc-900 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-wider uppercase dark:text-zinc-400 text-zinc-500 block font-mono">Phone No.</span>
                    <span className="text-base font-bold font-display dark:text-white text-zinc-950">+91 9226042236</span>
                  </div>
                </a>

                {/* Email: Clickable so OUTLINED */}
                <a
                  href="mailto:contact@momagency.com"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-white/10 hover:border-black dark:hover:border-white dark:bg-white/[0.01] bg-zinc-50 transition-all duration-300 group active:scale-[0.98] shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl dark:bg-white/[0.06] bg-zinc-200/70 flex items-center justify-center dark:text-white text-zinc-900 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-wider uppercase dark:text-zinc-400 text-zinc-500 block font-mono">Official Email</span>
                    <span className="text-sm sm:text-base font-bold font-display dark:text-white text-zinc-950 break-all">contact@momagency.com</span>
                  </div>
                </a>

                {/* Instagram: Clickable so OUTLINED */}
                <a
                  href="https://instagram.com/momentsofmarketingofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-white/10 hover:border-black dark:hover:border-white dark:bg-white/[0.01] bg-zinc-50 transition-all duration-300 group active:scale-[0.98] shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl dark:bg-white/[0.06] bg-zinc-200/70 flex items-center justify-center dark:text-white text-zinc-900 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-wider uppercase dark:text-zinc-400 text-zinc-500 block font-mono">Instagram Official</span>
                    <span className="text-sm sm:text-base font-bold font-display dark:text-white text-zinc-950">@momentsofmarketingofficial</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-white/10 text-center dark:bg-white/[0.01] bg-white shadow-sm">
              <span className="text-xs tracking-widest uppercase font-bold dark:text-white text-zinc-950 block font-display">
                Moments of Marketing &bull; More of Music
              </span>
              <p className="text-xs dark:text-zinc-400 text-zinc-600 font-light mt-1">
                Creating Moments. Building Brands. Driving Growth.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Non-Congested Form */}
          <div className="lg:col-span-7">
            <div className="pro-card p-8 sm:p-10 rounded-3xl">
              <div className="mb-6">
                <span className="text-xs font-mono tracking-widest uppercase dark:text-zinc-400 text-zinc-500 block mb-1">
                  Start Your Inquiry
                </span>
                <h3 className="text-xl sm:text-2xl font-light dark:text-white text-zinc-950">
                  Let&apos;s Talk About Your Growth
                </h3>
              </div>

              {status && (
                <div className="space-y-3 mb-6">
                  <div
                    className={`p-4 rounded-xl flex items-start gap-3 ${
                      status.type === 'success'
                        ? 'dark:bg-white/[0.08] dark:border-white/20 dark:text-white bg-zinc-100 border-zinc-300 text-zinc-900'
                        : 'bg-zinc-100 border border-zinc-300 text-zinc-900 dark:bg-white/10 dark:border-white/20 dark:text-zinc-200'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 dark:text-white text-zinc-900" />
                    ) : (
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="text-xs font-medium leading-relaxed">{status.message}</p>
                  </div>

                  {status.whatsappUrl && (
                    <div className="flex flex-wrap gap-2.5">
                      <a
                        href={status.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-black text-xs font-semibold shadow-lg hover:opacity-90 transition-all"
                      >
                        <MessageCircle className="w-4 h-4 text-white dark:text-black flex-shrink-0" />
                        <span>Open Chat (+91 9226042236)</span>
                      </a>
                      {status.mailtoUrl && (
                        <a
                          href={status.mailtoUrl}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl dark:bg-white/[0.06] dark:hover:bg-white/[0.12] dark:border-white/20 dark:text-white bg-zinc-100 hover:bg-zinc-200 border-zinc-300 text-zinc-900 text-xs font-semibold transition-all"
                        >
                          <span>✉ Open in Email</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider dark:text-zinc-400 text-zinc-700 mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg editorial-input text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider dark:text-zinc-400 text-zinc-700 mb-1.5 font-medium">
                      Company / Brand
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Brands"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg editorial-input text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider dark:text-zinc-400 text-zinc-700 mb-1.5 font-medium">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg editorial-input text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider dark:text-zinc-400 text-zinc-700 mb-1.5 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 12121 12121"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg editorial-input text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider dark:text-zinc-400 text-zinc-700 mb-1.5 font-medium">
                      Service of Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg editorial-input text-xs dark:bg-black bg-white"
                    >
                      <option value="" disabled>Select</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Social Media Management">Social Media Management</option>
                      <option value="Lead Generation">Lead Generation</option>
                      <option value="Branding & Creative Design">Branding &amp; Creative Design</option>
                      <option value="Content Creation & Video">Content Creation &amp; Video</option>
                      <option value="Website Design & Dev">Website Design &amp; Dev</option>
                      <option value="Performance Marketing">Performance Marketing</option>
                      <option value="Email & WhatsApp Marketing">Email &amp; WhatsApp Marketing</option>
                      <option value="Influencer & Activations">Influencer &amp; Activations</option>
                      <option value="Marketing Strategy & Consulting">Marketing Strategy &amp; Consulting</option>
                      <option value="Sonic Branding (More of Music)">Sonic Branding (More of Music)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider dark:text-zinc-400 text-zinc-700 mb-1.5 font-medium">
                      Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg editorial-input text-xs dark:bg-black bg-white"
                    >
                      <option value="" disabled>Select</option>
                      <option value="< ₹50,000">&lt; ₹50,000</option>
                      <option value="₹50,000 - ₹1,50,000">₹50,000 - ₹1,50,000</option>
                      <option value="₹1,50,000 - ₹3,50,000">₹1,50,000 - ₹3,50,000</option>
                      <option value="₹3,50,000+">₹3,50,000+ (Scale)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                    Brief Requirements *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your brand goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg editorial-input text-xs resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl btn-primary-glow text-xs font-bold uppercase tracking-wider disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? 'SUBMITTING...' : "LET'S TALK ABOUT YOUR GROWTH"}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
