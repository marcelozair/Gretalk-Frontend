'use client'

import React from 'react';
import { Lora } from 'next/font/google';

export const Font = Lora({ subsets: ['latin'] })

interface ModalTitleProps {
  children: React.ReactNode;
}

export const ModalTitle: React.FC<ModalTitleProps> = ({ children }) => {
  return (
    <div className="mb-8">
      <h3 className={"text-xl font-bold text-black text-center " + Font.className}>{children}</h3>
    </div>
  );
}