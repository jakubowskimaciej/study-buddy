import React from 'react';
import FormField from './FormField';
import { renderWithProvider } from 'helpers/renderWithProviders';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProvider(<FormField label="name" name="name" id="name" />);
  });
});
