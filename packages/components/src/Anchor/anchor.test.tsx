import { render, screen } from '@testing-library/react';
import Link from 'next/link';

import { Anchor } from './index';

describe('Anchor', () => {
  it('renders Anchor component', () => {
    render(<Anchor href="/">Anchor</Anchor>);
    const linkElement = screen.getByText(/Anchor/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('renders Anchor component with target blank', () => {
    render(
      <Anchor href="/" target="_blank">
        Anchor
      </Anchor>,
    );
    const linkElement = screen.getByText(/Anchor/i);
    expect(linkElement).toHaveAttribute('target', '_blank');
  });
  it('renders Anchor component with rel', () => {
    render(
      <Anchor href="/" rel="noopener noreferrer">
        Anchor
      </Anchor>,
    );
    const linkElement = screen.getByText(/Anchor/i);
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });
  it('renders Anchor component with download', () => {
    render(
      <Anchor href="/" download>
        Anchor
      </Anchor>,
    );
    const linkElement = screen.getByText(/Anchor/i);
    expect(linkElement).toHaveAttribute('download');
  });
  it('should render an Link when passed the Link prop', () => {
    render(
      <Anchor href="/" Link={Link}>
        Anchor
      </Anchor>,
    );
    const linkElement = screen.getByText(/Anchor/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('should render anchor CSS class', () => {
    render(
      <Anchor href="/" className="anchor">
        Anchor
      </Anchor>,
    );
    const linkElement = screen.getByText(/Anchor/i);
    expect(linkElement).toHaveClass('anchor');
  });
  it('should render a custom className', () => {
    render(
      <Anchor href="/" className="custom-class">
        Anchor
      </Anchor>,
    );
    const linkElement = screen.getByText(/Anchor/i);
    expect(linkElement).toHaveClass('custom-class');
  });
});
