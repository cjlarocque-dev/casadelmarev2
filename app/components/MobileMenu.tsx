'use client';

import { useRef, useState } from 'react';

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
  const lastToggleRef = useRef(0);

  const toggleMenu = () => {
    const now = Date.now();
    if (now - lastToggleRef.current < 250) {
      return;
    }
    lastToggleRef.current = now;
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Toggle menu"
        className="text-white text-3xl hover:text-amber-200 transition"
        onClick={toggleMenu}
        onTouchEnd={(event) => {
          event.preventDefault();
          toggleMenu();
        }}
      >
        ☰
      </button>

      {isOpen && (
        <div className="fixed left-4 right-4 top-[88px] bg-blue-600 px-6 py-4 shadow-2xl rounded-lg z-[9999]">
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
      )}
    </div>
  );
}
