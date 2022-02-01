import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { screen } from '@testing-library/react';
import { renderWithProvider } from 'helpers/renderWithProviders';
import NewsSection from './NewsSection';

const mock = new MockAdapter(axios);

const query = `{
    allArticles {
      id
      title
      category
      content
      image {
        url
      }
    }
  }`;

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays error when articles are not loaded', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    renderWithProvider(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  it('Displays the articles', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [
          { id: 1, title: 'Test', category: 'Test', content: 'Test' },
        ],
      },
    });
    renderWithProvider(<NewsSection />);
    await screen.findByText(/Test/);
  });
});
