'use client'

import React from 'react';

interface LogoProps {
  isDark: boolean;
}

export const Logo: React.FC<LogoProps> = ({ isDark }) => {
  return (
    <a href="/" className="cursor-pointer">
      <img
        className="w-32"
        alt="Gretalks"
        src={isDark ? "/images/logo-dark.svg" : "/images/logo.svg"}
      />
    </a>
  );
}
