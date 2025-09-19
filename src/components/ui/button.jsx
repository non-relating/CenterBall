import React from 'react';

export function Button({ children, className = '', variant, size, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md px-3 py-2';
  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
