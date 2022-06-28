import React from 'react';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import PatientFlow from './PatientFlow';
import { Provider } from 'react-redux';

const initialState = { patientFlow: [] };
const mockStore = configureStore();
const store = mockStore(initialState);

test('renders columns', () => {
    render(
        <Provider store={store}>
            <PatientFlow />
        </Provider>);
  
  const pendingTitle = screen.queryByText('PENDING');
  const rejectedTitle = screen.queryByText('REJECTED');
  const doneTitle = screen.queryByText('DONE');

  expect(pendingTitle).toBeInTheDocument();
  expect(rejectedTitle).toBeInTheDocument();
  expect(doneTitle).toBeInTheDocument();
});
