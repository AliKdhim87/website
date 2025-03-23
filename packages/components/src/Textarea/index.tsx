import type { DetailedHTMLProps, ForwardedRef, TextareaHTMLAttributes } from 'react';
import { forwardRef, useId } from 'react';

import classNames from 'classnames/bind';

import styles from './Textarea.module.scss';
import { FormGroup } from '../FormGroup';
import { HelperText } from '../HelperText';
import { Label } from '../Label';

const css = classNames.bind(styles);

interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  error?: boolean;
  helperText?: string;
  label: string;
}

export const Textarea = forwardRef(
  (
    { required, error, label, helperText, disabled, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    const id = useId();
    const ariaLabelledby = useId();
    const ariaDescribedby = useId();
    const textareaClasses = css('ali-dev-textarea', { 'ali-dev-textarea--error': error });
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
        <HelperText error={error} id={ariaDescribedby}>
          {helperText}
        </HelperText>
      </FormGroup>
    );
  },
);
Textarea.displayName = 'Textarea';
