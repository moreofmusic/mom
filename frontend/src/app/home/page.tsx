'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadCaptureModal from '@/components/LeadCaptureModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Digital Marketing');

  const handleOpenLeadModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <main
      className="relative min-h-screen flex flex-col justify-between dark:bg-black dark:text-white bg-[#F8FAFC] text-zinc-900 overflow-hidden transition-colors duration-300"
      suppressHydrationWarning
    >
      <Navbar onOpenLeadModal={() => handleOpenLeadModal()} />

      {/* Main Content Area - Unified Top Spacing matching About page */}
      <div className="relative z-10 flex-1 flex flex-col justify-start transition-all duration-300 pt-[88px] sm:pt-[104px] md:pt-[124px]">
        <div className="max-w-5xl mx-auto w-full px-5 sm:px-10 lg:px-14 pt-4 sm:pt-6 pb-16 sm:pb-24 select-none animate-in fade-in duration-300">
          
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
