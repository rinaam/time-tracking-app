import React, { ChangeEvent } from 'react';
import './Input.scss';

interface InputProps {
  label: string;
  id: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, id, type, name, value, onChange }) => (
  <div className="input-wrapper">
    <label htmlFor={id} className="input-label">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      className="input-field"
      value={value}
      onChange={onChange}
      data-testid={`test-id-${name}`}
    />
  </div>
);
export default Input;
