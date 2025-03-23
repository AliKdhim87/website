import { createRef } from 'react';

import { render, screen } from '@testing-library/react';

import { Heading } from './index';

describe('Heading', () => {
  it('renders a heading', () => {
    render(<Heading level={1}>Heading</Heading>);
    expect(screen.getByText('Heading')).toBeInTheDocument();
  });
  it('renders a heading 2 when level is 2', () => {
    render(<Heading level={2}>Heading</Heading>);
    expect(screen.getByText('Heading').tagName).toBe('H2');
  });
  it('renders a heading 3 when level is 3', () => {
    render(<Heading level={3}>Heading</Heading>);
    expect(screen.getByText('Heading').tagName).toBe('H3');
  });
  it('renders a heading 4 when level is 4', () => {
    render(<Heading level={4}>Heading</Heading>);
    expect(screen.getByText('Heading').tagName).toBe('H4');
  });
  it('renders a heading 5 when level is 5', () => {
    render(<Heading level={5}>Heading</Heading>);
    expect(screen.getByText('Heading').tagName).toBe('H5');
  });
  it('renders a heading 6 when level is 6', () => {
    render(<Heading level={6}>Heading</Heading>);
    expect(screen.getByText('Heading').tagName).toBe('H6');
  });
  it('renders a heading with a different variant', () => {
    const { container } = render(
      <Heading level={1} variant="h2">
        Heading
      </Heading>,
    );
    const heading = container.querySelector('h1');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('ali-dev-heading--h2');
  });
  it('renders a heading with a different class name', () => {
    render(
      <Heading level={1} className="custom-class">
        Heading
      </Heading>,
    );
    expect(screen.getByText('Heading')).toBeInTheDocument();
    expect(screen.getByText('Heading').classList).toContain('custom-class');
    expect(screen.getByText('Heading').classList).toContain('ali-dev-heading--h1');
    expect(screen.getByText('Heading').classList).toContain('ali-dev-heading--h1-dimension');
  });
  it('renders a heading with additional props', () => {
    render(
      <Heading level={1} id="heading">
        Heading
      </Heading>,
    );
    expect(screen.getByText('Heading')).toBeInTheDocument();
    expect(screen.getByText('Heading')).toHaveAttribute('id', 'heading');
  });
  it('renders a heading with children', () => {
    render(
      <Heading level={1}>
        <span>Heading</span>
      </Heading>,
    );
    expect(screen.getByText('Heading')).toBeInTheDocument();
    expect(screen.getByText('Heading').tagName).toBe('SPAN');
  });
  it('renders a heading with custom styles', () => {
    render(
      <Heading level={1} style={{ color: 'red' }}>
        Heading
      </Heading>,
    );
    expect(screen.getByText('Heading')).toBeInTheDocument();
    expect(screen.getByText('Heading')).toHaveStyle('color: red');
  });
  it('renders a heading with custom attributes', () => {
    render(
      <Heading level={1} data-testid="heading">
        Heading
      </Heading>,
    );
    expect(screen.getByText('Heading')).toBeInTheDocument();
    expect(screen.getByText('Heading')).toHaveAttribute('data-testid', 'heading');
  });
  it('renders a heading with custom ref', () => {
    const ref = createRef<HTMLHeadingElement>();
    render(
      <Heading level={1} ref={ref}>
        Heading
      </Heading>,
    );
    expect(ref.current).toBeInTheDocument();
    expect(ref.current).toHaveTextContent('Heading');
  });
  it('renders a heading 1 when the level is 0', () => {
    render(<Heading level={0}>Heading</Heading>);
    expect(screen.getByText('Heading').tagName).toBe('H1');
  });
  it('renders a heading 1 when the level is greater than 6', () => {
    render(<Heading level={7}>Heading</Heading>);
    expect(screen.getByText('Heading').tagName).toBe('H1');
  });
});
