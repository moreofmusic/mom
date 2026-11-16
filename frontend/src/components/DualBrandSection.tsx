'use client';

import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Music, BarChart3, Radio } from 'lucide-react';

export default function DualBrandSection({ onOpenLeadModal }: { onOpenLeadModal: () => void }) {
  const [active, setActive] = useState<'marketing' | 'music'>('marketing');

  return (
    <section id="pillars" className="py-24 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.02] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div>
            <span className="text-[11px] font-semibold tracking-widest2 uppercase text-zinc-400 block mb-2 font-mono">
              01 &mdash; Dual Dimension
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Two Studios. <span className="italic font-serif gradient-editorial-text">One Agency.</span>
            </h2>
          </div>

          {/* Minimalist Switcher with Pure White Active Pill */}
          <div className="flex items-center gap-1.5 p-1 rounded-full border border-white/10 bg-black/60 backdrop-blur-md w-fit">
            <button
              onClick={() => setActive('marketing')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                active === 'marketing'
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Moments of Marketing
            </button>
            <button
              onClick={() => setActive('music')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                active === 'music'
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] font-bold'
                  : 'text-zinc-400 hover:text-white'
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
                    className="h-10 w-auto object-contain rounded border border-white/10 bg-black p-0.5"
                  />
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] text-[10px] tracking-widest uppercase text-white font-mono">
                    <TrendingUp className="w-3 h-3 text-white" />
                    <span>Full-Funnel Brand Growth Studio</span>
                  </div>
                </div>
                
                <h3 className="text-2xl sm:text-4xl font-light text-white leading-tight">
                  Moments of Marketing
                </h3>
                
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
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
                    <span key={t} className="px-3.5 py-1.5 rounded-full text-[11px] hairline-border text-zinc-300 bg-white/[0.02]">
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
              <div className="lg:col-span-5 bg-black/60 rounded-2xl border border-white/[0.08] p-6 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-white" />
                    <span className="text-xs font-mono uppercase text-zinc-300">Campaign Attribution</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                    LIVE ROAS: +340%
                  </span>
                </div>

                {/* Simulated Growth Chart Bars */}
                <div className="h-28 flex items-end justify-between gap-2 pt-4 px-2">
                  {[35, 48, 42, 65, 58, 85, 78, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                      <div
                        className="w-full rounded-t-sm bg-gradient-to-t from-zinc-700 via-zinc-400 to-white transition-all duration-700"
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-[8px] font-mono text-zinc-500">W{i + 1}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-center">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[9px] font-mono text-zinc-400 uppercase block">Cost Per Lead</span>
                    <span className="text-base font-serif text-white font-medium">-42% Reduced</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[9px] font-mono text-zinc-400 uppercase block">Pipeline Value</span>
                    <span className="text-base font-serif text-white font-medium">₹1.8 Cr+</span>
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
                    className="h-10 w-auto object-contain rounded border border-white/10 bg-black p-0.5"
                  />
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] text-[10px] tracking-widest uppercase text-white font-mono">
                    <Music className="w-3 h-3 text-white" />
                    <span>Sonic &amp; Acoustic Architecture Studio</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-4xl font-light text-white leading-tight">
                  More of Music
                </h3>
                
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
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
                    <span key={t} className="px-3.5 py-1.5 rounded-full text-[11px] hairline-border text-zinc-300 bg-white/[0.02]">
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
              <div className="lg:col-span-5 bg-black/60 rounded-2xl border border-white/[0.08] p-6 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-white animate-pulse" />
                    <span className="text-xs font-mono uppercase text-zinc-300">Acoustic Signature</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-300 bg-white/[0.05] px-2 py-0.5 rounded border border-white/15">
                    528 Hz HARMONIC
                  </span>
                </div>

                {/* Animated Audio Equalizer Bars */}
                <div className="h-28 flex items-end justify-center gap-1.5 pt-4">
                  {[60, 85, 45, 95, 70, 100, 80, 50, 75, 90, 65, 80, 55, 90, 40].map((h, i) => (
                    <div
                      key={i}
                      className="w-2 rounded-full bg-gradient-to-t from-zinc-700 via-zinc-300 to-white animate-pulse"
                      style={{
                        height: `${h}%`,
                        animationDuration: `${0.6 + (i % 5) * 0.2}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 text-center">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[9px] font-mono text-zinc-400 uppercase block">Brand Recall</span>
                    <span className="text-base font-serif text-white font-medium">+86% Higher</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[9px] font-mono text-zinc-400 uppercase block">Sonic Production</span>
                    <span className="text-base font-serif text-white font-medium">Bespoke Master</span>
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
