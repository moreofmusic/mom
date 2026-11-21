'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import TwoOptionsGateway from '@/components/TwoOptionsGateway';
import ComingSoonModal from '@/components/ComingSoonModal';

export default function GatewayPage() {
  const router = useRouter();
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  const handleSelectEntity = (entity: 'marketing' | 'music') => {
    if (entity === 'marketing') {
      router.push('/home');
    } else if (entity === 'music') {
      setComingSoonOpen(true);
    }
  };

  return (
    <main
      className="relative min-h-screen dark:bg-black dark:text-white bg-[#F8FAFC] text-zinc-900 overflow-hidden transition-colors duration-300"
      suppressHydrationWarning
    >
      <TwoOptionsGateway onSelectEntity={handleSelectEntity} />

      <ComingSoonModal
        isOpen={comingSoonOpen}
        onClose={() => setComingSoonOpen(false)}
        onExploreMarketing={() => router.push('/home')}
      />
    </main>
  );
}
