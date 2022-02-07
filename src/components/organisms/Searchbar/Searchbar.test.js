import { render, screen, fireEvent } from 'test-utils';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import Searchbar from './Searchbar';
import { waitFor } from '@testing-library/react';

const server = setupServer(...handlers);

describe('Searchbar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Renders the component', () => {
    render(<Searchbar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('find students');
  });

  it('Displays students when search phrase is matching', async () => {
    render(<Searchbar />);
    const input = screen.getByPlaceholderText('find students');
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findAllByText(/Adam/);

    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      expect(screen.getByLabelText('results')).not.toBeVisible();
    });
  });
});
