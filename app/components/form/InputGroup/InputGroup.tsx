import React, { Children, ReactNode } from 'react';

interface InputGroupProps {
  label: string;
  htmlFor?: string;

  children: ReactNode
}

const InputGroup: React.FC<InputGroupProps> = ({ label, children, htmlFor = '' }) =>  {
  return (
    <div>
      <label
        className="mb-2 text-sm font-bold text-black" 
        htmlFor={htmlFor}
      >
        { label }
      </label>
      {children}
    </div>
  );
}

export default InputGroup;