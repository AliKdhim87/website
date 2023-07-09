import classNames from 'classnames/bind';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import styles from './InlineCode.module.scss';

const css = classNames.bind(styles);

type InlineCodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const InlineCode = ({ children, className, ...props }: InlineCodeProps) => {
  const classes = css(className, 'inline-code');
  return (
    <code className={classes} {...props}>
      {children}
    </code>
  );
};
