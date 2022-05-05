import classNames from 'classnames/bind';
import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';

import styles from './Anchor.module.scss';

const css = classNames.bind(styles);

type AnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const Anchor: React.FC<AnchorProps> = ({ children, className, ...props }) => {
  const classes = css(className, 'anchor');
  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
};
