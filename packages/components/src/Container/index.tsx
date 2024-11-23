import { DetailedHTMLProps, ForwardedRef, forwardRef, HTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import styles from './Container.module.scss';

const css = classNames.bind(styles);

interface ContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  fluid?: boolean;
}

export const Container = forwardRef(
  ({ children, fluid, className, ...props }: ContainerProps, ref: ForwardedRef<HTMLDivElement>) => {
    const classes = css('container', className, {
      'container--fluid': fluid,
    });

    return (
      <div className={classes} ref={ref} {...props}>
        {children}
      </div>
    );
  },
);
Container.displayName = 'Container';
