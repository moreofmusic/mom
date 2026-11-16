'use client';

import React from 'react';
import { ArrowUp, Phone, Mail, MessageCircle } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-black pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.08]">
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/mom-logo.png"
                alt="MOM Logo"
                className="h-13 sm:h-14 w-auto object-contain rounded"
              />
            </div>
            <p className="text-xs text-zinc-400 font-light max-w-sm leading-relaxed">
              Moments of Marketing &bull; More of Music &mdash; Creating Moments. Building Brands. Driving Growth.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-semibold tracking-widest text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">HOME</a>
            <a href="#pillars" className="hover:text-white transition-colors">PILLARS</a>
            <a href="#services" className="hover:text-white transition-colors">SERVICES</a>
            <a href="#approach" className="hover:text-white transition-colors">APPROACH</a>
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <a
              href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20discuss%20our%20growth."
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              aria-label="WhatsApp"
              title="Chat on WhatsApp (+91 9226042236)"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="tel:+919226042236"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-white/40 transition-all"
              aria-label="Phone"
              title="Call (+91 9226042236)"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:Contact@momentsofmarketing.in"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-white/40 transition-all"
              aria-label="Email"
              title="Email MOM"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/momentsofmarketingofficial"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:text-white hover:border-white/40 transition-all"
              aria-label="Instagram"
              title="Instagram @momentsofmarketingofficial"
            >
              <InstagramIcon className="w-4 h-4 stroke-current" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
          <div suppressHydrationWarning>
            &copy; 2026 MOM &mdash; Moments of Marketing. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <span>Editorial Luminous Dark UI</span>
            <span className="text-zinc-500">&bull;</span>
            <span>WhatsApp &amp; Email Connected</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 font-semibold uppercase tracking-wider cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
