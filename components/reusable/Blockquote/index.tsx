import classNames from 'classnames/bind';
import { BlockquoteHTMLAttributes, DetailedHTMLProps } from 'react';

import styles from './Blockquote.module.scss';

import { Typography } from '@/components/reusable';

const css = classNames.bind(styles);

type BlockquoteProps = DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;

export const Blockquote: React.FC<BlockquoteProps> = ({ children }) => (
  <blockquote className={css('blockquote')}>
    <Typography as="p" variant="body" bodySize="mobile">
      {children}
    </Typography>
  </blockquote>
);
