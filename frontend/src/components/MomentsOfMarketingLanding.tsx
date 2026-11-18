'use client';

import React from 'react';
import { ArrowRight, Compass, Palette, Target, Phone, Mail, CheckCircle2 } from 'lucide-react';
import ServicesGrid from './ServicesGrid';
import ThreePillars from './ThreePillars';
import WhyChooseUs from './WhyChooseUs';
import OurApproach from './OurApproach';
import VisionMissionValues from './VisionMissionValues';
import ContactSection from './ContactSection';

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

  // ----------------- VIEW 1: HOME (SLIDE 3 OF PPT - EXACT MATCH) -----------------
  if (activeTab === 'home') {
    return (
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 py-8 sm:py-14 animate-in fade-in duration-500">
        
        {/* Mobile Tab Switcher (Visible only on mobile screens < md) */}
        <div className="md:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex-nowrap border-b border-zinc-200 dark:border-white/10">
          {marketingTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`px-3.5 py-2 rounded-none text-xs font-semibold whitespace-nowrap border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#185873] text-white border-[#185873] shadow-sm'
                    : 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border-zinc-800 dark:border-white/30'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Main Headline from Slide 3 */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold font-sans text-zinc-950 dark:text-white tracking-tight leading-snug mb-8 sm:mb-10">
          More Than Marketing. A Partner in Your Growth
        </h1>

        {/* Three Core Paragraphs from Slide 3 */}
        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-zinc-800 dark:text-zinc-200 font-normal leading-relaxed font-sans max-w-4xl">
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
    );
  }

  // ----------------- VIEW 2: ABOUT US (SLIDES 4 & 5 OF PPT) -----------------
  if (activeTab === 'about') {
    return (
      <div className="space-y-16 sm:space-y-24 animate-in fade-in duration-500">
        {/* Slide 4: Vision, Mission & Values */}
        <VisionMissionValues />

        {/* Slide 5: Three Pillars of Growth */}
        <ThreePillars onSelectService={(service) => onOpenLeadModal(service)} />

        {/* Slide 5: Why Choose MOM? */}
        <WhyChooseUs onOpenLeadModal={() => onOpenLeadModal()} />

        {/* Slide 5: Our 5-Step Approach */}
        <OurApproach onOpenLeadModal={() => onOpenLeadModal()} />
      </div>
    );
  }

  // ----------------- VIEW 3: BRANDS AND SERVICES (SLIDE 6 OF PPT) -----------------
  if (activeTab === 'services') {
    return (
      <div className="animate-in fade-in duration-500">
        {/* Slide 6: The 10 Desks */}
        <ServicesGrid onSelectService={(service) => onOpenLeadModal(service)} />
      </div>
    );
  }

  // ----------------- VIEW 4: CONTACT US (SLIDE 7 OF PPT) -----------------
  if (activeTab === 'contact') {
    return (
      <div className="animate-in fade-in duration-500">
        {/* Slide 7: Direct Contact & Inquiry Section */}
        <ContactSection preselectedService={selectedService} />
      </div>
    );
  }

  return null;
}
