import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
type BadgeSize = 'sm' | 'md';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-white/10 text-slate-400',
  primary: 'bg-primary-500/10 text-primary-400',
  success: 'bg-success-500/10 text-success-500',
  warning: 'bg-warning-500/10 text-warning-500',
  danger: 'bg-danger-500/10 text-danger-500',
  info: 'bg-info-500/10 text-info-500',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-0.5 text-xs',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx(
          'inline-flex items-center font-medium rounded-md',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
