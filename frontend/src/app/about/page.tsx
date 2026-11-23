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
      name: 'Speed',
      icon: Clock,
      desc: 'Rapid iteration, fast deployment, real-time responses',
    },
    {
      name: 'Transparency',
      icon: Lock,
      desc: 'Privacy compliance, honest metrics, data security',
    },
    {
      name: 'Integrity',
      icon: Shield,
      desc: 'Ethical messaging, truthful offers, brand trust',
    },
    {
      name: 'Performance',
      icon: TrendingUp,
      desc: 'ROI emphasis, customer value, measurable impact',
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

            {/* ---------------- HERO / THE COMPANY SECTION ---------------- */}
            <section className="relative apple-reveal">
              {/* Subtle Ambient Glow - Apple Ambient Atmosphere */}
              <div className="absolute -top-6 left-1/4 w-80 h-80 bg-white/[0.04] dark:bg-white/[0.05] blur-[120px] pointer-events-none animate-apple-ambient" />

              {/* Standard Hero Section Header */}
              <div className="border-b border-zinc-200 dark:border-white/10 pb-6 sm:pb-8 mb-8 sm:mb-10 space-y-3">
                <div>
                  <h1 className="relative inline-block py-1 text-xs sm:text-[13px] font-extrabold tracking-[0.22em] uppercase text-zinc-950 dark:text-white">
                    THE COMPANY
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-zinc-950 dark:bg-white rounded-full" />
                  </h1>
                </div>

                <p className="text-base sm:text-lg md:text-xl font-bold dark:text-zinc-200 text-zinc-800 font-display">
                  At <span className="font-extrabold text-zinc-950 dark:text-white">Moments of Marketing</span> we create Moments, Build Brands and Drive Growth.
                </p>
              </div>

              {/* Exact Core Paragraphs from Image 1 */}
              <div className="space-y-6 max-w-4xl text-sm sm:text-base md:text-lg dark:text-zinc-300 text-zinc-700 font-normal leading-relaxed">
                <p>
                  We believe great marketing goes beyond visibility. It’s about creating meaningful connections, earning trust, and turning opportunities into lasting business success.
                </p>
                <p>
                  We partner with businesses at every stage of their journey whether launching a new brand, strengthening market presence, or driving growth by building distinctive brand identities, creating engaging digital experiences, and executing result-driven marketing strategies that combine creativity, strategic thinking, and seamless execution to connect with the right audience and turn business visions into lasting success.
                </p>
              </div>
            </section>

            {/* ---------------- OUR VALUES ---------------- */}
            <section className="space-y-5">
              <div className="border-b border-zinc-200 dark:border-white/10 pb-3.5 mb-6 space-y-2 apple-reveal">
                <h2 className="section-title text-xl sm:text-2xl md:text-3xl font-black font-display uppercase tracking-tight text-zinc-950 dark:text-white">
                  OUR VALUES
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-3xl">
                  Our Values shape how we think and build, delivering unwavering integrity to every client, every time. Our Values drive our daily choices and culture, turning quiet integrity into consistent results for every customer.
                </p>
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

            {/* ---------------- 5. CLOSING BRAND TAGLINE ---------------- */}
            <div className="pt-6 sm:pt-10 pb-4 text-center apple-reveal">
              <p className="text-base sm:text-lg md:text-xl font-bold font-display dark:text-zinc-200 text-zinc-800 tracking-tight">
                Creating Moments. Building Brands. Driving Growth.
              </p>
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
