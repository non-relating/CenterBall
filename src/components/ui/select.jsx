import React from 'react';

export function Select({ children, value, onValueChange }) {
  return <div>{React.cloneElement(children, { value, onChange: (e) => onValueChange(e.target.value) })}</div>;
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
