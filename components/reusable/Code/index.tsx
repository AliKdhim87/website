'use client';

import React, { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line import/first, import/no-extraneous-dependencies
import hljs from 'highlight.js';
// eslint-disable-next-line import/first, import/no-extraneous-dependencies
import 'highlight.js/styles/atom-one-dark.css';
// eslint-disable-next-line import/first, import/no-extraneous-dependencies
import 'highlight.js/lib/languages/diff';
import classNames from 'classnames/bind';
// eslint-disable-next-line import/no-extraneous-dependencies
import copy from 'copy-to-clipboard';

import { Typography } from '../Typography';

import styles from './Code.module.scss';

export type SnippetCodeType = {
  language: string;
  code: string;
};

const css = classNames.bind(styles);

// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
hljs.registerLanguage('diff', require('highlight.js/lib/languages/diff'));

interface CodeHighlighterProps {
  code: string;
  language: string;
}

export const BlockCode: React.FC<CodeHighlighterProps> = ({ code, language }) => {
  const codeRef = useRef<HTMLElement | null>(null);
  const [clipboardText, setClipboardText] = useState('Copy code');

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);
  return (
    <div className={css('code-highlighter')}>
      <div className={css('code-highlighter__header')}>
        <Typography variant="body" as="span">
          {language}
        </Typography>
        <button
          type="button"
          aria-label="Copy code"
          className={css('code-highlighter__clipboard')}
          onClick={() => {
            setClipboardText('Copied!');
            copy(code);
            setTimeout(() => {
              setClipboardText('Copy code');
            }, 1000);
          }}
        >
          {clipboardText}
        </button>
      </div>
      <pre>
        <code ref={codeRef} className={css(`language-${language}`)}>
          {code}
        </code>
      </pre>
    </div>
  );
};
