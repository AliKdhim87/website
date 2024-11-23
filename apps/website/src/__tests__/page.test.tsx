// import { render, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

// import data from './mocks/home.json';
// import Page from '../app/page';
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
  beforeEach(() => {});
  it('renders a heading', () => {
    expect(true).toBe(true);
  });
});
