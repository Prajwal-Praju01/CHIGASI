'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { restaurant } from '@/data/restaurant';

interface GalleryImage {
  src: string;
  alt: string;
  span?: 'wide' | 'tall' | 'normal';
}

const galleryImages: GalleryImage[] = [
  {
    src: '/images/gallery/chigasi-special.jpg',
    alt: 'CHIGASI Special Loaded Fries with crunchy toppings and spicy sauces',
    span: 'wide',
  },
  {
    src: '/images/gallery/loaded-fries-1.jpg',
    alt: 'CHIGASI Loaded Fries with peri peri sauce and white mayo drizzle',
    span: 'normal',
  },
  {
    src: '/images/gallery/loaded-fries-2.jpg',
    alt: 'CHIGASI Paneer Loaded Fries in a bowl with golden cheese sauce and fresh toppings',
    span: 'normal',
  },
  {
    src: '/images/gallery/fusion-fries.jpg',
    alt: 'Fusion Loaded Fries with saucy fries, juicy toppings, orange and white sauce drizzles',
    span: 'normal',
  },
  {
    src: '/images/gallery/burger-cross-section.jpg',
    alt: 'CHIGASI Paneer Burger cross-section showing layered paneer filling and cheese',
    span: 'normal',
  },
  {
    src: '/images/gallery/burger-top.jpg',
    alt: 'CHIGASI Paneer Burger with golden glazed sesame bun',
    span: 'normal',
  },
  {
    src: '/images/gallery/restaurant-stall.jpg',
    alt: 'CHIGASI restaurant stall exterior at Babusapalya, Bengaluru',
    span: 'wide',
  },
];

export function GallerySection() {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const openLightbox = (img: GalleryImage) => setLightbox(img);
  const closeLightbox = () => setLightbox(null);

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-brand-black relative"
      aria-labelledby="gallery-heading"
    >
      <div className="container-site">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Food Photography"
            title="THE"
            titleHighlight="GALLERY"
            subtitle="Real food. Real flavours. No filters needed."
          />
          <motion.a
            href={restaurant.instagram}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="btn-outline text-sm flex-shrink-0 self-start md:self-auto flex items-center gap-2"
            aria-label="Follow CHIGASI on Instagram"
          >
            <InstagramIcon size={15} aria-hidden={true} />
            Follow Our Food Journey
            <ExternalLink size={12} />
          </motion.a>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryImages.map((img, index) => (
            <motion.button
              key={img.src}
              onClick={() => openLightbox(img)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden bg-brand-surface group cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-gold ${
                img.span === 'wide'
                  ? 'col-span-2 row-span-1'
                  : img.span === 'tall'
                  ? 'col-span-1 row-span-2'
                  : 'col-span-1 row-span-1'
              }`}
              aria-label={`View full image: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs tracking-widest uppercase font-medium">
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-brand-text-muted text-sm mb-4">
            More food content on Instagram
          </p>
          <a
            href={restaurant.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
            aria-label="Follow CHIGASI on Instagram for more food content"
          >
            <InstagramIcon size={16} aria-hidden={true} />
            FOLLOW OUR FOOD JOURNEY
            <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Lightbox: ${lightbox.alt}`}
          >
            <button
              className="absolute top-5 right-5 text-white hover:text-brand-gold transition-colors p-2 z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-2xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
              style={{ aspectRatio: '4/3' }}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </motion.div>
            <p className="absolute bottom-6 left-0 right-0 text-center text-white/60 text-xs px-4">
              {lightbox.alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
