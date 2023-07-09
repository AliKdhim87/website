import classNames from 'classnames/bind';

import { Children } from 'global';

import styles from './index.module.scss';

const css = classNames.bind(styles);
interface Props {
  children: Children;
}
export const MainWrapper = ({ children }: Props) => <div className={css('main-wrapper')}>{children}</div>;

export const Main = ({ children }: Props) => <main className={css('main')}>{children}</main>;
