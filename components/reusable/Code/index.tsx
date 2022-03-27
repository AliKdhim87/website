import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight, a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import classNames from 'classnames/bind';

import styles from './Code.module.scss';
import { Typography } from '@/components/reusable';

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
      wrapLines={true}
      lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
    >
      {code}
    </SyntaxHighlighter>
  </>
);
