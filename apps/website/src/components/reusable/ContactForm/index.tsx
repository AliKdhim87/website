'use client';

import { SyntheticEvent, useCallback } from 'react';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Button, Typography, Heading, InputField, Textarea, Form } from '@/components';

interface ContactFormProps {
  onAction: (formData: FormData) => Promise<any>;
}

export const ContactForm = ({ onAction }: ContactFormProps) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const {
    register,
    trigger,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const handleButtonClick = async () => {
    await trigger();
  };

  const toastify = (message: string, type: 'error' | 'success') => {
    toast[type](message, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSubmit = useCallback(
    async (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!executeRecaptcha) {
        toastify('reCAPTCHA not ready. Please try again.', 'error');
        return;
      }
      const formData = new FormData(e.currentTarget);
      const token = await executeRecaptcha('contact_form');
      formData.append('recaptchaToken', token);
      const res = await onAction(formData);
      switch (res.status) {
        case 200:
          toastify(res.message, 'success');
          reset();
          break;
        case 400:
        case 429:
        case 500:
          toastify(res.message, 'error');
          break;
        default:
          break;
      }
    },
    [executeRecaptcha, onAction, reset],
  );

  return (
    <>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <InputField
          {...register('fullname', {
            required: {
              value: true,
              message: 'Please enter your full name',
            },
          })}
          label="Full name"
          name="fullname"
          placeholder="Write your Full name here"
          helperText={errors.fullname?.message?.toString()}
          aria-required="true"
          error={!!errors.fullname}
          required
        />
        <InputField
          required
          {...register('email', {
            required: {
              value: true,
              message: 'Please enter your email',
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address',
            },
          })}
          type="email"
          label="Email"
          name="email"
          aria-required="true"
          placeholder="Write your Email here"
          helperText={errors.email?.message?.toString()}
          error={!!errors.email}
        />
        <Textarea
          required
          label="Message"
          {...register('message', {
            required: {
              value: true,
              message: 'Please enter your message',
            },
          })}
          name="message"
          aria-required="true"
          placeholder="Write your Message here"
          helperText={errors.message?.message?.toString()}
          error={!!errors.message}
        />
        <Button
          variant="secondary"
          type="submit"
          className="space-mb-start-2"
          disabled={Boolean(Object.keys(errors).length)}
          onClick={handleButtonClick}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};
// TODO: move the content to the CMS
export const ContactIntro = () => (
  <>
    <Heading level={2} variant="h3">
      Let&apos;s Connect and Make Something Awesome
    </Heading>
    <Typography>
      Whether you&apos;re exploring new ideas, need help with a project, or just have questions, I&apos;m here to chat!
      With a passion for creating seamless, user-friendly digital experiences, I love collaborating on exciting
      projects. Reach out, whether it&apos;s for a quick question or a bigger conversation. Let&apos;s turn your vision
      into reality together!
    </Typography>
  </>
);
ContactIntro.displayName = 'ContactIntro';
