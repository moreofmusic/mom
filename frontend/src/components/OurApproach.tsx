'use client';

import React from 'react';
import { Search, Compass, Palette, Rocket, TrendingUp } from 'lucide-react';

export default function OurApproach({ onOpenLeadModal }: { onOpenLeadModal: () => void }) {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      tagline: 'Understand Your Core',
      desc: 'Understand your business, audience, challenges, and objectives.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Strategize',
      tagline: 'Focused Roadmap',
      desc: 'Build a focused marketing roadmap with the right channels and priorities.',
      icon: Compass,
    },
    {
      num: '03',
      title: 'Create',
      tagline: 'Compelling Brand Assets',
      desc: 'Develop compelling brand identities, content, campaigns, and digital experiences.',
      icon: Palette,
    },
    {
      num: '04',
      title: 'Execute',
      tagline: 'Coordinated Launch',
      desc: 'Launch coordinated marketing activities to reach and engage your audience.',
      icon: Rocket,
    },
    {
      num: '05',
      title: 'Optimize',
      tagline: 'Continuous Refinement',
      desc: 'Review performance, identify opportunities, and refine the strategy.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="approach" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight dark:text-white text-zinc-950 font-display">
            Our 5-step <span className="font-serif italic font-normal dark:text-white text-zinc-950">approach.</span>
          </h2>
          <p className="text-lg sm:text-xl dark:text-zinc-300 text-zinc-800 font-medium">
            From First Impression to Lasting Customer Relationships.
          </p>
          <p className="text-sm sm:text-base dark:text-zinc-400 text-zinc-600 font-light leading-relaxed">
            A proven 5-step strategic framework designed to align creativity, execution, and performance.
          </p>
        </div>

        {/* 5-Step Connected Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="pro-card p-7 rounded-3xl flex flex-col justify-between group border border-zinc-200 dark:border-white/10 dark:hover:border-white hover:border-black transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Non-clickable Phase Badge: NO OUTLINE */}
                    <span className="text-xs font-mono font-bold dark:text-white text-zinc-900 dark:bg-white/[0.08] bg-zinc-200/80 px-2.5 py-1 rounded-md">
                      PHASE {s.num}
                    </span>
                    {/* Non-clickable Icon Box: NO OUTLINE */}
                    <div className="w-9 h-9 rounded-xl dark:bg-white/[0.06] bg-zinc-100 flex items-center justify-center dark:text-zinc-300 text-zinc-700 dark:group-hover:text-white group-hover:text-zinc-950 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight dark:text-white text-zinc-950 mb-1 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs font-mono dark:text-zinc-300 text-zinc-700 font-semibold mb-3">
                    {s.tagline}
                  </p>

                  <p className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t dark:border-white/[0.06] border-zinc-200 text-[11px] dark:text-zinc-400 text-zinc-500 font-mono flex items-center justify-between">
                  <span>Step {index + 1} of 5</span>
                  <span className="w-2 h-2 rounded-full dark:bg-white/40 bg-zinc-400 dark:group-hover:bg-white group-hover:bg-zinc-950 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
