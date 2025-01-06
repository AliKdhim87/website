import { DetailedHTMLProps, AnchorHTMLAttributes, PropsWithChildren, ElementType } from 'react';

import classNames from 'classnames/bind';

import styles from './Anchor.module.scss';

const css = classNames.bind(styles);

export interface AnchorProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  Link?: ElementType;
}

export const Anchor = ({ children, Link: Component = 'a', className, ...props }: PropsWithChildren<AnchorProps>) => {
  const classes = css(className, 'ali-dev-anchor');
  return (
    <Component {...props} className={classes}>
      {children}
    </Component>
  );
};

Anchor.displayName = 'Anchor';

Anchor.defaultProps = {
  Link: undefined,
};
