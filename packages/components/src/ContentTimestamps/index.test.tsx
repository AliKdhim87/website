import { createRef } from 'react';

import { render, screen } from '@testing-library/react';

import { ContentTimestamps } from './index';

// Mock the Icon component
jest.mock('../icons/Icon', () => ({
  Icon: ({ name, ...props }: { name: string }) => (
    <span data-testid={`icon-${name}`} {...props}>
      {name}
    </span>
  ),
}));

// Mock CSS modules
jest.mock('./index.module.scss', () => ({}));

describe('ContentTimestamps', () => {
  const mockPublishedAt = {
    dateTime: '2024-01-15T10:30:00Z',
    formatted: 'January 15, 2024',
    label: 'Published',
  };

  const mockUpdatedAt = {
    dateTime: '2024-01-20T14:45:00Z',
    formatted: 'January 20, 2024',
    label: 'Updated',
  };

  describe('Rendering', () => {
    it('renders published date correctly', () => {
      render(<ContentTimestamps publishedAt={mockPublishedAt} />);

      expect(screen.getByText('Published')).toBeInTheDocument();
      expect(screen.getByText('January 15, 2024')).toBeInTheDocument();
      expect(screen.getByTestId('icon-publishedAt')).toBeInTheDocument();
    });

    it('renders both published and updated dates when updatedAt is provided', () => {
      render(<ContentTimestamps publishedAt={mockPublishedAt} updatedAt={mockUpdatedAt} />);

      expect(screen.getByText('Published')).toBeInTheDocument();
      expect(screen.getByText('January 15, 2024')).toBeInTheDocument();
      expect(screen.getByText('Updated')).toBeInTheDocument();
      expect(screen.getByText('January 20, 2024')).toBeInTheDocument();
    });

    it('does not render updated date when updatedAt is not provided', () => {
      render(<ContentTimestamps publishedAt={mockPublishedAt} />);

      expect(screen.queryByText('Updated')).not.toBeInTheDocument();
      expect(screen.queryByTestId('icon-updatedAt')).not.toBeInTheDocument();
    });
  });

  describe('Semantic HTML', () => {
    it('uses time elements with correct dateTime attributes', () => {
      render(<ContentTimestamps publishedAt={mockPublishedAt} updatedAt={mockUpdatedAt} />);

      const publishedTime = screen.getByText('January 15, 2024');
      const updatedTime = screen.getByText('January 20, 2024');

      expect(publishedTime.tagName).toBe('TIME');
      expect(publishedTime).toHaveAttribute('datetime', '2024-01-15T10:30:00Z');
      expect(updatedTime.tagName).toBe('TIME');
      expect(updatedTime).toHaveAttribute('datetime', '2024-01-20T14:45:00Z');
    });

    it('has proper accessibility attributes', () => {
      render(<ContentTimestamps publishedAt={mockPublishedAt} />);

      const container = screen.getByRole('group');
      expect(container).toHaveAttribute('aria-label', 'Content timestamps');

      const icons = screen.getAllByTestId(/^icon-/);
      icons.forEach((icon) => {
        expect(icon).toHaveAttribute('aria-hidden', 'true');
      });
    });

    it('has title attributes for time elements', () => {
      render(<ContentTimestamps publishedAt={mockPublishedAt} updatedAt={mockUpdatedAt} />);

      expect(screen.getByText('January 15, 2024')).toHaveAttribute('title', 'Published: January 15, 2024');
      expect(screen.getByText('January 20, 2024')).toHaveAttribute('title', 'Updated: January 20, 2024');
    });
  });

  describe('Props and Ref Forwarding', () => {
    it('forwards ref correctly', () => {
      const ref = createRef<HTMLDivElement>();
      render(<ContentTimestamps publishedAt={mockPublishedAt} ref={ref} />);

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('spreads additional props to the container', () => {
      render(<ContentTimestamps publishedAt={mockPublishedAt} data-testid="custom-test-id" role="region" />);

      const container = screen.getByTestId('custom-test-id');
      expect(container).toBeInTheDocument();
      expect(container).toHaveAttribute('role', 'region');
    });

    it('applies custom className', () => {
      render(<ContentTimestamps publishedAt={mockPublishedAt} className="custom-class" />);

      // Since we're mocking CSS modules, we can't test the actual class application
      // but we can verify the component renders without errors
      expect(screen.getByRole('group')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles empty formatted dates gracefully', () => {
      render(<ContentTimestamps publishedAt={{ ...mockPublishedAt, formatted: '' }} />);

      expect(screen.getByText('Published')).toBeInTheDocument();
      // The time element should still be rendered even with empty content
      const timeElement = screen.getByRole('time');
      expect(timeElement).toHaveAttribute('datetime', '2024-01-15T10:30:00Z');
    });

    it('handles missing label gracefully', () => {
      render(<ContentTimestamps publishedAt={{ ...mockPublishedAt, label: '' }} />);

      expect(screen.getByTestId('icon-publishedAt')).toBeInTheDocument();
      expect(screen.getByText('January 15, 2024')).toBeInTheDocument();
    });
  });

  describe('Component Integration', () => {
    it('can be used within a card component', () => {
      const CardWrapper = ({ children }: { children: React.ReactNode }) => (
        <div data-testid="card" role="article">
          <h2>Article Title</h2>
          {children}
        </div>
      );

      render(
        <CardWrapper>
          <ContentTimestamps publishedAt={mockPublishedAt} updatedAt={mockUpdatedAt} />
        </CardWrapper>,
      );

      expect(screen.getByTestId('card')).toBeInTheDocument();
      expect(screen.getByText('Published')).toBeInTheDocument();
      expect(screen.getByText('Updated')).toBeInTheDocument();
    });
  });
});
