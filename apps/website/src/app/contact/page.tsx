import type { Metadata } from 'next';
import { headers, draftMode } from 'next/headers';
import { filterXSS } from 'xss';

import { ContactForm, ContactIntro } from '@/components/reusable/ContactForm';
import { RecaptchaProvider } from '@/components/reusable/ContactForm/RecaptchaProvider';
import { PageHeader, Grid, Container, Page } from '@/components/server';
import { GetContactPageQuery } from '@/graphql-types';
import { GET_CONTACT_PAGE } from '@/queries/index.graphql';
import { fetchData, sanityGraphqlAPIUrl, uuidv4 } from '@/utils';

const apiUrl = sanityGraphqlAPIUrl({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_GRAPHQL_API_VERSION,
});

const getContactPage = async () => {
  const { allRoute, allSiteSettings } = await fetchData<GetContactPageQuery>({
    query: GET_CONTACT_PAGE,
    variables: { slug: 'contact' },
    apiUrl,
    isDraftMode: (await draftMode()).isEnabled,
  });

  return {
    openGraph: allRoute[0].openGraph,
    page: allRoute[0].page,
    schemaOrg: allSiteSettings[0].schemaOrg,
  };
};
export async function generateMetadata(): Promise<Metadata> {
  const { openGraph, schemaOrg } = await getContactPage();

  const slug = 'contact';
  return {
    title: openGraph?.title,
    description: openGraph?.description,
    alternates: {
      canonical: `/${slug}`,
    },
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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTHS = { fullname: 100, email: 254, message: 2000 };

const verifyRecaptcha = async (token: string): Promise<boolean> => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return false;
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secret}&response=${token}`,
  });
  const data = await res.json();
  return data.success === true && data.score >= 0.5;
};

// In-memory rate limiter: max 3 submissions per IP per 60 seconds
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60_000;

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
};

const onEmailSubmit = async (fromData: FormData) => {
  'use server';

  const ip = (await headers()).get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (!checkRateLimit(ip)) {
    return { status: 429, message: 'Too many requests. Please try again later.' };
  }

  const recaptchaToken = fromData.get('recaptchaToken')?.toString() ?? '';
  if (!recaptchaToken || !(await verifyRecaptcha(recaptchaToken))) {
    return { status: 400, message: 'reCAPTCHA verification failed. Please try again.' };
  }

  const fullname = fromData.get('fullname')?.toString().trim() ?? '';
  const email = fromData.get('email')?.toString().trim() ?? '';
  const message = fromData.get('message')?.toString().trim() ?? '';

  if (!fullname || !email || !message) return { status: 400, message: 'Please fill out all fields' };

  if (
    fullname.length > MAX_LENGTHS.fullname ||
    email.length > MAX_LENGTHS.email ||
    message.length > MAX_LENGTHS.message
  )
    return { status: 400, message: 'One or more fields exceed the maximum allowed length' };

  if (!EMAIL_REGEX.test(email)) return { status: 400, message: 'Please enter a valid email address' };

  if (
    !process.env.EMAIL_SERVICE_ID ||
    !process.env.EMAIL_TEMPLATE_ID ||
    !process.env.EMAIL_USER_ID ||
    !process.env.EMAIL_ACCESS_TOKEN
  ) {
    return { status: 500, message: 'Something went wrong! Email not sent' };
  }

  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        service_id: process.env.EMAIL_SERVICE_ID,
        template_id: process.env.EMAIL_TEMPLATE_ID,
        user_id: process.env.EMAIL_USER_ID,
        accessToken: process.env.EMAIL_ACCESS_TOKEN,
        template_params: {
          fullname: filterXSS(fullname),
          email: filterXSS(email),
          message: filterXSS(message),
        },
      }),
    });
    if (res.status === 200) return { status: 200, message: 'Email sent successfully' };
    return { status: 500, message: 'Something went wrong! Email not sent' };
  } catch (error) {
    console.error(error);
    return { status: 500, message: 'Something went wrong! Email not sent' };
  }
};

const Contact = async () => {
  const { page } = await getContactPage();
  return (
    <>
      {page?.content?.map(
        (component) => component?.__typename === 'PageHeader' && <PageHeader title={component.title} key={uuidv4()} />,
      )}
      <Container>
        <Page>
          <Grid container justifyContent="center">
            <Grid item md={8}>
              <ContactIntro />
              <RecaptchaProvider>
                <ContactForm onAction={onEmailSubmit} />
              </RecaptchaProvider>
            </Grid>
          </Grid>
        </Page>
      </Container>
    </>
  );
};

export default Contact;
