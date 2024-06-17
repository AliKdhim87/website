import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import styles from './Button.module.scss';
import { Typography } from '../Typography';

const css = classNames.bind(styles);

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string | React.ReactNode;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

export const Button = ({ text, variant = 'primary', className, loading, ...props }: ButtonProps) => {
  const classes = css(className, 'button', {
    [`button--${variant}`]: variant,
    'button--loading': loading,
  });

  return (
    <button {...props} className={classes} aria-live={loading ? 'polite' : undefined} aria-busy={loading}>
      {text && <Typography className={css({ 'button--hide-text': loading })}>{text}</Typography>}
    </button>
  );
};
