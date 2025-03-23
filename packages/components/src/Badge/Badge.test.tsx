import { createRef } from 'react';

import { render, screen } from '@testing-library/react';

import { Badge } from './index';

describe('Badge', () => {
  it('renders Badge component', () => {
    const { container } = render(<Badge href="/">#CSS</Badge>);
    const badgeElement = container.querySelector(':only-child');
    expect(badgeElement?.tagName).toBe('A');
    expect(badgeElement).toBeInTheDocument();
  });
  it('should render badge CSS class', () => {
    const { container } = render(<Badge href="/">Badge</Badge>);
    const badgeElement = container.querySelector(':only-child');
    expect(badgeElement).toHaveClass('ali-dev-badge');
  });
  it('should render a custom className', () => {
    const { container } = render(
      <Badge href="/" className="custom-class">
        Badge
      </Badge>,
    );
    const badgeElement = container.querySelector(':only-child');
    expect(badgeElement).toHaveClass('custom-class');
    expect(badgeElement).toHaveClass('ali-dev-badge');
  });
  it('renders a link with a forwarded ref', () => {
    const ref = createRef<HTMLAnchorElement>();
    const { container } = render(
      <Badge href="/" ref={ref}>
        Badge
      </Badge>,
    );
    const badgeElement = container.querySelector(':only-child');
    expect(ref.current).toBe(badgeElement);
    expect(badgeElement).toBeInTheDocument();
  });
  it('renders a badge with additional attributes', () => {
    const { container } = render(
      <Badge href="/" id="badge-id">
        Badge
      </Badge>,
    );
    const badgeElement = container.querySelector(':only-child');
    expect(badgeElement).toHaveAttribute('id', 'badge-id');
  });
  it('renders a badge component with the role of link', () => {
    render(<Badge href="/">Badge</Badge>);
    const badgeElement = screen.getByRole('link');
    expect(badgeElement).toBeInTheDocument();
  });
});
