'use client';
import { useState } from 'react';

import copy from 'copy-to-clipboard';

import { Copy, Check } from '../icons';

interface ClipboardProps {
  code: string;
}

export const Clipboard = ({ code }: ClipboardProps) => {
  const [clipboardStatus, setClipboardStatus] = useState<'copy' | 'check'>('copy');
  return (
    <button
      type="button"
      aria-label="Copy code"
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
