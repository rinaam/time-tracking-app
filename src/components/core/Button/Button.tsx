import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button type="button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
