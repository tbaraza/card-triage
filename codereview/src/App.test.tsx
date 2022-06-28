import { render, screen } from "@testing-library/react";
import App from "./App";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";

const initialState = { patientFlow: [] };
const mockStore = configureStore();

test('renders page title', () => {
    const store = mockStore(initialState);
    render(
        <Provider store={store}>
            <App />
        </Provider>)

  const title = screen.queryByText('Patient triage app');

  expect(title).toBeInTheDocument();
})  