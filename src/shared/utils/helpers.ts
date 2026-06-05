import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty.toLowerCase()) {
    case 'easy': return 'bg-emerald-500/10 text-emerald-400';
    case 'medium': return 'bg-amber-500/10 text-amber-400';
    case 'hard': return 'bg-rose-500/10 text-rose-400';
    default: return 'bg-white/10 text-slate-400';
  }
}

export function getDifficultyBorder(difficulty: string): string {
  switch (difficulty.toLowerCase()) {
    case 'easy': return 'border-l-success-500';
    case 'medium': return 'border-l-warning-500';
    case 'hard': return 'border-l-danger-500';
    default: return 'border-l-white/20';
  }
}
