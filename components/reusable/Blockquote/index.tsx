import classNames from 'classnames/bind';
import { BlockquoteHTMLAttributes, DetailedHTMLProps } from 'react';

import { Typography } from '../Typography';

import styles from './Blockquote.module.scss';

const css = classNames.bind(styles);

type BlockquoteProps = DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;

export const Blockquote = ({ children }: BlockquoteProps) => (
  <blockquote className={css('blockquote')}>
    <Typography bodySize="mobile">{children}</Typography>
  </blockquote>
);
