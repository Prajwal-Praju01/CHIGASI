'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const marqueeItems = ['LOADED BITES', 'BOLD FLAVOURS', 'STREET FOOD CULTURE', 'CHIGASI'];

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 80, damping: 20 });
  const springY = useSpring(pointerY, { stiffness: 80, damping: 20 });
  const imageX = useTransform(springX, [-0.5, 0.5], ['-1.5%', '1.5%']);
  const imageY = useTransform(springY, [-0.5, 0.5], ['-1.5%', '1.5%']);
  const dishX = useTransform(springX, [-0.5, 0.5], ['-4%', '4%']);
  const dishY = useTransform(springY, [-0.5, 0.5], ['-4%', '4%']);

  useEffect(() => {
    if (reduceMotion) return;
    const hero = heroRef.current;
    if (!hero) return;
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const bounds = hero.getBoundingClientRect();
      pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
      pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
    };
    const reset = () => {
      pointerX.set(0);
      pointerY.set(0);
    };
    hero.addEventListener('pointermove', onPointerMove);
    hero.addEventListener('pointerleave', reset);
    return () => {
      hero.removeEventListener('pointermove', onPointerMove);
      hero.removeEventListener('pointerleave', reset);
    };
  }, [pointerX, pointerY, reduceMotion]);

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (!element) return;
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - 72,
      behavior: 'smooth',
    });
  };

  return (
    <section ref={heroRef} id="home" className="hero-editorial relative min-h-[min(860px,100svh)] overflow-hidden bg-brand-black" aria-label="CHIGASI Hero">
      <div className="absolute inset-0">
        <motion.div className="hero-background absolute inset-0" style={{ x: reduceMotion ? 0 : imageX, y: reduceMotion ? 0 : imageY }}>
          <Image
            src="/images/hero/hero-loaded-fries.jpg"
            alt="CHIGASI loaded fries served in front of the restaurant stall"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_center] sm:object-center"
            quality={80}
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,.96)_0%,rgba(5,5,5,.72)_38%,rgba(5,5,5,.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#050505_0%,transparent_38%)]" />
        <div className="hero-grain absolute inset-0 opacity-30" aria-hidden="true" />
      </div>

      <div className="relative z-10 container-site flex min-h-[min(860px,100svh)] flex-col justify-end pb-12 pt-28 sm:pb-16 md:pb-24">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 1, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-brand-gold" />
              <span className="eyebrow text-brand-gold">Bengaluru / Hennur Gardens</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 1, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mb-2 font-display text-2xl tracking-[.2em] text-brand-gold sm:text-3xl"
            >
              CHI<span className="text-white">GA</span>SI
            </motion.p>

            <motion.h1
              initial={{ opacity: 1, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="hero-heading max-w-3xl text-white"
            >
              NOT JUST FRIES.
              <br />
              <span className="text-brand-gold">IT&apos;S CHIGASI.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 1, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 flex flex-wrap items-end gap-x-8 gap-y-5"
            >
              <div>
                <p className="font-display text-xl tracking-[.28em] text-white">LOADED BITES</p>
                <p className="mt-1 max-w-xs text-sm text-brand-text-secondary">Loaded with flavour. Made for cravings.</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => scrollTo('#menu')} className="btn-primary">
                  EXPLORE MENU <ArrowUpRight size={16} />
                </button>
                <button onClick={() => scrollTo('#location')} className="btn-outline hidden sm:inline-flex">
                  FIND US
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            aria-hidden="true"
            className="hero-dish absolute right-[6%] top-[17%] hidden h-[min(27vw,330px)] w-[min(27vw,330px)] overflow-hidden rounded-full border border-brand-gold/40 shadow-[0_30px_90px_rgba(0,0,0,.65)] lg:block"
            style={{ x: reduceMotion ? 0 : dishX, y: reduceMotion ? 0 : dishY }}
            initial={{ opacity: 0, scale: .85, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: .2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/gallery/loaded-fries-2.jpg"
              alt=""
              fill
              sizes="330px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-transparent to-brand-black/45" />
          </motion.div>

          <motion.div
            initial={{ opacity: 1, rotate: 8, scale: .92 }}
            animate={{ opacity: 1, rotate: 3, scale: 1 }}
            transition={{ duration: .8, delay: .35 }}
            className="hero-note relative z-10 hidden border border-brand-gold/40 bg-brand-black/55 p-5 backdrop-blur-sm lg:block"
          >
            <div className="mb-7 flex items-center justify-between">
              <span className="eyebrow text-brand-gold">01 / 07</span>
              <ArrowDownRight className="text-brand-gold" size={22} />
            </div>
            <p className="font-display text-4xl leading-[.9] text-white">BOLD<br /><span className="text-brand-gold">BITES.</span></p>
            <p className="mt-5 text-xs uppercase tracking-[.18em] text-brand-text-secondary">Street food, turned all the way up.</p>
          </motion.div>
        </div>
      </div>

      <div className="hero-marquee absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-y border-white/10 bg-brand-black/55 py-3 backdrop-blur-sm" aria-label="CHIGASI brand highlights">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="flex w-max gap-8 whitespace-nowrap"
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`} className="font-display text-sm tracking-[.2em] text-white">
              {item} <span className="ml-8 text-brand-gold">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
