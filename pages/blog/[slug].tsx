import { ParsedUrlQuery } from 'querystring';

import { PortableText } from '@portabletext/react';
import { GetStaticProps, NextPage } from 'next';
import Image, { ImageProps } from 'next/image';
import { useRouter } from 'next/router';

import { Layout } from '@/components/global';
import {
  Container,
  Grid,
  Typography,
  BlogPostTitle,
  PortableTextComponents,
  GraphComment,
} from '@/components/reusable';
import { Tags } from '@/components/slices';
import { client, createNavData } from '@/utils';
import { GetAllBlogSlugsQuery, GetBlogBySlugQuery, GetSiteSettingsQuery, Post, SiteSettings } from 'generated/graphql';
import { GET_ALL_BLOG_SLUGS, GET_BLOG_BY_SLUG, GET_SITE_SETTINGS } from 'queries/index.graphql';

interface PostPageProps {
  post: Post;
  siteSettings: SiteSettings;
}

const PostPage: NextPage<PostPageProps> = ({ post, siteSettings: { footer, navigation, schemaOrg } }) => {
  const { asPath } = useRouter();
  const { title, bodyRaw, categories, excerpt, mainImage, publishedAt } = post;
  const seo = {
    title,
    description: excerpt,
    image: mainImage as ImageProps,
    ogUrl: `${schemaOrg?.website}${asPath}`,
    ogTitle: title,
  };

  return (
    <Layout footer={footer?.copyright} nav={createNavData(navigation)} seo={seo} schemaOrg={schemaOrg}>
      <>
        {mainImage &&
          mainImage.alt &&
          mainImage.asset &&
          mainImage.asset.url &&
          mainImage.asset.metadata?.dimensions?.width &&
          mainImage.asset.metadata?.dimensions?.height && (
            <Container>
              <Image
                src={mainImage.asset.url}
                alt={mainImage.alt}
                width={mainImage.asset.metadata.dimensions.width}
                height={mainImage.asset.metadata.dimensions.height}
                loading="eager"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </Container>
          )}
        <>
          <Container className="space-pb-3">
            <Typography as="span" variant="body" bodySize="mobile">
              {publishedAt}
            </Typography>
          </Container>
          <BlogPostTitle title={title} />
          <Container>
            <Grid container justifyContent="center">
              <Grid md={10} item>
                {categories && <Tags tags={categories} />}
                <PortableText onMissingComponent={false} value={bodyRaw} components={PortableTextComponents} />
              </Grid>
            </Grid>
            <GraphComment />
          </Container>
        </>
      </>
    </Layout>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const { data } = await client.query<GetAllBlogSlugsQuery>({
    query: GET_ALL_BLOG_SLUGS,
  });
  const paths = data.allPost.map((post) => ({ params: { slug: post.slug?.current } }));

  return {
    paths,
    fallback: 'blocking',
  };
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;

  const { data } = await client.query<GetBlogBySlugQuery>({
    query: GET_BLOG_BY_SLUG,
    variables: { slug },
  });
  const {
    data: { SiteSettings: siteSettings },
  } = await client.query<GetSiteSettingsQuery>({
    query: GET_SITE_SETTINGS,
  });

  if (data.allPost.length === 0) {
    return {
      notFound: true,
    };
  }
  return { props: { post: data.allPost[0], siteSettings } };
};
