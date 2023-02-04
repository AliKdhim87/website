import { sendForm } from '@emailjs/browser';
import { GetStaticProps, NextPage } from 'next';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import { Layout, SEOTypes } from '@/components/global';
import { Form, InputField, Textarea, Button, Grid, Container } from '@/components/reusable';
import { PageHeader } from '@/components/slices';
import { client, createNavData, uuidv4 } from '@/utils';
import { Route, SiteSettings } from 'generated/graphql';
import { GET_PAGE_BY_SLUG } from 'queries/index.graphql';

interface AboutPageProps {
  SiteSettings: SiteSettings;
  Route: Route;
}

const Contact: NextPage<AboutPageProps> = ({
  SiteSettings: { navigation, footer, schemaOrg },
  Route: { openGraph, page },
}) => {
  const [isBsy, setIsBsy] = useState(false);
  const form = useRef<any>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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

  const onEmailSubmit = async () => {
    try {
      if (
        process.env.NEXT_PUBLIC_EMAIL_SERVICE &&
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID &&
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      ) {
        setIsBsy(true);
        const { status } = await sendForm(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE,
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAIL_USER_ID,
        );

        setIsBsy(false);
        if (status === 200) {
          toastify('Email sent successfully', 'success');
          reset();
        } else {
          toastify('Something went wrong! Email not sent', 'error');
        }
      } else {
        toastify('Something went wrong! Email not sent', 'error');
      }
    } catch (error) {
      setIsBsy(false);
      toastify('Something went wrong! Email not sent', 'error');
    }
  };

  return (
    <Layout
      seo={openGraph as SEOTypes}
      footer={footer?.copyright}
      nav={createNavData(navigation)}
      schemaOrg={schemaOrg}
    >
      {page?.content?.map(
        (component) => component?.__typename === 'PageHeader' && <PageHeader title={component.title} key={uuidv4()} />,
      )}
      <Container>
        <ToastContainer />
        <Grid container justifyContent="center">
          <Grid lg={6} md={10} sm={12} xs={12}>
            <Form onSubmit={handleSubmit(onEmailSubmit)} ref={form}>
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
                helperText={errors?.fullname?.message?.toString()}
                aria-required="true"
                error={!!errors?.fullname}
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
                helperText={errors?.email?.message?.toString()}
                error={!!errors?.email}
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
                helperText={errors?.message?.message?.toString()}
                error={!!errors?.message}
              />
              <Button
                variant="secondary"
                text="Submit"
                type="submit"
                loading={isBsy}
                className="space-mb-start-2"
                disabled={Boolean(Object.keys(errors).length) || isBsy}
              />
            </Form>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async () => {
  const { data: pageData } = await client.query({
    query: GET_PAGE_BY_SLUG,
    variables: { slug: 'contact' },
  });

  return {
    props: {
      Route: pageData.allRoute[0],
      SiteSettings: pageData.SiteSettings,
    },
  };
};
