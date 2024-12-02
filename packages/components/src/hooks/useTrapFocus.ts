import React, { useEffect, useRef } from 'react';

export const useTrapFocus = (containerRef: React.RefObject<HTMLElement>) => {
  const prevFocusableElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const focusableEls = Array.from(
      element.querySelectorAll<HTMLElement>(
        'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])',
      ),
    );

    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    let currentFocus: HTMLElement | null = null;

    // Store the previously focused element
    prevFocusableElementRef.current = document.activeElement as HTMLElement;

    // Set initial focus
    firstFocusableEl.focus();
    currentFocus = firstFocusableEl;

    const handleFocus = (e: FocusEvent) => {
      if (!focusableEls.includes(e.target as HTMLElement)) {
        e.preventDefault();
        if (currentFocus === firstFocusableEl) {
          lastFocusableEl.focus();
        } else {
          firstFocusableEl.focus();
        }
        currentFocus = document.activeElement as HTMLElement;
      } else {
        currentFocus = e.target as HTMLElement;
      }
    };

    // Add focus trap listener
    document.addEventListener('focus', handleFocus, true);

    return () => {
      // Cleanup and restore focus
      document.removeEventListener('focus', handleFocus, true);
      prevFocusableElementRef.current?.focus();
    };
  }, [containerRef]);
};
