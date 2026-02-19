import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-brand-accent text-white hover:bg-brand-accent/90': variant === 'primary',
            'bg-white text-brand-dark hover:bg-gray-100': variant === 'secondary',
            'border border-gray-700 bg-transparent text-white hover:bg-white/10': variant === 'outline',
            'text-gray-300 hover:text-white hover:bg-white/5': variant === 'ghost',
            
            'h-8 px-4 text-xs': size === 'sm',
            'h-10 px-6 text-sm': size === 'md',
            'h-12 px-8 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
