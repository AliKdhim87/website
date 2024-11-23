import { type ForwardedRef, forwardRef } from 'react';

import type { SVGRProps } from './Icon';
export const HamburgerIcon = forwardRef(({ title, titleId, ...props }: SVGRProps, ref: ForwardedRef<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    className="icon"
    aria-labelledby={titleId}
    ref={ref}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 18h7M4 6h16zm0 6h16z"
    />
  </svg>
));
HamburgerIcon.displayName = 'HamburgerIcon';
