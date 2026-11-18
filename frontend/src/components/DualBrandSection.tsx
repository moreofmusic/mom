'use client';

import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Music } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function DualBrandSection({ onOpenLeadModal }: { onOpenLeadModal: () => void }) {
  const [active, setActive] = useState<'marketing' | 'music'>('marketing');
  const { theme } = useTheme();

  return (
    <section id="company" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Exact Screenshot 3 Heading: "A full-stack growth company. Not an agency." */}
        <div className="space-y-6 pb-12 border-b dark:border-white/[0.08] border-zinc-200">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-extrabold tracking-[-0.035em] leading-[0.96] dark:text-white text-zinc-950 font-display">
            A <span className="font-serif italic font-normal dark:text-white text-zinc-950">full-stack</span> growth<br />
            company. Not<br />
            an agency.
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
            <p className="text-base sm:text-xl dark:text-zinc-300 text-zinc-600 font-light max-w-2xl">
              Moments of Marketing (Brand &amp; Growth) and More of Music (Sound &amp; Culture), under one roof.{' '}
              <a
                href="#services"
                className="font-bold underline underline-offset-4 dark:text-white text-zinc-950 hover:opacity-80 transition-opacity"
              >
                The 10 desks &rarr;
              </a>
            </p>

            {/* Minimalist Switcher with Clickable Outlined Pill */}
            <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full border border-zinc-300 dark:border-white/15 dark:bg-black/80 bg-zinc-100/90 backdrop-blur-md w-fit max-w-full overflow-x-auto whitespace-nowrap flex-nowrap shadow-sm [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <button
                onClick={() => setActive('marketing')}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer active:scale-95 whitespace-nowrap flex-shrink-0 ${
                  active === 'marketing'
                    ? 'dark:bg-white dark:text-black bg-zinc-950 text-white shadow-md'
                    : 'dark:text-zinc-400 dark:hover:text-white text-zinc-600 hover:text-zinc-950'
                }`}
              >
                Moments of Marketing
              </button>
              <button
                onClick={() => setActive('music')}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer active:scale-95 whitespace-nowrap flex-shrink-0 ${
                  active === 'music'
                    ? 'dark:bg-white dark:text-black bg-zinc-950 text-white shadow-md'
                    : 'dark:text-zinc-400 dark:hover:text-white text-zinc-600 hover:text-zinc-950'
                }`}
              >
                More of Music
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Dual Brand Showcase */}
        <div className="pt-12">
          {active === 'marketing' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pro-card p-8 sm:p-14 rounded-3xl animate-in fade-in duration-500">
              
              {/* Left Column: Brand Content from PPT */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <img
                    src="/mom-logo-transparent.png"
                    alt="MOM Logo"
                    className={`h-11 sm:h-12 w-auto object-contain transition-all duration-300 ${
                      theme === 'light' ? 'invert' : ''
                    }`}
                  />
                  {/* Non-clickable Badge: NO OUTLINE */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-white/[0.08] bg-zinc-200/80 dark:text-white text-zinc-900 text-[11px] tracking-widest uppercase font-mono font-semibold">
                    <TrendingUp className="w-3.5 h-3.5 dark:text-white text-zinc-900" />
                    <span>Brand Growth &amp; Strategy</span>
                  </div>
                </div>
                
                <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight font-display dark:text-white text-zinc-950 leading-tight">
                  Moments of Marketing
                </h3>

                <p className="text-base sm:text-lg dark:text-white text-zinc-900 font-semibold font-display">
                  Creating Moments. Building Brands. Driving Growth.
                </p>
                
                <p className="text-sm sm:text-base dark:text-zinc-300 text-zinc-600 leading-relaxed font-light">
                  We partner with businesses to develop impactful brand identities, create engaging digital experiences, and execute marketing strategies that connect with the right customers. Whether launching a new brand, expanding market presence, or scaling enterprise revenue, we engineer full-funnel momentum.
                </p>

                {/* Service Tags (Non-clickable: NO OUTLINE) */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    'Digital Marketing & SEO',
                    'Social Media Management',
                    'High-Intent Lead Gen',
                    'Branding & Creative Design',
                    'Performance Marketing & Paid Ads',
                    'Conversion Optimization'
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 rounded-xl text-xs font-medium dark:bg-white/[0.05] bg-zinc-100 dark:text-zinc-300 text-zinc-700 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Clickable CTA with Crisp Outline */}
                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={onOpenLeadModal}
                    className="px-8 py-4 rounded-full btn-primary-glow text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2.5 cursor-pointer shadow-lg active:scale-95 transition-all duration-300 border border-transparent dark:hover:border-white/40 hover:border-black"
                  >
                    <span>EXPLORE MARKETING PARTNERSHIP</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Editorial Photography with Live Overlay */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-2xl group aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
                  alt="Moments of Marketing Creative Campaign"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Dark Editorial Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                {/* Top Live Badge (Non-clickable: NO OUTLINE) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full font-semibold">
                    CAMPAIGN PRODUCTION
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 backdrop-blur-md px-3 py-1.5 rounded-full font-bold">
                    +340% ROAS SCALE
                  </span>
                </div>

                {/* Bottom Photo Metadata */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md text-white space-y-1">
                  <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 block font-semibold">
                    Culture &bull; Creative Direction
                  </span>
                  <h4 className="text-sm sm:text-base font-bold font-display">
                    High-Impact Brand Identity &amp; Creative Execution
                  </h4>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-zinc-300">
                    <span>Avg. Response: &lt; 2h</span>
                    <span>10M+ Generated Reach</span>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pro-card p-8 sm:p-14 rounded-3xl animate-in fade-in duration-500">
              
              {/* Left Column: Music Studio Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <img
                    src="/mom-logo-transparent.png"
                    alt="MOM More of Music Logo"
                    className={`h-11 sm:h-12 w-auto object-contain transition-all duration-300 ${
                      theme === 'light' ? 'invert' : ''
                    }`}
                  />
                  {/* Non-clickable Badge: NO OUTLINE */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full dark:bg-white/[0.08] bg-zinc-200/80 dark:text-white text-zinc-900 text-[11px] tracking-widest uppercase font-mono font-semibold">
                    <Music className="w-3.5 h-3.5 dark:text-white text-zinc-900" />
                    <span>Sonic Architecture &amp; Sound</span>
                  </div>
                </div>

                <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight font-display dark:text-white text-zinc-950 leading-tight">
                  More of Music
                </h3>

                <p className="text-base sm:text-lg dark:text-white text-zinc-900 font-semibold font-display">
                  Sound That Defines Modern Pop Culture &amp; Iconic Brands.
                </p>
                
                <p className="text-sm sm:text-base dark:text-zinc-300 text-zinc-600 leading-relaxed font-light">
                  Elevating brands and creators through the emotional resonance of sound. Custom sonic logos, acoustic signatures, commercial jingles, original film scores, and spatial audio that forge an immediate neurological connection with your audience.
                </p>

                {/* Service Tags (Non-clickable: NO OUTLINE) */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    'Sonic Logos & Audio Mnemonic',
                    'Original Composition & Scoring',
                    'Commercial Music Licensing',
                    'Podcast & Media Themes',
                    'Studio Audio Production',
                    'Voiceover & Spatial Sound'
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 rounded-xl text-xs font-medium dark:bg-white/[0.05] bg-zinc-100 dark:text-zinc-300 text-zinc-700 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Clickable CTA with Crisp Outline */}
                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={onOpenLeadModal}
                    className="px-8 py-4 rounded-full btn-primary-glow text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2.5 cursor-pointer shadow-lg active:scale-95 transition-all duration-300 border border-transparent dark:hover:border-white/40 hover:border-black"
                  >
                    <span>DISCUSS AUDIO &amp; SONIC STUDIO</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Studio Photography with Live Acoustic Overlay */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-2xl group aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop"
                  alt="More of Music Recording Studio Console"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Dark Editorial Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                {/* Top Live Badge (Non-clickable: NO OUTLINE) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full font-semibold">
                    STUDIO CONSOLE SESSION
                  </span>
                  <span className="text-[10px] font-mono text-zinc-300 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full font-bold">
                    528 HZ HARMONIC
                  </span>
                </div>

                {/* Bottom Photo Metadata */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md text-white space-y-1">
                  <span className="text-xs uppercase tracking-widest font-mono text-zinc-400 block font-semibold">
                    Sound &bull; Acoustic Mastery
                  </span>
                  <h4 className="text-sm sm:text-base font-bold font-display">
                    Commercial Soundscapes &amp; Bespoke Audio Identity
                  </h4>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-zinc-300">
                    <span>+86% Brand Memory Recall</span>
                    <span>Bespoke Studio Mastering</span>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
