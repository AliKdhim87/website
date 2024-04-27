import type { Metadata } from 'next';
import wretch from 'wretch';

import { Grid, Container } from '@/components/reusable';
import { ContactForm } from '@/components/reusable/ContactForm';
import { PageHeader } from '@/components/slices';
import { uuidv4 } from '@/utils';
import { GetContactPageQuery } from '@/graphql-types';
import { GET_CONTACT_PAGE } from 'queries/index.graphql';

async function fetchData() {
  try {
    const response = await wretch(process.env.SCHEMA_URL).post({
      query: GET_CONTACT_PAGE,
      variables: { slug: 'contact' },
    });
    const { data } = await response.json<{ data: GetContactPageQuery }>();
    return {
      openGraph: data.allRoute[0].openGraph,
      page: data.allRoute[0].page,
      schemaOrg: data.allSiteSettings[0].schemaOrg,
    };
  } catch (error) {
    throw new Error('Server error');
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const { openGraph, schemaOrg } = await fetchData();
  const slug = 'contact';
  return {
    title: openGraph?.title,
    description: openGraph?.description,
    openGraph: {
      images: openGraph?.image?.asset?.url || undefined,
      description: openGraph?.description || undefined,
      url: `${schemaOrg?.website}/${slug}`,
      title: schemaOrg?.openGraph?.title || undefined,
      type: 'website',
      locale: 'en',
    },
  };
}

const onEmailSubmit = async (fromData: FormData) => {
  'use server';

  const fullname = fromData.get('fullname');
  const email = fromData.get('email');
  const message = fromData.get('message');

  if (!fullname && !email && !message)
    return {
      status: 400,
      message: 'Please fill out all fields',
    };

  if (
    !process.env.EMAIL_SERVICE_ID &&
    !process.env.EMAIL_TEMPLATE_ID &&
    !process.env.EMAIL_USER_ID &&
    !process.env.EMAIL_ACCESS_TOKEN
  ) {
    return {
      status: 500,
      message: 'Something went wrong! Email not sent',
    };
  }

  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        service_id: process.env.EMAIL_SERVICE_ID,
        template_id: process.env.EMAIL_TEMPLATE_ID,
        user_id: process.env.EMAIL_USER_ID,
        accessToken: process.env.EMAIL_ACCESS_TOKEN,
        template_params: {
          fullname,
          email,
          message,
        },
      }),
    });
    if (res.status === 200) {
      return {
        status: res.status,
        message: 'Email sent successfully',
      };
    }

    return {
      status: 500,
      message: 'Something went wrong! Email not sent',
    };
  } catch (error) {
    return {
      status: 500,
      message: 'Something went wrong! Email not sent',
    };
  }
};

const Contact = async () => {
  const { page } = await fetchData();
  return (
    <>
      {page?.content?.map(
        (component) => component?.__typename === 'PageHeader' && <PageHeader title={component.title} key={uuidv4()} />,
      )}
      <Container>
        <Grid container justifyContent="center">
          <Grid item md={8}>
            <ContactForm onAction={onEmailSubmit} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
