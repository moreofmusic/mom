'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, MessageCircle, Phone, Mail } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import FlipBrandWordmark from './FlipBrandWordmark';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenLeadModal: () => void;
  activeEntity?: 'marketing' | 'music';
  onSelectEntity?: (entity: 'marketing' | 'music') => void;
  onBackToGateway?: () => void;
  marketingTab?: 'home' | 'about' | 'services' | 'contact';
  onSelectMarketingTab?: (tab: 'home' | 'about' | 'services' | 'contact') => void;
}

export default function Navbar({
  onOpenLeadModal,
  activeEntity = 'marketing',
  onSelectEntity,
  onBackToGateway,
  marketingTab = 'home',
  onSelectMarketingTab,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const marketingTabs: { id: 'home' | 'about' | 'services' | 'contact'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Brands and services' },
    { id: 'contact', label: 'Contact us' },
  ];

  const musicNavLinks = [
    { id: 'services', label: 'SOUND DESKS', href: '#services' },
    { id: 'roster', label: 'ROSTER', href: '#roster' },
    { id: 'approach', label: 'STUDIO PROCESS', href: '#approach' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b select-none ${
        isScrolled
          ? 'dark:bg-black/95 bg-white/95 backdrop-blur-md dark:border-white/[0.08] border-zinc-200 py-2 sm:py-2.5 shadow-sm'
          : 'dark:bg-black/90 bg-white/95 backdrop-blur-md dark:border-white/[0.08] border-zinc-200/90 py-2.5 sm:py-3'
      }`}
    >
      {/* Animated Ambient Shimmer Line at Bottom of Navbar */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] overflow-hidden pointer-events-none">
        <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-cyan-400/60 via-emerald-400/60 to-transparent animate-marquee-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          
          {/* ================= LEFT BRAND BLOCK (PREVIOUS SIGNATURE DESIGN) ================= */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink min-w-0">
            <button
              onClick={() => onBackToGateway ? onBackToGateway() : undefined}
              className="flex items-center gap-2 sm:gap-3 group py-0.5 flex-shrink min-w-0 cursor-pointer text-left"
              title="Return to Portals Selection"
            >
              <img
                src="/mom-logo-transparent.png"
                alt="MOM Logo"
                className={`h-8 sm:h-10 md:h-11 w-auto object-contain flex-shrink-0 transition-all duration-300 group-hover:scale-105 ${
                  theme === 'light' ? 'invert' : ''
                }`}
              />
              <FlipBrandWordmark size="md" />
            </button>
          </div>

          {/* ================= CENTER NAVIGATION (USER'S BUTTONS IN OUR SIGNATURE SLEEK CAPSULE) ================= */}
          {activeEntity === 'marketing' ? (
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 p-1 rounded-full border border-zinc-300 dark:border-white/15 dark:bg-black/80 bg-zinc-100/90 backdrop-blur-md shadow-sm flex-nowrap whitespace-nowrap">
                {marketingTabs.map((tab) => {
                  const isActive = marketingTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => onSelectMarketingTab ? onSelectMarketingTab(tab.id) : undefined}
                      className={`px-4 sm:px-5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-95 ${
                        isActive
                          ? 'dark:bg-white dark:text-black bg-zinc-950 text-white shadow-md'
                          : 'dark:text-zinc-400 dark:hover:text-white text-zinc-600 hover:text-zinc-950'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </nav>
          ) : (
            /* MUSIC NAVIGATION */
            <nav className="hidden lg:flex items-center gap-7">
              {musicNavLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-200 py-1 dark:text-zinc-400 dark:hover:text-white text-zinc-500 hover:text-zinc-950"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* ================= RIGHT UTILITY CONTROLS ================= */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            
            {/* Quick Switch to More of Music / Moments of Marketing */}
            {onSelectEntity && (
              <button
                onClick={() => onSelectEntity(activeEntity === 'marketing' ? 'music' : 'marketing')}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-300 dark:border-white/15 text-[10px] font-mono uppercase tracking-wider dark:text-zinc-400 dark:hover:text-white text-zinc-600 hover:text-zinc-950 transition-all cursor-pointer active:scale-95 shadow-sm"
                title={`Switch to ${activeEntity === 'marketing' ? 'More of Music' : 'Moments of Marketing'}`}
              >
                <span>{activeEntity === 'marketing' ? 'More of Music →' : 'Moments of Marketing →'}</span>
              </button>
            )}

            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20connect."
              target="_blank"
              rel="noreferrer"
              className="p-2 sm:p-2.5 rounded-full border border-zinc-300 dark:border-white/15 dark:hover:border-emerald-400/60 dark:text-zinc-400 dark:hover:text-emerald-400 text-zinc-600 hover:border-emerald-500/60 hover:text-emerald-600 transition-all hover:scale-105 active:scale-95 shadow-sm"
              title="Chat on WhatsApp (+91 9226042236)"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-300 dark:border-white/15 dark:text-zinc-400 dark:hover:text-white dark:hover:border-white/30 text-zinc-700 hover:text-zinc-950 hover:border-zinc-500 flex items-center justify-center transition-all cursor-pointer active:scale-95 active:rotate-180 shadow-sm"
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} theme`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300 transition-transform duration-500" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-900 transition-transform duration-500" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center flex-shrink-0">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 dark:text-white dark:border-white/20 text-zinc-900 border border-zinc-300 rounded-md cursor-pointer"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 p-5 rounded-2xl border dark:border-white/10 dark:bg-black/95 border-zinc-200 bg-white/95 backdrop-blur-2xl shadow-2xl animate-in fade-in">
          <div className="flex flex-col gap-2.5">
            {activeEntity === 'marketing' ? (
              /* Mobile Tabs for Moments of Marketing */
              <div className="flex flex-col gap-2 py-2">
                {marketingTabs.map((tab) => {
                  const isActive = marketingTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        if (onSelectMarketingTab) onSelectMarketingTab(tab.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-all ${
                        isActive
                          ? 'bg-zinc-950 text-white dark:bg-white dark:text-black shadow-md'
                          : 'border border-zinc-300 dark:border-white/15 dark:text-zinc-200 text-zinc-800'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Music Navigation Links */
              musicNavLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-semibold tracking-[0.2em] dark:text-zinc-300 dark:hover:text-white dark:border-white/[0.05] text-zinc-700 hover:text-zinc-950 py-2.5 border-b border-zinc-200"
                >
                  {link.label}
                </a>
              ))
            )}

            <div className="pt-3 flex flex-col gap-2.5 border-t border-zinc-200 dark:border-white/10">
              <div className="grid grid-cols-2 gap-2">
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

              <div className="flex items-center justify-between pt-1 text-[11px] font-mono dark:text-zinc-400 text-zinc-500">
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
