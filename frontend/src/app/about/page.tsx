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
import AppleScrollReveal from '@/components/AppleScrollReveal';

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Digital Marketing');

  const handleOpenLeadModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setModalOpen(true);
  };

  const values = [
    {
      name: 'Speed of Delivery',
      icon: Clock,
      desc: 'Rapid iteration, prompt deployment, and agile responsiveness to dynamic market opportunities.',
    },
    {
      name: 'Transparency',
      icon: Lock,
      desc: 'Privacy compliance, honest reporting metrics, and total accountability in all communications.',
    },
    {
      name: 'Integrity',
      icon: Shield,
      desc: 'Ethical messaging, truthful offers, and unwavering brand trust across every campaign touchpoint.',
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
      <AppleScrollReveal />

      <div className="relative z-10 flex-1 transition-all duration-300 pt-[88px] sm:pt-[104px] md:pt-[124px]">
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-14 pt-4 sm:pt-6 pb-16 sm:pb-24 animate-in fade-in duration-300">
          
          <div className="space-y-12 sm:space-y-16">

            {/* ---------------- HERO / MORE THAN MARKETING SECTION ---------------- */}
            <section className="relative apple-reveal">
              {/* Subtle Ambient Glow - Apple Ambient Atmosphere */}
              <div className="absolute -top-6 left-1/4 w-80 h-80 bg-white/[0.04] dark:bg-white/[0.05] blur-[120px] pointer-events-none animate-apple-ambient" />

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

            {/* ---------------- OUR VALUES ---------------- */}
            <section className="space-y-5">
              <div className="border-b border-zinc-200 dark:border-white/10 pb-3.5 mb-6 apple-reveal">
                <h2 className="section-title text-xl sm:text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-zinc-950 dark:text-white">
                  OUR VALUES
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {values.map((v, i) => {
                  const delayClass =
                    i === 0
                      ? 'apple-delay-100'
                      : i === 1
                      ? 'apple-delay-200'
                      : i === 2
                      ? 'apple-delay-300'
                      : 'apple-delay-400';
                  return (
                    <div
                      key={v.name}
                      className={`pro-card apple-card-hover apple-shimmer-beam apple-reveal ${delayClass} p-6 rounded-2xl border border-zinc-200 dark:border-white/10 flex flex-col justify-between shadow-sm group`}
                    >
                      <div>
                        <h3 className="text-lg font-bold font-display dark:text-white text-zinc-950 mb-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors">
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
              <div className="border-b border-zinc-200 dark:border-white/10 pb-3.5 mb-6 apple-reveal">
                <h2 className="section-title text-xl sm:text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-zinc-950 dark:text-white">
                  OUR THREE PILLARS OF GROWTH
                </h2>
              </div>

              {/* Subtle Architectural Pillar Design */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
                {pillars.map((p, i) => {
                  const delayClass = i === 0 ? 'apple-delay-100' : i === 1 ? 'apple-delay-200' : 'apple-delay-300';
                  return (
                    <div
                      key={p.title}
                      className={`pro-card apple-card-hover apple-shimmer-beam apple-reveal ${delayClass} relative p-7 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-sm flex flex-col justify-between group overflow-hidden`}
                    >
                      <div>
                        {/* Architectural Pillar Crown / Capital Beam */}
                        <div className="h-1.5 w-full bg-zinc-300 dark:bg-zinc-700 rounded-full mb-6 group-hover:scale-x-105 transition-transform duration-500 origin-left" />

                        <div className="space-y-4">
                          {/* Pillar Title in Bold Title Case */}
                          <h3 className="text-lg sm:text-xl font-black font-display capitalize tracking-tight text-zinc-950 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors">
                            {p.title}
                          </h3>

                          {/* Tagline */}
                          <p className="text-sm sm:text-base font-semibold text-zinc-500 dark:text-zinc-400 font-sans leading-snug">
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
                        <div className="h-[2px] w-12 bg-zinc-300 dark:bg-white/20 rounded-full group-hover:w-full group-hover:bg-zinc-400 dark:group-hover:bg-zinc-500 transition-all duration-500" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ---------------- 4. WHY CHOOSE MOM? ---------------- */}
            <section className="space-y-5">
              <div className="border-b border-zinc-200 dark:border-white/10 pb-3.5 mb-6 space-y-1 apple-reveal">
                <h2 className="section-title text-xl sm:text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-zinc-950 dark:text-white">
                  WHY CHOOSE MOM?
                </h2>
                <p className="text-sm sm:text-base font-semibold text-zinc-500 dark:text-zinc-400 font-sans">
                  Creative Thinking. Strategic Execution. Growth-Focused Marketing.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
                {whyChooseUsPoints.map((pt, i) => {
                  const delayClass =
                    i === 0
                      ? 'apple-delay-100'
                      : i === 1
                      ? 'apple-delay-200'
                      : i === 2
                      ? 'apple-delay-300'
                      : i === 3
                      ? 'apple-delay-400'
                      : 'apple-delay-500';
                  return (
                    <div
                      key={pt.title}
                      className={`pro-card apple-card-hover apple-shimmer-beam apple-reveal ${delayClass} p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-sm flex flex-col justify-between group w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]`}
                    >
                      <div className="space-y-2.5">
                        <h3 className="text-base sm:text-lg font-bold font-display dark:text-white text-zinc-950 leading-snug group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors">
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
              <div className="border-b border-zinc-200 dark:border-white/10 pb-4 mb-6 space-y-1 text-center apple-reveal">
                <h2 className="section-title text-xl sm:text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-zinc-950 dark:text-white">
                  OUR APPROACH
                </h2>
                <p className="text-sm sm:text-base font-semibold text-zinc-500 dark:text-zinc-400 font-sans">
                  From First Impression to Lasting Customer Relationships.
                </p>
              </div>

              {/* Desktop Connected Circular Process Flow with Animated Arrows - Perfectly Centered */}
              <div className="hidden lg:flex items-center justify-center gap-2.5 xl:gap-4 py-4 mx-auto">
                {approachSteps.map((step, idx) => (
                  <React.Fragment key={step.name}>
                    <div className="w-[160px] h-[160px] xl:w-[190px] xl:h-[190px] rounded-full border border-zinc-200 dark:border-white/10 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900/90 dark:to-zinc-950 shadow-md hover:shadow-[0_0_35px_rgba(255,255,255,0.12)] hover:border-zinc-400 dark:hover:border-white/50 hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center justify-center p-3.5 xl:p-5 text-center group cursor-default relative flex-shrink-0 apple-reveal">
                      <div className="absolute inset-0 rounded-full bg-zinc-500/0 group-hover:bg-zinc-500/[0.06] transition-colors duration-500 pointer-events-none" />

                      <h3 className="text-sm xl:text-base font-bold font-display uppercase tracking-tight text-zinc-950 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors mb-1.5">
                        {step.name}
                      </h3>
                      <p className="text-[10.5px] xl:text-[11.5px] text-zinc-600 dark:text-zinc-300 font-normal leading-[1.35] max-w-[130px] xl:max-w-[155px]">
                        {step.desc}
                      </p>
                    </div>

                    {/* Animated Arrow Connector between steps */}
                    {idx < approachSteps.length - 1 && (
                      <div className="flex items-center justify-center text-zinc-500 dark:text-zinc-400 flex-shrink-0 px-0.5">
                        <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full border border-zinc-300 dark:border-white/20 bg-zinc-100 dark:bg-white/[0.06] flex items-center justify-center shadow-xs">
                          <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 stroke-[2.5]" />
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
                    <div className="w-[190px] h-[190px] sm:w-[210px] sm:h-[210px] rounded-full border border-zinc-200 dark:border-white/10 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900/90 dark:to-zinc-950 shadow-md hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-zinc-400 dark:hover:border-white/50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center justify-center p-4 sm:p-5 text-center group cursor-default apple-reveal">
                      <h3 className="text-base sm:text-lg font-bold font-display uppercase tracking-tight text-zinc-950 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors mb-1.5">
                        {step.name}
                      </h3>
                      <p className="text-xs text-zinc-600 dark:text-zinc-300 font-normal leading-snug max-w-[150px] sm:max-w-[170px]">
                        {step.desc}
                      </p>
                    </div>

                    {idx < approachSteps.length - 1 && (
                      <div className="flex justify-center text-zinc-500 dark:text-zinc-400 my-0.5">
                        <div className="w-7 h-7 rounded-full border border-zinc-300 dark:border-white/20 bg-zinc-100 dark:bg-white/[0.06] flex items-center justify-center shadow-xs">
                          <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
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
