'use client';

import React, { useEffect } from 'react';
import { X, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 select-none overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl rounded-3xl border border-zinc-200 dark:border-white/15 bg-white dark:bg-zinc-950 p-6 sm:p-9 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 text-center my-auto"
      >
        {/* Subtle Ambient Emerald Backlight */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-500/15 dark:bg-emerald-500/20 blur-[100px] pointer-events-none" />

        {/* Close Button (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full border border-zinc-200 dark:border-white/15 flex items-center justify-center text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-all cursor-pointer active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Animated Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-bold uppercase tracking-wider mb-5">
          <Clock className="w-3.5 h-3.5 animate-spin [animation-duration:6s]" />
          <span>COMING SOON &bull; UNDER DEVELOPMENT</span>
        </div>

        {/* MOM Logo */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <img
            src="/mom-logo-transparent.png"
            alt="MOM Logo"
            className={`h-14 sm:h-18 md:h-20 w-auto object-contain transition-all ${
              theme === 'light' ? 'invert' : ''
            }`}
          />
        </div>

        {/* Tagline */}
        <p className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400 tracking-wide font-sans mb-5 leading-snug">
          Creating Moments. Building Experiences. Bringing People Together.
        </p>

        {/* Detailed Brand Copy (Paragraph 1 & 2) */}
        <div className="space-y-3.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-lg mx-auto mb-7 font-normal text-left sm:text-center">
          <p>
            MOM (More of Music) is an artist management, music tour management and corporate event management company that brings talent, creativity and professional execution together to create memorable experiences.
          </p>
          <p>
            We specialise in managing artists, planning and executing music tours, and delivering engaging corporate events. From discovering and nurturing talent to coordinating large-scale performances and managing end-to-end corporate events, we take care of every detail that turns an idea into an unforgettable experience.
          </p>
        </div>

        {/* Center-Aligned Inquire on WhatsApp Button (Inside Card) */}
        <div className="flex items-center justify-center">
          <a
            href="https://wa.me/917000083119?text=Hi%20MOM%20Team%2C%20I%20have%20an%20inquiry%20regarding%20More%20of%20Music."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-zinc-300 dark:border-white/20 hover:border-emerald-500/60 dark:hover:border-emerald-400/60 text-zinc-700 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 shadow-sm hover:shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-emerald-500" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Floating Bottom-Right Action Button (Outside Card, Shown with Popup) */}
      {onExploreMarketing && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <button
            onClick={() => {
              onClose();
              onExploreMarketing();
            }}
            className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-white text-black dark:bg-white dark:text-black hover:bg-zinc-100 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.5)] border border-white/20 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            title="Explore Moments of Marketing"
          >
            <span>Explore Moments of Marketing</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}
