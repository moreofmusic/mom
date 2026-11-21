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
        'Build a distinctive brand presence that captures attention and earns recognition. We help your business stand out through strategic branding, engaging content, and consistent digital communication.',
      deliverables: [
        'Strategic Branding & Visual Identity',
        'Engaging Multi-Platform Content',
        'Consistent Digital Communication',
      ],
    },
    {
      number: '02',
      title: 'Lead Generation',
      tagline: 'Reach the right people. Create real opportunities.',
      icon: Target,
      description:
        'Attract relevant audiences and turn their interest into valuable enquiries. Our targeted campaigns and conversion-focused strategies help create opportunities for your sales team.',
      deliverables: [
        'Targeted Google & Meta Campaigns',
        'Conversion-Focused Landing Funnels',
        'Direct Sales Pipeline Inquiries',
      ],
    },
    {
      number: '03',
      title: 'Business Growth',
      tagline: 'Turn opportunities into lasting progress.',
      icon: TrendingUp,
      description:
        'Make your marketing work harder for your business. Through performance analysis, customer engagement, and continuous optimization, we help you make informed marketing decisions and build a foundation for sustainable growth.',
      deliverables: [
        'Performance Analysis & Analytics',
        'Customer Engagement & Retention',
        'Continuous Campaign Optimization',
      ],
    },
  ];

  return (
    <section id="pillars" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header: Represent Management Scale */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight dark:text-white text-zinc-950 font-display">
            Our three <span className="font-serif italic font-normal dark:text-white text-zinc-950">pillars.</span>
          </h2>
          <p className="text-base sm:text-lg dark:text-zinc-300 text-zinc-600 font-light leading-relaxed">
            Every strategy, campaign, and digital touchpoint we build is anchored in the three core pillars of MOM.
          </p>
        </div>

        {/* 3 Pillars Grid: Cards are clickable to inquire */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="pro-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between group border border-zinc-200 dark:border-white/10 dark:hover:border-emerald-400/50 hover:border-black hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all duration-400 shadow-md relative overflow-hidden"
              >
                {/* Subtle Traveling Border Shimmer on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    {/* Non-clickable number: NO OUTLINE */}
                    <span className="text-5xl sm:text-6xl font-black font-display dark:text-zinc-600 text-zinc-300 dark:group-hover:text-emerald-400 group-hover:text-emerald-600 transition-colors duration-300">
                      {pillar.number}
                    </span>
                    {/* Non-clickable icon container: NO OUTLINE */}
                    <div className="w-12 h-12 rounded-2xl dark:bg-white/[0.06] bg-zinc-100 flex items-center justify-center dark:text-white text-zinc-900 group-hover:scale-110 group-hover:bg-emerald-500/15 group-hover:text-emerald-400 transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold capitalize font-display dark:text-white text-zinc-950 mb-2 group-hover:text-emerald-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold dark:text-zinc-300 text-zinc-700 mb-4 font-mono">
                    {pillar.tagline}
                  </p>

                  <p className="text-sm dark:text-zinc-300 text-zinc-600 leading-relaxed font-light mb-8">
                    {pillar.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t dark:border-white/[0.06] border-zinc-200">
                    {pillar.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2.5 text-xs sm:text-sm dark:text-zinc-300 text-zinc-700">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clickable CTA Button: CRISP OUTLINE & Smooth Transitions */}
                <div className="pt-8 mt-8 border-t dark:border-white/[0.08] border-zinc-200">
                  <button
                    onClick={() => onSelectService(pillar.title)}
                    className="w-full py-3.5 rounded-xl border border-zinc-300 dark:border-white/20 dark:bg-white/[0.02] bg-zinc-50 dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:bg-zinc-950 hover:text-white hover:border-zinc-950 text-xs sm:text-sm tracking-wider uppercase font-bold dark:text-white text-zinc-900 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-sm active:scale-95 relative overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out pointer-events-none" />
                    <span>Inquire</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
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
