import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from './index.module.scss';

const css = classNames.bind(styles);

export interface LayoutContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
/**
 * @description
 * LayoutContainer is a wrapper component that structures the main page layout,
 * ensuring a sticky footer that stays at the bottom of the viewport.
 *
 * It uses CSS Grid with three rows: header, main content, and footer. The layout
 * expands to full viewport height, balancing the content and keeping the footer in place.
 *
 * Usage: Place `Nav` at the top, main content in the center, and `Footer` at the bottom.
 * @example
 * <LayoutContainer>
 *   <Nav />
 *   <Main>{children}</Main>
 *   <Footer />
 * </LayoutContainer>
 */

export const LayoutContainer = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<LayoutContainerProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div className={css('ali-dev-layout-container')} ref={ref} {...restProps}>
      {children}
    </div>
  ),
);

LayoutContainer.displayName = 'LayoutContainer';
