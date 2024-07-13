import { render, screen, fireEvent } from '@testing-library/react';

import { Details } from './index';

describe('Details', () => {
  it('should render the component', () => {
    render(<Details>Details</Details>);

    expect(screen.getByText('Details')).toBeInTheDocument();
  });
  it('should show the data when the button is clicked', async () => {
    render(<Details>Details Body</Details>);

    fireEvent.click(screen.getByRole('group'));

    expect(await screen.findByText('Details Body')).toBeInTheDocument();
  });
  it('should show label', () => {
    render(<Details label="Label"></Details>);

    expect(screen.getByText('Label')).toBeInTheDocument();
  });
  it('should show body', () => {
    render(<Details>Details Body</Details>);
    expect(screen.getByText('Details Body')).toBeInTheDocument();
  });
  it('should not showing body when children is not provided', () => {
    const { container } = render(<Details label="Label" />);
    expect(container.querySelector('.details__body')).toBe(null);
  });
  it('should not showing label when label is not provided', () => {
    const { container } = render(<Details>Label</Details>);
    expect(container.querySelector('summary')).toBe(null);
  });
  it('should show an SVG icon in the summary by default', () => {
    const { container } = render(<Details label="Click to reveal more" />);
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('details__icon');
  });
  it('should not show an SVG icon in the summary when icon is false', () => {
    const { container } = render(<Details label="Click to reveal more" icon={false} />);
    const icon = container.querySelector('svg');
    expect(icon).not.toBeInTheDocument();
  });
  it('should show a custom class', () => {
    const { container } = render(<Details className="custom-class" />);
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });
  it('should show a custom class in the summary', () => {
    const { container } = render(
      <Details
        label="Click to reveal more"
        summaryRestProps={{
          className: 'custom-class',
        }}
      />,
    );
    const summary = container.querySelector('summary');
    expect(summary).toHaveClass('custom-class');
  });
  it('should show a custom class in the body', () => {
    const { container } = render(
      <Details
        label="Click to reveal more"
        bodyRestProps={{
          className: 'custom-class',
        }}
      >
        Lorem ipsum dolor sit amet consectetur.
      </Details>,
    );

    const body = container.querySelector('.details__body');
    expect(body).toHaveClass('custom-class');
  });
  it('should show a h2 by default', () => {
    render(<Details label="Click to reveal more" />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H2');
  });
  it('should show a h3 when headingLevel is 3', () => {
    render(<Details label="Click to reveal more" headingLevel={3} />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H3');
  });
  it('should show a h4 when headingLevel is 4', () => {
    render(<Details label="Click to reveal more" headingLevel={4} />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H4');
  });
  it('should show a h5 when headingLevel is 5', () => {
    render(<Details label="Click to reveal more" headingLevel={5} />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H5');
  });
  it('should show a h6 when headingLevel is 6', () => {
    render(<Details label="Click to reveal more" headingLevel={6} />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H6');
  });
  it('should show a h1 when headingLevel is 7', () => {
    render(<Details label="Click to reveal more" headingLevel={7} />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });
  it('should show a h1 when headingLevel is 0', () => {
    render(<Details label="Click to reveal more" headingLevel={0} />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });
});
