import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils';
import Root from './Root';

describe('Root component', () => {
  it('Renders the root component as unathenticated user', () => {
    render(<Root />);
    screen.getByLabelText('Login');
  });

  it('Displays error message when wrong credentials are passed', async () => {
    render(<Root />);
    const login = screen.getByLabelText('Login');
    const password = screen.getByLabelText('Password');

    fireEvent.change(login, { target: { value: 'Elo' } });
    fireEvent.change(password, { target: { value: 'Makrelo' } });
    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Oops/));
  });

  it('Displays authenticated application', async () => {
    render(<Root />);
    const login = screen.getByLabelText('Login');
    const password = screen.getByLabelText('Password');

    fireEvent.change(login, { target: { value: 'teacher@studybuddy.com' } });
    fireEvent.change(password, { target: { value: 'Test1234' } });
    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Logged/));
  });
});
