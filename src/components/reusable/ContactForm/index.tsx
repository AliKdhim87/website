'use client';

import classnames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Form, InputField, Textarea, Button, Heading, Typography } from '@/components/reusable';

import styles from './styles.module.scss';

const css = classnames.bind(styles);
interface ContactFormProps {
  onAction: (formData: FormData) => Promise<any>;
}

export const ContactForm = ({ onAction }: ContactFormProps) => {
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

  return (
    <>
      <ToastContainer />
      <Form
        action={(formData) => {
          onAction(formData).then((res) => {
            switch (res.status) {
              case 200:
                toastify(res.message, 'success');
                reset();
                break;
              case 400:
                toastify(res.message, 'error');
                break;
              case 500:
                toastify(res.message, 'error');
                break;
              default:
                break;
            }
          });
        }}
      >
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
        />
        <InputField
          {...register('email', {
            required: {
              value: true,
              message: 'Please enter your email',
            },
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
  <div className={css('contact__intro')}>
    <Heading level={2} variant="h3">
      Let's Connect and Make Something Awesome
    </Heading>
    <Typography>
      Whether you’re exploring new ideas, need help with a project, or just have questions, I’m here to chat! With a
      passion for creating seamless, user-friendly digital experiences, I love collaborating on exciting projects. Reach
      out, whether it’s for a quick question or a bigger conversation. Let’s turn your vision into reality together!
    </Typography>
  </div>
);
ContactIntro.displayName = 'ContactIntro';
