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
import { ChevronRight } from '../icons/ChevronRight';

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
      headingVariant = 'h4',
      bodyRestProps,
      icon,
      ...restProps
    }: PropsWithChildren<DetailsProps>,
    ref: ForwardedRef<HTMLDetailsElement>,
  ) => (
    <details className={cx('ali-dev-details', className)} ref={ref} {...restProps}>
      {label && (
        <summary {...summaryRestProps} className={cx(summaryRestProps?.className, 'ali-dev-details__summary')}>
          {icon && <ChevronRight className={cx('ali-dev-details__icon')} />}
          <Heading dimension={false} level={headingLevel ?? 2} variant={headingVariant}>
            {label}
          </Heading>
        </summary>
      )}
      {children && (
        <div {...bodyRestProps} className={cx(bodyRestProps?.className, 'ali-dev-details__body')}>
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
  headingVariant: 'h4',
  icon: true,
};
