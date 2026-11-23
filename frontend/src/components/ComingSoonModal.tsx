'use client';

import React, { useEffect } from 'react';
import { X, Clock, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.301-.776.978-.952 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.675-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.587-.493-.507-.677-.516-.175-.008-.376-.01-.576-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.479 1.078 2.909 1.228 3.109.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.229 1.377.197 1.895.12.578-.087 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.502 2 2.008 6.493 2.008 12.03c0 1.77.462 3.498 1.34 5.02L2 22l5.099-1.338c1.474.804 3.136 1.228 4.94 1.228 5.537 0 10.03-4.493 10.03-10.03S17.577 2 12.04 2zm0 18.358c-1.536 0-3.043-.414-4.359-1.195l-.313-.186-3.238.85.864-3.158-.204-.325a8.293 8.293 0 01-1.272-4.384c0-4.597 3.74-8.337 8.338-8.337 4.597 0 8.337 3.74 8.337 8.337 0 4.598-3.74 8.338-8.338 8.338z" />
    </svg>
  );
}

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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E11D48]/40 bg-[#E11D48]/10 text-[#E11D48] dark:text-rose-400 text-[11px] font-mono font-bold uppercase tracking-wider mb-5 shadow-[0_0_15px_rgba(225,29,72,0.2)]">
          <Clock className="w-3.5 h-3.5 animate-spin [animation-duration:6s]" />
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-1">
          <a
            href="https://wa.me/917000083119?text=Hi%20MOM%20Team%2C%20I%20have%20an%20inquiry%20regarding%20More%20of%20Music."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-full border-2 border-[#E11D48] bg-[#E11D48]/15 hover:bg-[#E11D48] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_0_15px_rgba(225,29,72,0.3)] hover:shadow-[0_0_25px_rgba(225,29,72,0.65)]"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>Inquire on WhatsApp</span>
          </a>

          {onExploreMarketing && (
            <button
              onClick={() => {
                onClose();
                onExploreMarketing();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white text-black dark:bg-white dark:text-black hover:bg-zinc-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer active:scale-95 shadow-md hover:shadow-lg border border-white/40 group"
              title="Explore Moments of Marketing"
            >
              <span>Explore Moments of Marketing</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
