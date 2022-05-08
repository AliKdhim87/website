import classNames from 'classnames/bind';
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';

import { Typography } from '@/components/reusable';

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
    // eslint-disable-next-line react/button-has-type
    <button {...props} className={classes} aria-live={loading ? 'polite' : undefined} aria-busy={loading}>
      {text && (
        <Typography as="span" variant="body" className={css({ 'button--hide-text': loading })}>
          {text}
        </Typography>
      )}
    </button>
  );
};
