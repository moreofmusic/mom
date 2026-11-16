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
          ? 'dark:bg-black/90 bg-white/90 backdrop-blur-xl dark:border-white/[0.08] border-zinc-200 py-3.5 dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border-b'
          : 'bg-transparent py-5 sm:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo (Transparent & Smart Theme Adaptive) */}
          <a href="#home" className="flex items-center gap-3 sm:gap-4 group py-1">
            <div className="relative h-11 sm:h-13 md:h-14 flex items-center">
              <img
                src="/mom-logo-transparent.png"
                alt="MOM - More of Music & Moments of Marketing"
                className={`h-11 sm:h-13 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                  theme === 'light' ? 'invert' : ''
                }`}
              />
            </div>
            <div className="hidden sm:flex flex-col border-l dark:border-white/15 border-zinc-300 pl-3 justify-center">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase dark:text-white dark:group-hover:text-zinc-200 text-zinc-900 group-hover:text-black transition-colors">
                Moments of Marketing
              </span>
              <div className="flex items-center gap-1.5 pt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] sm:text-[10px] tracking-widest2 uppercase dark:text-zinc-400 text-zinc-500 font-mono">
                  Agency &bull; Q1 Live
                </span>
              </div>
            </div>
          </a>

          {/* Centered Spaced Navigation with Active Pill */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full border dark:border-white/[0.08] dark:bg-black/60 border-zinc-200 bg-white/80 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-widest2 transition-all duration-300 ${
                    isActive
                      ? 'dark:bg-white/10 dark:text-white dark:border-white/20 dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] bg-zinc-950 text-white border border-zinc-950 shadow-sm'
                      : 'dark:text-zinc-400 dark:hover:text-white text-zinc-600 hover:text-zinc-950 border border-transparent'
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
              className="p-2 rounded-full border dark:border-white/10 dark:hover:border-emerald-400/50 dark:text-zinc-400 dark:hover:text-emerald-400 border-zinc-300 text-zinc-600 hover:border-emerald-500/50 hover:text-emerald-600 transition-all hover:scale-105"
              title="Chat on WhatsApp (+91 9226042236)"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border dark:border-white/10 dark:text-zinc-400 dark:hover:text-white dark:hover:border-white/30 border-zinc-300 text-zinc-700 hover:text-zinc-950 hover:border-zinc-500 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} theme`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-900" />
              )}
            </button>

            {/* Outline CTA in Minimalist Monochrome */}
            <button
              onClick={onOpenLeadModal}
              className="px-5 py-2 rounded-lg editorial-btn-outline text-xs font-semibold cursor-pointer"
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
              className="p-2 dark:text-zinc-400 dark:hover:text-emerald-400 text-zinc-600 hover:text-emerald-600"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 dark:text-zinc-400 text-zinc-700 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-zinc-900" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 dark:text-white dark:border-white/15 text-zinc-900 border border-zinc-300 rounded-md cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-5 rounded-2xl border dark:border-white/10 dark:bg-black/95 border-zinc-200 bg-white/95 backdrop-blur-2xl shadow-2xl animate-in fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold tracking-widest2 dark:text-zinc-300 dark:hover:text-white dark:border-white/[0.05] text-zinc-700 hover:text-zinc-950 py-2 border-b border-zinc-200"
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
                className="w-full py-2.5 rounded-lg btn-primary-glow text-xs font-bold uppercase tracking-wider cursor-pointer"
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
