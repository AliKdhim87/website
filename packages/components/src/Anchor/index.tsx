import { DetailedHTMLProps, AnchorHTMLAttributes, forwardRef, PropsWithChildren, ComponentType } from 'react';

import classNames from 'classnames/bind';

import styles from './Anchor.module.scss';

const css = classNames.bind(styles);

export interface AnchorProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  Link?: ComponentType<any>;
}

export const Anchor = forwardRef<HTMLAnchorElement, PropsWithChildren<AnchorProps>>(
  ({ children, Link: Component = 'a', className, ...props }, ref) => {
    const classes = css(className, 'ali-dev-anchor');
    return (
      <Component className={classes} ref={ref} {...props}>
        {children}
      </Component>
    );
  },
);

Anchor.displayName = 'Anchor';

Anchor.defaultProps = {
  Link: undefined,
};
