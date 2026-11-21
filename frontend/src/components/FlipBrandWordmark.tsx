'use client';

import React, { useState, useEffect } from 'react';
import { TrendingUp, Music } from 'lucide-react';

interface FlipBrandWordmarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  fixedEntity?: 'marketing' | 'music';
}

export default function FlipBrandWordmark({ className = '', size = 'md', fixedEntity }: FlipBrandWordmarkProps) {
  // 0 = More of Music, 1 = Moments of Marketing
  const [index, setIndex] = useState(fixedEntity === 'marketing' ? 1 : fixedEntity === 'music' ? 0 : 0);
  const [isMorphing, setIsMorphing] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (fixedEntity) {
      setIndex(fixedEntity === 'marketing' ? 1 : 0);
      return;
    }
    if (isPaused) return;

    const interval = setInterval(() => {
      triggerMorph();
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused, fixedEntity]);

  const triggerMorph = () => {
    if (fixedEntity) return;
    setIsMorphing(true);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
      setTimeout(() => {
        setIsMorphing(false);
      }, 50);
    }, 300);
  };

  const isMusic = fixedEntity ? fixedEntity === 'music' : index === 0;

  return (
    <div
      onClick={triggerMorph}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`group/capsule relative flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border transition-all duration-500 cursor-pointer select-none min-w-0 backdrop-blur-md overflow-hidden ${
        isMusic
          ? 'border-rose-500/35 bg-rose-500/[0.06] hover:border-rose-400 hover:shadow-[0_0_25px_rgba(244,63,94,0.3)] shadow-[0_0_15px_rgba(244,63,94,0.12)]'
          : 'border-emerald-500/35 bg-emerald-500/[0.06] hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] shadow-[0_0_15px_rgba(16,185,129,0.12)]'
      } ${className}`}
      title="Click to toggle between More of Music and Moments of Marketing"
    >
      {/* Ambient Moving Shimmer Light Sweep */}
      <div className="absolute inset-0 -translate-x-full group-hover/capsule:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 ease-out pointer-events-none" />

      {/* Dynamic Visual Indicator Icon (Equalizer vs Growth Spark) */}
      <div className="flex items-center justify-center flex-shrink-0">
        {isMusic ? (
          /* Live Dancing Equalizer Audio Bars for Music */
          <div className="flex items-end gap-[2px] h-3.5 sm:h-4 px-1 py-0.5 rounded-md bg-rose-400/10">
            <span className="w-[2px] bg-rose-400 rounded-full animate-[soundwave_0.7s_ease-in-out_infinite_alternate] h-2" />
            <span className="w-[2px] bg-rose-400 rounded-full animate-[soundwave_1.1s_ease-in-out_infinite_alternate_0.2s] h-3.5" />
            <span className="w-[2px] bg-rose-400 rounded-full animate-[soundwave_0.8s_ease-in-out_infinite_alternate_0.4s] h-1.5" />
            <span className="hidden xs:inline-block w-[2px] bg-rose-400 rounded-full animate-[soundwave_1.3s_ease-in-out_infinite_alternate_0.1s] h-3" />
          </div>
        ) : (
          /* Live Pulsing Growth Radar / Trending Arrow for Marketing */
          <div className="flex items-center justify-center w-4 sm:w-5 h-4 sm:h-5 rounded-md bg-emerald-400/15 relative">
            <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 opacity-60" />
            <TrendingUp className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 text-emerald-500 stroke-[2.5]" />
          </div>
        )}
      </div>

      {/* Primary Brand Text with 3D Cylinder Slot Morph */}
      <div className="overflow-hidden flex items-center min-w-0 py-0.5 [perspective:600px]">
        <div
          className={`flex items-center gap-1 sm:gap-1.5 whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            isMorphing
              ? '-translate-y-3 opacity-0 rotate-x-45 scale-95 filter blur-[1px]'
              : 'translate-y-0 opacity-100 rotate-x-0 scale-100 filter blur-0'
          }`}
        >
          {isMusic ? (
            <>
              <span className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-extrabold uppercase font-display dark:text-white text-zinc-950 tracking-[0.06em] sm:tracking-[0.1em]">
                MORE OF
              </span>
              <span className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-black uppercase font-display text-rose-400 drop-shadow-[0_0_12px_rgba(244,63,94,0.6)] tracking-[0.06em] sm:tracking-[0.1em]">
                MUSIC
              </span>
            </>
          ) : (
            <>
              <span className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-extrabold uppercase font-display dark:text-white text-zinc-950 tracking-[0.06em] sm:tracking-[0.1em]">
                MOMENTS OF
              </span>
              <span className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-black uppercase font-display text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.6)] tracking-[0.06em] sm:tracking-[0.1em]">
                MARKETING
              </span>
            </>
          )}
        </div>
      </div>

      {/* Micro Division Pill Tag (Desktop / Tablet) */}
      <div className="hidden sm:flex items-center pl-1 border-l dark:border-white/10 border-zinc-300/60">
        <span
          className={`text-[8px] sm:text-[9px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded-full transition-all duration-300 ${
            isMusic
              ? 'bg-rose-400/20 text-rose-400 border border-rose-400/30'
              : 'bg-emerald-400/20 text-emerald-400 border border-emerald-400/30'
          }`}
        >
          {isMusic ? 'SOUND' : 'GROWTH'}
        </span>
      </div>
    </div>
  );
}
