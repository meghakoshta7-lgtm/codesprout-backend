import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, padding = 'md', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'bg-[#111827] rounded-xl border border-white/10',
          hover && 'transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5',
          !hover && 'shadow-card',
          paddingStyles[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
