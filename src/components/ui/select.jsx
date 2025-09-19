import React from 'react';

export function Select({ children, value, onValueChange }) {
  const mapped = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    // Pass value and onChange only to elements that can accept them
    return React.cloneElement(child, {
      value,
      onChange: (e) => {
        if (onValueChange) onValueChange(e && e.target ? e.target.value : e);
      },
    });
  });

  return <div>{mapped}</div>;
}

export function SelectTrigger({ children, className = '' }) {
  return <div className={`inline-block ${className}`}>{children}</div>;
}

export function SelectValue({ placeholder }) {
  return <span>{placeholder}</span>;
}

export function SelectContent({ children, className = '' }) {
  return <div className={className}>{children}</div>;
}

export function SelectItem({ children, value }) {
  return <div onClick={() => {}}>{children}</div>;
}

export default Select;
