import type { DetailedHTMLProps, DialogHTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './styles.module.scss';
const css = classNames.bind(styles);
interface DrawerProps extends DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement> {}

export const Drawer = ({ children, ref, ...restProps }: PropsWithChildren<DrawerProps>) => (
  <dialog ref={ref} className={css('ali-dev-drawer')} {...restProps}>
    {children}
  </dialog>
);
