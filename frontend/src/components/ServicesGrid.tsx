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
      tagline: 'Be visible where your customers are looking.',
      description: 'Reach the right audience with strategic digital marketing solutions designed to increase online visibility, attract relevant traffic, and support your business objectives.',
      tags: ['SEO', 'Google Ads', 'Meta Ads', 'Digital Campaigns', 'Performance Marketing'],
      category: 'digital',
      icon: Globe,
    },
    {
      number: '02',
      title: 'Social Media Management',
      tagline: 'Turn followers into a community around your brand.',
      description: 'Build a consistent, engaging social presence with creative content, strategic planning, and audience-focused communication that keeps your brand relevant and memorable.',
      tags: ['Instagram', 'Facebook', 'LinkedIn', 'Content Calendars', 'Reels', 'Creative Posts', 'Community Management'],
      category: 'creative',
      icon: Share2,
    },
    {
      number: '03',
      title: 'Lead Generation',
      tagline: 'Turn attention into business opportunities.',
      description: 'Connect with potential customers through targeted campaigns and conversion-focused strategies designed to generate relevant enquiries and support your sales pipeline.',
      tags: ['B2B & B2C Campaigns', 'Lead Forms', 'Landing Pages', 'Lead Funnels', 'Campaign Optimization'],
      category: 'growth',
      icon: Target,
    },
    {
      number: '04',
      title: 'Branding & Creative Design',
      tagline: 'Give your brand an identity people remember.',
      description: 'Create a distinctive and consistent brand identity that communicates your value, builds recognition, and helps you stand apart from competitors.',
      tags: ['Logo Design', 'Brand Identity', 'Brand Guidelines', 'Brochures', 'Company Profiles', 'Marketing Creatives'],
      category: 'creative',
      icon: Palette,
    },
    {
      number: '05',
      title: 'Content Creation & Video Production',
      tagline: 'Tell your story. Capture attention. Inspire action.',
      description: 'Bring your brand to life with compelling visuals and purposeful content that communicates your message, connects with your audience, and supports your marketing goals.',
      tags: ['Social Media Reels', 'Promotional Videos', 'Product Photography', 'Video Editing', 'Copywriting', 'Advertising Creatives'],
      category: 'creative',
      icon: Video,
    },
    {
      number: '06',
      title: 'Website Design & Development',
      tagline: 'Turn your digital presence into a growth opportunity.',
      description: 'Create a professional, user-friendly website that showcases your brand, builds credibility, and guides visitors towards taking action.',
      tags: ['Business Websites', 'Landing Pages', 'E-commerce Websites', 'UI/UX Design', 'Website Maintenance'],
      category: 'digital',
      icon: Code2,
    },
    {
      number: '07',
      title: 'Performance Marketing & Paid Advertising',
      tagline: 'Make every campaign work towards a goal.',
      description: 'Reach high-intent audiences with targeted advertising and data-driven optimization focused on improving campaign performance and generating measurable opportunities.',
      tags: ['Google Ads', 'Meta Ads', 'Retargeting', 'Conversion Tracking', 'Campaign Analytics'],
      category: 'growth',
      icon: LineChart,
    },
    {
      number: '08',
      title: 'Email & WhatsApp Marketing',
      tagline: 'Stay connected. Build relationships. Encourage action.',
      description: 'Keep your brand connected with prospects and customers through relevant communication, personalized campaigns, and timely follow-ups across the channels they use.',
      tags: ['Email Campaigns', 'WhatsApp Business Marketing', 'Newsletters', 'Customer Follow-ups', 'Marketing Automation'],
      category: 'growth',
      icon: MessageSquare,
    },
    {
      number: '09',
      title: 'Influencer Marketing & Brand Activations',
      tagline: 'Create experiences that bring your brand closer to people.',
      description: 'Connect with audiences through relevant creator partnerships and engaging brand experiences that encourage interaction and strengthen brand recall.',
      tags: ['Influencer Collaborations', 'Creator Campaigns', 'Product Launches', 'Experiential Marketing', 'Promotional Activations'],
      category: 'creative',
      icon: Megaphone,
    },
    {
      number: '10',
      title: 'Marketing Strategy & Consulting',
      tagline: 'A clear strategy for every stage of growth.',
      description: 'Make smarter marketing decisions with a focused roadmap aligned with your audience, business goals, budget, and competitive landscape.',
      tags: ['Marketing Strategy', 'Competitor Analysis', 'Audience Research', 'Campaign Planning', 'Performance Reviews'],
      category: 'growth',
      icon: Compass,
    },
  ];

  const filtered = filter === 'all' ? services : services.filter((s) => s.category === filter);

  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header & Filter Tabs: Represent Mgmt Scale */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-16 pb-8 border-b dark:border-white/[0.08] border-zinc-200">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight dark:text-white text-zinc-950 font-display">
              The ten <span className="font-serif italic font-normal dark:text-white text-zinc-950">desks.</span>
            </h2>
            <p className="text-base sm:text-lg dark:text-zinc-300 text-zinc-600 font-light leading-relaxed">
              Everything your brand needs to grow. From building brand awareness to generating leads and strengthening customer relationships, we bring your marketing activities together under one strategic approach.
            </p>
          </div>

          {/* Minimalist Filter Tabs: Pristine Single-Row Pill that NEVER wraps or distorts */}
          <div className="flex-shrink-0 w-full xl:w-auto overflow-hidden">
            <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full border border-zinc-300 dark:border-white/15 dark:bg-black/80 bg-zinc-100/90 backdrop-blur-md shadow-sm overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex-nowrap w-fit max-w-full">
              {[
                { id: 'all', label: 'All 10 Desks' },
                { id: 'growth', label: 'Growth & Ads' },
                { id: 'creative', label: 'Creative & Video' },
                { id: 'digital', label: 'Digital & Tech' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setFilter(t.id as any)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer active:scale-95 whitespace-nowrap flex-shrink-0 ${
                    filter === t.id
                      ? 'dark:bg-white dark:text-black bg-zinc-950 text-white shadow-md'
                      : 'dark:text-zinc-400 dark:hover:text-white text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 10 Services Pro Grid: Cards have crisp outlines and hover depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.number}
                className="pro-card p-8 sm:p-9 rounded-3xl flex flex-col justify-between group border border-zinc-200 dark:border-white/10 dark:hover:border-white/30 hover:border-black hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-400 shadow-sm relative overflow-hidden"
              >
                {/* Subtle Traveling Border Shimmer on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Non-clickable Number Badge: NO OUTLINE */}
                    <span className="text-sm font-mono font-bold dark:text-white text-zinc-900 dark:bg-white/[0.08] bg-zinc-200/80 px-3 py-1 rounded-md group-hover:bg-zinc-300 dark:group-hover:bg-white/20 transition-colors duration-300">
                      DESK {s.number}
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5 mb-3">
                    {/* Non-clickable Icon Box: NO OUTLINE */}
                    <div className="w-10 h-10 rounded-xl dark:bg-white/[0.06] bg-zinc-100 flex items-center justify-center dark:text-zinc-300 text-zinc-700 dark:group-hover:text-white group-hover:text-zinc-950 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight dark:text-white text-zinc-950 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm dark:text-zinc-300 text-zinc-700 font-semibold mb-3 font-mono">
                    {s.tagline}
                  </p>

                  <p className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed font-light mb-6">
                    {s.description}
                  </p>

                  {/* Service Tags (Non-clickable: NO OUTLINE) */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t dark:border-white/[0.06] border-zinc-200">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] dark:bg-white/[0.05] bg-zinc-100 dark:text-zinc-300 text-zinc-700 font-medium hover:border-zinc-400 dark:hover:bg-white/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Clickable CTA Button: CRISP OUTLINE & Smooth Transitions */}
                <div className="pt-6 mt-6 border-t dark:border-white/[0.06] border-zinc-200">
                  <button
                    onClick={() => onSelectService(s.title)}
                    className="w-full py-3.5 rounded-xl border border-zinc-300 dark:border-white/20 dark:bg-white/[0.02] bg-zinc-50 dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:bg-zinc-950 hover:text-white hover:border-zinc-950 text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-sm active:scale-95 dark:text-white text-zinc-900 relative overflow-hidden group/btn"
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
