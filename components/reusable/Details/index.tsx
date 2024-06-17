import {
  type DetailedHTMLProps,
  type ForwardedRef,
  type HTMLAttributes,
  type PropsWithChildren,
  forwardRef,
  DetailsHTMLAttributes,
} from 'react';

import classnames from 'classnames/bind';

import styles from './styles.module.scss';
import { Heading } from '../Heading';
import type { HeadingVariant } from '../Heading';
import SvgChevronRight from '../icons/ChevronRight';

export interface DetailsProps extends DetailedHTMLProps<DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement> {
  label?: string;
  headingLevel?: number;
  headingVariant?: HeadingVariant;
  summaryRestProps?: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  bodyRestProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  icon?: boolean;
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
      icon,
      ...restProps
    }: PropsWithChildren<DetailsProps>,
    ref: ForwardedRef<HTMLDetailsElement>,
  ) => (
    <details className={cx('details', className)} ref={ref} {...restProps}>
      {label && (
        <summary className={cx('details__summary', summaryRestProps?.className)} {...summaryRestProps}>
          {icon && <SvgChevronRight className={cx('details__icon')} />}
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
  icon: true,
};
