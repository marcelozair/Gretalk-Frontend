'use client'

import React from 'react';

interface SectionProps {
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <div className="py-12">
      {children}
    </div>
  );
}