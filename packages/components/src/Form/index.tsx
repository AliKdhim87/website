import { DetailedHTMLProps, FormHTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './Form.module.scss';

const css = classNames.bind(styles);

export interface FormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

export const Form = ({ children, ...props }: PropsWithChildren<FormProps>) => (
  <form {...props} className={css('ali-dev-form')}>
    {children}
  </form>
);
