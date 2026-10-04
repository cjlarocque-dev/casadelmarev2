'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface MobileMenuLink {
  href: string;
  label: string;
  className?: string;
}

interface MobileMenuProps {
  links: MobileMenuLink[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const lastPointerToggleRef = useRef(0);
  const openedAtRef = useRef(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePointerToggle = () => {
    const now = Date.now();
    if (now - lastPointerToggleRef.current < 250) {
      return;
    }
    lastPointerToggleRef.current = now;
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        openedAtRef.current = now;
      }
      return next;
    });
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Toggle menu"
        className="text-white text-3xl hover:text-amber-200 transition"
        onPointerUp={handlePointerToggle}
      >
        ☰
      </button>

      {isMounted &&
        isOpen &&
        createPortal(
          <>
            <button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 bg-black/35 z-[9998] md:hidden"
              onClick={() => {
                if (Date.now() - openedAtRef.current < 200) {
                  return;
                }
                setIsOpen(false);
              }}
            />
            <div className="fixed left-4 right-4 top-[calc(env(safe-area-inset-top)+76px)] bg-blue-600 px-6 py-4 shadow-2xl rounded-lg z-[9999] md:hidden">
              {links.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  className={`block py-3 text-white hover:text-amber-200 font-medium ${link.className ?? ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </>,
          document.body
        )}
    </div>
  );
}
