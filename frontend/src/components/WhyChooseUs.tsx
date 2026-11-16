'use client';

import React from 'react';
import { ArrowUpRight, ShieldCheck, Zap, LineChart, Award, Layers } from 'lucide-react';

export default function WhyChooseUs({ onOpenLeadModal }: { onOpenLeadModal: () => void }) {
  const points = [
    {
      num: '01',
      title: 'One Connected Partner',
      icon: Layers,
      desc: 'Bring your branding, creative production, performance ads, web platforms, and sonic signatures together under one unified strategic partner.',
    },
    {
      num: '02',
      title: 'Strategies Built Around Unit Economics',
      icon: Zap,
      desc: 'We align marketing activities directly with your target CAC, LTV, industry benchmarks, and actual bottom-line growth priorities.',
    },
    {
      num: '03',
      title: 'Creativity With Commercial Purpose',
      icon: Award,
      desc: 'Every idea, design system, and commercial script starts with a strict commercial objective: to arrest attention, inspire trust, and drive measurable revenue.',
    },
    {
      num: '04',
      title: 'Performance-Guided Optimization',
      icon: LineChart,
      desc: 'We utilize real-time cohort attribution, multi-touch analytics, and transparent weekly reporting to continuously lower acquisition costs.',
    },
    {
      num: '05',
      title: 'Partnership That Evolves With Scale',
      icon: ShieldCheck,
      desc: 'As your business scales from series rounds to enterprise tier, our strategy evolves to capture new markets, geographies, and audience demographics.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow in subtle white */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-white/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Sticky on desktop) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <span className="text-[11px] font-semibold tracking-widest2 uppercase text-zinc-400 block font-mono">
              04 &mdash; Strategic Edge
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white leading-tight">
              Why Choose <br />
              <span className="italic font-serif gradient-editorial-text">MOM?</span>
            </h2>
            <p className="text-base font-normal text-white">
              Creative Mastery. Strategic Execution. Compounding Growth.
            </p>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
              We eliminate disjointed vendors, vanity metrics, and passive retainers. You gain an elite marketing and creative partner dedicated to compounding your brand equity and real revenue pipeline.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenLeadModal}
                className="px-7 py-3.5 rounded-xl btn-primary-glow text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                <span>START A PARTNERSHIP</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 5 Pro Cards */}
          <div className="lg:col-span-7 space-y-4">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  className="pro-card p-6 rounded-2xl flex items-start gap-5 group"
                >
                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    <span className="text-lg font-mono font-bold text-white">
                      {p.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-0.5">
                    <h3 className="text-base font-normal text-white group-hover:text-zinc-200 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-zinc-300 leading-relaxed font-light">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
