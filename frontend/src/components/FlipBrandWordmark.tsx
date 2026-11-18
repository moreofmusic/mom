'use client';

import React, { useState, useEffect } from 'react';

interface FlipBrandWordmarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function FlipBrandWordmark({ className = '', size = 'md' }: FlipBrandWordmarkProps) {
  // 0 = More of Music, 1 = Moments of Marketing
  const [index, setIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Step 1: Tilt / rotate out
      setIsFlipping(true);

      // Step 2: Swap content halfway through the 3D rotation
      setTimeout(() => {
        setIndex((prev) => (prev === 0 ? 1 : 0));
        setIsFlipping(false);
      }, 350);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const items = [
    {
      prefix: 'More of',
      word: 'Music',
      sub: 'STUDIO • SOUND',
      wordColor: 'text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.45)]',
      dotColor: 'bg-cyan-400',
      badgeText: 'text-cyan-400/90',
    },
    {
      prefix: 'Moments of',
      word: 'Marketing',
      sub: 'AGENCY • GROWTH',
      wordColor: 'text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.45)]',
      dotColor: 'bg-emerald-400',
      badgeText: 'text-emerald-400/90',
    },
  ];

  const current = items[index];

  // Responsive font sizes for different contexts
  const titleSizes = {
    sm: 'text-[10px] xs:text-[11px] sm:text-xs md:text-sm',
    md: 'text-[11px] xs:text-[12px] sm:text-sm md:text-[15px]',
    lg: 'text-xs xs:text-sm sm:text-base md:text-lg',
  }[size];

  const subSizes = {
    sm: 'text-[7px] xs:text-[7.5px] sm:text-[8.5px] md:text-[9.5px]',
    md: 'text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] md:text-[10.5px]',
    lg: 'text-[8.5px] xs:text-[9.5px] sm:text-xs md:text-[12px]',
  }[size];

  return (
    <div
      className={`flex flex-col justify-center leading-none select-none min-w-0 [perspective:1000px] cursor-pointer group/flip ${className}`}
      onClick={() => {
        if (!isFlipping) {
          setIsFlipping(true);
          setTimeout(() => {
            setIndex((prev) => (prev === 0 ? 1 : 0));
            setIsFlipping(false);
          }, 350);
        }
      }}
      title="Click to switch division"
    >
      {/* Primary Brand Title with 3D Flip */}
      <div className="h-4 sm:h-5 md:h-6 flex items-center overflow-visible">
        <div
          className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap transition-all duration-350 ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipping
              ? 'rotateX(-90deg) translateY(-6px) scale(0.92)'
              : 'rotateX(0deg) translateY(0px) scale(1)',
            opacity: isFlipping ? 0 : 1,
            filter: isFlipping ? 'blur(1.5px)' : 'blur(0px)',
          }}
        >
          <span
            className={`${titleSizes} font-black tracking-[0.08em] sm:tracking-[0.12em] uppercase font-display dark:text-white text-zinc-950 transition-colors`}
          >
            {current.prefix}
          </span>
          <span
            className={`${titleSizes} font-black tracking-[0.08em] sm:tracking-[0.12em] uppercase font-display ${current.wordColor} transition-colors`}
          >
            {current.word}
          </span>
        </div>
      </div>

      {/* Division Subtitle Badge with Synced Micro Flip */}
      <div className="h-3 sm:h-3.5 flex items-center mt-0.5 overflow-hidden">
        <div
          className="flex items-center gap-1.5 whitespace-nowrap transition-all duration-350 ease-out"
          style={{
            transform: isFlipping ? 'translateY(6px)' : 'translateY(0px)',
            opacity: isFlipping ? 0 : 1,
          }}
        >
          {/* Animated Pulsing Dot */}
          <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full ${current.dotColor} opacity-75`}
            />
            <span
              className={`relative inline-flex rounded-full h-1.5 w-1.5 ${current.dotColor}`}
            />
          </span>

          <span
            className={`${subSizes} font-bold tracking-[0.16em] sm:tracking-[0.22em] uppercase font-mono ${current.badgeText}`}
          >
            {current.sub}
          </span>
        </div>
      </div>
    </div>
  );
}
