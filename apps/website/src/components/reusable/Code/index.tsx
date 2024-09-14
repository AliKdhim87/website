import 'highlight.js/styles/github-dark.css';

import { createElement } from 'react';

import classNames from 'classnames/bind';
import hljs from 'highlight.js';
import xss from 'xss';

import styles from './Code.module.scss';
import { Clipboard } from '../Clipboard';
import { Typography } from '../Typography';

export type SnippetCodeType = {
  language: string;
  code: string;
  highlightedLines: number[];
};

const css = classNames.bind(styles);
interface CodeHighlighterProps {
  code: string;
  language: string;
  highlightedLinesPosition: number[];
}

type RenderHighlightedLinesProps = CodeHighlighterProps;

const renderHighlightedLines = ({ code, language, highlightedLinesPosition }: RenderHighlightedLinesProps) => {
  const codeLines = code.split('\n');
  const highlightedLines = codeLines.map((line, index) => {
    if (Array.isArray(highlightedLinesPosition) && highlightedLinesPosition.includes(index + 1)) {
      return `<span class="${css('line-highlight')}">${line}</span>`;
    }
    return line;
  });

  const highlightedCode = highlightedLines.join('\n');

  return createElement('code', {
    className: css('code-highlighter__code', `language-${language}`),
    dangerouslySetInnerHTML: {
      __html: xss(highlightedCode, {
        allowList: { span: ['class'] },
      }),
    },
  });
};
export const BlockCode = ({ code, language, highlightedLinesPosition }: CodeHighlighterProps) => {
  const hljsCode = hljs.highlight(code, { language }).value;
  return (
    <div className={css('code-highlighter')}>
      <div className={css('code-highlighter__header')}>
        {language && <Typography as="span">{language.toUpperCase()}</Typography>}
        {code && <Clipboard code={code} />}
      </div>
      <pre className={css('code-highlighter__pre')}>
        {renderHighlightedLines({ code: hljsCode, language, highlightedLinesPosition })}
      </pre>
    </div>
  );
};
