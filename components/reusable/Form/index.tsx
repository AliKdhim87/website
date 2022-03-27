import classNames from 'classnames/bind';
import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

import styles from './Form.module.scss';

const css = classNames.bind(styles);

interface FormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

export const Form: React.FC<FormProps> = ({ children, ...props }) => (
  <form className={css('form')} {...props}>
    {children}
  </form>
);
