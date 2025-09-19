import React from 'react';

export function Input(props) {
  const { className = '', ...rest } = props;
  return <input className={`px-2 py-2 rounded-md bg-white/5 ${className}`} {...rest} />;
}

export default Input;
