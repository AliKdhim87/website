import { DetailedHTMLProps, FormHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './Form.module.scss';

const css = classNames.bind(styles);

export interface FormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

export const Form = forwardRef(
  ({ children, ...props }: PropsWithChildren<FormProps>, ref: ForwardedRef<HTMLFormElement>) => (
    <form {...props} className={css('ali-dev-form')} ref={ref}>
      {children}
    </form>
  ),
);
Form.displayName = 'Form';
