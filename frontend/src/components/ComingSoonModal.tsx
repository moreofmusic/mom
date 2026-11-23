'use client';

import React, { useEffect } from 'react';
import { X, Clock, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import WhatsAppIcon from './WhatsAppIcon';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreMarketing?: () => void;
}

export default function ComingSoonModal({
  isOpen,
  onClose,
  onExploreMarketing,
}: ComingSoonModalProps) {
  const { theme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl rounded-3xl border-2 border-[#E11D48]/75 dark:border-[#E11D48]/80 bg-white dark:bg-zinc-950 p-6 sm:p-9 shadow-[0_0_60px_rgba(225,29,72,0.35)] overflow-hidden animate-in zoom-in-95 duration-200 text-center my-auto"
      >
        {/* Subtle Ambient Red Backlight */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#E11D48]/20 blur-[100px] pointer-events-none" />

        {/* Close Button (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full border border-zinc-200 dark:border-white/15 flex items-center justify-center text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-all cursor-pointer active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Animated Status Pill */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-[#E11D48]/40 bg-[#E11D48]/10 text-[#E11D48] dark:text-rose-400 text-[9.5px] sm:text-[11px] font-mono font-bold uppercase tracking-wider mb-5 shadow-[0_0_15px_rgba(225,29,72,0.2)] whitespace-nowrap">
          <Clock className="w-3.5 h-3.5 animate-spin [animation-duration:6s] shrink-0" />
          <span>COMING SOON &bull; UNDER DEVELOPMENT</span>
        </div>

        {/* Complete MOM Logo with MORE OF MUSIC (Scaled Slightly Smaller as Requested) */}
        <div className="flex justify-center mb-5 sm:mb-6">
          <img
            src="/mom-logo-more-of-music.png"
            alt="MOM More of Music Logo"
            className={`h-11 sm:h-14 md:h-16 w-auto object-contain transition-all ${
              theme === 'light' ? 'invert' : ''
            }`}
          />
        </div>

        {/* Detailed Brand Copy (Paragraph 1 & 2) */}
        <div className="space-y-3.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-lg mx-auto mb-7 font-normal text-left sm:text-center">
          <p>
            MOM (More of Music) is an artist management, music tour management and corporate event management company that brings talent, creativity and professional execution together to create memorable experiences.
          </p>
          <p>
            We specialise in managing artists, planning and executing music tours, and delivering engaging corporate events. From discovering and nurturing talent to coordinating large-scale performances and managing end-to-end corporate events, we take care of every detail that turns an idea into an unforgettable experience.
          </p>
        </div>

        {/* Action Buttons Inside Modal: WhatsApp + Explore Marketing Side-by-Side / Below */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-2">
          <a
            href="https://wa.me/917000083119?text=Hi%20MOM%20Team%2C%20I%20have%20an%20inquiry%20regarding%20More%20of%20Music."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.6)] whitespace-nowrap"
          >
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <WhatsAppIcon className="w-3.5 h-3.5 flex-shrink-0" />
            </div>
            <span className="whitespace-nowrap font-bold">Inquire on WhatsApp</span>
          </a>

          {onExploreMarketing && (
            <button
              onClick={() => {
                onClose();
                onExploreMarketing();
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer active:scale-95 shadow-md hover:shadow-lg border border-black/10 dark:border-white/40 group whitespace-nowrap"
              title="Explore Moments of Marketing"
            >
              <span className="whitespace-nowrap font-bold">Explore Moments of Marketing</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
