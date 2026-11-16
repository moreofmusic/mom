'use client';

import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Music, BarChart3, Radio } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function DualBrandSection({ onOpenLeadModal }: { onOpenLeadModal: () => void }) {
  const [active, setActive] = useState<'marketing' | 'music'>('marketing');
  const { theme } = useTheme();

  return (
    <section id="pillars" className="py-24 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] dark:bg-white/[0.02] bg-black/[0.015] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b dark:border-white/[0.08] border-zinc-200">
          <div>
            <span className="text-[11px] font-semibold tracking-widest2 uppercase dark:text-zinc-400 text-zinc-500 block mb-2 font-mono">
              01 &mdash; Dual Dimension
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight dark:text-white text-zinc-950">
              Two Studios. <span className="italic font-serif gradient-editorial-text">One Agency.</span>
            </h2>
          </div>

          {/* Minimalist Switcher with Pure White/Black Active Pill */}
          <div className="flex items-center gap-1.5 p-1 rounded-full border dark:border-white/10 dark:bg-black/60 border-zinc-200 bg-zinc-100/90 backdrop-blur-md w-fit">
            <button
              onClick={() => setActive('marketing')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                active === 'marketing'
                  ? 'dark:bg-white dark:text-black bg-zinc-950 text-white shadow-md font-bold'
                  : 'dark:text-zinc-400 dark:hover:text-white text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Moments of Marketing
            </button>
            <button
              onClick={() => setActive('music')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                active === 'music'
                  ? 'dark:bg-white dark:text-black bg-zinc-950 text-white shadow-md font-bold'
                  : 'dark:text-zinc-400 dark:hover:text-white text-zinc-600 hover:text-zinc-950'
              }`}
            >
              More of Music
            </button>
          </div>
        </div>

        {/* Clean Editorial Card */}
        <div className="pt-10">
          {active === 'marketing' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pro-card p-8 sm:p-12 rounded-3xl animate-in fade-in duration-500">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <img
                    src="/mom-logo.png"
                    alt="MOM Logo"
                    className={`h-10 w-auto object-contain rounded border dark:border-white/10 border-zinc-300 p-0.5 transition-all ${
                      theme === 'light' ? 'invert' : 'bg-black'
                    }`}
                  />
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border dark:border-white/15 dark:bg-white/[0.04] dark:text-white border-zinc-200 bg-zinc-100 text-zinc-800 text-[10px] tracking-widest uppercase font-mono">
                    <TrendingUp className="w-3 h-3 dark:text-white text-zinc-900" />
                    <span>Full-Funnel Brand Growth Studio</span>
                  </div>
                </div>
                
                <h3 className="text-2xl sm:text-4xl font-light dark:text-white text-zinc-950 leading-tight">
                  Moments of Marketing
                </h3>
                
                <p className="text-sm sm:text-base dark:text-zinc-300 text-zinc-600 leading-relaxed font-light">
                  Creating Moments. Building Brands. Driving Growth. We partner with visionary founders and enterprise leaders to build distinctive brand identities, acquire high-value customers, and engineer high-converting digital funnels.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    'Performance Marketing',
                    'Meta & Google Ads',
                    'High-Intent Lead Gen',
                    'Brand Architecture',
                    'Next.js Web Platforms',
                    'Conversion Optimization'
                  ].map((t) => (
                    <span key={t} className="px-3.5 py-1.5 rounded-full text-[11px] hairline-border dark:text-zinc-300 dark:bg-white/[0.02] text-zinc-700 bg-zinc-100/80">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={onOpenLeadModal}
                    className="px-7 py-3 rounded-xl btn-primary-glow text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                  >
                    <span>EXPLORE MARKETING</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Mini Visual Showcase: Performance Metric Graph Simulation */}
              <div className="lg:col-span-5 dark:bg-black/60 bg-zinc-50 rounded-2xl border dark:border-white/[0.08] border-zinc-200 p-6 space-y-5 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b dark:border-white/[0.08] border-zinc-200">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 dark:text-white text-zinc-900" />
                    <span className="text-xs font-mono uppercase dark:text-zinc-300 text-zinc-700">Campaign Attribution</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 dark:bg-emerald-950/40 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-500/30">
                    LIVE ROAS: +340%
                  </span>
                </div>

                {/* Simulated Growth Chart Bars */}
                <div className="h-28 flex items-end justify-between gap-2 pt-4 px-2">
                  {[35, 48, 42, 65, 58, 85, 78, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                      <div
                        className="w-full rounded-t-sm dark:bg-gradient-to-t dark:from-zinc-700 dark:via-zinc-400 dark:to-white bg-gradient-to-t from-zinc-300 via-zinc-600 to-zinc-900 transition-all duration-700"
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-[8px] font-mono text-zinc-500">W{i + 1}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-center">
                  <div className="p-2.5 rounded-xl dark:bg-white/[0.02] dark:border-white/[0.05] bg-white border border-zinc-200 shadow-sm">
                    <span className="text-[9px] font-mono dark:text-zinc-400 text-zinc-500 uppercase block">Cost Per Lead</span>
                    <span className="text-base font-serif dark:text-white text-zinc-950 font-medium">-42% Reduced</span>
                  </div>
                  <div className="p-2.5 rounded-xl dark:bg-white/[0.02] dark:border-white/[0.05] bg-white border border-zinc-200 shadow-sm">
                    <span className="text-[9px] font-mono dark:text-zinc-400 text-zinc-500 uppercase block">Pipeline Value</span>
                    <span className="text-base font-serif dark:text-white text-zinc-950 font-medium">₹1.8 Cr+</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pro-card p-8 sm:p-12 rounded-3xl animate-in fade-in duration-500">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <img
                    src="/mom-logo.png"
                    alt="MOM More of Music Logo"
                    className={`h-10 w-auto object-contain rounded border dark:border-white/10 border-zinc-300 p-0.5 transition-all ${
                      theme === 'light' ? 'invert' : 'bg-black'
                    }`}
                  />
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border dark:border-white/15 dark:bg-white/[0.04] dark:text-white border-zinc-200 bg-zinc-100 text-zinc-800 text-[10px] tracking-widest uppercase font-mono">
                    <Music className="w-3 h-3 dark:text-white text-zinc-900" />
                    <span>Sonic &amp; Acoustic Architecture Studio</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-4xl font-light dark:text-white text-zinc-950 leading-tight">
                  More of Music
                </h3>
                
                <p className="text-sm sm:text-base dark:text-zinc-300 text-zinc-600 leading-relaxed font-light">
                  Elevating brands through the emotional resonance of sound. Custom sonic logos, acoustic signatures, commercial jingles, podcast themes, and spatial sound design that live rent-free in your audience&apos;s memory.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    'Sonic Logos & Jingles',
                    'Brand Audio Identity',
                    'Commercial Scoring',
                    'Podcast Theme Production',
                    'Spatial Sound UI',
                    'Voiceover Mastery'
                  ].map((t) => (
                    <span key={t} className="px-3.5 py-1.5 rounded-full text-[11px] hairline-border dark:text-zinc-300 dark:bg-white/[0.02] text-zinc-700 bg-zinc-100/80">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={onOpenLeadModal}
                    className="px-7 py-3 rounded-xl btn-primary-glow text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                  >
                    <span>DISCUSS AUDIO STUDIO</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Mini Visual Showcase: Sonic Audio Spectrum Simulation */}
              <div className="lg:col-span-5 dark:bg-black/60 bg-zinc-50 rounded-2xl border dark:border-white/[0.08] border-zinc-200 p-6 space-y-5 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b dark:border-white/[0.08] border-zinc-200">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 dark:text-white text-zinc-900 animate-pulse" />
                    <span className="text-xs font-mono uppercase dark:text-zinc-300 text-zinc-700">Acoustic Signature</span>
                  </div>
                  <span className="text-[10px] font-mono dark:text-zinc-300 text-zinc-700 dark:bg-white/[0.05] bg-zinc-200/70 px-2 py-0.5 rounded border dark:border-white/15 border-zinc-300">
                    528 Hz HARMONIC
                  </span>
                </div>

                {/* Animated Audio Equalizer Bars */}
                <div className="h-28 flex items-end justify-center gap-1.5 pt-4">
                  {[60, 85, 45, 95, 70, 100, 80, 50, 75, 90, 65, 80, 55, 90, 40].map((h, i) => (
                    <div
                      key={i}
                      className="w-2 rounded-full dark:bg-gradient-to-t dark:from-zinc-700 dark:via-zinc-300 dark:to-white bg-gradient-to-t from-zinc-300 via-zinc-600 to-zinc-900 animate-pulse"
                      style={{
                        height: `${h}%`,
                        animationDuration: `${0.6 + (i % 5) * 0.2}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-center">
                  <div className="p-2.5 rounded-xl dark:bg-white/[0.02] dark:border-white/[0.05] bg-white border border-zinc-200 shadow-sm">
                    <span className="text-[9px] font-mono dark:text-zinc-400 text-zinc-500 uppercase block">Brand Recall</span>
                    <span className="text-base font-serif dark:text-white text-zinc-950 font-medium">+86% Higher</span>
                  </div>
                  <div className="p-2.5 rounded-xl dark:bg-white/[0.02] dark:border-white/[0.05] bg-white border border-zinc-200 shadow-sm">
                    <span className="text-[9px] font-mono dark:text-zinc-400 text-zinc-500 uppercase block">Sonic Production</span>
                    <span className="text-base font-serif dark:text-white text-zinc-950 font-medium">Bespoke Master</span>
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
