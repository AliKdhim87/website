import classNames from 'classnames/bind';
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';

import { FormGroup } from '../FormGroup';

import styles from './InputField.module.scss';

import { Label, HelperText } from '@/components/reusable';
import { uuidv4 } from '@/utils';

const css = classNames.bind(styles);

interface InputFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  label: string;
}

const forwardRefInputField = (
  { type = 'tex', required, error, label, helperText, disabled, ...props }: InputFieldProps,
  ref: React.LegacyRef<HTMLInputElement> | undefined,
) => {
  const id = uuidv4();
  const ariaLabelledby = uuidv4();
  const ariaDescribedby = uuidv4();
  const inputFieldClasses = css('input-field', { 'input-field--error': error });

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
      <HelperText error={error} id={ariaDescribedby} helperText={helperText} />
    </FormGroup>
  );
};

export const InputField = forwardRef(forwardRefInputField);
