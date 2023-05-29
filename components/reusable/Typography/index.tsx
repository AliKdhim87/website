import classNames from 'classnames/bind';
import { HTMLAttributes } from 'react';

import styles from './Typography.module.scss';

export type AsHTMLElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p';
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'subtitle' | 'body';

export interface TypographyProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  as: AsHTMLElement;
  variant?: TypographyVariant;
  bodyWeight?: 'bold' | 'semi-bold';
  bodySize?: 'mobile' | 'secondary';
}
const css = classNames.bind(styles);

export const Typography: React.FC<TypographyProps> = ({ as, variant, bodySize, bodyWeight, children, className }) => {
  const classes = css('typography', className, {
    [`typography-${variant}`]: variant,
    [`typography-body--weight-${bodyWeight}`]: bodyWeight,
    [`typography-body--size-${bodySize}`]: bodySize,
  });

  const Component = as;
  return <Component className={classes}>{children}</Component>;
};
