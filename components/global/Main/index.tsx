import classNames from 'classnames/bind';

import styles from './index.module.scss';

const css = classNames.bind(styles);

export const MainWrapper: React.FC = ({ children }) => <div className={css('main-wrapper')}>{children}</div>;

export const Main: React.FC = ({ children }) => <main className={css('main')}>{children}</main>;
