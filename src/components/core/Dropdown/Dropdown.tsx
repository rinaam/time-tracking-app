import React, { ChangeEvent } from 'react';
import './Dropdown.scss';

export interface DropdownOptions {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  name: string;
  value: string;
  options: DropdownOptions[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, name, value, onChange }) => (
  <div className="dropdown-wrapper">
    <label className="dropdown-label">{label}</label>
    <select
      data-testid={`test-id-${name}`}
      name={name}
      className="options-wrapper"
      value={value}
      onChange={onChange}
    >
      <option value="">-</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
