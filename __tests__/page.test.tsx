import { render, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import data from './mocks/home.json';
import Page from '../app/page';
import '@testing-library/jest-dom';

fetchMock.enableMocks();

jest.mock('next/headers', () => ({
  draftMode() {
    return {
      isEnabled: false,
    };
  },
}));

describe('Home Page', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should render the heading', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: data }));

    const jsx = await Page();
    render(jsx);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
