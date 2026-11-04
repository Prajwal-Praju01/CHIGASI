'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { restaurant } from '@/data/restaurant';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#location' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = useCallback((href: string) => {
    setIsMobileOpen(false);
    setActiveSection(href.replace('#', ''));
    const target = document.querySelector(href);
    if (!target) return;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const sections = ['home', ...navLinks.map((link) => link.href.replace('#', ''))];
      const current = sections.find((id) => {
        const element = document.getElementById(id);
        return element && element.getBoundingClientRect().top <= 110 && element.getBoundingClientRect().bottom > 110;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-white/10 bg-brand-black/90 py-1 backdrop-blur-xl' : 'bg-transparent py-2'}`} role="banner">
        <div className="container-site">
          <div className="flex h-16 items-center justify-between">
            <button onClick={() => scrollTo('#home')} className="group text-left" aria-label="CHIGASI — Go to homepage">
              <span className="block font-display text-2xl tracking-[.12em] text-white">CHI<span className="text-brand-gold">GA</span>SI</span>
              <span className="block text-[.5rem] tracking-[.34em] text-brand-gold">LOADED BITES</span>
            </button>

            <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => scrollTo(link.href)} className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}>
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="hidden items-center gap-4 md:flex">
              <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary transition-colors hover:text-brand-gold" aria-label="CHIGASI on Instagram">
                <InstagramIcon size={18} aria-hidden />
              </a>
              <button onClick={() => scrollTo('#menu')} className="btn-primary py-2 px-4 text-sm">SEE MENU</button>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer" className="p-2 text-brand-text-secondary" aria-label="CHIGASI on Instagram">
                <InstagramIcon size={18} aria-hidden />
              </a>
              <button onClick={() => setIsMobileOpen((open) => !open)} className="p-2 text-white" aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMobileOpen}>
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-brand-black/80 backdrop-blur-sm md:hidden" onClick={() => setIsMobileOpen(false)}>
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="ml-auto flex h-full w-[min(84vw,340px)] flex-col border-l border-white/10 bg-brand-surface px-6 pb-8 pt-24"
              onClick={(event) => event.stopPropagation()}
              aria-label="Mobile navigation"
            >
              <p className="eyebrow mb-8 text-brand-gold">CHIGASI / MENU</p>
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * .05 }}
                    onClick={() => scrollTo(link.href)}
                    className="border-b border-white/10 py-4 text-left font-display text-3xl tracking-[.08em] text-white"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
              <button onClick={() => scrollTo('#menu')} className="btn-primary mt-auto justify-center">EXPLORE THE MENU</button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
