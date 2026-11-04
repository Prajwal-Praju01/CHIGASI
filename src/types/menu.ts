// Menu item type definitions
export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  emoji: string;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: string;
  price: number;
  description: string;
  image: string | null;
  imageAlt: string;
  badge?: 'bestseller' | 'signature' | 'new' | 'spicy';
  isSignature?: boolean;
}

export interface RestaurantInfo {
  name: string;
  nameKannada: string;
  tagline: string;
  phone: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
    city: string;
    state: string;
    pin: string;
  };
  instagram: string;
  googleMaps: string;
  services: string[];
  openingTime: string;
}

