'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface HotDealModalProps {
  enabled: boolean;
  title: string;
  description: string;
  promoCode: string;
  dismissible?: boolean;
  showDelay?: number;
}

export default function HotDealModal({
  enabled,
  title,
  description,
  promoCode,
  dismissible = true,
  showDelay = 2000,
}: HotDealModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);
  const navigationTimeoutRef = useRef<NodeJS.Timeout>();
  const showTimeoutRef = useRef<NodeJS.Timeout>();
  const portalRoot = typeof document === 'undefined' ? null : document.body;

  useEffect(() => {
    if (!enabled || hasBeenDismissed) {
      return;
    }

    const resetNavigationTimer = () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }

      navigationTimeoutRef.current = setTimeout(() => {
        if (!isVisible && !hasBeenDismissed) {
          if (showTimeoutRef.current) {
            clearTimeout(showTimeoutRef.current);
          }
          showTimeoutRef.current = setTimeout(() => {
            setIsVisible(true);
          }, showDelay);
        }
      }, 1000);
    };

    const handleScroll = resetNavigationTimer;
    const handleMouseMove = resetNavigationTimer;
    const handleKeyPress = resetNavigationTimer;

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('keydown', handleKeyPress, { passive: true });

    resetNavigationTimer();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyPress);
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
      if (showTimeoutRef.current) {
        clearTimeout(showTimeoutRef.current);
      }
    };
  }, [enabled, hasBeenDismissed, isVisible, showDelay]);

  const handleDismiss = () => {
    setIsVisible(false);
    setHasBeenDismissed(true);
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
  };

  if (!portalRoot || !isVisible) {
    return null;
  }

  const bookNowUrl = `/casadelmare/book-now?or_code=${encodeURIComponent(promoCode)}`;

  return createPortal(
    <div className="fixed top-0 left-0 right-0 z-[10000] flex justify-center pointer-events-none">
      <div className="pointer-events-auto mt-[100px] mx-4 max-w-md w-full animate-in slide-in-from-top-4 fade-in duration-500">
        <div className="rounded-xl shadow-2xl overflow-hidden bg-[#d4a574]">
          <div className="px-6 py-8 text-white relative">
            {dismissible && (
              <button
                type="button"
                aria-label="Dismiss offer"
                onClick={handleDismiss}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition text-2xl leading-none"
              >
                ✕
              </button>
            )}

            <div className="pr-8">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-white/90">
                Limited Time Offer
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-snug">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/95">
                {description}
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={bookNowUrl}
                className="flex-1 rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.15em] text-[#d4a574] transition hover:bg-white/90"
              >
                Book Now
              </a>
              {dismissible && (
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-white/10 rounded-lg"
                >
                  Dismiss
                </button>
              )}
            </div>

            <p className="mt-4 text-xs text-white/85 text-center">
              Code: <span className="font-mono font-bold">{promoCode}</span>
            </p>
          </div>
        </div>
      </div>
    </div>,
    portalRoot
  );
}
