import classNames from 'classnames/bind';

import styles from './FormGroup.module.scss';

import { Children } from 'global';

const css = classNames.bind(styles);

export const FormGroup: React.FC<{ children: Children }> = ({ children }) => (
  <div className={css('form-group')}>{children}</div>
);
