'use client';

import React from 'react';
import { Shield, Lock, Clock, TrendingUp, Sparkles, Compass } from 'lucide-react';

export default function VisionMissionValues() {
  const values = [
    {
      name: 'Integrity',
      icon: Shield,
      desc: 'Ethical messaging, truthful offers, brand trust.',
    },
    {
      name: 'Transparency',
      icon: Lock,
      desc: 'Privacy compliance, honest metrics, data security.',
    },
    {
      name: 'Speed of Delivery',
      icon: Clock,
      desc: 'Rapid iteration, fast deployment, real-time responses.',
    },
    {
      name: 'Performance',
      icon: TrendingUp,
      desc: 'ROI emphasis, customer value, measurable impact.',
    },
  ];

  return (
    <section id="values" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          {/* Non-clickable Badge: Strictly NO OUTLINE */}
          <span className="text-xs sm:text-sm font-bold tracking-widest3 uppercase dark:text-zinc-400 text-zinc-500 block font-mono">
            07 &mdash; Philosophy &amp; Ethos (From PPT Slide 4)
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight font-display dark:text-white text-zinc-950">
            Mission &amp; <span className="italic font-serif font-normal gradient-editorial-text tracking-normal">Our Values.</span>
          </h2>
          <p className="text-sm sm:text-base dark:text-zinc-400 text-zinc-600 font-light leading-relaxed">
            The core principles guiding every client relationship, brand strategy, and musical production at MOM.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Vision Card */}
          <div className="pro-card p-8 sm:p-12 rounded-3xl space-y-4 group border border-zinc-200 dark:border-white/10 dark:hover:border-white hover:border-black transition-all duration-300 shadow-sm">
            <div className="flex items-center justify-between">
              {/* Non-clickable Pill: NO OUTLINE */}
              <span className="text-xs font-mono tracking-widest uppercase dark:text-white text-zinc-900 dark:bg-white/[0.08] bg-zinc-200/80 px-3.5 py-1.5 rounded-full font-bold">
                Our Vision
              </span>
              <Sparkles className="w-5 h-5 dark:text-white text-zinc-900" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight dark:text-white text-zinc-950 leading-snug">
              Creating Moments. Building Brands. Driving Growth.
            </h3>
            <p className="text-sm sm:text-base dark:text-zinc-300 text-zinc-600 leading-relaxed font-light">
              To be the premier cultural and commercial marketing agency, pairing breakthrough sonic identity with compound full-funnel digital performance for ambitious founders and enterprise brands.
            </p>
          </div>

          {/* Mission Card: Exact PPT Slide 4 */}
          <div className="pro-card p-8 sm:p-12 rounded-3xl space-y-4 group border border-zinc-200 dark:border-white/10 dark:hover:border-white hover:border-black transition-all duration-300 shadow-sm">
            <div className="flex items-center justify-between">
              {/* Non-clickable Pill: NO OUTLINE */}
              <span className="text-xs font-mono tracking-widest uppercase dark:text-white text-zinc-900 dark:bg-white/[0.08] bg-zinc-200/80 px-3.5 py-1.5 rounded-full font-bold">
                Our Mission (From PPT)
              </span>
              <Compass className="w-5 h-5 dark:text-white text-zinc-900" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight dark:text-white text-zinc-950 leading-snug">
              To turn meaningful marketing moments into lasting brand value and business growth.
            </h3>
            <p className="text-sm sm:text-base dark:text-zinc-300 text-zinc-600 leading-relaxed font-light">
              We align purpose-driven creativity with rigorous commercial accountability to create real opportunities for your sales team and build a lasting foundation for sustainable growth.
            </p>
          </div>

        </div>

        {/* 4 Core Values Minimal Cards: Exact PPT Slide 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.name}
                className="pro-card p-7 sm:p-8 rounded-3xl flex flex-col justify-between group border border-zinc-200 dark:border-white/10 dark:hover:border-white hover:border-black transition-all duration-300 shadow-sm"
              >
                <div>
                  {/* Non-clickable Icon Box: NO OUTLINE */}
                  <div className="w-12 h-12 rounded-2xl dark:bg-white/[0.06] bg-zinc-100 flex items-center justify-center dark:text-zinc-300 text-zinc-700 dark:group-hover:text-white group-hover:text-zinc-950 transition-colors mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h4 className="text-xl font-bold font-display uppercase tracking-tight dark:text-white text-zinc-950 mb-2 transition-colors">
                    {v.name}
                  </h4>
                  
                  <p className="text-xs sm:text-sm dark:text-zinc-300 text-zinc-600 leading-relaxed font-light">
                    {v.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t dark:border-white/[0.06] border-zinc-200 text-[11px] dark:text-zinc-400 text-zinc-500 uppercase tracking-widest font-mono font-semibold">
                  MOM Core Pillar
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
