import { forwardRef } from 'react';

import type { SVGRProps } from './Icon';

export const Copy = forwardRef(({ title, titleId, ...props }: SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    className="icon"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 8V7c0-.943 0-1.414.293-1.707S11.057 5 12 5h5c.943 0 1.414 0 1.707.293S19 6.057 19 7v5c0 .943 0 1.414-.293 1.707S17.943 14 17 14h-1m-9 5h5c.943 0 1.414 0 1.707-.293S14 17.943 14 17v-5c0-.943 0-1.414-.293-1.707S12.943 10 12 10H7c-.943 0-1.414 0-1.707.293S5 11.057 5 12v5c0 .943 0 1.414.293 1.707S6.057 19 7 19"
    />
  </svg>
));
Copy.displayName = 'Copy';
