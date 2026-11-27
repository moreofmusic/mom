'use client';

import React from 'react';
import TwoOptionsGateway from '@/components/TwoOptionsGateway';

export default function GatewayPage() {
  const handleSelectEntity = (entity: 'marketing' | 'music') => {
    if (entity === 'marketing') {
      window.location.href = 'https://momentsofmarketing.com';
    }
  };

  return (
    <main
      className="relative min-h-screen dark:bg-black dark:text-white bg-[#F8FAFC] text-zinc-900 overflow-hidden transition-colors duration-300"
      suppressHydrationWarning
    >
      <TwoOptionsGateway onSelectEntity={handleSelectEntity} />
    </main>
  );
}
