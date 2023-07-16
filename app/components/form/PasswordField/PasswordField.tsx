import classnames from 'classnames';
import React, { useState } from 'react';
interface PasswordFieldProps extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  hasError: boolean;
}

// eslint-disable-next-line react/display-name
const PasswordField = React.forwardRef<HTMLInputElement, PasswordFieldProps>((props, ref) => {
  const [show, setShow] = useState(false);

  const {
    hasError,
    disabled,
    ...rest
  } = props;

  return (
    <div className="relative">
      <input
        ref={ref}
        {...rest}
        className={
          classnames(
            "text-field",
            { 'text-fiel__error': hasError }
          )
        }
        type={show ? "text" : "password"}
      />
      {show ? (
        <button onClick={() => setShow(false)}>
          <img
            className="w-5 h-5 absolute top-2 right-2"
            src="images/icons/eye-slash-solid.svg"
          />
        </button>
      ) : (
        <button onClick={() => setShow(true)}>
          <img
            className="w-5 h-5 absolute top-2 right-2"
            src="images/icons/eye-solid.svg"
          />
        </button>
      )}
    </div>
  );
});

export default PasswordField;