import { BlockquoteHTMLAttributes, DetailedHTMLProps } from 'react';

import classNames from 'classnames/bind';

import styles from './Blockquote.module.scss';
import { Typography } from '../Typography';

const css = classNames.bind(styles);

type BlockquoteProps = DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;

export const Blockquote = ({ children }: BlockquoteProps) => (
  <blockquote className={css('blockquote')}>
    <Typography bodySize="mobile">{children}</Typography>
  </blockquote>
);
