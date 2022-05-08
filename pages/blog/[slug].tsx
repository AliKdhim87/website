import { ParsedUrlQuery } from 'querystring';

import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import urlBuilder from '@sanity/image-url';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import { Layout } from '@/components/global';
import { Container, Grid, BlockCode, Typography, BlogPostTitle, GraphComment } from '@/components/reusable';
import { Tags } from '@/components/slices';
import { client, createNavData } from '@/utils';
import { GetAllBlogSlugsQuery, GetBlogBySlugQuery, GetSiteSettingsQuery, Post, SiteSettings } from 'generated/graphql';
import { GET_ALL_BLOG_SLUGS, GET_BLOG_BY_SLUG, GET_SITE_SETTINGS } from 'queries/index.graphql';

interface PostPageProps {
  post: Post;
  siteSettings: SiteSettings;
}

const serializers: Partial<PortableTextReactComponents> = {
  types: {
    code: ({ value: { language, code } }) => <BlockCode language={language} code={code} />,
    mainImage: ({ value }) => {
      if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET) {
        const { width, height } = getImageDimensions(value);
        const imageUrl = urlBuilder({
          projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
          dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        })
          .image(value.asset._ref)
          .width(800)
          .fit('max')
          .auto('format')
          .url();

        return imageUrl ? <Image loading="eager" src={imageUrl} alt={value.alt} width={width} height={height} /> : null;
      }
      return null;
    },
  },
  block: {
    h2: ({ children }) => (
      <Typography as="h2" variant="h2" className="space-mb-2">
        {children}
      </Typography>
    ),
    normal: ({ children }) => (
      <Typography as="p" variant="body" className="space-mb-1">
        {children}
      </Typography>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-color">
        <Typography as="p" variant="body">
          {children}
        </Typography>
      </li>
    ),
  },
};

const PostPage: NextPage<PostPageProps> = ({ post, siteSettings: { footer, navigation } }) => {
  const { title, bodyRaw, categories, excerpt, mainImage, publishedAt } = post;
  const seo = { title, description: excerpt };

  return (
    <Layout footer={footer?.copyright} nav={createNavData(navigation)} seo={seo}>
      <>
        {mainImage && mainImage.alt && mainImage.asset && mainImage.asset.url && (
          <Container>
            <Image
              src={mainImage.asset.url}
              alt={mainImage.alt}
              width={mainImage.asset.metadata?.dimensions?.width || ''}
              height={mainImage.asset.metadata?.dimensions?.height || ''}
              loading="eager"
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
                <PortableText onMissingComponent={false} value={bodyRaw} components={serializers} />
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
  return { props: { post: data.allPost[0], siteSettings }, revalidate: 60 };
};
