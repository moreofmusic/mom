'use client';

import React from 'react';
import { ArrowUpRight, TrendingUp, Music, Sun, Moon, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import InstagramIcon from './InstagramIcon';

interface TwoOptionsGatewayProps {
  onSelectEntity: (entity: 'marketing' | 'music') => void;
}

export default function TwoOptionsGateway({ onSelectEntity }: TwoOptionsGatewayProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col justify-between dark:bg-black bg-[#F8FAFC] dark:text-white text-zinc-900 transition-colors duration-300">
      
      {/* ----------------- TOP MINIMAL HEADER ----------------- */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-6 sm:py-8 flex items-center justify-between border-b dark:border-white/[0.08] border-zinc-200">
        {/* Brand Wordmark & Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/mom-logo-transparent.png"
            alt="MOM Logo"
            className={`h-10 sm:h-12 w-auto object-contain transition-all duration-300 ${
              theme === 'light' ? 'invert' : ''
            }`}
          />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight uppercase font-display dark:text-white text-zinc-950">
              MOM
            </span>
            <span className="text-[9px] tracking-[0.25em] uppercase font-mono dark:text-zinc-400 text-zinc-500 hidden sm:block">
              More of Music &bull; Moments of Marketing
            </span>
          </div>
        </div>

        {/* Top Controls */}
        <div className="flex items-center gap-3">
          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20connect."
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full border border-zinc-300 dark:border-white/15 dark:hover:border-emerald-400/60 dark:text-zinc-400 dark:hover:text-emerald-400 text-zinc-600 hover:border-emerald-500/60 hover:text-emerald-600 transition-all hover:scale-105 active:scale-95 shadow-sm"
            title="Chat on WhatsApp (+91 9226042236)"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-zinc-300 dark:border-white/15 dark:text-zinc-400 dark:hover:text-white dark:hover:border-white/30 text-zinc-700 hover:text-zinc-950 hover:border-zinc-500 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} theme`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-900" />
            )}
          </button>
        </div>
      </header>

      {/* ----------------- CENTER MAIN: 2 OPTIONS ONLY ----------------- */}
      <main className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-10 sm:py-16 flex-1 flex flex-col justify-center">
        
        {/* Editorial Headline: Exact Represent Style */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase font-mono dark:text-zinc-400 text-zinc-500 block">
            TWO STUDIOS &bull; ONE POWERHOUSE
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold tracking-[-0.035em] leading-[0.96] dark:text-white text-zinc-950 font-display">
            Building Indian<br />
            brands &amp; sound.<br />
            Exporting it <span className="font-serif italic font-normal dark:text-white text-zinc-950">to the world.</span>
          </h1>

          <p className="text-base sm:text-xl dark:text-zinc-300 text-zinc-600 font-light max-w-2xl mx-auto pt-2">
            Select an entity to explore our full portfolio, dedicated operational desks, and growth capabilities:
          </p>
        </div>

        {/* THE 2 PROMINENT OPTIONS (CARDS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          
          {/* OPTION 1: MOM - More of Music */}
          <div
            onClick={() => onSelectEntity('music')}
            className="group relative rounded-3xl overflow-hidden border border-zinc-300 dark:border-white/15 hover:border-black dark:hover:border-white transition-all duration-500 cursor-pointer shadow-2xl flex flex-col justify-between aspect-[16/12] sm:aspect-[16/11] bg-zinc-950 active:scale-[0.98]"
          >
            {/* Background Photography: Analog Audio Recording Studio Console */}
            <img
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop"
              alt="More of Music Recording Studio Console"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Dark Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/30 group-hover:via-black/45 transition-all duration-500" />

            {/* Top Bar inside Card */}
            <div className="relative z-10 p-6 sm:p-8 flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src="/mom-logo-transparent.png"
                  alt="MOM Logo"
                  className="h-9 w-auto object-contain"
                />
                {/* Non-clickable Chip: NO OUTLINE */}
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-white bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full font-bold flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5 text-white" />
                  <span>STUDIO &bull; SOUND</span>
                </span>
              </div>

              <div className="w-11 h-11 rounded-full border border-white/20 bg-black/70 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shadow-lg">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 p-6 sm:p-8 space-y-3">
              <span className="text-xs font-mono tracking-widest uppercase text-zinc-300 font-semibold block">
                Sonic Branding &bull; Studio Production &bull; Sync Licensing
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-display text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                MOM &mdash; More of Music
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-lg">
                Sound that defines modern culture. Bespoke sonic logos, commercial scoring, sync licensing, artist management, and high-fidelity studio recording.
              </p>

              {/* Action Button: Clickable with Crisp Outline */}
              <div className="pt-3">
                <button
                  type="button"
                  className="w-full py-4 rounded-xl border border-white/30 text-white bg-black/70 group-hover:bg-white group-hover:text-black group-hover:border-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>ENTER MORE OF MUSIC</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* OPTION 2: MOM - Moments of Marketing */}
          <div
            onClick={() => onSelectEntity('marketing')}
            className="group relative rounded-3xl overflow-hidden border border-zinc-300 dark:border-white/15 hover:border-black dark:hover:border-white transition-all duration-500 cursor-pointer shadow-2xl flex flex-col justify-between aspect-[16/12] sm:aspect-[16/11] bg-zinc-950 active:scale-[0.98]"
          >
            {/* Background Photography: High-Fashion Brand Campaign */}
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
              alt="Moments of Marketing Brand Campaign"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Dark Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/30 group-hover:via-black/45 transition-all duration-500" />

            {/* Top Bar inside Card */}
            <div className="relative z-10 p-6 sm:p-8 flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <img
                  src="/mom-logo-transparent.png"
                  alt="MOM Logo"
                  className="h-9 w-auto object-contain"
                />
                {/* Non-clickable Chip: NO OUTLINE */}
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-white bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-white" />
                  <span>AGENCY &bull; GROWTH</span>
                </span>
              </div>

              <div className="w-11 h-11 rounded-full border border-white/20 bg-black/70 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shadow-lg">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 p-6 sm:p-8 space-y-3">
              <span className="text-xs font-mono tracking-widest uppercase text-emerald-400 font-semibold block">
                Creating Moments. Building Brands. Driving Growth.
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-display text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                MOM &mdash; Moments of Marketing
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-lg">
                Full-funnel brand growth partner. 10 specialized desks, digital marketing, social media, branding, video production, and high-intent lead generation.
              </p>

              {/* Action Button: Clickable with Crisp Outline */}
              <div className="pt-3">
                <button
                  type="button"
                  className="w-full py-4 rounded-xl border border-white/30 text-white bg-black/70 group-hover:bg-white group-hover:text-black group-hover:border-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>ENTER MOMENTS OF MARKETING</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 3-Column Metrics Bar: Exact Represent Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b dark:border-white/[0.08] border-zinc-200 mt-14 sm:mt-20">
          
          {/* Column 1 */}
          <div className="py-8 sm:py-10 md:pr-10 md:border-r dark:border-white/[0.08] border-zinc-200 space-y-2">
            <span className="block text-4xl sm:text-6xl font-bold tracking-tight dark:text-white text-zinc-950 font-display">
              340%+
            </span>
            <span className="font-serif italic text-sm sm:text-base dark:text-zinc-400 text-zinc-500 block">
              average client campaign ROAS delivered
            </span>
          </div>

          {/* Column 2 */}
          <div className="py-8 sm:py-10 md:px-10 md:border-r dark:border-white/[0.08] border-zinc-200 space-y-2 border-t md:border-t-0 dark:border-white/[0.08] border-zinc-200">
            <span className="block text-4xl sm:text-6xl font-bold tracking-tight dark:text-white text-zinc-950 font-display">
              70M+
            </span>
            <span className="font-serif italic text-sm sm:text-base dark:text-zinc-400 text-zinc-500 block">
              combined digital reach &amp; stream impressions
            </span>
          </div>

          {/* Column 3 */}
          <div className="py-8 sm:py-10 md:pl-10 space-y-2 border-t md:border-t-0 dark:border-white/[0.08] border-zinc-200">
            <span className="block text-4xl sm:text-6xl font-bold tracking-tight dark:text-white text-zinc-950 font-display">
              &lt; 2h
            </span>
            <span className="font-serif italic text-sm sm:text-base dark:text-zinc-400 text-zinc-500 block">
              direct founder &amp; growth strategist response SLA
            </span>
          </div>

        </div>

        {/* IN THE PRESS & CULTURE */}
        <div className="py-8 sm:py-10">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase dark:text-zinc-500 text-zinc-400 block mb-6 text-center md:text-left">
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
          </div>
        </div>

      </main>

      {/* ----------------- BOTTOM PRESS & FOOTER BAR ----------------- */}
      <footer className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-8 border-t dark:border-white/[0.08] border-zinc-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs dark:text-zinc-400 text-zinc-600 font-mono">
          <div>
            &copy; 2026 MOM &mdash; More of Music &bull; Moments of Marketing
          </div>
          
          <div className="flex items-center gap-6">
            <a href="tel:+919226042236" className="hover:underline dark:text-white text-zinc-950 font-bold">
              +91 9226042236
            </a>
            <a href="mailto:Contact@momentsofmarketing.in" className="hover:underline dark:text-white text-zinc-950 font-bold">
              Contact@momentsofmarketing.in
            </a>
            <a
              href="https://instagram.com/momentsofmarketingofficial"
              target="_blank"
              rel="noreferrer"
              className="hover:underline flex items-center gap-1 dark:text-white text-zinc-950 font-bold"
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
