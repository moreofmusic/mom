'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, MessageCircle, Phone, Mail } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import WhatsAppIcon from './WhatsAppIcon';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenLeadModal?: () => void;
  activeEntity?: 'marketing' | 'music';
  onSelectEntity?: (entity: 'marketing' | 'music') => void;
  onBackToGateway?: () => void;
  marketingTab?: 'home' | 'about' | 'services' | 'contact';
  onSelectMarketingTab?: (tab: 'home' | 'about' | 'services' | 'contact') => void;
}

export default function Navbar({
  onOpenLeadModal,
  activeEntity = 'marketing',
  onBackToGateway,
}: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  const isMusic = activeEntity === 'music' || pathname === '/music';

  // Determine active tab directly from current route
  let currentTab = 'about';
  if (pathname === '/about' || pathname === '/home') currentTab = 'about';
  else if (pathname === '/services') currentTab = 'services';
  else if (pathname === '/contact') currentTab = 'contact';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const marketingTabs: { id: string; path: string; label: string }[] = [
    { id: 'about', path: '/about', label: 'THE COMPANY' },
    { id: 'services', path: '/services', label: 'SERVICES' },
    { id: 'contact', path: '/contact', label: 'CONTACT' },
  ];

  const musicNavLinks = [
    { id: 'services', label: 'SOUND DESKS', href: '#services' },
    { id: 'roster', label: 'ROSTER', href: '#roster' },
    { id: 'approach', label: 'STUDIO PROCESS', href: '#approach' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black/[0.04] dark:border-white/[0.06] ${
        isScrolled
          ? 'dark:bg-black/75 bg-white/80 backdrop-blur-2xl backdrop-saturate-150 py-2 sm:py-2.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]'
          : 'dark:bg-black/55 bg-white/70 backdrop-blur-2xl backdrop-saturate-150 py-2.5 sm:py-3 shadow-[0_4px_24px_0_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_0_rgba(0,0,0,0.35)]'
      }`}
    >
      {/* Liquid Glass Top Specular Sheen (Apple iOS Style) */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 dark:via-white/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          
          {/* ================= LEFT BRAND BLOCK ================= */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink min-w-0">
            <Link
              href="/"
              className="flex items-center group py-0.5 flex-shrink-0 cursor-pointer text-left"
              title="MOM - Moments of Marketing & More of Music"
            >
              <img
                src={isMusic ? '/mom-logo-more-of-music.png' : '/mom-logo-moments-of-marketing.png'}
                alt="MOM Moments of Marketing Logo"
                suppressHydrationWarning
                className={`h-10 sm:h-12 md:h-14 lg:h-[56px] w-auto object-contain flex-shrink-0 transition-all duration-300 group-hover:scale-105 ${
                  mounted && theme === 'light' ? 'invert' : ''
                }`}
              />
            </Link>
          </div>

          {/* ================= RIGHT-ALIGNED NAVIGATION & UTILITY CONTROLS ================= */}
          <div className="flex items-center gap-5 sm:gap-7 lg:gap-9 ml-auto flex-shrink-0">
            {!isMusic ? (
              <nav className="hidden lg:flex items-center">
                <div className="flex items-center gap-7 xl:gap-9 flex-nowrap whitespace-nowrap">
                  {marketingTabs.map((tab) => {
                    const isActive = currentTab === tab.id;
                    return (
                      <Link
                        key={tab.id}
                        href={tab.path}
                        className={`relative py-1 text-xs sm:text-[13px] font-extrabold tracking-[0.22em] uppercase transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                          isActive
                            ? 'dark:text-white text-zinc-950 font-black'
                            : 'dark:text-zinc-400 text-zinc-500 dark:hover:text-white hover:text-zinc-950'
                        }`}
                      >
                        <span>{tab.label}</span>
                        {isActive && (
                          <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-zinc-950 dark:bg-white rounded-full animate-in fade-in duration-300" />
                        )}
                      </Link>
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
                    className="text-[12px] sm:text-[13px] font-extrabold tracking-[0.22em] uppercase transition-colors duration-300 py-1 dark:text-zinc-400 dark:hover:text-white text-zinc-500 hover:text-zinc-950"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            )}

            {/* ================= RIGHT UTILITY CONTROLS ================= */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20connect."
                target="_blank"
                rel="noreferrer"
                className="p-2 sm:p-2.5 rounded-full border border-black/10 dark:border-white/10 dark:bg-white/[0.05] bg-black/[0.03] backdrop-blur-xl hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-[0_0_12px_rgba(37,211,102,0.25)] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xs"
                title="Chat on WhatsApp (+91 9226042236)"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              </a>

              {/* Dark / Light Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/5 dark:border-white/10 dark:bg-white/[0.05] bg-black/[0.03] backdrop-blur-xl dark:text-zinc-300 dark:hover:text-white dark:hover:border-white/30 text-zinc-700 hover:text-zinc-950 hover:border-zinc-500 flex items-center justify-center transition-all cursor-pointer active:scale-95 active:rotate-180 shadow-xs"
                aria-label="Toggle theme"
                title={mounted ? `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} theme` : 'Toggle theme'}
                suppressHydrationWarning
              >
                {mounted ? (
                  theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-white transition-transform duration-500" />
                  ) : (
                    <Moon className="w-4 h-4 text-zinc-900 transition-transform duration-500" />
                  )
                ) : (
                  <span className="w-4 h-4 inline-block" />
                )}
              </button>

              {/* Mobile Menu Button - iPhone Liquid Glass Style */}
              <div className="flex lg:hidden items-center flex-shrink-0">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/5 dark:border-white/10 dark:bg-white/[0.05] bg-black/[0.03] backdrop-blur-xl flex items-center justify-center dark:text-white text-zinc-900 cursor-pointer active:scale-95 shadow-xs transition-all"
                  aria-label="Menu"
                >
                  {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 p-5 rounded-2xl border border-black/5 dark:border-white/10 dark:bg-black/80 bg-white/85 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.3)] animate-in fade-in">
          <div className="flex flex-col gap-2.5">
            {!isMusic ? (
              /* Mobile Tabs for Moments of Marketing */
              <div className="flex flex-col gap-2 py-2">
                {marketingTabs.map((tab) => {
                  const isActive = currentTab === tab.id;
                  return (
                    <Link
                      key={tab.id}
                      href={tab.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-center transition-all cursor-pointer ${
                        isActive
                          ? 'bg-zinc-950 text-white dark:bg-white dark:text-black shadow-md'
                          : 'border border-zinc-300 dark:border-white/15 dark:text-zinc-200 text-zinc-800 hover:bg-zinc-100 dark:hover:bg-white/10'
                      }`}
                    >
                      {tab.label}
                    </Link>
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
                  className="text-xs font-extrabold tracking-[0.22em] uppercase dark:text-zinc-300 dark:hover:text-white dark:border-white/[0.05] text-zinc-700 hover:text-zinc-950 py-2.5 border-b border-zinc-200"
                >
                  {link.label}
                </a>
              ))
            )}

            <div className="pt-3 flex flex-col gap-2.5 border-t border-zinc-200 dark:border-white/10">
              <div className="grid grid-cols-3 gap-2">
                <a
                  href="https://wa.me/919226042236?text=Hi%20MOM%20Team%2C%20I%20visited%20your%20website%20and%20want%20to%20connect."
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 px-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold hover:bg-emerald-500/20 transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+919226042236"
                  className="py-2 px-1 rounded-lg border border-zinc-300 dark:border-white/10 flex items-center justify-center gap-1.5 text-[11px] font-mono dark:text-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
                <a
                  href="mailto:contact@momagency.com"
                  className="py-2 px-1 rounded-lg border border-zinc-300 dark:border-white/10 flex items-center justify-center gap-1.5 text-[11px] font-mono dark:text-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
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
