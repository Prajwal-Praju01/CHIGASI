'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { menuItems } from '@/data/menu';
import { formatPrice } from '@/lib/utils';

const signatureIds = [
  'chigasi-special-loaded-fries',
  'paneer-loaded-fries',
  'fusion-loaded-fries',
  'chilli-garlic-paneer-burger',
];

export function SignatureSpecials() {
  const specials = signatureIds
    .map((id) => menuItems.find((item) => item.id === id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const [feature, ...supporting] = specials;

  return (
    <section id="specials" className="relative overflow-hidden bg-brand-black py-20 md:py-28" aria-labelledby="specials-heading">
      <div className="container-site">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-3 text-brand-gold">02 / Signature drops</p>
            <h2 id="specials-heading" className="section-heading text-white">THE <span className="text-brand-gold">LOADED</span><br />LINE-UP.</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-brand-text-secondary">The dishes that define CHIGASI. Built for cravings, best enjoyed without a plan.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
          {feature && (
            <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative min-h-[420px] overflow-hidden bg-brand-surface sm:min-h-[560px]">
              {feature.image && <Image src={feature.image} alt={feature.imageAlt} fill sizes="(max-width: 1024px) 100vw, 60vw" className="bg-brand-black object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]" />}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/10 to-transparent" />
              <div className="absolute left-5 top-5 flex items-center gap-2">
                <span className="badge badge-gold">Bestseller</span>
                <span className="eyebrow bg-brand-black/70 px-2 py-1 text-white">01</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="eyebrow mb-2 text-brand-gold">CHIGASI original</p>
                    <h3 className="max-w-[min(90%,30rem)] font-display text-3xl leading-[.94] tracking-wide text-white sm:text-5xl lg:text-4xl xl:text-5xl">{feature.name}</h3>
                  </div>
                  <span className="font-display text-3xl text-brand-gold">{formatPrice(feature.price)}</span>
                </div>
              </div>
            </motion.article>
          )}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {supporting.map((item, index) => (
              <motion.article key={item.id} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="group grid grid-cols-[38%_1fr] overflow-hidden border border-white/10 bg-brand-surface transition-colors hover:border-brand-gold/50">
                <div className="relative min-h-[150px] overflow-hidden bg-brand-surface-2">
                  {item.image && <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 640px) 40vw, 20vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />}
                </div>
                <div className="flex flex-col justify-between p-4 sm:p-5">
                  <div>
                    <div className="mb-3 flex items-center justify-between"><span className="eyebrow text-brand-gold">0{index + 2}</span><ArrowUpRight size={16} className="text-brand-text-muted transition-colors group-hover:text-brand-gold" /></div>
                    <h3 className="font-display text-2xl leading-none tracking-wide text-white">{item.name}</h3>
                  </div>
                  <span className="mt-4 font-display text-xl text-brand-gold">{formatPrice(item.price)}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        <a href="#menu" className="btn-outline mt-8 w-fit">VIEW THE FULL MENU <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
