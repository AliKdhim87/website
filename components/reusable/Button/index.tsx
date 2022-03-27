import classNames from 'classnames/bind';
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { Typography } from '@/components/reusable';

import styles from './Button.module.scss';

const css = classNames.bind(styles);

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string | React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ text, variant = 'primary' }: ButtonProps) => {
  const classes = css('button', {
    [`button--${variant}`]: variant,
  });

  return (
    <button className={classes}>
      {text && (
        <Typography as="span" variant="body">
          {text}
        </Typography>
      )}
    </button>
  );
};
