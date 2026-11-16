'use client';

import React from 'react';
import { ArrowUp, Phone, Mail, MessageCircle } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t dark:border-white/[0.08] border-zinc-200 dark:bg-black bg-white pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b dark:border-white/[0.08] border-zinc-200">
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/mom-logo.png"
                alt="MOM Logo"
                className={`h-13 sm:h-14 w-auto object-contain rounded transition-all ${
                  theme === 'light' ? 'invert' : ''
                }`}
              />
            </div>
            <p className="text-xs dark:text-zinc-400 text-zinc-600 font-light max-w-sm leading-relaxed">
              Moments of Marketing &bull; More of Music &mdash; Creating Moments. Building Brands. Driving Growth.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-semibold tracking-widest dark:text-slate-400 text-zinc-600">
            <a href="#home" className="dark:hover:text-white hover:text-zinc-950 transition-colors">HOME</a>
            <a href="#pillars" className="dark:hover:text-white hover:text-zinc-950 transition-colors">PILLARS</a>
            <a href="#services" className="dark:hover:text-white hover:text-zinc-950 transition-colors">SERVICES</a>
            <a href="#approach" className="dark:hover:text-white hover:text-zinc-950 transition-colors">APPROACH</a>
            <a href="#about" className="dark:hover:text-white hover:text-zinc-950 transition-colors">ABOUT</a>
            <a href="#contact" className="dark:hover:text-white hover:text-zinc-950 transition-colors">CONTACT</a>
          </div>

          <div className="flex items-center gap-3 dark:text-slate-400 text-zinc-600">
            <a
              href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20discuss%20our%20growth."
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border dark:border-white/10 border-zinc-300 flex items-center justify-center hover:text-emerald-500 hover:border-emerald-500/40 transition-all"
              aria-label="WhatsApp"
              title="Chat on WhatsApp (+91 9226042236)"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="tel:+919226042236"
              className="w-9 h-9 rounded-full border dark:border-white/10 border-zinc-300 flex items-center justify-center dark:hover:text-white hover:text-zinc-950 dark:hover:border-white/40 hover:border-zinc-500 transition-all"
              aria-label="Phone"
              title="Call (+91 9226042236)"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:Contact@momentsofmarketing.in"
              className="w-9 h-9 rounded-full border dark:border-white/10 border-zinc-300 flex items-center justify-center dark:hover:text-white hover:text-zinc-950 dark:hover:border-white/40 hover:border-zinc-500 transition-all"
              aria-label="Email"
              title="Email MOM"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/momentsofmarketingofficial"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border dark:border-white/10 border-zinc-300 flex items-center justify-center dark:hover:text-white hover:text-zinc-950 dark:hover:border-white/40 hover:border-zinc-500 transition-all"
              aria-label="Instagram"
              title="Instagram @momentsofmarketingofficial"
            >
              <InstagramIcon className="w-4 h-4 stroke-current" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs dark:text-slate-400 text-zinc-500 font-light">
          <div suppressHydrationWarning>
            &copy; 2026 MOM &mdash; Moments of Marketing. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <span>Moments of Marketing &bull; More of Music</span>
            <span className="text-zinc-400">&bull;</span>
            <span>WhatsApp &amp; Email Connected</span>
            <button
              onClick={scrollToTop}
              className="dark:hover:text-white hover:text-zinc-950 transition-colors flex items-center gap-1 font-semibold uppercase tracking-wider cursor-pointer"
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
