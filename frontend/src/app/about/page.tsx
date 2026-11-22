'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Shield,
  Lock,
  Clock,
  TrendingUp,
  Layers,
  Zap,
  Award,
  LineChart,
  ShieldCheck,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadCaptureModal from '@/components/LeadCaptureModal';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Digital Marketing');

  const handleOpenLeadModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setModalOpen(true);
  };

  const values = [
    {
      name: 'Integrity',
      icon: Shield,
      desc: 'Ethical messaging, truthful offers, and unwavering brand trust across every campaign touchpoint.',
    },
    {
      name: 'Transparency',
      icon: Lock,
      desc: 'Privacy compliance, honest reporting metrics, and total accountability in all communications.',
    },
    {
      name: 'Speed of Delivery',
      icon: Clock,
      desc: 'Rapid iteration, prompt deployment, and agile responsiveness to dynamic market opportunities.',
    },
    {
      name: 'Performance',
      icon: TrendingUp,
      desc: 'ROI-driven strategies, measurable conversion outcomes, and sustained customer lifetime value.',
    },
  ];

  const pillars = [
    {
      title: 'Brand Visibility',
      tagline: 'Get noticed. Stay remembered.',
      description:
        'Build a distinctive brand presence that captures attention and earns recognition. We help your business stand out through strategic branding, engaging content, and consistent digital communication.',
    },
    {
      title: 'Lead Generation',
      tagline: 'Reach the right people. Create real opportunities.',
      description:
        'Attract relevant audiences and turn their interest into valuable enquiries. Our targeted campaigns and conversion-focused strategies help create opportunities for your sales team.',
    },
    {
      title: 'Business Growth',
      tagline: 'Turn opportunities into lasting progress.',
      description:
        'Make your marketing work harder for your business. Through performance analysis, customer engagement, and continuous optimization, we help you make informed marketing decisions and build a foundation for sustainable growth.',
    },
  ];

  const whyChooseUsPoints = [
    {
      title: 'One Connected Marketing Partner',
      icon: Layers,
      desc: 'Bring your branding, content, digital campaigns, and lead generation together through a coordinated marketing approach.',
    },
    {
      title: 'Strategies Built Around Your Business',
      icon: Zap,
      desc: 'We align marketing activities with your goals, target audience, industry, and growth priorities.',
    },
    {
      title: 'Creativity With Purpose',
      icon: Award,
      desc: 'Every creative idea starts with a clear objective: to communicate, engage, build trust, or encourage action.',
    },
    {
      title: 'Decisions Guided by Performance',
      icon: LineChart,
      desc: 'We use campaign insights and reporting to identify opportunities and improve marketing effectiveness.',
    },
    {
      title: 'A Partnership That Evolves With You',
      icon: ShieldCheck,
      desc: 'As your business grows, your marketing strategy can evolve to meet new audiences, challenges, and opportunities.',
    },
  ];

  const approachSteps = [
    {
      name: 'Discover',
      desc: 'Understand your business, audience, challenges, and objectives.',
    },
    {
      name: 'Strategize',
      desc: 'Build a focused marketing roadmap with the right channels and priorities.',
    },
    {
      name: 'Create',
      desc: 'Develop compelling brand identities, content, campaigns, and digital experiences.',
    },
    {
      name: 'Execute',
      desc: 'Launch coordinated marketing activities to reach and engage your audience.',
    },
    {
      name: 'Optimize',
      desc: 'Review performance, identify opportunities, and refine the strategy.',
    },
  ];

  return (
    <main
      className="relative min-h-screen flex flex-col justify-between dark:bg-black dark:text-white bg-[#F8FAFC] text-zinc-900 overflow-hidden transition-colors duration-300"
      suppressHydrationWarning
    >
      <Navbar onOpenLeadModal={() => handleOpenLeadModal()} />

      <div className="relative z-10 flex-1 transition-all duration-300 pt-[88px] sm:pt-[104px] md:pt-[124px]">
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-14 pt-4 sm:pt-6 pb-16 sm:pb-24 animate-in fade-in duration-300">
          
          <div className="space-y-12 sm:space-y-16">

            {/* ---------------- HERO / MORE THAN MARKETING SECTION ---------------- */}
            <section className="relative">
              {/* Subtle Ambient Glow */}
              <div className="absolute -top-6 left-1/4 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-500/10 blur-[120px] pointer-events-none" />

              {/* Standard Hero Section Header */}
              <div className="border-b border-zinc-200 dark:border-white/10 pb-6 sm:pb-8 mb-8 sm:mb-10">
                {/* Main Headline - Sentence Case with exact capital M in Marketing */}
                <h1 className="page-hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display text-zinc-950 dark:text-white normal-case tracking-tight leading-[1.2] pb-1">
                  More than Marketing.
                </h1>
              </div>

              {/* Three Core Paragraphs in Clean Editorial Paragraph Mode (One Below Another) */}
              <div className="space-y-6 max-w-4xl text-sm sm:text-base md:text-lg dark:text-zinc-300 text-zinc-700 font-normal leading-relaxed">
                <p>
                  At MOM &mdash; Moments of Marketing, we believe great marketing creates more than visibility. It creates connections, builds trust, and drives business forward.
                </p>
                <p>
                  We partner with businesses to develop impactful brand identities, create engaging digital experiences, and execute marketing strategies that connect with the right customers.
                </p>
                <p>
                  Whether you&apos;re launching a new brand, expanding your market presence, or scaling your business, we bring the right mix of creativity, strategy, and execution to help you move forward with confidence.
                </p>
              </div>
            </section>

            {/* ---------------- 1. VISION & MISSION CARDS ---------------- */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* Vision Card */}
                <div className="pro-card p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-sm flex flex-col justify-between group hover:border-zinc-950 dark:hover:border-white transition-all duration-300">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black font-display capitalize tracking-tight text-zinc-950 dark:text-white mb-3">
                      Vision
                    </h3>
                    <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                      Creating Moments. Building Brands. Driving Growth.
                    </p>
                  </div>
                </div>

                {/* Mission Card */}
                <div className="pro-card p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-sm flex flex-col justify-between group hover:border-zinc-950 dark:hover:border-white transition-all duration-300">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black font-display capitalize tracking-tight text-zinc-950 dark:text-white mb-3">
                      Mission
                    </h3>
                    <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                      To turn meaningful marketing moments into lasting brand value and business growth.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ---------------- 2. OUR VALUES ---------------- */}
            <section className="space-y-5">
              <div className="border-b border-zinc-200 dark:border-white/10 pb-3.5 mb-6">
                <h2 className="section-title text-xl sm:text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-zinc-950 dark:text-white">
                  OUR VALUES
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {values.map((v) => {
                  return (
                    <div
                      key={v.name}
                      className="pro-card p-6 rounded-2xl border border-zinc-200 dark:border-white/10 flex flex-col justify-between shadow-sm group hover:border-black dark:hover:border-white transition-all"
                    >
                      <div>
                        <h3 className="text-lg font-bold font-display dark:text-white text-zinc-950 mb-2">
                          {v.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ---------------- 3. OUR THREE PILLARS OF GROWTH ---------------- */}
            <section className="space-y-6">
              <div className="border-b border-zinc-200 dark:border-white/10 pb-3.5 mb-6">
                <h2 className="section-title text-xl sm:text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-zinc-950 dark:text-white">
                  OUR THREE PILLARS OF GROWTH
                </h2>
              </div>

              {/* Subtle Architectural Pillar Design */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
                {pillars.map((p) => {
                  return (
                    <div
                      key={p.title}
                      className="pro-card relative p-7 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-sm flex flex-col justify-between group hover:border-zinc-950 dark:hover:border-white transition-all duration-300 overflow-hidden"
                    >
                      <div>
                        {/* Architectural Pillar Crown / Capital Beam */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full mb-6 group-hover:scale-x-105 transition-transform origin-left" />

                        <div className="space-y-4">
                          {/* Pillar Title in Bold Title Case */}
                          <h3 className="text-lg sm:text-xl font-black font-display capitalize tracking-tight text-zinc-950 dark:text-white">
                            {p.title}
                          </h3>

                          {/* Tagline */}
                          <p className="text-sm sm:text-base font-bold text-emerald-500 dark:text-emerald-400 font-sans leading-snug">
                            {p.tagline}
                          </p>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                            {p.description}
                          </p>
                        </div>
                      </div>

                      {/* Architectural Pillar Foundation / Base Pedestal */}
                      <div className="pt-6 mt-6 border-t border-zinc-200/80 dark:border-white/10 flex items-center justify-between">
                        <div className="h-[2px] w-12 bg-zinc-300 dark:bg-white/20 rounded-full group-hover:w-full group-hover:bg-emerald-400/60 transition-all duration-500" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ---------------- 4. WHY CHOOSE MOM? ---------------- */}
            <section className="space-y-5">
              <div className="border-b border-zinc-200 dark:border-white/10 pb-3.5 mb-6 space-y-1">
                <h2 className="section-title text-xl sm:text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-zinc-950 dark:text-white">
                  WHY CHOOSE MOM?
                </h2>
                <p className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 font-sans">
                  Creative Thinking. Strategic Execution. Growth-Focused Marketing.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
                {whyChooseUsPoints.map((pt) => {
                  return (
                    <div
                      key={pt.title}
                      className="pro-card p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-sm flex flex-col justify-between group hover:border-black dark:hover:border-white transition-all w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
                    >
                      <div className="space-y-2.5">
                        <h3 className="text-base sm:text-lg font-bold font-display dark:text-white text-zinc-950 leading-snug">
                          {pt.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                          {pt.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ---------------- 5. OUR APPROACH ---------------- */}
            <section className="space-y-6 text-center">
              <div className="border-b border-zinc-200 dark:border-white/10 pb-4 mb-6 space-y-1 text-center">
                <h2 className="section-title text-xl sm:text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-zinc-950 dark:text-white">
                  OUR APPROACH
                </h2>
                <p className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400 font-sans">
                  From First Impression to Lasting Customer Relationships.
                </p>
              </div>

              {/* Desktop Connected Circular Process Flow with Animated Arrows - Perfectly Centered */}
              <div className="hidden lg:flex items-center justify-center gap-2.5 xl:gap-4 py-4 mx-auto">
                {approachSteps.map((step, idx) => (
                  <React.Fragment key={step.name}>
                    <div className="w-[160px] h-[160px] xl:w-[190px] xl:h-[190px] rounded-full border border-zinc-200 dark:border-white/10 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900/90 dark:to-zinc-950 shadow-md hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] hover:border-emerald-500/80 dark:hover:border-emerald-400/80 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center p-3.5 xl:p-5 text-center group cursor-default relative flex-shrink-0">
                      <div className="absolute inset-0 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/[0.04] transition-colors pointer-events-none" />

                      <h3 className="text-sm xl:text-base font-bold font-display uppercase tracking-tight text-zinc-950 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors mb-1.5">
                        {step.name}
                      </h3>
                      <p className="text-[10.5px] xl:text-[11.5px] text-zinc-600 dark:text-zinc-300 font-normal leading-[1.35] max-w-[130px] xl:max-w-[155px]">
                        {step.desc}
                      </p>
                    </div>

                    {/* Animated Arrow Connector between steps */}
                    {idx < approachSteps.length - 1 && (
                      <div className="flex items-center justify-center text-emerald-500 dark:text-emerald-400 flex-shrink-0 px-0.5">
                        <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full border border-emerald-500/30 dark:border-emerald-400/30 bg-emerald-500/10 dark:bg-emerald-500/15 flex items-center justify-center shadow-xs">
                          <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 stroke-[2.5] animate-pulse" />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Mobile / Tablet Circular Process View with Downward Animated Arrows */}
              <div className="flex flex-col items-center gap-2.5 lg:hidden py-4 mx-auto">
                {approachSteps.map((step, idx) => (
                  <React.Fragment key={step.name}>
                    <div className="w-[190px] h-[190px] sm:w-[210px] sm:h-[210px] rounded-full border border-zinc-200 dark:border-white/10 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900/90 dark:to-zinc-950 shadow-md hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] hover:border-emerald-500/80 dark:hover:border-emerald-400/80 transition-all duration-300 flex flex-col items-center justify-center p-4 sm:p-5 text-center group cursor-default">
                      <h3 className="text-base sm:text-lg font-bold font-display uppercase tracking-tight text-zinc-950 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors mb-1.5">
                        {step.name}
                      </h3>
                      <p className="text-xs text-zinc-600 dark:text-zinc-300 font-normal leading-snug max-w-[150px] sm:max-w-[170px]">
                        {step.desc}
                      </p>
                    </div>

                    {idx < approachSteps.length - 1 && (
                      <div className="flex justify-center text-emerald-500 dark:text-emerald-400 my-0.5">
                        <div className="w-7 h-7 rounded-full border border-emerald-500/30 dark:border-emerald-400/30 bg-emerald-500/10 dark:bg-emerald-500/15 flex items-center justify-center shadow-xs">
                          <ArrowDown className="w-3.5 h-3.5 stroke-[2.5] animate-bounce" />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </section>

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
