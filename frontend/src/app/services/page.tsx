'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Globe,
  Share2,
  Target,
  Palette,
  Video,
  Code2,
  LineChart,
  MessageCircle,
  Compass,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadCaptureModal from '@/components/LeadCaptureModal';

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Digital Marketing');

  const handleOpenLeadModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setModalOpen(true);
  };

  const services = [
    {
      number: '01',
      title: 'Digital Marketing',
      tagline: 'Be visible where your customers are looking.',
      description:
        'Reach the right audience with strategic digital marketing solutions designed to increase online visibility, attract relevant traffic, and support your business objectives.',
      tags: ['SEO', 'Google Ads', 'Meta Ads', 'Digital Campaigns', 'Performance Marketing'],
      icon: Globe,
    },
    {
      number: '02',
      title: 'Social Media Management',
      tagline: 'Turn followers into a community around your brand.',
      description:
        'Build a consistent, engaging social presence with creative content, strategic planning, and audience-focused communication that keeps your brand relevant and memorable.',
      tags: ['Instagram', 'Facebook', 'LinkedIn', 'Content Calendars', 'Reels', 'Creative Posts', 'Community Management'],
      icon: Share2,
    },
    {
      number: '03',
      title: 'Lead Generation',
      tagline: 'Turn attention into business opportunities.',
      description:
        'Connect with potential customers through targeted campaigns and conversion-focused strategies designed to generate relevant enquiries and support your sales pipeline.',
      tags: ['B2B & B2C Campaigns', 'Lead Forms', 'Landing Pages', 'Lead Funnels', 'Campaign Optimization'],
      icon: Target,
    },
    {
      number: '04',
      title: 'Branding & Creative Design',
      tagline: 'Give your brand an identity people remember.',
      description:
        'Create a distinctive and consistent brand identity that communicates your value, builds recognition, and helps you stand apart from competitors.',
      tags: ['Logo Design', 'Brand Identity', 'Brand Guidelines', 'Brochures', 'Company Profiles', 'Marketing Creatives'],
      icon: Palette,
    },
    {
      number: '05',
      title: 'Content Creation & Video Production',
      tagline: 'Tell your story. Capture attention. Inspire action.',
      description:
        'Bring your brand to life with compelling visuals and purposeful content that communicates your message, connects with your audience, and supports your marketing goals.',
      tags: ['Social Media Reels', 'Promotional Videos', 'Product Photography', 'Video Editing', 'Copywriting', 'Advertising Creatives'],
      icon: Video,
    },
    {
      number: '06',
      title: 'Website Design & Development',
      tagline: 'Turn your digital presence into a growth opportunity.',
      description:
        'Create a professional, user-friendly website that showcases your brand, builds credibility, and guides visitors towards taking action.',
      tags: ['Business Websites', 'Landing Pages', 'E-commerce Websites', 'UI/UX Design', 'Website Maintenance'],
      icon: Code2,
    },
    {
      number: '07',
      title: 'Performance Marketing & Paid Advertising',
      tagline: 'Make every campaign work towards a goal.',
      description:
        'Reach high-intent audiences with targeted advertising and data-driven optimization focused on improving campaign performance and generating measurable opportunities.',
      tags: ['Google Ads', 'Meta Ads', 'Retargeting', 'Conversion Tracking', 'Campaign Analytics'],
      icon: LineChart,
    },
    {
      number: '08',
      title: 'Email & WhatsApp Marketing',
      tagline: 'Stay connected. Build relationships. Encourage action.',
      description:
        'Keep your brand connected with prospects and customers through relevant communication, personalized campaigns, and timely follow-ups across the channels they use.',
      tags: ['Email Campaigns', 'WhatsApp Business Marketing', 'Newsletters', 'Customer Follow-ups', 'Marketing Automation'],
      icon: MessageCircle,
    },
    {
      number: '09',
      title: 'Influencer Marketing & Brand Activations',
      tagline: 'Create experiences that bring your brand closer to people.',
      description:
        'Connect with audiences through relevant creator partnerships and engaging brand experiences that encourage interaction and strengthen brand recall.',
      tags: ['Influencer Collaborations', 'Creator Campaigns', 'Product Launches', 'Experiential Marketing', 'Promotional Activations'],
      icon: Sparkles,
    },
    {
      number: '10',
      title: 'Marketing Strategy & Consulting',
      tagline: 'A clear strategy for every stage of growth.',
      description:
        'Make smarter marketing decisions with a focused roadmap aligned with your audience, business goals, budget, and competitive landscape.',
      tags: ['Marketing Strategy', 'Competitor Analysis', 'Audience Research', 'Campaign Planning', 'Performance Reviews'],
      icon: Compass,
    },
  ];

  return (
    <main
      className="relative min-h-screen flex flex-col justify-between dark:bg-black dark:text-white bg-[#F8FAFC] text-zinc-900 overflow-hidden transition-colors duration-300"
      suppressHydrationWarning
    >
      <Navbar onOpenLeadModal={() => handleOpenLeadModal()} />

      <div className="relative z-10 flex-1 transition-all duration-300 pt-[88px] sm:pt-[104px] md:pt-[124px]">
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-14 pt-4 sm:pt-6 pb-16 sm:pb-24 select-none animate-in fade-in duration-300">
          
          <div className="space-y-10 sm:space-y-12">
            
            {/* Standard Hero Section Header */}
            <div className="border-b border-zinc-200 dark:border-white/10 pb-6 sm:pb-8 space-y-3">
              <h1 className="page-hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display uppercase tracking-tight text-zinc-950 dark:text-white leading-[1.2] pb-1">
                OUR SERVICES
              </h1>

              <p className="text-base sm:text-lg md:text-xl font-bold dark:text-zinc-200 text-zinc-800 font-display">
                Everything Your Brand Needs to Grow.
              </p>

              <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-3xl">
                From building brand awareness to generating leads and strengthening customer relationships, we bring your marketing activities together under one strategic approach.
              </p>
            </div>

            {/* 10 Services Cards - Prominent, Bold, Standard Typography */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="pro-card p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-sm flex flex-col justify-between group hover:border-zinc-950 dark:hover:border-white transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="space-y-4">
                      {/* Title Row with Icon on the left */}
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-all shadow-xs flex-shrink-0">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-zinc-950 dark:text-white leading-[1.15] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {s.title}
                        </h2>
                      </div>

                      {/* Tagline */}
                      <p className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 font-sans leading-snug">
                        {s.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                        {s.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200/80 dark:border-white/10">
                        {s.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/[0.05] dark:text-zinc-300 text-zinc-700 border border-zinc-200/50 dark:border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Clean Action Button */}
                    <div className="pt-6 mt-6 border-t border-zinc-200/80 dark:border-white/10">
                      <button
                        onClick={() => handleOpenLeadModal(s.title)}
                        className="w-full py-3 rounded-xl border border-zinc-300 dark:border-white/20 dark:bg-white/[0.02] bg-zinc-50 dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:bg-zinc-950 hover:text-white hover:border-zinc-950 text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95 text-zinc-900 dark:text-white group/btn"
                      >
                        <span>Inquire for {s.title}</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Consultation Banner */}
            <div className="p-8 sm:p-10 rounded-3xl border border-zinc-200 dark:border-white/15 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900/80 dark:to-zinc-950 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
                  HAVE A UNIQUE REQUIREMENT?
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-zinc-950 dark:text-white">
                  Let&apos;s Build a Customized Strategy for You.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light max-w-xl">
                  Talk to our strategists to discuss bespoke campaign plans, multi-channel growth retainers, or full-scale brand development.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleOpenLeadModal('General Consultation')}
                  className="px-6 py-3 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-wider shadow-sm hover:opacity-90 active:scale-95 cursor-pointer"
                >
                  <span>Book Consultation &rarr;</span>
                </button>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full border border-zinc-300 dark:border-white/20 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10 active:scale-95 shadow-xs"
                >
                  <span>Contact Page</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>

      <Footer />

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </main>
  );
}
