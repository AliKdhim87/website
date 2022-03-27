import { Layout } from '@/components/global';
import { Form, InputField, Textarea, Button, Grid, Container } from '@/components/reusable';
import { PageHeader } from '@/components/slices';
import { client, createNavData, uuidv4 } from '@/utils';
import { Route, SiteSettings } from 'generated/graphql';
import { GetStaticProps, NextPage } from 'next';
import { GET_PAGE_BY_SLUG } from 'queries/index.graphql';

interface AboutPageProps {
  SiteSettings: SiteSettings;
  Route: Route;
}

const Contact: NextPage<AboutPageProps> = ({ SiteSettings: { navigation, footer }, Route: { openGraph, page } }) => (
  <Layout seo={openGraph} footer={footer?.copyright} nav={createNavData(navigation)}>
    {page?.content?.map((component) => {
      if (component?.__typename === 'PageHeader') {
        return <PageHeader title={component.title} key={uuidv4()} />;
      }
    })}
    <Container>
      <Grid container justifyContent="center">
        <Grid lg={6} md={10} sm={12} xs={12}>
          <Form>
            <InputField label="Full name" placeholder="Write your Full name here" required />
            <InputField type="email" label="Email" placeholder="Write your Email here" required />
            <Textarea label="Message" placeholder="Write your Message here" required />
            <Button variant="secondary" text="Submit" type="submit" />
          </Form>
        </Grid>
      </Grid>
    </Container>
  </Layout>
);

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
