'use client';

import React from 'react';
import InstagramIcon from './InstagramIcon';
import MomVisualUniverse from './MomVisualUniverse';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenLeadModal: () => void;
}

export default function Hero({ onOpenLeadModal }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[520px] h-[520px] dark:bg-white/[0.035] bg-black/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[580px] h-[580px] dark:bg-white/[0.02] bg-black/[0.015] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Big Airy Editorial Typography */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-5 sm:space-y-6 text-left">
            {/* Tagline Pill in Clean White / Silver Accent */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border dark:border-white/15 dark:bg-white/[0.04] dark:text-white/90 border-zinc-300 bg-white/90 text-zinc-900 text-[10px] sm:text-[11px] font-semibold tracking-widest2 uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Moments of Marketing &bull; Creating Growth</span>
            </div>

            {/* Headline with Platinum Silver to White Gradient */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-normal tracking-tight leading-[1.08]">
              <span className="block gradient-editorial-text font-serif italic drop-shadow-sm">
                Creativity
              </span>
              <span className="block font-sans font-light tracking-tight dark:text-white text-zinc-950">
                never ends
              </span>
            </h1>

            {/* Short, non-congested clean subtext */}
            <p className="text-xs sm:text-sm md:text-base dark:text-zinc-300 text-zinc-600 leading-relaxed max-w-lg font-light">
              More than marketing. A premier growth partner. We turn meaningful moments into lasting brand equity, high-intent enterprise pipeline, and acoustic brand resonance.
            </p>

            {/* Action Buttons: Primary Glow & Minimalist Outline */}
            <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenLeadModal}
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl btn-primary-glow text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>LET&apos;S TALK</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl editorial-btn-outline text-xs font-semibold"
              >
                SERVICES &rarr;
              </a>
            </div>

            {/* Live Agency Metrics Ticker Bar */}
            <div className="pt-3 grid grid-cols-3 gap-2 sm:gap-4 border-t dark:border-white/[0.08] border-zinc-200 max-w-lg">
              <div>
                <span className="block text-lg sm:text-xl md:text-2xl font-serif font-light dark:text-white text-zinc-950">
                  340%
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-wider dark:text-zinc-400 text-zinc-500 uppercase">
                  Avg. ROAS
                </span>
              </div>
              <div>
                <span className="block text-lg sm:text-xl md:text-2xl font-serif font-light dark:text-white text-zinc-950">
                  10M+
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-wider dark:text-zinc-400 text-zinc-500 uppercase">
                  Reach Generated
                </span>
              </div>
              <div>
                <span className="block text-lg sm:text-xl md:text-2xl font-serif font-light dark:text-white text-zinc-950">
                  &lt; 2h
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-wider dark:text-zinc-400 text-zinc-500 uppercase">
                  Response SLA
                </span>
              </div>
            </div>

            {/* Social Icons at bottom left */}
            <div className="pt-2 flex items-center gap-5 sm:gap-6 dark:text-zinc-400 text-zinc-500">
              {/* Twitter/X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="dark:hover:text-white hover:text-zinc-950 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="dark:hover:text-white hover:text-zinc-950 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/momentsofmarketingofficial"
                target="_blank"
                rel="noreferrer"
                className="dark:hover:text-white hover:text-zinc-950 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 stroke-current" />
              </a>
            </div>
          </div>

          {/* Right Column: Surreal Dynamic MOM Visual Universe */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex justify-center lg:justify-end items-center w-full">
            <MomVisualUniverse onOpenLeadModal={onOpenLeadModal} />
          </div>

        </div>
      </div>
    </section>
  );
}
