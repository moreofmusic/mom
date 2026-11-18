'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, MessageCircle, Phone, Mail } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenLeadModal: () => void;
  activeEntity?: 'marketing' | 'music';
  onSelectEntity?: (entity: 'marketing' | 'music') => void;
  onBackToGateway?: () => void;
}

export default function Navbar({
  onOpenLeadModal,
  activeEntity = 'marketing',
  onSelectEntity,
  onBackToGateway,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'roster', 'services', 'pillars', 'approach', 'about', 'contact'];
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
    { id: 'services', label: activeEntity === 'marketing' ? 'THE 10 DESKS' : 'SOUND DESKS', href: '#services' },
    { id: 'pillars', label: activeEntity === 'marketing' ? 'PILLARS' : 'METHODOLOGY', href: activeEntity === 'marketing' ? '#pillars' : '#approach' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'dark:bg-black/95 bg-white/95 backdrop-blur-md dark:border-white/[0.08] border-zinc-200 py-3.5 shadow-sm'
          : 'dark:bg-black/60 bg-white/60 backdrop-blur-sm dark:border-white/[0.06] border-zinc-200/60 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Dual Division Wordmarks */}
          <button
            onClick={() => onBackToGateway ? onBackToGateway() : undefined}
            className="flex items-center gap-2.5 sm:gap-4 group py-1 flex-shrink-0 cursor-pointer text-left"
            title="Return to Portals Selection"
          >
            <img
              src="/mom-logo-transparent.png"
              alt="MOM Logo"
              className={`h-12 sm:h-16 md:h-18 lg:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                theme === 'light' ? 'invert' : ''
              }`}
            />
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-[11px] sm:text-sm md:text-[15px] font-black tracking-[0.14em] uppercase font-display dark:text-white text-zinc-950 group-hover:dark:text-zinc-200 transition-colors">
                More of Music
              </span>
              <span className="text-[8px] sm:text-[10px] md:text-[11px] font-semibold tracking-[0.16em] uppercase font-mono dark:text-zinc-400 text-zinc-500 mt-0.5">
                Moments of Marketing
              </span>
            </div>
          </button>

          {/* Dual Brand Switcher: Prominent Center Pill + Back to 2 Options Button */}
          <div className="hidden md:flex items-center gap-2">
            {onBackToGateway && (
              <button
                onClick={onBackToGateway}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-300 dark:border-white/15 dark:hover:border-white text-[10px] font-mono uppercase tracking-wider dark:text-zinc-400 dark:hover:text-white text-zinc-600 hover:text-zinc-950 transition-all active:scale-95 cursor-pointer shadow-sm"
                title="Switch back to initial 2-option selection screen"
              >
                &larr; 2 OPTIONS
              </button>
            )}

            {onSelectEntity && (
              <div className="flex items-center gap-1 p-1 rounded-full border border-zinc-300 dark:border-white/15 dark:bg-black/80 bg-zinc-100/90 backdrop-blur-md shadow-sm">
                <button
                  onClick={() => onSelectEntity('marketing')}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer active:scale-95 ${
                    activeEntity === 'marketing'
                      ? 'dark:bg-white dark:text-black bg-zinc-950 text-white shadow-md'
                      : 'dark:text-zinc-400 dark:hover:text-white text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  MOM &bull; Marketing
                </button>
                <button
                  onClick={() => onSelectEntity('music')}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer active:scale-95 ${
                    activeEntity === 'music'
                      ? 'dark:bg-white dark:text-black bg-zinc-950 text-white shadow-md'
                      : 'dark:text-zinc-400 dark:hover:text-white text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  MOM &bull; Music
                </button>
              </div>
            )}
          </div>

          {/* Clean Right Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-200 relative py-1 ${
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
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Direct Link (Outlined Clickable) */}
            <a
              href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20discuss%20our%20growth."
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
            {/* Mobile Entity Switcher */}
            {onBackToGateway && (
              <button
                onClick={() => {
                  onBackToGateway();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 px-3 rounded-lg border border-zinc-300 dark:border-white/15 text-xs font-mono uppercase tracking-wider text-center dark:text-zinc-300 text-zinc-700"
              >
                &larr; Switch to 2 Options Screen
              </button>
            )}

            {onSelectEntity && (
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-zinc-200 dark:border-white/10">
                <button
                  onClick={() => {
                    onSelectEntity('marketing');
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 rounded-lg text-xs font-bold uppercase tracking-wider ${
                    activeEntity === 'marketing'
                      ? 'bg-zinc-950 text-white dark:bg-white dark:text-black'
                      : 'text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10'
                  }`}
                >
                  MOM Marketing
                </button>
                <button
                  onClick={() => {
                    onSelectEntity('music');
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 rounded-lg text-xs font-bold uppercase tracking-wider ${
                    activeEntity === 'music'
                      ? 'bg-zinc-950 text-white dark:bg-white dark:text-black'
                      : 'text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10'
                  }`}
                >
                  MOM Music
                </button>
              </div>
            )}

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

            <div className="pt-4 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadModal();
                }}
                className="w-full py-3 rounded-xl dark:bg-white dark:text-black bg-zinc-950 text-white text-xs font-bold uppercase tracking-widest cursor-pointer active:scale-95 shadow-md"
              >
                LET&apos;S TALK ABOUT YOUR GROWTH
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+919226042236"
                  className="py-2 px-2.5 rounded-lg border border-zinc-300 dark:border-white/10 flex items-center justify-center gap-1.5 text-[11px] font-mono dark:text-zinc-300 text-zinc-700"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
                <a
                  href="mailto:Contact@momentsofmarketing.in"
                  className="py-2 px-2.5 rounded-lg border border-zinc-300 dark:border-white/10 flex items-center justify-center gap-1.5 text-[11px] font-mono dark:text-zinc-300 text-zinc-700"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Us</span>
                </a>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-zinc-200 dark:border-white/10 text-[11px] font-mono dark:text-zinc-400 text-zinc-500">
                <a
                  href="https://instagram.com/momentsofmarketingofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:underline"
                >
                  <InstagramIcon className="w-3.5 h-3.5 stroke-current" />
                  <span>@momentsofmarketingofficial</span>
                </a>
                <span>+91 9226042236</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
