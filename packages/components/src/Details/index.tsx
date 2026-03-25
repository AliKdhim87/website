import { type DetailedHTMLProps, type HTMLAttributes, type PropsWithChildren, DetailsHTMLAttributes } from 'react';

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

export const Details = ({
  children,
  label,
  className,
  summaryRestProps,
  headingLevel = 2,
  headingVariant = 'h4',
  bodyRestProps,
  icon = true,
  ref,
  ...restProps
}: PropsWithChildren<DetailsProps>) => (
  <details className={cx('ali-dev-details', className)} ref={ref} {...restProps}>
    {label && (
      <summary {...summaryRestProps} className={cx(summaryRestProps?.className, 'ali-dev-details__summary')}>
        {icon && <ChevronRight className={cx('ali-dev-details__icon')} />}
        <Heading dimension={false} level={headingLevel} variant={headingVariant}>
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
);
