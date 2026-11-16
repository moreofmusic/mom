'use client';

import React from 'react';
import { ArrowUpRight, Search, Compass, Palette, Rocket, TrendingUp } from 'lucide-react';

export default function OurApproach({ onOpenLeadModal }: { onOpenLeadModal: () => void }) {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      tagline: 'Positioning & Audience Teardown',
      desc: 'Deep-dive into unit economics, customer psychographics, competitor gaps, and conversion roadblocks.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Strategize',
      tagline: 'Precision Media Blueprint',
      desc: 'Define channel budgets, target CAC benchmarks, creative testing matrix, and high-converting landing funnels.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Create',
      tagline: 'Brand, Visual & Sonic Assets',
      desc: 'Produce high-converting video reels, signature sonic logos, persuasive ad copy, and responsive web platforms.',
      icon: Palette,
    },
    {
      num: '04',
      title: 'Execute',
      tagline: 'Coordinated Multi-Channel Launch',
      desc: 'Simultaneous deployment across Google Search, Meta Ads, automated WhatsApp routing, and influencer drops.',
      icon: Rocket,
    },
    {
      num: '05',
      title: 'Optimize',
      tagline: 'Attribution & Compound Scale',
      desc: 'Weekly creative rotation, cohort LTV analysis, conversion rate sprints, and continuous ROAS expansion.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="approach" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[11px] font-semibold tracking-widest2 uppercase dark:text-zinc-400 text-zinc-500 block font-mono">
            05 &mdash; Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-light dark:text-white text-zinc-950">
            Our <span className="italic font-serif gradient-editorial-text">Approach</span>
          </h2>
          <p className="text-sm dark:text-zinc-400 text-zinc-600 font-light leading-relaxed">
            From initial audience discovery to compounding enterprise equity &mdash; a disciplined, data-driven 5-phase growth framework.
          </p>
        </div>

        {/* 5-Step Connected Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="pro-card p-6 rounded-2xl flex flex-col justify-between group dark:hover:border-white/30 hover:border-zinc-400 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold dark:text-white text-zinc-900 dark:bg-white/[0.08] bg-zinc-100 px-2 py-0.5 rounded border dark:border-white/15 border-zinc-300">
                      PHASE {s.num}
                    </span>
                    <div className="w-7 h-7 rounded-lg border dark:border-white/10 border-zinc-200 flex items-center justify-center dark:text-zinc-400 text-zinc-600 dark:group-hover:text-white group-hover:text-zinc-950 transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-base font-normal dark:text-white text-zinc-950 mb-1 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-[11px] dark:text-zinc-300 text-zinc-700 font-medium mb-3 italic">
                    {s.tagline}
                  </p>

                  <p className="text-xs dark:text-zinc-400 text-zinc-600 leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t dark:border-white/[0.06] border-zinc-200 text-[10px] dark:text-zinc-400 text-zinc-500 font-mono flex items-center justify-between">
                  <span>Step {index + 1} of 5</span>
                  <span className="w-1.5 h-1.5 rounded-full dark:bg-white/40 bg-zinc-400 dark:group-hover:bg-white group-hover:bg-zinc-950 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-14 flex justify-center">
          <button
            onClick={onOpenLeadModal}
            className="px-8 py-3.5 rounded-xl btn-primary-glow text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <span>DISCUSS YOUR ROADMAP WITH MOM</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
