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
  it('should render the PageHeader section', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: data }));

    const jsx = await Page();
    const { container } = render(jsx);

    const PageHeaderSection = container.querySelector('.page-header-section');

    expect(PageHeaderSection).toBeInTheDocument();
  });
  describe('Social Media Section', () => {
    it('should render the social media  section', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ data: data }));

      const jsx = await Page();
      const { container } = render(jsx);

      const aboutSection = container.querySelector('.social-media');

      expect(aboutSection).toBeInTheDocument();
    });
    it('should render the title "Find me across the internet:"', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ data: data }));
      const jsx = await Page();
      const { container } = render(jsx);
      const title = container.querySelector('.social-media__title');
      expect(title).toHaveTextContent('Find me across the internet:');
      expect(title).toBeInTheDocument();
      expect(title?.tagName).toBe('H2');
    });

    it('should render 4 links', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ data: data }));
      const jsx = await Page();
      const { container } = render(jsx);
      const links = container.querySelectorAll('.social-media__link');
      expect(links.length).toBe(4);
    });
    it('should render the link to my github', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ data: data }));
      const jsx = await Page();
      const { container } = render(jsx);
      const link = container.querySelector('a[aria-label="github" i]');
      expect(link).toHaveAttribute('href', 'https://github.com/AliKdhim87');
    });
    it('should render the link to my linkedin', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ data: data }));
      const jsx = await Page();
      const { container } = render(jsx);
      const link = container.querySelector('a[aria-label="linkedin" i]');
      expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/ali-kadhim-082b75189/');
    });
    it('should render the link to my X (twitter)', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ data: data }));
      const jsx = await Page();
      const { container } = render(jsx);
      const link = container.querySelector('a[aria-label="twitter" i]');
      expect(link).toHaveAttribute('href', 'https://x.com/alikadh03771327');
    });

    it('should render the link to my email', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ data: data }));
      const jsx = await Page();
      const { container } = render(jsx);
      const link = container.querySelector('a[aria-label="email" i]');
      expect(link).toHaveAttribute('href', 'mailto:alikadhim87nl@gmail.com');
    });
  });
  describe('Recent writing section', () => {
    it('should render the Recent Writing section', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ data }));

      const jsx = await Page();
      const { container } = render(jsx);

      const recentWriting = container.querySelector('.post-list');

      expect(recentWriting).toBeInTheDocument();
    });

    it('should render 3 elements', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ data }));

      const jsx = await Page();
      const { container } = render(jsx);

      const recentWriting = container.querySelectorAll('.post-list__item');

      expect(recentWriting.length).toBe(3);
    });

    it('should render the title "Recent Writing"', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ data }));
      const jsx = await Page();
      const { container } = render(jsx);
      const title = container.querySelector('.post-list__title');
      expect(title).toHaveTextContent('Recent Writing');
      expect(title).toBeInTheDocument();
      expect(title?.tagName).toBe('H2');
    });

    it('should render the Call To Action Button with this text "View All Blog"', async () => {
      fetchMock.mockResponseOnce(JSON.stringify({ data }));
      const jsx = await Page();
      const { container } = render(jsx);
      const title = container.querySelector('.post-list__cta');
      expect(title).toHaveTextContent('View All Blog');
      expect(title).toBeInTheDocument();
      expect(title?.tagName).toBe('A');
      expect(title).toHaveAttribute('href', '/blog');
    });
  });
});
