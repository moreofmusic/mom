'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Shield,
  Lock,
  Clock,
  TrendingUp,
  Sparkles,
  Compass,
  Eye,
  Target,
  CheckCircle2,
  Phone,
  Mail,
  Layers,
  Zap,
  Award,
  LineChart,
  ShieldCheck,
  Globe,
  Share2,
  Palette,
  Video,
  Code2,
  MessageCircle,
  Search,
  Rocket,
} from 'lucide-react';
import InstagramIcon from './InstagramIcon';

interface MomentsOfMarketingLandingProps {
  activeTab: 'home' | 'about' | 'services' | 'contact';
  onSelectTab: (tab: 'home' | 'about' | 'services' | 'contact') => void;
  onOpenLeadModal: (serviceName?: string) => void;
  selectedService: string;
}

export default function MomentsOfMarketingLanding({
  activeTab,
  onSelectTab,
  onOpenLeadModal,
  selectedService,
}: MomentsOfMarketingLandingProps) {

  const marketingTabs: { id: 'home' | 'about' | 'services' | 'contact'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Brands and services' },
    { id: 'contact', label: 'Contact us' },
  ];

  // Contact form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: selectedService || 'Digital Marketing',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = [
      `*New Inquiry - Moments of Marketing* 🚀`,
      ``,
      `*Name:* ${formData.fullName}`,
      `*Phone:* ${formData.phone}`,
      `*Email:* ${formData.email}`,
      formData.company ? `*Company:* ${formData.company}` : null,
      `*Service:* ${formData.serviceInterest}`,
      formData.message ? `*Message:* ${formData.message}` : null,
      ``,
      `_Sent via Moments of Marketing Website_`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/919226042236?text=${encodeURIComponent(waText)}`;
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }
    setFormSubmitted(true);
  };

  // Individual standalone pages - navigation is handled cleanly via the top Navbar and page action buttons
  const renderMobileTabs = () => null;

  // Common Page Container Class to guarantee 100% IDENTICAL top gap across all pages
  const pageContainerClass = "max-w-6xl mx-auto px-5 sm:px-10 lg:px-14 pt-4 sm:pt-6 pb-16 sm:pb-24 select-none animate-in fade-in duration-300";

  // =================================================================================
  // PAGE 1: HOME
  // =================================================================================
  if (activeTab === 'home') {
    return (
      <div className={pageContainerClass}>
        {renderMobileTabs()}

        <div className="relative">
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

        </div>
      </div>
    );
  }

  // =================================================================================
  // PAGE 2: ABOUT US (EXACT CONTENT FROM USER'S PROMPT)
  // =================================================================================
  if (activeTab === 'about') {
    const values = [
      {
        name: 'Integrity',
        icon: Shield,
        desc: 'Ethical messaging, truthful offers, brand trust',
      },
      {
        name: 'Transparency',
        icon: Lock,
        desc: 'Privacy compliance, honest metrics, data security',
      },
      {
        name: 'Speed of Delivery',
        icon: Clock,
        desc: 'Rapid iteration, fast deployment, real-time responses',
      },
      {
        name: 'Performance',
        icon: TrendingUp,
        desc: 'ROI emphasis, customer value, measurable impact',
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
      <div className={pageContainerClass}>
        {renderMobileTabs()}

        <div className="space-y-12 sm:space-y-16">
          
          {/* ---------------- 1. VISION & MISSION ---------------- */}
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
                      <h4 className="text-lg font-bold font-display dark:text-white text-zinc-950 mb-2">
                        {v.name}
                      </h4>
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
                        <h4 className="text-lg sm:text-xl font-black font-display capitalize tracking-tight text-zinc-950 dark:text-white">
                          {p.title}
                        </h4>

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
                      <h4 className="text-base sm:text-lg font-bold font-display dark:text-white text-zinc-950 leading-snug">
                        {pt.title}
                      </h4>
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

                    <h4 className="text-sm xl:text-base font-bold font-display uppercase tracking-tight text-zinc-950 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors mb-1.5">
                      {step.name}
                    </h4>
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
                    <h4 className="text-base sm:text-lg font-bold font-display uppercase tracking-tight text-zinc-950 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors mb-1.5">
                      {step.name}
                    </h4>
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
    );
  }

  // =================================================================================
  // PAGE 3: BRANDS AND SERVICES (EXACT CONTENT FROM USER'S PROMPT)
  // =================================================================================
  if (activeTab === 'services') {
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
      <div className={pageContainerClass}>
        {renderMobileTabs()}

        <div className="space-y-10 sm:space-y-12">
          
          {/* Section Header */}
          <div className="border-b border-zinc-200 dark:border-white/10 pb-6 sm:pb-8 space-y-3">
            <h1 className="page-hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display capitalize tracking-tight text-zinc-950 dark:text-white leading-tight">
              Our Services
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
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-zinc-950 dark:text-white leading-[1.15] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {s.title}
                      </h3>
                    </div>

                    {/* Service Tagline */}
                    <p className="text-sm sm:text-base font-semibold text-zinc-800 dark:text-zinc-200 font-sans tracking-wide leading-snug">
                      {s.tagline}
                    </p>

                    {/* Service Detailed Description */}
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                      {s.description}
                    </p>

                    {/* Sub-services capability tags - Clean typographic text with bullet separators (No button feel) */}
                    <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 tracking-wide leading-relaxed pt-2">
                      {s.tags.join(' · ')}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Switcher */}
          <div className="flex items-center justify-between pt-6 border-t border-zinc-200 dark:border-white/10">
            <button
              onClick={() => onSelectTab('about')}
              className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white cursor-pointer"
            >
              &larr; About Us
            </button>
            <button
              onClick={() => onSelectTab('contact')}
              className="px-6 py-2.5 rounded-full dark:bg-white dark:text-black bg-zinc-950 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
            >
              <span>Contact us &rarr;</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // =================================================================================
  // PAGE 4: CONTACT US (EXACT CONTENT FROM USER'S PROMPT)
  // =================================================================================
  if (activeTab === 'contact') {
    return (
      <div className={pageContainerClass}>
        {renderMobileTabs()}

        <div className="space-y-10 sm:space-y-12">
          
          {/* Section Header */}
          <div className="border-b border-zinc-200 dark:border-white/10 pb-6 sm:pb-8 space-y-3">
            <h1 className="page-hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-display capitalize tracking-tight text-zinc-950 dark:text-white leading-tight">
              Contact Us
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-bold dark:text-zinc-200 text-zinc-800 font-display">
              Let&apos;s Make Your Next Moment Count.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-3xl">
              Whether you want to increase visibility, generate quality enquiries, or create a more effective digital presence, MOM is ready to help you take the next step.
            </p>
          </div>

          {/* CTA & Brand Tagline */}
          <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-white/15 bg-zinc-100/70 dark:bg-zinc-900/60 shadow-xs">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold block mb-0.5">
              Let&apos;s Talk About Your Growth
            </span>
            <span className="text-sm sm:text-base font-bold font-display dark:text-white text-zinc-950">
              Moments of Marketing &mdash; Creating Moments. Building Brands. Driving Growth.
            </span>
          </div>

          {/* 2-Column Layout: Direct Details (Left) + Clean Form (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 items-start">
            
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-3.5">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-1 font-bold">
                OFFICIAL CONTACT CHANNELS
              </span>

              {/* Phone */}
              <a
                href="tel:+919226042236"
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-white/10 hover:border-black dark:hover:border-white dark:bg-white/[0.01] bg-white transition-all shadow-xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/[0.08] flex items-center justify-center text-zinc-900 dark:text-white border border-zinc-200/50 dark:border-white/5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-zinc-500 block font-mono">Phone no.</span>
                  <span className="text-base font-bold font-display dark:text-white text-zinc-950">+91 9226042236</span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@momentsofmarketing.in"
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-white/10 hover:border-black dark:hover:border-white dark:bg-white/[0.01] bg-white transition-all shadow-xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/[0.08] flex items-center justify-center text-zinc-900 dark:text-white border border-zinc-200/50 dark:border-white/5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-zinc-500 block font-mono">Email</span>
                  <span className="text-sm sm:text-base font-bold font-display dark:text-white text-zinc-950 break-all">contact@momentsofmarketing.in</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/momentsofmarketingofficial"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-zinc-200 dark:border-white/10 hover:border-black dark:hover:border-white dark:bg-white/[0.01] bg-white transition-all shadow-xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/[0.08] flex items-center justify-center text-zinc-900 dark:text-white border border-zinc-200/50 dark:border-white/5">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-zinc-500 block font-mono">Instagram</span>
                  <span className="text-sm sm:text-base font-bold font-display dark:text-white text-zinc-950">@momentsofmarketingofficial</span>
                </div>
              </a>
            </div>

            {/* Right Column: Direct Consultation Message Form */}
            <div className="lg:col-span-7">
              <div className="pro-card p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-sm">
                <h3 className="text-xl font-bold font-display dark:text-white text-zinc-950 mb-1">
                  Send a Direct Inquiry
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-5 font-light">
                  Fill this form to instantly connect with our team on WhatsApp &amp; Email.
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-zinc-100 dark:bg-white/10 border border-zinc-300 dark:border-white/20 text-zinc-900 dark:text-white text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 mx-auto" />
                    <p className="font-bold text-sm">Thank You! Your inquiry is being directed to WhatsApp.</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300">Our representative will respond to you promptly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-white/15 dark:bg-white/[0.04] bg-white text-xs sm:text-sm dark:text-white text-zinc-900 focus:outline-none focus:border-zinc-950 dark:focus:border-white shadow-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 block mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 9876543210"
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-white/15 dark:bg-white/[0.04] bg-white text-xs sm:text-sm dark:text-white text-zinc-900 focus:outline-none focus:border-zinc-950 dark:focus:border-white shadow-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 block mb-1">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-white/15 dark:bg-white/[0.04] bg-white text-xs sm:text-sm dark:text-white text-zinc-900 focus:outline-none focus:border-zinc-950 dark:focus:border-white shadow-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 block mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company / Brand"
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-white/15 dark:bg-white/[0.04] bg-white text-xs sm:text-sm dark:text-white text-zinc-900 focus:outline-none focus:border-zinc-950 dark:focus:border-white shadow-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 block mb-1">
                        Service of Interest
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-white/15 dark:bg-zinc-900 bg-white text-xs sm:text-sm dark:text-white text-zinc-900 focus:outline-none focus:border-zinc-950 dark:focus:border-white shadow-xs"
                      >
                        <option value="Digital Marketing">01. Digital Marketing</option>
                        <option value="Social Media Management">02. Social Media Management</option>
                        <option value="Lead Generation">03. Lead Generation</option>
                        <option value="Branding & Creative Design">04. Branding & Creative Design</option>
                        <option value="Content Creation & Video Production">05. Content Creation & Video Production</option>
                        <option value="Website Design & Development">06. Website Design & Development</option>
                        <option value="Performance Marketing & Paid Advertising">07. Performance Marketing & Paid Advertising</option>
                        <option value="Email & WhatsApp Marketing">08. Email & WhatsApp Marketing</option>
                        <option value="Influencer Marketing & Brand Activations">09. Influencer Marketing & Brand Activations</option>
                        <option value="Marketing Strategy & Consulting">10. Marketing Strategy & Consulting</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 block mb-1">
                        Brief Message
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your brand goals and what you want to achieve..."
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-white/15 dark:bg-white/[0.04] bg-white text-xs sm:text-sm dark:text-white text-zinc-900 focus:outline-none focus:border-zinc-950 dark:focus:border-white shadow-xs"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-black text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                    >
                      Send Inquiry to WhatsApp &rarr;
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Bottom Switcher */}
          <div className="flex items-center justify-between pt-6 border-t border-zinc-200 dark:border-white/10">
            <button
              onClick={() => onSelectTab('services')}
              className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white cursor-pointer"
            >
              &larr; Brands and services
            </button>
            <button
              onClick={() => onSelectTab('home')}
              className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white cursor-pointer"
            >
              Back to Home &rarr;
            </button>
          </div>

        </div>
      </div>
    );
  }

  return null;
}
