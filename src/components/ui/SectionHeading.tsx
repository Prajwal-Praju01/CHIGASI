'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`flex flex-col gap-3 ${alignClass} ${className}`}
    >
      {eyebrow && (
        <span
          className="font-display text-sm tracking-widest text-brand-gold uppercase"
          style={{ fontFamily: 'var(--font-bebas, sans-serif)', letterSpacing: '0.15em' }}
        >
          {eyebrow}
        </span>
      )}
      <span className="gold-line" />
      <h2 className="section-heading text-white leading-none">
        {title}
        {titleHighlight && (
          <>
            {' '}
            <span className="text-gold">{titleHighlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="text-brand-text-secondary text-base md:text-lg max-w-xl leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
