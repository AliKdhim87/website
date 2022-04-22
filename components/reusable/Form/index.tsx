import classNames from 'classnames/bind';
import { DetailedHTMLProps, FormHTMLAttributes, forwardRef, LegacyRef } from 'react';

import styles from './Form.module.scss';

const css = classNames.bind(styles);

interface FormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

const forwardRefForm = ({ children, ...props }: FormProps, ref: LegacyRef<HTMLFormElement> | undefined) => (
  <form className={css('form')} {...props} ref={ref}>
    {children}
  </form>
);

export const Form = forwardRef(forwardRefForm);
