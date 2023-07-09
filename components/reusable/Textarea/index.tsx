import classNames from 'classnames/bind';
import React, { DetailedHTMLProps, TextareaHTMLAttributes, forwardRef } from 'react';

import { uuidv4 } from '@/utils';

import { FormGroup } from '../FormGroup';
import { HelperText } from '../HelperText';
import { Label } from '../Label';

import styles from './Textarea.module.scss';

const css = classNames.bind(styles);

interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  error?: boolean;
  helperText?: string;
  label: string;
}

const forwardRefTextarea = (
  { required, error, label, helperText, disabled, ...props }: TextareaProps,
  ref: React.LegacyRef<HTMLTextAreaElement> | undefined,
) => {
  const id = uuidv4();
  const ariaLabelledby = uuidv4();
  const ariaDescribedby = uuidv4();
  const textareaClasses = css('textarea', { 'textarea--error': error });
  return (
    <FormGroup>
      <Label required={required} htmlFor={id} id={ariaLabelledby}>
        {label}
      </Label>
      <textarea
        rows={6}
        id={id}
        aria-invalid={error}
        disabled={disabled}
        className={textareaClasses}
        aria-describedby={ariaDescribedby}
        ref={ref}
        {...props}
      />
      <HelperText error={error} id={ariaDescribedby} helperText={helperText} />
    </FormGroup>
  );
};

export const Textarea = forwardRef(forwardRefTextarea);
