import React from 'react';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { restaurant } from '@/data/restaurant';

const footerNav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep-black border-t border-white/6" role="contentinfo">
      {/* Top section */}
      <div className="container-site py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div>
              <div
                className="text-white leading-none mb-1"
                style={{
                  fontFamily: 'var(--font-bebas, sans-serif)',
                  fontSize: '2.5rem',
                  letterSpacing: '0.08em',
                }}
              >
                CHI<span className="text-brand-gold">GA</span>SI
              </div>
              <div
                className="text-brand-gold tracking-[0.35em] text-xs uppercase"
              >
                LOADED BITES
              </div>
            </div>
            <p className="text-brand-text-secondary text-sm leading-relaxed max-w-xs">
              Every bite tells a story. Every flavour creates a memory. Come find us at Babusapalya, Bengaluru.
            </p>
            <a
              href={restaurant.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-text-secondary hover:text-brand-gold transition-colors text-sm w-fit group"
              aria-label="Follow CHIGASI on Instagram"
            >
              <InstagramIcon size={16} className="group-hover:text-brand-gold" aria-hidden={true} />
              <span>@chigasi_</span>
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-white text-sm tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', letterSpacing: '0.15em' }}
            >
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {footerNav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-brand-text-secondary hover:text-brand-gold transition-colors text-sm w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <h3
              className="text-white text-sm tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', letterSpacing: '0.15em' }}
            >
              Find Us
            </h3>
            <div className="flex flex-col gap-4">
              {/* Phone */}
              <a
                href={`tel:${restaurant.phone}`}
                className="flex items-start gap-3 text-brand-text-secondary hover:text-brand-gold transition-colors group"
                aria-label="Call CHIGASI"
              >
                <Phone
                  size={15}
                  className="mt-0.5 flex-shrink-0 group-hover:text-brand-gold transition-colors"
                />
                <span className="text-sm">+91 77952 63498</span>
              </a>

              {/* Address */}
              <a
                href={restaurant.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-brand-text-secondary hover:text-brand-gold transition-colors group"
                aria-label="Get directions to CHIGASI on Google Maps"
              >
                <MapPin
                  size={15}
                  className="mt-0.5 flex-shrink-0 group-hover:text-brand-gold transition-colors"
                />
                <address className="text-sm not-italic leading-relaxed">
                  {restaurant.address.line1}<br />
                  {restaurant.address.line2}<br />
                  {restaurant.address.line3}<br />
                  {restaurant.address.city}, {restaurant.address.state} {restaurant.address.pin}
                </address>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-site py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-brand-text-muted text-xs">
            <p>© {year} CHIGASI (ಚಿಗಸಿ). All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Made with ❤️ in Bengaluru
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

