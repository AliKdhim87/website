import classNames from 'classnames/bind';
import { createPortal } from 'react-dom';

import styles from './Backdrop.module.scss';
import { Grid, GridProps } from '../Grid/index';

const css = classNames.bind(styles);
// TODO use native HTML dialog tag
export interface BackdropProps extends GridProps {
  parent?: string;
}

export const Backdrop = ({ children, parent = 'root', ...restProps }: BackdropProps) => {
  const portal = document.getElementById(parent);

  return (
    <>
      {portal
        ? createPortal(
            <Grid {...restProps} container justifyContent="flex-end" className={css('backdrop')}>
              {children}
            </Grid>,
            portal,
          )
        : null}
    </>
  );
};
