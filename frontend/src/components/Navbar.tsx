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

      const sections = ['home', 'roster', 'company', 'services', 'pillars', 'approach', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
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
    { id: 'roster', label: 'THE ROSTER', href: '#roster' },
    { id: 'company', label: 'THE COMPANY', href: '#company' },
    { id: 'services', label: 'THE 10 DESKS', href: '#services' },
    { id: 'pillars', label: 'PILLARS', href: '#pillars' },
    { id: 'approach', label: 'APPROACH', href: '#approach' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'dark:bg-black/95 bg-white/95 backdrop-blur-md dark:border-white/[0.08] border-zinc-200 py-4 shadow-sm'
          : 'dark:bg-black/60 bg-white/60 backdrop-blur-sm dark:border-white/[0.06] border-zinc-200/60 py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Editorial Wordmark: Exact Represent Style */}
          <a href="#home" className="flex items-center gap-3 group py-1">
            <img
              src="/mom-logo-transparent.png"
              alt="MOM Logo"
              className={`h-9 sm:h-11 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                theme === 'light' ? 'invert' : ''
              }`}
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight uppercase font-display dark:text-white text-zinc-950">
                MOM
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase font-mono dark:text-zinc-400 text-zinc-500 hidden sm:block">
                Moments of Marketing
              </span>
            </div>
          </a>

          {/* Clean Right Nav: Exact Represent Mgmt Style */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-[11px] xl:text-xs font-semibold tracking-[0.22em] uppercase transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'dark:text-white text-zinc-950 font-bold'
                      : 'dark:text-zinc-400 dark:hover:text-white text-zinc-500 hover:text-zinc-950'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] dark:bg-white bg-zinc-950" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Direct Connect */}
          <div className="hidden sm:flex items-center gap-4">
            {/* WhatsApp Direct Link (Outlined Clickable) */}
            <a
              href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20discuss%20our%20brand%20growth."
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full border border-zinc-300 dark:border-white/15 dark:hover:border-emerald-400/60 dark:text-zinc-400 dark:hover:text-emerald-400 text-zinc-600 hover:border-emerald-500/60 hover:text-emerald-600 transition-all hover:scale-105 active:scale-95"
              title="Chat on WhatsApp (+91 9226042236)"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Dark / Light Mode Toggle (Outlined Clickable) */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-zinc-300 dark:border-white/15 dark:text-zinc-400 dark:hover:text-white dark:hover:border-white/30 text-zinc-700 hover:text-zinc-950 hover:border-zinc-500 flex items-center justify-center transition-all cursor-pointer active:scale-95"
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} theme`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-900" />
              )}
            </button>

            {/* Inquire CTA Button (Outlined Clickable) */}
            <button
              onClick={onOpenLeadModal}
              className="px-5 py-2 rounded-full border border-zinc-900 dark:border-white/30 dark:bg-white dark:text-black bg-zinc-950 text-white dark:hover:bg-zinc-200 hover:bg-zinc-800 text-[11px] font-bold tracking-[0.18em] uppercase transition-all duration-300 active:scale-95 cursor-pointer shadow-sm"
            >
              LET&apos;S TALK
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
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
        <div className="lg:hidden mt-3 mx-4 p-6 rounded-2xl border dark:border-white/10 dark:bg-black/95 border-zinc-200 bg-white/95 backdrop-blur-2xl shadow-2xl animate-in fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold tracking-[0.2em] dark:text-zinc-300 dark:hover:text-white dark:border-white/[0.05] text-zinc-700 hover:text-zinc-950 py-2.5 border-b border-zinc-200"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal();
                }}
                className="w-full py-3 rounded-xl dark:bg-white dark:text-black bg-zinc-950 text-white text-xs font-bold uppercase tracking-widest cursor-pointer active:scale-95"
              >
                LET&apos;S TALK ABOUT YOUR GROWTH
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
