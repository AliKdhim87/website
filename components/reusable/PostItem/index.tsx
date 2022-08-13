import classNames from 'classnames/bind';

import styles from './index.module.scss';

import { Children } from 'global';

const css = classNames.bind(styles);

export const PostItem: React.FC<{ children: Children }> = ({ children }) => (
  <div className={css('post-item')}>{children}</div>
);
