import { createRef } from 'react';

import { render } from '@testing-library/react';

import { Card } from './index';

describe('Card component', () => {
  test('should render the Card', () => {
    const { container } = render(<Card />);
    const card = container.querySelector('.card');
    expect(card).toBeInTheDocument();
  });

  it('renders a Card with a forwarded ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<Card ref={ref} />);
    const buttonElement = container.querySelector(':only-child');
    expect(ref.current).toBe(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });
  it('renders a Card with a custom CSS class', () => {
    const { container } = render(<Card className="custom-class" />);
    const card = container.querySelector('.card');
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
      it('renders a Card with a published date', () => {
        const { container } = render(<Card title="Card Title" publishedAt="2021-01-01" />);
        const cardDate = container.querySelector('.card__date');
        expect(cardDate).toHaveTextContent('Published on: Jan 1, 2021');
      });
      it('renders a Card with an updated date', () => {
        const { container } = render(<Card title="Card Title" updatedAt="2021-01-01" />);
        const cardDate = container.querySelector('.card__date');
        expect(cardDate).toHaveTextContent('Updated on: Jan 1, 2021');
      });
      it('renders a Card with both published and updated dates', () => {
        const { container } = render(<Card title="Card Title" publishedAt="2021-01-01" updatedAt="2021-01-02" />);
        const cardDate = container.querySelector('.card__date');
        expect(cardDate).toHaveTextContent('Published on: Jan 1, 2021Updated on: Jan 2, 2021');
      });
    });
    describe('Card Body', () => {
      it('renders a Card with a body', () => {
        const { container } = render(<Card title="Card Title" body="Card Body" />);
        const cardBody = container.querySelector('.card__body');
        expect(cardBody).toHaveTextContent('Card Body');
      });
      it('renders a Card without a body', () => {
        const { container } = render(<Card title="Card Title" />);
        const cardBody = container.querySelector('.card__body');
        expect(cardBody).not.toBeInTheDocument();
      });
    });
  });
});
