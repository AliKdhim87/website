import { PortableTextReactComponents, PortableText, PortableTextProps } from '@portabletext/react';
import slugify from 'slugify';

import { Anchor } from '../Anchor';
import { Blockquote } from '../Blockquote';
import { SnippetCodeType, BlockCode } from '../Code';
import { InlineCode } from '../InlineCode';
import { Typography } from '../Typography';
import { Heading } from '../Heading';

import { MainImage } from './MainImage';

export interface PortableTextConfigProps {
  dataset?: string;
  projectId?: string;
}

export const portableTextConfig = ({ dataset, projectId }: PortableTextConfigProps) =>
  ({
    types: {
      code: ({ value: { language, code, highlightedLines } }: { value: SnippetCodeType }) => (
        <BlockCode language={language} code={code} highlightedLinesPosition={highlightedLines} />
      ),
      mainImage: ({ value }) => <MainImage dataset={dataset} value={value} projectId={projectId} />,
    },
    block: {
      h2: ({ children, value }) => {
        const id = slugify(value.children[0].text, { lower: true });

        return (
          <Heading id={id} level={2} className="space-mb-2">
            {children}
          </Heading>
        );
      },
      h3: ({ children, value }) => {
        const id = slugify(value.children[0].text, { lower: true });
        return (
          <Heading level={3} id={id} className="space-mb-2">
            {children}
          </Heading>
        );
      },
      h4: ({ children, value }) => {
        const id = slugify(value.children[0].text, { lower: true });
        return (
          <Heading level={4} id={id} className="space-mb-2">
            {children}
          </Heading>
        );
      },
      h5: ({ children, value }) => {
        const id = slugify(value.children[0].text, { lower: true });
        return (
          <Heading level={5} id={id} className="space-mb-2">
            {children}
          </Heading>
        );
      },
      h6: ({ children, value }) => {
        const id = slugify(value.children[0].text, { lower: true });
        return (
          <Heading level={6} id={id} className="space-mb-2">
            {children}
          </Heading>
        );
      },
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
  } as Partial<PortableTextReactComponents>);

type PortableTextComponentsProps = PortableTextProps & PortableTextConfigProps;

export const PortableTextComponents = ({
  value,
  onMissingComponent = false,
  ...restProps
}: PortableTextComponentsProps) => (
  <PortableText
    components={portableTextConfig({
      dataset: restProps?.dataset,
      projectId: restProps?.projectId,
    })}
    onMissingComponent={onMissingComponent}
    value={value}
    {...restProps}
  />
);
