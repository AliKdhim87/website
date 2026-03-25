import { PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './styles.module.scss';
import { Typography, TypographyProps } from '../Typography';

export interface HelperTextProps extends Omit<TypographyProps, 'ref'> {
  error?: boolean;
}

const css = classNames.bind(styles);

export const HelperText = ({ children, error, id, ...restProps }: PropsWithChildren<HelperTextProps>) => {
  const classes = css('ali-dev-helper-text', {
    'ali-dev-helper-text--error': error,
  });
  return children ? (
    <Typography dimension={false} className={classes} id={id} {...restProps}>
      {children}
    </Typography>
  ) : null;
};
