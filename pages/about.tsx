import { Layout } from '@/components/global';
import { MoreAbout, PageHeader } from '@/components/slices';
import { client, createNavData, uuidv4 } from '@/utils';
import { Route, SiteSettings } from 'generated/graphql';
import { GetStaticProps, NextPage } from 'next';
import { GET_PAGE_BY_SLUG } from 'queries/index.graphql';
interface AboutPageProps {
  SiteSettings: SiteSettings;
  Route: Route;
}

const AboutPage: NextPage<AboutPageProps> = ({ SiteSettings: { navigation, footer }, Route: { openGraph, page } }) => (
  <Layout seo={openGraph} footer={footer?.copyright} nav={createNavData(navigation)}>
    {page?.content?.map((component) => {
      switch (component?.__typename) {
        case 'PageHeader':
          const image = {
            src: component.image?.asset?.url,
            alt: component.image?.alt,
            width: component.image?.asset?.metadata?.dimensions?.width,
            height: component.image?.asset?.metadata?.dimensions?.height,
          };
          return (
            <PageHeader
              title={component.title}
              body={component.body}
              image={image as any}
              titleDistancedBottom
              key={uuidv4()}
            />
          );

        case 'AboutMe':
          return (
            <MoreAbout
              introduction={component.aboutIntroductionRaw}
              moreAboutItems={component.aboutMeItems}
              key={uuidv4()}
            />
          );
        default:
          return null;
      }
    })}
  </Layout>
);

export default AboutPage;

export const getStaticProps: GetStaticProps = async () => {
  const { data: pageData } = await client.query({
    query: GET_PAGE_BY_SLUG,
    variables: { slug: 'about' },
  });

  return {
    props: {
      Route: pageData.allRoute[0],
      SiteSettings: pageData.SiteSettings,
    },
    revalidate: 60,
  };
};
