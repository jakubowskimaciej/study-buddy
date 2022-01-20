import React from 'react';
import { renderWithProvider } from 'helpers/renderWithProviders';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { fireEvent, screen } from '@testing-library/react';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProvider(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), {
      target: { value: 'Maciej' },
    });
    fireEvent.change(screen.getByTestId('Attendance'), {
      target: { value: '55%' },
    });
    fireEvent.change(screen.getByTestId('Average'), {
      target: { value: '4.0' },
    });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Maciej');
  });
});
