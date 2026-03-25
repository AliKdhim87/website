import type { HTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './FormGroup.module.scss';

const css = classNames.bind(styles);
interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {}

export const FormGroup = ({ children }: PropsWithChildren<FormGroupProps>) => (
  <div className={css('ali-dev-form-group')}>{children}</div>
);
