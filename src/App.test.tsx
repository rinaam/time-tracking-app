import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders Home Page', () => {
  render(<App />);
  const homePageText = screen.getByText(/Hello from Home Page/i);
  expect(homePageText).toBeInTheDocument();
});
