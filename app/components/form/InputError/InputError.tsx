import React from 'react';

interface InputErrorProps {
  error: string | undefined;
}

const InputError: React.FC<InputErrorProps> = ({ error }) => {
  return (
    <>
      {error && <span className="text-app-error text-sm mt-1">{ error }</span>}
    </>
  );
}

export default InputError;