import { PortableTextReactComponents, PortableText, PortableTextProps } from '@portabletext/react';
import merge from 'lodash.merge';
import slugify from 'slugify';

import { Anchor } from '../Anchor';
import { Blockquote } from '../Blockquote';
import { SnippetCodeType, BlockCode } from '../Code';
import { Heading } from '../Heading';
import { InlineCode } from '../InlineCode';
import { ListItem } from '../List';
import { Typography } from '../Typography';

export const portableTextConfig = () =>
  ({
    types: {
      code: ({ value: { language, code, highlightedLines } }: { value: SnippetCodeType }) => (
        <BlockCode language={language} code={code} highlightedLinesPosition={highlightedLines} />
      ),
    },
    block: {
      h1: ({ children }) => <Heading level={1}>{children}</Heading>,
      h2: ({ children, value }) => {
        const id = slugify(value.children[0].text, { lower: true });
        return (
          <Heading id={id} level={2}>
            {children}
          </Heading>
        );
      },
      h3: ({ children, value }) => {
        const id = slugify(value.children[0].text, { lower: true });
        return (
          <Heading level={3} id={id}>
            {children}
          </Heading>
        );
      },
      h4: ({ children, value }) => {
        const id = slugify(value.children[0].text, { lower: true });
        return (
          <Heading level={4} id={id}>
            {children}
          </Heading>
        );
      },
      h5: ({ children, value }) => {
        const id = slugify(value.children[0].text, { lower: true });
        return (
          <Heading level={5} id={id}>
            {children}
          </Heading>
        );
      },
      h6: ({ children, value }) => {
        const id = slugify(value.children[0].text, { lower: true });
        return (
          <Heading level={6} id={id}>
            {children}
          </Heading>
        );
      },
      normal: ({ children }) => <Typography className="space-mb-1">{children}</Typography>,
      blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
    },
    listItem: {
      bullet: ({ children }) => (
        <ListItem>
          <Typography dimension={false}>{children}</Typography>
        </ListItem>
      ),
      number: ({ children }) => <Typography dimension={false}>{children}</Typography>,
    },
    marks: {
      link: ({ children, value }) => (
        <Anchor href={value.href} target="_blank" rel="noreferrer">
          {children}
        </Anchor>
      ),
      code: ({ children }) => <InlineCode>{children}</InlineCode>,
    },
  }) as Partial<PortableTextReactComponents>;

type PortableTextComponentsProps = PortableTextProps;

export const PortableTextComponents = ({
  value,
  onMissingComponent = false,
  components,
  ...restProps
}: PortableTextComponentsProps) => (
  <PortableText
    components={merge(portableTextConfig(), components)}
    onMissingComponent={onMissingComponent}
    value={value}
    {...restProps}
  />
);
