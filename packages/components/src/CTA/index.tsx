import type { PropsWithChildren, AnchorHTMLAttributes, DetailedHTMLProps, ElementType } from 'react';

import classNames from 'classnames/bind';

import styles from './CTA.module.scss';

const css = classNames.bind(styles);

export interface CTAProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  Link?: ElementType;
}

export const CTA = ({
  children,
  variant = 'primary',
  Link: Component = 'a',
  className,
  ...restProps
}: PropsWithChildren<CTAProps>) => {
  const classes = css('ali-dev-cta', className, {
    [`ali-dev-cta--${variant}`]: variant,
  });

  return (
    <Component className={classes} {...restProps}>
      {children}
    </Component>
  );
};
