import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import styles from './index.module.scss';

const css = classNames.bind(styles);
export interface SurfaceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Surface = ({ children, className }: SurfaceProps) => (
  <div className={css('ali-dev-surface', className)}>{children}</div>
);
