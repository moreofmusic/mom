'use client';

import React from 'react';
import { ArrowUpRight, Music, Radio, Mic, Disc, Sliders, Volume2, Sparkles, Check, Phone, Mail } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

interface MoreOfMusicLandingProps {
  onOpenLeadModal: (serviceName?: string) => void;
}

export default function MoreOfMusicLanding({ onOpenLeadModal }: MoreOfMusicLandingProps) {
  const musicDesks = [
    {
      num: '01',
      title: 'Sonic Branding & Audio Mnemonics',
      tagline: 'Bespoke 3-second sound logos and acoustic DNA.',
      desc: 'Crafting distinctive audio signatures that trigger instant brand recall. Audio mnemonics, UI sound design, and brand sonic guidelines for TV, app UI, and digital campaigns.',
      tags: ['Sonic Logos', 'Sound Guidelines', 'Audio Mnemonics', 'UI Sound Design'],
      icon: Radio,
    },
    {
      num: '02',
      title: 'Original Composition & Commercial Scoring',
      tagline: 'Cinematic musical scoring for advertising, OTT, and film.',
      desc: 'Custom background scores, orchestral arrangements, hybrid electronic soundtracks, and bespoke commercial themes tailored to your campaign’s emotional narrative.',
      tags: ['Commercial Scoring', 'Ad Jingles', 'Orchestral Themes', 'Trailer Music'],
      icon: Music,
    },
    {
      num: '03',
      title: 'Music Licensing & Sync Publishing',
      tagline: 'Global rights clearance and commercial sync placement.',
      desc: 'Access our curated sync library with worldwide commercial clearance for television, digital streaming, games, OTT originals, and global marketing activations.',
      tags: ['Sync Licensing', 'Rights Clearance', 'Global Publishing', 'OTT Placement'],
      icon: Disc,
    },
    {
      num: '04',
      title: 'Artist Management & Development',
      tagline: 'Career strategy, DSP releases, and brand ambassadorships.',
      desc: 'Full-stack management for musicians and sound creators, handling digital service provider distribution (Spotify, Apple Music), tour routing, and culturally aligned brand partnerships.',
      tags: ['Artist Roster', 'Tour Routing', 'DSP Strategy', 'Brand Endorsements'],
      icon: Mic,
    },
    {
      num: '05',
      title: 'Studio Production & Audio Mastering',
      tagline: 'Analog warmth meets Dolby Atmos spatial mastering.',
      desc: 'State-of-the-art studio facilities with vintage analog consoles, multi-track recording, vocal tuning, and broadcast-ready mastering engineered for maximum acoustic impact.',
      tags: ['Analog Mixing', 'Dolby Atmos', 'Vocal Tracking', 'Stereo Mastering'],
      icon: Sliders,
    },
    {
      num: '06',
      title: 'Live Arena & Tour Sound Direction',
      tagline: 'Immersive acoustic engineering for arenas and stadium crowds.',
      desc: 'Comprehensive live tour sound design, festival audio architecture, and experiential brand sound staging that commands attention and leaves lasting memory.',
      tags: ['Live Arena Sound', 'Festival Audio', 'Tour Direction', 'Stage Acoustics'],
      icon: Volume2,
    },
  ];

  const soundRoster = [
    {
      id: '01',
      title: 'Acoustic Signatures & Sonic Identity',
      category: 'Sonic Branding',
      stats: '+86% Memory Recall',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
      desc: 'Analog console tracking & 528 Hz harmonic mastering.',
    },
    {
      id: '02',
      title: 'Vocal Sessions & Songwriting Camp',
      category: 'Studio Production',
      stats: '150+ Produced Masters',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
      desc: 'Multi-genre songwriting, vocal engineering & production.',
    },
    {
      id: '03',
      title: 'Live Stadium Show & Arena Sound',
      category: 'Live & Touring',
      stats: '50K+ Live Attendees',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
      desc: 'Festival audio engineering and arena crowd resonance.',
    },
  ];

  const studioSteps = [
    {
      step: '01',
      title: 'Acoustic Discovery',
      desc: 'Decoding your brand personality, sonic frequency, and audience emotional triggers.',
    },
    {
      step: '02',
      title: 'Harmonic Prototyping',
      desc: 'Composing custom acoustic motifs, jingle themes, and multi-version scratch tracks.',
    },
    {
      step: '03',
      title: 'Studio Recording',
      desc: 'Recording live instruments and vocalists on high-end analog consoles with vintage microphones.',
    },
    {
      step: '04',
      title: 'Mastering & Sync Rights',
      desc: 'Final Dolby Atmos mastering, broadcast stem delivery, and global commercial sync clearance.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* ----------------- TOP HERO: MORE OF MUSIC ----------------- */}
      <section className="pt-4 sm:pt-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="border-b border-zinc-200 dark:border-white/10 pb-8 sm:pb-10 space-y-3">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-300 dark:border-white/15 dark:bg-white/[0.04] bg-white shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                MOM &bull; MORE OF MUSIC
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display uppercase tracking-tight dark:text-white text-zinc-950 leading-[1.08]">
              MORE OF MUSIC.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl font-bold text-cyan-600 dark:text-cyan-400 font-display">
              Creating Moments. Building Experiences. Bringing People Together.
            </p>

            {/* Detailed Brand Copy */}
            <div className="space-y-3 max-w-4xl text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
              <p>
                MOM (More of Music) is an artist management, music tour management and corporate event management company that brings talent, creativity and professional execution together to create memorable experiences.
              </p>
              <p>
                We specialise in managing artists, planning and executing music tours, and delivering engaging corporate events. From discovering and nurturing talent to coordinating large-scale performances and managing end-to-end corporate events, we take care of every detail that turns an idea into an unforgettable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- SECTION 1: THE SOUND DESKS ----------------- */}
      <section id="services" className="pt-2">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b dark:border-white/[0.08] border-zinc-200">
            <div className="space-y-2 max-w-3xl">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase dark:text-zinc-400 text-zinc-500 block font-mono">
                MORE OF MUSIC &bull; 6 SOUND DESKS
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight font-display dark:text-white text-zinc-950">
                THE SOUND DESKS
              </h2>
              <p className="text-xs sm:text-sm md:text-base dark:text-zinc-300 text-zinc-600 font-light leading-relaxed">
                From 3-second sonic logos to full commercial orchestral scoring and sync licensing &mdash; complete sonic architecture for brands and creators.
              </p>
            </div>

            <div className="flex items-center gap-3 pb-2">
              <div className="flex items-end gap-1 h-6 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-sm" title="Live Sonic Frequency">
                <span className="w-1 bg-cyan-400 rounded-full animate-pulse h-3" />
                <span className="w-1 bg-cyan-400 rounded-full animate-bounce h-5" />
                <span className="w-1 bg-cyan-400 rounded-full animate-pulse h-2" />
                <span className="w-1 bg-cyan-400 rounded-full animate-bounce h-6" />
                <span className="w-1 bg-cyan-400 rounded-full animate-pulse h-4" />
              </div>
              <span className="font-mono text-xs sm:text-sm dark:text-zinc-400 text-zinc-600 uppercase font-semibold">
                ANALOG WARMTH &bull; MODERN SOUND
              </span>
            </div>
          </div>

          {/* 6 Desks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {musicDesks.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.num}
                  className="pro-card p-8 sm:p-9 rounded-3xl flex flex-col justify-between group border border-zinc-200 dark:border-white/10 dark:hover:border-cyan-400/50 hover:border-black hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(6,182,212,0.2)] transition-all duration-400 shadow-sm relative overflow-hidden"
                >
                  {/* Subtle Traveling Border Shimmer on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      {/* Non-clickable Badge: NO OUTLINE */}
                      <span className="text-sm font-mono font-bold dark:text-white text-zinc-900 dark:bg-white/[0.08] bg-zinc-200/80 px-3 py-1 rounded-md group-hover:bg-cyan-500/15 group-hover:text-cyan-400 transition-colors duration-300">
                        DESK {d.num}
                      </span>
                      {/* Non-clickable Icon Box: NO OUTLINE */}
                      <div className="w-10 h-10 rounded-xl dark:bg-white/[0.06] bg-zinc-100 flex items-center justify-center dark:text-zinc-300 text-zinc-700 dark:group-hover:text-cyan-400 group-hover:text-zinc-950 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight dark:text-white text-zinc-950 mb-2 group-hover:text-cyan-400 transition-colors">
                      {d.title}
                    </h3>

                    <p className="text-xs sm:text-sm dark:text-zinc-300 text-zinc-700 font-semibold mb-3 font-mono">
                      {d.tagline}
                    </p>

                    <p className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed font-light mb-6">
                      {d.desc}
                    </p>

                    {/* Non-clickable Tags: NO OUTLINE */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t dark:border-white/[0.06] border-zinc-200">
                      {d.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] dark:bg-white/[0.05] bg-zinc-100 dark:text-zinc-300 text-zinc-700 font-medium hover:bg-white/10 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Clickable CTA with Crisp Outline & Shimmer Beam */}
                  <div className="pt-6 mt-6 border-t dark:border-white/[0.06] border-zinc-200">
                    <button
                      onClick={() => onOpenLeadModal(d.title)}
                      className="w-full py-3.5 rounded-xl border border-zinc-300 dark:border-white/20 dark:bg-white/[0.02] bg-zinc-50 dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:bg-zinc-950 hover:text-white hover:border-zinc-950 text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-sm active:scale-95 dark:text-white text-zinc-900 relative overflow-hidden group/btn"
                    >
                      <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out pointer-events-none" />
                      <span>Inquire for {d.title}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 2: THE SOUND ROSTER & PRODUCTIONS ----------------- */}
      <section id="roster" className="py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b dark:border-white/[0.08] border-zinc-200">
            <div className="space-y-2">
              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase dark:text-zinc-400 text-zinc-500 block font-mono">
                EXPERIENCE &bull; PRODUCTION ROSTER
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight dark:text-white text-zinc-950 font-display">
                THE SOUND ROSTER
              </h2>
            </div>

            <div className="pb-2">
              <span className="font-mono text-xs sm:text-sm dark:text-zinc-400 text-zinc-600 uppercase font-semibold">
                ANALOG CONSOLES &bull; ARENA TOURS &bull; COMMERCIAL SCORES
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {soundRoster.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLeadModal(item.title)}
                className="group relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 hover:border-black dark:hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(6,182,212,0.25)] transition-all duration-500 cursor-pointer shadow-lg flex flex-col justify-between aspect-[3/4] bg-zinc-950 active:scale-[0.98]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 group-hover:via-black/30 transition-all duration-500" />

                <div className="relative z-10 p-6 flex items-start justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-full font-semibold border border-white/10">
                    {item.category}
                  </span>

                  <div className="w-10 h-10 rounded-full border border-white/20 bg-black/70 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400 group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                    <ArrowUpRight className="w-4 h-4 transition-transform" />
                  </div>
                </div>

                <div className="relative z-10 p-6 sm:p-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-400/15 border border-cyan-400/25 text-[11px] font-mono text-cyan-400 font-bold shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>{item.stats}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white uppercase tracking-tight group-hover:text-zinc-100 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-300 font-mono tracking-wide">
                    {item.desc}
                  </p>

                  <div className="pt-2">
                    <div className="w-full py-2.5 rounded-xl border border-white/25 group-hover:border-white group-hover:bg-white group-hover:text-black text-center text-xs font-bold tracking-wider uppercase text-white transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group/btn shadow-md">
                      <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out pointer-events-none" />
                      <span>BOOK THIS SOUND DESK</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 3: THE 4-STEP STUDIO PROCESS ----------------- */}
      <section id="approach" className="py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          
          <div className="max-w-3xl mb-12 pb-6 border-b dark:border-white/[0.08] border-zinc-200 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase dark:text-zinc-400 text-zinc-500 block font-mono">
              METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight font-display dark:text-white text-zinc-950">
              STUDIO PROCESS
            </h2>
            <p className="text-xs sm:text-sm md:text-base dark:text-zinc-300 text-zinc-600 font-light leading-relaxed">
              How More of Music turns raw creative vision into an iconic commercial acoustic master.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioSteps.map((st) => (
              <div
                key={st.step}
                className="pro-card p-8 rounded-3xl flex flex-col justify-between group border border-zinc-200 dark:border-white/10 dark:hover:border-white hover:border-black transition-all duration-300 shadow-sm"
              >
                <div>
                  <span className="text-3xl font-mono font-bold dark:text-white text-zinc-950 block mb-4">
                    {st.step}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-display uppercase tracking-tight dark:text-white text-zinc-950 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed font-light">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t dark:border-white/[0.06] border-zinc-200 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Phase {st.step} of 4</span>
                  <Sparkles className="w-3.5 h-3.5 dark:text-white text-zinc-950" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ----------------- SECTION 4: DIRECT STUDIO BOOKING & CONTACT ----------------- */}
      <section id="contact" className="py-12 border-t dark:border-white/[0.08] border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          
          <div className="max-w-4xl mb-10 space-y-3">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase dark:text-zinc-400 text-zinc-500 block font-mono">
              DIRECT STUDIO CONSULTATION
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight dark:text-white text-zinc-950 font-display leading-[1.08]">
              THE SOUND OF YOUR BRAND BEGINS HERE.
            </h2>

            <p className="text-sm sm:text-base md:text-lg dark:text-zinc-300 text-zinc-700 font-light pt-2">
              Book a studio session, license music, or engineer custom sonic branding &middot;{' '}
              <a
                href="mailto:contact@momentsofmarketing.in"
                className="font-bold underline underline-offset-4 dark:text-white text-zinc-950 hover:opacity-80 transition-opacity"
              >
                contact@momentsofmarketing.in
              </a>{' '}
              &middot;{' '}
              <a
                href="tel:+919226042236"
                className="font-bold underline underline-offset-4 dark:text-white text-zinc-950 hover:opacity-80 transition-opacity"
              >
                +91 9226042236
              </a>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onOpenLeadModal('More of Music - Sonic Branding')}
              className="px-8 py-4 rounded-full btn-primary-glow text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2.5 cursor-pointer shadow-lg active:scale-95 transition-all duration-300 border border-transparent dark:hover:border-white/40 hover:border-black"
            >
              <span>BOOK MORE OF MUSIC STUDIO</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919226042236?text=Hi%20More%20of%20Music%20Team%2C%20I%20want%20to%20discuss%20Sonic%20Branding%20%2F%20Studio%20Session."
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border border-zinc-300 dark:border-white/20 hover:border-black dark:hover:border-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 active:scale-95 dark:text-white text-zinc-900 shadow-sm flex items-center gap-2"
            >
              <span>WHATSAPP STUDIO DIRECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
