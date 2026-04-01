'use client';

import { Menu, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Industries', href: '#industries' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-white/10 bg-black/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#" className="flex items-center gap-2 text-sm font-semibold tracking-[0.14em] text-white uppercase">
          <Zap className="h-4 w-4 text-accent" />
          JOSM Electrical
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-text-secondary transition hover:text-white">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-accent/70 bg-accent/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-accent/20"
          >
            Request Quote
          </a>
        </div>
        <button className="md:hidden" aria-label="Toggle navigation menu">
          <Menu className="h-5 w-5 text-white" />
        </button>
      </nav>
    </header>
  );
}
