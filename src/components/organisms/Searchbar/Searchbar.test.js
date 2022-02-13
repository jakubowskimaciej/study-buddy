import { render, screen, fireEvent } from 'test-utils';
import Searchbar from './Searchbar';

describe('Searchbar', () => {
  it('Renders the component', () => {
    render(<Searchbar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('find students');
  });

  it('Displays students when search phrase is matching', async () => {
    render(<Searchbar />);
    const input = screen.getByPlaceholderText('find students');
    fireEvent.change(input, { target: { value: 'Ca' } });
    await screen.findAllByText(/Caroline/);
  });
});
