import classNames from 'classnames/bind';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import styles from './Container.module.scss';

const css = classNames.bind(styles);

interface ContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  fluid?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ children, fluid, className, ...props }) => {
  const classes = classNames(css('container', className), {
    [css('container--fluid')]: fluid,
  });
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
