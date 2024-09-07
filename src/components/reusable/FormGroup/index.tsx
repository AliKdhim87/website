import classNames from 'classnames/bind';

import styles from './FormGroup.module.scss';

const css = classNames.bind(styles);
interface FormGroupProps {
  children: React.ReactNode;
}
export const FormGroup = ({ children }: FormGroupProps) => <div className={css('form-group')}>{children}</div>;
