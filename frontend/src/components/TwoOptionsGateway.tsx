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
    <div className="min-h-screen flex flex-col justify-between dark:bg-black bg-[#F8FAFC] dark:text-white text-zinc-900 transition-colors duration-300 relative overflow-hidden">
      
      {/* Subtle Background Glow - Apple Ambient Atmosphere */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] rounded-full bg-[#E11D48]/[0.15] blur-[150px] animate-apple-ambient" />
        <div className="absolute top-1/4 -right-32 w-[550px] h-[550px] rounded-full bg-zinc-500/[0.05] dark:bg-zinc-400/[0.05] blur-[140px] animate-apple-ambient [animation-delay:4s]" />
      </div>

      {/* ----------------- TOP MINIMAL HEADER (THEME TOGGLE ONLY) ----------------- */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 pt-4 sm:pt-6 pb-2 flex items-center justify-end relative z-20">
        <button
          onClick={toggleTheme}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/5 dark:border-white/10 dark:bg-white/[0.05] bg-black/[0.03] backdrop-blur-xl dark:text-zinc-300 dark:hover:text-white text-zinc-700 hover:text-zinc-950 flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-90 active:rotate-180 shadow-xs"
          aria-label="Toggle theme"
          title={mounted ? `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} theme` : 'Toggle theme'}
          suppressHydrationWarning
        >
          {mounted ? (
            theme === 'dark' ? (
              <Sun className="w-4 h-4 text-white transition-transform duration-500" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-900 transition-transform duration-500" />
            )
          ) : (
            <span className="w-4 h-4 inline-block" />
          )}
        </button>
      </header>

      {/* ----------------- CENTER MAIN: PURE MOM LOGO + 2 OPTIONS PERFECTLY VERTICALLY CENTERED ----------------- */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center items-center relative z-10 py-4 sm:py-6 my-auto">
        
        {/* Clean MOM Logo - Centered Directly Above Cards (Shifted Slightly Up for Optical Perfection) */}
        <div className="flex items-center justify-center -mt-6 sm:-mt-8 md:-mt-12 mb-10 sm:mb-14 md:mb-16 lg:mb-20 animate-in fade-in slide-in-from-top-4 duration-1000">
          <Link href="/" className="cursor-pointer block group">
            <img
              src="/mom-logo-transparent.png"
              alt="MOM Logo"
              suppressHydrationWarning
              className={`h-14 sm:h-18 md:h-22 lg:h-24 w-auto object-contain transition-all duration-500 group-hover:scale-105 active:scale-95 drop-shadow-[0_4px_24px_rgba(255,255,255,0.08)] ${
                mounted && theme === 'light' ? 'invert' : ''
              }`}
            />
          </Link>
        </div>

        {/* The 2 Option Cards Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 items-center justify-center">
          
          {/* OPTION 1: MORE OF MUSIC (UNDER DEVELOPMENT - POPS UP COMING SOON MESSAGE) */}
          <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 [animation-delay:150ms]">
            <button
              onClick={() => setComingSoonOpen(true)}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-black text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden group shadow-[0_0_35px_rgba(225,29,72,0.6),0_0_70px_rgba(225,29,72,0.35)] hover:shadow-[0_0_55px_rgba(225,29,72,0.9),0_0_100px_rgba(225,29,72,0.6)] border-2 border-[#E11D48] hover:border-[#FF2E56] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer hover:-translate-y-2 hover:scale-[1.015] active:scale-[0.97] apple-shimmer-beam"
              title="More of Music (Coming Soon — Under Development)"
            >
              {/* Subtle Red Ambient Glow behind card */}
              <div className="absolute inset-0 bg-[#E11D48]/[0.08] group-hover:bg-[#E11D48]/[0.18] transition-colors duration-700 pointer-events-none" />

              {/* Shimmer Light Beam on Hover with Red Glow */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-[#E11D48]/40 to-transparent transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />

              {/* Top Corner Action Indicator in Stylized Red */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 sm:w-11 h-9 sm:h-11 rounded-full border border-[#E11D48] bg-[#E11D48]/30 flex items-center justify-center text-white group-hover:bg-[#E11D48] group-hover:text-white group-hover:border-[#FF2E56] group-hover:rotate-45 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(225,29,72,1)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_15px_rgba(225,29,72,0.5)]">
                <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform" />
              </div>

              {/* Bold Title from Slide - 1 Single Line in Crisp Pure White */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-white group-hover:text-white transition-colors text-center whitespace-nowrap drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                More of Music
              </h2>

              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#E11D48] dark:text-rose-400 mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-1.5 drop-shadow-[0_0_10px_rgba(225,29,72,0.8)]">
                <span>COMING SOON</span>
                <span>&bull;</span>
                <span>UNDER DEVELOPMENT</span>
              </span>
            </button>
          </div>

          {/* OPTION 2: MOMENTS OF MARKETING */}
          <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 [animation-delay:300ms]">
            <button
              onClick={() => onSelectEntity('marketing')}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-black text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden group shadow-[0_0_35px_rgba(161,161,170,0.35)] hover:shadow-[0_0_75px_rgba(212,212,216,0.65)] border-2 border-zinc-500/75 dark:border-zinc-400/80 hover:border-zinc-300 dark:hover:border-zinc-200 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer hover:-translate-y-2 hover:scale-[1.015] active:scale-[0.97] apple-shimmer-beam"
              title="Moments of Marketing – Creating Moments. Building Brands. Driving Growth."
            >
              {/* Subtle Grey Ambient Glow behind card */}
              <div className="absolute inset-0 bg-zinc-500/[0.06] group-hover:bg-zinc-400/[0.14] transition-colors duration-700 pointer-events-none" />

              {/* Shimmer Light Beam on Hover with Silver/Grey Glow */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-zinc-400/30 to-transparent transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />

              {/* Top Corner Action Indicator in Stylized Grey */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 sm:w-11 h-9 sm:h-11 rounded-full border border-zinc-400/50 bg-zinc-500/15 flex items-center justify-center text-zinc-300 group-hover:bg-zinc-200 group-hover:text-black group-hover:border-white group-hover:rotate-45 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,212,216,0.7)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md">
                <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 transition-transform" />
              </div>

              {/* Bold Title - 3 Lines Center Aligned as requested */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight text-white group-hover:text-zinc-100 transition-colors text-center leading-[1.12] drop-shadow-[0_2px_12px_rgba(161,161,170,0.35)]">
                Moments<br />of<br />Marketing
              </h2>

              <span className="text-xs sm:text-sm font-bold font-sans tracking-wide text-zinc-300 mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4 leading-snug">
                Creating Moments. Building Brands. Driving Growth.
              </span>
            </button>
          </div>

        </div>
      </main>

      {/* ----------------- BOTTOM CLEAN COPYRIGHT: CENTER ALIGNED ----------------- */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-4 sm:py-5 relative z-10">
        <div className="flex items-center justify-center text-xs dark:text-zinc-500 text-zinc-500 font-mono text-center">
          <span>&copy; 2026 MOM &bull; All Rights Reserved.</span>
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
