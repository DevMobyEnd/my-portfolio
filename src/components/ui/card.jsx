import React from 'react';

export const Card = ({ className, children, ...props }) => (
  <div className={`bg-white shadow-md rounded-lg ${className}`} {...props}>{children}</div>
);

export const CardHeader = ({ className, children, ...props }) => (
  <div className={`p-4 ${className}`} {...props}>{children}</div>
);

export const CardTitle = ({ className, children, ...props }) => (
  <h3 className={`text-lg font-bold ${className}`} {...props}>{children}</h3>
);

export const CardContent = ({ className, children, ...props }) => (
  <div className={`p-4 ${className}`} {...props}>{children}</div>
);