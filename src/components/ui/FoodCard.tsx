'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { MenuItem } from '@/types/menu';
import { formatPrice } from '@/lib/utils';

interface FoodCardProps {
  item: MenuItem;
  index?: number;
}

const badgeLabels: Record<NonNullable<MenuItem['badge']>, string> = {
  bestseller: 'Bestseller',
  signature: 'Signature',
  new: 'New',
  spicy: '🌶 Spicy',
};

export function FoodCard({ item, index = 0 }: FoodCardProps) {
  return (
    <motion.article initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: .4, delay: index * .06 }} whileHover={{ y: -7 }} className="food-card group">
      <div className="relative h-56 overflow-hidden bg-brand-surface-2 sm:h-64">
        {item.image ? <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 640px) 100vw, 50vw" className="food-card-image object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" /> : <div className="flex h-full flex-col items-center justify-center gap-2 text-brand-text-muted"><span className="text-4xl opacity-30" aria-hidden>🍟</span><span className="eyebrow">Photo coming soon</span></div>}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent" />
        {item.badge && <span className="badge badge-gold absolute left-3 top-3">{badgeLabels[item.badge]}</span>}
        <span className="absolute bottom-3 right-3 bg-brand-black/80 px-2 py-1 font-display text-xl text-brand-gold backdrop-blur-sm">{formatPrice(item.price)}</span>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-display text-2xl leading-none tracking-wide text-white">{item.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-text-secondary">{item.description}</p>
      </div>
    </motion.article>
  );
}
