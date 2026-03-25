import { render } from '@testing-library/react';

import { Card } from './index';

describe('Card component', () => {
  test('should render the Card', () => {
    const { container } = render(<Card />);
    const card = container.querySelector('.ali-dev-card');
    expect(card).toBeInTheDocument();
  });
  it('renders a Card with a custom CSS class', () => {
    const { container } = render(<Card className="custom-class" />);
    const card = container.querySelector('.ali-dev-card');
    expect(card).toHaveClass('custom-class');
  });
  it('renders a Card with a custom id', () => {
    const { container } = render(<Card id="custom-id" />);
    const card = container.querySelector('#custom-id');
    expect(card).toBeInTheDocument();
  });
  describe('Card With Title', () => {
    it('renders a Card with a title as an h3 element by default', () => {
      const { container } = render(<Card title="Card Title" />);
      const cardTitle = container.querySelector('h3');
      expect(cardTitle).toBeInTheDocument();
      expect(cardTitle).toHaveTextContent('Card Title');
    });
    it('renders a Card with a custom heading level', () => {
      const { container } = render(<Card title="Card Title" headingOptions={{ level: 1 }} />);
      const cardTitle = container.querySelector('h1');
      expect(cardTitle).toBeInTheDocument();
      expect(cardTitle).toHaveTextContent('Card Title');
    });
    describe('Card Date', () => {
      const pubDate = { dateTime: '2024-11-20', formatted: '2024-11-20', label: 'Published' };
      const updDate = { dateTime: '2024-11-23', formatted: '2024-11-23', label: 'Updated' };

      it('renders a Card with a published date', () => {
        const { container } = render(<Card title="Card Title" publishedAt={pubDate} />);
        const cardDate = container.querySelector('time');
        expect(cardDate).toHaveTextContent('2024-11-20');
      });
      it('renders a Card with both published and updated dates', () => {
        const { container } = render(<Card title="Card Title" publishedAt={pubDate} updatedAt={updDate} />);
        const timestamps = container.querySelectorAll('time');
        expect(timestamps[0]).toHaveTextContent('2024-11-20');
        expect(timestamps[1]).toHaveTextContent('2024-11-23');
      });
    });
    describe('Card Body', () => {
      it('renders a Card with a body', () => {
        const { container } = render(<Card title="Card Title" body="Card Body" />);
        const cardBody = container.querySelector('.ali-dev-card__body');
        expect(cardBody).toHaveTextContent('Card Body');
      });
      it('renders a Card without a body', () => {
        const { container } = render(<Card title="Card Title" />);
        const cardBody = container.querySelector('.ali-dev-card__body');
        expect(cardBody).not.toBeInTheDocument();
      });
    });
  });
});
