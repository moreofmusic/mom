'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface WorkItem {
  id: string;
  category: string;
  title: string;
  client: string;
  service: string;
  image: string;
  tags: string[];
  stats: string;
}

interface WorkAndRosterSectionProps {
  onSelectService: (service: string) => void;
}

export default function WorkAndRosterSection({ onSelectService }: WorkAndRosterSectionProps) {
  const works: WorkItem[] = [
    {
      id: '01',
      category: 'More of Music — Sound & Culture',
      title: 'Acoustic Signatures & Sonic Identity',
      client: 'Bespoke Studio Session',
      service: 'Branding & Creative Design',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
      tags: ['Original Scoring', 'Sonic Mnemonics', 'Studio Mastering'],
      stats: '+86% Memory Recall',
    },
    {
      id: '02',
      category: 'Moments of Marketing — Brand Luxury',
      title: 'Luxury Brand Architecture & Identity',
      client: 'Modern Lifestyle Brand',
      service: 'Branding & Creative Design',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
      tags: ['Art Direction', 'Visual Systems', 'Brand Guidelines'],
      stats: 'Global Rebrand',
    },
    {
      id: '03',
      category: 'Live & Experiential — Arena Moments',
      title: 'Live Concert Activations & Stage Production',
      client: 'Cultural Festival Tour',
      service: 'Influencer Marketing & Brand Activations',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
      tags: ['Live Touring', 'Stage Visuals', 'Crowd Resonance'],
      stats: '50K+ Live Attendees',
    },
    {
      id: '04',
      category: 'Creator & Talent Partnerships',
      title: 'Cultural Creator & Influencer Collaborations',
      client: 'High-Retention Campaign',
      service: 'Influencer Marketing & Brand Activations',
      image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1200&auto=format&fit=crop',
      tags: ['Talent Curation', 'Viral Reels', 'Pop Culture Engine'],
      stats: '10M+ Organic Reach',
    },
    {
      id: '05',
      category: 'Digital & Web Engineering',
      title: 'Next.js Web Platforms & High-Speed Funnels',
      client: 'Enterprise Growth Storefront',
      service: 'Website Design & Development',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
      tags: ['Headless Next.js', 'Conversion CRO', 'Speed Index <0.8s'],
      stats: '+4.2x Conversions',
    },
    {
      id: '06',
      category: 'Content Creation & Film',
      title: 'Cinematic Advertising & Founder Commercials',
      client: 'Commercial Storytelling',
      service: 'Content Creation & Video Production',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
      tags: ['Cinematic 4K', 'Advertising Scripts', 'Product Shoots'],
      stats: '340% Avg. ROAS',
    },
  ];

  return (
    <section id="roster" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Exact Screenshot 2 Header: "The roster." with Right-Aligned Italic Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-8 border-b dark:border-white/[0.08] border-zinc-200">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight dark:text-white text-zinc-950 font-display">
            The <span className="font-serif italic font-normal dark:text-white text-zinc-950">roster.</span>
          </h2>

          <div className="pb-2">
            <span className="font-serif italic text-base sm:text-lg md:text-xl dark:text-zinc-400 text-zinc-600 block">
              sound, artists, creative productions
            </span>
          </div>
        </div>

        {/* 6 High-Fashion Photography Cards Grid: Clickable so they have crisp outlines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div
              key={work.id}
              onClick={() => onSelectService(work.service)}
              className="group relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 hover:border-black dark:hover:border-white transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl flex flex-col justify-between aspect-[3/4] bg-zinc-950 active:scale-[0.98]"
            >
              {/* Background High-Resolution Photography */}
              <img
                src={work.image}
                alt={work.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Luxury Vignette / Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 group-hover:via-black/30 transition-all duration-500" />

              {/* Top Bar inside Card */}
              <div className="relative z-10 p-6 flex items-start justify-between">
                {/* Non-clickable Category Chip: NO OUTLINE */}
                <span className="text-[10px] font-mono tracking-widest uppercase text-white bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full font-semibold">
                  {work.category}
                </span>

                {/* Clickable Quick Action Indicator: Outlined */}
                <div className="w-10 h-10 rounded-full border border-white/20 bg-black/70 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Bottom Metadata & Content */}
              <div className="relative z-10 p-6 sm:p-8 space-y-3">
                {/* Stat Highlight (Non-clickable: NO OUTLINE) */}
                <div className="inline-block px-3 py-1 rounded-md bg-white/10 backdrop-blur-md text-[11px] font-mono text-emerald-400 font-bold">
                  {work.stats}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white uppercase tracking-tight group-hover:text-zinc-100 transition-colors leading-snug">
                  {work.title}
                </h3>

                <p className="text-xs text-zinc-300 font-mono tracking-wide">
                  Client Focus: {work.client}
                </p>

                {/* Tags inside card (Non-clickable: NO OUTLINE) */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[10px] bg-white/10 text-zinc-200 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Explicit Clickable CTA Bar with outline */}
                <div className="pt-2">
                  <div className="w-full py-2.5 rounded-xl border border-white/20 group-hover:border-white group-hover:bg-white group-hover:text-black text-center text-xs font-bold tracking-wider uppercase text-white transition-all duration-300 flex items-center justify-center gap-2">
                    <span>INQUIRE ABOUT THIS DESK</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
