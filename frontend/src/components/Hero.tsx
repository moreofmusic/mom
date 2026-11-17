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
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 sm:space-y-7 text-left">
            {/* Tagline Pill (Non-clickable: NO OUTLINE per strict design rule) */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full dark:bg-white/[0.08] bg-zinc-200/80 dark:text-white text-zinc-900 text-[11px] sm:text-xs font-semibold tracking-widest2 uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Moments of Marketing &bull; Creating Growth</span>
            </div>

            {/* Headline with High-Impact Represent Editorial Typography */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.02] uppercase font-display">
              <span className="block dark:text-white text-zinc-950">
                Creativity
              </span>
              <span className="block font-serif italic font-normal gradient-editorial-text tracking-normal">
                Never Ends.
              </span>
            </h1>

            {/* Exact PPT Deck Content: Slide 3 */}
            <div className="space-y-3 max-w-xl">
              <h2 className="text-base sm:text-lg md:text-xl font-bold dark:text-white text-zinc-900 font-display">
                More Than Marketing. A Partner in Your Growth.
              </h2>
              <p className="text-sm sm:text-base dark:text-zinc-300 text-zinc-600 leading-relaxed font-light">
                At MOM &mdash; Moments of Marketing, we believe great marketing creates more than visibility. It creates connections, builds trust, and drives business forward.
              </p>
              <p className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-500 leading-relaxed font-light hidden sm:block">
                Whether you&apos;re launching a new brand, expanding your market presence, or scaling your business, we bring the right mix of creativity, strategy, and execution to help you move forward with confidence.
              </p>
            </div>

            {/* Action Buttons: Clickable elements have crisp outlines and smooth transitions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenLeadModal}
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl btn-primary-glow text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2.5 cursor-pointer shadow-lg active:scale-[0.97] transition-all duration-300 border border-transparent dark:hover:border-white/40 hover:border-black"
              >
                <span>LET&apos;S TALK ABOUT YOUR GROWTH</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl border border-zinc-300 dark:border-white/20 hover:border-black dark:hover:border-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 active:scale-[0.97] dark:text-white text-zinc-900 dark:bg-white/[0.02] bg-white/60 shadow-sm"
              >
                OUR 10 DESKS &rarr;
              </a>
            </div>

            {/* Live Agency Metrics Ticker Bar */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t dark:border-white/[0.08] border-zinc-200 max-w-lg">
              <div>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-black font-display dark:text-white text-zinc-950">
                  340%
                </span>
                <span className="text-[10px] sm:text-xs font-mono tracking-wider dark:text-zinc-400 text-zinc-500 uppercase font-medium">
                  Avg. ROAS
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-black font-display dark:text-white text-zinc-950">
                  10M+
                </span>
                <span className="text-[10px] sm:text-xs font-mono tracking-wider dark:text-zinc-400 text-zinc-500 uppercase font-medium">
                  Reach Generated
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-black font-display dark:text-white text-zinc-950">
                  &lt; 2h
                </span>
                <span className="text-[10px] sm:text-xs font-mono tracking-wider dark:text-zinc-400 text-zinc-500 uppercase font-medium">
                  Response SLA
                </span>
              </div>
            </div>

            {/* Social Icons at bottom left: Clickable elements with outlines */}
            <div className="pt-2 flex items-center gap-4 dark:text-zinc-400 text-zinc-600">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mr-1">Connect:</span>
              
              {/* Instagram */}
              <a
                href="https://instagram.com/momentsofmarketingofficial"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-zinc-200 dark:border-white/10 hover:border-black dark:hover:border-white dark:hover:text-white hover:text-zinc-950 transition-all duration-300 active:scale-95 shadow-sm"
                aria-label="Instagram @momentsofmarketingofficial"
                title="@momentsofmarketingofficial"
              >
                <InstagramIcon className="w-4 h-4 stroke-current" />
              </a>

              {/* Twitter/X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-zinc-200 dark:border-white/10 hover:border-black dark:hover:border-white dark:hover:text-white hover:text-zinc-950 transition-all duration-300 active:scale-95 shadow-sm"
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
                className="p-2.5 rounded-full border border-zinc-200 dark:border-white/10 hover:border-black dark:hover:border-white dark:hover:text-white hover:text-zinc-950 transition-all duration-300 active:scale-95 shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
                </svg>
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
