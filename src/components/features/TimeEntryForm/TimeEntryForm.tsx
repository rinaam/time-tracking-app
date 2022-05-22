import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { ServicesResponseModel } from '../../../models/Services';
import Button from '../../core/Button/Button';
import Dropdown, { DropdownOptions } from '../../core/Dropdown/Dropdown';
import Input from '../../core/Input/Input';
import TextArea from '../../core/TextArea/TextArea';
import './TimeEntryForm.scss';

export interface AddEntryData {
  service: string;
  time: string;
  note: string;
}

interface TimeEntryFormProps {
  services?: ServicesResponseModel;
  onAddEntry: (args: AddEntryData) => void;
}

const mapToDropdownOptions = (services?: ServicesResponseModel): DropdownOptions[] =>
  (services?.data || []).map((service) => ({
    label: service.attributes.name,
    value: service.id,
  }));

const TimeEntryForm: React.FC<TimeEntryFormProps> = ({ services, onAddEntry }) => {
  const [service, setService] = useState('-');
  const [time, setTime] = useState('');
  const [note, setNote] = useState('');

  const resetToInitialState = () => {
    setService('-');
    setTime('');
    setNote('');
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const formData = {
      service,
      time,
      note,
    };

    onAddEntry(formData);
    resetToInitialState();
  };

  const handleStateChange =
    (fn: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<any>) => {
      fn(e.currentTarget.value);
    };

  const isButtonDisabled = !note || !time || service === '-';

  return (
    <form data-testid="time-entries-table" onSubmit={handleSubmit} className="time-entry-wrapper">
      <div className="section">
        <Dropdown
          label="Service"
          options={mapToDropdownOptions(services)}
          name="service"
          value={service}
          onChange={handleStateChange(setService)}
        />
        <Input
          label="Time"
          id="time"
          name="time"
          type="number"
          value={time}
          onChange={handleStateChange(setTime)}
        />
      </div>
      <TextArea
        label="Note"
        id="note"
        name="note"
        value={note}
        onChange={handleStateChange(setNote)}
      />
      <Button text="Save" type="submit" disabled={isButtonDisabled} />
    </form>
  );
};

export default TimeEntryForm;
