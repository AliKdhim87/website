import classNames from 'classnames/bind';

import styles from './FormGroup.module.scss';

const css = classNames.bind(styles);

export const FormGroup: React.FC = ({ children }) => <div className={css('form-group')}>{children}</div>;
