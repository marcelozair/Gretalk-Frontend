import './Button.scss';
import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { Loading } from '../Loading/Loading';

interface ButtonProps {
  loading?: boolean;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit"
  style?: "ghost" | "normal" | "dark" | "white"
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = (
  { children, loading = false, className, onClick, type = "button", style = "normal" }
) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        "button " + className,
        { 'bg-primary text-white': style === 'normal' },
        { 'bg-black text-white': style === 'dark' },
        { 'bg-white text-primary': style === 'white' },
        { 'bg-transparent border-[2px] border-primary text-primary': style === 'ghost' },
      )}
    >
      {!loading && children}
      {loading && <Loading />}
    </button>
  );
}