export function cn(...inputs: (string | undefined | null | false | 0)[]): string {
  return inputs.filter(Boolean).join(' ');
}

export function formatPrice(price: number): string {
  return `₹${price}`;
}

export function getPhoneDisplay(phone: string): string {
  // Convert +917795263498 to +91 77952 63498
  return phone.replace('+91', '+91 ').replace(/(\d{5})(\d{5})$/, '$1 $2');
}
