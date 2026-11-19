'use client';

import React, { useEffect } from 'react';
import { X, Clock, Sparkles, MessageCircle, ArrowRight, Music } from 'lucide-react';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl border border-zinc-200 dark:border-white/15 bg-white dark:bg-zinc-950 p-6 sm:p-9 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 text-center"
      >
        {/* Subtle Ambient Cyan Backlight */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/15 dark:bg-cyan-500/20 blur-[90px] pointer-events-none" />

        {/* Close Button (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full border border-zinc-200 dark:border-white/15 flex items-center justify-center text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-all cursor-pointer active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Animated Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-[11px] font-mono font-bold uppercase tracking-wider mb-5">
          <Clock className="w-3.5 h-3.5 animate-spin [animation-duration:6s]" />
          <span>COMING SOON &bull; UNDER DEVELOPMENT</span>
        </div>

        {/* Music Icon Avatar */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mx-auto mb-4 bg-zinc-100 dark:bg-white/[0.06] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-cyan-500 dark:text-cyan-400 shadow-inner">
          <Music className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-zinc-950 dark:text-white mb-2.5">
          More of Music
        </h3>

        {/* Subtitle / Description */}
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-sm mx-auto mb-7 font-light">
          This portal is currently under active development. Our sound studio, audio production desks, and sonic experiences are coming very soon!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {onExploreMarketing && (
            <button
              onClick={() => {
                onClose();
                onExploreMarketing();
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 shadow-md transition-all cursor-pointer"
            >
              <span>Explore Moments of Marketing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          <a
            href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20have%20an%20inquiry%20regarding%20More%20of%20Music%20sound%20services."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-full border border-zinc-300 dark:border-white/20 hover:border-emerald-500/60 dark:hover:border-emerald-400/60 text-zinc-700 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-emerald-500" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>

        {/* Subtle Footnote */}
        <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mt-6">
          Moments of Marketing is live &bull; Click anywhere outside to close
        </p>
      </div>
    </div>
  );
}
