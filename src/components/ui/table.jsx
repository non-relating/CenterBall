import React from 'react';

export function Table({ children }) { return <table className="w-full">{children}</table>; }
export function TableHeader({ children }) { return <thead>{children}</thead>; }
export function TableBody({ children }) { return <tbody>{children}</tbody>; }
export function TableRow({ children }) { return <tr>{children}</tr>; }
export function TableHead({ children, className = '' }) { return <th className={className}>{children}</th>; }
export function TableCell({ children, className = '', colSpan }) { return <td colSpan={colSpan} className={className}>{children}</td>; }

export default Table;
