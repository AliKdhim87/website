import React from 'react';

import { render, screen } from '@testing-library/react';

import { CTA } from './index';

describe('CTA', () => {
  it('renders a link with the correct class name and children', () => {
    render(<CTA href="https://example.com">Click me</CTA>);

    const link = screen.getByRole('link');

    expect(link).toHaveClass('cta');
    expect(link).toHaveClass('cta--primary');
    expect(link).toHaveTextContent('Click me');
  });
  it('renders a secondary link with the correct class name and children', () => {
    render(
      <CTA href="https://example.com" variant="secondary">
        Click me
      </CTA>,
    );

    const link = screen.getByRole('link');

    expect(link).toHaveClass('cta');
    expect(link).toHaveClass('cta--secondary');
    expect(link).toHaveTextContent('Click me');
  });
  it('renders a link with custom class name and children', () => {
    render(
      <CTA href="https://example.com" className="custom-class">
        Click me
      </CTA>,
    );

    const link = screen.getByRole('link');

    expect(link).toHaveClass('cta');
    expect(link).toHaveClass('cta--primary');
    expect(link).toHaveClass('custom-class');
    expect(link).toHaveTextContent('Click me');
  });
  it('renders a link with a ref forwarded', () => {
    const ref = React.createRef<HTMLAnchorElement>();
    render(<CTA href="https://example.com" ref={ref} />);

    expect(ref.current).not.toBeNull();
    expect(ref.current).toBe(screen.getByRole('link'));
  });
});
