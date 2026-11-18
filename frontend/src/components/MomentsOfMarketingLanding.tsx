'use client';

import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, Layers, Target, Compass } from 'lucide-react';
import ServicesGrid from './ServicesGrid';
import ThreePillars from './ThreePillars';
import WhyChooseUs from './WhyChooseUs';
import OurApproach from './OurApproach';
import VisionMissionValues from './VisionMissionValues';
import ContactSection from './ContactSection';

interface MomentsOfMarketingLandingProps {
  onOpenLeadModal: (serviceName?: string) => void;
  selectedService: string;
}

export default function MomentsOfMarketingLanding({
  onOpenLeadModal,
  selectedService,
}: MomentsOfMarketingLandingProps) {
  return (
    <div className="space-y-4">
      {/* ================= HERO SECTION (SLIDE 3: EXACT CONTENT & PRO AGENCY DESIGN) ================= */}
      <section id="home" className="pt-8 sm:pt-14 pb-20 sm:pb-28 relative overflow-hidden">
        {/* Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-b from-cyan-500/10 via-emerald-500/5 to-transparent blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
          
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 dark:border-white/15 dark:bg-white/[0.04] bg-zinc-100 backdrop-blur-md shadow-sm mb-6 animate-in fade-in duration-700">
            <Sparkles className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-200">
              CREATING MOMENTS &bull; BUILDING BRANDS &bull; DRIVING GROWTH
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight dark:text-white text-zinc-950 font-display leading-[1.02] mb-8 sm:mb-10 max-w-5xl">
            More Than Marketing.{' '}
            <span className="font-serif italic font-normal dark:text-zinc-100 text-zinc-900 block sm:inline">
              A Partner in Your Growth.
            </span>
          </h1>

          {/* The 3 Core Paragraphs from Slide 3 as Styled Editorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4 pb-10 border-y border-zinc-200 dark:border-white/10 my-8">
            <div className="pro-card p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/10 dark:hover:border-white hover:border-black transition-all duration-300 shadow-sm flex flex-col justify-between group">
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold block">
                  01 &bull; CONNECTION
                </span>
                <p className="text-sm sm:text-base dark:text-zinc-300 text-zinc-700 leading-relaxed font-light">
                  At MOM &mdash; Moments of Marketing, we believe great marketing creates more than visibility. It creates connections, builds trust, and drives business forward.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t dark:border-white/[0.06] border-zinc-200 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                Brand Visibility &bull; Trust
              </div>
            </div>

            <div className="pro-card p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/10 dark:hover:border-white hover:border-black transition-all duration-300 shadow-sm flex flex-col justify-between group">
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold block">
                  02 &bull; ENGAGEMENT
                </span>
                <p className="text-sm sm:text-base dark:text-zinc-300 text-zinc-700 leading-relaxed font-light">
                  We partner with businesses to develop impactful brand identities, create engaging digital experiences, and execute marketing strategies that connect with the right customers.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t dark:border-white/[0.06] border-zinc-200 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                Identity &bull; Strategy &bull; Reach
              </div>
            </div>

            <div className="pro-card p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/10 dark:hover:border-white hover:border-black transition-all duration-300 shadow-sm flex flex-col justify-between group">
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#185873] dark:text-sky-400 font-bold block">
                  03 &bull; EXECUTION
                </span>
                <p className="text-sm sm:text-base dark:text-zinc-300 text-zinc-700 leading-relaxed font-light">
                  Whether you&apos;re launching a new brand, expanding your market presence, or scaling your business, we bring the right mix of creativity, strategy, and execution to help you move forward with confidence.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t dark:border-white/[0.06] border-zinc-200 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                Launch &bull; Scale &bull; Growth
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#services"
              className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full dark:bg-white dark:text-black bg-zinc-950 text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:opacity-90 active:scale-95 shadow-lg transition-all cursor-pointer"
            >
              <span>Explore The 10 Desks</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenLeadModal()}
              className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-zinc-300 dark:border-white/20 dark:hover:border-white hover:border-black text-xs sm:text-sm font-bold uppercase tracking-wider dark:text-white text-zinc-950 hover:bg-zinc-100 dark:hover:bg-white/10 active:scale-95 transition-all cursor-pointer shadow-sm"
            >
              Let&apos;s Talk About Your Growth
            </button>

            <a
              href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20discuss%20our%20marketing%20growth."
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 sm:py-4 rounded-full border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 active:scale-95 transition-all cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* 3 Strategic Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 mt-10 border-t border-zinc-200 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl dark:bg-white/[0.06] bg-zinc-100 flex items-center justify-center text-zinc-900 dark:text-white">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold font-display dark:text-white text-zinc-950 block leading-tight">10 Desks</span>
                <span className="text-xs text-zinc-600 dark:text-zinc-400 font-light">Full-Funnel Capabilities</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl dark:bg-white/[0.06] bg-zinc-100 flex items-center justify-center text-zinc-900 dark:text-white">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold font-display dark:text-white text-zinc-950 block leading-tight">3 Pillars</span>
                <span className="text-xs text-zinc-600 dark:text-zinc-400 font-light">Visibility, Leads &amp; Growth</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl dark:bg-white/[0.06] bg-zinc-100 flex items-center justify-center text-zinc-900 dark:text-white">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold font-display dark:text-white text-zinc-950 block leading-tight">5-Step Process</span>
                <span className="text-xs text-zinc-600 dark:text-zinc-400 font-light">From Discovery to Optimization</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Slide 6 of PPT: The 10 Desks */}
      <ServicesGrid onSelectService={(service) => onOpenLeadModal(service)} />

      {/* Slide 5 of PPT: Three Pillars of Growth */}
      <ThreePillars onSelectService={(service) => onOpenLeadModal(service)} />

      {/* Slide 5 of PPT: Why Choose MOM? */}
      <WhyChooseUs onOpenLeadModal={() => onOpenLeadModal()} />

      {/* Slide 5 of PPT: Our 5-Step Approach */}
      <OurApproach onOpenLeadModal={() => onOpenLeadModal()} />

      {/* Slide 4 of PPT: Vision, Mission & Core Values */}
      <VisionMissionValues />

      {/* Slide 7 of PPT: Direct Contact & Inquiry Section */}
      <ContactSection preselectedService={selectedService} />
    </div>
  );
}
