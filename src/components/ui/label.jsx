import React from 'react';

export function Label({ children, htmlFor }) {
  return <label htmlFor={htmlFor} className="text-sm text-gray-300">{children}</label>;
}

export default Label;
