'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';

const stats = [
  { value: '8', label: 'Signature Items' },
  { value: '5★', label: 'Google Rating' },
  { value: '38', label: 'Happy Reviews' },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-brand-black relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 opacity-[0.03] rounded-full blur-3xl pointer-events-none"
        style={{ background: '#FFC400' }}
        aria-hidden="true"
      />

      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — image collage */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-brand-surface">
              <Image
                src="/images/gallery/chigasi-special.jpg"
                alt="CHIGASI Loaded Fries in front of the restaurant stall"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="bg-brand-black object-contain object-center"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating stall image */}
            <div
              className="absolute -bottom-6 -right-4 md:-right-8 w-36 md:w-48 aspect-square overflow-hidden border-4 border-brand-black bg-brand-surface shadow-2xl"
              aria-hidden="true"
            >
              <Image
                src="/images/gallery/restaurant-stall.jpg"
                alt="CHIGASI restaurant stall exterior"
                fill
                sizes="200px"
                className="object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Gold accent bar */}
            <div
              className="absolute top-0 left-0 w-1 h-24 bg-brand-gold"
              aria-hidden="true"
            />
          </motion.div>

          {/* Right — text */}
          <div className="lg:pl-4">
            <SectionHeading
              eyebrow="Our Story"
              title="MORE THAN JUST A"
              titleHighlight="QUICK BITE."
              className="mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col gap-5 text-brand-text-secondary text-base leading-relaxed"
            >
              <p>
                CHIGASI brings loaded bites, bold flavours and creative street-food combinations to Babusapalya. It is a place for cravings that call for something beyond an ordinary snack.
              </p>
              <p>
                Explore loaded fries, paneer burgers, peri peri fries and cheese-based snacks, with familiar favourites and combinations made for sharing.
              </p>
              <p>
                Find CHIGASI in Hennur Gardens, Bengaluru, and discover a bold, affordable fast-food experience built around loaded bites.
              </p>
            </motion.div>

            {/* Tagline pullquote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 pl-5 border-l-2 border-brand-gold"
            >
              <p
                className="text-brand-gold italic text-lg leading-snug"
                style={{ fontFamily: 'var(--font-bebas, sans-serif)', letterSpacing: '0.03em', fontSize: '1.3rem' }}
              >
                &ldquo;Every bite tells a story. Every flavour creates a memory.&rdquo;
              </p>
            </motion.blockquote>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 grid grid-cols-3 gap-4 border-t border-white/8 pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    className="text-brand-gold leading-none"
                    style={{
                      fontFamily: 'var(--font-bebas, sans-serif)',
                      fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-brand-text-muted text-xs uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
