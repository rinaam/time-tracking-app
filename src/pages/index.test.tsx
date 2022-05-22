import React from 'react';
import { render, waitFor, screen, within, fireEvent } from '@testing-library/react';
import HomePage from '.';
import { mockDeleteRequestRefetch } from '../setupTests';

describe('home page', () => {
  it('match snapshot with all data', async () => {
    const { asFragment } = render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByTestId('time-entries-table')).toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('should delete time entry', async () => {
    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByTestId('row-delete-14541918')).toBeInTheDocument();
    });

    const row = await screen.getByTestId('row-delete-14541918');

    const button = within(row).getByText('delete');

    (window.fetch as jest.Mock).mockImplementation(mockDeleteRequestRefetch('14541918'));

    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.queryByTestId('row-delete-14541918')).not.toBeInTheDocument();
    });
  });
});
