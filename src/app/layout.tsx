import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://chigasi.in'),
  title: {
    default: 'CHIGASI (ಚಿಗಸಿ) — Loaded Bites | Bengaluru',
    template: '%s | CHIGASI',
  },
  description:
    'CHIGASI is Bengaluru\'s favourite loaded fries destination. Discover our signature loaded fries, peri peri fries, paneer burgers and street-food snacks at Babusapalya, Hennur Gardens.',
  keywords: [
    'CHIGASI',
    'Loaded Fries Bengaluru',
    'Peri Peri Fries Babusapalya',
    'Paneer Burger Hennur',
    'Fast Food Bengaluru',
    'Loaded Bites',
    'Street Food Bengaluru',
    'CHIGASI Bengaluru',
    'Loaded Fries Hennur Gardens',
    'Best Fries Bengaluru',
  ],
  authors: [{ name: 'CHIGASI' }],
  creator: 'CHIGASI',
  publisher: 'CHIGASI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://chigasi.in',
    siteName: 'CHIGASI',
    title: 'CHIGASI (ಚಿಗಸಿ) — Loaded Bites | Bengaluru',
    description:
      "NOT JUST FRIES. IT'S CHIGASI. Loaded with flavour. Made for cravings. Visit us at Babusapalya, Bengaluru.",
    images: [
      {
        url: '/images/hero/hero-loaded-fries.jpg',
        width: 1200,
        height: 630,
        alt: 'CHIGASI Loaded Fries — Bengaluru',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHIGASI (ಚಿಗಸಿ) — Loaded Bites | Bengaluru',
    description:
      "NOT JUST FRIES. IT'S CHIGASI. Loaded with flavour. Made for cravings.",
    images: ['/images/hero/hero-loaded-fries.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#050505" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'CHIGASI',
              alternateName: 'ಚಿಗಸಿ',
              description:
                'Fast food restaurant specialising in loaded fries, paneer burgers and street-food snacks in Bengaluru.',
              url: 'https://chigasi.in',
              telephone: '+917795263498',
              servesCuisine: ['Fast Food', 'Street Food', 'Indian Fusion'],
              priceRange: '₹',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '57/200, 6th Cross Road, P&T Layout, Babusapalya, Nanjappa Garden, Hennur Gardens',
                addressLocality: 'Bengaluru',
                addressRegion: 'Karnataka',
                postalCode: '560113',
                addressCountry: 'IN',
              },
              sameAs: ['https://www.instagram.com/chigasi_/'],
              hasMenu: 'https://chigasi.in#menu',
            }),
          }}
        />
      </head>
      <body className="bg-brand-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
