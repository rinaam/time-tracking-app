import React, { ChangeEvent } from 'react';
import './TextArea.scss';

interface TextAreaProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, id, name, value, onChange }) => (
  <div className="text-wrapper">
    <label htmlFor={id} className="text-label">
      {label}
    </label>
    <textarea
      data-testid={`test-id-${name}`}
      id={id}
      name={name}
      className="text-field"
      value={value}
      onChange={onChange}
    />
  </div>
);
export default TextArea;
