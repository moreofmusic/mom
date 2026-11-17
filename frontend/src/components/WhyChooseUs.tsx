'use client';

import React from 'react';
import { ArrowUpRight, ShieldCheck, Zap, LineChart, Award, Layers } from 'lucide-react';

export default function WhyChooseUs({ onOpenLeadModal }: { onOpenLeadModal: () => void }) {
  const points = [
    {
      num: '01',
      title: 'One Connected Marketing Partner',
      icon: Layers,
      desc: 'Bring your branding, content, digital campaigns, and lead generation together through a coordinated marketing approach.',
    },
    {
      num: '02',
      title: 'Strategies Built Around Your Business',
      icon: Zap,
      desc: 'We align marketing activities with your goals, target audience, industry, and growth priorities.',
    },
    {
      num: '03',
      title: 'Creativity With Purpose',
      icon: Award,
      desc: 'Every creative idea starts with a clear objective: to communicate, engage, build trust, or encourage action.',
    },
    {
      num: '04',
      title: 'Decisions Guided by Performance',
      icon: LineChart,
      desc: 'We use campaign insights and reporting to identify opportunities and improve marketing effectiveness.',
    },
    {
      num: '05',
      title: 'A Partnership That Evolves With You',
      icon: ShieldCheck,
      desc: 'As your business grows, your marketing strategy can evolve to meet new audiences, challenges, and opportunities.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-white/[0.02] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Sticky on desktop) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            {/* Non-clickable Badge: Strictly NO OUTLINE */}
            <span className="text-xs sm:text-sm font-bold tracking-widest3 uppercase dark:text-zinc-400 text-zinc-500 block font-mono">
              05 &mdash; Strategic Edge (From PPT Slide 5)
            </span>
            
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight font-display dark:text-white text-zinc-950 leading-[1.05]">
              Why Choose <br />
              <span className="italic font-serif font-normal gradient-editorial-text tracking-normal">MOM?</span>
            </h2>
            
            <p className="text-lg sm:text-xl font-bold dark:text-white text-zinc-900 font-display">
              Creative Thinking. Strategic Execution. Growth-Focused Marketing.
            </p>
            
            <p className="text-sm sm:text-base dark:text-zinc-300 text-zinc-600 leading-relaxed font-light">
              We eliminate disjointed vendors and vanity metrics. You gain an elite, coordinated growth partner dedicated to compounding your brand equity and delivering measurable business impact.
            </p>
            
            <div className="pt-4">
              <button
                onClick={onOpenLeadModal}
                className="px-8 py-4 rounded-xl btn-primary-glow text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2.5 cursor-pointer shadow-lg active:scale-95 transition-all duration-300 border border-transparent dark:hover:border-white/40 hover:border-black"
              >
                <span>LET&apos;S TALK ABOUT YOUR GROWTH</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 5 Pro Cards with Exact PPT Content */}
          <div className="lg:col-span-7 space-y-5">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  className="pro-card p-7 sm:p-8 rounded-3xl flex items-start gap-6 group border border-zinc-200 dark:border-white/10 dark:hover:border-white hover:border-black transition-all duration-300 shadow-sm"
                >
                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    {/* Non-clickable Number: NO OUTLINE */}
                    <span className="text-2xl font-mono font-bold dark:text-white text-zinc-900">
                      {p.num}
                    </span>
                    {/* Non-clickable Icon Box: NO OUTLINE */}
                    <div className="w-10 h-10 rounded-xl dark:bg-white/[0.06] bg-zinc-100 flex items-center justify-center dark:text-zinc-300 text-zinc-700 dark:group-hover:text-white group-hover:text-zinc-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-0.5">
                    <h3 className="text-lg sm:text-xl font-bold font-display uppercase tracking-tight dark:text-white text-zinc-950 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm dark:text-zinc-300 text-zinc-600 leading-relaxed font-light">
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
