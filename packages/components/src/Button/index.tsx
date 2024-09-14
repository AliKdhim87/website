import { forwardRef } from 'react';
import type { DetailedHTMLProps, ButtonHTMLAttributes, PropsWithChildren, ForwardedRef } from 'react';

import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const css = classNames.bind(styles);

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

export const Button = forwardRef(
  (
    { variant = 'primary', children, className, loading, ...props }: PropsWithChildren<ButtonProps>,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const classes = css(className, 'ali-dev-button', {
      [`ali-dev-button--${variant}`]: variant,
      'ali-dev-button--loading': loading,
    });

    return (
      <button {...props} ref={ref} className={classes} aria-live={loading ? 'polite' : undefined} aria-busy={loading}>
        {children && (
          <span className={css('ali-dev-button__text', { 'ali-dev-button__text--hide': loading })}>{children}</span>
        )}
      </button>
    );
  },
);
Button.displayName = 'Button';
