import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

type ProgressBarVariant = 'primary' | 'success' | 'warning' | 'danger';

interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  variant?: ProgressBarVariant;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles: Record<ProgressBarVariant, string> = {
  primary: 'bg-primary-500',
  success: 'bg-success-500',
  warning: 'bg-warning-500',
  danger: 'bg-danger-500',
};

const sizeStyles = {
  sm: 'h-1.5',
  md: 'h-2',
  lg: 'h-3',
};

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, value, max = 100, variant = 'primary', showLabel = false, size = 'md', ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div className="w-full" ref={ref} {...props}>
        {showLabel && (
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-sm font-medium text-slate-400">{Math.round(percentage)}%</span>
          </div>
        )}
        <div
          className={clsx(
            'w-full bg-white/10 rounded-full overflow-hidden',
            sizeStyles[size],
            className
          )}
        >
          <div
            className={clsx(
              'h-full rounded-full transition-all duration-300',
              variantStyles[variant]
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';
