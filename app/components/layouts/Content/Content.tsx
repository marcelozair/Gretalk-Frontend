'use client'

import React from 'react';

interface ContentProps {
  children: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="w-[calc(100%-400px)]">
      {children}
    </div>
  );
}