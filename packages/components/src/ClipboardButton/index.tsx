import { ForwardedRef, forwardRef, useState } from 'react';

import classNames from 'classnames/bind';
import copy from 'copy-to-clipboard';

import styles from './index.module.scss';
import { Copy, Check } from '../icons';

const css = classNames.bind(styles);

enum ClipboardStatus {
  Copy = 'copy',
  Check = 'check',
}

interface ClipboardButtonProps {
  code: string;
  timeoutDuration?: number; // Optional prop to configure timeout duration
}

export const ClipboardButton = forwardRef<HTMLButtonElement, ClipboardButtonProps>(
  ({ code, timeoutDuration = 1000 }, ref: ForwardedRef<HTMLButtonElement>) => {
    const [clipboardStatus, setClipboardStatus] = useState<ClipboardStatus>(ClipboardStatus.Copy);

    const handleCopy = () => {
      try {
        if (copy(code)) {
          setClipboardStatus(ClipboardStatus.Check);
          setTimeout(() => {
            setClipboardStatus(ClipboardStatus.Copy);
          }, timeoutDuration);
        } else {
          throw new Error('Copy failed');
        }
      } catch (error) {
        console.error('Failed to copy:', error);
        setClipboardStatus(ClipboardStatus.Copy);
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-label="Copy code"
        className={css('ali-dev-clipboard-button')}
        onClick={handleCopy}
      >
        {clipboardStatus === ClipboardStatus.Copy ? <Copy /> : <Check />}
      </button>
    );
  },
);
ClipboardButton.displayName = 'ClipboardButton';
