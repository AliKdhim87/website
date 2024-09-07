'use client';

import dynamic from 'next/dynamic';

export { Heading } from './Heading';
export { PortableText } from '@portabletext/react';
export { Clipboard } from './Clipboard';
export * from './Anchor';
export * from './Backdrop';
export * from './Badge';
export * from './Blockquote';
export * from './blogPostTitle';
export * from './Button';
export * from './Card';
export * from './Code';
export * from './Container';
export * from './CTA';
export * from './Form';
export * from './FormGroup';
export * from './GraphComments';
export * from './Grid';
export * from './HelperText';
export * from './icons/Icon';
export * from './InlineCode';
export * from './InputField';
export * from './Label';
export * from './PortableTextComponents';
export * from './SVGWrapper';
export * from './Textarea';
export * from './Typography';
export const TOC = dynamic(
  async () => {
    const Component = (await import('./TOC')).TOC;
    return { default: Component };
  },
  { ssr: false },
);
export * from './Details';
