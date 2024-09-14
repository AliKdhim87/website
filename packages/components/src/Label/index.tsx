import type { DetailedHTMLProps, LabelHTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import styles from './Label.module.scss';
import { Icon } from '../icons/Icon';

export interface LabelProps extends DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  required?: boolean;
}

const css = classNames.bind(styles);

export const Label = ({ children, htmlFor, required, id, ...props }: LabelProps) => {
  const classes = css('ali-dev-label');
  return (
    <label htmlFor={htmlFor} className={classes} id={id} {...props}>
      {children} {required && <Icon name="asterisk" />}
    </label>
  );
};
