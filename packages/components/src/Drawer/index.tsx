import type { DetailedHTMLProps, DialogHTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from './styles.module.scss';
const css = classNames.bind(styles);
interface DrawerProps extends DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement> {}

export const Drawer = forwardRef<HTMLDialogElement, PropsWithChildren<DrawerProps>>(
  ({ children, ...restProps }, ref) => {
    return (
      <dialog ref={ref} className={css('ali-dev-drawer')} {...restProps}>
        {children}
      </dialog>
    );
  },
);
Drawer.displayName = 'Drawer';
