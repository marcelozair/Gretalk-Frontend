'use client'

import './TextField.css';
import React from 'react';
import classnames from 'classnames';

interface TextFieldProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  hasError?: boolean;
}

// eslint-disable-next-line react/display-name
export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ disabled, hasError = false, ...rest }, ref) => {
    return (
      <input
        {...rest}
        ref={ref}
        className={
          classnames(
            "text-field",
            { 'text-fiel__error': hasError }
          )
        }
      />
    );
  }
);

/*

// Other wise, we can use the following code the do the same.

export const TextField: React.FC<TextFieldProps> = (
  { disabled, register, name ...rest }, ref
) => {
  return (
    <input {...register(name)} {..rest} />
  )
}
*/