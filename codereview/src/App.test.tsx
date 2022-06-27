import React from 'react';

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page title', () => {
  render(<App />)

  const title = screen.queryByText('Patient triage app');

  expect(title).toBeInTheDocument();
})

test('renders columns', () => {
  render(<App />);
  
  const pendingTitle = screen.queryByText('PENDING');
  const rejectedTitle = screen.queryByText('REJECTED');
  const doneTitle = screen.queryByText('DONE');

  expect(pendingTitle).toBeInTheDocument();
  expect(rejectedTitle).toBeInTheDocument();
  expect(doneTitle).toBeInTheDocument();
});
