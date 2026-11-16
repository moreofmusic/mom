'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenLeadModal }: { onOpenLeadModal: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'pillars', 'services', 'approach', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'pillars', label: 'PILLARS', href: '#pillars' },
    { id: 'services', label: 'SERVICES', href: '#services' },
    { id: 'approach', label: 'APPROACH', href: '#approach' },
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo (Enlarged & Prominent) */}
          <a href="#home" className="flex items-center gap-4 group py-1">
            <div className="relative h-12 sm:h-15 md:h-16 flex items-center">
              <img
                src="/mom-logo.png"
                alt="MOM - More of Music & Moments of Marketing"
                className="h-12 sm:h-14 md:h-15 w-auto object-contain rounded transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:flex flex-col border-l border-white/15 pl-3.5 justify-center">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-white group-hover:text-zinc-200 transition-colors">
                Moments of Marketing
              </span>
              <div className="flex items-center gap-1.5 pt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] sm:text-[10px] tracking-widest2 uppercase text-zinc-400 font-mono">
                  Agency &bull; Q1 Live
                </span>
              </div>
            </div>
          </a>

          {/* Centered Spaced Navigation with Active White Pill */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full border border-white/[0.08] bg-black/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest2 transition-all duration-300 ${
                    isActive
                      ? 'bg-white/10 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                      : 'text-zinc-400 hover:text-white border border-transparent'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: WhatsApp Quick Click, Theme, & Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Quick Link */}
            <a
              href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20discuss%20our%20brand%20growth."
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-white/10 hover:border-emerald-400/50 text-zinc-400 hover:text-emerald-400 transition-all hover:scale-105"
              title="Chat on WhatsApp (+91 9226042236)"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-all"
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} theme`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-300" />
              )}
            </button>

            {/* Outline CTA in Minimalist Monochrome */}
            <button
              onClick={onOpenLeadModal}
              className="px-5 py-2 rounded-lg editorial-btn-outline text-xs font-semibold"
            >
              LET&apos;S TALK
            </button>
          </div>

          {/* Mobile Menu & Theme Switch */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="p-2 text-zinc-400 hover:text-emerald-400"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-400"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white border border-white/15 rounded-md"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-5 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-2xl shadow-2xl animate-in fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold tracking-widest2 text-zinc-300 hover:text-white py-2 border-b border-white/[0.05]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal();
                }}
                className="w-full py-2.5 rounded-lg btn-primary-glow text-xs font-bold uppercase tracking-wider"
              >
                LET&apos;S TALK
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
