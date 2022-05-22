import React from 'react';
import './Input.scss';

interface InputProps {
  label: string;
  id: string;
  type: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
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
      onChange={(e) => onChange(e.currentTarget.value)}
      data-testid={`test-id-${name}`}
    />
  </div>
);
export default Input;
