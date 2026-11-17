'use client';

import React from 'react';
import ServicesGrid from './ServicesGrid';
import ThreePillars from './ThreePillars';
import WhyChooseUs from './WhyChooseUs';
import OurApproach from './OurApproach';
import VisionMissionValues from './VisionMissionValues';
import WorkAndRosterSection from './WorkAndRosterSection';
import ContactSection from './ContactSection';

interface MomentsOfMarketingLandingProps {
  onOpenLeadModal: (serviceName?: string) => void;
  selectedService: string;
}

export default function MomentsOfMarketingLanding({
  onOpenLeadModal,
  selectedService,
}: MomentsOfMarketingLandingProps) {
  return (
    <div className="space-y-4">
      {/* 10 Comprehensive Services / Desks (Slide 6 of PPT) */}
      <ServicesGrid onSelectService={(service) => onOpenLeadModal(service)} />

      {/* The Roster & Productions Visual Showcase */}
      <WorkAndRosterSection onSelectService={(service) => onOpenLeadModal(service)} />

      {/* Three Pillars of Growth (Slide 5 of PPT) */}
      <ThreePillars onSelectService={(service) => onOpenLeadModal(service)} />

      {/* Why Choose MOM? (Slide 5 of PPT) */}
      <WhyChooseUs onOpenLeadModal={() => onOpenLeadModal()} />

      {/* Our 5-Step Approach (Slide 5 of PPT) */}
      <OurApproach onOpenLeadModal={() => onOpenLeadModal()} />

      {/* Vision, Mission & Core Values (Slide 4 of PPT) */}
      <VisionMissionValues />

      {/* Direct Contact & Inbound Lead Capture Section (Slide 7 of PPT) */}
      <ContactSection preselectedService={selectedService} />
    </div>
  );
}
