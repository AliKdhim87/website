import { useState } from 'react';

import classNames from 'classnames/bind';
import copy from 'copy-to-clipboard';

import styles from './Clipboard.module.scss';
import { Copy, Check } from '../icons';

const css = classNames.bind(styles);

interface ClipboardProps {
  code: string;
}

export const Clipboard = ({ code }: ClipboardProps) => {
  const [clipboardStatus, setClipboardStatus] = useState<'copy' | 'check'>('copy');
  return (
    <button
      type="button"
      aria-label="Copy code"
      className={css('clipboard')}
      onClick={() => {
        setClipboardStatus('check');
        copy(code);
        setTimeout(() => {
          setClipboardStatus('copy');
        }, 1000);
      }}
    >
      {clipboardStatus === 'copy' ? <Copy /> : <Check />}
    </button>
  );
};
