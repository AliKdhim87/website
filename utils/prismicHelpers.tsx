import Link from 'next/link';
import { ReactChild, ReactFragment, ReactPortal, Key } from 'react';
import { linkResolver } from './prismicConfiguration';

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (
  type: any,
  element: { data: any },
  content:
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined,
  children: any,
  index: Key | null | undefined
) => (
  <Link key={index} href={linkResolver(element.data)}>
    <a>{content}</a>
  </Link>
);
