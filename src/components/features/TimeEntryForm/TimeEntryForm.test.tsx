import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import TimeEntryForm from './TimeEntryForm';
import servicesFixture from '../../../tests/fixtures/services';
import { ServicesResponseModel } from '../../../models/Services';

describe('TimeEntryForm', () => {
  it('should render component and match snapshot', async () => {
    const { asFragment } = render(
      <TimeEntryForm services={servicesFixture as ServicesResponseModel} onAddEntry={jest.fn()} />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should not submit new entry if button is disabled', async () => {
    const fakeSubmit = jest.fn();
    render(
      <TimeEntryForm services={servicesFixture as ServicesResponseModel} onAddEntry={fakeSubmit} />,
    );

    const button = await screen.findByText('Save');

    fireEvent.click(button);

    expect(fakeSubmit).not.toBeCalled();
  });

  it('should submit new entry if all fields are filled in', async () => {
    const fakeSubmit = jest.fn();
    render(
      <TimeEntryForm services={servicesFixture as ServicesResponseModel} onAddEntry={fakeSubmit} />,
    );

    const service = await screen.findByTestId('test-id-service');
    fireEvent.click(service);

    const serviceItem = await within(service).findByText('Acquiring new clients');

    fireEvent.click(serviceItem);

    const note = await screen.findByTestId('test-id-note');
    fireEvent.change(note, { target: { value: 'note' } });

    const time = await screen.findByTestId('test-id-time');
    fireEvent.change(time, { target: { value: '10' } });

    const button = await screen.findByText('Save');
    fireEvent.click(button);

    expect(fakeSubmit).toBeCalledWith({ note: 'note', service: '1687626', time: '10' });
  });
});
