'use client';

import React from 'react';
import { ArrowUpRight, MessageCircle, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import FlipBrandWordmark from './FlipBrandWordmark';

interface TwoOptionsGatewayProps {
  onSelectEntity: (entity: 'marketing' | 'music') => void;
}

export default function TwoOptionsGateway({ onSelectEntity }: TwoOptionsGatewayProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col justify-between dark:bg-black bg-[#F8FAFC] dark:text-white text-zinc-900 transition-colors duration-300 relative overflow-hidden select-none">
      
      {/* Subtle Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/12 blur-[140px] animate-float" />
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-red-500/10 dark:bg-red-500/12 blur-[140px] animate-float [animation-delay:3s]" />
      </div>

      {/* ----------------- TOP MINIMAL HEADER ----------------- */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-4 sm:py-6 flex items-center justify-between border-b dark:border-white/[0.08] border-zinc-200/80 relative z-10">
        {/* Brand Logo & Animated Division Wordmark */}
        <div className="flex items-center gap-2.5 sm:gap-4 min-w-0 flex-shrink">
          <img
            src="/mom-logo-transparent.png"
            alt="MOM Logo"
            className={`h-10 sm:h-14 md:h-16 w-auto object-contain flex-shrink-0 transition-all duration-300 hover:scale-105 ${
              theme === 'light' ? 'invert' : ''
            }`}
          />
          <FlipBrandWordmark size="md" />
        </div>

        {/* Top Controls: WhatsApp + Theme Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          <a
            href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20connect."
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-300 dark:border-white/15 dark:hover:border-emerald-400/60 dark:text-zinc-400 dark:hover:text-emerald-400 text-zinc-600 hover:border-emerald-500/60 hover:text-emerald-600 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
            title="Chat on WhatsApp (+91 9226042236)"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            onClick={toggleTheme}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-300 dark:border-white/15 dark:text-zinc-400 dark:hover:text-white dark:hover:border-white/30 text-zinc-700 hover:text-zinc-950 hover:border-zinc-500 flex items-center justify-center transition-all cursor-pointer active:scale-95 active:rotate-180 shadow-sm"
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} theme`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300 transition-transform duration-500" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-900 transition-transform duration-500" />
            )}
          </button>
        </div>
      </header>

      {/* ----------------- CENTER MAIN: STRICTLY THE 2 OPTIONS (AS PER USER SLIDE) ----------------- */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-20 flex-1 flex flex-col justify-center items-center relative z-10">
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start justify-center">
          
          {/* OPTION 1: MORE OF MUSIC */}
          <div className="w-full flex flex-col items-center">
            <button
              onClick={() => onSelectEntity('music')}
              className="w-full h-52 sm:h-64 md:h-72 lg:h-80 bg-black text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl hover:shadow-[0_0_50px_rgba(6,182,212,0.35)] border border-zinc-800 dark:border-white/15 hover:border-cyan-400/60 transition-all duration-400 cursor-pointer active:scale-[0.98]"
              title="Click to enter More of Music"
            >
              {/* Shimmer Light Beam on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out pointer-events-none" />

              {/* Top Corner Action Indicator */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 sm:w-11 h-9 sm:h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-zinc-300 group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 shadow-md">
                <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform" />
              </div>

              {/* Bold Title from Slide */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-white group-hover:text-cyan-300 transition-colors text-center">
                More of Music
              </h2>

              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-cyan-400 mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                <span>ENTER STUDIO</span>
                <span>&rarr;</span>
              </span>
            </button>
          </div>

          {/* OPTION 2: MOMENTS OF MARKETING */}
          <div className="w-full flex flex-col items-center group/momcard">
            <button
              onClick={() => onSelectEntity('marketing')}
              className="w-full h-52 sm:h-64 md:h-72 lg:h-80 bg-black text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl hover:shadow-[0_0_50px_rgba(239,68,68,0.35)] border border-zinc-800 dark:border-white/15 hover:border-red-500/60 transition-all duration-400 cursor-pointer active:scale-[0.98]"
              title="Click to enter Moments of Marketing"
            >
              {/* Shimmer Light Beam on Hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out pointer-events-none" />

              {/* Top Corner Action Indicator */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 sm:w-11 h-9 sm:h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-zinc-300 group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 shadow-md">
                <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform" />
              </div>

              {/* Bold Title from Slide (Stacked 2 lines as in slide) */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-white group-hover:text-red-400 transition-colors text-center leading-[1.08]">
                Moments of<br />Marketing
              </h2>

              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-400 mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                <span>ENTER AGENCY</span>
                <span>&rarr;</span>
              </span>
            </button>

            {/* Tagline & Red Accent Line - Center Aligned & Attractive */}
            <div className="w-full pt-4 sm:pt-5 flex flex-col items-center justify-center text-center">
              <p className="text-sm sm:text-base md:text-[17px] font-bold dark:text-zinc-100 text-zinc-900 tracking-wide font-sans leading-relaxed group-hover/momcard:text-red-600 dark:group-hover/momcard:text-red-400 transition-colors">
                Creating Moments. Building Brands. Driving Growth.
              </p>
              
              {/* Sleek, Center-Aligned Glowing Red Accent Bar */}
              <div className="w-full h-1 sm:h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-red-600 rounded-full mt-2.5 sm:mt-3 shadow-[0_0_15px_rgba(239,68,68,0.55)] group-hover/momcard:shadow-[0_0_24px_rgba(239,68,68,0.85)] transition-all duration-300" />
            </div>
          </div>

        </div>

      </main>

      {/* ----------------- BOTTOM CLEAN COPYRIGHT ----------------- */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-4 sm:py-6 border-t dark:border-white/[0.08] border-zinc-200/80 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs dark:text-zinc-400 text-zinc-600 font-mono text-center sm:text-left">
          <span>&copy; 2026 MOM &bull; More of Music &bull; Moments of Marketing</span>
          <span>Click any entity to explore full capabilities &rarr;</span>
        </div>
      </footer>

    </div>
  );
}
