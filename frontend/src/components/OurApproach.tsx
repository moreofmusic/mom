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
          <span className="text-[11px] font-semibold tracking-widest2 uppercase text-zinc-400 block font-mono">
            05 &mdash; Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white">
            Our <span className="italic font-serif gradient-editorial-text">Approach</span>
          </h2>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
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
                className="pro-card p-6 rounded-2xl flex flex-col justify-between group hover:border-white/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-white bg-white/[0.08] px-2 py-0.5 rounded border border-white/15">
                      PHASE {s.num}
                    </span>
                    <div className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-base font-normal text-white mb-1 group-hover:text-zinc-200 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-[11px] text-zinc-300 font-medium mb-3 italic">
                    {s.tagline}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] text-[10px] text-zinc-400 font-mono flex items-center justify-between">
                  <span>Step {index + 1} of 5</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white transition-colors" />
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
