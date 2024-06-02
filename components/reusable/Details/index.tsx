import classnames from 'classnames/bind';
import {
  type DetailedHTMLProps,
  type ForwardedRef,
  type HTMLAttributes,
  type PropsWithChildren,
  forwardRef,
} from 'react';

import SvgChevronRight from '../icons/ChevronRight';
import { Heading } from '../Heading';
import type { HeadingVariant } from '../Heading';

import styles from './styles.module.scss';

export interface DetailsProps extends HTMLAttributes<HTMLDetailsElement> {
  label?: string;
  headingLevel?: number;
  headingVariant?: HeadingVariant;
  summaryRestProps?: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  bodyRestProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}
const cx = classnames.bind(styles);

export const Details = forwardRef(
  (
    {
      children,
      label,
      className,
      summaryRestProps,
      headingLevel,
      headingVariant,
      bodyRestProps,
      ...restProps
    }: PropsWithChildren<DetailsProps>,
    ref: ForwardedRef<HTMLDetailsElement>,
  ) => (
    <details className={cx('details', className)} ref={ref} {...restProps}>
      {label && (
        <summary className={cx('details__summary', summaryRestProps?.className)} {...summaryRestProps}>
          <SvgChevronRight className={cx('details__icon')} />{' '}
          <Heading level={headingLevel ?? 2} variant={headingVariant}>
            {label}
          </Heading>
        </summary>
      )}
      {children && (
        <div className={cx('details__body', bodyRestProps?.className)} {...bodyRestProps}>
          {children}
        </div>
      )}
    </details>
  ),
);

Details.displayName = 'Details';
Details.defaultProps = {
  label: undefined,
  summaryRestProps: {},
  bodyRestProps: {},
  headingLevel: 2,
  headingVariant: 'h5',
};
