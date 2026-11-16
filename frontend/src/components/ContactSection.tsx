'use client';

import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
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
    serviceInterest: preselectedService || 'Digital Marketing',
    budgetRange: '₹50,000 - ₹1,50,000',
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
    const mailtoUrl = `mailto:Contact@momentsofmarketing.in?subject=${mailtoSubject}&body=${mailtoBody}`;

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
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[11px] font-semibold tracking-widest2 uppercase dark:text-zinc-400 text-zinc-500 block font-mono">
            07 &mdash; Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-light dark:text-white text-zinc-950">
            Let&apos;s Make Your <br />
            <span className="italic font-serif gradient-editorial-text">Next Moment Count.</span>
          </h2>
          <p className="text-sm dark:text-zinc-400 text-zinc-600 font-light leading-relaxed">
            Ready to build a stronger brand? Whether you want to increase visibility, generate quality enquiries, or create an effective digital presence, MOM is ready to help you take the next step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="pro-card p-8 rounded-3xl space-y-6">
              <span className="text-xs font-mono tracking-widest uppercase dark:text-white text-zinc-900 dark:bg-white/[0.08] bg-zinc-100 px-3 py-1 rounded-full border dark:border-white/15 border-zinc-300">
                Direct Channels
              </span>

              <div className="space-y-4 pt-2">
                {/* Phone */}
                <a
                  href="tel:+919226042236"
                  className="flex items-center gap-4 p-4 rounded-xl hairline-border dark:hover:border-white hover:border-zinc-500 dark:bg-transparent bg-zinc-50/80 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full border dark:border-white/10 border-zinc-200 flex items-center justify-center dark:text-white text-zinc-900 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-wider uppercase dark:text-zinc-400 text-zinc-500 block">Phone</span>
                    <span className="text-sm font-semibold dark:text-white text-zinc-950">+91 9226042236</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:Contact@momentsofmarketing.in"
                  className="flex items-center gap-4 p-4 rounded-xl hairline-border dark:hover:border-white hover:border-zinc-500 dark:bg-transparent bg-zinc-50/80 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full border dark:border-white/10 border-zinc-200 flex items-center justify-center dark:text-white text-zinc-900 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-wider uppercase dark:text-zinc-400 text-zinc-500 block">Email</span>
                    <span className="text-sm font-semibold dark:text-white text-zinc-950 break-all">Contact@momentsofmarketing.in</span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/momentsofmarketingofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hairline-border dark:hover:border-white hover:border-zinc-500 dark:bg-transparent bg-zinc-50/80 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full border dark:border-white/10 border-zinc-200 flex items-center justify-center dark:text-white text-zinc-900 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-wider uppercase dark:text-zinc-400 text-zinc-500 block">Instagram</span>
                    <span className="text-sm font-semibold dark:text-white text-zinc-950">@momentsofmarketingofficial</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl hairline-border text-center dark:bg-white/[0.01] bg-white shadow-sm">
              <span className="text-xs tracking-widest uppercase font-semibold dark:text-white text-zinc-950 block">
                Moments of Marketing
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
                        : 'bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400'
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
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg transition-all"
                      >
                        <span>💬 Open in WhatsApp (+91 9226042236)</span>
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
                      placeholder="e.g. Rahul Sharma"
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
                      placeholder="+91 98765 43210"
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
