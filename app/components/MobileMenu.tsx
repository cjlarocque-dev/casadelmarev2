'use client';

import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface MobileMenuLink {
  href: string;
  label: string;
  className?: string;
}

export interface MobileMenuProps {
  links: MobileMenuLink[];
  buttonClassName?: string;
  panelClassName?: string;
  linkClassName?: string;
}

export default function MobileMenu({ links, buttonClassName, panelClassName, linkClassName }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const lastPointerToggleRef = useRef(0);
  const openedAtRef = useRef(0);

  const portalRoot = typeof document === 'undefined' ? null : document.body;

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
        className={`text-white text-3xl hover:text-amber-200 transition ${buttonClassName ?? ""}`}
        onPointerUp={handlePointerToggle}
      >
        ☰
      </button>

      {portalRoot &&
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
            <div className={`fixed left-4 right-4 top-[calc(env(safe-area-inset-top)+76px)] bg-blue-600 px-6 py-4 shadow-2xl rounded-lg z-[9999] md:hidden ${panelClassName ?? ""}`}>
              {links.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  className={`block py-3 text-white hover:text-amber-200 font-medium ${linkClassName ?? ''} ${link.className ?? ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </>,
          portalRoot
        )}
    </div>
  );
}
