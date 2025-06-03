import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import classnames from 'classnames/bind';

import styles from './styles.module.scss';

const css = classnames.bind(styles);

export const LogoWrapper = forwardRef(({ children }: PropsWithChildren) => (
  <div className={css('ali-dev-logo-wrapper')}>{children}</div>
));
LogoWrapper.displayName = 'LogoWrapper';
