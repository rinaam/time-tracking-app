import React, { MouseEventHandler } from 'react';
import './Button.scss';

interface ButtonProps {
  text: string;
  type: 'button' | 'reset' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type, disabled }) => (
  <button
    type={type}
    onClick={onClick}
    className={`btn-wrapper${disabled ? ' btn-disabled' : ''}`}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
