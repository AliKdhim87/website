import type { DetailedHTMLProps, ForwardedRef, InputHTMLAttributes } from 'react';
import { forwardRef, useId } from 'react';

import classNames from 'classnames/bind';

import styles from './InputField.module.scss';
import { FormGroup } from '../FormGroup';
import { HelperText } from '../HelperText';
import { Label } from '../Label';

const css = classNames.bind(styles);

interface InputFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  label: string;
}

export const InputField = forwardRef(
  (
    { type = 'tex', required, error, label, helperText, disabled, ...props }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const id = useId();
    const ariaLabelledby = useId();
    const ariaDescribedby = useId();
    const inputFieldClasses = css('ali-dev-input-field', { 'ali-dev-input-field--error': error });

    return (
      <FormGroup>
        <Label required={required} htmlFor={id} id={ariaLabelledby}>
          {label}
        </Label>
        <input
          type={type}
          id={id}
          aria-invalid={error}
          disabled={disabled}
          className={inputFieldClasses}
          aria-describedby={ariaDescribedby}
          ref={ref}
          {...props}
        />
        <HelperText error={error} id={ariaDescribedby}>
          {helperText}
        </HelperText>
      </FormGroup>
    );
  },
);
InputField.displayName = 'InputField';
