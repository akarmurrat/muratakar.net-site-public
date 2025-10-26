import React from 'react';

export const Button = ({ children, className = '', variant = 'default', size = 'md', ...props }) => {
  const base = 'inline-flex items-center justify-center font-medium focus:outline-none transition-colors';
  const variants = {
    default: 'bg-slate-900 text-white hover:bg-slate-800',
    outline: 'border border-slate-300 text-slate-700 hover:bg-slate-50',
  };
  const sizes = {
    sm: 'h-8 px-3 text-sm rounded-md',
    md: 'h-10 px-4 text-sm rounded-lg',
    lg: 'h-12 px-6 text-base rounded-xl',
  };
  const classes = [base, variants[variant] || variants.default, sizes[size] || sizes.md, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
