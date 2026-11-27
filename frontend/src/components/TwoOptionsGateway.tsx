'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sun, Moon, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ComingSoonModal from './ComingSoonModal';

interface TwoOptionsGatewayProps {
  onSelectEntity: (entity: 'marketing' | 'music') => void;
}

export default function TwoOptionsGateway({ onSelectEntity }: TwoOptionsGatewayProps) {
  const { theme, toggleTheme, mounted } = useTheme();
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between dark:bg-black bg-[#F8FAFC] dark:text-white text-zinc-900 transition-colors duration-300 relative overflow-hidden">
      
      {/* Subtle Background Glow - Clean Minimal Neutral Atmosphere */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-zinc-500/[0.04] dark:bg-zinc-500/[0.04] blur-[140px] animate-apple-ambient" />
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-zinc-500/[0.04] dark:bg-zinc-500/[0.04] blur-[140px] animate-apple-ambient [animation-delay:4s]" />
      </div>

      {/* ----------------- TOP MINIMAL HEADER (WHATSAPP + THEME TOGGLE) ----------------- */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-3 sm:pt-6 pb-1 sm:pb-2 flex items-center justify-end gap-2 sm:gap-3 relative z-20">
        {/* Direct Message */}
        <a
          href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20connect."
          target="_blank"
          rel="noreferrer"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-black/10 dark:border-white/10 dark:bg-white/[0.05] bg-black/[0.03] backdrop-blur-xl hover:border-zinc-400 dark:hover:border-white/30 hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-xs"
          title="Message Us (+91 9226042236)"
          aria-label="Message"
        >
          <MessageCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-zinc-900 dark:text-white flex-shrink-0" />
        </a>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-black/5 dark:border-white/10 dark:bg-white/[0.05] bg-black/[0.03] backdrop-blur-xl dark:text-zinc-300 dark:hover:text-white text-zinc-700 hover:text-zinc-950 flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-90 active:rotate-180 shadow-xs"
          aria-label="Toggle theme"
          title={mounted ? `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} theme` : 'Toggle theme'}
          suppressHydrationWarning
        >
          {mounted ? (
            theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white transition-transform duration-500" />
            ) : (
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-900 transition-transform duration-500" />
            )
          ) : (
            <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline-block" />
          )}
        </button>
      </header>

      {/* ----------------- CENTER MAIN: PURE MOM LOGO + 2 OPTIONS PERFECTLY VERTICALLY CENTERED ----------------- */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center items-center relative z-10 py-1 sm:py-6 my-auto">
        
        {/* Clean MOM Logo - Centered Directly Above Cards (Shifted Up for Optical Perfection and Balanced Mobile Rhythm) */}
        <div className="w-full flex items-center justify-center -mt-8 xs:-mt-10 sm:-mt-12 md:-mt-16 mb-6 xs:mb-7 sm:mb-10 md:mb-14 lg:mb-16 animate-in fade-in slide-in-from-top-4 duration-1000">
          <Link href="/" className="cursor-pointer block group">
            <img
              src="/mom-logo-transparent.png"
              alt="MOM Logo"
              suppressHydrationWarning
              className={`h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-500 group-hover:scale-105 active:scale-95 drop-shadow-[0_4px_24px_rgba(255,255,255,0.08)] ${
                mounted && theme === 'light' ? 'invert' : ''
              }`}
            />
          </Link>
        </div>

        {/* The 2 Option Cards Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-8 lg:gap-12 items-center justify-center">
          
          {/* OPTION 1: MORE OF MUSIC (UNDER DEVELOPMENT - POPS UP COMING SOON MESSAGE) */}
          <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 [animation-delay:150ms]">
            <button
              onClick={() => setComingSoonOpen(true)}
              className="w-full h-44 sm:h-60 md:h-72 lg:h-80 bg-black text-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-8 flex flex-col items-center justify-center relative overflow-hidden group border-2 border-zinc-700/70 dark:border-zinc-800 hover:border-rose-500 dark:hover:border-rose-500 shadow-md dark:shadow-none hover:shadow-2xl dark:hover:shadow-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer hover:-translate-y-1.5 hover:scale-[1.01] active:scale-[0.98]"
              title="More of Music (Coming Soon — Under Development)"
            >
              {/* Top Corner Action Indicator - Grey initially, Red on Hover (Clean, Zero Glow) */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-7 h-7 sm:w-10 sm:h-10 rounded-full border border-zinc-700/80 dark:border-zinc-800 bg-white/[0.04] text-zinc-400 group-hover:border-rose-500 group-hover:bg-rose-500 group-hover:text-white group-hover:rotate-45 group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center shadow-xs">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform" />
              </div>

              {/* Center Aligned Content: Title + Tagline Always Shown */}
              <div className="flex flex-col items-center justify-center text-center w-full px-2 sm:px-6 relative z-10">
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-white group-hover:text-white transition-colors text-center leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                  More of Music
                </h2>

                <span className="text-[9px] sm:text-[11px] md:text-xs font-mono font-bold tracking-wider sm:tracking-[0.18em] uppercase text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-300 dark:group-hover:text-zinc-300 mt-2 sm:mt-3 md:mt-4 inline-flex items-center justify-center gap-1 sm:gap-1.5 transition-colors duration-300 text-center whitespace-nowrap">
                  <span>COMING SOON</span>
                  <span>&bull;</span>
                  <span>UNDER DEVELOPMENT</span>
                </span>
              </div>
            </button>
          </div>

          {/* OPTION 2: MOMENTS OF MARKETING */}
          <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 [animation-delay:300ms]">
            <button
              onClick={() => onSelectEntity('marketing')}
              className="w-full h-44 sm:h-60 md:h-72 lg:h-80 bg-black text-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-8 flex flex-col items-center justify-center relative overflow-hidden group border-2 border-zinc-700/70 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-200 shadow-md dark:shadow-none hover:shadow-2xl dark:hover:shadow-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer hover:-translate-y-1.5 hover:scale-[1.01] active:scale-[0.98]"
              title="Moments of Marketing – Creating Moments. Building Brands. Driving Growth."
            >
              {/* Top Corner Action Indicator - Grey initially, White on Hover (Clean, Zero Glow) */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-7 h-7 sm:w-10 sm:h-10 rounded-full border border-zinc-700/80 dark:border-zinc-800 bg-white/[0.04] text-zinc-400 group-hover:border-white group-hover:bg-white group-hover:text-black group-hover:rotate-45 group-hover:scale-110 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center shadow-xs">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform" />
              </div>

              {/* Center Aligned Content: Title + Tagline Always Shown */}
              <div className="flex flex-col items-center justify-center text-center w-full px-2 sm:px-6 relative z-10">
                <h2 className="text-[17px] xs:text-lg sm:text-2xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-white group-hover:text-white transition-colors text-center leading-tight sm:leading-[1.12] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                  <span className="sm:hidden whitespace-nowrap">Moments of Marketing</span>
                  <span className="hidden sm:inline">Moments<br />of<br />Marketing</span>
                </h2>

                <span className="text-[10px] sm:text-xs md:text-sm font-sans font-medium sm:font-bold tracking-normal sm:tracking-wide text-zinc-400 group-hover:text-zinc-200 mt-2 sm:mt-3 md:mt-4 text-center px-1 sm:px-4 leading-tight sm:leading-snug transition-colors duration-300 max-w-[280px] sm:max-w-none">
                  Creating Moments. Building Brands.
                  <br />
                  <span className="whitespace-nowrap">Driving Growth.</span>
                </span>
              </div>
            </button>
          </div>

        </div>
      </main>

      {/* ----------------- BOTTOM CLEAN COPYRIGHT: CENTER ALIGNED ----------------- */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-2 sm:py-5 relative z-10">
        <div className="flex items-center justify-center text-[10px] sm:text-xs dark:text-zinc-500 text-zinc-500 font-mono text-center">
          <span>&copy; 2026 MOM &bull; All Rights Reserved.</span>
        </div>
      </footer>

      {/* Coming Soon / Under Development Modal */}
      <ComingSoonModal
        isOpen={comingSoonOpen}
        onClose={() => setComingSoonOpen(false)}
      />

    </div>
  );
}
