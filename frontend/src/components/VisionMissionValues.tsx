'use client';

import React from 'react';
import { Shield, Lock, Clock, TrendingUp, Sparkles, Compass } from 'lucide-react';

export default function VisionMissionValues() {
  const values = [
    {
      name: 'Integrity',
      icon: Shield,
      desc: 'Ethical messaging, truthful offers, and uncompromised brand governance.',
    },
    {
      name: 'Transparency',
      icon: Lock,
      desc: 'Zero hidden agency fees, privacy compliance, and real-time dashboard telemetry.',
    },
    {
      name: 'Speed of Delivery',
      icon: Clock,
      desc: 'Rapid weekly ad iterations, agile campaign deployment, and <2h strategist response SLA.',
    },
    {
      name: 'Performance',
      icon: TrendingUp,
      desc: 'Rigorous ROAS emphasis, genuine customer LTV, and measurable enterprise valuation.',
    },
  ];

  return (
    <section id="values" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-[11px] font-semibold tracking-widest2 uppercase dark:text-zinc-400 text-zinc-500 block font-mono">
            06 &mdash; Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-light dark:text-white text-zinc-950">
            Mission &amp; <span className="italic font-serif gradient-editorial-text">Core Values</span>
          </h2>
          <p className="text-sm dark:text-zinc-400 text-zinc-600 font-light leading-relaxed">
            The guiding ethos behind every campaign, visual design system, and client partnership at MOM.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="pro-card p-8 sm:p-10 rounded-3xl space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-widest uppercase dark:text-white text-zinc-900 dark:bg-white/[0.08] bg-zinc-100 px-3 py-1 rounded-full border dark:border-white/15 border-zinc-300">
                Our Vision
              </span>
              <Sparkles className="w-4 h-4 dark:text-white text-zinc-900" />
            </div>
            <h3 className="text-xl sm:text-2xl font-light dark:text-white text-zinc-950 leading-snug">
              Catalyzing ambitious brands into defining cultural &amp; market category leaders.
            </h3>
            <p className="text-xs sm:text-sm dark:text-zinc-300 text-zinc-600 leading-relaxed font-light">
              To transform emerging enterprises and visionary founders through resonant storytelling, high-impact creative moments, and data-backed digital marketing excellence.
            </p>
          </div>

          <div className="pro-card p-8 sm:p-10 rounded-3xl space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-widest uppercase dark:text-white text-zinc-900 dark:bg-white/[0.08] bg-zinc-100 px-3 py-1 rounded-full border dark:border-white/15 border-zinc-300">
                Our Mission
              </span>
              <Compass className="w-4 h-4 dark:text-white text-zinc-900" />
            </div>
            <h3 className="text-xl sm:text-2xl font-light dark:text-white text-zinc-950 leading-snug">
              To turn meaningful moments into lasting brand value and sustainable business growth.
            </h3>
            <p className="text-xs sm:text-sm dark:text-zinc-300 text-zinc-600 leading-relaxed font-light">
              We align purpose-driven creativity with rigorous commercial accountability to produce compounding customer acquisition, high-margin sales pipelines, and long-term brand equity.
            </p>
          </div>
        </div>

        {/* 4 Values Minimal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.name}
                className="pro-card p-6 rounded-2xl flex flex-col justify-between group dark:hover:border-white/30 hover:border-zinc-400 transition-all"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl border dark:border-white/10 border-zinc-200 flex items-center justify-center dark:text-zinc-400 text-zinc-600 dark:group-hover:text-white group-hover:text-zinc-950 dark:group-hover:border-white/30 group-hover:border-zinc-400 transition-all mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-normal dark:text-white text-zinc-950 mb-2 transition-colors">
                    {v.name}
                  </h4>
                  <p className="text-xs dark:text-zinc-300 text-zinc-600 leading-relaxed font-light">
                    {v.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t dark:border-white/[0.06] border-zinc-200 text-[10px] dark:text-zinc-400 text-zinc-500 uppercase tracking-wider font-mono">
                  MOM Standard
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
