// Utility functions for formatting and helpers

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatArea(area: number): string {
  return `${area.toLocaleString()} sq ft`;
}

export function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}
