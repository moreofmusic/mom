'use client';

import React from 'react';
import { ArrowUpRight, TrendingUp, Music, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface DualPortalGatewayProps {
  activeEntity: 'marketing' | 'music';
  onSelectEntity: (entity: 'marketing' | 'music') => void;
  onOpenLeadModal: (serviceName?: string) => void;
}

export default function DualPortalGateway({
  activeEntity,
  onSelectEntity,
  onOpenLeadModal,
}: DualPortalGatewayProps) {
  const { theme } = useTheme();

  return (
    <section className="relative pt-28 sm:pt-36 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Top Tagline from User PPT (Non-clickable: Strictly NO OUTLINE) */}
        <div className="mb-4">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase font-mono dark:text-zinc-400 text-zinc-500 block">
            MOMENTS OF MARKETING &bull; MORE OF MUSIC
          </span>
        </div>

        {/* Massive Editorial Headline: Exact Represent Mgmt Font Pairing */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[108px] font-extrabold tracking-[-0.035em] leading-[0.96] dark:text-white text-zinc-950 font-display">
          Building Indian<br />
          brands &amp; sound.<br />
          Exporting it <span className="font-serif italic font-normal dark:text-white text-zinc-950">to the world.</span>
        </h1>

        {/* Subhead with Italic Serif Accent + PPT Intro */}
        <div className="pt-6 sm:pt-8 max-w-3xl space-y-3">
          <p className="text-lg sm:text-2xl md:text-3xl dark:text-zinc-300 text-zinc-700 font-light leading-relaxed">
            Two specialized powerhouses under one roof. Choose your destination:
          </p>
          <p className="text-sm sm:text-base dark:text-zinc-400 text-zinc-600 font-light max-w-2xl">
            At MOM &mdash; Moments of Marketing, we believe great marketing creates more than visibility. It creates connections, builds trust, and drives business forward.
          </p>
        </div>

        {/* ----------------- THE TWO PROMINENT GATEWAY CARDS ----------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10 sm:pt-14">
          
          {/* CARD 1: MOM - Moments of Marketing */}
          <div
            onClick={() => onSelectEntity('marketing')}
            className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-between min-h-[580px] sm:min-h-[620px] lg:min-h-[640px] bg-zinc-950 active:scale-[0.98] ${
              activeEntity === 'marketing'
                ? 'border-white ring-2 ring-white/20 shadow-2xl'
                : 'border-zinc-800 hover:border-zinc-500 dark:border-white/10 dark:hover:border-white/60'
            }`}
          >
            {/* Background Photography: High-Fashion Brand Campaign */}
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop"
              alt="Moments of Marketing Brand Campaign"
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 via-black/45 to-black/25 group-hover:via-black/75 transition-all duration-500" />

            {/* Top Bar inside Card */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-9 flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src="/mom-logo-transparent.png"
                  alt="MOM Logo"
                  className="h-8 w-auto object-contain"
                />
                {/* Non-clickable Chip: NO OUTLINE */}
                <span className="text-[10px] font-mono tracking-widest uppercase text-white bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full font-bold">
                  AGENCY &bull; GROWTH
                </span>
              </div>

              {activeEntity === 'marketing' && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-black text-[11px] font-bold font-mono uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                  <span>ACTIVE VIEW</span>
                </div>
              )}
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-9 space-y-3.5">
              <span className="text-xs font-mono tracking-widest uppercase text-emerald-400 font-semibold block">
                Full-Funnel Marketing &amp; Brand Identity
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold uppercase font-display text-white tracking-tight leading-[1.08]">
                MOM &mdash; Moments of Marketing
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-lg">
                Creating Moments. Building Brands. Driving Growth. 10 specialized desks, digital marketing, social media, branding, video production, and high-intent lead generation.
              </p>

              {/* Action Button: Clickable with Crisp Outline */}
              <div className="pt-2">
                <button
                  type="button"
                  className={`w-full py-4 px-6 rounded-2xl border text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                    activeEntity === 'marketing'
                      ? 'bg-white text-black border-white'
                      : 'border-white/30 text-white bg-black/60 group-hover:bg-white group-hover:text-black group-hover:border-white'
                  }`}
                >
                  <span>ENTER MOMENTS OF MARKETING</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* CARD 2: MOM - More of Music */}
          <div
            onClick={() => onSelectEntity('music')}
            className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-between min-h-[580px] sm:min-h-[620px] lg:min-h-[640px] bg-zinc-950 active:scale-[0.98] ${
              activeEntity === 'music'
                ? 'border-white ring-2 ring-white/20 shadow-2xl'
                : 'border-zinc-800 hover:border-zinc-500 dark:border-white/10 dark:hover:border-white/60'
            }`}
          >
            {/* Background Photography: High-End Acoustic Audio Studio Console */}
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop"
              alt="More of Music Audio Recording Studio Console"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 via-black/45 to-black/25 group-hover:via-black/75 transition-all duration-500" />

            {/* Top Bar inside Card */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-9 flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src="/mom-logo-transparent.png"
                  alt="MOM More of Music Logo"
                  className="h-8 w-auto object-contain"
                />
                {/* Non-clickable Chip: NO OUTLINE */}
                <span className="text-[10px] font-mono tracking-widest uppercase text-white bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full font-bold">
                  STUDIO &bull; SONIC ARCHITECTURE
                </span>
              </div>

              {activeEntity === 'music' && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-black text-[11px] font-bold font-mono uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black" />
                  <span>ACTIVE VIEW</span>
                </div>
              )}
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-9 space-y-3.5">
              <span className="text-xs font-mono tracking-widest uppercase text-zinc-300 font-semibold block">
                Sound That Defines Modern Culture &amp; Iconic Brands
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold uppercase font-display text-white tracking-tight leading-[1.08]">
                MOM &mdash; More of Music
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-lg">
                Custom sonic logos, audio mnemonics, commercial music scoring, sync licensing, artist management, and world-class studio audio production.
              </p>

              {/* Action Button: Clickable with Crisp Outline */}
              <div className="pt-2">
                <button
                  type="button"
                  className={`w-full py-4 px-6 rounded-2xl border text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                    activeEntity === 'music'
                      ? 'bg-white text-black border-white'
                      : 'border-white/30 text-white bg-black/60 group-hover:bg-white group-hover:text-black group-hover:border-white'
                  }`}
                >
                  <span>ENTER MORE OF MUSIC</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 3-Column Metrics Bar: Separated by Vertical Hairline Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b dark:border-white/[0.08] border-zinc-200 mt-16 sm:mt-20">
          
          {/* Column 1 */}
          <div className="py-8 sm:py-10 md:pr-10 md:border-r dark:border-white/[0.08] border-zinc-200 space-y-2">
            <span className="block text-4xl sm:text-6xl font-bold tracking-tight dark:text-white text-zinc-950 font-display">
              {activeEntity === 'marketing' ? '340%+' : '528 Hz'}
            </span>
            <span className="font-serif italic text-sm sm:text-base dark:text-zinc-400 text-zinc-500 block">
              {activeEntity === 'marketing'
                ? 'average campaign ROAS generated'
                : 'harmonic master frequency & acoustic architecture'}
            </span>
          </div>

          {/* Column 2 */}
          <div className="py-8 sm:py-10 md:px-10 md:border-r dark:border-white/[0.08] border-zinc-200 space-y-2 border-t md:border-t-0 dark:border-white/[0.08] border-zinc-200">
            <span className="block text-4xl sm:text-6xl font-bold tracking-tight dark:text-white text-zinc-950 font-display">
              {activeEntity === 'marketing' ? '10M+' : '150+'}
            </span>
            <span className="font-serif italic text-sm sm:text-base dark:text-zinc-400 text-zinc-500 block">
              {activeEntity === 'marketing'
                ? 'organic audience reach across platforms'
                : 'commercial tracks & sonic mnemonics produced'}
            </span>
          </div>

          {/* Column 3 */}
          <div className="py-8 sm:py-10 md:pl-10 space-y-2 border-t md:border-t-0 dark:border-white/[0.08] border-zinc-200">
            <span className="block text-4xl sm:text-6xl font-bold tracking-tight dark:text-white text-zinc-950 font-display">
              {activeEntity === 'marketing' ? '< 2h' : '+86%'}
            </span>
            <span className="font-serif italic text-sm sm:text-base dark:text-zinc-400 text-zinc-500 block">
              {activeEntity === 'marketing'
                ? 'direct growth strategist response SLA'
                : 'brand memory recall through audio signatures'}
            </span>
          </div>

        </div>

        {/* IN THE PRESS & CULTURE */}
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
