'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function LeadCaptureModal({
  isOpen,
  onClose,
  defaultService,
}: LeadCaptureModalProps) {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: defaultService || 'Digital Marketing',
    budgetRange: '₹50,000 - ₹1,50,000',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [links, setLinks] = useState<{ whatsappUrl?: string; mailtoUrl?: string }>({});

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, serviceInterest: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const waText = [
      `*New Consultation Request - Moments of Marketing* 🚀`,
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
    const mailtoSubject = encodeURIComponent(`Consultation Request: ${formData.fullName} - ${formData.serviceInterest}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nService: ${formData.serviceInterest}\nBudget: ${formData.budgetRange}\n\nMessage:\n${formData.message || 'N/A'}`
    );
    const mailtoUrl = `mailto:contact@momagency.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    setLinks({ whatsappUrl, mailtoUrl });

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (typeof window !== 'undefined') {
        window.open(whatsappUrl, '_blank');
      }
      setSubmitted(true);
    } catch {
      if (typeof window !== 'undefined') {
        window.open(whatsappUrl, '_blank');
      }
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="pro-card dark:bg-[#0A0A0C] bg-white w-full max-w-lg p-6 sm:p-8 rounded-3xl relative shadow-2xl dark:border-white/10 border-zinc-200 my-auto max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-1.5 rounded-full hairline-border dark:text-zinc-400 dark:hover:text-white text-zinc-600 hover:text-zinc-950 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full border dark:border-white/30 border-zinc-400 flex items-center justify-center dark:text-white text-zinc-900 mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-light dark:text-white text-zinc-950">Inquiry Received</h3>
            <p className="text-xs dark:text-zinc-300 text-zinc-600 max-w-sm mx-auto leading-relaxed">
              Thank you, {formData.fullName}. We are opening WhatsApp to connect with you directly. You can also send via email.
            </p>
            {links.whatsappUrl && (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
                <a
                  href={links.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-black text-xs font-semibold shadow-lg hover:opacity-90 transition-all"
                >
                  <span>💬 Chat on WhatsApp</span>
                </a>
                {links.mailtoUrl && (
                  <a
                    href={links.mailtoUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl dark:bg-white/[0.06] dark:hover:bg-white/[0.12] dark:border-white/20 dark:text-white bg-zinc-100 hover:bg-zinc-200 border-zinc-300 text-zinc-900 text-xs font-semibold transition-all"
                  >
                    <span>✉ Send Email</span>
                  </a>
                )}
              </div>
            )}
            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2 rounded-md editorial-btn-outline text-xs font-semibold cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] tracking-widest uppercase font-mono dark:text-zinc-400 text-zinc-500 block mb-1">
                  Consultation Request
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display dark:text-white text-zinc-950">
                  Let&apos;s talk about <span className="font-serif italic font-normal">your growth.</span>
                </h3>
              </div>
              <img
                src="/mom-logo-transparent.png"
                alt="MOM Logo"
                className={`h-10 w-auto object-contain hidden sm:block transition-all ${
                  theme === 'light' ? 'invert' : ''
                }`}
              />
            </div>

            <form onSubmit={handleSubmit} suppressHydrationWarning className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider dark:text-zinc-400 text-zinc-700 mb-1 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    suppressHydrationWarning
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg editorial-input text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider dark:text-zinc-400 text-zinc-700 mb-1 font-medium">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    suppressHydrationWarning
                    placeholder="+91 9226042236"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg editorial-input text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider dark:text-zinc-400 text-zinc-700 mb-1 font-medium">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    suppressHydrationWarning
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg editorial-input text-xs"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider dark:text-zinc-400 text-zinc-700 mb-1 font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    suppressHydrationWarning
                    placeholder="Brand name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg editorial-input text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider dark:text-zinc-400 text-zinc-700 mb-1 font-medium">
                  Service of Interest
                </label>
                <select
                  value={formData.serviceInterest}
                  suppressHydrationWarning
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg editorial-input text-xs dark:bg-black bg-white"
                >
                  <option value="Digital Marketing">01. Digital Marketing</option>
                  <option value="Social Media Management">02. Social Media Management</option>
                  <option value="Lead Generation">03. Lead Generation</option>
                  <option value="Branding & Creative Design">04. Branding &amp; Creative Design</option>
                  <option value="Content Creation & Video Production">05. Content Creation &amp; Video</option>
                  <option value="Website Design & Development">06. Website Design &amp; Dev</option>
                  <option value="Performance Marketing & Paid Advertising">07. Performance Marketing</option>
                  <option value="Email & WhatsApp Marketing">08. Email &amp; WhatsApp</option>
                  <option value="Influencer Marketing & Brand Activations">09. Influencer Marketing</option>
                  <option value="Marketing Strategy & Consulting">10. Marketing Strategy</option>
                  <option value="More of Music - Audio Studio">11. More of Music (Audio Studio)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider dark:text-zinc-400 text-zinc-700 mb-1 font-medium">
                  Brief Requirements *
                </label>
                <textarea
                  rows={2}
                  required
                  suppressHydrationWarning
                  placeholder="Share a short summary of your primary objectives..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg editorial-input text-xs resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl btn-primary-glow text-xs font-bold uppercase tracking-wider disabled:opacity-50 cursor-pointer"
                >
                  {loading ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
