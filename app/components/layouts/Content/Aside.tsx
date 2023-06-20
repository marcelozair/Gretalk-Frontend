'use client'

import React from 'react';

interface AsideProps {
  children: React.ReactNode;
}

export const Aside: React.FC<AsideProps> = ({ children }) => {
  return (
    <aside className="w-[400px]">
      {children}
    </aside>
  );
}