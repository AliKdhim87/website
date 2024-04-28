import type { Metadata } from 'next';
import Image from 'next/image';

import {
  Container,
  Typography,
  BlogPostTitle,
  PortableTextComponents,
  GraphComment,
  PortableText,
} from '@/components/reusable';
import { Tags } from '@/components/slices';
import { GetAllBlogSlugsQuery, GetBlogBySlugQuery } from '@/graphql-types';
import { GET_ALL_BLOG_SLUGS, GET_BLOG_BY_SLUG } from 'queries/index.graphql';
import { formattedDate } from 'utils/formattedDate';
import { fetchData } from 'utils/fetchData';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const data = await fetchData<GetAllBlogSlugsQuery>({
    query: GET_ALL_BLOG_SLUGS,
    options: {
      cache: 'force-cache',
    },
  });
  return data.allPost.length > 0
    ? data.allPost?.map(({ slug }) => ({
        slug: slug?.current,
      }))
    : [];
}

export async function generateMetadata({ params: { slug } }: Params): Promise<Metadata> {
  const data = await fetchData<GetBlogBySlugQuery>({
    query: GET_BLOG_BY_SLUG,
    variables: { slug },
  });

  const openGraph = {
    title: data.allPost[0].title,
    description: data.allPost[0].excerpt,
    schemaOrg: {
      images: data.allPost[0].mainImage,
      websiteURL: data.allSiteSettings[0].schemaOrg?.website,
      siteName: data.allSiteSettings[0].schemaOrg?.openGraph?.title,
      publishedTime: data.allPost[0].publishedAt,
      modifiedTime: data.allPost[0].updatedAt,
      tags: data.allPost[0].categories?.map((category) => category?.title),
    },
  };

  return {
    title: openGraph.title,
    description: openGraph.description,
    openGraph: {
      images: openGraph.schemaOrg.images?.asset?.url || undefined,
      url: `${openGraph.schemaOrg.websiteURL}/blog/${slug}`,
      title: openGraph.title || undefined,
      type: 'article',
      description: openGraph.description || undefined,
      siteName: openGraph.schemaOrg.siteName || undefined,
      publishedTime: openGraph.schemaOrg.publishedTime,
      modifiedTime: openGraph.schemaOrg.modifiedTime,
      locale: 'en',
      tags: openGraph.schemaOrg.tags as string[],
    },
  };
}

const PostPage = async ({ params: { slug } }: Params) => {
  const data = await fetchData<GetBlogBySlugQuery>({
    query: GET_BLOG_BY_SLUG,
    variables: { slug },
  });
  const page = data.allPost[0];
  const { title, bodyRaw, categories, mainImage, publishedAt, updatedAt } = page;

  return (
    <>
      {mainImage &&
        mainImage.alt &&
        mainImage.asset &&
        mainImage.asset.url &&
        mainImage.asset.metadata?.dimensions?.width &&
        mainImage.asset.metadata?.dimensions?.height && (
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
        )}
      <>
        <Container className="space-pb-3">
          <Typography bodySize="mobile">Published: {formattedDate(publishedAt)}</Typography>
          {updatedAt && <Typography bodySize="mobile">Last Updated: {formattedDate(updatedAt)}</Typography>}
        </Container>
        {title && <BlogPostTitle title={title} />}
        <Container>
          {/* TODO: CREATE BODY COMPONENT FOR PORTABLE TEXT */}
          {categories && <Tags tags={categories} />}
          <PortableText onMissingComponent={false} value={bodyRaw} components={PortableTextComponents} />
          <GraphComment />
        </Container>
      </>
    </>
  );
};

export default PostPage;
// const data = [
//   {
//     _type: 'block',
//     style: 'normal',
//     _key: '4bbd2497cded',
//     markDefs: [],
//     children: [
//       {
//         _key: 'bfc498b151760',
//         _type: 'span',
//         marks: [],
//         text: 'In the fast-paced world of web development, connecting the frontend to an ever-evolving backend can be a source of frustration. Changes in API properties or the introduction of new ones often require a time-consuming review of updated documentation—especially when dealing with external GraphQL APIs. This is where the power of code-generation tools shines. Codegen acts not only as a time-saver but also as a safeguard, automating the synchronization process and ensuring that your frontend speaks the same language as your backend, seamlessly.',
//       },
//     ],
//   },
//   {
//     markDefs: [],
//     children: [
//       {
//         _type: 'span',
//         marks: [],
//         text: 'Introduce Codegen',
//         _key: 'b69fe2011ed0',
//       },
//     ],
//     _type: 'block',
//     style: 'h2',
//     _key: 'd46477361cb7',
//   },
//   {
//     _key: '2d2b494d1a85',
//     markDefs: [],
//     children: [
//       {
//         _type: 'span',
//         marks: [],
//         text: 'Codegen is a tool that automatically creates code based on your GraphQL schema. It saves time by generating code like type definitions and query builders, tailored to your API, so you can focus on building your app instead of writing repetitive code.',
//         _key: 'afa70b83fd740',
//       },
//     ],
//     _type: 'block',
//     style: 'normal',
//   },
//   {
//     _type: 'block',
//     style: 'h2',
//     _key: 'c89fcad55753',
//     markDefs: [],
//     children: [
//       {
//         marks: [],
//         text: 'Prerequisites:',
//         _key: 'c1bb948bede9',
//         _type: 'span',
//       },
//     ],
//   },
//   {
//     _key: '8aeafd2beb5e',
//     listItem: 'bullet',
//     markDefs: [],
//     children: [
//       {
//         _type: 'span',
//         marks: [],
//         text: 'Basic GraphQL knowledge',
//         _key: 'ef7e8327a0e30',
//       },
//     ],
//     level: 1,
//     _type: 'block',
//     style: 'normal',
//   },
//   {
//     listItem: 'bullet',
//     markDefs: [],
//     children: [
//       {
//         _type: 'span',
//         marks: [],
//         text: 'Basic Next.js knowledge',
//         _key: '2ae1cc17a2f20',
//       },
//     ],
//     level: 1,
//     _type: 'block',
//     style: 'normal',
//     _key: '30f3493b4e49',
//   },
//   {
//     listItem: 'bullet',
//     markDefs: [],
//     children: [
//       {
//         _key: 'f15c1a456f590',
//         _type: 'span',
//         marks: [],
//         text: 'TypeScript installed in your project',
//       },
//     ],
//     level: 1,
//     _type: 'block',
//     style: 'normal',
//     _key: '73ea349dd81d',
//   },
//   {
//     _type: 'block',
//     style: 'normal',
//     _key: 'd3508f21d1a2',
//     listItem: 'bullet',
//     markDefs: [],
//     children: [
//       {
//         _key: 'e9caee91d83a0',
//         _type: 'span',
//         marks: [],
//         text: 'PNPM as your package manager',
//       },
//     ],
//     level: 1,
//   },
//   {
//     _key: '96a8115c7b5a',
//     markDefs: [],
//     children: [
//       {
//         _type: 'span',
//         marks: [],
//         text: 'Create Nextjs',
//         _key: '68aafdd1ae78',
//       },
//     ],
//     _type: 'block',
//     style: 'h2',
//   },
//   {
//     style: 'normal',
//     _key: 'e176ccf6a886',
//     markDefs: [],
//     children: [
//       {
//         _key: 'dcd76364c39d0',
//         _type: 'span',
//         marks: [],
//         text: "If you don't have an existing Next.js app, you can create one using the following command:",
//       },
//     ],
//     _type: 'block',
//   },
//   {
//     language: 'sh',
//     _key: 'b123c405395d',
//     code: 'npx create-next-app@latest --ts --use-np',
//     _type: 'code',
//   },
//   {
//     _key: '6ddc5aca38dc',
//     markDefs: [],
//     children: [
//       {
//         text: "Upon installation, you'll be prompted to configure your project. Here's a typical setup:",
//         _key: 'f305e6d9ac5d0',
//         _type: 'span',
//         marks: [],
//       },
//     ],
//     _type: 'block',
//     style: 'normal',
//   },
//   {
//     _type: 'code',
//     language: 'sh',
//     _key: 'bba2b7c9f63f',
//     code:
//       'Need to install the following packages:\n' +
//       'create-next-app@14.2.1\n' +
//       'Ok to proceed? (y)\n' +
//       '✔ What is your project named? … codegen-demo\n' +
//       '✔ Would you like to use ESLint? … No / Yes\n' +
//       '✔ Would you like to use Tailwind CSS? … No / Yes\n' +
//       '✔ Would you like to use `src/` directory? … No / Yes\n' +
//       '✔ Would you like to use App Router? (recommended) … No / Yes\n' +
//       '✔ Would you like to customize the default import alias (@/*)? … No / Yes\n' +
//       '',
//   },
//   {
//     style: 'normal',
//     _key: '215a78cc707e',
//     markDefs: [],
//     children: [
//       {
//         _key: 'fac6e8295d490',
//         _type: 'span',
//         marks: [],
//         text: 'Install the dependencies with:',
//       },
//     ],
//     _type: 'block',
//   },
//   {
//     _key: 'b0a16e560fc9',
//     code: 'pnpm install',
//     _type: 'code',
//     language: 'sh',
//   },
//   {
//     style: 'normal',
//     _key: '32f4e32c4a89',
//     markDefs: [],
//     children: [
//       {
//         _type: 'span',
//         marks: [],
//         text: 'Start the development server:',
//         _key: '38c935ff007c0',
//       },
//     ],
//     _type: 'block',
//   },
//   {
//     _type: 'code',
//     language: 'sh',
//     _key: '0f7655e948be',
//     code: 'pnpm dev',
//   },
//   {
//     children: [
//       {
//         _key: '54aa1fabc798',
//         _type: 'span',
//         marks: [],
//         text: 'Access your app at ',
//       },
//       {
//         _key: '1d226573ce9e',
//         _type: 'span',
//         marks: ['1d336ed5dcce'],
//         text: 'http://localhost:3000',
//       },
//       { _key: '69f92ad6fef2', _type: 'span', marks: [], text: '.' },
//     ],
//     _type: 'block',
//     style: 'normal',
//     _key: 'b41b1b8c90dc',
//     markDefs: [
//       {
//         _type: 'link',
//         href: 'http://localhost:3000/',
//         _key: '1d336ed5dcce',
//       },
//     ],
//   },
//   {
//     markDefs: [],
//     children: [
//       {
//         marks: [],
//         text: 'Integrate the GraphQl API ',
//         _key: 'b86b8d787e90',
//         _type: 'span',
//       },
//     ],
//     _type: 'block',
//     style: 'h2',
//     _key: 'f4af76852210',
//   },
//   {
//     children: [
//       {
//         text: 'If you already have an existing GraphQL API, you can skip this step. ',
//         _key: 'c6f336f6f0a5',
//         _type: 'span',
//         marks: [],
//       },
//     ],
//     _type: 'block',
//     style: 'normal',
//     _key: 'f8b9b7f13b8b',
//     markDefs: [],
//   },
//   {
//     markDefs: [
//       {
//         href: 'https://studio.apollographql.com/public/countries/variant/current/home',
//         _key: '287ed8f7257a',
//         _type: 'link',
//       },
//     ],
//     children: [
//       {
//         _type: 'span',
//         marks: [],
//         text: "Before we integrate Codegen, we need an API to test it. Fortunately, there are many free public GraphQL APIs available. In this blog post, we'll use the ",
//         _key: 'ea4649665fac0',
//       },
//       {
//         marks: ['287ed8f7257a'],
//         text: 'Countries',
//         _key: '590fe62edcb2',
//         _type: 'span',
//       },
//       {
//         text: ' GraphQL API.',
//         _key: '6603d2804414',
//         _type: 'span',
//         marks: [],
//       },
//     ],
//     _type: 'block',
//     style: 'normal',
//     _key: '34737cea87fd',
//   },
//   {
//     style: 'normal',
//     _key: 'e227307d5ff1',
//     markDefs: [],
//     children: [
//       {
//         _key: '649de1f84a520',
//         _type: 'span',
//         marks: [],
//         text: 'Create a ',
//       },
//       {
//         _type: 'span',
//         marks: ['code'],
//         text: 'queries.ts',
//         _key: '649de1f84a521',
//       },
//       {
//         _type: 'span',
//         marks: [],
//         text: ' file in the ',
//         _key: '649de1f84a522',
//       },
//       {
//         _key: '649de1f84a523',
//         _type: 'span',
//         marks: ['code'],
//         text: '/src',
//       },
//       {
//         _type: 'span',
//         marks: [],
//         text: ' directory to store all GraphQL queries:',
//         _key: '649de1f84a524',
//       },
//     ],
//     _type: 'block',
//   },
//   {
//     _type: 'code',
//     language: 'typescript',
//     _key: '75f091ee8b1b',
//     code:
//       'const gql = (query: string) => query; \n' +
//       '\n' +
//       'export const GET_ALL_COUNTRIES = gql(`\n' +
//       '\n' +
//       'query GetAllCountries {\n' +
//       '    countries {\n' +
//       '      name\n' +
//       '      emoji\n' +
//       '      code\n' +
//       '      phone\n' +
//       '    }\n' +
//       '  }\n' +
//       '`\n' +
//       ')',
//   },
//   {
//     markDefs: [],
//     children: [
//       {
//         _type: 'span',
//         marks: [],
//         text: 'To retrieve the countries, add the following code to ',
//         _key: '7c67c145b9af0',
//       },
//       {
//         _type: 'span',
//         marks: ['code'],
//         text: 'src/pages/index.tsx',
//         _key: '7c67c145b9af1',
//       },
//       { text: ':', _key: '7c67c145b9af2', _type: 'span', marks: [] },
//     ],
//     _type: 'block',
//     style: 'normal',
//     _key: 'bea89e68ceeb',
//   },
//   {
//     _type: 'code',
//     language: 'tsx',
//     _key: '627202cc2f2f',
//     code:
//       'import styles from "./page.module.css";\n' +
//       'import { GET_ALL_COUNTRIES } from "../queries";\n' +
//       '\n' +
//       'const fetchAllCounties = async () => {\n' +
//       '  try {\n' +
//       '    const res = await fetch("https://countries.trevorblades.com/graphql", {\n' +
//       '      method: "POST",\n' +
//       '      headers: {\n' +
//       '        "Content-Type": "application/json",\n' +
//       '      },\n' +
//       '      body: JSON.stringify({\n' +
//       '        query: GET_ALL_COUNTRIES,\n' +
//       '      }),\n' +
//       '    });\n' +
//       '    const { data } = await res.json();\n' +
//       '    return data;\n' +
//       '  } catch (error) {\n' +
//       '    console.error(error);\n' +
//       '  }\n' +
//       '};\n' +
//       '\n' +
//       'export default async function Home() {\n' +
//       '  const { countries } = await fetchAllCounties();\n' +
//       '  return (\n' +
//       '    <main className={styles.main}>\n' +
//       '      <h1 style={{ marginBlock: "3rem", fontSize: "4rem" }}>\n' +
//       '        Show All Countries\n' +
//       '      </h1>\n' +
//       '      <ul className={styles.grid}>\n' +
//       '        {countries &&\n' +
//       '          countries.length > 0 &&\n' +
//       '          countries.map((country) => (\n' +
//       '            <li key={country.code} className={styles.card}>\n' +
//       '              <h2>{country.name}</h2>\n' +
//       '              <span style={{ fontSize: "60px" }}>{country.emoji}</span>\n' +
//       '              <p>{country.code}</p>\n' +
//       '              <p>{country.phone}</p>\n' +
//       '            </li>\n' +
//       '          ))}\n' +
//       '      </ul>\n' +
//       '    </main>\n' +
//       '  );\n' +
//       '}\n' +
//       '',
//   },
//   {
//     _type: 'block',
//     style: 'normal',
//     _key: '9036e9890b0c',
//     markDefs: [],
//     children: [
//       {
//         marks: [],
//         text: "Let's analyze the code:",
//         _key: '2d0cd0178a0b0',
//         _type: 'span',
//       },
//     ],
//   },
//   {
//     style: 'normal',
//     _key: '5388f7574ca1',
//     markDefs: [],
//     children: [
//       {
//         _type: 'span',
//         marks: [],
//         text: 'We import styles from ',
//         _key: '688352d35c210',
//       },
//       {
//         marks: ['code'],
//         text: '/page.module.css',
//         _key: 'ba62015f4603',
//         _type: 'span',
//       },
//       {
//         marks: [],
//         text: ' for styling. This CSS file is generated by Next.js and uses CSS modules.',
//         _key: '610b61189cf4',
//         _type: 'span',
//       },
//     ],
//     _type: 'block',
//   },
//   {
//     _key: 'baae3e15a2d9',
//     markDefs: [],
//     children: [
//       {
//         _key: 'b2e9530f3b4d0',
//         _type: 'span',
//         marks: [],
//         text: 'We fetch countries directly in the page component without ',
//       },
//       {
//         _key: '11a23391c186',
//         _type: 'span',
//         marks: ['code'],
//         text: 'useEffect',
//       },
//       {
//         _key: 'e3278659bb17',
//         _type: 'span',
//         marks: [],
//         text: ", thanks to Next.js 14's capability to fetch data at the page level, including server-side rendering.",
//       },
//     ],
//     _type: 'block',
//     style: 'normal',
//   },
//   {
//     _key: '304698a30a79',
//     markDefs: [],
//     children: [
//       {
//         text: 'The Home page component effortlessly handles asynchronous operations using ',
//         _key: '746d877b2edc0',
//         _type: 'span',
//         marks: [],
//       },
//       {
//         _key: 'c23520489b38',
//         _type: 'span',
//         marks: ['strong'],
//         text: 'async/await',
//       },
//       { _type: 'span', marks: [], text: '.', _key: 'c0b88f65d247' },
//     ],
//     _type: 'block',
//     style: 'normal',
//   },
//   {
//     style: 'normal',
//     _key: '8bfd1d6f6b42',
//     markDefs: [],
//     children: [
//       {
//         text: 'The JSX code is straightforward, focusing on rendering the fetched data.',
//         _key: '657d0c24fb5c0',
//         _type: 'span',
//         marks: [],
//       },
//     ],
//     _type: 'block',
//   },
//   {
//     markDefs: [
//       {
//         _type: 'link',
//         href: 'http://localhost:3000/',
//         _key: '5eb93c875734',
//       },
//     ],
//     children: [
//       {
//         _type: 'span',
//         marks: [],
//         text: 'To test the fetch, ensure the local server is running and visit ',
//         _key: '50221a0779b30',
//       },
//       {
//         text: 'http://localhost:3000',
//         _key: '50221a0779b31',
//         _type: 'span',
//         marks: ['5eb93c875734'],
//       },
//       {
//         _key: '50221a0779b32',
//         _type: 'span',
//         marks: [],
//         text: ' for a comprehensive list of countries.',
//       },
//     ],
//     _type: 'block',
//     style: 'normal',
//     _key: 'd0549c84f90c',
//   },
//   {
//     _key: 'b7ec4f2651c1',
//     markDefs: [],
//     children: [
//       {
//         _key: '17532e91ed5a',
//         _type: 'span',
//         marks: [],
//         text: 'Integrate Codegen into Nextjs',
//       },
//     ],
//     _type: 'block',
//     style: 'h2',
//   },
//   {
//     style: 'normal',
//     _key: '41e125ad2d9d',
//     markDefs: [],
//     children: [
//       {
//         marks: [],
//         text: "After fetching the countries, we rendered them on the page. However, without type definitions, it's unclear what data structure the fetch function returns. This ambiguity is where Codegen becomes invaluable.",
//         _key: '1f41656ff35e0',
//         _type: 'span',
//       },
//     ],
//     _type: 'block',
//   },
//   {
//     style: 'h3',
//     _key: '553d93cebcfb',
//     markDefs: [],
//     children: [
//       {
//         _type: 'span',
//         marks: [],
//         text: 'Install Codegen',
//         _key: '2b9aca9e2ec3',
//       },
//     ],
//     _type: 'block',
//   },
//   {
//     _key: 'f080f3af0a28',
//     code: 'pnpm add graphql\npnpm add -D typescript @graphql-codegen/cli',
//     _type: 'code',
//     language: 'sh',
//   },
//   {
//     _type: 'block',
//     style: 'h3',
//     _key: '602c91c49eb7',
//     markDefs: [],
//     children: [
//       {
//         marks: [],
//         text: 'Add Codegen scripts to the ',
//         _key: 'e5be35a1ab98',
//         _type: 'span',
//       },
//       {
//         _type: 'span',
//         marks: ['code'],
//         text: 'package.json',
//         _key: 'a307758ad8e6',
//       },
//       { marks: [], text: ' ', _key: '566b28202758', _type: 'span' },
//     ],
//   },
//   {
//     _key: 'a4f2560a6ad5',
//     highlightedLines: [6, 7, 8],
//     code:
//       '  "scripts": {\n' +
//       '    "dev": "next dev",\n' +
//       '    "build": "next build",\n' +
//       '    "start": "next start",\n' +
//       '    "lint": "next lint",\n' +
//       '    "generate": "graphql-codegen",\n' +
//       '    "prebuild": "yarn generate",\n' +
//       '    "predev": "yarn generate"\n' +
//       '  },\n' +
//       '',
//     _type: 'code',
//     language: 'json',
//   },
//   {
//     style: 'h3',
//     _key: 'f5ee8c6545fa',
//     markDefs: [],
//     children: [
//       {
//         _type: 'span',
//         marks: [],
//         text: 'Add the Codegen configuration',
//         _key: '2fcf55c9e07a',
//       },
//     ],
//     _type: 'block',
//   },
//   {
//     markDefs: [],
//     children: [
//       {
//         marks: [],
//         text: 'Create a ',
//         _key: '47b736a2efea',
//         _type: 'span',
//       },
//       {
//         marks: ['code'],
//         text: 'codegen.ts',
//         _key: 'fd3f6043f087',
//         _type: 'span',
//       },
//       {
//         _type: 'span',
//         marks: [],
//         text: ' file at the root level and add the following:',
//         _key: 'f92b804a2c80',
//       },
//     ],
//     _type: 'block',
//     style: 'normal',
//     _key: 'd160728b4de1',
//   },
//   {
//     language: 'typescript',
//     _key: '6d87582ab570',
//     code:
//       "import { CodegenConfig } from '@graphql-codegen/cli'\n" +
//       ' \n' +
//       'const config: CodegenConfig = {\n' +
//       "    schema: 'https://countries.trevorblades.com/graphql',\n" +
//       "    documents: ['./src/queries.ts'],\n" +
//       '    generates: {\n' +
//       "        './generated/': {\n" +
//       "            preset: 'client',\n" +
//       '            plugins: [\n' +
//       "                'typescript',\n" +
//       "                'typescript-operations',\n" +
//       '                {\n' +
//       '                  add: {\n' +
//       "                    content: '// @ts-nocheck',\n" +
//       '                  },\n' +
//       '                },\n' +
//       '              ],\n' +
//       '        },\n' +
//       '    }\n' +
//       '}\n' +
//       ' \n' +
//       'export default config',
//     _type: 'code',
//   },
//   {
//     _key: '2192235f72e0',
//     markDefs: [],
//     children: [
//       {
//         _type: 'span',
//         marks: [],
//         text: "After restarting the server, you'll find the generated GraphQL types accessible under ",
//         _key: '20e8193297de0',
//       },
//       {
//         _type: 'span',
//         marks: ['code'],
//         text: 'graphql/generated/graphql.ts',
//         _key: '20e8193297de1',
//       },
//       { _key: '20e8193297de2', _type: 'span', marks: [], text: '.' },
//     ],
//     _type: 'block',
//     style: 'normal',
//   },
//   {
//     markDefs: [],
//     children: [
//       {
//         marks: [],
//         text: 'Now, update the ',
//         _key: 'b69db52c68d30',
//         _type: 'span',
//       },
//       {
//         text: 'pages/index.tsx',
//         _key: 'b69db52c68d31',
//         _type: 'span',
//         marks: ['code'],
//       },
//       {
//         text: ' file by incorporating the required types:',
//         _key: 'b69db52c68d32',
//         _type: 'span',
//         marks: [],
//       },
//     ],
//     _type: 'block',
//     style: 'normal',
//     _key: 'b29cc4c12b08',
//   },
//   {
//     highlightedLines: [3, 5],
//     code:
//       'import styles from "./page.module.css";\n' +
//       'import { GET_ALL_COUNTRIES } from "../queries";\n' +
//       'import { Query } from "../../generated/graphql";\n' +
//       '\n' +
//       'const fetchAllCounties = async (): Promise<Query | undefined> => {\n' +
//       '  try {\n' +
//       '    const res = await fetch("https://countries.trevorblades.com/graphql", {\n' +
//       '      method: "POST",\n' +
//       '      headers: {\n' +
//       '        "Content-Type": "application/json",\n' +
//       '      },\n' +
//       '      body: JSON.stringify({\n' +
//       '        query: GET_ALL_COUNTRIES,\n' +
//       '      }),\n' +
//       '    });\n' +
//       '    const { data } = await res.json();\n' +
//       '    return data;\n' +
//       '  } catch (error) {\n' +
//       '    console.error(error);\n' +
//       '  }\n' +
//       '};\n' +
//       '',
//     _type: 'code',
//     language: 'tsx',
//     _key: 'f8690815bf17',
//   },
//   {
//     _type: 'block',
//     style: 'normal',
//     _key: 'eebc62b12a6b',
//     markDefs: [],
//     children: [
//       {
//         marks: [],
//         text: "With these adjustments, TypeScript's auto-complete functionality becomes available, ensuring smoother integration of the GraphQL API with the frontend.",
//         _key: 'f45dbb57c516',
//         _type: 'span',
//       },
//     ],
//   },
//   {
//     markDefs: [],
//     children: [{ _key: 'f7d4ae441304', _type: 'span', marks: [], text: '' }],
//     _type: 'block',
//     style: 'normal',
//     _key: '92e199f1c84c',
//   },
//   {
//     style: 'normal',
//     _key: '6fed5555c753',
//     markDefs: [],
//     children:
//       Array(7)[
//         ({
//           text: "We're almost there. One final step remains: adding the ",
//           _key: '904d623c77d90',
//           _type: 'span',
//           marks: [],
//         },
//         {
//           _type: 'span',
//           marks: ['code'],
//           text: '/generate',
//           _key: 'e461122a55f5',
//         },
//         {
//           _type: 'span',
//           marks: [],
//           text: ' folder to the ',
//           _key: '6a761de2bc1d',
//         },
//         {
//           text: 'exclude',
//           _key: 'd7209ac31341',
//           _type: 'span',
//           marks: ['code'],
//         },
//         {
//           _type: 'span',
//           marks: [],
//           text: ' array in the ',
//           _key: '1a63299f7c2d',
//         },
//         {
//           _type: 'span',
//           marks: ['code'],
//           text: 'tsconfig.json',
//           _key: '39deb1a6bc16',
//         },
//         {
//           _key: '48c3d9f5ebdb',
//           _type: 'span',
//           marks: [],
//           text: ' file. This will instruct TypeScript to ignore this folder during the build process.',
//         })
//       ],
//     _type: 'block',
//   },
//   {
//     code:
//       '{\n' +
//       '  "compilerOptions": {\n' +
//       '  // the rest of the options are the same as in the generated tsconfig.json\n' +
//       '  },\n' +
//       '  "include": ["next-env.d.ts","**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],\n' +
//       '  "exclude": ["node_modules", "./generated"]\n' +
//       '}',
//     _type: 'code',
//     language: 'json',
//     _key: 'a49c2c3e20e2',
//     highlightedLines: [6],
//   },
//   {
//     _key: 'bc5f2b87ec96',
//     markDefs: [],
//     children: [
//       {
//         _type: 'span',
//         marks: ['strong'],
//         text: 'Conclusion:',
//         _key: '4a2cca2a49150',
//       },
//     ],
//     _type: 'block',
//     style: 'h2',
//   },
//   {
//     children: [
//       {
//         marks: [],
//         text: "In this blog post, we've explored how code generation can streamline the integration of GraphQL APIs with Next.js projects. By automating the generation of type definitions and query builders, codegen simplifies the development process and ensures a seamless communication between the frontend and backend. Leveraging code generation tools like GraphQL Codegen enhances productivity, improves type safety, and reduces the overhead of manual code maintenance. Incorporating code generation into your Next.js projects can significantly boost development efficiency and streamline API integration.",
//         _key: '61922ffefdf4',
//         _type: 'span',
//       },
//     ],
//     _type: 'block',
//     style: 'normal',
//     _key: 'a104aae36330',
//     markDefs: [],
//   },
//   {
//     style: 'normal',
//     _key: '8a79150d68c7',
//     markDefs: [],
//     children: [{ marks: [], text: '', _key: 'f982fdba0e3c', _type: 'span' }],
//     _type: 'block',
//   },
//   {
//     markDefs: [],
//     children: [
//       {
//         _type: 'span',
//         marks: ['strong'],
//         text: 'Useful Links/Resources:',
//         _key: 'e58b0e620b890',
//       },
//     ],
//     _type: 'block',
//     style: 'normal',
//     _key: '76dad1df1bd9',
//   },
//   {
//     _key: '1cbb306140d0',
//     listItem: 'bullet',
//     markDefs: [
//       {
//         _type: 'link',
//         href: 'https://graphql-code-generator.com/',
//         _key: '3e77d4282b41',
//       },
//     ],
//     children: [
//       {
//         _key: 'c9c105b2ea420',
//         _type: 'span',
//         marks: ['3e77d4282b41'],
//         text: 'GraphQL Code Generator Documentation',
//       },
//     ],
//     level: 1,
//     _type: 'block',
//     style: 'normal',
//   },
//   {
//     level: 1,
//     _type: 'block',
//     style: 'normal',
//     _key: 'd11fd57fee1e',
//     listItem: 'bullet',
//     markDefs: [
//       {
//         _type: 'link',
//         href: 'https://nextjs.org/docs',
//         _key: '21706ce5f2b5',
//       },
//     ],
//     children: [
//       {
//         _type: 'span',
//         marks: ['21706ce5f2b5'],
//         text: 'Next.js Documentation',
//         _key: 'e24baf7df2560',
//       },
//     ],
//   },
//   {
//     level: 1,
//     _type: 'block',
//     style: 'normal',
//     _key: '1945dd6154a3',
//     listItem: 'bullet',
//     markDefs: [
//       {
//         _key: 'e45900335d5b',
//         _type: 'link',
//         href: 'https://marketplace.visualstudio.com/items?itemName=Prisma.vscode-graphql',
//       },
//     ],
//     children: [
//       {
//         marks: ['e45900335d5b'],
//         text: 'GraphQL: Syntax Highlighting VSCode Extension',
//         _key: '8ceea7944e640',
//         _type: 'span',
//       },
//     ],
//   },
//   {
//     children: [
//       {
//         _key: '885abbef66700',
//         _type: 'span',
//         marks: ['d775a9ca5e39'],
//         text: 'TypeScript Documentation',
//       },
//     ],
//     level: 1,
//     _type: 'block',
//     style: 'normal',
//     _key: '9cceff7ba6f5',
//     listItem: 'bullet',
//     markDefs: [
//       {
//         href: 'https://www.typescriptlang.org/docs/',
//         _key: 'd775a9ca5e39',
//         _type: 'link',
//       },
//     ],
//   },
// ];
