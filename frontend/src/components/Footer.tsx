'use client';

import React from 'react';
import { ArrowUp, Phone, Mail, MessageCircle } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t dark:border-white/[0.08] border-zinc-200 dark:bg-black bg-white py-8 sm:py-10 transition-colors select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Unified, Clean Single-Row Content (Not Split!) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b dark:border-white/[0.08] border-zinc-200 text-center md:text-left">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5">
            <img
              src="/mom-logo-transparent.png"
              alt="MOM Logo"
              className={`h-12 sm:h-14 md:h-16 w-auto object-contain transition-all ${
                theme === 'light' ? 'invert' : ''
              }`}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold tracking-wider uppercase font-display dark:text-white text-zinc-950">
                Moments of Marketing &bull; More of Music
              </span>
              <span className="text-[11px] font-sans text-zinc-500 dark:text-zinc-400 mt-0.5">
                Creating Moments. Building Brands. Driving Growth.
              </span>
            </div>
          </div>

          {/* Compact Contact Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <a
              href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20connect."
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-full border border-zinc-300 dark:border-white/15 dark:hover:border-emerald-400/60 dark:text-zinc-300 dark:hover:text-emerald-400 text-zinc-700 hover:border-emerald-500/60 hover:text-emerald-600 transition-all flex items-center gap-1.5 text-xs font-mono shadow-sm active:scale-95"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+919226042236"
              className="px-3.5 py-1.5 rounded-full border border-zinc-300 dark:border-white/15 dark:text-zinc-300 text-zinc-700 dark:hover:text-white hover:text-zinc-950 transition-all flex items-center gap-1.5 text-xs font-mono shadow-sm active:scale-95"
              title="Call"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9226042236</span>
            </a>

            <a
              href="mailto:Contact@momentsofmarketing.in"
              className="px-3.5 py-1.5 rounded-full border border-zinc-300 dark:border-white/15 dark:text-zinc-300 text-zinc-700 dark:hover:text-white hover:text-zinc-950 transition-all flex items-center gap-1.5 text-xs font-mono shadow-sm active:scale-95"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact@momentsofmarketing.in</span>
            </a>

            <a
              href="https://instagram.com/momentsofmarketingofficial"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-full border border-zinc-300 dark:border-white/15 dark:text-zinc-300 text-zinc-700 dark:hover:text-white hover:text-zinc-950 transition-all flex items-center gap-1.5 text-xs font-mono shadow-sm active:scale-95"
              title="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5 stroke-current" />
              <span>@momentsofmarketingofficial</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
          <p>
            &copy; 2026 MOM &mdash; All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
