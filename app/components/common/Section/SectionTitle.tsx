'use client'

import React from 'react';
import { Lora } from 'next/font/google'

export const font = Lora({ subsets: ['latin'] })
interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="mb-8">
      <h3 className={"text-lg font-bold text-black " + font.className}>{children}</h3>
    </div>
  );
}
