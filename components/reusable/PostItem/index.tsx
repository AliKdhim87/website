import classNames from 'classnames/bind';

import styles from './index.module.scss';

const css = classNames.bind(styles);
interface PostItemProps {
  children: React.ReactNode;
}
export const PostItem = ({ children }: PostItemProps) => <div className={css('post-item')}>{children}</div>;
