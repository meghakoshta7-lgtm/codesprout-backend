import { cn } from '@/shared/utils/helpers';

const diffStyles: Record<string, string> = {
  Easy: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  Medium: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  Hard: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
};

export default function DifficultyBadge({ difficulty }: { difficulty: string }) {
  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold',
      diffStyles[difficulty] || 'bg-white/10 text-white/50',
    )}>
      {difficulty}
    </span>
  );
}
