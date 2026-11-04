'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { menuCategories, menuItems } from '@/data/menu';
import { FoodCard } from '@/components/ui/FoodCard';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('fries');
  const category = menuCategories.find((item) => item.id === activeCategory);
  const filteredItems = menuItems.filter((item) => item.categoryId === activeCategory);

  return (
    <section id="menu" className="relative bg-brand-surface py-20 md:py-28" aria-labelledby="menu-heading">
      <div className="section-divider absolute left-0 right-0 top-0" />
      <div className="container-site">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-3 text-brand-gold">03 / Eat the whole menu</p>
            <h2 id="menu-heading" className="section-heading text-white">PICK YOUR<br /><span className="text-brand-gold">CRAVING.</span></h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-brand-text-secondary">No overthinking. Just bold, affordable bites made fresh for the moment.</p>
        </div>

        <div className="sticky top-[68px] z-20 -mx-5 mb-10 overflow-x-auto border-y border-white/10 bg-brand-surface/95 px-5 py-3 backdrop-blur-md no-scrollbar md:static md:mx-0 md:border-0 md:bg-transparent md:p-0">
          <div className="flex min-w-max gap-2" role="tablist" aria-label="Menu categories">
            {menuCategories.map((cat) => {
              const hasItems = menuItems.some((item) => item.categoryId === cat.id);
              if (!hasItems) return null;
              const isActive = activeCategory === cat.id;
              return (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)} role="tab" aria-selected={isActive} aria-controls={`panel-${cat.id}`} className={`flex min-h-11 items-center gap-2 border px-4 font-display text-sm tracking-[.08em] transition-colors ${isActive ? 'border-brand-gold bg-brand-gold text-brand-black' : 'border-white/15 text-brand-text-secondary hover:border-brand-gold/60 hover:text-brand-gold'}`}>
                  <span aria-hidden>{cat.emoji}</span>{cat.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4">
          <div><p className="font-display text-2xl tracking-wide text-white">{category?.name}</p><p className="text-sm text-brand-text-muted">{category?.description}</p></div>
          <span className="eyebrow text-brand-gold">{filteredItems.length} items</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} id={`panel-${activeCategory}`} role="tabpanel" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .25 }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => <FoodCard key={item.id} item={item} index={index} />)}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
          <p className="text-xs text-brand-text-muted">Prices shown are the current menu prices. Please confirm availability at the restaurant.</p>
          <a href="#location" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold transition-colors hover:text-white">VISIT CHIGASI <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
