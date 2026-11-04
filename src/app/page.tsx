import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/Hero';
import { SignatureSpecials } from '@/components/sections/SignatureSpecials';
import { MenuSection } from '@/components/sections/MenuSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { LocationSection } from '@/components/sections/LocationSection';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <SignatureSpecials />
        <MenuSection />
        <AboutSection />
        <GallerySection />
        <ReviewsSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}

