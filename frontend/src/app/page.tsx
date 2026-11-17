'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import DualPortalGateway from '../components/DualPortalGateway';
import MomentsOfMarketingLanding from '../components/MomentsOfMarketingLanding';
import MoreOfMusicLanding from '../components/MoreOfMusicLanding';
import Footer from '../components/Footer';
import LeadCaptureModal from '../components/LeadCaptureModal';

export default function Home() {
  const [activeEntity, setActiveEntity] = useState<'marketing' | 'music'>('marketing');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Digital Marketing');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check URL search params for deep linking (e.g. ?entity=music or ?entity=marketing)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const entityParam = params.get('entity');
      if (entityParam === 'music' || entityParam === 'marketing') {
        setActiveEntity(entityParam);
      }
    }
  }, []);

  const handleSelectEntity = (entity: 'marketing' | 'music') => {
    setActiveEntity(entity);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('entity', entity);
      window.history.replaceState({}, '', url.toString());
    }
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
      {/* Navigation Header with Dual Entity Switcher */}
      <Navbar
        onOpenLeadModal={() => handleOpenLeadModal()}
        activeEntity={activeEntity}
        onSelectEntity={handleSelectEntity}
      />

      {/* Top Gateway: 2 Prominent Cards (MOM - Moments of Marketing / MOM - More of Music) */}
      <DualPortalGateway
        activeEntity={activeEntity}
        onSelectEntity={handleSelectEntity}
        onOpenLeadModal={handleOpenLeadModal}
      />

      {/* Dynamic Landing Experience Based on Active Entity */}
      <div className="relative z-10 transition-all duration-500">
        {activeEntity === 'marketing' ? (
          <MomentsOfMarketingLanding
            onOpenLeadModal={handleOpenLeadModal}
            selectedService={selectedService}
          />
        ) : (
          <MoreOfMusicLanding
            onOpenLeadModal={handleOpenLeadModal}
          />
        )}
      </div>

      {/* Footer */}
      <Footer />

      {/* Consultation Modal */}
      {mounted && (
        <LeadCaptureModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          defaultService={selectedService}
        />
      )}
    </main>
  );
}
