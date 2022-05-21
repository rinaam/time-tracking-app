import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import EntriesTable from './EntriesTable';

import personResponse from '../../../tests/fixtures/person';

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
