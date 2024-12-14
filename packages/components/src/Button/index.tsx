import type { DetailedHTMLProps, ButtonHTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const css = classNames.bind(styles);

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

export const Button = ({
  variant = 'primary',
  children,
  className,
  loading,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const classes = css(className, 'ali-dev-button', {
    [`ali-dev-button--${variant}`]: variant,
    'ali-dev-button--loading': loading,
  });

  return (
    <button {...props} className={classes} aria-live={loading ? 'polite' : undefined} aria-busy={loading}>
      {children && (
        <span className={css('ali-dev-button__text', { 'ali-dev-button__text--hide': loading })}>{children}</span>
      )}
    </button>
  );
};
