import React, { useState } from 'react';
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
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, name, value, onChange }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const handleClick = (option: DropdownOptions) => {
    setIsOptionsOpen(false);
    onChange(option.value);
  };

  return (
    <>
      {isOptionsOpen && (
        <div className="dropdown-overlay" onClick={() => setIsOptionsOpen(false)} />
      )}
      <div className="dropdown-wrapper">
        <label className="dropdown-label">{label}</label>
        <div className="dropdown-container" onClick={toggleOptions} data-testid={`test-id-${name}`}>
          <p>{options.find((option) => option.value === value)?.label}</p>
          {isOptionsOpen && (
            <ul className="options-wrapper">
              {options.map((option) => (
                <li key={option.value} onClick={() => handleClick(option)}>
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
