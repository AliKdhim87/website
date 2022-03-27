import Image from 'next/image';
import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';

import { Layout } from '@/components/global';
import { GetAllBlogSlugsQuery, GetBlogBySlugQuery, GetSiteSettingsQuery, Post, SiteSettings } from 'generated/graphql';
import { GET_ALL_BLOG_SLUGS, GET_BLOG_BY_SLUG, GET_SITE_SETTINGS } from 'queries/index.graphql';

import { client, createNavData } from '@/utils';
import { Container, Grid, BlockCode, SnippetCodeType, Typography, BlogPostTitle } from '@/components/reusable';
import { Tags } from '@/components/slices';
import { GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface PostProps {
  post: Post;
  SiteSettings: SiteSettings;
}

const Post: NextPage<PostProps> = ({ post, SiteSettings: { footer, navigation } }) => {
  const { title, bodyRaw, categories, excerpt, mainImage, publishedAt } = post;
  const seo = { title, description: excerpt };
  const serializers: Partial<PortableTextReactComponents> = {
    types: {
      code: ({ value: { language, code } }: { value: SnippetCodeType }) => (
        <BlockCode language={language} code={code} />
      ),
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

          return imageUrl ? (
            <Image loading="eager" src={imageUrl} alt={value.alt} width={width} height={height} />
          ) : null;
        } else {
          return null;
        }
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
          </Container>
        </>
      </>
    </Layout>
  );
};

export default Post;

export async function getStaticPaths() {
  const { data } = await client.query<GetAllBlogSlugsQuery>({
    query: GET_ALL_BLOG_SLUGS,
  });
  const paths = data.allPost.map((post) => {
    return { params: { slug: post.slug?.current } };
  });

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
    data: { SiteSettings },
  } = await client.query<GetSiteSettingsQuery>({
    query: GET_SITE_SETTINGS,
  });

  if (data.allPost.length === 0) {
    return {
      notFound: true,
    };
  } else {
    return { props: { post: data.allPost[0], SiteSettings }, revalidate: 60 };
  }
};
