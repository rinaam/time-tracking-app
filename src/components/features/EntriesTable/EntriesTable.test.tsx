import React from 'react';
import { render, waitFor, screen, within, fireEvent } from '@testing-library/react';
import EntriesTable from './EntriesTable';

import personResponse from '../../../tests/fixtures/person';
import timeEntries from '../../../tests/fixtures/timeEntries';
import { TimeEntryResponseModel } from '../../../models/TimeEntry';

describe('EntriesTable', () => {
  it('should render component and match snapshot when no time entries', async () => {
    const { asFragment } = render(
      <EntriesTable person={personResponse} onDeleteEntry={jest.fn()} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component and match snapshot when time entries are present', async () => {
    const { asFragment } = render(
      <EntriesTable
        person={personResponse}
        timeEntries={timeEntries as unknown as TimeEntryResponseModel}
        onDeleteEntry={jest.fn()}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should delete entry', async () => {
    const fakeDeleteFunction = jest.fn();
    render(
      <EntriesTable
        person={personResponse}
        timeEntries={timeEntries as unknown as TimeEntryResponseModel}
        onDeleteEntry={fakeDeleteFunction}
      />,
    );

    await waitFor(() => {
      expect(screen.getByTestId('row-delete-14541918')).toBeInTheDocument();
    });

    const row = await screen.getByTestId('row-delete-14541918');
    const button = within(row).getByText('delete');

    fireEvent.click(button);

    expect(fakeDeleteFunction).toBeCalledWith('14541918');
  });
});
