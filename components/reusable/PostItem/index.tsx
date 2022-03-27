import classNames from 'classnames/bind';

import styles from './index.module.scss';

const css = classNames.bind(styles);

export const PostItem: React.FC = ({ children }) => <div className={css('post-item')}>{children}</div>;
