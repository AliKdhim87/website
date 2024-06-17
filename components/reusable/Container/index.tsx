import { DetailedHTMLProps, HTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import styles from './Container.module.scss';

const css = classNames.bind(styles);

interface ContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  fluid?: boolean;
}

export const Container = ({ children, fluid, className, ...props }: ContainerProps) => {
  const classes = css('container', className, {
    'container--fluid': fluid,
  });

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
