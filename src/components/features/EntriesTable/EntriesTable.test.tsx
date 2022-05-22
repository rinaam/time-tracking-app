import React from 'react';
import { render, waitFor, screen, within, fireEvent } from '@testing-library/react';
import EntriesTable from './EntriesTable';

import personResponse from '../../../tests/fixtures/person';
import { mockDeleteRequestRefetch } from '../../../setupTests';

describe('EntriesTable', () => {
  it('should render component and match snapshot', async () => {
    const { asFragment } = render(<EntriesTable person={personResponse} />);
    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getAllByText('Marina Savic').length).toEqual(2);
    });

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('should delete entry', async () => {
    const { asFragment } = render(<EntriesTable person={personResponse} />);

    await waitFor(() => {
      expect(screen.getByTestId('row-delete-14541918')).toBeInTheDocument();
    });

    const row = await screen.getByTestId('row-delete-14541918');
    const button = within(row).getByText('delete');

    fireEvent.click(button);

    (window.fetch as jest.Mock).mockImplementationOnce(mockDeleteRequestRefetch('14541918'));

    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.queryByTestId('row-delete-14541918')).not.toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
