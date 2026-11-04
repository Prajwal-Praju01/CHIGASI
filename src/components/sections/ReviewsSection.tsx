'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, MessageSquare } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { restaurant } from '@/data/restaurant';

// Verified review themes from actual Google reviews — no fake names or quotes
const reviewThemes = [
  {
    icon: '🍟',
    theme: 'Loaded Fries',
    description: 'Customers consistently love the loaded fries — generous portions, bold sauces and a unique flavour that keeps them coming back.',
  },
  {
    icon: '🍔',
    theme: 'Paneer Burger',
    description: 'The paneer burger earns high praise for being juicy and satisfying, with a flavour profile that stands out from typical fast food.',
  },
  {
    icon: '⚡',
    theme: 'Quick Service',
    description: 'Friendly staff and fast preparation make CHIGASI a reliable spot for a quick, quality meal without the wait.',
  },
  {
    icon: '💰',
    theme: 'Great Value',
    description: 'Generous food portions at honest prices — reviewers frequently highlight how much flavour they get for the price.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < Math.floor(rating) ? 'text-brand-gold fill-brand-gold' : 'text-brand-text-muted'}
          fill={i < Math.floor(rating) ? '#FFC400' : 'none'}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-brand-surface relative"
      aria-labelledby="reviews-heading"
    >
      <div className="section-divider absolute top-0 left-0 right-0" aria-hidden="true" />

      <div className="container-site">
        {/* Heading */}
        <div className="mb-12">
          <SectionHeading
            eyebrow="Google Reviews"
            title="WHAT CUSTOMERS"
            titleHighlight="SAY"
            subtitle="Real feedback from real CHIGASI customers on Google."
          />
        </div>

        {/* Rating hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 mb-14 p-6 md:p-8 border border-brand-gold/20 bg-brand-gold/5"
        >
          {/* Score */}
          <div className="flex flex-col items-center sm:items-start gap-1 sm:border-r sm:border-white/10 sm:pr-10">
            <span
              className="text-brand-gold leading-none"
              style={{
                fontFamily: 'var(--font-bebas, sans-serif)',
                fontSize: 'clamp(3rem, 10vw, 5rem)',
                letterSpacing: '0.02em',
              }}
            >
              5.0
            </span>
            <StarRating rating={5} />
            <span className="text-brand-text-muted text-xs mt-1 tracking-widest uppercase">
              Google Rating
            </span>
          </div>

          {/* Review count + CTA */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <MessageSquare size={20} className="text-brand-gold" aria-hidden="true" />
              <span className="text-white text-lg font-semibold">38 Google Reviews</span>
            </div>
            <p className="text-brand-text-secondary text-sm leading-relaxed max-w-sm">
              CHIGASI is rated 5 out of 5 on Google Maps by its customers. Click below to read all reviews.
            </p>
            <a
              href={restaurant.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm flex items-center gap-2 w-fit mt-1"
              aria-label="Read CHIGASI customer reviews on Google Maps"
            >
              READ CUSTOMER REVIEWS
              <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>

        {/* Review themes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {reviewThemes.map((theme, index) => (
            <motion.div
              key={theme.theme}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-5 bg-brand-surface-2 border border-white/6 hover:border-brand-gold/25 transition-colors"
            >
              <div className="text-3xl mb-3" aria-hidden="true">{theme.icon}</div>
              <h3
                className="text-white mb-2"
                style={{
                  fontFamily: 'var(--font-bebas, sans-serif)',
                  fontSize: '1.1rem',
                  letterSpacing: '0.05em',
                }}
              >
                {theme.theme}
              </h3>
              <p className="text-brand-text-secondary text-sm leading-relaxed">
                {theme.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand-text-muted text-xs mt-8 border-t border-white/5 pt-6"
        >
          Review themes are based on verified Google customer feedback. Individual names and quotes are not displayed to protect customer privacy.
        </motion.p>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" aria-hidden="true" />
    </section>
  );
}

