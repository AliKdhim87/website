import classNames from 'classnames/bind';
import { HTMLAttributes } from 'react';

import styles from './Typography.module.scss';

export interface TypographyProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p';
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'subtitle' | 'body';
  bodyWeight?: 'bold' | 'semi-bold';
  bodySize?: 'mobile' | 'secondary';
}
const css = classNames.bind(styles);

export const Typography: React.FC<TypographyProps> = ({ as, variant, bodySize, bodyWeight, children, className }) => {
  const classes = classNames('typography', className, {
    [css(`typography-${variant}`)]: variant,
    [css(`typography-body--weight-${bodyWeight}`)]: bodyWeight,
    [css(`typography-body--size-${bodySize}`)]: bodySize,
  });

  const Component = as;
  return <Component className={classes}>{children}</Component>;
};
