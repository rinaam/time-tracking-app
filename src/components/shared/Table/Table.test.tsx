import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

it('should match snapshoot', () => {
  const tableHead = [{ text: 'title' }, { text: 'title1' }];
  const tableBody = [
    [
      { text: 'title', id: '1' },
      { text: 'title1', id: '2' },
    ],
  ];

  const wrapper = render(<Table tableHead={tableHead} tableBody={tableBody} />);
  expect(wrapper.asFragment()).toMatchSnapshot();
});
