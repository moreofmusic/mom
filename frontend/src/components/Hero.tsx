'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenLeadModal: () => void;
}

export default function Hero({ onOpenLeadModal }: HeroProps) {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Top Tagline from User PPT (Non-clickable: NO OUTLINE) */}
        <div className="mb-6">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase font-mono dark:text-zinc-400 text-zinc-500 block">
            MOMENTS OF MARKETING &bull; MORE OF MUSIC
          </span>
        </div>

        {/* Massive Editorial Headline: Exact Represent Mgmt Font Pairing */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[112px] font-extrabold tracking-[-0.035em] leading-[0.96] dark:text-white text-zinc-950 font-display">
          Building Indian<br />
          brands &amp; sound.<br />
          Exporting it <span className="font-serif italic font-normal dark:text-white text-zinc-950">to the world.</span>
        </h1>

        {/* Subhead with Italic Serif Accent: Exact Represent Style + PPT Content */}
        <div className="pt-8 sm:pt-10 max-w-3xl space-y-4">
          <p className="text-lg sm:text-2xl md:text-3xl dark:text-zinc-300 text-zinc-700 font-light leading-relaxed">
            Musicians, creators and visionary brands building{' '}
            <span className="font-serif italic dark:text-white text-zinc-950">
              India&apos;s next great pop-culture &amp; growth era.
            </span>
          </p>

          <p className="text-sm sm:text-base dark:text-zinc-400 text-zinc-600 font-light leading-relaxed max-w-2xl">
            At MOM &mdash; Moments of Marketing, we believe great marketing creates more than visibility. It creates connections, builds trust, and drives business forward. Whether launching a new brand, expanding market presence, or scaling enterprise revenue, we bring the right mix of creativity, strategy, and execution.
          </p>
        </div>

        {/* Direct Action Links (Clickable: With Outlines & Underline) */}
        <div className="pt-8 sm:pt-10 flex flex-wrap items-center gap-6">
          <button
            onClick={onOpenLeadModal}
            className="px-8 py-4 rounded-full border border-zinc-900 dark:border-white/30 dark:bg-white dark:text-black bg-zinc-950 text-white dark:hover:bg-zinc-200 hover:bg-zinc-800 text-xs sm:text-sm font-bold tracking-[0.16em] uppercase flex items-center gap-2.5 transition-all duration-300 active:scale-95 cursor-pointer shadow-md"
          >
            <span>LET&apos;S TALK ABOUT YOUR GROWTH</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#services"
            className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase dark:text-zinc-300 dark:hover:text-white text-zinc-600 hover:text-black transition-colors flex items-center gap-1.5 underline underline-offset-4"
          >
            <span>EXPLORE THE 10 DESKS</span>
            <span>&rarr;</span>
          </a>
        </div>

        {/* 3-Column Metrics Bar: Exact Screenshot 2 Layout with Vertical Hairline Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b dark:border-white/[0.08] border-zinc-200 mt-16 sm:mt-24">
          
          {/* Column 1 */}
          <div className="py-8 sm:py-12 md:pr-10 md:border-r dark:border-white/[0.08] border-zinc-200 space-y-2">
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight dark:text-white text-zinc-950 font-display">
              340%+
            </span>
            <span className="font-serif italic text-sm sm:text-base dark:text-zinc-400 text-zinc-500 block">
              average campaign ROAS generated
            </span>
          </div>

          {/* Column 2 */}
          <div className="py-8 sm:py-12 md:px-10 md:border-r dark:border-white/[0.08] border-zinc-200 space-y-2 border-t md:border-t-0 dark:border-white/[0.08] border-zinc-200">
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight dark:text-white text-zinc-950 font-display">
              10M+
            </span>
            <span className="font-serif italic text-sm sm:text-base dark:text-zinc-400 text-zinc-500 block">
              organic audience reach across platforms
            </span>
          </div>

          {/* Column 3 */}
          <div className="py-8 sm:py-12 md:pl-10 space-y-2 border-t md:border-t-0 dark:border-white/[0.08] border-zinc-200">
            <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight dark:text-white text-zinc-950 font-display">
              &lt; 2h
            </span>
            <span className="font-serif italic text-sm sm:text-base dark:text-zinc-400 text-zinc-500 block">
              direct growth strategist response SLA
            </span>
          </div>

        </div>

        {/* IN THE PRESS & CULTURE: Exact Screenshot 2 Style */}
        <div className="py-10 border-b dark:border-white/[0.08] border-zinc-200">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase dark:text-zinc-500 text-zinc-400 block mb-6">
            IN THE PRESS &amp; CULTURE
          </span>
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-10 opacity-70 dark:opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl sm:text-2xl font-black font-display tracking-tighter">billboard</span>
            <span className="text-lg sm:text-xl font-serif font-bold italic tracking-wide">Rolling Stone</span>
            <span className="text-lg sm:text-xl font-display font-light tracking-[0.2em] uppercase">GRAZIA</span>
            <span className="text-xl sm:text-2xl font-serif font-bold">Forbes</span>
            <span className="text-lg sm:text-xl font-serif font-normal tracking-[0.25em]">ELLE</span>
            <span className="text-lg sm:text-xl font-black font-display tracking-tight">GQ</span>
            <span className="text-base sm:text-lg font-bold font-sans tracking-wide">Spotify</span>
            <span className="text-base sm:text-lg font-bold font-sans tracking-tight">Google</span>
          </div>
        </div>

      </div>
    </section>
  );
}
