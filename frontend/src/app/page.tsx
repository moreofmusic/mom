'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DualBrandSection from '../components/DualBrandSection';
import WorkAndRosterSection from '../components/WorkAndRosterSection';
import ThreePillars from '../components/ThreePillars';
import ServicesGrid from '../components/ServicesGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import OurApproach from '../components/OurApproach';
import VisionMissionValues from '../components/VisionMissionValues';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import LeadCaptureModal from '../components/LeadCaptureModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Digital Marketing');
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenLeadModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <main
      className="relative min-h-screen dark:bg-black dark:text-white bg-[#F8FAFC] text-zinc-900 overflow-hidden transition-colors duration-300"
      suppressHydrationWarning
    >
      {/* Navigation Header */}
      <Navbar onOpenLeadModal={() => handleOpenLeadModal()} />

      {/* Hero Section */}
      <Hero onOpenLeadModal={() => handleOpenLeadModal()} />

      {/* Dual Brand Identity (Moments of Marketing & More of Music) */}
      <DualBrandSection onOpenLeadModal={() => handleOpenLeadModal()} />

      {/* Represent Management Style Roster & Productions Visual Showcase */}
      <WorkAndRosterSection onSelectService={(service) => handleOpenLeadModal(service)} />

      {/* Three Pillars of Growth (Slide 5 of PPT) */}
      <ThreePillars onSelectService={(service) => handleOpenLeadModal(service)} />

      {/* 10 Comprehensive Services / Desks (Slide 6 of PPT) */}
      <ServicesGrid onSelectService={(service) => handleOpenLeadModal(service)} />

      {/* Why Choose MOM? (Slide 5 of PPT) */}
      <WhyChooseUs onOpenLeadModal={() => handleOpenLeadModal()} />

      {/* Our 5-Step Approach (Slide 5 of PPT) */}
      <OurApproach onOpenLeadModal={() => handleOpenLeadModal()} />

      {/* Vision, Mission & Core Values (Slide 4 of PPT) */}
      <VisionMissionValues />

      {/* Direct Contact & Inbound Lead Capture Section (Slide 7 of PPT) */}
      <ContactSection preselectedService={selectedService} />

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
