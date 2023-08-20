'use client';

import classNames from 'classnames/bind';
import SyntaxHighlighter, { Light as SyntaxHighlighterLight } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/htmlbars';
import shell from 'react-syntax-highlighter/dist/esm/languages/hljs/shell';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';

import { Typography } from '../Typography';

import styles from './Code.module.scss';

SyntaxHighlighterLight.registerLanguage('html', html);
SyntaxHighlighterLight.registerLanguage('shell', shell);
SyntaxHighlighterLight.registerLanguage('sh', shell);
SyntaxHighlighterLight.registerLanguage('tsx', typescript);
SyntaxHighlighterLight.registerLanguage('jsx', typescript);

export type SnippetCodeType = {
  language: string;
  code: string;
};
const css = classNames.bind(styles);

export const BlockCode: React.FC<SnippetCodeType> = ({ language, code }) => (
  <>
    <Typography bodyWeight="bold" as="span" variant="body" className={css('code', 'space-p-1')}>
      {language}
    </Typography>
    <SyntaxHighlighter
      language={language}
      style={atomOneDark}
      showLineNumbers
      wrapLines
      lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
    >
      {code}
    </SyntaxHighlighter>
  </>
);
