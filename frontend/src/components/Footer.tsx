'use client';

import React from 'react';
import { ArrowUp, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
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
    <footer className="border-t dark:border-white/[0.08] border-zinc-200 dark:bg-black bg-white pt-14 sm:pt-20 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Top Brand & Contact Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 sm:pb-16 border-b dark:border-white/[0.08] border-zinc-200">
          
          <div className="space-y-4 max-w-lg">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <img
                src="/mom-logo-transparent.png"
                alt="MOM Logo"
                className={`h-12 sm:h-16 md:h-18 w-auto object-contain transition-all ${
                  theme === 'light' ? 'invert' : ''
                }`}
              />
              <div className="flex flex-col justify-center leading-tight">
                <span className="text-xs sm:text-sm md:text-base font-black tracking-[0.14em] uppercase font-display dark:text-white text-zinc-950">
                  More of Music
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.16em] uppercase font-mono dark:text-zinc-400 text-zinc-500 mt-0.5">
                  Moments of Marketing
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-600 font-light leading-relaxed">
              Two specialized powerhouses under one roof &mdash; Creating Moments. Building Brands. Driving Growth. Exporting Indian sound and creative culture to the world.
            </p>
          </div>

          {/* Contact Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20discuss%20our%20growth."
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full border border-zinc-300 dark:border-white/15 dark:hover:border-emerald-400/60 dark:text-zinc-300 dark:hover:text-emerald-400 text-zinc-700 hover:border-emerald-500/60 hover:text-emerald-600 transition-all flex items-center justify-center gap-2 text-xs font-mono shadow-sm active:scale-95"
              title="Chat on WhatsApp (+91 9226042236)"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="tel:+919226042236"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full border border-zinc-300 dark:border-white/15 dark:text-zinc-300 text-zinc-700 dark:hover:text-white hover:text-zinc-950 dark:hover:border-white/40 hover:border-zinc-500 transition-all flex items-center justify-center gap-2 text-xs font-mono shadow-sm active:scale-95"
              title="Call (+91 9226042236)"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9226042236</span>
            </a>

            <a
              href="mailto:Contact@momentsofmarketing.in"
              className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-zinc-300 dark:border-white/15 dark:text-zinc-300 text-zinc-700 dark:hover:text-white hover:text-zinc-950 dark:hover:border-white/40 hover:border-zinc-500 transition-all flex items-center justify-center gap-2 text-xs font-mono shadow-sm active:scale-95"
              title="Email MOM"
            >
              <Mail className="w-4 h-4" />
              <span>Contact@momentsofmarketing.in</span>
            </a>

            <a
              href="https://instagram.com/momentsofmarketingofficial"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-zinc-300 dark:border-white/15 dark:text-zinc-300 text-zinc-700 dark:hover:text-white hover:text-zinc-950 dark:hover:border-white/40 hover:border-zinc-500 transition-all flex items-center justify-center gap-2 text-xs font-mono shadow-sm active:scale-95"
              title="Instagram @momentsofmarketingofficial"
            >
              <InstagramIcon className="w-4 h-4 stroke-current" />
              <span>@momentsofmarketingofficial</span>
            </a>
          </div>

        </div>

        {/* Middle Navigation Grid: 3 Clean Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 py-12 sm:py-16 border-b dark:border-white/[0.08] border-zinc-200">
          
          {/* Column 1: Moments of Marketing */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-emerald-400 font-bold block">
              MOMENTS OF MARKETING
            </span>
            <ul className="space-y-2 text-xs font-light dark:text-zinc-400 text-zinc-600">
              <li>
                <a href="#services" className="hover:underline dark:hover:text-white hover:text-zinc-950 transition-colors">
                  The 10 Operational Desks
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:underline dark:hover:text-white hover:text-zinc-950 transition-colors">
                  Three Pillars of Growth &amp; Why Choose Us
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:underline dark:hover:text-white hover:text-zinc-950 transition-colors">
                  5-Step Scalable Approach
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline dark:hover:text-white hover:text-zinc-950 transition-colors">
                  Mission, Vision &amp; Core Values
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline dark:hover:text-white hover:text-zinc-950 transition-colors">
                  Growth Consultation Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: More of Music */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-zinc-300 font-bold block">
              MORE OF MUSIC
            </span>
            <ul className="space-y-2 text-xs font-light dark:text-zinc-400 text-zinc-600">
              <li>
                <a href="#services" className="hover:underline dark:hover:text-white hover:text-zinc-950 transition-colors">
                  Sonic Branding &amp; Audio Mnemonics
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline dark:hover:text-white hover:text-zinc-950 transition-colors">
                  Commercial Scoring &amp; Production
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline dark:hover:text-white hover:text-zinc-950 transition-colors">
                  Sync Licensing &amp; Rights Placement
                </a>
              </li>
              <li>
                <a href="#roster" className="hover:underline dark:hover:text-white hover:text-zinc-950 transition-colors">
                  The Roster &amp; Artist Management
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline dark:hover:text-white hover:text-zinc-950 transition-colors">
                  Recording Studio Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Locations */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <span className="text-[11px] font-mono tracking-[0.22em] uppercase dark:text-zinc-400 text-zinc-500 font-bold block">
              HEADQUARTERS &amp; REACH
            </span>
            <div className="space-y-2 text-xs font-light dark:text-zinc-400 text-zinc-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-emerald-400" />
                <span>Pune &bull; Mumbai &bull; Global Operations</span>
              </div>
              <p className="leading-relaxed pt-1">
                Serving visionary brands, creators, and enterprises worldwide with high-intent performance marketing and world-class sonic architecture.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-bold tracking-wider text-emerald-500 hover:underline"
                >
                  <span>Schedule Consultation &rarr;</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs dark:text-zinc-400 text-zinc-500 font-mono text-center sm:text-left">
          <div suppressHydrationWarning>
            &copy; 2026 MOM &mdash; More of Music &bull; Moments of Marketing. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden md:inline">Pune &bull; Mumbai &bull; Global</span>
            <span className="hidden md:inline text-zinc-400">&bull;</span>
            <button
              onClick={scrollToTop}
              className="dark:hover:text-white hover:text-zinc-950 transition-colors flex items-center gap-1.5 font-bold uppercase tracking-wider cursor-pointer active:scale-95 px-3 py-1 rounded-full border border-zinc-300 dark:border-white/15"
              title="Back to Top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
