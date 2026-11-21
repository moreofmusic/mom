'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import MoreOfMusicLanding from '@/components/MoreOfMusicLanding';
import Footer from '@/components/Footer';
import LeadCaptureModal from '@/components/LeadCaptureModal';

export default function MusicPage() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Sonic Branding');

  const handleOpenLeadModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <main
      className="relative min-h-screen flex flex-col justify-between dark:bg-black dark:text-white bg-[#F8FAFC] text-zinc-900 overflow-hidden transition-colors duration-300"
      suppressHydrationWarning
    >
      <Navbar
        onOpenLeadModal={() => handleOpenLeadModal()}
        activeEntity="music"
        onBackToGateway={() => router.push('/')}
      />

      <div className="relative z-10 flex-1 transition-all duration-300 pt-[56px] sm:pt-[66px] md:pt-[70px]">
        <MoreOfMusicLanding onOpenLeadModal={handleOpenLeadModal} />
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
