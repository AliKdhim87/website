import { PortableTextReactComponents } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import urlBuilder from '@sanity/image-url';
import Image from 'next/image';
import Link from 'next/link';

import { Anchor } from '../Anchor';
import { Blockquote } from '../Blockquote';
import { SnippetCodeType, BlockCode } from '../Code';
import { InlineCode } from '../InlineCode';
import { Typography } from '../Typography';
import { Heading } from '../Heading';

export const PortableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    code: ({ value: { language, code, highlightedLines } }: { value: SnippetCodeType }) => (
      <BlockCode language={language} code={code} highlightedLinesPosition={highlightedLines} />
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
          <Image
            loading="eager"
            src={imageUrl}
            alt={value.alt}
            width={width}
            height={height}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        ) : null;
      }
      return null;
    },
  },
  block: {
    h2: ({ children }) => {
      const id = String(children).toLowerCase().replaceAll(' ', '-');

      return (
        <Heading id={id} level={2} className="space-mb-2">
          <Link href={`#${id}`}>{children}</Link>
        </Heading>
      );
    },
    h3: ({ children }) => (
      <Heading level={3} className="space-mb-2">
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading level={4} className="space-mb-2">
        {children}
      </Heading>
    ),
    h5: ({ children }) => (
      <Heading level={5} className="space-mb-2">
        {children}
      </Heading>
    ),
    normal: ({ children }) => <Typography className="space-mb-1">{children}</Typography>,
    blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-color">
        <Typography>{children}</Typography>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-color">
        <Typography>{children}</Typography>
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
