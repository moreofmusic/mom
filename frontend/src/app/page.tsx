'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TwoOptionsGateway from '../components/TwoOptionsGateway';
import MomentsOfMarketingLanding from '../components/MomentsOfMarketingLanding';
import MoreOfMusicLanding from '../components/MoreOfMusicLanding';
import Footer from '../components/Footer';
import LeadCaptureModal from '../components/LeadCaptureModal';

export default function Home() {
  const [activeEntity, setActiveEntity] = useState<'marketing' | 'music' | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Digital Marketing');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check URL search params for deep linking (e.g. ?portal=music or ?entity=marketing)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const entityParam = params.get('entity') || params.get('portal');
      if (entityParam === 'music' || entityParam === 'marketing') {
        setActiveEntity(entityParam);
      }
    }
  }, []);

  const handleSelectEntity = (entity: 'marketing' | 'music' | null) => {
    setActiveEntity(entity);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (entity) {
        url.searchParams.set('entity', entity);
      } else {
        url.searchParams.delete('entity');
        url.searchParams.delete('portal');
      }
      window.history.replaceState({}, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      {activeEntity === null ? (
        /* INITIAL SCREEN: STRICTLY ONLY THE 2 OPTIONS (MOM - More of Music / MOM - Moments of Marketing) */
        <TwoOptionsGateway onSelectEntity={handleSelectEntity} />
      ) : (
        /* DEDICATED FULL LANDING EXPERIENCE FOR THE CHOSEN ENTITY */
        <>
          {/* Navigation Header with Dual Entity Switcher & Return to 2 Options */}
          <Navbar
            onOpenLeadModal={() => handleOpenLeadModal()}
            activeEntity={activeEntity}
            onSelectEntity={handleSelectEntity}
            onBackToGateway={() => handleSelectEntity(null)}
          />

          {/* Dynamic Landing Experience Based on Active Entity */}
          <div className="relative z-10 transition-all duration-500 pt-20">
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
        </>
      )}

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
