'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ComingSoonModal from './ComingSoonModal';

interface TwoOptionsGatewayProps {
  onSelectEntity: (entity: 'marketing' | 'music') => void;
}

export default function TwoOptionsGateway({ onSelectEntity }: TwoOptionsGatewayProps) {
  const { theme, toggleTheme, mounted } = useTheme();
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between dark:bg-black bg-[#F8FAFC] dark:text-white text-zinc-900 transition-colors duration-300 relative overflow-hidden select-none">
      
      {/* Subtle Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-rose-500/10 dark:bg-rose-500/10 blur-[140px] animate-float" />
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/12 blur-[140px] animate-float [animation-delay:3s]" />
      </div>

      {/* ----------------- TOP MINIMAL HEADER (NO BOTTOM BORDER) ----------------- */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 pt-10 sm:pt-14 md:pt-16 pb-2 sm:pb-4 flex items-center justify-center relative z-10">
        {/* Brand Logo - Centered in Header & Shifted Down */}
        <div className="flex items-center justify-center pt-4 sm:pt-6 md:pt-8">
          <Link href="/" className="cursor-pointer">
            <img
              src="/mom-logo-transparent.png"
              alt="MOM Logo"
              suppressHydrationWarning
              className={`h-12 sm:h-16 md:h-20 w-auto object-contain transition-all duration-300 hover:scale-105 ${
                mounted && theme === 'light' ? 'invert' : ''
              }`}
            />
          </Link>
        </div>

        {/* Top Right Control: Theme Toggle Only */}
        <div className="absolute right-4 sm:right-8 lg:right-14 top-6 sm:top-8 md:top-10 flex items-center">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-300 dark:border-white/15 dark:text-zinc-400 dark:hover:text-white dark:hover:border-white/30 text-zinc-700 hover:text-zinc-950 hover:border-zinc-500 flex items-center justify-center transition-all cursor-pointer active:scale-95 active:rotate-180 shadow-sm"
            aria-label="Toggle theme"
            title={mounted ? `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} theme` : 'Toggle theme'}
            suppressHydrationWarning
          >
            {mounted ? (
              theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300 transition-transform duration-500" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-900 transition-transform duration-500" />
              )
            ) : (
              <span className="w-4 h-4 inline-block" />
            )}
          </button>
        </div>
      </header>

      {/* ----------------- CENTER MAIN: STRICTLY THE 2 OPTIONS (AS PER USER SLIDE) ----------------- */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-10 md:py-12 flex-1 flex flex-col justify-center items-center relative z-10">
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start justify-center">
          
          {/* OPTION 1: MORE OF MUSIC (UNDER DEVELOPMENT - POPS UP COMING SOON MESSAGE) */}
          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => setComingSoonOpen(true)}
              className="w-full h-44 sm:h-52 md:h-60 lg:h-68 bg-black text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.18)] border border-zinc-800 dark:border-white/15 hover:border-white/40 transition-all duration-400 cursor-pointer active:scale-[0.98]"
              title="More of Music (Coming Soon — Under Development)"
            >
              {/* Shimmer Light Beam on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out pointer-events-none" />

              {/* Top Corner Action Indicator */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 sm:w-11 h-9 sm:h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-zinc-300 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 shadow-md">
                <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform" />
              </div>

              {/* Bold Title from Slide - 1 Single Line as requested */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-white group-hover:text-zinc-100 transition-colors text-center whitespace-nowrap">
                More of Music
              </h2>

              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-zinc-400 group-hover:text-zinc-200 mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                <span>COMING SOON</span>
                <span>&bull;</span>
                <span>UNDER DEVELOPMENT</span>
              </span>
            </button>
          </div>

          {/* OPTION 2: MOMENTS OF MARKETING */}
          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => onSelectEntity('marketing')}
              className="w-full h-44 sm:h-52 md:h-60 lg:h-68 bg-black text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl hover:shadow-[0_0_50px_rgba(16,185,129,0.35)] border border-zinc-800 dark:border-white/15 hover:border-emerald-500/60 transition-all duration-400 cursor-pointer active:scale-[0.98]"
              title="Moments of Marketing – Creating Moments. Building Brands. Driving Growth."
            >
              {/* Shimmer Light Beam on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out pointer-events-none" />

              {/* Top Corner Action Indicator */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 sm:w-11 h-9 sm:h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-zinc-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 shadow-md">
                <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform" />
              </div>

              {/* Bold Title - 3 Lines Center Aligned as requested */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-white group-hover:text-emerald-400 transition-colors text-center leading-[1.12]">
                Moments<br />of<br />Marketing
              </h2>

              <span className="text-xs sm:text-sm font-bold font-sans tracking-wide text-emerald-400 mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4 leading-snug">
                Creating Moments. Building Brands. Driving Growth.
              </span>
            </button>
          </div>

        </div>

        {/* Tagline & Emerald Accent Line - Center Aligned on Page Below Both Option Cards */}
        <div className="w-full max-w-xl mx-auto mt-10 sm:mt-14 md:mt-16 flex flex-col items-center justify-center text-center select-none">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold dark:text-zinc-100 text-zinc-900 tracking-wide font-sans leading-relaxed">
            Creating Moments. Building Brands. Driving Growth.
          </p>
          
          {/* Sleek, Center-Aligned Glowing Emerald/Cyan Accent Bar */}
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg h-1 sm:h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-full mt-3 sm:mt-3.5 shadow-[0_0_18px_rgba(16,185,129,0.65)]" />
        </div>

      </main>

      {/* ----------------- BOTTOM CLEAN COPYRIGHT: CENTER ALIGNED ----------------- */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-4 sm:py-6 border-t dark:border-white/[0.08] border-zinc-200/80 relative z-10">
        <div className="flex items-center justify-center text-xs dark:text-zinc-400 text-zinc-600 font-mono text-center">
          <span>&copy; 2026 More of Music &bull; All Rights Reserved.</span>
        </div>
      </footer>

      {/* Coming Soon / Under Development Modal */}
      <ComingSoonModal
        isOpen={comingSoonOpen}
        onClose={() => setComingSoonOpen(false)}
        onExploreMarketing={() => onSelectEntity('marketing')}
      />

    </div>
  );
}
