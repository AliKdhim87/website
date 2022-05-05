import { PortableTextReactComponents } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import urlBuilder from '@sanity/image-url';
import Image from 'next/image';

import { Typography, InlineCode, SnippetCodeType, BlockCode, Blockquote, Anchor } from '..';

export const PortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    code: ({ value: { language, code } }: { value: SnippetCodeType }) => <BlockCode language={language} code={code} />,
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
    h3: ({ children }) => (
      <Typography as="h3" variant="h3" className="space-mb-2">
        {children}
      </Typography>
    ),
    normal: ({ children }) => (
      <Typography as="p" variant="body" className="space-mb-1">
        {children}
      </Typography>
    ),
    blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
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
  marks: {
    link: ({ children, value }) => (
      <Anchor href={value.href} target="_blank" rel="noreferrer">
        {children}
      </Anchor>
    ),
    code: ({ children }) => <InlineCode>{children}</InlineCode>,
  },
};
