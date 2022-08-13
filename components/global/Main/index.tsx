import classNames from 'classnames/bind';

import styles from './index.module.scss';

import { Children } from 'global';

const css = classNames.bind(styles);

export const MainWrapper: React.FC<{ children: Children }> = ({ children }) => (
  <div className={css('main-wrapper')}>{children}</div>
);

export const Main: React.FC<{ children: Children }> = ({ children }) => <main className={css('main')}>{children}</main>;
