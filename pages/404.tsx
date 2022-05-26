import { GetStaticProps, NextPage } from 'next';

import { Layout, SEOTypes } from '@/components/global';
import { Container, Grid } from '@/components/reusable';
import { PageHeader } from '@/components/slices';
import { client, createNavData, uuidv4 } from '@/utils';
import { Route, SiteSettings } from 'generated/graphql';
import NotfoundSvg from 'public/404.svg';
import { GET_PAGE_BY_SLUG } from 'queries/index.graphql';

interface Custom404Props {
  SiteSettings: SiteSettings;
  Route: Route;
}

const Custom404: NextPage<Custom404Props> = ({
  SiteSettings: { navigation, footer, schemaOrg },
  Route: { openGraph, page },
}) => (
  <Layout seo={openGraph as SEOTypes} footer={footer?.copyright} nav={createNavData(navigation)} schemaOrg={schemaOrg}>
    <Container>
      <Grid container justifyContent="center">
        <Grid sm={12} md={8} xs={12} className="text-color">
          <NotfoundSvg />
        </Grid>
      </Grid>
      {page?.content?.map((component) => {
        if (component?.__typename === 'PageHeader') {
          // TODO make this nicer
          return (
            <PageHeader
              title={component.title}
              body={component.body}
              cta={component.cta}
              backgroundColor="transparent"
              titleDistancedBottom
              key={uuidv4()}
            />
          );
        }
        return null;
      })}
    </Container>
  </Layout>
);

export default Custom404;

export const getStaticProps: GetStaticProps = async () => {
  const { data: pageData } = await client.query({
    query: GET_PAGE_BY_SLUG,
    variables: { slug: 'page-not-found' },
  });

  return {
    props: {
      Route: pageData.allRoute[0],
      SiteSettings: pageData.SiteSettings,
    },
  };
};
