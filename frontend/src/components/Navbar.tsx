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

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.301-.776.978-.952 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.675-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.927-2.232-.244-.587-.493-.507-.677-.516-.175-.008-.376-.01-.576-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.479 1.078 2.909 1.228 3.109.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.229 1.377.197 1.895.12.578-.087 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.075-.125-.276-.2-.577-.35zM12.04 2C6.502 2 2.008 6.493 2.008 12.03c0 1.77.462 3.498 1.34 5.02L2 22l5.099-1.338c1.474.804 3.136 1.228 4.94 1.228 5.537 0 10.03-4.493 10.03-10.03S17.577 2 12.04 2zm0 18.358c-1.536 0-3.043-.414-4.359-1.195l-.313-.186-3.238.85.864-3.158-.204-.325a8.293 8.293 0 01-1.272-4.384c0-4.597 3.74-8.337 8.338-8.337 4.597 0 8.337 3.74 8.337 8.337 0 4.598-3.74 8.338-8.338 8.338z" />
    </svg>
  );
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
                className="p-2 sm:p-2.5 rounded-full border border-black/5 dark:border-white/10 dark:bg-white/[0.05] bg-black/[0.03] backdrop-blur-xl dark:hover:border-white/30 dark:text-zinc-300 dark:hover:text-white text-zinc-700 hover:border-zinc-500 hover:text-zinc-950 transition-all hover:scale-105 active:scale-95 shadow-xs"
                title="Chat on WhatsApp (+91 9226042236)"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
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
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+919226042236"
                  className="py-2 px-2.5 rounded-lg border border-zinc-300 dark:border-white/10 flex items-center justify-center gap-1.5 text-[11px] font-mono dark:text-zinc-300 text-zinc-700"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
                <a
                  href="mailto:contact@momagency.com"
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
