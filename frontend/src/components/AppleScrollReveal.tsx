'use client';

import { useEffect } from 'react';

/**
 * AppleScrollReveal
 * Implements Apple's signature smooth viewport entrance scroll animations
 * (as seen on apple.com product landing pages).
 * Uses high-performance IntersectionObserver with Apple's cubic-bezier(0.16, 1, 0.3, 1) timing.
 */
export default function AppleScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback: immediately show elements if IntersectionObserver is unsupported
      document.querySelectorAll('.apple-reveal').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -25px 0px',
      }
    );

    const elements = document.querySelectorAll('.apple-reveal');
    elements.forEach((el) => observer.observe(el));

    // Observe any dynamically mounted elements
    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll('.apple-reveal:not(.is-visible)');
      newElements.forEach((el) => observer.observe(el));
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
