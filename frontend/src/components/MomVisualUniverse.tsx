'use client';

import React, { useState, useRef } from 'react';
import { Plus, Sparkles, Music, TrendingUp, Volume2 } from 'lucide-react';

interface MomVisualUniverseProps {
  onOpenLeadModal: () => void;
}

export default function MomVisualUniverse({ onOpenLeadModal }: MomVisualUniverseProps) {
  const [mode, setMode] = useState<'marketing' | 'music'>('marketing');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isAudioActive, setIsAudioActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Synthesize a warm, harmonic agency sonic chime using Web Audio API
  const playSonicChime = (targetMode: 'marketing' | 'music') => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const freqs = targetMode === 'music' ? [528, 660, 792, 1056] : [440, 554, 659, 880];
      freqs.forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.06);
        gain.gain.setValueAtTime(0.04, ctx.currentTime + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.06 + 0.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.06);
        osc.stop(ctx.currentTime + i * 0.06 + 0.8);
      });
      setIsAudioActive(true);
      setTimeout(() => setIsAudioActive(false), 800);
    } catch {
      // Audio autoplay policy fallback
    }
  };

  const handleToggleMode = () => {
    const nextMode = mode === 'marketing' ? 'music' : 'marketing';
    setMode(nextMode);
    playSonicChime(nextMode);
  };

  // Parallax tilt on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 20, y: y * 20 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px] aspect-[4/5] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 border border-white/10 bg-[#070709] overflow-hidden select-none transition-transform duration-300 ease-out shadow-[0_25px_60px_rgba(0,0,0,0.95)] group"
      style={{
        transform: `perspective(1000px) rotateY(${mousePos.x * 0.65}deg) rotateX(${-mousePos.y * 0.65}deg)`,
      }}
    >
      {/* Background Subtle Monochrome Ambient Glow */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-[90px] pointer-events-none bg-white/[0.04] transition-all duration-700"
      />
      <div
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-[100px] pointer-events-none bg-white/[0.03] transition-all duration-700"
      />

      {/* Floating Accent Token: Top-Left Status Pill */}
      <div
        className="absolute top-5 sm:top-6 left-5 sm:left-6 flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/15 bg-black/80 backdrop-blur-md text-[9px] sm:text-[10px] tracking-wider font-mono text-white/90 z-20 shadow-lg"
        style={{ transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)` }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        <span className="font-semibold">{mode === 'marketing' ? 'MOMENTS PULSE' : 'SONIC FREQ'}</span>
      </div>

      {/* Floating Interactive Sound / Universe Orb in Monochrome White */}
      <button
        onClick={handleToggleMode}
        className={`absolute top-5 sm:top-6 right-5 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/15 bg-black/80 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 hover:border-white/40 transition-all z-20 shadow-xl cursor-pointer ${
          isAudioActive ? 'ring-4 ring-white/20' : ''
        }`}
        title="Toggle between Moments of Marketing & More of Music"
      >
        <div className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-tr from-white to-zinc-300 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.4)]">
          {mode === 'marketing' ? (
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black" />
          ) : (
            <Volume2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black animate-pulse" />
          )}
        </div>
      </button>

      {/* ----------------- CENTRAL CREATIVE UNIVERSE ANIMATION ----------------- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        
        {/* Pulsating Sonic Resonance Waves in Crisp White */}
        <div className={`absolute w-40 h-40 rounded-full border border-white/20 animate-ping opacity-25 ${isAudioActive ? 'border-white scale-125' : ''}`} />
        <div
          className="absolute w-56 h-56 rounded-full border border-white/10 animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute w-72 h-72 rounded-full border border-white/[0.04] opacity-35 animate-pulse"
          style={{ animationDuration: '6s' }}
        />

        {/* 3D Gyroscope Orbital Ellipses in Platinum White Wireframe */}
        {/* Orbit Ring 1 (Delicate White) */}
        <div
          className="absolute w-[270px] sm:w-[320px] h-[135px] sm:h-[160px] rounded-[50%] border border-white/30 pointer-events-none"
          style={{
            transform: `rotateX(65deg) rotateZ(35deg) translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)`,
            animation: 'spin 22s linear infinite',
          }}
        >
          {/* Orbiting Celestial Planet with Pure White Glow */}
          <div className="absolute -top-1.5 left-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
        </div>

        {/* Orbit Ring 2 (Silver / Platinum) */}
        <div
          className="absolute w-[240px] sm:w-[285px] h-[120px] sm:h-[142px] rounded-[50%] border border-white/20 pointer-events-none"
          style={{
            transform: `rotateX(60deg) rotateZ(-40deg) translate3d(${-mousePos.x * 0.6}px, ${-mousePos.y * 0.6}px, 0)`,
            animation: 'spin 28s linear infinite reverse',
          }}
        >
          {/* Orbiting Idea Sparkle */}
          <div className="absolute -bottom-1.5 left-1/3 w-2.5 h-2.5 rounded-full bg-zinc-200 shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
        </div>

        {/* Orbit Ring 3 (Outer Subtle Ring) */}
        <div
          className="absolute w-[215px] sm:w-[255px] h-[105px] sm:h-[125px] rounded-[50%] border border-white/15 pointer-events-none"
          style={{
            transform: `rotateX(75deg) rotateZ(10deg) translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
            animation: 'spin 34s linear infinite',
          }}
        >
          <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
        </div>

        {/* Floating Creative Badges */}
        <div
          className="absolute -top-10 sm:-top-12 right-8 sm:right-10 px-2.5 sm:px-3 py-1 rounded-full border border-white/15 bg-black/85 backdrop-blur-md flex items-center gap-1.5 text-[9px] font-mono text-zinc-300 shadow-xl"
          style={{ animation: 'float 5s ease-in-out infinite' }}
        >
          <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
          <span className="font-semibold">+340% ROAS</span>
        </div>

        <div
          className="absolute bottom-18 sm:bottom-20 left-5 sm:left-6 px-2.5 sm:px-3 py-1 rounded-full border border-white/15 bg-black/85 backdrop-blur-md flex items-center gap-1.5 text-[9px] font-mono text-zinc-300 shadow-xl"
          style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1.5s' }}
        >
          <Music className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
          <span className="font-semibold">Sonic Branding</span>
        </div>

        {/* Central Core: High-Definition Cloud & Live Audio Waves */}
        <div
          className="relative z-10 flex flex-col items-center justify-center transition-transform duration-500"
          style={{
            transform: `translate3d(${mousePos.x * 0.9}px, ${mousePos.y * 0.9}px, 0)`,
          }}
        >
          {/* Cloud Structure with Soft Ambient Glow (Elevated z-index above arch) */}
          <div className="relative z-20 w-48 sm:w-54 h-32 sm:h-36 flex items-center justify-center">
            
            {/* Luminous Inner Glow */}
            <div className="absolute inset-0 bg-white/[0.12] rounded-full blur-2xl animate-pulse" />

            {/* Cloud Puffs (Generous rounded solid cloud puffs) */}
            <div className="absolute -top-2.5 left-3 sm:left-4 w-28 sm:w-30 h-28 sm:h-30 bg-gradient-to-b from-white via-white to-zinc-100 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.3)]" />
            <div className="absolute -top-5 right-3 sm:right-4 w-30 sm:w-33 h-30 sm:h-33 bg-gradient-to-b from-white via-white to-zinc-100 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.3)]" />
            <div className="absolute bottom-0 inset-x-0 h-24 sm:h-26 bg-gradient-to-b from-white via-white to-zinc-100 rounded-full shadow-[0_12px_25px_rgba(0,0,0,0.35)]" />

            {/* Content inside cloud: Lifted safely into the center with ample padding */}
            <div className="relative z-30 flex flex-col items-center text-center space-y-1 px-3 pt-1 pb-1.5">
              
              {/* Animated Equalizer Waveform Bars in Solid Jet Black */}
              <div className="flex items-end gap-1 sm:gap-1.5 h-4 sm:h-5 mb-0.5">
                <span className="w-0.5 sm:w-1 bg-[#09090B] rounded-full animate-bounce" style={{ height: '65%', animationDuration: '0.8s' }} />
                <span className="w-0.5 sm:w-1 bg-[#18181B] rounded-full animate-bounce" style={{ height: '95%', animationDuration: '0.6s' }} />
                <span className="w-0.5 sm:w-1 bg-[#27272A] rounded-full animate-bounce" style={{ height: '45%', animationDuration: '1.1s' }} />
                <span className="w-0.5 sm:w-1 bg-[#09090B] rounded-full animate-bounce" style={{ height: '100%', animationDuration: '0.7s' }} />
                <span className="w-0.5 sm:w-1 bg-[#18181B] rounded-full animate-bounce" style={{ height: '75%', animationDuration: '0.9s' }} />
                <span className="w-0.5 sm:w-1 bg-[#27272A] rounded-full animate-bounce" style={{ height: '55%', animationDuration: '1.2s' }} />
              </div>

              {/* Brand Typography: Jet Black, High-Contrast & Crisp */}
              <span
                style={{ color: '#09090B' }}
                className="text-[11px] sm:text-xs font-black tracking-[0.18em] uppercase block font-sans select-none leading-tight"
              >
                {mode === 'marketing' ? 'MOM CREATIVE' : 'MORE OF MUSIC'}
              </span>

              {/* Subtitle: High-Contrast Charcoal with Safe Width */}
              <span
                style={{ color: '#27272A' }}
                className="text-[7.5px] sm:text-[8px] font-mono tracking-[0.12em] uppercase font-bold block select-none leading-tight pt-0.5"
              >
                Moments &bull; Brands &bull; Growth
              </span>
            </div>
          </div>

          {/* Elegant Arch Base with EST. 2026 (Safely layered BEHIND the cloud with z-0) */}
          <div className="relative z-0 w-22 sm:w-26 h-24 sm:h-28 bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-t-full -mt-7 border border-white/15 border-b-0 flex flex-col items-center justify-end pb-2.5">
            <span className="text-[8px] sm:text-[8.5px] font-mono tracking-widest uppercase text-zinc-400">
              EST. 2026
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Quote Mark in Soft White */}
      <div className="absolute bottom-14 left-6 text-2xl font-serif text-white/20 pointer-events-none select-none">
        &ldquo;
      </div>

      {/* Bottom-Right Date & Interactive Plus Button */}
      <div className="absolute right-5 sm:right-6 bottom-5 sm:bottom-6 flex flex-col items-end text-right z-30">
        <span className="text-xl sm:text-2xl font-serif font-light text-white leading-none">
          17
        </span>
        <span className="text-[10px] sm:text-[11px] tracking-widest2 uppercase text-zinc-400 font-semibold mt-0.5">
          November
        </span>
        <span className="text-[9px] font-mono text-zinc-500">
          2026
        </span>

        {/* Plus Button in Luminous Monochrome White */}
        <button
          onClick={() => {
            playSonicChime('music');
            onOpenLeadModal();
          }}
          className="mt-2.5 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/25 bg-black/85 hover:bg-white hover:text-black flex items-center justify-center text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] group cursor-pointer"
          aria-label="Book Growth Consultation"
          title="Open Growth Consultation"
        >
          <Plus className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}
