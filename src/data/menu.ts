import type { MenuCategory, MenuItem } from '@/types/menu';

export const menuCategories: MenuCategory[] = [
  {
    id: 'fries',
    name: 'Fries',
    description: 'Classic and flavoured fries done right',
    emoji: '🍟',
  },
  {
    id: 'loaded-fries',
    name: 'Loaded Fries',
    description: "CHIGASI's signature loaded creations",
    emoji: '🔥',
  },
  {
    id: 'burgers',
    name: 'Burgers',
    description: 'Juicy paneer burgers packed with flavour',
    emoji: '🍔',
  },
  {
    id: 'snacks',
    name: 'Snacks',
    description: 'Perfect bites to share or savour solo',
    emoji: '🧀',
  },
];

export const menuItems: MenuItem[] = [
  // --- FRIES ---
  {
    id: 'classic-fries',
    categoryId: 'fries',
    name: 'Classic Fries',
    price: 59,
    description: 'Crispy golden fries seasoned to perfection. Simple. Addictive. Essential.',
    image: '/images/menu/classic-fries.png',
    imageAlt: 'Classic crispy golden fries',
    badge: undefined,
  },
  {
    id: 'peri-peri-fries',
    categoryId: 'fries',
    name: 'Peri Peri Fries',
    price: 89,
    description:
      'Loaded with bold peri peri seasoning, drizzled with spicy sauce and a cool white mayo finish.',
    image: '/images/menu/peri-peri-fries.jpg',
    imageAlt: 'Peri Peri Fries loaded with orange sauce and white drizzle in a paper bowl',
    badge: 'spicy',
  },

  // --- LOADED FRIES ---
  {
    id: 'chigasi-special-loaded-fries',
    categoryId: 'loaded-fries',
    name: 'CHIGASI Special Loaded Fries (Crunchyy + Spicyyy)',
    price: 139,
    description:
      "CHIGASI's signature loaded fries with a satisfying crunch, spicy sauces and bold toppings in every bite.",
    image: '/images/menu/chigasi-special-loaded-fries.jpg',
    imageAlt:
      'CHIGASI Special Loaded Fries with crunchy toppings, spicy orange and white sauces, and branded bowl',
    badge: 'bestseller',
    isSignature: true,
  },
  {
    id: 'paneer-loaded-fries',
    categoryId: 'loaded-fries',
    name: 'Paneer Loaded Fries (Crispyyy + Spicy)',
    price: 159,
    description:
      'Crispy paneer, golden fries, bold spicy sauces and fresh toppings in every loaded bite.',
    image: '/images/menu/paneer-loaded-fries.jpg',
    imageAlt:
      'Paneer Loaded Fries with crispy spicy paneer, golden fries, orange sauce, white sauce and fresh toppings',
    badge: 'signature',
    isSignature: true,
  },
  {
    id: 'fusion-loaded-fries',
    categoryId: 'loaded-fries',
    name: 'Fusion Loaded Fries (Saucyy + Juicyy)',
    price: 129,
    description:
      'Saucy, juicy loaded fries layered with bold flavours, crunchy toppings and a generous drizzle.',
    image: '/images/menu/fusion-loaded-fries.jpg',
    imageAlt:
      'Fusion Loaded Fries with saucy fries, juicy toppings, orange and white sauce drizzles',
    badge: 'signature',
    isSignature: true,
  },
  {
    id: 'desi-paneer-loaded-fries',
    categoryId: 'loaded-fries',
    name: 'Desi Paneer Loaded Fries',
    price: 159,
    description:
      'Paneer loaded fries with a desi twist. Bold Indian-inspired sauces and toppings make every bite a flavour memory.',
    image: null,
    imageAlt: 'Desi Paneer Loaded Fries with Indian-style sauces and paneer',
    badge: undefined,
  },

  // --- BURGERS ---
  {
    id: 'chilli-garlic-paneer-burger',
    categoryId: 'burgers',
    name: 'Chilli Garlic Paneer Burger',
    price: 89,
    description:
      'Juicy paneer patty with fiery chilli garlic sauce, melted cheese and fresh fillings in a toasted sesame bun.',
    image: '/images/menu/paneer-burger-1.jpg',
    imageAlt: 'Chilli Garlic Paneer Burger with sesame bun held in hand at CHIGASI stall',
    badge: 'bestseller',
    isSignature: true,
  },

  // --- SNACKS ---
  {
    id: 'corn-cheese-nuggets',
    categoryId: 'snacks',
    name: 'Corn & Cheese Nuggets',
    price: 70,
    description:
      'Golden nuggets packed with sweet corn and melted cheese. Crispy outside, gooey inside.',
    image: '/images/menu/corn-cheese-nuggets.png',
    imageAlt: 'Corn and Cheese Nuggets golden and crispy',
    badge: undefined,
  },
];
