import { DetailedHTMLProps, HTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import styles from './HelperText.module.scss';
import { Typography } from '../Typography';

interface HelperTextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  helperText?: string;
  error?: boolean;
  id?: string;
}

const css = classNames.bind(styles);

export const HelperText = ({ helperText, error, id }: HelperTextProps) => {
  const classes = css('helper-text', {
    'helper-text--error': error,
  });
  return helperText ? (
    <Typography className={classes} id={id}>
      {helperText}
    </Typography>
  ) : null;
};
