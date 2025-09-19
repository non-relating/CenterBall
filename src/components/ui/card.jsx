import React from 'react';

export function Card({ children, className = '' }) {
  return <div className={`bg-white/5 rounded-xl p-2 ${className}`}>{children}</div>;
}

export function CardHeader({ children, className = '' }) {
  return <div className={`mb-2 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = '' }) {
  return <div className={`${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }) {
  return <div className={`mt-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '' }) {
  return <div className={`${className} font-semibold`}>{children}</div>;
}

export default Card;
