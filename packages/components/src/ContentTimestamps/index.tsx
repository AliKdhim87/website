import { DetailedHTMLProps, ForwardedRef, forwardRef, HTMLAttributes } from 'react';

import classnames from 'classnames/bind';

import styles from './index.module.scss';
import { Icon } from '../icons/Icon';

const css = classnames.bind(styles);

export interface TimestampData {
  dateTime: string;
  formatted: string;
  label: string;
}

export interface ContentTimestampsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  publishedAt: TimestampData;
  updatedAt?: TimestampData;
  className?: string;
}

export const ContentTimestamps = forwardRef<HTMLDivElement, ContentTimestampsProps>(
  ({ publishedAt, updatedAt, className, ...restProps }, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      className={css('ali-dev-content-timestamps', className)}
      ref={ref}
      role="group"
      aria-label="Content timestamps"
      {...restProps}
    >
      <div className={css('ali-dev-content-timestamps__item')}>
        <span className={css('ali-dev-content-timestamps__label')}>
          <Icon name="publishedAt" aria-hidden="true" />
          {publishedAt.label}
        </span>
        <time
          dateTime={publishedAt.dateTime}
          className={css('ali-dev-content-timestamps__item-value')}
          title={`Published: ${publishedAt.formatted}`}
        >
          {publishedAt.formatted}
        </time>
      </div>
      {updatedAt && (
        <div className={css('ali-dev-content-timestamps__item')}>
          <span className={css('ali-dev-content-timestamps__label')}>
            <Icon name="updatedAt" aria-hidden="true" />
            {updatedAt.label}
          </span>
          <time
            dateTime={updatedAt.dateTime}
            className={css('ali-dev-content-timestamps__item-value')}
            title={`Updated: ${updatedAt.formatted}`}
          >
            {updatedAt.formatted}
          </time>
        </div>
      )}
    </div>
  ),
);

ContentTimestamps.displayName = 'ContentTimestamps';
