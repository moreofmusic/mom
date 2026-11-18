'use client';

import React from 'react';
import { ArrowUpRight, TrendingUp, Music, Sun, Moon, MessageCircle, Phone, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import InstagramIcon from './InstagramIcon';
import FlipBrandWordmark from './FlipBrandWordmark';

interface TwoOptionsGatewayProps {
  onSelectEntity: (entity: 'marketing' | 'music') => void;
}

export default function TwoOptionsGateway({ onSelectEntity }: TwoOptionsGatewayProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col justify-between dark:bg-black bg-[#F8FAFC] dark:text-white text-zinc-900 transition-colors duration-300">
      
      {/* ----------------- TOP MINIMAL HEADER ----------------- */}
      <header className="w-full max-w-7xl mx-auto px-3.5 sm:px-8 lg:px-14 py-3.5 sm:py-6 flex items-center justify-between border-b dark:border-white/[0.08] border-zinc-200 gap-3">
        {/* Brand Logo & Animated Flipping Division Wordmark */}
        <div className="flex items-center gap-2 sm:gap-3.5 min-w-0 flex-shrink">
          <img
            src="/mom-logo-transparent.png"
            alt="MOM Logo"
            className={`h-10 sm:h-14 md:h-16 w-auto object-contain flex-shrink-0 transition-all duration-300 hover:scale-105 ${
              theme === 'light' ? 'invert' : ''
            }`}
          />
          <FlipBrandWordmark size="lg" />
        </div>

        {/* Top Controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20connect."
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-zinc-300 dark:border-white/15 dark:hover:border-emerald-400/60 dark:text-zinc-400 dark:hover:text-emerald-400 text-zinc-600 hover:border-emerald-500/60 hover:text-emerald-600 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm flex-shrink-0"
            title="Chat on WhatsApp (+91 9226042236)"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>

          {/* Theme Toggle with smooth spin on interaction */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-zinc-300 dark:border-white/15 dark:text-zinc-400 dark:hover:text-white dark:hover:border-white/30 text-zinc-700 hover:text-zinc-950 hover:border-zinc-500 flex items-center justify-center transition-all cursor-pointer active:scale-95 active:rotate-180 shadow-sm flex-shrink-0"
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} theme`}
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 transition-transform duration-500" />
            ) : (
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-900 transition-transform duration-500" />
            )}
          </button>
        </div>
      </header>

      {/* ----------------- CENTER MAIN: 2 OPTIONS ----------------- */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-8 sm:py-14 flex-1 flex flex-col justify-center">
        
        {/* Editorial Headline: Exact Represent Style */}
        <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-14 animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="text-[11px] sm:text-sm font-bold tracking-[0.25em] uppercase font-mono dark:text-zinc-400 text-zinc-500 block">
            TWO STUDIOS &bull; ONE POWERHOUSE
          </span>
          
          <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold tracking-[-0.035em] leading-[1.02] sm:leading-[0.96] dark:text-white text-zinc-950 font-display">
            Building Indian<br />
            brands &amp; sound.<br />
            Exporting it <span className="font-serif italic font-normal dark:text-white text-zinc-950">to the world.</span>
          </h1>

          <p className="text-sm sm:text-xl dark:text-zinc-300 text-zinc-600 font-light max-w-2xl mx-auto pt-1 sm:pt-2">
            Select an entity to explore our full portfolio, dedicated operational desks, and growth capabilities:
          </p>
        </div>

        {/* THE 2 PROMINENT OPTIONS (CARDS) - Mobile: Horizontal Snap Scroll Carousel; Desktop: 2-Column Grid */}
        <div className="flex sm:grid sm:grid-cols-2 gap-5 sm:gap-10 items-stretch overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-6 sm:pb-0 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          
          {/* OPTION 1: MOM - More of Music */}
          <div
            onClick={() => onSelectEntity('music')}
            className="group relative rounded-3xl overflow-hidden border border-zinc-300 dark:border-white/15 hover:border-cyan-400/50 dark:hover:border-cyan-400/60 hover:shadow-[0_0_50px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_0_60px_rgba(6,182,212,0.18)] transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[540px] sm:min-h-[620px] lg:min-h-[640px] w-[86vw] max-w-[440px] sm:w-auto sm:max-w-none flex-shrink-0 sm:flex-shrink snap-center bg-zinc-950 active:scale-[0.98]"
          >
            {/* Background Photography: High-End Acoustic Audio Studio Console with Hover Zoom */}
            <img
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop"
              alt="More of Music Audio Recording Studio Console"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
            />

            {/* Dark Scrim - Smooth fade for 100% text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 via-black/45 to-black/25 group-hover:via-black/75 transition-all duration-500" />

            {/* Top Bar inside Card */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-9 flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src="/mom-logo-transparent.png"
                  alt="MOM Logo"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {/* Live Animated Pulse Dot + Badge */}
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-white bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full font-bold flex items-center gap-2 shadow-sm border border-white/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                  </span>
                  <Music className="w-3.5 h-3.5 text-cyan-400" />
                  <span>STUDIO &bull; SOUND</span>
                </span>
              </div>

              {/* Animated Top-Right Arrow Button */}
              <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-full border border-white/20 bg-black/70 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 shadow-xl">
                <ArrowUpRight className="w-5 h-5 transition-transform" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-9 space-y-3.5">
              <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase text-cyan-400 font-semibold block">
                Sonic Branding &bull; Studio Production &bull; Sync Licensing
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold uppercase font-display text-white tracking-tight leading-[1.08] group-hover:text-zinc-100 transition-colors">
                MOM &mdash; More of Music
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-lg">
                Sound that defines modern culture. Bespoke sonic logos, commercial scoring, sync licensing, artist management, and high-fidelity studio recording.
              </p>

              {/* Action Button: Clickable with Crisp Outline & Full Breathing Room */}
              <div className="pt-2">
                <div
                  className="w-full py-4 px-6 rounded-2xl border border-white/30 text-white bg-black/70 backdrop-blur-md group-hover:bg-white group-hover:text-black group-hover:border-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]"
                >
                  <span>ENTER MORE OF MUSIC</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* OPTION 2: MOM - Moments of Marketing */}
          <div
            onClick={() => onSelectEntity('marketing')}
            className="group relative rounded-3xl overflow-hidden border border-zinc-300 dark:border-white/15 hover:border-emerald-400/50 dark:hover:border-emerald-400/60 hover:shadow-[0_0_50px_rgba(16,185,129,0.15)] dark:hover:shadow-[0_0_60px_rgba(16,185,129,0.18)] transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[540px] sm:min-h-[620px] lg:min-h-[640px] w-[86vw] max-w-[440px] sm:w-auto sm:max-w-none flex-shrink-0 sm:flex-shrink snap-center bg-zinc-950 active:scale-[0.98]"
          >
            {/* Background Photography: Digital Marketing Strategy & Campaign Growth */}
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop"
              alt="Moments of Marketing Strategy & Growth Campaign"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
            />

            {/* Dark Scrim - Smooth fade for 100% text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 via-black/45 to-black/25 group-hover:via-black/75 transition-all duration-500" />

            {/* Top Bar inside Card */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-9 flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src="/mom-logo-transparent.png"
                  alt="MOM Logo"
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {/* Live Animated Pulse Dot + Badge */}
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-white bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full font-bold flex items-center gap-2 shadow-sm border border-white/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>AGENCY &bull; GROWTH</span>
                </span>
              </div>

              {/* Animated Top-Right Arrow Button */}
              <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-full border border-white/20 bg-black/70 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 shadow-xl">
                <ArrowUpRight className="w-5 h-5 transition-transform" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-9 space-y-3.5">
              <span className="text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase text-emerald-400 font-semibold block">
                Creating Moments &bull; Building Brands &bull; Driving Growth
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold uppercase font-display text-white tracking-tight leading-[1.08] group-hover:text-zinc-100 transition-colors">
                MOM &mdash; Moments of Marketing
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-lg">
                Full-funnel brand growth partner. 10 specialized desks, digital marketing, social media, branding, video production, and high-intent lead generation.
              </p>

              {/* Action Button: Clickable with Crisp Outline & Full Breathing Room */}
              <div className="pt-2">
                <div
                  className="w-full py-4 px-6 rounded-2xl border border-white/30 text-white bg-black/70 backdrop-blur-md group-hover:bg-white group-hover:text-black group-hover:border-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-xl group-hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]"
                >
                  <span>ENTER MOMENTS OF MARKETING</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Swipe Pagination Guidance Indicator */}
        <div className="flex sm:hidden flex-col items-center justify-center gap-2 pt-2 pb-2">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-200/90 dark:bg-white/10 backdrop-blur-sm text-[10px] font-mono tracking-widest uppercase text-zinc-700 dark:text-zinc-300 shadow-sm animate-pulse">
            <span>&larr;</span>
            <span>SWIPE TO EXPLORE BOTH PORTALS</span>
            <span>&rarr;</span>
          </div>
        </div>

        {/* 3-Column Metrics Bar: Exact Represent Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b dark:border-white/[0.08] border-zinc-200 mt-12 sm:mt-20">
          
          {/* Column 1 */}
          <div className="py-6 sm:py-10 md:pr-10 md:border-r dark:border-white/[0.08] border-zinc-200 space-y-2 text-center md:text-left">
            <span className="block text-4xl sm:text-6xl font-bold tracking-tight dark:text-white text-zinc-950 font-display">
              340%+
            </span>
            <span className="font-serif italic text-sm sm:text-base dark:text-zinc-400 text-zinc-500 block">
              average client campaign ROAS delivered
            </span>
          </div>

          {/* Column 2 */}
          <div className="py-6 sm:py-10 md:px-10 md:border-r dark:border-white/[0.08] border-zinc-200 space-y-2 border-t md:border-t-0 dark:border-white/[0.08] border-zinc-200 text-center md:text-left">
            <span className="block text-4xl sm:text-6xl font-bold tracking-tight dark:text-white text-zinc-950 font-display">
              70M+
            </span>
            <span className="font-serif italic text-sm sm:text-base dark:text-zinc-400 text-zinc-500 block">
              combined digital reach &amp; stream impressions
            </span>
          </div>

          {/* Column 3 */}
          <div className="py-6 sm:py-10 md:pl-10 space-y-2 border-t md:border-t-0 dark:border-white/[0.08] border-zinc-200 text-center md:text-left">
            <span className="block text-4xl sm:text-6xl font-bold tracking-tight dark:text-white text-zinc-950 font-display">
              &lt; 2h
            </span>
            <span className="font-serif italic text-sm sm:text-base dark:text-zinc-400 text-zinc-500 block">
              direct founder &amp; growth strategist response SLA
            </span>
          </div>

        </div>

        {/* IN THE PRESS & CULTURE: Infinite Animated Marquee */}
        <div className="py-8 sm:py-12 border-b dark:border-white/[0.08] border-zinc-200 overflow-hidden">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase dark:text-zinc-500 text-zinc-400 block mb-6 text-center md:text-left">
            IN THE PRESS &amp; CULTURE
          </span>
          <div className="relative w-full overflow-hidden">
            {/* Gradient Edge Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r dark:from-black from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l dark:from-black from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
            
            {/* Infinite Marquee Loop */}
            <div className="flex w-max animate-marquee whitespace-nowrap gap-12 sm:gap-20 items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
              <span className="text-xl sm:text-2xl font-black font-display tracking-tighter">billboard</span>
              <span className="text-lg sm:text-xl font-serif font-bold italic tracking-wide">Rolling Stone</span>
              <span className="text-lg sm:text-xl font-display font-light tracking-[0.2em] uppercase">GRAZIA</span>
              <span className="text-xl sm:text-2xl font-serif font-bold">Forbes</span>
              <span className="text-lg sm:text-xl font-serif font-normal tracking-[0.25em]">ELLE</span>
              <span className="text-lg sm:text-xl font-black font-display tracking-tight">GQ</span>
              <span className="text-base sm:text-lg font-bold font-sans tracking-wide">Spotify</span>
              {/* Duplicate track for seamless infinite scroll */}
              <span className="text-xl sm:text-2xl font-black font-display tracking-tighter">billboard</span>
              <span className="text-lg sm:text-xl font-serif font-bold italic tracking-wide">Rolling Stone</span>
              <span className="text-lg sm:text-xl font-display font-light tracking-[0.2em] uppercase">GRAZIA</span>
              <span className="text-xl sm:text-2xl font-serif font-bold">Forbes</span>
              <span className="text-lg sm:text-xl font-serif font-normal tracking-[0.25em]">ELLE</span>
              <span className="text-lg sm:text-xl font-black font-display tracking-tight">GQ</span>
              <span className="text-base sm:text-lg font-bold font-sans tracking-wide">Spotify</span>
            </div>
          </div>
        </div>

      </main>

      {/* ----------------- BOTTOM PRESS & FOOTER BAR ----------------- */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-8 sm:py-10 border-t dark:border-white/[0.08] border-zinc-200">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-xs dark:text-zinc-400 text-zinc-600 font-mono text-center lg:text-left">
          <div className="flex items-center gap-3">
            <img
              src="/mom-logo-transparent.png"
              alt="MOM Logo"
              className={`h-9 sm:h-12 w-auto object-contain transition-all ${
                theme === 'light' ? 'invert' : ''
              }`}
            />
            <div className="flex flex-col items-center sm:items-start leading-tight">
              <span className="font-bold text-xs uppercase tracking-wider dark:text-white text-zinc-950">
                More of Music &bull; Moments of Marketing
              </span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
                &copy; 2026 MOM. All rights reserved.
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            <a
              href="tel:+919226042236"
              className="px-3.5 py-1.5 rounded-full border border-zinc-300 dark:border-white/15 dark:text-white text-zinc-950 font-semibold hover:border-black dark:hover:border-white transition-all flex items-center gap-1.5 text-[11px] shadow-sm"
              title="Call (+91 9226042236)"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9226042236</span>
            </a>
            <a
              href="mailto:Contact@momentsofmarketing.in"
              className="px-3.5 py-1.5 rounded-full border border-zinc-300 dark:border-white/15 dark:text-white text-zinc-950 font-semibold hover:border-black dark:hover:border-white transition-all flex items-center gap-1.5 text-[11px] shadow-sm"
              title="Email MOM"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact@momentsofmarketing.in</span>
            </a>
            <a
              href="https://instagram.com/momentsofmarketingofficial"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-full border border-zinc-300 dark:border-white/15 dark:text-white text-zinc-950 font-semibold hover:border-black dark:hover:border-white transition-all flex items-center gap-1.5 text-[11px] shadow-sm"
              title="Instagram @momentsofmarketingofficial"
            >
              <InstagramIcon className="w-3.5 h-3.5 stroke-current" />
              <span>@momentsofmarketingofficial</span>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
