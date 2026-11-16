'use client';

import React from 'react';
import { ArrowRight, Eye, Target, TrendingUp, Check } from 'lucide-react';

export default function ThreePillars({ onSelectService }: { onSelectService: (service: string) => void }) {
  const pillars = [
    {
      number: '01',
      title: 'Brand Visibility',
      tagline: 'Get noticed. Stay remembered.',
      icon: Eye,
      description:
        'Build a magnetic brand presence that captures high-value attention and commands industry prestige through narrative storytelling, aesthetic craft, and omni-channel reach.',
      deliverables: ['Visual Identity & Systems', 'Social Brand Positioning', 'High-Converting Creative Direction'],
    },
    {
      number: '02',
      title: 'Lead Generation',
      tagline: 'Reach the right buyers. Drive intent.',
      icon: Target,
      description:
        'Acquire high-intent clients and turn their initial curiosity into revenue pipeline using laser-targeted paid acquisition, smart landing funnels, and automated CRM routing.',
      deliverables: ['Paid Social (Meta/LinkedIn)', 'Google Search & Performance Max', 'Conversion Funnel Architecture'],
    },
    {
      number: '03',
      title: 'Business Scale',
      tagline: 'Turn momentum into lasting enterprise equity.',
      icon: TrendingUp,
      description:
        'Maximize ROI and lower CAC through advanced cohort analysis, rigorous conversion rate optimization (CRO), and sonic resonance that compounds loyalty over time.',
      deliverables: ['Real-Time Attribution Modeling', 'CRO & Landing Page Sprints', 'Sonic Branding & Sound Identity'],
    },
  ];

  return (
    <section id="pillars" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[11px] font-semibold tracking-widest2 uppercase dark:text-zinc-400 text-zinc-500 block font-mono">
            02 &mdash; Core Foundations
          </span>
          <h2 className="text-3xl sm:text-5xl font-light dark:text-white text-zinc-950">
            Three Pillars <span className="italic font-serif gradient-editorial-text">of Growth</span>
          </h2>
          <p className="text-sm dark:text-zinc-400 text-zinc-600 font-light leading-relaxed">
            Every campaign, asset, and sonic signature we engineer is anchored in three proven growth disciplines.
          </p>
        </div>

        {/* 3 Clean Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="pro-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between group dark:hover:border-white/30 hover:border-zinc-400 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-serif font-light dark:text-zinc-500 text-zinc-400 dark:group-hover:text-white group-hover:text-zinc-950 transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl border dark:border-white/10 border-zinc-200 dark:bg-white/[0.02] bg-zinc-100 flex items-center justify-center dark:text-zinc-400 text-zinc-600 dark:group-hover:text-white group-hover:text-zinc-950 dark:group-hover:border-white/30 group-hover:border-zinc-400 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-normal dark:text-white text-zinc-950 mb-2 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-semibold dark:text-zinc-300 text-zinc-700 mb-4 font-mono">
                    {pillar.tagline}
                  </p>

                  <p className="text-xs sm:text-sm dark:text-zinc-300 text-zinc-600 leading-relaxed font-light mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t dark:border-white/[0.06] border-zinc-200">
                    {pillar.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-[11px] dark:text-zinc-400 text-zinc-600">
                        <Check className="w-3.5 h-3.5 dark:text-white text-zinc-900 flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t dark:border-white/[0.08] border-zinc-200">
                  <button
                    onClick={() => onSelectService(pillar.title)}
                    className="w-full py-2.5 rounded-lg border dark:border-white/15 border-zinc-300 dark:bg-white/[0.02] bg-zinc-50 dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:bg-zinc-950 hover:text-white hover:border-zinc-950 text-xs tracking-wider uppercase font-semibold dark:text-white text-zinc-900 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                  >
                    <span>Inquire for {pillar.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
