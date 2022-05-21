import React from 'react';
import { render } from '@testing-library/react';
import MainLayout from './MainLayout';

it('should match snapshoot', () => {
  const wrapper = render(<MainLayout>Hello World</MainLayout>);
  expect(wrapper.asFragment()).toMatchSnapshot();
});
