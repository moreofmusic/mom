'use client';

import React, { useState } from 'react';
import { ArrowRight, Globe, Share2, Target, Palette, Video, Code2, LineChart, MessageSquare, Megaphone, Compass } from 'lucide-react';

interface ServicesGridProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesGrid({ onSelectService }: ServicesGridProps) {
  const [filter, setFilter] = useState<'all' | 'growth' | 'creative' | 'digital'>('all');

  const services = [
    {
      number: '01',
      title: 'Digital Marketing',
      tagline: 'Be visible where your customers are searching.',
      description: 'Strategic SEO, omni-channel campaigns, and high-intent keyword acquisition to capture active market demand.',
      tags: ['SEO', 'Google Ads', 'Meta Ads', 'Performance'],
      category: 'digital',
      icon: Globe,
    },
    {
      number: '02',
      title: 'Social Media Management',
      tagline: 'Turn passive scrollers into an active brand community.',
      description: 'Aesthetic content architecture, high-retention reels, and engagement playbooks across Instagram, LinkedIn, and YouTube.',
      tags: ['Instagram', 'LinkedIn', 'Viral Reels', 'Community'],
      category: 'creative',
      icon: Share2,
    },
    {
      number: '03',
      title: 'Lead Generation',
      tagline: 'Turn attention into qualified enterprise pipeline.',
      description: 'Full-funnel customer acquisition, targeted landers, smart form routing, and instant WhatsApp follow-up flows.',
      tags: ['B2B & B2C', 'Funnel Design', 'WhatsApp Automations', 'High Intent'],
      category: 'growth',
      icon: Target,
    },
    {
      number: '04',
      title: 'Branding & Creative Design',
      tagline: 'Give your company an identity people venerate.',
      description: 'Signature visual identity systems, typography guidelines, packaging, and high-end pitch decks.',
      tags: ['Logo Systems', 'Design Guidelines', 'Visual Identity', 'Typography'],
      category: 'creative',
      icon: Palette,
    },
    {
      number: '05',
      title: 'Content Creation & Video',
      tagline: 'Tell your story with cinematic impact.',
      description: 'Studio-grade video production, commercial scripts, product photography, and viral founder reels.',
      tags: ['Cinematic Video', 'Commercials', 'Product Visuals', 'Storytelling'],
      category: 'creative',
      icon: Video,
    },
    {
      number: '06',
      title: 'Website Design & Dev',
      tagline: 'Turn your digital storefront into a conversion engine.',
      description: 'Ultra-fast, responsive Next.js 15 web applications and headless e-commerce built for top conversion benchmarks.',
      tags: ['Next.js 15', 'Tailwind CSS', 'High Speed', 'Responsive'],
      category: 'digital',
      icon: Code2,
    },
    {
      number: '07',
      title: 'Performance Marketing',
      tagline: 'Make every rupee spent deliver compound ROAS.',
      description: 'Multi-touch attribution, audience lookalikes, creative fatigue rotation, and conversion rate optimization (CRO).',
      tags: ['Paid Media', 'ROAS Scaling', 'Retargeting', 'Analytics'],
      category: 'growth',
      icon: LineChart,
    },
    {
      number: '08',
      title: 'Email & WhatsApp Flows',
      tagline: 'Build direct, high-LTV customer relationships.',
      description: 'Automated conversational flows, abandoned cart recoveries, VIP newsletters, and SMS retention engines.',
      tags: ['WhatsApp Flows', 'Klaviyo', 'Sequences', 'Retention'],
      category: 'growth',
      icon: MessageSquare,
    },
    {
      number: '09',
      title: 'Influencer & Activations',
      tagline: 'Live cultural moments that captivate audiences.',
      description: 'Creator partnerships, product launch PR stunts, immersive brand activations, and cultural co-creations.',
      tags: ['Creator Collabs', 'Product Launches', 'PR Stunts', 'Activations'],
      category: 'creative',
      icon: Megaphone,
    },
    {
      number: '10',
      title: 'Marketing Strategy & Consulting',
      tagline: 'A proven strategic blueprint for enterprise scale.',
      description: 'Comprehensive competitor teardowns, positioning audits, executive growth advisories, and 12-month roadmaps.',
      tags: ['Market Teardown', 'GTM Strategy', 'Executive Advisory', 'Audits'],
      category: 'growth',
      icon: Compass,
    },
  ];

  const filtered = filter === 'all' ? services : services.filter((s) => s.category === filter);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/[0.08]">
          <div className="space-y-3 max-w-xl">
            <span className="text-[11px] font-semibold tracking-widest2 uppercase text-zinc-400 block font-mono">
              03 &mdash; Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white">
              Our <span className="italic font-serif gradient-editorial-text">Services</span>
            </h2>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Ten integrated growth disciplines engineered to work in harmony under one unified strategic partner.
            </p>
          </div>

          {/* Minimalist Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1 rounded-full border border-white/10 bg-black/60 backdrop-blur-md">
            {[
              { id: 'all', label: 'All (10)' },
              { id: 'growth', label: 'Growth & Ads' },
              { id: 'creative', label: 'Creative & Video' },
              { id: 'digital', label: 'Digital & Tech' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setFilter(t.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  filter === t.id
                    ? 'bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.25)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Services Pro Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.number}
                className="pro-card p-7 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-white bg-white/[0.08] px-2.5 py-1 rounded border border-white/15">
                      {s.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-normal text-white mb-1.5 group-hover:text-zinc-200 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs text-zinc-300 font-medium mb-3 italic">
                    {s.tagline}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed font-light mb-5">
                    {s.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded text-[10px] border border-white/[0.08] text-zinc-300 bg-white/[0.02] group-hover:border-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06]">
                  <button
                    onClick={() => onSelectService(s.title)}
                    className="w-full py-2.5 rounded-lg border border-white/15 bg-white/[0.02] hover:bg-white hover:text-black hover:border-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Inquire Now</span>
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
