'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, MessageCircle, Phone, Mail } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
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
  const { theme, toggleTheme } = useTheme();

  const isMusic = activeEntity === 'music' || pathname === '/music';

  // Determine active tab directly from current route
  let currentTab = 'home';
  if (pathname === '/about') currentTab = 'about';
  else if (pathname === '/services') currentTab = 'services';
  else if (pathname === '/contact') currentTab = 'contact';
  else if (pathname === '/home') currentTab = 'home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const marketingTabs: { id: string; path: string; label: string }[] = [
    { id: 'home', path: '/home', label: 'Home' },
    { id: 'about', path: '/about', label: 'About Us' },
    { id: 'services', path: '/services', label: 'Brands and services' },
    { id: 'contact', path: '/contact', label: 'Contact us' },
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
        <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-emerald-500/40 via-cyan-500/40 to-transparent animate-marquee-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          
          {/* ================= LEFT BRAND BLOCK ================= */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink min-w-0">
            <Link
              href={isMusic ? '/music' : '/home'}
              className="flex items-center group py-0.5 flex-shrink-0 cursor-pointer text-left"
              title={isMusic ? 'More of Music Home' : 'Moments of Marketing Home'}
            >
              <img
                src="/mom-logo-transparent.png"
                alt="MOM Logo"
                className={`h-10 sm:h-12 md:h-14 lg:h-[60px] w-auto object-contain flex-shrink-0 transition-all duration-300 group-hover:scale-105 ${
                  theme === 'light' ? 'invert' : ''
                }`}
              />
            </Link>
          </div>

          {/* ================= CENTER NAVIGATION ================= */}
          {!isMusic ? (
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center gap-1.5 p-1.5 rounded-full border border-zinc-300 dark:border-white/15 dark:bg-black/80 bg-zinc-100/90 backdrop-blur-md shadow-sm flex-nowrap whitespace-nowrap">
                {marketingTabs.map((tab) => {
                  const isActive = currentTab === tab.id;
                  return (
                    <Link
                      key={tab.id}
                      href={tab.path}
                      className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-bold tracking-wide uppercase transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-95 ${
                        isActive
                          ? 'dark:bg-white dark:text-black bg-zinc-950 text-white shadow-md'
                          : 'dark:text-zinc-400 dark:hover:text-white text-zinc-600 hover:text-zinc-950'
                      }`}
                    >
                      {tab.label}
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
                  className="text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-200 py-1 dark:text-zinc-400 dark:hover:text-white text-zinc-500 hover:text-zinc-950"
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
                      className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-center transition-all cursor-pointer ${
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
                  href="mailto:contact@momentsofmarketing.in"
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
