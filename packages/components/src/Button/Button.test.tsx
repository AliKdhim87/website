import { createRef } from 'react';

import { render, screen } from '@testing-library/react';

import { Button } from './index';

describe('Button', () => {
  it('renders a button', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  it('renders a button with a class', () => {
    render(<Button className="custom-class">Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });
  it('renders a button with a type', () => {
    render(<Button type="submit">Click me</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
  it('renders a button with a loading state', () => {
    render(<Button loading>Click me</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });
  it('renders a button with a loading state and a live region', () => {
    render(<Button loading>Click me</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-live', 'polite');
  });
  it('renders a button with primary variant', () => {
    render(<Button variant="primary">Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('ali-dev-button--primary');
  });
  it('renders a button with secondary variant', () => {
    render(<Button variant="secondary">Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('ali-dev-button--secondary');
  });
  it('renders a link with a forwarded ref', () => {
    const ref = createRef<HTMLButtonElement>();
    const { container } = render(<Button ref={ref}>Click me</Button>);
    const buttonElement = container.querySelector(':only-child');
    expect(ref.current).toBe(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });
  it('renders a button with a button CSS class', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('ali-dev-button');
  });
  it('renders a button with a span element', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toHaveClass('ali-dev-button__text');
  });
});
