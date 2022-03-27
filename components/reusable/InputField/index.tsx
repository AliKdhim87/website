import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import { Label, HelperText } from '@/components/reusable';

import styles from './InputField.module.scss';
import { uuidv4 } from '@/utils';
import { FormGroup } from '../FormGroup';

const css = classNames.bind(styles);

interface InputFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  label: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  type = 'tex',
  required,
  error,
  label,
  helperText,
  disabled,
  ...props
}) => {
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
        {...props}
      />
      <HelperText error={error} id={ariaDescribedby} helperText={helperText} />
    </FormGroup>
  );
};
