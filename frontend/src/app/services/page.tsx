'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import MomentsOfMarketingLanding from '../../components/MomentsOfMarketingLanding';
import Footer from '../../components/Footer';
import LeadCaptureModal from '../../components/LeadCaptureModal';
import ComingSoonModal from '../../components/ComingSoonModal';

export default function ServicesPage() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Digital Marketing');

  const handleSelectTab = (tab: 'home' | 'about' | 'services' | 'contact') => {
    if (tab === 'home') router.push('/home');
    else if (tab === 'about') router.push('/about');
    else if (tab === 'services') router.push('/services');
    else if (tab === 'contact') router.push('/contact');
  };

  const handleOpenLeadModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <main
      className="relative min-h-screen dark:bg-black dark:text-white bg-[#F8FAFC] text-zinc-900 overflow-hidden transition-colors duration-300"
      suppressHydrationWarning
    >
      <Navbar
        onOpenLeadModal={() => handleOpenLeadModal()}
        activeEntity="marketing"
        onBackToGateway={() => router.push('/')}
        marketingTab="services"
        onSelectMarketingTab={handleSelectTab}
      />

      <div className="relative z-10 transition-all duration-300 pt-[56px] sm:pt-[66px] md:pt-[70px]">
        <MomentsOfMarketingLanding
          activeTab="services"
          onSelectTab={handleSelectTab}
          onOpenLeadModal={handleOpenLeadModal}
          selectedService={selectedService}
        />
      </div>

      <Footer />

      <LeadCaptureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
      <ComingSoonModal
        isOpen={comingSoonOpen}
        onClose={() => setComingSoonOpen(false)}
        onExploreMarketing={() => router.push('/home')}
      />
    </main>
  );
}
