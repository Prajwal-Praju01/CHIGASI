'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, ExternalLink, Clock, Car, Utensils, Package } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { restaurant } from '@/data/restaurant';

const serviceIcons: Record<string, React.ReactNode> = {
  'Dine-in': <Utensils size={16} />,
  'Drive-through': <Car size={16} />,
  'No-Contact Delivery': <Package size={16} />,
};

export function LocationSection() {
  return (
    <section
      id="location"
      className="py-20 md:py-28 bg-brand-black relative"
      aria-labelledby="location-heading"
    >
      <div className="container-site">
        {/* Heading */}
        <div className="mb-12">
          <SectionHeading
            eyebrow="Visit Us"
            title="FIND"
            titleHighlight="CHIGASI"
            subtitle="Come hungry. Leave with a flavour memory."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left — Contact info */}
          <div className="flex flex-col gap-8">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3
                className="text-brand-text-muted text-xs tracking-widest uppercase mb-4"
                style={{ letterSpacing: '0.15em' }}
              >
                We Offer
              </h3>
              <div className="flex flex-wrap gap-3">
                {restaurant.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-2 px-4 py-2 border border-brand-gold/30 text-brand-gold text-sm bg-brand-gold/5"
                  >
                    <span aria-hidden="true">{serviceIcons[service]}</span>
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Opening time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-start gap-4 p-5 border border-white/8 bg-brand-surface"
            >
              <Clock size={20} className="text-brand-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-white font-semibold text-sm mb-1">Opening Hours</p>
                <p className="text-brand-text-secondary text-sm">{restaurant.openingTime}</p>
                <p className="text-brand-text-muted text-xs mt-1">
                  Closing time may vary. Check Google Maps for live status.
                </p>
              </div>
            </motion.div>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col gap-5"
            >
              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-brand-gold flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-brand-text-muted text-xs uppercase tracking-widest mb-1">Call Us</p>
                  <a
                    href={`tel:${restaurant.phone}`}
                    className="text-white hover:text-brand-gold transition-colors text-lg font-semibold"
                    aria-label="Call CHIGASI at +91 77952 63498"
                  >
                    +91 77952 63498
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-brand-gold flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-brand-text-muted text-xs uppercase tracking-widest mb-1">Address</p>
                  <address className="not-italic text-brand-text-secondary text-sm leading-relaxed">
                    {restaurant.address.line1}<br />
                    {restaurant.address.line2}<br />
                    {restaurant.address.line3}<br />
                    {restaurant.address.city}, {restaurant.address.state} {restaurant.address.pin}
                  </address>
                  <a
                    href={restaurant.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand-gold hover:text-brand-gold-warm text-sm mt-3 transition-colors"
                    aria-label="Get directions to CHIGASI on Google Maps"
                  >
                    Get Directions
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <InstagramIcon size={18} className="text-brand-gold flex-shrink-0 mt-1" aria-hidden={true} />
                <div>
                  <p className="text-brand-text-muted text-xs uppercase tracking-widest mb-1">Instagram</p>
                  <a
                    href={restaurant.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-gold transition-colors text-sm flex items-center gap-1.5"
                    aria-label="Follow CHIGASI on Instagram"
                  >
                    @chigasi_
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={restaurant.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
                aria-label="Open CHIGASI location in Google Maps"
              >
                <MapPin size={15} />
                OPEN IN MAPS
              </a>
              <a
                href={`tel:${restaurant.phone}`}
                className="btn-outline flex items-center gap-2"
                aria-label="Call CHIGASI"
              >
                <Phone size={15} />
                CALL NOW
              </a>
            </motion.div>
          </div>

          {/* Right — Restaurant image + map embed placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Restaurant image */}
            <div className="relative aspect-video overflow-hidden bg-brand-surface">
              <Image
                src="/images/hero/restaurant-exterior.jpg"
                alt="CHIGASI restaurant stall exterior at Babusapalya, Bengaluru"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent pointer-events-none" />
              {/* Location tag */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-brand-black/80 backdrop-blur-sm px-3 py-2">
                <MapPin size={14} className="text-brand-gold" aria-hidden="true" />
                <span className="text-white text-xs">Babusapalya, Bengaluru</span>
              </div>
            </div>

            {/* Map link card */}
            <a
              href={restaurant.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-brand-surface border border-white/8 hover:border-brand-gold/30 transition-colors group"
              aria-label="View CHIGASI on Google Maps"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-gold/10 flex items-center justify-center">
                  <MapPin size={18} className="text-brand-gold" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">View on Google Maps</p>
                  <p className="text-brand-text-muted text-xs mt-0.5">Get turn-by-turn directions</p>
                </div>
              </div>
              <ExternalLink size={16} className="text-brand-text-muted group-hover:text-brand-gold transition-colors" aria-hidden="true" />
            </a>

            {/* Website QR */}
            <div className="flex items-center gap-5 border border-brand-gold/25 bg-brand-gold/5 p-4 sm:p-5">
              <div className="shrink-0 bg-white p-2">
                <Image
                  src="/images/branding/chigasi-website-qr.svg"
                  alt="QR code to open the CHIGASI website"
                  width={112}
                  height={112}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="eyebrow text-brand-gold">Scan / Save / Share</p>
                <p className="mt-2 font-display text-2xl leading-none tracking-wide text-white">
                  KEEP CHIGASI<br />CLOSE.
                </p>
                <p className="mt-2 max-w-[220px] text-xs leading-relaxed text-brand-text-secondary">
                  Scan to open our menu, location and latest food drops.
                </p>
                <a
                  href="/images/branding/chigasi-website-qr.svg"
                  download="chigasi-website-qr.svg"
                  className="mt-3 inline-flex text-xs font-semibold tracking-[.12em] text-brand-gold transition-colors hover:text-white"
                >
                  DOWNLOAD QR
                </a>
              </div>
            </div>

            {/* Kannada name display */}
            <div className="p-5 bg-brand-surface border border-white/8 text-center">
              <p
                className="text-brand-gold"
                style={{ fontSize: '2rem', fontFamily: 'serif', lineHeight: 1.3 }}
                lang="kn"
                aria-label="CHIGASI in Kannada script"
              >
                ಚಿಗಸಿ
              </p>
              <p className="text-brand-text-muted text-xs mt-1 tracking-widest uppercase">
                CHIGASI — Loaded Bites
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
